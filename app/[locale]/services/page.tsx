import { Metadata } from "next";
import { SERVICES_DATA } from "./data";
import ServiceListView from "./service-list-view";
import { getTranslations } from "next-intl/server";

/** * ĐỊNH NGHĨA BIẾN CỐ ĐỊNH (Tránh lỗi Cannot find name)
 */
const GALLERY = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800",
];

/**
 * ĐỊNH NGHĨA KIỂU DỮ LIỆU (Next.js 15 chuẩn)
 */
interface PageProps {
  params: Promise<{ locale: string }>;
}

/**
 * 1. HÀM TẠO METADATA (SEO)
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: `${t("seo.meta_title")} | Luma Spa`,
    description: t("seo.meta_desc"),
    openGraph: {
      title: t("seo.meta_title"),
      description: t("seo.meta_desc"),
      images: ["/images/services-og.jpg"],
    },
  };
}

/**
 * 2. COMPONENT TRANG CHÍNH
 */
export default async function ServiceListPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  // Lấy dữ liệu mảng an toàn từ file JSON
  const rawFeatures = t.raw("featuresItems");
  const featuresData = Array.isArray(rawFeatures) ? rawFeatures : [];

  // Chuẩn bị dữ liệu translations để truyền xuống Client Component
  const translations = {
    heroQuote: t("heroQuote"),
    heroDesc: t("heroDesc"),
    aboutSubtitle: t("aboutSubtitle"),
    aboutTitle: t("aboutTitle"),
    aboutDesc: t("aboutDesc"),
    aboutContact: t("aboutContact"),
    featuresTagline: t("featuresTagline"),
    featuresTitle: t("featuresTitle"),
    
    // Ánh xạ đủ 4 trường: tag, title, highlight, desc để khớp với Interface của ServiceListView
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

  // Cấu trúc dữ liệu cấu trúc (Schema JSON-LD) cho Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Services at Luma Spa - ${locale}`,
    "description": t("heroDesc"),
    "numberOfItems": SERVICES_DATA.length,
    "itemListElement": SERVICES_DATA.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name[locale as keyof typeof service.name] || service.name["en"],
        "url": `https://lumaspa.com.vn/${locale}/services/${service.slug}`,
        "description": service.description[locale as keyof typeof service.description] || service.description["en"],
        "image": `https://lumaspa.com.vn${service.image}`,
        "offers": {
          "@type": "Offer",
          "price": service.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "VND"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#3d2b1f]">
      {/* Nhúng Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Gọi Client Component hiển thị giao diện */}
      <ServiceListView 
        gallery={GALLERY} 
        services={SERVICES_DATA} 
        locale={locale} 
        translations={translations} 
      />
    </div>
  );
}