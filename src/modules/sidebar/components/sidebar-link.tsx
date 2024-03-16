import { usePathname } from 'next/navigation'
import { cn } from '@/shared/lib'
import Link from 'next/link'

import { TSidebarLink } from '../models'
import { isLinkActive } from '../lib'

interface Props {
  link: TSidebarLink
}

export function SidebarLink({ link }: Props) {
  const pathname = usePathname()
  const Icon = link.icon

  const isActive = isLinkActive(pathname, link.to)

  return (
    <Link
      className={cn(
        'flex items-center gap-3 text-neutral-500',
        isActive && 'font-medium text-neutral-800 lg:border-r-4 lg:border-primary'
      )}
      href={link.to}
    >
      <Icon className={cn(isActive && 'text-primary')} size={20} />

      <span className="hidden lg:block">{link.label}</span>
    </Link>
  )
}
