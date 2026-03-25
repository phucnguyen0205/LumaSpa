"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import { useTranslations } from "next-intl";

const GALLERY = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800",
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut"
    } 
  }
};

export default function ServiceListPage() {
  const t = useTranslations("services"); 

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <main className="pt-32 pb-20 space-y-24 md:space-y-32 overflow-x-hidden">
        
        {/* HERO SECTION - TẬP TRUNG VÀO THÔNG ĐIỆP CHỮ */}
        <div className="container mx-auto px-6 max-w-6xl space-y-12 md:space-y-16">
          <section className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-5xl font-serif text-[#4a5d45] mb-8 leading-tight italic max-w-4xl"
            >
              “{t("hero.quote")}”
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-stone-600 max-w-2xl leading-relaxed text-lg italic"
            >
              {t("hero.description")}
            </motion.p>
          </section>

          {/* DẢI PHÂN CÁCH NGHỆ THUẬT THAY CHO MENU ẢNH */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
        </div>

        {/* --- SECTION: ABOUT (CÓ HIỆU ỨNG) --- */}
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
                <p className="text-[#4a5d45]/60 text-sm font-serif uppercase tracking-[0.3em] italic">{t("about.subtitle")}</p>
                <h2 className="text-4xl md:text-5xl font-serif text-[#4a5d45] leading-[1.2]">{t("about.title")}</h2>
              </div>
              <p className="text-stone-500 leading-relaxed italic text-lg">{t("about.description")}</p>
              <div className="pt-4">
                <button className="border-b border-[#4a5d45] text-[#4a5d45] pb-1 text-sm font-bold tracking-[0.2em] uppercase hover:text-[#dcc296] hover:border-[#dcc296] transition-all">
                  {t("about.contact")}
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="container mx-auto px-6 max-w-6xl space-y-24 md:space-y-32">
          
          {/* --- SECTION: GALLERY (CÓ HIỆU ỨNG) --- */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-12 md:py-20"
          >
            {GALLERY.map((src, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className={`relative aspect-[3/4] overflow-hidden shadow-sm group border border-stone-100 transition-all duration-700
                  ${idx % 2 === 0 ? "md:-translate-y-8" : "md:translate-y-8"}`}
              >
                <Image src={src} alt={`Luma Gallery ${idx}`} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.95]" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.section>

          {/* --- SECTION: FEATURES (CÓ HIỆU ỨNG) --- */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center pb-20"
          >
            <p className="text-[#4a5d45]/60 text-lg font-serif mb-2 italic">{t("features.tagline")}</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4a5d45] mb-16">{t("features.main_title")}</h2>
            
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {[1, 2, 3].map((i) => (
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
                  <h3 className="font-bold text-stone-800 mb-4 uppercase tracking-[0.2em] text-sm">{t(`features.item_${i}_title`)}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed italic max-w-[280px]">{t(`features.item_${i}_desc`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}