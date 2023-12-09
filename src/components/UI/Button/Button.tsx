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
        'inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium',
        {
          'cursor-not-allowed bg-slate-200 text-neutral-400': disabled,
          'bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300':
            !disabled,
        },
        className,
      )}
    >
      {text}
    </button>
  )
}
