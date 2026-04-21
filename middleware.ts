import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["vi", "en", "zh", "ko"];
const DEFAULT_LOCALE = "en";
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Lấy locale từ Cookie
  const cookieLocale = request.cookies.get("locale")?.value;

  // 1. Bỏ qua file tĩnh
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 2. Xử lý Root "/" hoặc URL không có locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // ƯU TIÊN 1: Nếu đã có cookie (ví dụ 'ko'), lấy 'ko'. 
    // ƯU TIÊN 2: Nếu chưa có gì (lần đầu), lấy 'en'.
    const targetLocale = (cookieLocale && locales.includes(cookieLocale)) 
      ? cookieLocale 
      : DEFAULT_LOCALE;

    // Tạo URL mới (ví dụ: domain.com/ko hoặc domain.com/ko/about)
    const url = new URL(
      `/${targetLocale}${pathname === "/" ? "" : pathname}`, 
      request.url
    );
    
    const response = NextResponse.redirect(url);

    // Nếu lần đầu chưa có cookie, ta set luôn để ghi nhớ
    if (!cookieLocale) {
      response.cookies.set("locale", targetLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }

    return response;
  }

  // 3. Nếu URL đã có locale (ví dụ vào thẳng domain.com/ko)
  const currentLocaleInUrl = pathname.split("/")[1];
  const response = NextResponse.next();

  // CẬP NHẬT COOKIE: Nếu người dùng gõ URL hoặc nhấn nút chuyển vùng 
  // làm locale trên URL khác với Cookie, ta phải cập nhật Cookie ngay.
  if (cookieLocale !== currentLocaleInUrl) {
    response.cookies.set("locale", currentLocaleInUrl, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  // 4. Protect admin
  const isAdminRoute = pathname.startsWith(`/${currentLocaleInUrl}/mkt-68`);
  if (isAdminRoute) {
    const adminBase = `/${currentLocaleInUrl}/mkt-68`;
    const token = request.cookies.get("admin_token")?.value;
    if (!token && pathname !== `${adminBase}/login`) {
      return NextResponse.redirect(new URL(`${adminBase}/login`, request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};