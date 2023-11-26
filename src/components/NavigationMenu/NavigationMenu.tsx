'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  ShoppingBagIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline'

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Products', href: '/products', icon: ShoppingBagIcon },
  {
    name: 'About us',
    href: '/about',
    icon: ChatBubbleBottomCenterIcon,
  },
]

export default function NavigationMenu() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const Icon = link.icon

        return (
          <Link
            key={link.name}
            href={link.href}
            style={{
              color: pathname === link.href ? 'darkblue' : 'black',
            }}
          >
            <Icon
              style={{
                height: '1.5rem',
                width: '1.5rem',
              }}
            />
            <p>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
