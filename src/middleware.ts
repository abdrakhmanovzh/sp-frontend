import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function middleware(req: NextRequest) {
  const access_token = cookies().get('token')

  if (access_token?.value) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }
}

export const config = {
  matcher: ['/login', '/register', '/']
}
