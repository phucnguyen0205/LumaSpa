"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Globe, Menu, X, Phone, ChevronDown } from "lucide-react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "vi", label: "VI" },
  { code: "en", label: "EN" },
  { code: "zh", label: "ZH" },
  { code: "ko", label: "KO" },
];
const SERVICES_LIST = [
  { key: "thai_massage", slug: "thai-massage-da-nang" },
  { key: "hot_stone", slug: "hot-stone-massage-da-nang" },
  { key: "neck_shoulder", slug: "neck-shoulder-massage-da-nang" },
  { key: "body_massage", slug: "body-massage-da-nang" },
  { key: "foot_massage", slug: "foot-massage-da-nang" },
  { key: "traditional_wash", slug: "herbal-hair-wash-da-nang" },
  { key: "ocean_deep", slug: "ocean-abyss-scalp-therapy-da-nang" },
  { key: "combo_foot_neck", slug: "foot-neck-shoulder-combo-da-nang" },
  { key: "facial_care", slug: "facial-treatment-da-nang" },
];

export default function Header() {
  const { t } = useTranslation("header");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false); // State riêng cho mobile

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = (params.locale as string) || "vi";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = useCallback(
    (newLocale: string) => {
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
      router.push(newPath, { scroll: false });
      setIsOpen(false);
    },
    [pathname, locale, router]
  );
  const SERVICES_PATH = `/${locale}/spa-services`;
  const textColor = isScrolled ? "text-stone-900" : "text-white";

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href={`/${locale}`} className="text-3xl font-serif font-black tracking-tighter text-[#d48a1f]">
          LUMA<span className={isScrolled ? "text-stone-900" : "text-white"}>SPA</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link href={`/${locale}`} className={`text-[12px] uppercase font-serif font-bold tracking-[0.08em] transition hover:text-[#d48a1f] ${textColor}`}>{t("home")}</Link>
          <Link href={`/${locale}/about`} className={`text-[12px] uppercase font-serif font-bold tracking-[0.08em] transition hover:text-[#d48a1f] ${textColor}`}>{t("about")}</Link>

          {/* DỊCH VỤ - ĐÃ THÊM LINK CLICKABLE */}
          <div 
            className="relative group" 
            onMouseEnter={() => setShowServices(true)} 
            onMouseLeave={() => setShowServices(false)}
          >
            {/* Chuyển button thành Link để click dẫn về trang tổng */}
            <Link 
              href={SERVICES_PATH}
              className={`flex items-center gap-1 text-[12px] uppercase font-serif font-bold tracking-[0.08em] transition hover:text-[#d48a1f] ${textColor}`}
            >
              {t("services")}
              <ChevronDown size={14} className={`transition-transform duration-300 ${showServices ? "rotate-180" : ""}`} />
            </Link>

            <AnimatePresence>
              {showServices && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 w-[280px] bg-white shadow-2xl rounded-lg mt-2 border border-stone-100 overflow-hidden">
                  <ul className="py-2">
                    {SERVICES_LIST.map((item) => (
                      <li key={item.key}>
                        <Link href={`/${locale}/services/${item.slug}`} className="block px-6 py-3.5 font-serif font-bold text-[12px] text-stone-800 hover:bg-stone-50 hover:text-[#d48a1f] border-b border-stone-50 last:border-0 uppercase tracking-wider">
                          {t(item.key)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href={`/${locale}/news`} className={`text-[12px] uppercase font-serif font-bold tracking-[0.08em] transition hover:text-[#d48a1f] ${textColor}`}>{t("news")}</Link>
          <Link href={`/${locale}/contact`} className={`text-[12px] uppercase font-serif font-bold tracking-[0.08em] transition hover:text-[#d48a1f] ${textColor}`}>{t("contact")}</Link>
        </nav>

        {/* RIGHT SECTION DESKTOP (Giữ nguyên Dropdown) */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="relative group py-2">
            <button className={`flex items-center gap-2 text-[13px] font-serif font-bold tracking-widest transition hover:text-[#d48a1f] ${textColor}`}>
              <Globe size={18} className="text-[#d48a1f]" />
              <span className="uppercase text-[12px]">{locale}</span>
            </button>
            <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md border border-stone-100 min-w-[140px] font-serif overflow-hidden">
              {languages.map((lang) => (
                <button key={lang.code} onClick={() => changeLanguage(lang.code.toLowerCase())} className={`block px-5 py-3 text-xs w-full text-left font-bold transition hover:bg-stone-50 ${locale === lang.code.toLowerCase() ? "text-[#d48a1f] bg-stone-50" : "text-stone-700"}`}>
                  {lang.label === "VI" ? "Tiếng Việt" : lang.label === "EN" ? "English" : lang.label === "ZH" ? "中文" : "한국어"}
                </button>
              ))}
            </div>
          </div>
          <a
            href="tel:0876712808"
            className="flex items-center gap-1.5 text-[#d48a1f] font-serif font-bold text-[13px] hover:scale-105 transition-transform tracking-[0.05em]"
          >
            <Phone size={14} fill="currentColor" stroke="none" className="rotate-[12deg]" />
            HOTLINE
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button className={`lg:hidden p-1 transition-colors ${textColor}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col p-6 font-serif overflow-y-auto">
            <div className="flex justify-between items-center mb-10 pb-4 border-b border-stone-100">
              <span className="text-xl font-black tracking-tighter text-[#d48a1f]">LUMA SPA</span>
              <button onClick={() => setIsOpen(false)}><X size={30} className="text-stone-900" /></button>
            </div>
            
            <nav className="flex flex-col mb-10">
              {["home", "about", "services", "news", "contact"].map((key) => {
                const isServices = key === "services";
                return (
                  <div key={key} className="flex flex-col border-b border-stone-50">
                    <div className="flex justify-between items-center">
                      <Link href={`/${locale}/${key === "home" ? "" : key}`} onClick={() => !isServices && setIsOpen(false)} className="flex-1 py-5 text-xl font-bold text-stone-900 uppercase tracking-wide">
                        {t(key)}
                      </Link>
                      {isServices && (
                        <button onClick={() => setShowMobileServices(!showMobileServices)} className="p-4 text-[#d48a1f]">
                          <ChevronDown size={20} className={`transition-transform duration-300 ${showMobileServices ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {isServices && showMobileServices && (
                      <div className="bg-stone-50 px-4 flex flex-col pb-4">
                        {SERVICES_LIST.map((s) => (
                          <Link key={s.key} href={`/${locale}/services/${s.slug}`} onClick={() => setIsOpen(false)} className="py-4 text-[15px] font-bold text-stone-700 border-l-2 border-[#d48a1f]/30 pl-4 my-1">
                            {t(s.key)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
            {/* Footer Mobile: HOTLINE (Serif) & Ngôn ngữ (Hàng ngang) */}
            <div className="mt-auto pt-6 border-t border-stone-100 flex flex-col gap-10">
              <a href="tel:0876712808" className="flex items-center gap-2 text-[#d48a1f] font-serif font-bold text-2xl tracking-tight uppercase">
                HOTLINE
                <Phone size={24} fill="currentColor" stroke="none" className="rotate-[15deg]" />
              </a>

              <div className="flex items-center gap-8">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code.toLowerCase())}
                    className={`text-[16px] font-serif font-bold tracking-[0.15em] transition-all relative pb-1 ${
                      locale === lang.code.toLowerCase() 
                        ? "text-[#d48a1f] border-b-2 border-[#d48a1f]" 
                        : "text-stone-400"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}