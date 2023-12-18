import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

import type { DBPost, Post } from '@/lib/definitions'

import { createClient } from './supabase'

export const getAllPostsFromDb = async () => {
  const supabase = createClient()
  const { data: posts } = await supabase.from('posts').select('*')

  if (!posts) {
    return []
  }

  return posts as DBPost[]
}

const getPostBySlugFromDb = async (slug: string): Promise<DBPost | null> => {
  const supabase = createClient()
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()

  return post
}

const preparePost = (postDataFromDB: DBPost, fields: string[]) => {
  const { slug, content: postContent } = postDataFromDB
  const { data, content } = matter(postContent)

  const post: { [key: string]: string } = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = slug
    }
    if (field === 'content') {
      post[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      post[field] = data[field]
    }
  })

  return post as unknown as Post
}

export async function getAllPosts(fields: string[] = []) {
  const postsFromDB = await getAllPostsFromDb()
  const posts = postsFromDB.map((post) => preparePost(post, fields))

  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const postFromDB = await getPostBySlugFromDb(slug)

  if (!postFromDB) {
    return null
  }

  return preparePost(postFromDB, fields)
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
