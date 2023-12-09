type Props = {
  className?: string
}

export default function Divider({ className = '' }: Props) {
  return (
    <hr
      className={`mx-auto my-5 h-1 w-48 rounded border-0 bg-gray-100 ${className}`}
    />
  )
}
