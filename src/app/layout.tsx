import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/core/theme-provider'
import { GeistSans } from 'geist/font/sans'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'learnhub | start learning now'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          disableTransitionOnChange
          defaultTheme="system"
          attribute="class"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
