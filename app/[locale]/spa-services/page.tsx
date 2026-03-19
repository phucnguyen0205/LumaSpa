"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import { useTranslations } from "next-intl";

const GALLERY = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800",
];

export default function ServiceListPage() {
  const t = useTranslations("services"); 
  const [adminMenus, setAdminMenus] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("luma_service_menus");
    if (saved) {
      try {
        setAdminMenus(JSON.parse(saved));
      } catch (error) {
        console.error("Error parsing menus:", error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      
      <main className="pt-32 pb-20 space-y-24 md:space-y-32">
        {/* CONTAINER 1: HERO + DYNAMIC MENU */}
        <div className="container mx-auto px-6 max-w-6xl space-y-12 md:space-y-16">
          <section>
            <h1 className="text-3xl md:text-4xl font-serif text-[#4a5d45] mb-6 leading-tight italic">
              “{t("hero.quote")}”
            </h1>
            <p className="text-stone-600 max-w-3xl leading-relaxed">
              {t("hero.description")}
            </p>
          </section>

          <section className="flex flex-col items-center space-y-12">
            {adminMenus.length > 0 ? (
              adminMenus.map((url, index) => (
                <div 
                  key={index} 
                  className="w-full max-w-3xl shadow-2xl rounded-2xl overflow-hidden border border-stone-200 bg-white p-1 md:p-2 transition-all hover:shadow-stone-300"
                >
                  <div className="relative w-full overflow-hidden rounded-xl bg-stone-50">
                    <img
                      src={url}
                      alt={t("menu.alt")}
                      className="w-full h-auto object-contain max-h-[85vh]" 
                      loading="lazy"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full h-64 flex flex-col items-center justify-center border-2 border-dashed border-stone-300 rounded-2xl bg-white/50">
                <p className="text-stone-400 italic font-serif">
                  {t("menu.updating")}
                </p>
              </div>
            )}
          </section>
        </div>

        {/* SECTION: ABOUT (FULL WIDTH FRAME) */}
        <section className="w-full bg-white border-y border-stone-100 py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-[45%]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800" 
                  alt="Luma Spa About"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full md:w-[55%] space-y-8">
              <div className="space-y-4">
                <p className="text-[#4a5d45]/60 text-sm font-serif uppercase tracking-[0.3em] italic">
                  {t("about.subtitle")}
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-[#4a5d45] leading-[1.2]">
                  {t("about.title")}
                </h2>
              </div>
              <div className="max-w-xl">
                <p className="text-stone-500 leading-relaxed italic text-lg">
                  {t("about.description")}
                </p>
              </div>
              <div className="pt-4">
                <button className="border-b border-[#4a5d45] text-[#4a5d45] pb-1 text-sm font-bold tracking-[0.2em] uppercase hover:text-[#dcc296] hover:border-[#dcc296] transition-all">
                  {t("about.contact")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTAINER 2: GALLERY + FEATURES */}
        <div className="container mx-auto px-6 max-w-6xl space-y-24 md:space-y-32">
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.map((src, idx) => (
              <div key={idx} className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={src}
                  alt={`Luma Spa Decor ${idx}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </section>

          {/* PHẦN ĐẶC ĐIỂM DỊCH VỤ (FEATURES) */}
<section className="text-center pb-20">
  <p className="text-[#4a5d45]/60 text-lg font-serif mb-2 italic">
    {t("features.tagline")}
  </p>
  <h2 className="text-3xl md:text-4xl font-serif text-[#4a5d45] mb-16">
    {t("features.main_title")}
  </h2>
  
  <div className="grid md:grid-cols-3 gap-12 md:gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex flex-col items-center group px-4">
        {/* Icon Circle */}
        <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-full border border-stone-200 text-[#4a5d45] group-hover:bg-[#4a5d45] group-hover:text-white transition-all duration-500 shadow-sm">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-stone-800 mb-4 uppercase tracking-[0.2em] text-sm">
          {t(`features.item_${i}_title`)}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-stone-500 leading-relaxed italic max-w-[280px]">
          {t(`features.item_${i}_desc`)}
        </p>
      </div>
    ))}
  </div>
</section>
        </div>
      </main>

      <Footer />
    </div>
  );
}