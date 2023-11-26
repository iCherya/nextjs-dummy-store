import Link from 'next/link'
import { lusitana } from '@/ui/fonts'

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
    <nav>
      <ul className={lusitana.className}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} aria-current={breadcrumb.active}>
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? <span>/</span> : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}
