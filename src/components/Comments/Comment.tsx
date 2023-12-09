import Avatar from '@/components/UI/Avatar/Avatar'
import type { Joke } from '@/lib/definitions'

export default function Comment({ id, text }: Joke) {
  return (
    <li className="mb-4 flex items-start">
      <div className="z-10 -mr-2 flex-shrink-0">
        <Avatar alt={id} size={50} />
      </div>

      <div className="rounded-lg bg-white p-4 shadow-lg">
        <p>{text}</p>
      </div>
    </li>
  )
}

export function CommentSkeleton() {
  return (
    <li className="mb-4 flex animate-pulse items-start">
      <div className="mr-2 h-12 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>

      <div className="w-full rounded-lg bg-white p-4 shadow-lg">
        <div className="h-4 w-full rounded bg-gray-300"></div>
        <div className="mt-2 h-4 w-3/4 rounded bg-gray-300"></div>
        <div className="mt-2 h-4 w-1/2 rounded bg-gray-300"></div>
      </div>
    </li>
  )
}
