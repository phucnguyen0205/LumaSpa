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

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params }: Props) {
  const { locale } = params;

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
  // 🔥 Core chính
  "spa Đà Nẵng",
  "top spa Đà Nẵng",
  "massage Đà Nẵng",
  "spa uy tín Đà Nẵng",
  "spa thư giãn Đà Nẵng",

  // 🔥 High intent 
  "spa gần đây",
  "massage gần đây",
  "spa gần tôi",
  "massage near me",
  "spa Đà Nẵng mở cửa",
  "spa Đà Nẵng mở khuya",
  "spa Đà Nẵng bao nhiêu tiền",
  "giá massage Đà Nẵng",

  // 🔥 Dịch vụ cụ thể 
  "massage body Đà Nẵng",
  "massage foot Đà Nẵng",
  "foot massage Da Nang",
  "body massage Da Nang",
  "hot stone massage Da Nang",
  "foot & body massage Da Nang",
  "spa chăm sóc da Đà Nẵng",

  // 🔥 Theo location / du lịch
  "spa Đà Nẵng gần biển",
  "spa gần Mỹ Khê",
  "spa gần trung tâm Đà Nẵng",
  "spa cho khách du lịch Đà Nẵng",
  "massage sau khi du lịch Đà Nẵng",

  // 🔥 Review / decision
  "review spa Đà Nẵng",
  "nên đi spa nào ở Đà Nẵng",
  "địa chỉ spa uy tín ở Đà Nẵng",
  "best spa in Da Nang",
  "top spa in Da Nang",

  // 🔥 English
  "Da Nang massage",
  "relaxing spa Da Nang",
  "Da Nang spa near me",
  "cheap massage Da Nang",
  "luxury spa Da Nang",

  // 🔥 Korean
  "다낭 마사지",
  "다낭 스파",
  "다낭 근처 마사지",
  "다낭 힐링 스파",
  "다낭 마사지 추천",

  // 🔥 Chinese
  "岘港按摩",
  "岘港水疗",
  "岘港附近按摩",
  "岘港按摩推荐",
  "岘港放松按摩",
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
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale,
      type: "website",
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  const namespaces = ["home", "common", "contact", "services", "header", "footer", "about", "review"];
  const { resources } = await initTranslations(locale, namespaces);

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
    "telephone": "078 323 7168", // Thay số điện thoại thật của Spa
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
  name: "Luma Spa Đà Nẵng",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1500",
  },
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Trang chủ",
      item: "https://lumaspa.com.vn",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Spa Đà Nẵng",
      item: `https://lumaspa.com.vn/${locale}`,
    },
  ],
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Spa Đà Nẵng nào tốt nhất?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luma Spa là một trong những spa Đà Nẵng được đánh giá cao với dịch vụ massage và chăm sóc da chuyên nghiệp.",
      },
    },
    {
      "@type": "Question",
      name: "Massage Đà Nẵng giá bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá massage tại Đà Nẵng dao động từ 200.000đ đến 1.000.000đ tùy dịch vụ.",
      },
    },
  ],
};
  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
      {/* Thêm JSON-LD vào đầu trang */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
<section className="hidden">
  <h1>Top Spa Đà Nẵng – Luma Spa massage & chăm sóc da cao cấp</h1>

  <h2>Best spa Đà Nẵng cho khách du lịch</h2>
  <p>
    Luma Spa là một trong những top spa Đà Nẵng được khách hàng đánh giá cao với
    dịch vụ massage thư giãn, chăm sóc da và trị liệu chuyên sâu. Không gian sang
    trọng, kỹ thuật viên chuyên nghiệp giúp bạn thư giãn hoàn toàn.
  </p>

  <h2>Dịch vụ massage Đà Nẵng nổi bật</h2>
  <p>
    Tại Luma Spa, bạn có thể trải nghiệm massage body, massage foot và các liệu trình
    chăm sóc da cao cấp giúp phục hồi năng lượng sau khi du lịch Đà Nẵng.
  </p>
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