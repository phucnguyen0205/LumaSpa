"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Globe, Menu, X, Phone, ChevronDown, Play } from "lucide-react";
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
  const [showMobileServices, setShowMobileServices] = useState(false);

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

  // Khóa cuộn trang khi menu mở
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const changeLanguage = useCallback(
    (newLocale: string) => {
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
      router.push(newPath, { scroll: false });
      setIsOpen(false);
    },
    [pathname, locale, router]
  );

  const SERVICES_PATH = `/${locale}/services`;
  const textColor = isScrolled ? "text-stone-900" : "text-white";

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
        
        {/* VÙNG TỐI NỀN (GRADIENT OVERLAY) */}
        <div 
          className={`absolute inset-0 -z-10 transition-opacity duration-500 pointer-events-none ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)"
          }}
        />

        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          <Link href={`/${locale}`} className="relative block w-40 md:w-52 h-12 md:h-14 transition-all duration-400 hover:scale-105 origin-left">
            <motion.div initial={false} animate={{ opacity: isScrolled ? 0 : 1 }} transition={{ duration: 0.4 }} className="absolute inset-0">
              <Image src="/images/logo.png" alt="Luma Spa Logo Light" fill priority className="object-contain object-left" />
            </motion.div>
            <motion.div initial={false} animate={{ opacity: isScrolled ? 1 : 0 }} transition={{ duration: 0.4 }} className="absolute inset-0">
              <Image src="/images/logospa.png" alt="Luma Spa Logo Dark" fill priority className="object-contain object-left" />
            </motion.div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link href={`/${locale}`} className={`text-[12px] uppercase font-serif font-bold tracking-[0.08em] transition hover:text-[#d48a1f] ${textColor}`}>{t("home")}</Link>
            <Link href={`/${locale}/about`} className={`text-[12px] uppercase font-serif font-bold tracking-[0.08em] transition hover:text-[#d48a1f] ${textColor}`}>{t("about")}</Link>
            <div className="relative group" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
              <Link href={SERVICES_PATH} className={`flex items-center gap-1 text-[12px] uppercase font-serif font-bold tracking-[0.08em] transition hover:text-[#d48a1f] ${textColor}`}>
                {t("services")} <ChevronDown size={14} className={`transition-transform duration-300 ${showServices ? "rotate-180" : ""}`} />
              </Link>
              <AnimatePresence>
                {showServices && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 w-[320px] bg-white shadow-2xl rounded-lg mt-2 border border-stone-100 overflow-hidden">
                    <ul className="py-2">
                      {SERVICES_LIST.map((item) => (
                        <li key={item.key} className="flex items-center justify-between px-6 py-3.5 hover:bg-stone-50 border-b border-stone-50 last:border-0 group/item">
                          <Link href={`/${locale}/services/${item.slug}`} className="font-serif font-bold text-[12px] text-stone-800 group-hover/item:text-[#d48a1f] uppercase tracking-wider flex-grow">{t(item.key)}</Link>
                          <Link href={`/${locale}/services/${item.slug}#video-review`} className="ml-3 p-1.5 rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all transform group-hover/item:scale-110"><Play size={12} fill="currentColor" stroke="none" /></Link>
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

          {/* RIGHT SECTION DESKTOP */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group py-2">
              <button className={`flex items-center gap-2 text-[13px] font-serif font-bold tracking-widest transition hover:text-[#d48a1f] ${textColor}`}>
                <Globe size={18} className="text-[#d48a1f]" /> <span className="uppercase text-[12px]">{locale}</span>
              </button>
              <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md border border-stone-100 min-w-[140px] font-serif overflow-hidden">
                {languages.map((lang) => (
                  <button key={lang.code} onClick={() => changeLanguage(lang.code.toLowerCase())} className={`block px-5 py-3 text-xs w-full text-left font-bold transition hover:bg-stone-50 ${locale === lang.code.toLowerCase() ? "text-[#d48a1f] bg-stone-50" : "text-stone-700"}`}>
                    {lang.label === "VI" ? "Tiếng Việt" : lang.label === "EN" ? "English" : lang.label === "ZH" ? "中文" : "한국어"}
                  </button>
                ))}
              </div>
            </div>
            <a href="tel:0876712808" className="flex items-center gap-1.5 text-[#d48a1f] font-serif font-bold text-[13px] hover:scale-105 transition-transform tracking-[0.05em]"><Phone size={14} fill="currentColor" stroke="none" className="rotate-[12deg]" />HOTLINE</a>
          </div>

          {/* MOBILE TOGGLE */}
          <button className={`lg:hidden p-2 transition-colors ${textColor}`} onClick={() => setIsOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU DRAWER - FIX TRIỆT ĐỂ BẰNG CÁCH DÙNG FIXED TOÀN MÀN HÌNH VỚI Z-INDEX CAO NHẤT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }} 
            transition={{ type: "spring", damping: 30, stiffness: 300 }} 
            /* Cấu trúc Fixed Inset 0 với Z-index cực lớn sẽ giải quyết lỗi bị cắt menu khi cuộn trang */
            className="fixed inset-0 bg-white z-[99999] lg:hidden flex flex-col font-serif"
          >
            {/* Header Mobile Menu - Luôn trắng để che nội dung bên dưới */}
            <div className="flex justify-between items-center p-6 border-b border-stone-100 bg-white flex-shrink-0">
              <span className="text-xl font-black tracking-tighter text-[#d48a1f]">LUMA SPA</span>
              <button onClick={() => setIsOpen(false)} className="p-2 text-stone-900">
                <X size={32} />
              </button>
            </div>
            
            {/* Nội dung Menu cuộn độc lập */}
            <nav className="flex-grow overflow-y-auto p-6 bg-white">
              <div className="flex flex-col space-y-2">
                {["home", "about", "services", "news", "contact"].map((key) => {
                  const isServices = key === "services";
                  return (
                    <div key={key} className="flex flex-col border-b border-stone-50 last:border-0">
                      <div className="flex justify-between items-center">
                        <Link 
                          href={`/${locale}/${key === "home" ? "" : key}`} 
                          onClick={() => !isServices && setIsOpen(false)} 
                          className="flex-grow py-5 text-xl font-bold text-stone-900 uppercase tracking-wide"
                        >
                          {t(key)}
                        </Link>
                        {isServices && (
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              setShowMobileServices(!showMobileServices);
                            }} 
                            className="p-5 text-[#d48a1f]"
                          >
                            <ChevronDown size={24} className={`transition-transform duration-300 ${showMobileServices ? "rotate-180" : ""}`} />
                          </button>
                        )}
                      </div>

                      {/* Dịch vụ con mobile */}
                      <AnimatePresence>
                        {isServices && showMobileServices && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: "auto", opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }} 
                            className="bg-stone-50 px-4 flex flex-col pb-4 overflow-hidden rounded-xl"
                          >
                            {SERVICES_LIST.map((s) => (
                              <div key={s.key} className="flex items-center justify-between border-l-2 border-[#d48a1f]/30 pl-4 my-2">
                                <Link href={`/${locale}/services/${s.slug}`} onClick={() => setIsOpen(false)} className="py-3 text-[15px] font-bold text-stone-700 flex-grow">{t(s.key)}</Link>
                                <Link href={`/${locale}/services/${s.slug}#video-review`} onClick={() => setIsOpen(false)} className="p-2 text-red-600 bg-red-50 rounded-full"><Play size={16} fill="currentColor" stroke="none" /></Link>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Thông tin liên hệ & Ngôn ngữ */}
              <div className="mt-12 pt-8 border-t border-stone-100 flex flex-col gap-10">
                <a href="tel:0876712808" className="flex items-center gap-3 text-[#d48a1f] font-serif font-bold text-3xl tracking-tight uppercase">
                  HOTLINE <Phone size={28} fill="currentColor" stroke="none" className="rotate-[15deg]" />
                </a>

                <div className="flex flex-wrap gap-6 pb-20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code.toLowerCase())}
                      className={`text-lg font-serif font-bold tracking-widest transition-all relative pb-1 ${
                        locale === lang.code.toLowerCase() ? "text-[#d48a1f] border-b-2 border-[#d48a1f]" : "text-stone-400"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}