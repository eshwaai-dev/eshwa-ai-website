import type { Metadata } from 'next'
import './globals.css'
import Chatbot from '@/components/chatbot/Chatbot';

export const metadata: Metadata = {
  title: 'Eshwa AI - AI Solutions for Modern Business',
  description: 'Helping businesses unlock real-world value with secure, ethical, and scalable AI solutions.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
