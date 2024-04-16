import {
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenu
} from '@/components/ui/dropdown-menu'
import { getUser } from '@/lib/auth/queries'
import { User } from 'lucide-react'
import Link from 'next/link'

import { LogoutButton } from './logout-button'

export async function UserMenu() {
  const user = await getUser()

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
            <User />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            {user?.name} {user?.surname}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/messages">Messages</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <LogoutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
