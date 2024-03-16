import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenu
} from '@/shared/components/ui/dropdown-menu'
import { AvatarImage, Avatar } from '@/shared/components/ui/avatar'
import { getUser } from '@/modules/auth/lib/actions'

import { LogoutButton } from './logout-button'

export async function UserMenu() {
  const user = await getUser()

  const imageLink = `https://ui-avatars.com/api/?name=${user?.first_name}+${user?.last_name}`

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2">
          <h3 className="hidden text-lg lg:block">{user?.first_name}</h3>

          <Avatar>
            <AvatarImage alt="User avatar" src={imageLink} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <LogoutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
