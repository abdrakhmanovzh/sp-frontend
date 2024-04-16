'use client'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/cn'
import Link from 'next/link'

const links = [
  {
    label: 'Find a tutor',
    href: '/login'
  },
  {
    href: '#how-it-works',
    label: 'How it works'
  },
  {
    href: '#about',
    label: 'About'
  }
]

export function AuthHeaderLinks() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col items-start gap-4 text-sm md:flex-row md:items-center lg:gap-10">
      {links.map((link) => (
        <Link
          className={cn(
            'text-foreground transition-colors hover:text-foreground/80 dark:text-foreground/60 dark:hover:text-foreground/80',
            pathname === link.href && 'text-foreground'
          )}
          href={link.href}
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
