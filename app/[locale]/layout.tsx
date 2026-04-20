import TranslationsProvider from "@/components/translations-provider";
import "./globals.css";
import { initTranslations } from "@/i18n"; 
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import FloatingContact from "@/components/home/floating-contact";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  // ✅ 1. Bắt buộc phải await params trước khi truy cập locale (Next.js 15 quy định)
  const { locale } = await params;

  // ✅ 2. Kiểm tra locale hợp lệ ngay lập tức
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // ✅ 3. Load dữ liệu ngôn ngữ song song để tối ưu tốc độ (Tránh Waterfall)
  const namespaces = ['common', 'header', 'footer', 'services', 'contact', 'home', 'about', 'review'];
  
  const [messages, { resources }] = await Promise.all([
    getMessages({ locale }),
    initTranslations(locale, namespaces)
  ]);

  // ✅ 4. Schema SEO (Cập nhật chuẩn địa chỉ Luma Spa)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Spa",
    "name": "Luma Spa Đà Nẵng",
    "image": "https://lumaspa.com/images/logo.png", // Thay bằng domain thật của cậu
    "telephone": "0876712808",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "190 Nguyễn Công Trứ, An Hải Bắc, Sơn Trà",
      "addressLocality": "Đà Nẵng",
      "addressCountry": "VN",
    },
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased">
        {/* ✅ 5. Thứ tự Provider: next-intl bọc ngoài, TranslationsProvider bọc trong */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TranslationsProvider 
            locale={locale} 
            namespaces={namespaces} 
            resources={resources}
          >
            {/* Thêm thẻ main để cấu trúc HTML chuẩn SEO */}
            <main>
              {children}
            </main>
            
            <FloatingContact />
          </TranslationsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}