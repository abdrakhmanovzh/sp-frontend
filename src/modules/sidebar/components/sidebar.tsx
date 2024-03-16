import { TextLogo, Logo } from '@/modules/core/components'
import { getUser } from '@/modules/auth/lib/actions'
import { TUserRole } from '@/modules/user'

import { SidebarLinks } from './sidebar-links'

export async function Sidebar() {
  const user = await getUser()

  return (
    <aside className="flex flex-col items-center gap-16 border-r border-neutral-200 bg-white py-8 lg:items-start lg:pl-[15%]">
      <div className="hidden w-full lg:flex">
        <TextLogo />
      </div>

      <div className="lg:hidden">
        <Logo />
      </div>

      <SidebarLinks role={user?.user_type_id as TUserRole} />
    </aside>
  )
}
