import clsx from 'clsx'
import { ReactNode } from 'react'

import Divider from '@/components/UI/Divider/Divider'

type Props = {
  children: ReactNode
  className?: string
}

export default function Section({ children, className }: Props) {
  return (
    <>
      <section className={clsx('my-10', className)}>{children}</section>
      <Divider />
    </>
  )
}
