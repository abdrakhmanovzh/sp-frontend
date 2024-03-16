import { TextLogo } from '@/modules/core/components'

import { LoginButton } from './login-button'
import { NavLinks } from './nav-links'
import { NavSheet } from './nav-sheet'

export function Navbar() {
  return (
    <nav className="flex h-20 items-center justify-between border-b border-neutral-200 bg-white px-4 lg:px-[15%]">
      <TextLogo />

      <div className="hidden gap-10 lg:flex">
        <NavLinks />

        <LoginButton />
      </div>

      <div className="block lg:hidden">
        <NavSheet />
      </div>
    </nav>
  )
}
