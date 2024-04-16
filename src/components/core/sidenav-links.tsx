'use client'

import { TooltipProvider, TooltipContent, TooltipTrigger, Tooltip } from '@/components/ui/tooltip'
import { studentLinks, tutorLinks } from '@/lib/core/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/cn'
import Link from 'next/link'

interface Props {
  role?: 'STUDENT' | 'TEACHER'
}

export function SidenavLinks({ role }: Props) {
  const pathname = usePathname()

  const links = role === 'STUDENT' ? studentLinks : tutorLinks

  return (
    <TooltipProvider delayDuration={100}>
      {links.map((link) => (
        <Tooltip key={link.to}>
          <TooltipTrigger asChild>
            <Link
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground',
                pathname === link.to && 'bg-accent text-accent-foreground'
              )}
              href={link.to}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{link.label}</TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  )
}
