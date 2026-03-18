import TranslationsProvider from "@/components/translations-provider";
import "./globals.css";
import { initTranslations } from "@/i18n"; 
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Nhận params từ URL
}) {
  // 1. Lấy locale động từ params
  const { locale } = await params;

  // 2. Kiểm tra nếu locale không hợp lệ thì báo 404 (Tốt cho SEO)
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // 3. Load các bản dịch cơ bản dùng chung cho toàn bộ trang (header, footer, common)
  const namespaces = ['common', 'header', 'footer'];
  const { resources } = await initTranslations(locale, namespaces);

  return (
    <html lang={locale}>
      <body className="antialiased">
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