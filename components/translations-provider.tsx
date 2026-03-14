"use client";

import { I18nextProvider } from 'react-i18next';
import { createInstance, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useEffect, useMemo } from 'react';

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}: {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
}) {
  const i18n = useMemo(() => {
    const instance = createInstance();
    instance
      .use(initReactI18next)
      .use(
        resourcesToBackend(
          (language: string, namespace: string) =>
            // Nếu file này nằm trong src/components/providers/
            // Ta dùng ../../../ để ra thư mục gốc
            import(`@/locales/${language}/${namespace}.json`)
        )
      )
      .init({
        lng: locale,
        resources, 
        fallbackLng: 'vi',
        supportedLngs: ['vi', 'en', 'zh', 'ko'],
        ns: namespaces,
        defaultNS: namespaces[0],
      });
    return instance;
  }, [locale, namespaces, resources]);

  useEffect(() => {
    const savedLanguage = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1];

    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}