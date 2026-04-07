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

type PageProps = {
  params: Promise<{ locale: string }>;
};

// 1. Hàm tạo Metadata (SEO)
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

// 2. Component chính của trang
export default async function ServiceListPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("services");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Luma Spa Services List",
    "description": t("hero.description"),
    "numberOfItems": SERVICES_DATA.length,
    "itemListElement": SERVICES_DATA.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name[locale as keyof typeof service.name],
        "url": `https://lumaspa.com/${locale}/services/${service.slug}`,
        "image": `https://lumaspa.com${service.image}`,
        "description": service.description[locale as keyof typeof service.description]
      }
    }))
  };

  const translations = {
    heroQuote: t("hero.quote"),
    heroDesc: t("hero.description"),
    aboutSubtitle: t("about.subtitle"),
    aboutTitle: t("about.title"),
    aboutDesc: t("about.description"),
    aboutContact: t("about.contact"),
    featuresTagline: t("features.tagline"),
    featuresTitle: t("features.main_title"),
    featuresItems: [1, 2, 3].map(i => ({
      title: t(`features.item_${i}_title`),
      desc: t(`features.item_${i}_desc`),
    })),
    treatmentTitle: t("list.title"),
    treatmentDesc: t("list.description"),
    discover: t("list.discover"),
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceListView 
        gallery={GALLERY} 
        services={SERVICES_DATA} 
        locale={locale} 
        translations={translations} 
      />
    </div>
  );
}