import Link from 'next/link'

type Breadcrumb = {
  label: string
  href: string
  active?: boolean
}

type Props = {
  breadcrumbs: Breadcrumb[]
}

export default function Breadcrumbs({ breadcrumbs }: Props) {
  return (
    <nav className="flex px-5 py-3 text-gray-700">
      <ul className={'inline-flex items-center space-x-1 md:space-x-2'}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            className={`inline-flex items-center space-x-2 ${
              breadcrumb.active && 'text-gray-500'
            }`}
          >
            <Link
              href={breadcrumb.href}
              className={`hover:text-black" inline-flex items-center text-sm font-medium ${
                breadcrumb.active && 'text-gray-500'
              }`}
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 ? <span>/</span> : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}
