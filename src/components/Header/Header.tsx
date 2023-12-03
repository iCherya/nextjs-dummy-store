'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  ShoppingBagIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeIconSolid,
  ShoppingBagIcon as ShoppingBagIconSolid,
  ChatBubbleBottomCenterIcon as ChatBubbleBottomCenterIconSolid,
} from '@heroicons/react/24/solid'

import { tss } from 'tss-react'

const links = [
  { name: 'Home', href: '/', icon: [HomeIcon, HomeIconSolid] },
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
]

const useStyles = tss.create({
  header: {
    minHeight: '4rem',
    width: '100%',
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
  },
  layoutWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '0 1rem',
    maxWidth: '1200px',
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
    padding: '0.5rem',
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
        <div className={classes.logo}>Whimsy Wonders</div>

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
