import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet'
import { AuthHeaderLinks } from '@/components/auth/auth-header-links'
import { Menu } from 'lucide-react'

export function AuthHeaderSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>

      <SheetContent className="pt-10">
        <AuthHeaderLinks />
      </SheetContent>
    </Sheet>
  )
}
