import Image from 'next/image'

import Heading from '@/components/UI/Heading/Heading'
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
    </>
  )
}
