import type { Metadata } from 'next'

import { Sidebar } from '@/modules/sidebar'
import { Header } from '@/modules/header'
import { Inter } from 'next/font/google'
import { cn } from '@/shared/lib'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'learnhub | home'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'max-w-screen grid h-screen grid-cols-6 bg-base-white')}>
        <Sidebar />
        <div className="col-span-5 flex flex-col">
          <Header />
          <main className="custom-scroll max-h-[calc(100svh_-_96px)] flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
