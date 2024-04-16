import { Logo } from '@/components/core/logo'
import Link from 'next/link'

export function TextLogo() {
  return (
    <Link className="flex items-center gap-2" href="/">
      <Logo /> |<h1 className="text-lg font-medium text-foreground">learnhub</h1>
    </Link>
  )
}
