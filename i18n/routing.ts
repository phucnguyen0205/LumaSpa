import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // Danh sách các ngôn ngữ khớp với folder trong locales/
  locales: ['en', 'vi', 'zh', 'ko'], 
  defaultLocale: 'vi'
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);