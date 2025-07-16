import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

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
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="dark">
        {children}
      </body>
    </html>
  )
}
