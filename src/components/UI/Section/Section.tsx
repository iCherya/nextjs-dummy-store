import { ReactNode } from 'react'
import Divider from '../Divider/Divider'

type Props = {
  children: ReactNode
}

export default function Section({ children }: Props) {
  return (
    <>
      <section className="my-10">{children}</section>
      <Divider />
    </>
  )
}
