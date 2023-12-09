type Props = {
  type: number
  className?: string
  children: React.ReactNode
}

export default function Heading({ type, children, className = '' }: Props) {
  const Tag = `h${type}` as keyof JSX.IntrinsicElements

  const headingClasses: { [key: number]: string } = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  }

  const textSize = headingClasses[type] || ''

  return (
    <Tag className={`${textSize} mb-5 text-center font-bold ${className}`}>
      {children}
    </Tag>
  )
}
