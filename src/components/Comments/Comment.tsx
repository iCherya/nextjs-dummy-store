import Avatar from '@/components/UI/Avatar/Avatar'
import type { Joke } from '@/lib/definitions'

export default function Comment({ id, text }: Joke) {
  return (
    <li className="flex items-start mb-4">
      <div className="flex-shrink-0 -mr-2 z-10">
        <Avatar alt={id} size={50} />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4">
        <p>{text}</p>
      </div>
    </li>
  )
}

export function CommentSkeleton() {
  return (
    <li className="flex items-start mb-4 animate-pulse">
      <div className="flex-shrink-0 mr-2 w-12 h-12 bg-gray-300 rounded-full"></div>

      <div className="bg-white shadow-lg rounded-lg p-4 w-full">
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="mt-2 w-3/4 h-4 bg-gray-300 rounded"></div>
        <div className="mt-2 w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>
    </li>
  )
}
