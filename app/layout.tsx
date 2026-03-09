import TranslationsProvider from "@/components/translations-provider";
import "./globals.css";

import { initTranslations } from "@/i18n"; // File cấu hình bạn vừa gửi

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mặc định lấy từ Cookie hoặc 'vi'
  const locale = 'vi'; 
  const namespaces = ['common'];
  const { resources } = await initTranslations(locale, namespaces);

  return (
    <html lang={locale}>
      <body>
        <TranslationsProvider 
          locale={locale} 
          namespaces={namespaces} 
          resources={resources}
        >
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}