import { initTranslations } from "@/i18n";
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/about-section/page";
import ServicesSection from "@/components/home/services-section";
import Hotel360Section from "@/components/home/360-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import ContactSection from "@/components/home/contact-section";
import CommitmentSection from "@/components/home/commitment-section";
import NewsAndReview from "@/components/home/review";
import AboutImageSection from "@/components/home/about-image-section-1";
import TestimonialSection from "@/components/home/testimonial-section";
import TranslationsProvider from "@/components/translations-provider";

// ✅ Cập nhật Props cho Next.js 15: params bây giờ là một Promise
interface Props {
  params: Promise<{ locale: string }>;
}

// ✅ SEO metadata - Cần await params
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  const titleMap: Record<string, string> = {
    vi: "Top Spa Đà Nẵng 2026 | Massage thư giãn & chăm sóc da tốt nhất | Luma Spa",
    en: "Best Spa in Da Nang 2026 | Relaxing Massage & Skincare | Luma Spa",
    ko: "다낭 스파 추천 2026 | 마사지 & 피부관리 | 루마 스파",
    zh: "岘港最佳水疗 2026 | 按摩与护肤 | Luma Spa",
  };

  const descriptionMap: Record<string, string> = {
    vi: "Tìm kiếm top spa Đà Nẵng? Luma Spa cung cấp massage body, foot, chăm sóc da cao cấp ⭐ Không gian sang trọng – Giá tốt – Đặt lịch ngay hôm nay!",
    en: "Looking for the best spa in Da Nang? Enjoy relaxing massage, skincare & premium service at Luma Spa. Book now!",
    ko: "다낭 최고의 스파를 찾고 계신가요? 루마 스파에서 프리미엄 마사지와 피부 관리를 경험하세요.",
    zh: "寻找岘港最好的水疗中心？在 Luma Spa 体验专业按摩与护肤服务。",
  };

  return {
    title: titleMap[locale],
    description: descriptionMap[locale],
    keywords: [
      "spa Đà Nẵng", "top spa Đà Nẵng", "massage Đà Nẵng", "spa uy tín Đà Nẵng",
      "spa thư giãn Đà Nẵng", "spa gần đây", "massage gần đây", "massage near me",
      "massage body Đà Nẵng", "massage foot Đà Nẵng", "다낭 마사지", "岘港按摩"
    ],
    alternates: {
      canonical: `https://lumaspa.com.vn/${locale}`,
      languages: {
        "vi-VN": "https://lumaspa.com.vn/vi",
        "en-US": "https://lumaspa.com.vn/en",
        "zh-CN": "https://lumaspa.com.vn/zh",
        "ko-KR": "https://lumaspa.com.vn/ko",
        "x-default": "https://lumaspa.com.vn/en",
      },
    },
    openGraph: {
      title: titleMap[locale],
      description: descriptionMap[locale],
      url: `https://lumaspa.com.vn/${locale}`,
      siteName: "Luma Spa",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
      locale,
      type: "website",
    },
  };
}

export default async function HomePage({ params }: Props) {
  // ✅ Quan trọng: Phải await params trước khi lấy locale
  const { locale } = await params;
  
  const namespaces = ["home", "common", "contact", "services", "header", "footer", "about", "review"];
  const { resources } = await initTranslations(locale, namespaces);

  // Schema dữ liệu có cấu trúc (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "name": "Luma Spa Đà Nẵng",
    "image": "https://lumaspa.com.vn/images/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "190 Nguyễn Công Trứ, An Hải Bắc, Sơn Trà", 
      "addressLocality": "Da Nang",
      "addressCountry": "VN"
    },
    "url": `https://lumaspa.com.vn/${locale}`,
    "telephone": "078 323 7168",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "22:00"
      }
    ]
  };

  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "name": "Luma Spa Đà Nẵng",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1500",
    },
  };

  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
      {/* Thêm JSON-LD vào head thông qua script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      
      {/* Hidden SEO content for crawlers */}
      <section className="hidden">
        <h1>Top Spa Đà Nẵng – Luma Spa massage & chăm sóc da cao cấp</h1>
        <h2>Best spa Đà Nẵng cho khách du lịch</h2>
        <p>Luma Spa là địa chỉ massage thư giãn, chăm sóc da và trị liệu chuyên sâu uy tín tại Đà Nẵng.</p>
      </section>

      <main className="min-h-screen flex flex-col">
        <Header />
        <HeroSection />
        <AboutSection />
        <AboutImageSection imageUrl="/images/sample-spa.jpg" />
        <ServicesSection />
        <Hotel360Section />
        <WhyChooseUs />
        <NewsAndReview />
        <TestimonialSection locale={locale} />
        <CommitmentSection />
        <ContactSection />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}