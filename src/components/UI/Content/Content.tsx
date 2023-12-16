import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Content({ children, className }: Props) {
  return (
    <main className={clsx('mx-auto max-w-screen-lg p-5', className)}>
      {children}
    </main>
  )
}
