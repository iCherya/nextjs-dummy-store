import Image from 'next/image'

import Heading from '@/components/UI/Heading/Heading'
import Avatar from '@/components/UI/Avatar/Avatar'
import { formatDate } from '@/lib/utils'

type Props = {
  data: {
    title: string
    date: string
    author: {
      name: string
      picture: string
    }
    coverImage: string
    content: string
  }
  content: string
}

export default function Post({ data, content }: Props) {
  const { title, date, author, coverImage } = data
  const { name, picture } = author

  return (
    <>
      <Heading type={1}>{title}</Heading>
      <div className="my-2 flex flex-col sm:flex-row gap-2">
        <Avatar src={picture} alt={name} size={48} />

        <div>
          <p className="text-gray-500">{formatDate(date)}</p>
          <p className="text-gray-500">by {name}</p>
        </div>
      </div>

      <article>
        <div className="h-96 w-96 relative shadow mr-5 float-left rounded-lg overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>

        <div
          className="w-full [&>*]:my-4"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </article>
    </>
  )
}
