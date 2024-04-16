'use client'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { logout } from '@/lib/auth/actions'

export function LogoutButton() {
  const handleSignout = async () => {
    await logout()
  }

  return (
    <DropdownMenuItem onClick={handleSignout}>
      <div className="flex items-center gap-2">Sign Out</div>
    </DropdownMenuItem>
  )
}
