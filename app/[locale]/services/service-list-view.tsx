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
    // Bổ sung thêm stats nếu bạn muốn dùng ở Hero
    heroStats?: { experience: string; rating: string; customers: string }; 
    aboutSubtitle: string;
    aboutTitle: string;
    aboutDesc: string;
    aboutContact: string;
    featuresTagline: string;
    featuresTitle: string;
    // NÂNG CẤP Ở ĐÂY: Thêm tag và highlight
    featuresItems: { 
      title: string; 
      desc: string; 
      tag: string; 
      highlight: string 
    }[];
    treatmentTitle: string;
    treatmentDesc: string;
    discover: string;
  };
}
export default function ServiceListView({ gallery, services, locale, translations }: Props) {
  return (
    /* THAY ĐỔI: Nền nâu cà phê tối #3d2b1f cho toàn bộ trang */
    <main className="pt-32 pb-20 space-y-24 md:space-y-32 overflow-x-hidden bg-[#3d2b1f]">
      
      {/* HERO SECTION */}
      <div className="container mx-auto px-6 max-w-6xl space-y-12 md:space-y-16">
        <section className="text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            /* text-[#f3d5b5] (Vàng kem) thay cho xanh lá */
            className="text-3xl md:text-5xl font-serif text-[#f3d5b5] mb-8 leading-tight italic max-w-4xl"
          >
            “{translations.heroQuote}”
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            /* text-[#fcfaf7]/70 (Trắng kem mờ) */
            className="text-[#fcfaf7]/70 max-w-2xl leading-relaxed text-lg italic"
          >
            {translations.heroDesc}
          </motion.p>
        </section>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#8B795E]/30 to-transparent" />
      </div>

      {/* SECTION: ABOUT - Dùng nền màu đồng đất #8B795E nhẹ */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="w-full bg-[#8B795E]/5 border-y border-white/5 py-16 md:py-24"
      >
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-[45%]">
            <div className="relative aspect-[4/5] overflow-hidden group shadow-2xl rounded-2xl border border-white/5">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800" 
                alt="Luma Spa Interior"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-90"
              />
            </div>
          </div>
          <div className="w-full md:w-[55%] space-y-8">
            <div className="space-y-4">
              <p className="text-[#CC6600] text-sm font-serif uppercase tracking-[0.3em] italic">{translations.aboutSubtitle}</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#fcfaf7] leading-[1.2]">{translations.aboutTitle}</h2>
            </div>
            <p className="text-[#fcfaf7]/60 leading-relaxed italic text-lg">{translations.aboutDesc}</p>
            <div className="pt-4">
              {/* Nút kiểu text link với màu nhấn CC6600 */}
              <a href={`/${locale}/contact`} className="inline-block border-b border-[#CC6600] text-[#CC6600] pb-1 text-sm font-bold tracking-[0.2em] uppercase hover:text-[#f3d5b5] hover:border-[#f3d5b5] transition-all">
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
              className={`relative aspect-[3/4] overflow-hidden shadow-2xl group border border-white/5 rounded-xl transition-all duration-700
                ${idx % 2 === 0 ? "md:-translate-y-8" : "md:translate-y-8"}`}
            >
              <Image src={src} alt={`Luma Gallery ${idx}`} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-100" />
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
  <p className="text-[#CC6600] text-lg font-serif mb-2 italic">
    {translations.featuresTagline}
  </p>
  <h2 className="text-3xl md:text-4xl font-serif text-[#fcfaf7] mb-16">
    {translations.featuresTitle}
  </h2>

  <div className="grid md:grid-cols-3 gap-12 md:gap-8">
    {translations.featuresItems.map((item, i) => (
      <motion.div 
        key={i} 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } }
        }}
        className="flex flex-col items-center group px-4"
      >
        {/* Circle Icon */}
        <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-full border border-[#8B795E]/30 text-[#f3d5b5] bg-[#8B795E]/10 group-hover:bg-[#8B795E] group-hover:text-white transition-all duration-500 shadow-xl relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 13l4 4L19 7" />
          </svg>
          {/* Hiệu ứng vòng tròn bên ngoài khi hover */}
          <div className="absolute inset-0 rounded-full border border-[#CC6600] scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-700" />
        </div>

        <h3 className="font-bold text-[#f3d5b5] mb-2 uppercase tracking-[0.2em] text-sm">
          {item.title}
        </h3>

        {/* Điểm nhấn quan trọng (Highlight) - Tăng tính thuyết phục */}
        <p className="text-[#CC6600] text-[11px] font-bold mb-4 italic opacity-90">
          {item.highlight}
        </p>

        <p className="text-sm text-[#fcfaf7]/60 leading-relaxed italic max-w-[280px]">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>
        {/* SECTION: SERVICE GRID */}
        <section className="pb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif text-[#fcfaf7]">{translations.treatmentTitle}</h2>
              <div className="w-20 h-px bg-[#CC6600]" />
            </div>
            <p className="text-[#fcfaf7]/50 italic max-w-sm text-right hidden md:block">{translations.treatmentDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.map((service, index) => {
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
                  <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#1a120e] shadow-2xl rounded-2xl border border-white/5">
                    <Image
                      src={service.image}
                      alt={service.name[currentLocale]}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {service.highlight && (
                      /* Tag Premium đổi màu CC6600 */
                      <div className="absolute top-4 right-4 bg-[#CC6600] text-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] shadow-lg rounded-sm">
                        Premium
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-serif text-[#f3d5b5] group-hover:text-[#CC6600] transition-colors uppercase tracking-wider">
                      {service.name[currentLocale]}
                    </h3>
                    
                    <p className="text-[#fcfaf7]/60 text-sm line-clamp-2 italic leading-relaxed">
                      {service.description[currentLocale]}
                    </p>

                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                      <span className="text-[#CC6600] font-bold text-sm tracking-widest">
                        {service.price}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B795E] group-hover:text-[#f3d5b5] transition-colors flex items-center gap-2">
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