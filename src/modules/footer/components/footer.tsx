import { TextLogo } from '@/modules/core/components'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-[15%] py-3 lg:py-6">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
        <TextLogo />

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
          <Link href="/terms">Terms of Use</Link>
          <Link href="/privacy">Privacy Policy</Link>

          <a href={'mailto:mail@example.com'} className="underline">
            mail@example.com
          </a>
        </div>
      </div>
    </footer>
  )
}
