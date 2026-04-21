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
    vi: "Luma Spa Đà Nẵng | Massage & Spa cao cấp",
    en: "Luma Spa Da Nang | Premium Massage & Spa",
    zh: "岘港 Luma Spa | 高端按摩",
    ko: "다낭 루마 스파 | 프리미엄 마사지",
  };

  const descriptionMap: Record<string, string> = {
    vi: "Trải nghiệm spa cao cấp tại Luma Spa Đà Nẵng.",
    en: "Experience premium spa services in Da Nang.",
    zh: "体验高端水疗服务。",
    ko: "프리미엄 스파 경험",
  };

  return {
    title: titleMap[locale],
    description: descriptionMap[locale],
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

  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
      {/* Thêm JSON-LD vào đầu trang */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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