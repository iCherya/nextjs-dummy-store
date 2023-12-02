import type { Metadata } from 'next'
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir'

import { inter } from '@/ui/fonts'
import '@/ui/styles.css'
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu'

export const metadata: Metadata = {
  title: 'Whimsy Wonders',
  description: 'E-commerce project created for the purpose of learning Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
          <NavigationMenu />
          {children}
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  )
}
