import { Button } from '@/shared/components/ui/button'
import Link from 'next/link'

export function LoginButton() {
  return (
    <Button
      className="ring-primary text-primary bg-white text-lg font-bold ring-1 hover:bg-white"
      asChild
    >
      <Link href="/login">Sign In</Link>
    </Button>
  )
}
