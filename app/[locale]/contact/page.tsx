import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import ContactClient from "./contact-client";

// Metadata giữ nguyên logic cũ
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("contact");

  return {
    title: `${t("seo.meta_title")} | Luma Spa Da Nang`,
    description: t("seo.meta_desc"),
    openGraph: {
      title: t("seo.meta_title"),
      description: t("seo.meta_desc"),
      url: `https://lumaspa.com.vi/${locale}/contact`,
      siteName: "Luma Spa",
      images: [{ url: "/images/og-contact.jpg" }],
      locale: locale,
      type: "website",
    },
    alternates: {
      canonical: `https://lumaspa.com.vi/${locale}/contact`,
      languages: {
        'vi-VN': 'https://lumaspa.com.vi/vi/contact',
        'en-US': 'https://lumaspa.com.vi/en/contact',
        'ko-KR': 'https://lumaspa.com.vi/ko/contact',
        'zh-CN': 'https://lumaspa.com.vi/zh/contact',
      },
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Lấy hàm t từ namespace "contact"
  const t = await getTranslations("contact");

  // ĐỊNH NGHĨA BIẾN NÀY: Gom dữ liệu từ file JSON vào object
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
    // Dùng t.raw cho mảng (list) để không bị lỗi render
    attractions_list: t.raw("attractions_list"),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "name": "Luma Spa Da Nang",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Da Nang",
      "addressLocality": "Da Nang",
      "addressCountry": "VN"
    },
    "telephone": "0876712808",
    "openingHours": "Mo-Su 09:00-22:00",
    "image": "https://lumaspa.com/logo.png"
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Bây giờ contactMessages đã được định nghĩa và có đầy đủ info.address_label */}
        <ContactClient messages={contactMessages} />
      </main>

      <Footer/>
    </div>
  );
}