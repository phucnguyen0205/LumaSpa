"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { 
  motion, 
  useMotionValue, 
  useAnimationFrame, 
  wrap, 
  useTransform
} from "framer-motion";

const ServicesSection = () => {
  const t = useTranslations("home");
  const hairScalpKeys = ["sea_calm", "deep_ocean", "ocean_abyss"];
  
  const comboGroups = [
    { key: "foot_neck_shoulder", featured: true, prices: [{time: "60p", price: "320k"}, {time: "90p", price: "420k"}, {time: "120p", price: "520k"}] },
    { key: "neck_shoulder", featured: false, prices: [{time: "60p", price: "340k"}, {time: "90p", price: "440k"}] },
    { key: "body", featured: false, prices: [{time: "60p", price: "340k"}, {time: "90p", price: "410k"}, {time: "120p", price: "510k"}] },
    { key: "thai", featured: false, prices: [{time: "60p", price: "360k"}, {time: "90p", price: "460k"}, {time: "120p", price: "560k"}] },
    { key: "aroma", featured: false, prices: [{time: "60p", price: "340k"}, {time: "90p", price: "440k"}, {time: "120p", price: "540k"}] },
    { key: "foot", featured: false, prices: [{time: "45p", price: "250k"}, {time: "60p", price: "290k"}, {time: "90p", price: "400k"}, {time: "120p", price: "500k"}] },
  ];

  const duplicatedCombos = [...comboGroups, ...comboGroups];
  const baseX = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame((t, delta) => {
    if (isPaused) return;
    let moveBy = -0.1 * (delta / 50); 
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    /* 1. NỀN CHÍNH: Dùng nâu cà phê đậm để tạo chiều sâu và sang trọng */
    <section className="py-24 bg-[#3d2b1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-[#CC6600] uppercase tracking-[0.4em] text-xs font-bold">
            {t("services.label")}
          </p>
          <h2 className="text-[#fcfaf7] text-4xl md:text-6xl font-serif font-bold">
            {t("services.title")}
          </h2>
          <p className="max-w-3xl mx-auto text-[#fcfaf7]/70 text-sm md:text-base leading-relaxed font-light">
            {t("services.description")}
          </p>
          <div className="flex justify-center pt-4">
             {/* Thanh trang trí dùng màu nền #8B795E */}
             <div className="h-[2px] w-24 bg-[#8B795E]"></div>
          </div>
        </div>

        <div className="space-y-32">
          {/* 2. HAIR & SCALP SECTION */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-[#f3d5b5] text-3xl md:text-4xl font-serif font-bold mb-3 uppercase tracking-tight italic opacity-90">
                {t("services.sections.hair_scalp.title")}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hairScalpKeys.map((key, index) => (
                /* CARD: Sử dụng mã màu #8B795E làm nền thẻ để nổi bật trên nền nâu đậm */
                <div key={key} className="rounded-2xl border border-white/5 bg-[#8B795E] overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image src={`/images/ser-${index + 1}.png`} alt={key} fill className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.85] group-hover:brightness-100" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start border-b border-[#3d2b1f]/20 pb-4 mb-6">
                      <h4 className="text-[#fcfaf7] text-2xl font-serif font-bold leading-tight">{t(`services.hair_scalp_items.${key}.name`)}</h4>
                      <div className="text-right">
                        <p className="text-[#3d2b1f] font-black text-xl">{t(`services.hair_scalp_items.${key}.price`)}</p>
                        <p className="text-[#fcfaf7]/70 text-[10px] uppercase font-bold tracking-tighter">{t(`services.hair_scalp_items.${key}.time`)}</p>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {[0, 1, 2, 3, 4, 5].map((i) => {
                        const messageKey = `services.hair_scalp_items.${key}.items.${i}`;
                        if (t.has(messageKey)) {
                          return (
                            <li key={i} className="text-[#3d2b1f] text-sm flex gap-3 items-start leading-snug font-medium">
                              <span className="text-[#CC6600] flex-shrink-0">✦</span>
                              <span>{t(messageKey)}</span>
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;