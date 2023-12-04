import { notFound } from 'next/navigation'

import Post from '@/components/Blog/Post/Post'
import Content from '@/components/UI/Content/Content'
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib/api/blog'

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const { slug } = params
  const post = getPostBySlug(slug, [
    'slug',
    'title',
    'date',
    'author',
    'coverImage',
    'content',
  ])

  const content = await markdownToHtml(post.content || '')

  if (!post) {
    return notFound()
  }

  return (
    <Content>
      <Post data={post} content={content} />
    </Content>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])

  return posts
}
