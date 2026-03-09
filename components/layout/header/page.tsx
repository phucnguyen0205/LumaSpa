"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, Phone } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const languages = [
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ko', label: '한국어' }
];

export default function Header() {
  const { t, i18n } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    document.cookie = `NEXT_LOCALE=${lng}; path=/; max-age=31536000`;
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Xác định màu chữ chủ đạo dựa trên trạng thái cuộn
  const textColor = isScrolled ? 'text-stone-800' : 'text-white';
  const amberColor = 'text-amber-500';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-amber-600">
          LUMA<span className={isScrolled ? 'text-stone-800' : 'text-white'}>SPA</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {['home', 'about', 'services', 'news', 'contact'].map((item) => {
            const href = item === 'home' ? '/' : `/${item}`;
            return (
              <Link 
                key={item} 
                href={href} 
                className={`text-sm uppercase font-medium transition-colors hover:text-amber-500 ${textColor}`}
              >
                {t(`header.${item}`)}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SECTION */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="group relative py-2">
            <button className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-amber-500 ${textColor}`}>
              <Globe size={18} className="text-amber-500" />
              <span className="uppercase">{i18n.language}</span>
            </button>
            
            <div className="absolute right-0 top-full w-32 bg-white border shadow-xl hidden group-hover:block rounded-md overflow-hidden animate-in fade-in slide-in-from-top-1 text-stone-800">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`block w-full text-left px-4 py-2 text-xs hover:bg-amber-50 ${i18n.language === lang.code ? 'text-amber-600 font-bold bg-amber-50/50' : 'text-stone-600'}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className={isScrolled ? 'text-stone-800' : 'text-white'} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t py-6 space-y-4 px-6 text-stone-800">
          {['home', 'about', 'services', 'news', 'contact'].map((item) => (
            <Link key={item} href={`/${item}`} className="block text-lg font-medium border-b pb-2" onClick={() => setIsOpen(false)}>
              {t(`header.${item}`)}
            </Link>
          ))}
          <div className="flex justify-between items-center pt-4">
            <div className="flex space-x-3">
              {languages.map(l => (
                <button key={l.code} onClick={() => changeLanguage(l.code)} className={`text-xs p-1 ${i18n.language === l.code ? 'font-bold underline text-amber-600' : 'text-stone-500'}`}>
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>
            <Phone size={20} className="text-amber-600" />
          </div>
        </div>
      )}
    </header>
  );
}