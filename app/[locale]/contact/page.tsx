import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import ContactClient from "./contact-client";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: `${t("seo.meta_title")} | Luma Spa Da Nang`,
    description: t("seo.meta_desc"),
    openGraph: {
      title: t("seo.meta_title"),
      description: t("seo.meta_desc"),
      url: `https://lumaspa.com.vn/${locale}/contact`,
      siteName: "Luma Spa",
      images: [{ url: "/images/og-contact.jpg" }],
      locale: locale,
      type: "website",
    },
    alternates: {
      canonical: `https://lumaspa.com.vn/${locale}/contact`,
      languages: {
        'vi-VN': 'https://lumaspa.com.vn/vi/contact',
        'en-US': 'https://lumaspa.com.vn/en/contact',
        'ko-KR': 'https://lumaspa.com.vn/ko/contact',
        'zh-CN': 'https://lumaspa.com.vn/zh/contact',
      },
    },
  };
}

// 2. Component chính ContactPage
export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  
  // QUAN TRỌNG: Phải truyền { locale } vào đây để lấy đúng file json tương ứng
  const t = await getTranslations({ locale, namespace: "contact" });

  const contactMessages = {
    title: t("title"),
    subtitle: t("subtitle"),
    quote: t("quote"),
    brand_name: t("brand_name"),
    address_value: t("address_value"),
    phone_value: t("phone_value"),
    phone_value_2: t("phone_value_2"),
    email_value: t("email_value"),
    info: {
      address_label: t("info.address_label"),
      phone_label: t("info.phone_label"),
      email_label: t("info.email_label"),
    },
    form: {
      name: t("form.name"),
      phone: t("form.phone"),
      email: t("form.email"),
      message: t("form.message"),
      submit: t("form.submit"),
      note: t("form.note"),
    },
    attractions_title: t("attractions_title"),
    attractions_list: t.raw("attractions_list"),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "name": "Luma Spa Da Nang",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "190 Nguyen Cong Tru",
      "addressLocality": "Da Nang",
      "addressCountry": "VN"
    },
    "telephone": "0783237168",
    "openingHours": "Mo-Su 09:00-22:00",
    "image": "https://lumaspa.com.vn/logo.png"
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      
      <main className="flex-grow pt-20"> {/* Thêm pt-20 để không bị header đè */}
        <ContactClient messages={contactMessages} />
      </main>

      <Footer/>
    </div>
  );
}