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
  const { t, i18n } = useTranslation('header');
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

  const textColor = isScrolled ? 'text-stone-800' : 'text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO - Đã chuyển sang font-sans */}
        <Link href="/" className="text-2xl font-sans font-extrabold tracking-[0.05em] text-amber-600">
          LUMA<span className={isScrolled ? 'text-stone-800' : 'text-white'}>SPA</span>
        </Link>

        {/* DESKTOP MENU - font-sans */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {['home', 'about', 'services', 'news', 'contact'].map((item) => {
            const href = item === 'home' ? '/' : `/${item}`;
            return (
              <Link 
                key={item} 
                href={href} 
                className={`text-[13px] uppercase font-sans font-semibold tracking-[0.1em] transition-colors hover:text-amber-500 ${textColor}`}
              >
                {t(`${item}`)}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SECTION - font-sans */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="group relative py-2">
            <button className={`flex items-center space-x-1 text-sm font-sans font-medium transition-colors hover:text-amber-500 ${textColor}`}>
              <Globe size={18} className="text-amber-500" />
              <span className="uppercase tracking-wider">{i18n.language}</span>
            </button>
            
            <div className="absolute right-0 top-full w-32 bg-white border shadow-xl hidden group-hover:block rounded-md overflow-hidden text-stone-800">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`block w-full text-left px-4 py-2 text-xs font-sans hover:bg-amber-50 ${i18n.language === lang.code ? 'text-amber-600 font-bold bg-amber-50/50' : 'text-stone-600'}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden flex items-center">
            <button className={isScrolled ? 'text-stone-800' : 'text-white'} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER - font-sans */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t py-6 space-y-4 px-6 text-stone-800 font-sans">
          {['home', 'about', 'services', 'news', 'contact'].map((item) => (
            <Link 
              key={item} 
              href={`/${item}`} 
              className="block text-lg font-sans font-medium border-b border-stone-100 pb-2 tracking-wide" 
              onClick={() => setIsOpen(false)}
            >
              {t(`${item}`)}
            </Link>
          ))}
          <div className="flex justify-between items-center pt-4 font-sans">
            <div className="flex space-x-4">
              {languages.map(l => (
                <button 
                  key={l.code} 
                  onClick={() => changeLanguage(l.code)} 
                  className={`text-xs font-sans p-1 ${i18n.language === l.code ? 'font-bold underline text-amber-600' : 'text-stone-500'}`}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="tel:0876712808" className="flex items-center space-x-2 text-amber-600">
              <span className="text-sm font-bold font-sans">HOTLINE</span>
              <Phone size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}