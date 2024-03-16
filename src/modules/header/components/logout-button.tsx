'use client'

import { DropdownMenuItem } from '@/shared/components/ui/dropdown-menu'
import { logout } from '@/modules/auth/lib/actions'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export function LogoutButton() {
  const router = useRouter()

  const handleSignout = async () => {
    await logout()
    router.push('/login')
  }

  return (
    <DropdownMenuItem onClick={handleSignout}>
      <div className="flex items-center gap-2">
        <LogOut size={18} />
        logout
      </div>
    </DropdownMenuItem>
  )
}
