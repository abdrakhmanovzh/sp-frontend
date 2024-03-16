import Link from 'next/link'

import { TNavLink } from '../models'

interface Props {
  link: TNavLink
}

export function NavLink({ link }: Props) {
  return (
    <Link href={link.href}>
      <span className="relative text-lg hover:text-primary">{link.name}</span>
    </Link>
  )
}
