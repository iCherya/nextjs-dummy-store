import type { Metadata } from 'next'

import { inter } from '@/ui/fonts'
import '@/ui/styles.css'

export const metadata: Metadata = {
  title: 'Dummy Store',
  description: 'E-commerce project created for the purpose of learning Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
