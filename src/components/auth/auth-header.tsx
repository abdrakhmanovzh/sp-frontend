import { ThemeToggle } from '@/components/core/theme-toggle'
import { TextLogo } from '@/components/core/text-logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import { AuthHeaderLinks } from './auth-header-links'
import { AuthHeaderSheet } from './auth-header-sheet'

export function AuthHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-[10%] lg:px-[15%]">
      <TextLogo />

      <div className="hidden md:block">
        <AuthHeaderLinks />
      </div>

      <div className="flex gap-2 md:hidden">
        <ThemeToggle />
        <AuthHeaderSheet />
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <ThemeToggle />
        <Button asChild>
          <Link href="/login">Start</Link>
        </Button>
      </div>
    </header>
  )
}
