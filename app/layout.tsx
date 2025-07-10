import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ESHWA AI',
  description: 'ESHWA AI - Your AI Solutions Partner',
  generator: 'Next.js',
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark">
        {children}
      </body>
    </html>
  )
}
