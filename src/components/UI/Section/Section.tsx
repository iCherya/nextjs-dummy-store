import { ReactNode } from 'react'
import clsx from 'clsx'

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
