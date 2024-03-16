import { HeaderText } from './header-text'
import { UserMenu } from './user-menu'

export function Header() {
  return (
    <header className="flex h-24 w-full items-center justify-between border-b border-neutral-200 bg-white px-5 lg:px-8">
      <HeaderText />

      <UserMenu />
    </header>
  )
}
