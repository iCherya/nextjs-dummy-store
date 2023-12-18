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
  const post = await getPostBySlug(slug, [
    'slug',
    'title',
    'date',
    'author',
    'coverImage',
    'content',
  ])

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || '')

  return (
    <Content>
      <Post data={post} content={content} />
    </Content>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts(['slug'])

  return posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }))
}
