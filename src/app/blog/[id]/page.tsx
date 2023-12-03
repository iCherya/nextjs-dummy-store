import { notFound } from 'next/navigation'
import Image from 'next/image'

import Content from '@/components/UI/Content/Content'
import Heading from '@/components/UI/Heading/Heading'
import { formatDate } from '@/lib/utils'
import { getPostBySlug, markdownToHtml } from '@/lib/api/blog'

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const slug = params.id
  const post = getPostBySlug(slug, [
    'slug',
    'title',
    'date',
    'author',
    'coverImage',
    'content',
  ])

  const content = await markdownToHtml(post.content || '')
  const { title, date, author, coverImage } = post
  const { name, picture } = author

  if (!post) {
    return notFound()
  }

  return (
    <Content>
      <Heading type={1}>{title}</Heading>
      <div className="my-2">
        <div className="h-12 w-12 relative p-2 rounded-full overflow-hidden float-left mr-2">
          <Image src={picture} alt={name} fill />
        </div>

        <p className="text-gray-500">{formatDate(date)}</p>
        <p className="text-gray-500">By {name}</p>
      </div>

      <article className="">
        <div className="h-96 w-96 relative shadow mr-5 float-left rounded-lg overflow-hidden">
          <Image src={coverImage} alt={title} fill />
        </div>

        <div
          className="w-full [&>*]:my-4"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </article>
    </Content>
  )
}
