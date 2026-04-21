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
      title: "Spa Đà Nẵng uy tín | Massage thư giãn & trị liệu chuyên sâu 2026 | Luma Spa",
      desc: "Luma Spa - spa Đà Nẵng uy tín, chuyên massage thư giãn, trị mụn, chăm sóc da cao cấp. Giá tốt, dịch vụ chuẩn 5 sao, đặt lịch ngay hôm nay.",
    },
    en: {
      title: "Best Spa in Da Nang | Relaxing Massage & Skincare | Luma Spa",
      desc: "Luma Spa offers professional massage, skincare, and relaxation services in Da Nang. Affordable prices, premium experience.",
    },
    ko: {
      title: "다낭 스파 추천 | 마사지 & 피부관리 전문 | 루마 스파",
      desc: "루마 스파는 다낭에서 최고의 마사지와 피부관리 서비스를 제공합니다.",
    },
    zh: {
      title: "岘港最佳水疗中心 | 按摩与护肤 | Luma Spa",
      desc: "Luma Spa 提供专业按摩与护肤服务，位于岘港，价格实惠。",
    },
  };

  const currentSEO = seoMap[locale] || seoMap["vi"];

  return {
    title: currentSEO.title,
    description: currentSEO.desc,

    keywords: [
      "spa Đà Nẵng",
      "massage Đà Nẵng",
      "spa uy tín Đà Nẵng",
      "spa giá rẻ Đà Nẵng",
      "massage thư giãn",
      "spa chăm sóc da",
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

  return (
    <div className="min-h-screen bg-[#3d2b1f]">
      
      {/* 🔥 SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 🔥 CONTENT SEO (CỰC QUAN TRỌNG) */}
      <section className="hidden">
        <h1>Spa Đà Nẵng uy tín - Luma Spa</h1>
        <p>
          Luma Spa là spa Đà Nẵng chuyên cung cấp dịch vụ massage thư giãn, chăm sóc da,
          trị liệu chuyên sâu với đội ngũ chuyên nghiệp. Nếu bạn đang tìm kiếm spa uy tín
          tại Đà Nẵng với giá tốt và dịch vụ chất lượng cao, Luma Spa là lựa chọn hàng đầu.
        </p>
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