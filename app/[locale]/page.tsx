import { Metadata } from "next";
import { initTranslations } from "@/i18n"; 
import { getTranslations } from "next-intl/server";
import Header from "@/components/layout/header/page";
import ContactSection from "@/components/home/contact-section";
import Footer from "@/components/layout/footer/page";
import HeroSection from "@/components/home/hero-section"; 
import AboutImageSection from "@/components/about-image-section-1";
import TestimonialSection from "@/components/home/testimonial-section";
import TranslationsProvider from "@/components/translations-provider";

interface Props {
  params: Promise<{ locale: string }>; 
}

const DOMAIN = "https://lumaspa.vn"; // 👉 Thay bằng domain thật của bạn

// ✅ 1. TÍCH HỢP METADATA SEO TRANG CHỦ
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const title = t("seo.title") || "Luma Spa | Foot & Body Massage Đà Nẵng Thư Giãn Tinh Tế";
  const description = t("seo.description") || "Trải nghiệm dịch vụ massage chân và toàn thân chuyên nghiệp tại Đà Nẵng. Không gian ấm cúng, kỹ thuật viên tận tâm tại Luma Spa.";
  const url = `${DOMAIN}/${locale}`;

  return {
    title,
    description,
    keywords: [
      "spa đà nẵng", "massage đà nẵng", "foot massage da nang", 
      "body massage da nang", "luma spa", "spa uy tín đà nẵng",
      "thư giãn đà nẵng", "phục hồi sức khỏe"
    ],
    alternates: {
      canonical: url,
      languages: {
        en: `${DOMAIN}/en`,
        vi: `${DOMAIN}/vi`,
        zh: `${DOMAIN}/zh`,
        ko: `${DOMAIN}/ko`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Luma Spa",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [
        {
          url: `${DOMAIN}/images/hero-banner.jpg`, // Nên dùng ảnh đẹp nhất của spa
          width: 1200,
          height: 630,
          alt: "Luma Spa Đà Nẵng - Foot & Body Care",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${DOMAIN}/images/hero-banner.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const namespaces = ['home', 'common', 'contact', 'services', 'header', 'footer'];

  // Lấy resources cho i18next (hệ thống cũ)
  const { resources } = await initTranslations(locale, namespaces);

  return (
    <TranslationsProvider 
      locale={locale} 
      namespaces={namespaces} 
      resources={resources}
    >
      <main className="min-h-screen flex flex-col">
        {/* Header thường chứa menu điều hướng, cần locale để giữ URL đúng */}
        <Header />
        
        {/* Nội dung chính của trang chủ */}
        <HeroSection /> 
        
        <AboutImageSection imageUrl="/images/sample-spa.jpg" />
        
        {/* Truyền locale trực tiếp để fix lỗi cache/không đổi ngôn ngữ của next-intl server component */}
        <TestimonialSection locale={locale} />
        
        <ContactSection />
        
        <Footer />
      </main>
      
      {/* ✅ Bonus: Schema LocalBusiness giúp Google hiển thị địa chỉ, số điện thoại Spa lên Map */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DaySpa",
            "name": "Luma Spa",
            "image": `${DOMAIN}/images/hero-banner.jpg`,
            "@id": DOMAIN,
            "url": DOMAIN,
            "telephone": "+0876 712 808", 
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Địa chỉ spa của bạn",
              "addressLocality": "Da Nang",
              "addressCountry": "VN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "22:00"
            }
          })
        }}
      />
    </TranslationsProvider>
  );
}