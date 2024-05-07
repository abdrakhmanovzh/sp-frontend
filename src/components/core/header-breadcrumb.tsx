'use client'

import {
  BreadcrumbSeparator,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  Breadcrumb
} from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import Link from 'next/link'

export function HeaderBreadcrumb() {
  const pathname = usePathname()

  const segments = pathname.split('/').filter((item) => item !== '')

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => (
          <Fragment key={index}>
            {segment !== 'dashboard' && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {index === segments.length - 1 ? (
                    <BreadcrumbLink asChild>
                      <Link className="capitalize" href={`/${segment}`}>
                        {segment}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="capitalize">{segment}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
