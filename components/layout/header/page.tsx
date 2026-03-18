"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Globe, Menu, X, Phone } from "lucide-react";
import { useRouter, usePathname, useParams } from "next/navigation";

const languages = [
  { code: "vi", label: "Tiếng Việt" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ko", label: "한국어" },
];

// Danh sách menu chính - Key này phải khớp với Key trong file JSON của bạn
const NAV_ITEMS = [
  { key: "home", path: "" },
  { key: "about", path: "about" },
  { key: "services", path: "services" },
  { key: "news", path: "news" },
  { key: "contact", path: "contact" },
];

export default function Header() {
  // Sử dụng namespace 'header' hoặc 'common' tùy theo cấu trúc JSON của bạn
  const { t } = useTranslation("header"); 
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  
  const locale = (params.locale as string) || "vi";
useEffect(() => {
  const handleScroll = () => {
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
    });
  };
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  
  return () => window.removeEventListener("scroll", handleScroll);
}, [pathname]);
const changeLanguage = useCallback(
  (newLocale: string) => {
    const segments = pathname.split("/");

    if (languages.some((l) => l.code === segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/") || `/${newLocale}`;

    // 1. Lưu cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    // 2. Chuyển hướng nhưng giữ nguyên vị trí cuộn (scroll: false)
    router.push(newPath, { scroll: false }); 
    
    setIsOpen(false);
  },
  [pathname, router]
);
  const textColor = isScrolled ? "text-stone-800" : "text-white";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 font-sans ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link
          href={`/${locale}`}
          className="text-2xl font-extrabold tracking-tight text-amber-600"
        >
          LUMA<span className={isScrolled ? "text-stone-800" : "text-white"}>SPA</span>
        </Link>

        {/* DESKTOP MENU - Lấy text từ i18n JSON */}
        <nav className="hidden lg:flex items-center space-x-8">
  {NAV_ITEMS.map((item) => {
    const href = item.path === "" ? `/${locale}` : `/${locale}/${item.path}`;

    return (
      <Link
        key={item.key}
        href={href}
        // Thay font-sans bằng font-serif, tăng weight lên font-bold hoặc font-extrabold
        className={`text-[12px] uppercase font-serif font-bold tracking-[0.08em] transition hover:text-amber-500 ${textColor}`}
      >
        {t(item.key)}
      </Link>
    );
  })}
</nav>

        {/* RIGHT SECTION */}
        <div className="hidden lg:flex items-center space-x-6">
          
          {/* LANGUAGE PICKER */}
          <div className="relative group py-2">
            <button className={`flex items-center gap-1.5 text-sm font-medium transition hover:text-amber-500 ${textColor}`}>
              <Globe size={18} className="text-amber-500" />
              <span className="uppercase">{locale}</span>
            </button>

            <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-2xl rounded-md border border-stone-100 overflow-hidden min-w-[140px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`block px-4 py-2.5 text-xs w-full text-left transition hover:bg-amber-50 ${
                    locale === lang.code ? "text-amber-600 font-bold bg-amber-50" : "text-stone-600"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* HOTLINE */}
          <a
            href="tel:0876712808"
            className="flex items-center gap-2 text-amber-600 font-bold hover:scale-105 transition-transform"
          >
            <Phone size={18} />
            <span className="text-sm">0876 712 808</span>
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className={`lg:hidden p-1 ${textColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-2xl absolute top-full left-0 w-full p-6 space-y-5 flex flex-col animate-in slide-in-from-top duration-300">
          {NAV_ITEMS.map((item) => {
            const href = item.path === "" ? `/${locale}` : `/${locale}/${item.path}`;

            return (
              <Link
                key={item.key}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-stone-800 border-b border-stone-100 pb-2 active:text-amber-600"
              >
                {t(item.key)}
              </Link>
            );
          })}

          {/* Ngôn ngữ cho Mobile */}
          <div className="pt-4 flex flex-wrap gap-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition ${
                  locale === lang.code
                    ? "bg-amber-600 border-amber-600 text-white"
                    : "text-stone-500 border-stone-200"
                }`}
              >
                {lang.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hidden SEO content (Google-friendly) */}
      <div className="sr-only">
        Luma Spa Da Nang - Professional Foot and Body Massage services.
      </div>
    </header>
  );
}