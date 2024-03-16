import { TNavLink } from '../models'
import { NavLink } from './nav-link'

const links: TNavLink[] = [
  {
    name: 'Find a tutor',
    href: '/find'
  },
  {
    href: '/blog',
    name: 'Blog'
  },
  {
    href: '/about',
    name: 'About'
  }
]

export function NavLinks() {
  return (
    <ul className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
      {links.map((link) => (
        <NavLink key={link.name} link={link} />
      ))}
    </ul>
  )
}
