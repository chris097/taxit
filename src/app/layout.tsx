import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import logo from './logo.png'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Taxit | Homepage',
  description: 'Taxit UI design implemented by Christian Chiemela with Next.JS, Typyescript, React-Testing-Library, TailwindCSS and Framer Motion',
  icons: {
    icon: './logo.svg',
  }
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
