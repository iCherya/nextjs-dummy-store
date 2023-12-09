import Link from 'next/link'
import Image from 'next/image'

import type { Post } from '@/lib/definitions'
import { getAllPosts } from '@/lib/api/blog'
import { truncate } from '@/lib/utils'

type Props = {
  size?: number
}

export default async function PostsList({ size }: Props) {
  const posts: Post[] = getAllPosts([
    'slug',
    'title',
    'description',
    'coverImage',
  ])

  if (!posts) {
    return <p>No posts found.</p>
  }

  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {posts.slice(0, size ?? posts.length).map((post, index) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="flex p-2 flex-col items-center shadow-md hover:shadow-xl transition-all duration-200 ease-in-out border overflow-hidden"
          >
            <div className="h-36 w-full relative">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>

            <p className="text-center p-3 text-lg ">{post.title}</p>
            <p className="text-center text-sm text-gray-500">
              {truncate(post.description)}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
