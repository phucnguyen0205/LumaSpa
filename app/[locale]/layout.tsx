import TranslationsProvider from "@/components/translations-provider";
import "./globals.css";
import { initTranslations } from "@/i18n"; 
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Metadata } from "next"; // Thêm dòng này

// --- THÊM ĐOẠN NÀY ĐỂ HẾT LỖI METADATABASE ---
export const metadata: Metadata = {
  metadataBase: new URL('https://lumaspa.com.vn'), // Thay bằng domain thật của bạn sau này
  title: {
    default: "Luma Spa Da Nang | Luxury Wellness & Massage",
    template: "%s | Luma Spa Da Nang"
  },
  description: "Best Luxury Spa in Da Nang. Experience Traditional Massage, Herbal Hair Wash and more at 190 Nguyen Cong Tru.",
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const namespaces = ['common', 'header', 'footer', 'services', 'contact', 'home', 'about'];
  const { resources } = await initTranslations(locale, namespaces);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Spa",
    name: "Luma Spa",
    image: "https://lumaspa.com.vn/logo.jpg", // Cập nhật domain cho đồng bộ
    telephone: "0783237168", // Cập nhật đúng số hotline của Luma
    address: {
      "@type": "PostalAddress",
      streetAddress: "190 Nguyen Cong Tru",
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