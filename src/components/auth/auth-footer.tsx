import { TextLogo } from '@/components/core/text-logo'
import Link from 'next/link'

export function AuthFooter() {
  return (
    <footer className="border-t p-4 md:px-[10%] lg:px-[15%] lg:py-2">
      <div className="flex flex-row items-center justify-between gap-4">
        <TextLogo />

        <div className="flex flex-col items-center gap-6 text-sm text-foreground dark:text-foreground/60 lg:flex-row lg:gap-12">
          <Link className="hover:text-foreground/80" href="/terms">
            Terms of Use
          </Link>
          <Link className="hover:text-foreground/80" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="underline hover:text-foreground/80" href={'mailto:mail@example.com'}>
            mail@example.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
