import clsx from 'clsx'

type Props = {
  text: string
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export default function Button({
  text,
  onClick,
  disabled,
  className = '',
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={clsx(
        'font-medium rounded-lg text-sm px-5 py-2.5 items-center inline-flex',
        {
          'cursor-not-allowed bg-slate-200 text-neutral-400': disabled,
          'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300':
            !disabled,
        },
        className,
      )}
    >
      {text}
    </button>
  )
}
