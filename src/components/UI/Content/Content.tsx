type Props = {
  children: React.ReactNode
}

export default function Content({ children }: Props) {
  return <main className="mx-auto max-w-screen-lg p-5">{children} </main>
}
