// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const files = ['common', 'contact', 'footer', 'header', 'home', 'services', 'about', 'news'];
  
  const messages = {};
  for (const file of files) {
    try {
      const content = (await import(`../locales/${locale}/${file}.json`)).default;
      
      Object.assign(messages, { [file]: content });
    } catch (e) {
      console.error(`Không tìm thấy file: ${file}.json cho ngôn ngữ ${locale}`);
    }
  }

  return {
    locale,
    messages
  };
});