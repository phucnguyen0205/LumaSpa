import TranslationsProvider from "@/components/translations-provider";
import "./globals.css";
import { initTranslations } from "@/i18n"; 
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import FloatingContact from "@/components/home/floating-contact";
import "flag-icons/css/flag-icons.min.css";
import { Analytics } from '@vercel/analytics/react';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Bạn có thể tùy chỉnh tiêu đề theo ngôn ngữ ở đây
  const titles: Record<string, string> = {
    vi: "Luma Spa - Massage Body & Foot Trị Liệu Chuyên Sâu tại Đà Nẵng",
    en: "Luma Spa - Professional Body & Foot Massage in Da Nang",
    ko: "Luma Spa - 다낭 전문 바디 & 풋 마사지",
    zh: "Luma Spa - 岘港专业身体和足部按摩",
  };

  const descriptions: Record<string, string> = {
    vi: "Chào mừng đến với Luma Spa. Nơi tâm hồn và cơ thể tìm thấy sự giao thoa nhẹ nhàng giữa không gian tinh tế và kỹ thuật trị liệu chuyên sâu.",
    en: "Welcome to Luma Spa. A sanctuary for body and soul with professional therapeutic techniques.",
    ko: "Luma Spa에 오신 것을 환영합니다. 전문 치료 기술과 함께 몸과 마음을 위한 안식처입니다.",
    zh: "欢迎来到Luma Spa。身体和心灵的避风港，提供专业的治疗技术。",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    icons: {
      icon: "/favicon.ico", // Đảm bảo bạn có file này trong folder public
    },
    openGraph: {
      images: ['/images/interior.png'], 
    },
  };
}
export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const namespaces = ['common', 'header', 'footer', 'services', 'contact', 'home', 'about', 'review'];
  
  const [messages, { resources }] = await Promise.all([
    getMessages({ locale }),
    initTranslations(locale, namespaces)
  ]);
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
              <Analytics />
            </main>
            
            <FloatingContact />
          </TranslationsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}