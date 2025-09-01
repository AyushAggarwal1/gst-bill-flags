import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Public paths
const PUBLIC_PATHS = new Set([
  '/login',
  '/api/login',
  // allow gst-bill to read flags without admin login
])

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Allow feature reads for gst-bill without cookie
  if (pathname.startsWith('/api/tenants/') && pathname.endsWith('/features') && req.method === 'GET') {
    return NextResponse.next()
  }

  if (PUBLIC_PATHS.has(pathname) || pathname.startsWith('/_next') || pathname.startsWith('/public')) {
    return NextResponse.next()
  }

  const cookie = req.cookies.get('flags_admin')?.value
  if (!cookie) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api/tenants/[\w-]+/features).*)'],
}

