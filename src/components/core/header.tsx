import { HeaderBreadcrumb } from './header-breadcrumb'
import { ThemeToggle } from './theme-toggle'
import { UserMenu } from './user-menu'

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between gap-4 px-6">
      <HeaderBreadcrumb />

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <UserMenu />
      </div>
    </header>
  )
}
