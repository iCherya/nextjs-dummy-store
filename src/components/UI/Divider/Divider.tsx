type Props = {
  className?: string
}

export default function Divider({ className = '' }: Props) {
  return (
    <hr
      className={`w-48 h-1 mx-auto my-5 bg-gray-100 border-0 rounded ${className}`}
    />
  )
}
