'use client'

import { TUserRole } from '@/modules/user'

import { studentLinks, tutorLinks } from '../lib'
import { SidebarLink } from './sidebar-link'

interface Props {
  role: TUserRole
}

export function SidebarLinks({ role }: Props) {
  const links = role === TUserRole.STUDENT ? studentLinks : tutorLinks

  return (
    <ul className="flex flex-col gap-10 lg:w-full">
      {links.map((link) => (
        <li key={link.to}>
          <SidebarLink link={link} />
        </li>
      ))}
    </ul>
  )
}
