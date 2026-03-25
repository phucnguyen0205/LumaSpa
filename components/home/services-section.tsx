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
  
  // Cấu hình Hair & Scalp (Giữ nguyên 100% như cũ)
  const hairScalpKeys = ["sea_calm", "deep_ocean", "ocean_abyss"];
  
  // Cấu hình Combo
  const comboGroups = [
    { key: "foot_neck_shoulder", featured: true, prices: [{time: "60p", price: "320k"}, {time: "90p", price: "420k"}, {time: "120p", price: "520k"}] },
    { key: "neck_shoulder", featured: false, prices: [{time: "60p", price: "340k"}, {time: "90p", price: "440k"}] },
    { key: "body", featured: false, prices: [{time: "60p", price: "340k"}, {time: "90p", price: "410k"}, {time: "120p", price: "510k"}] },
    { key: "thai", featured: false, prices: [{time: "60p", price: "360k"}, {time: "90p", price: "460k"}, {time: "120p", price: "560k"}] },
    { key: "aroma", featured: false, prices: [{time: "60p", price: "340k"}, {time: "90p", price: "440k"}, {time: "120p", price: "540k"}] },
    { key: "foot", featured: false, prices: [{time: "45p", price: "250k"}, {time: "60p", price: "290k"}, {time: "90p", price: "400k"}, {time: "120p", price: "500k"}] },
  ];

  // NHÂN BẢN 1 LẦN (Tổng cộng 2 bộ để tạo vòng lặp vô tận mượt mà)
  const duplicatedCombos = [...comboGroups, ...comboGroups];

  const baseX = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame((t, delta) => {
    if (isPaused) return;

    // Tốc độ di chuyển (giảm số này nếu muốn chậm lại)
    let moveBy = -0.1 * (delta / 50); 
    baseX.set(baseX.get() + moveBy);
  });

  // WRAP Ở -50%: Vì ta có 2 bộ item giống hệt nhau nối tiếp, 
  // khi bộ 1 chạy hết (-50%), nó nhảy về 0% ngay lập tức để không lộ khoảng trống.
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <section className="py-24 bg-[#fffbf2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-[#b08b57] uppercase tracking-[0.4em] text-xs font-bold">
            {t("services.label")}
          </p>
          <h2 className="text-[#2f2a26] text-4xl md:text-6xl font-bold">
            {t("services.title")}
          </h2>
          <p className="max-w-3xl mx-auto text-[#6b6258] text-sm md:text-base leading-relaxed font-light">
            {t("services.description")}
          </p>
          <div className="flex justify-center pt-4">
             <div className="h-[1px] w-24 bg-[#b08b57]"></div>
          </div>
        </div>

        <div className="space-y-24">
          {/* 1. HAIR & SCALP SECTION - GIỮ NGUYÊN */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-[#6b4f3a] text-3xl md:text-4xl font-bold mb-3 uppercase tracking-tight">{t("services.sections.hair_scalp.title")}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hairScalpKeys.map((key, index) => (
                <div key={key} className="rounded-3xl border border-[#eadcc7] bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col relative group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image src={`/images/ser-${index + 1}.png`} alt={key} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start border-b border-[#f3ece0] pb-4 mb-6">
                      <h4 className="text-[#6b4f3a] text-2xl font-bold">{t(`services.hair_scalp_items.${key}.name`)}</h4>
                      <div className="text-right">
                        <p className="text-[#b08b57] font-bold">{t(`services.hair_scalp_items.${key}.price`)}</p>
                        <p className="text-[#8e8579] text-[10px] uppercase tracking-tighter">{t(`services.hair_scalp_items.${key}.time`)}</p>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {[0, 1, 2, 3, 4, 5].map((i) => {
                        const messageKey = `services.hair_scalp_items.${key}.items.${i}`;
                        if (t.has(messageKey)) {
                          return (
                            <li key={i} className="text-[#5f584f] text-sm flex gap-3 items-start leading-snug">
                              <span className="text-[#b08b57] flex-shrink-0">✦</span>
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

          {/* 2. COMBO SECTION - ĐÃ LOẠI BỎ DRAG, CHỈ TỰ CUỘN VÀ HOVER STOP */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-[#6b4f3a] text-3xl md:text-4xl font-bold mb-3 uppercase tracking-tight">{t("services.sections.combos.title")}</h3>
            </div>

            <div 
              className="relative cursor-default"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div 
                className="flex gap-6 w-max"
                style={{ x }} // Sử dụng x đã wrap phần trăm để lặp vô tận
              >
                {duplicatedCombos.map((group, idx) => (
                  <div 
                    key={`${group.key}-${idx}`} 
                    className={`w-[280px] md:w-[320px] rounded-3xl p-6 border-2 flex-shrink-0 select-none ${group.featured ? "border-[#caa56a] bg-[#fffaf3] shadow-md" : "border-[#eadcc7] bg-white"} relative flex flex-col justify-between hover:shadow-xl transition-all duration-500`}
                  >
                    {group.featured && (
                      <div className="absolute top-[-14px] left-8 bg-[#b08b57] text-white text-[10px] font-black px-4 py-1.5 rounded-full z-10">
                        {t("services.best_choice")}
                      </div>
                    )}
                    <div>
                      <h4 className="text-[#6b4f3a] text-lg font-black mb-8 uppercase tracking-tighter flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#b08b57] rounded-full"></span>
                        {t(`services.combo_items.${group.key}`)}
                      </h4>
                      <div className="space-y-5">
                        {group.prices.map((p, pIdx) => (
                          <div key={pIdx} className="flex justify-between items-center border-b border-dashed border-[#eadcc7] pb-3">
                            <span className="text-[#5f584f] text-sm font-medium">{p.time}</span>
                            <span className="font-bold text-lg text-[#6b4f3a]">{p.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className="mt-10 w-full border border-[#6b4f3a] text-[#6b4f3a] py-3 rounded-xl hover:bg-[#6b4f3a] hover:text-white transition-all duration-300 font-bold text-[10px] uppercase tracking-widest">
                      {t("services.cta_details")}
                    </button>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* 3. EXTRA SERVICES */}
            <div className="max-w-4xl mx-auto pt-8">
              <div className="rounded-3xl p-8 border-2 border-dashed border-[#eadcc7] bg-[#fcf9f5] flex flex-col md:flex-row justify-between items-center gap-6">
                <h4 className="text-[#6b4f3a] text-xl font-black mb-0 uppercase tracking-tighter flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#b08b57] rounded-full"></span>
                  {t("services.combo_items.extra")}
                </h4>
                <div className="flex gap-12">
                  <div className="flex flex-col items-center">
                    <span className="text-[#5f584f] text-xs uppercase tracking-widest mb-1">{t("services.combo_items.coin_rubbing")}</span>
                    <span className="font-bold text-[#6b4f3a] text-2xl">49k</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[#5f584f] text-xs uppercase tracking-widest mb-1">{t("services.combo_items.cupping")}</span>
                    <span className="font-bold text-[#6b4f3a] text-2xl">49k</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;