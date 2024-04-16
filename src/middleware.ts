import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export default async function middleware(req: NextRequest) {
  const token = cookies().get('token')

  if ((req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/register') && token?.value) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  if (
    req.nextUrl.pathname !== '/login' &&
    req.nextUrl.pathname !== '/register' &&
    req.nextUrl.pathname !== '/' &&
    !token?.value
  ) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
