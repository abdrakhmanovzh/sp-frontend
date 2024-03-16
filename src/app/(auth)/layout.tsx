import type { Metadata } from 'next'

import { Navbar } from '@/modules/navbar'
import { Footer } from '@/modules/footer'
import { Inter } from 'next/font/google'
import { cn } from '@/shared/lib'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'learnhub | start learning today'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, 'max-w-screen flex min-h-screen flex-col bg-base-white')}
      >
        <Navbar />
        <main className="flex flex-1 flex-col p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
