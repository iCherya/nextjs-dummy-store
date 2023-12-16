import { FaceFrownIcon } from '@heroicons/react/24/outline'
import * as Sentry from '@sentry/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import Button from '@/components/UI/Button/Button'
import Content from '@/components/UI/Content/Content'
import Heading from '@/components/UI/Heading/Heading'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
  children: React.ReactNode
}

export default function ErrorHolder({ error, reset, children }: Props) {
  const router = useRouter()

  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <Content className="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <Heading type={2} className="text-xl font-semibold">
        Something went wrong!
      </Heading>

      {children}

      <div className="flex gap-1">
        <Button
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          onClick={() => reset()}
          text="Try again"
        />

        <Button
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          onClick={() => router.push('/')}
          text="Go to Main Page"
        />
      </div>
    </Content>
  )
}
