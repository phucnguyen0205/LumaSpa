// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locales = ['vi', 'en', 'zh', 'ko'];
  
  // Kiểm tra prefix có dấu @ theo đúng ảnh cấu trúc thư mục
  const isAdminRoute = locales.some(locale => pathname.startsWith(`/${locale}/mkt-@68`));

  if (isAdminRoute) {
    const currentLocale = pathname.split('/')[1];
    const adminBase = `/${currentLocale}/mkt-68`;
    const token = request.cookies.get('admin_token')?.value;

    if (!token && pathname !== `${adminBase}/login`) {
      return NextResponse.redirect(new URL(`${adminBase}/login`, request.url));
    }
  }

  return NextResponse.next();
}