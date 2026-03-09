"use client";

import { I18nextProvider } from 'react-i18next';
import { createInstance, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useEffect } from 'react';

interface TranslationsProviderProps {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}: TranslationsProviderProps) {
  const i18n = createInstance();
useEffect(() => {
  // 1. Kiểm tra xem người dùng đã từng chọn ngôn ngữ chưa (qua Cookie hoặc LocalStorage)
  const savedLanguage = document.cookie
    .split('; ')
    .find(row => row.startsWith('NEXT_LOCALE='))
    ?.split('=')[1];

  // 2. Nếu có ngôn ngữ đã lưu và khác với ngôn ngữ hiện tại của i18n
  if (savedLanguage && i18n.language !== savedLanguage) {
    i18n.changeLanguage(savedLanguage);
  }
}, [i18n]);
  // Khởi tạo i18n cho phía Client bằng cách dùng dữ liệu (resources) từ Server truyền xuống
  i18n
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      lng: locale,
      resources, // Quan trọng: Dùng tài nguyên đã được nạp từ Server
      fallbackLng: 'vi',
      supportedLngs: ['vi', 'en', 'zh', 'ko'],
      ns: namespaces,
      defaultNS: namespaces[0],
    });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}