import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Supported locales
  const locales = ['de']
  const defaultLocale = 'en'

  // Check if pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Exclude system paths and assets
  const isAsset = 
    pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?|pdf)$/) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt'

  if (isAsset) {
    return NextResponse.next()
  }

  // Rewrite internally: e.g. /akuris -> /en/akuris
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    // Match all paths except folders with static contents
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.svg|.*\\.ico|.*\\.webp|.*\\.pdf).*)',
  ],
}
