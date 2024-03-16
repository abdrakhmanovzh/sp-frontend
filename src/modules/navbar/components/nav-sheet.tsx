import { SheetContent, SheetTrigger, Sheet } from '@/shared/components/ui/sheet'
import { Menu } from 'lucide-react'

import { LoginButton } from './login-button'
import { NavLinks } from './nav-links'

export function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>

      <SheetContent>
        <div className="mt-20 flex flex-col gap-10">
          <NavLinks />

          <LoginButton />
        </div>
      </SheetContent>
    </Sheet>
  )
}
