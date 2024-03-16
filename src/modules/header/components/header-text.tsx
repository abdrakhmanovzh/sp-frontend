'use client'

import { usePathname } from 'next/navigation'

export function HeaderText() {
  const pathname = usePathname()

  const path = pathname.split('/').filter((p) => p !== '')

  return <h1 className="text-xl font-medium capitalize lg:text-2xl">{path}</h1>
}
