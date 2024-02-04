import '@/ui/styles.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir'

import Header from '@/components/Header/Header'
import { inter } from '@/ui/fonts'

export const metadata: Metadata = {
  title: 'Whimsy Wonders',
  description: 'E-commerce project created for the purpose of learning Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  )
}
