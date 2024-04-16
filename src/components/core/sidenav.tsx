import { getUser } from '@/lib/auth/queries'
import { BookOpen } from 'lucide-react'

import { SidenavLinks } from './sidenav-links'

export async function Sidenav() {
  const user = await getUser()

  return (
    <aside className="fixed inset-y-0 left-0 z-10 flex w-16 flex-col border-r bg-background">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <button className="group mb-4 flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-base font-semibold text-primary-foreground">
          <BookOpen className="h-5 w-5 transition-all group-hover:scale-110" />
        </button>

        <SidenavLinks role={user?.role} />
      </nav>
    </aside>
  )
}
