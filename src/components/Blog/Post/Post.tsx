import Image from 'next/image'

import Avatar from '@/components/UI/Avatar/Avatar'
import Heading from '@/components/UI/Heading/Heading'
import { REMOTE_STORAGE } from '@/config/remoteStorage'
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
      <div className="my-2 flex flex-col gap-2 sm:flex-row">
        <Avatar
          src={`${REMOTE_STORAGE.BLOG_IMAGES}/${picture}`}
          alt={name}
          size={48}
        />

        <div>
          <p className="text-gray-500">{formatDate(date)}</p>
          <p className="text-gray-500">by {name}</p>
        </div>
      </div>

      <article>
        <div className="relative float-left mr-5 h-96 w-96 overflow-hidden rounded-lg shadow">
          <Image
            src={`${REMOTE_STORAGE.BLOG_IMAGES}/${coverImage}`}
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
