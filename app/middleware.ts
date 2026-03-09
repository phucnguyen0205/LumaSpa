import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ADMIN_PREFIX = '/mkt-@68';

  if (pathname.startsWith(ADMIN_PREFIX)) {
    const token = request.cookies.get('admin_token')?.value;
    if (!token && pathname !== `${ADMIN_PREFIX}/login`) {
      return NextResponse.redirect(new URL(`${ADMIN_PREFIX}/login`, request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};