"use client"; // Cần thiết để sử dụng Framer Motion và useState

import { notFound } from "next/navigation";
import Script from "next/script";
import Image from "next/image";

import { Play, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_DATA } from "./data";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const locales = ["vi", "en", "ko", "zh"];
const BASE_URL = "https://lumaspa.com.vi";

// 1. METADATA SEO (Phần này nên để ở file page.tsx gốc nếu bạn tách Client Component)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = SERVICES_DATA.find((s: { slug: string; }) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  const name = service.name[locale as keyof typeof service.name] || service.name.vi;
  const description = service.description[locale as keyof typeof service.description] || service.description.vi;
  const currentUrl = `${BASE_URL}/${locale}/services/${slug}`;

  return {
    title: `${name} | Luma Spa Da Nang`,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        "vi-VN": `${BASE_URL}/vi/services/${slug}`,
        "en-US": `${BASE_URL}/en/services/${slug}`,
        "ko-KR": `${BASE_URL}/ko/services/${slug}`,
        "zh-CN": `${BASE_URL}/zh/services/${slug}`,
        "x-default": `${BASE_URL}/en/services/${slug}`,
      },
    },
  };
}

// COMPONENT VIDEO RIÊNG BIỆT ĐỂ XỬ LÝ PLAY/PAUSE & RIPPLE
const ServiceVideo = ({ youtubeId, thumbnail, locale, name }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-review" className="scroll-mt-32 py-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-[#dcc296] p-3 rounded-full shadow-lg shadow-[#dcc296]/20">
          <Play size={20} className="text-white fill-current" />
        </div>
        <h2 className="text-2xl font-serif font-bold uppercase tracking-widest text-stone-900">
          {locale === 'vi' ? 'Trải nghiệm thực tế' : 'Actual Experience'}
        </h2>
      </div>

      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black group">
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.div
              key="thumbnail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 cursor-pointer flex items-center justify-center z-10"
            >
              <div className="absolute inset-0 bg-[#dcc296]/20 backdrop-blur-[2px] group-hover:bg-[#dcc296]/30 transition-all duration-500" />
              <Image
                src={thumbnail}
                alt={name}
                fill
                className="object-cover brightness-75 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-20 flex items-center justify-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: [1, 2.5], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
                    className="absolute w-20 h-20 border border-[#dcc296] rounded-full"
                  />
                ))}
                <div className="w-20 h-20 bg-[#dcc296] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Play size={32} className="text-white fill-white ml-1" />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&hl=${locale}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const service = SERVICES_DATA.find((s: { slug: string; }) => s.slug === slug);
  if (!service) return notFound();

  const name = service.name[locale as keyof typeof service.name] || service.name.vi;
  const description = service.description[locale as keyof typeof service.description] || service.description.vi;

  // JSON-LD Schema (Giữ nguyên cho SEO)
  const jsonLd = { /* ... như cũ ... */ };

  return (
    <main className="min-h-screen pb-20 bg-white font-sans">
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* BANNER */}
      <section className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden">
        <Image src={service.image} alt={name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-[#dcc296] uppercase tracking-[0.4em] text-sm mb-4 font-serif">Luma Spa Da Nang</p>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white uppercase tracking-[0.1em] drop-shadow-2xl">
              {name}
            </h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <article className="lg:col-span-2 space-y-16">
            <nav className="flex items-center gap-2 text-[10px] text-stone-400 uppercase tracking-widest font-bold">
               <a href={`/${locale}`} className="hover:text-[#dcc296]">Home</a>
               <ChevronRight size={10} />
               <a href={`/${locale}/services`} className="hover:text-[#dcc296]">Services</a>
               <ChevronRight size={10} />
               <span className="text-stone-900">{name}</span>
            </nav>

            <div className="prose prose-stone max-w-none">
              <h2 className="text-2xl font-serif text-stone-900 uppercase tracking-widest mb-6">
                {locale === 'vi' ? 'Thông tin dịch vụ' : 'Service Details'}
              </h2>
              <p className="text-xl text-stone-700 leading-relaxed italic border-l-4 border-[#dcc296] pl-8 py-2">
                {description}
              </p>
            </div>

            {/* GỌI COMPONENT VIDEO ĐÃ BUILD LẠI */}
            <ServiceVideo 
              youtubeId={service.youtubeId} 
              thumbnail={service.image} 
              locale={locale} 
              name={name}
            />
          </article>

          {/* SIDEBAR BÁO GIÁ */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 bg-[#fcfaf7] p-8 md:p-10 rounded-sm border border-stone-100 shadow-sm">
              <div className="mb-10">
                <h3 className="text-stone-500 text-[10px] uppercase tracking-[0.3em] mb-3 font-bold">
                  {locale === 'vi' ? 'Báo giá dịch vụ' : 'Investment'}
                </h3>
                <p className="text-[#dcc296] text-4xl font-serif font-bold">
                  {service.price}
                </p>
              </div>
              <div className="space-y-6">
                <a href="tel:0876712808" className="flex items-center justify-center w-full bg-[#dcc296] text-white py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-stone-900 transition-all shadow-lg">
                  {locale === 'vi' ? 'Liên hệ đặt lịch' : 'Book Appointment'}
                </a>
                <p className="text-[10px] text-stone-400 text-center leading-loose italic">
                  * {locale === 'vi' ? 'Giá bao gồm trị liệu chuyên sâu & trà thảo mộc' : 'Price includes therapy & herbal tea'}
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
  return locales.flatMap((locale) => SERVICES_DATA.map((s: { slug: any; }) => ({ locale, slug: s.slug })));
}