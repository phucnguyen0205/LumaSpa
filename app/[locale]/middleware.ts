import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["vi", "en", "zh", "ko"];
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🔥 1. Bỏ qua file tĩnh
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 🔥 2. XỬ LÝ ROOT "/" (AUTO DETECT + COOKIE)
  if (pathname === "/") {
    const cookieLocale = request.cookies.get("locale")?.value;

    // nếu đã có cookie → dùng lại
    if (cookieLocale && locales.includes(cookieLocale)) {
      return NextResponse.redirect(
        new URL(`/${cookieLocale}`, request.url)
      );
    }

    // detect từ browser
    const lang = request.headers.get("accept-language") || "";

    let locale = "vi";
    if (lang.includes("en")) locale = "en";
    else if (lang.includes("ko")) locale = "ko";
    else if (lang.includes("zh")) locale = "zh";

    const response = NextResponse.redirect(
      new URL(`/${locale}`, request.url)
    );

    // lưu cookie
    response.cookies.set("locale", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 năm
    });

    return response;
  }

  // 🔥 3. ADMIN ROUTE PROTECTION
  const currentLocale = pathname.split("/")[1];

  const isAdminRoute = locales.some((locale) =>
    pathname.startsWith(`/${locale}/mkt-68`)
  );

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