import Image from 'next/image'
import Link from 'next/link'

import { REMOTE_STORAGE } from '@/config/remoteStorage'
import { getAllPosts } from '@/lib/api/blog'
import type { Post } from '@/lib/definitions'
import { truncate } from '@/lib/utils'

type Props = {
  size?: number
}

export default async function PostsList({ size }: Props) {
  const posts: Post[] = await getAllPosts([
    'slug',
    'title',
    'description',
    'coverImage',
  ])

  if (!posts || posts.length === 0) {
    return <p>No posts found.</p>
  }

  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {posts.slice(0, size ?? posts.length).map((post, index) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="flex flex-col items-center overflow-hidden border p-2 shadow-md transition-all duration-200 ease-in-out hover:shadow-xl"
          >
            <div className="relative h-36 w-full">
              <Image
                src={`${REMOTE_STORAGE.BLOG_IMAGES}/${post.coverImage}`}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>

            <p className="p-3 text-center text-lg">{post.title}</p>
            <p className="text-center text-sm text-gray-500">
              {truncate(post.description)}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
