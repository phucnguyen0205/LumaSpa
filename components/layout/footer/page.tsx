"use client";
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  // Chuyển sang dùng 'common' để đồng bộ với cấu trúc tệp JSON
  const { t } = useTranslation('footer');

  return (
    <footer className="bg-[#1a1a1a] text-stone-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* CỘT 1: GIỚI THIỆU */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-serif font-bold tracking-tighter text-amber-600 block">
              LUMA<span className="text-white">SPA</span>
            </Link>
            <p className="text-sm leading-relaxed text-stone-400 italic">
              {t('about_desc')}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-amber-500 transition-colors"><Youtube size={20} /></Link>
            </div>
          </div>

          {/* CỘT 2: LIÊN KẾT NHANH */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
              {t('links_title')}
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">{t('header.home')}</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">{t('header.about')}</Link></li>
              <li><Link href="/news" className="hover:text-amber-500 transition-colors">{t('header.news')}</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">{t('header.contact')}</Link></li>
            </ul>
          </div>

          {/* CỘT 3: DỊCH VỤ */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
              {t('services_title')}
            </h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="hover:text-white cursor-pointer transition-colors">{t('services.body_massage')}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t('services.facial_care')}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t('services.herbal_bath')}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t('services.hot_stone')}</li>
            </ul>
          </div>

          {/* CỘT 4: THÔNG TIN LIÊN HỆ THẬT */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
              {t('booking.branch_title')}
            </h4>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="text-amber-600 shrink-0" size={18} />
              {/* Truyền dữ liệu thật: 190 Nguyễn Công Trứ */}
              <p>{t('address_value')}</p>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="text-amber-600 shrink-0" size={18} />
              {/* Truyền dữ liệu thật: 0876 712 808 */}
              <p>{t('phone_value')}</p>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="text-amber-600 shrink-0" size={18} />
              <p>{t('email_value')}</p>
            </div>
            <p className="text-xs text-stone-500 italic mt-4 border-t border-stone-800 pt-4">
              {t('working_hours')}
            </p>
          </div>

        </div>

        {/* BẢN QUYỀN */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            {t('copyright')}
          </p>
          <div className="flex space-x-6 text-xs text-stone-500">
            <Link href="/privacy" className="hover:text-white">{t('privacy_policy')}</Link>
            <Link href="/terms" className="hover:text-white">{t('terms_of_service')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}