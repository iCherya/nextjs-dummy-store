type Props = {
  text: string
  className?: string
}

export default function Button({ text, className = '' }: Props) {
  return (
    <button
      type="button"
      className={`${className} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2`}
    >
      {text}
    </button>
  )
}
