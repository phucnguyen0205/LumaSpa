import TranslationsProvider from "@/components/translations-provider";
import "./globals.css";
import { initTranslations } from "@/i18n"; 
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server"; // 1. Thêm dòng này

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  // Kiểm tra locale hợp lệ
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // 2. Lấy messages cho NextIntlClientProvider
  const messages = await getMessages({ locale });

  // 3. Load resources cho i18n (nếu bạn vẫn dùng i18next song song)
  const namespaces = ['common', 'header', 'footer', 'services', 'contact', 'home', 'about'];
  const { resources } = await initTranslations(locale, namespaces);

  // 3. Schema SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "Spa",
    name: "Luma Spa",
    image: "https://yourdomain.com/logo.jpg",
    telephone: "0876712808",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Da Nang, Vietnam",
      addressLocality: "Da Nang",
      addressCountry: "VN",
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
        {/* Bọc các Provider đúng thứ tự */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TranslationsProvider 
            locale={locale} 
            namespaces={namespaces} 
            resources={resources}
          >
            {children}
          </TranslationsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}