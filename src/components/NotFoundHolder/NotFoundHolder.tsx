import { FaceFrownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import Content from '@/components/UI/Content/Content'
import Heading from '@/components/UI/Heading/Heading'

type Props = {
  customLink?: {
    href: string
    label: string
    callToAction: string
  }
}

export default function NotFoundHolder({ customLink }: Props) {
  return (
    <Content className="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <Heading type={2} className="text-xl font-semibold">
        404 Not Found
      </Heading>
      <p>Could not find the requested {customLink?.label ?? 'page'}</p>

      <div className="flex gap-1">
        {customLink && (
          <Link
            href={customLink?.href}
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          >
            {customLink?.callToAction}
          </Link>
        )}

        <Link
          href="/"
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        >
          Go to Main Page
        </Link>
      </div>
    </Content>
  )
}
