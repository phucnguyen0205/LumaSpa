import { Metadata } from "next";
import { SERVICES_DATA } from "./data";
import ServiceListView from "./service-list-view";
import { getTranslations } from "next-intl/server";

const GALLERY = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800",
];
type Locale = "vi" | "en" | "ko" | "zh";
interface PageProps {
  params: Promise<{ locale: Locale }>;
}
/**
 * 🔥 METADATA SEO MẠNH
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  // 👉 keyword theo từng ngôn ngữ
  const seoMap: any = {
    vi: {
    title: "Top Spa Đà Nẵng 2026 | Massage thư giãn & chăm sóc da tốt nhất | Luma Spa",
    desc: "Tìm kiếm top spa Đà Nẵng? Luma Spa cung cấp massage body, foot, chăm sóc da cao cấp ⭐ Giá tốt – Không gian sang trọng – Đặt lịch ngay hôm nay!",
  },
    en: {
      title: "Top Spa in Da Nang 2026 | Best Relaxing Massage & Skincare | Luma Spa",
      desc: "Looking for the top spa in Da Nang? Luma Spa offers premium body massage, foot massage, and skincare services ⭐ Great prices – Luxurious ambiance – Book now!",
    },
    ko: {
      title: "다낭 최고의 스파 2026 | 최고의 휴식 마사지 & 스킨케어 | Luma Spa",
      desc: "다낭 최고의 스파를 찾고 계신가요? Luma Spa는 프리미엄 바디 마사지, 풋 마사지, 스킨케어 서비스를 제공합니다 ⭐ 훌륭한 가격 – 고급스러운 분위기 – 지금 예약하세요!",
    },
    zh: {
      title: "岘港顶级水疗中心 2026 | 最佳放松按摩和护肤 | Luma Spa",
      desc: "寻找岘港顶级水疗中心？Luma Spa提供高端身体按摩、足部按摩和护肤服务 ⭐ 优惠价格 – 豪华环境 – 立即预订！",
    }
  };

  const currentSEO = seoMap[locale] || seoMap["vi"];
  return {
    title: currentSEO.title,
    description: currentSEO.desc,

    keywords: [
  "top spa Đà Nẵng",
  "best spa Đà Nẵng",
  "spa Đà Nẵng",
  "spa tốt nhất Đà Nẵng",
  "spa nổi tiếng Đà Nẵng",
  "spa uy tín Đà Nẵng",
  "review spa Đà Nẵng",
  "massage Đà Nẵng",
  "massage body Đà Nẵng",
  "massage foot Đà Nẵng",
  "spa chăm sóc da Đà Nẵng",
  "spa thư giãn Đà Nẵng",
  "spa cao cấp Đà Nẵng",
  "spa Đà Nẵng giá rẻ",
  "spa Đà Nẵng gần biển",
  "spa Đà Nẵng cho khách du lịch",
  "massage thư giãn sau khi du lịch Đà Nẵng",
  "địa chỉ spa uy tín ở Đà Nẵng",
  "kinh nghiệm đi spa Đà Nẵng",
  "best spa in Da Nang",
  "Da Nang massage service",
  "relaxing massage Da Nang",
  "body massage Da Nang",
],

    alternates: {
      canonical: `https://lumaspa.com.vn/${locale}/services`,
      languages: {
        vi: "https://lumaspa.com.vn/vi/services",
        en: "https://lumaspa.com.vn/en/services",
        ko: "https://lumaspa.com.vn/ko/services",
        zh: "https://lumaspa.com.vn/zh/services",
      },
    },

    openGraph: {
      title: currentSEO.title,
      description: currentSEO.desc,
      url: `https://lumaspa.com.vn/${locale}/services`,
      siteName: "Luma Spa",
      images: [
        {
          url: "https://lumaspa.com.vn/images/services-og.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: "website",
    },
  };
}

/**
 * 🔥 COMPONENT
 */
export default async function ServiceListPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  const rawFeatures = t.raw("featuresItems");
  const featuresData = Array.isArray(rawFeatures) ? rawFeatures : [];

  const translations = {
    heroQuote: t("heroQuote"),
    heroDesc: t("heroDesc"),
    aboutSubtitle: t("aboutSubtitle"),
    aboutTitle: t("aboutTitle"),
    aboutDesc: t("aboutDesc"),
    aboutContact: t("aboutContact"),
    featuresTagline: t("featuresTagline"),
    featuresTitle: t("featuresTitle"),

    featuresItems: featuresData.map((item: any) => ({
      tag: item.tag || "Core Value",
      title: item.title || "",
      highlight: item.highlight || "",
      desc: item.desc || "",
    })),

    treatmentTitle: t("treatmentTitle"),
    treatmentDesc: t("treatmentDesc"),
    discover: t("discover"),
  };

  /**
   * 🔥 SERVICE SCHEMA
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Spa Đà Nẵng - Dịch vụ tại Luma Spa`,
    "description": "Danh sách dịch vụ spa, massage, chăm sóc da tại Đà Nẵng",
    "itemListElement": SERVICES_DATA.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name[locale] || service.name["en"],
        url: `https://lumaspa.com.vn/${locale}/services/${service.slug}`,
        description: service.description[locale] || service.description["en"],
        image: `https://lumaspa.com.vn${service.image}`,
      },
    })),
  };

  /**
   * 🔥 LOCAL SEO (QUAN TRỌNG NHẤT)
   */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Spa",
    name: "Luma Spa",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Đà Nẵng",
      addressCountry: "VN",
    },
    telephone: "+84-xxx-xxx",
    url: "https://lumaspa.com.vn",
  };

  /**
   * 🔥 FAQ SEO (ĂN FEATURED SNIPPET)
   */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Spa Đà Nẵng giá bao nhiêu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Giá spa tại Đà Nẵng dao động từ 200.000đ đến 1.500.000đ tùy dịch vụ.",
        },
      },
      {
        "@type": "Question",
        name: "Spa nào uy tín tại Đà Nẵng?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Luma Spa là địa chỉ spa uy tín tại Đà Nẵng với dịch vụ chuyên nghiệp.",
        },
      },
    ],
  };
  const ratingSchema = {
  "@context": "https://schema.org",
  "@type": "Spa",
  name: "Luma Spa",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
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
      item: "https://lumaspa.com.vn/vi/services",
    },
  ],
};
  return (
    <div className="min-h-screen bg-[#3d2b1f]">
      
      {/* 🔥 SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="hidden">
  <h1>Top Spa Đà Nẵng – Luma Spa chuyên massage & chăm sóc da</h1>

  <h2>Best spa Đà Nẵng cho khách du lịch & người địa phương</h2>
  <p>
    Luma Spa là một trong những top spa Đà Nẵng được khách hàng đánh giá cao với dịch vụ
    massage thư giãn, massage body, foot và chăm sóc da chuyên sâu. Nếu bạn đang tìm kiếm
    best spa Đà Nẵng với không gian sang trọng, giá hợp lý và kỹ thuật viên chuyên nghiệp,
    đây là lựa chọn không thể bỏ qua.
  </p>

  <h2>Dịch vụ massage & spa nổi bật tại Đà Nẵng</h2>
  <p>
    Chúng tôi cung cấp đa dạng dịch vụ từ massage thư giãn, trị liệu, chăm sóc da,
    giúp phục hồi năng lượng sau khi du lịch Đà Nẵng. Luma Spa phù hợp cho cả khách
    du lịch quốc tế và người địa phương.
  </p>

  <h3>Vì sao Luma Spa là spa uy tín Đà Nẵng?</h3>
  <ul>
    <li>Top spa Đà Nẵng được đánh giá cao</li>
    <li>Dịch vụ massage chuyên sâu</li>
    <li>Không gian thư giãn cao cấp</li>
    <li>Giá cả hợp lý</li>
  </ul>
</section>

      <ServiceListView 
        gallery={GALLERY} 
        services={SERVICES_DATA} 
        locale={locale} 
        translations={translations} 
      />
    </div>
  );
}