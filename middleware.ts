import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["vi", "en", "zh", "ko"];
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Bỏ qua file tĩnh
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // ✅ 2. ÉP ROOT "/" → "/vi" (QUAN TRỌNG NHẤT)
  if (pathname === "/") {
    const response = NextResponse.redirect(new URL("/vi", request.url));

    response.cookies.set("locale", "vi", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });

    return response;
  }

  // 3. Check có locale chưa
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 4. Nếu chưa có locale → redirect
  if (!pathnameHasLocale) {
    const cookieLocale = request.cookies.get("locale")?.value;

    let locale = "vi";
    if (cookieLocale && locales.includes(cookieLocale)) {
      locale = cookieLocale;
    }

    const response = NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );

    response.cookies.set("locale", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });

    return response;
  }

  // 5. Protect admin
  const currentLocale = pathname.split("/")[1];
  const isAdminRoute = pathname.startsWith(`/${currentLocale}/mkt-68`);

  if (isAdminRoute) {
    const adminBase = `/${currentLocale}/mkt-68`;
    const token = request.cookies.get("admin_token")?.value;

    if (!token && pathname !== `${adminBase}/login`) {
      return NextResponse.redirect(
        new URL(`${adminBase}/login`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};