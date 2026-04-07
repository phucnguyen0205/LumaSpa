"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ServiceData } from "./data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

interface Props {
  gallery: string[];
  services: ServiceData[];
  locale: string;
  translations: {
    heroQuote: string;
    heroDesc: string;
    aboutSubtitle: string;
    aboutTitle: string;
    aboutDesc: string;
    aboutContact: string;
    featuresTagline: string;
    featuresTitle: string;
    featuresItems: { title: string; desc: string }[];
    treatmentTitle: string;
    treatmentDesc: string;
    discover: string;
  };
}
export default function ServiceListView({ gallery, services, locale, translations }: Props) {
  return (
    <main className="pt-32 pb-20 space-y-24 md:space-y-32 overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="container mx-auto px-6 max-w-6xl space-y-12 md:space-y-16">
        <section className="text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-5xl font-serif text-[#4a5d45] mb-8 leading-tight italic max-w-4xl"
          >
            “{translations.heroQuote}”
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-stone-600 max-w-2xl leading-relaxed text-lg italic"
          >
            {translations.heroDesc}
          </motion.p>
        </section>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
      </div>

      {/* SECTION: ABOUT */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="w-full bg-white border-y border-stone-100 py-16 md:py-24"
      >
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-[45%]">
            <div className="relative aspect-[4/5] overflow-hidden group shadow-sm rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800" 
                alt="Luma Spa Interior"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-[55%] space-y-8">
            <div className="space-y-4">
              <p className="text-[#4a5d45]/60 text-sm font-serif uppercase tracking-[0.3em] italic">{translations.aboutSubtitle}</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#4a5d45] leading-[1.2]">{translations.aboutTitle}</h2>
            </div>
            <p className="text-stone-500 leading-relaxed italic text-lg">{translations.aboutDesc}</p>
            <div className="pt-4">
              <a href={`/${locale}/contact`} className="inline-block border-b border-[#4a5d45] text-[#4a5d45] pb-1 text-sm font-bold tracking-[0.2em] uppercase hover:text-[#dcc296] hover:border-[#dcc296] transition-all">
                {translations.aboutContact}
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-6 max-w-6xl space-y-24 md:space-y-32">
        {/* SECTION: GALLERY */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-12 md:py-20"
        >
          {gallery.map((src, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className={`relative aspect-[3/4] overflow-hidden shadow-sm group border border-stone-100 transition-all duration-700
                ${idx % 2 === 0 ? "md:-translate-y-8" : "md:translate-y-8"}`}
            >
              <Image src={src} alt={`Luma Gallery ${idx}`} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.95]" />
            </motion.div>
          ))}
        </motion.section>

        {/* SECTION: FEATURES */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <p className="text-[#4a5d45]/60 text-lg font-serif mb-2 italic">{translations.featuresTagline}</p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#4a5d45] mb-16">{translations.featuresTitle}</h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {translations.featuresItems.map((item, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { delay: i * 0.2 } }
                }}
                className="flex flex-col items-center group px-4"
              >
                <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-full border border-stone-200 text-[#4a5d45] group-hover:bg-[#4a5d45] group-hover:text-white transition-all duration-500 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-stone-800 mb-4 uppercase tracking-[0.2em] text-sm">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed italic max-w-[280px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION: SERVICE GRID */}
        <section className="pb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-stone-200 pb-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif text-[#4a5d45]">{translations.treatmentTitle}</h2>
              <div className="w-20 h-px bg-[#4a5d45]/30" />
            </div>
            <p className="text-stone-500 italic max-w-sm text-right hidden md:block">{translations.treatmentDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
  {services.map((service, index) => {
    // Xác định locale hiện tại
    const currentLocale = (locale as "vi" | "en" | "zh" | "ko") || "vi";

    return (
      <motion.a
        key={service.slug}
        href={`/${locale}/services/${service.slug}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group block"
      >
        <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-stone-200 shadow-sm rounded-sm">
          <Image
            src={service.image}
            alt={service.name[currentLocale]}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {service.highlight && (
            <div className="absolute top-4 right-4 bg-[#4a5d45] text-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] shadow-lg">
              Premium
            </div>
          )}
        </div>

        <div className="space-y-3">
          {/* Lấy tên theo ngôn ngữ */}
          <h3 className="text-xl font-serif text-stone-800 group-hover:text-[#4a5d45] transition-colors uppercase tracking-wider">
            {service.name[currentLocale]}
          </h3>
          
          {/* Lấy mô tả theo ngôn ngữ */}
          <p className="text-stone-500 text-sm line-clamp-2 italic leading-relaxed">
            {service.description[currentLocale]}
          </p>

          <div className="flex justify-between items-center pt-4 border-t border-stone-100">
            <span className="text-[#4a5d45] font-bold text-sm tracking-widest">
              {service.price}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 group-hover:text-[#4a5d45] transition-colors flex items-center gap-2">
              {translations.discover} <span>→</span>
            </span>
          </div>
        </div>
      </motion.a>
    );
  })}
</div>
        </section>
      </div>
    </main>
  );
}