import { notFound } from "next/navigation";
import Image from "next/image";
import { ChevronRight, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { Metadata } from "next";
import { SERVICES_DATA, Locale } from "../data";

import ServiceVideo from "@/components/home/service-video";
import BookingButton from "../booking-button";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const locales: Locale[] = ["vi", "en", "ko", "zh"];

const DICTIONARY = {
  vi: {
    home: "Trang chủ",
    services: "Dịch vụ",
    serviceDetail: "Chi tiết dịch vụ",
    bookingTitle: "Thông tin đặt lịch",
    btnBook: "Liên hệ đặt lịch ngay",
    hotline: "Hotline",
    guarantee: "Dịch vụ cam kết mang lại sự hài lòng tối đa.",
  },
  en: {
    home: "Home",
    services: "Services",
    serviceDetail: "Service Details",
    bookingTitle: "Booking Information",
    btnBook: "Book Appointment Now",
    hotline: "Hotline",
    guarantee: "Service committed to maximum satisfaction.",
  },
  ko: {
    home: "홈",
    services: "서비스",
    serviceDetail: "서비스 세부 정보",
    bookingTitle: "예약 정보",
    btnBook: "지금 예약하기",
    hotline: "핫라인",
    guarantee: "최고의 만족을 보장하는 서비스.",
  },
  zh: {
    home: "首页",
    services: "服务项目",
    serviceDetail: "服务详情",
    bookingTitle: "预订信息",
    btnBook: "立即联系预订",
    hotline: "热线",
    guarantee: "服务致力于让您获得最大满意度。",
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  const currentLocale = locale as Locale;
  return {
    title: service.seo.title[currentLocale] || service.seo.title.vi,
    description: service.seo.description[currentLocale] || service.seo.description.vi,
    keywords: service.seo.keywords[currentLocale]?.join(", "),
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  
  if (!service) return notFound();

  const name = service.name[currentLocale] || service.name.vi;
  const description = service.description[currentLocale] || service.description.vi;
  const longDescription = service.longDescription[currentLocale] || service.longDescription.vi;
  const whyChoose = service.whyChoose[currentLocale] || service.whyChoose.vi;
  const benefits = service.benefits[currentLocale] || service.benefits.vi;
  const footerAddress = service.footerAddress[currentLocale] || service.footerAddress.vi;
  
  const t = DICTIONARY[currentLocale] || DICTIONARY.vi;

  // Cấu trúc Schema.org để Google hiển thị sao và giá
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "image": service.image,
    "provider": {
      "@type": "Spa",
      "name": "Luma Spa Da Nang",
      "address": footerAddress
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": service.rating || 5,
      "reviewCount": service.reviewCount || 100
    },
    "offers": {
      "@type": "Offer",
      "price": service.price.replace(/[^0-9]/g, ""), // Lấy số từ chuỗi giá
      "priceCurrency": "VND"
    }
  };

  return (
    <main className="min-h-screen pb-20 bg-white">
      {/* JSON-LD cho SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BANNER - Tối ưu LCP với priority */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <Image 
          src={service.image} 
          alt={name} 
          fill 
          className="object-cover" 
          priority 
          sizes="100vw" 
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-[#dcc296] uppercase tracking-[0.4em] text-[10px] mb-4 font-serif">
              Luxury Wellness Experience
            </p>
            <h1 className="text-4xl md:text-6xl font-sans font-bold text-white uppercase tracking-widest drop-shadow-2xl">
              {name}
            </h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <article className="lg:col-span-2 space-y-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[10px] text-stone-400 uppercase tracking-widest font-bold">
              <a href={`/${locale}`} className="hover:text-[#dcc296] transition-colors">{t.home}</a>
              <ChevronRight size={10} />
              <a href={`/${locale}/services`} className="hover:text-[#dcc296] transition-colors">{t.services}</a>
              <ChevronRight size={10} />
              <span className="text-stone-900">{name}</span>
            </nav>

            <div className="prose prose-stone max-w-none">
              <h2 className="text-2xl font-serif text-stone-900 uppercase tracking-widest mb-8 border-b border-stone-100 pb-4">
                {t.serviceDetail}
              </h2>
              <p className="text-xl text-stone-700 leading-relaxed italic border-l-4 border-[#dcc296] pl-8 py-2 mb-10 font-sans">
                {description}
              </p>
              
              <h3 className="text-lg font-serif text-stone-800 uppercase tracking-wider mb-6">
                {whyChoose}
              </h3>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[Sparkles, Clock, ShieldCheck].map((Icon, index) => (
                  <div key={index} className="flex flex-col items-center p-6 bg-[#fcfaf7] border border-stone-50 text-center hover:shadow-md transition-shadow">
                    <Icon size={24} className="text-[#dcc296] mb-4" strokeWidth={1.5} />
                    <p className="text-[11px] font-sans font-bold uppercase tracking-tighter text-stone-700">
                      {benefits[index]}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-stone-600 leading-relaxed font-sans text-justify">
                {longDescription}
              </p>
            </div>

            {/* Video Section - Đảm bảo stacking context thấp hơn modal */}
            <div className="relative z-0 rounded-sm overflow-hidden shadow-xl">
              <ServiceVideo 
                youtubeId={service.youtubeId} 
                thumbnail={service.image} 
                locale={locale} 
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 bg-[#fcfaf7] p-8 md:p-10 rounded-sm border border-stone-100 shadow-sm">
              <div className="mb-10">
                <h3 className="text-stone-500 text-[10px] uppercase tracking-[0.3em] mb-3 font-bold">
                  {t.bookingTitle}
                </h3>
                <p className="text-[#dcc296] text-4xl font-sans font-bold">
                  {service.price}
                </p>
                <div className="flex items-center gap-1 mt-2">
                   {[...Array(5)].map((_, i) => (
                     <Sparkles key={i} size={12} className="fill-[#dcc296] text-[#dcc296]" />
                   ))}
                   <span className="text-[10px] text-stone-400 ml-2">({service.reviewCount}+ reviews)</span>
                </div>
                <p className="mt-4 text-stone-400 text-[10px] italic leading-relaxed">
                  * {t.guarantee}
                </p>
              </div>

              <BookingButton label={t.btnBook} />

              <div className="mt-8 pt-8 border-t border-stone-200">
                <p className="text-[10px] text-stone-400 uppercase tracking-widest leading-loose font-sans">
                  {footerAddress} <br/>
                  {t.hotline}: <span className="text-stone-900 font-bold">0876 712 808</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return locales.flatMap((locale) => 
    SERVICES_DATA.map((s) => ({ 
      locale, 
      slug: s.slug 
    }))
  );
}