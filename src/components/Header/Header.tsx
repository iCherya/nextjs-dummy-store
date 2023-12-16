'use client'

import {
  BugAntIcon,
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import {
  BugAntIcon as BugAntIconSolid,
  ChatBubbleBottomCenterIcon as ChatBubbleBottomCenterIconSolid,
  DocumentTextIcon as DocumentTextIconSolid,
  ShoppingBagIcon as ShoppingBagIconSolid,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { tss } from 'tss-react'

const links = [
  {
    name: 'Products',
    href: '/products',
    icon: [ShoppingBagIcon, ShoppingBagIconSolid],
  },
  {
    name: 'About us',
    href: '/about',
    icon: [ChatBubbleBottomCenterIcon, ChatBubbleBottomCenterIconSolid],
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: [DocumentTextIcon, DocumentTextIconSolid],
  },
  {
    name: 'Errors',
    href: '/errors-page',
    icon: [BugAntIcon, BugAntIconSolid],
  },
]

const useStyles = tss.create({
  header: {
    minHeight: '4rem',
    width: '100%',
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent: 'center',
    position: 'sticky',
    opacity: 0.8,
    top: 0,
    zIndex: 100,
  },
  layoutWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '0 20px',
    maxWidth: '1024px',
    margin: '0 auto',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',

    '@media (max-width: 425px)': {
      display: 'none',
    },
  },
  list: {
    display: 'flex',
    listStyle: 'none',
    marginLeft: 'auto',
  },
  listItem: {
    transition: 'all 0.2s ease-in-out',
    textDecorationColor: 'transparent',

    ':hover': {
      textDecoration: 'underline',
    },
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
    padding: '1rem',

    '@media (max-width: 768px)': {
      ' > span': {
        display: 'none',
      },
    },
  },
  activeLink: {
    textShadow: '0px 0px 1px black',
  },
})

export default function Header() {
  const pathname = usePathname()
  const { cx, classes } = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.layoutWrapper}>
        <Link href="/">
          <div className={classes.logo}>Whimsy Wonders</div>
        </Link>

        <ul className={classes.list}>
          {links.map((link) => {
            const isActive = pathname === link.href
            const [OutlinedIcon, SolidIcon] = link.icon
            const Icon = isActive ? SolidIcon : OutlinedIcon

            return (
              <li key={link.name} className={classes.listItem}>
                <Link
                  href={link.href}
                  className={cx(classes.link, {
                    [classes.activeLink]: isActive,
                  })}
                >
                  <Icon style={{ height: '1.5rem', width: '1.5rem' }} />
                  <span>{link.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
