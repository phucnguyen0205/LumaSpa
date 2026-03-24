"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ServicesSection = () => {
  const t = useTranslations("home");

  // Mảng định danh để map dữ liệu từ JSON cho Hair & Scalp
  const hairScalpKeys = ["sea_calm", "deep_ocean", "ocean_abyss"];
  
  // Mảng định danh cho Combo - Đã cập nhật giá chuẩn từ menu thực tế
  const comboGroups = [
    { 
      key: "foot_neck_shoulder", 
      featured: true, 
      prices: [{time: "60p", price: "320k"}, {time: "90p", price: "420k"}, {time: "120p", price: "520k"}] 
    },
    { 
      key: "neck_shoulder", 
      featured: false, 
      prices: [{time: "60p", price: "340k"}, {time: "90p", price: "440k"}] 
    },
    { 
      key: "body", 
      featured: false, 
      prices: [{time: "60p", price: "340k"}, {time: "90p", price: "410k"}, {time: "120p", price: "510k"}] 
    },
    { 
      key: "thai", 
      featured: false, 
      prices: [{time: "60p", price: "360k"}, {time: "90p", price: "460k"}, {time: "120p", price: "560k"}] 
    },
    { 
      key: "aroma", 
      featured: false, 
      prices: [{time: "60p", price: "340k"}, {time: "90p", price: "440k"}, {time: "120p", price: "540k"}] 
    },
    { 
      key: "foot", 
      featured: false, 
      prices: [{time: "45p", price: "250k"}, {time: "60p", price: "290k"}, {time: "90p", price: "400k"}, {time: "120p", price: "500k"}] 
    },
  ];

  return (
    <section className="py-24 bg-[#fffbf2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* HEADER SECTION - Đã sửa lỗi đóng thẻ h2 */}
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
          
          {/* 1. HAIR & SCALP SECTION */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-[#6b4f3a] text-3xl md:text-4xl font-bold mb-3 uppercase tracking-tight">
                {t("services.sections.hair_scalp.title")}
              </h3>
              <p className="text-[#b08b57] italic tracking-widest text-sm">
                {t("services.sections.hair_scalp.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hairScalpKeys.map((key, index) => (
                <div
                  key={key}
                  className="rounded-3xl border border-[#eadcc7] bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col relative group"
                >
                  {/* Nhãn "Must Try" từ ảnh menu */}
                  {key === "ocean_abyss" && (
                    <div className="absolute top-5 right-5 z-10 bg-[#c0392b] text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg">
                        {t("services.must_try")}
                    </div>
                  )}

                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={`/images/ser-${index + 1}.jpg`}
                      alt={t(`services.hair_scalp_items.${key}.name`)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start border-b border-[#f3ece0] pb-4 mb-6">
                      <h4 className="text-[#6b4f3a] text-2xl font-bold">
                        {t(`services.hair_scalp_items.${key}.name`)}
                      </h4>
                      <div className="text-right">
                        <p className="text-[#b08b57] font-bold">{t(`services.hair_scalp_items.${key}.price`)}</p>
                        <p className="text-[#8e8579] text-[10px] uppercase tracking-tighter">{t(`services.hair_scalp_items.${key}.time`)}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-grow">
                      {[0, 1, 2, 3, 4, 5].map((i) => {
                        try {
                          const item = t(`services.hair_scalp_items.${key}.items.${i}`);
                          if (item.includes(`services.hair_scalp_items`)) return null;
                          
                          return (
                            <li key={i} className="text-[#5f584f] text-sm flex gap-3 items-start leading-snug">
                              <span className="text-[#b08b57] flex-shrink-0">✦</span>
                              <span>{item}</span>
                            </li>
                          );
                        } catch (e) { return null; }
                      })}
                    </ul>
                    <button className="w-full bg-[#6b4f3a] text-white py-4 rounded-xl hover:bg-[#b08b57] transition-all duration-300 font-bold uppercase text-xs tracking-widest shadow-md">
                      {t("services.cta_booking")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. COMBO SECTION */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-[#6b4f3a] text-3xl md:text-4xl font-bold mb-3 uppercase tracking-tight">
                {t("services.sections.combos.title")}
              </h3>
              <p className="text-[#b08b57] italic tracking-widest text-sm">
                {t("services.sections.combos.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {comboGroups.map((group) => (
                <div
                  key={group.key}
                  className={`rounded-3xl p-8 border-2 ${
                    group.featured ? "border-[#caa56a] bg-[#fffaf3] shadow-xl md:scale-105 z-10" : "border-[#eadcc7] bg-white"
                  } relative flex flex-col justify-between hover:shadow-2xl transition-all duration-500`}
                >
                  {group.featured && (
                    <div className="absolute top-[-16px] left-10 bg-[#b08b57] text-white text-[11px] font-black px-5 py-1.5 rounded-full shadow-md">
                      {t("services.best_choice")}
                    </div>
                  )}
                  <div>
                    <h4 className="text-[#6b4f3a] text-xl font-black mb-8 uppercase tracking-tighter flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#b08b57] rounded-full"></span>
                      {t(`services.combo_items.${group.key}`)}
                    </h4>
                    
                    <div className="space-y-5">
                        {group.prices.map((p, idx) => (
                          <div key={idx} className="flex justify-between items-center border-b border-dashed border-[#eadcc7] pb-3 group/price">
                            <span className="text-[#5f584f] font-medium group-hover/price:text-[#b08b57] transition-colors">{p.time}</span>
                            <span className="font-bold text-xl text-[#6b4f3a]">{p.price}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                  <button className="mt-10 w-full border-2 border-[#6b4f3a] text-[#6b4f3a] py-3 rounded-xl hover:bg-[#6b4f3a] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest">
                    {t("services.cta_details")}
                  </button>
                </div>
              ))}

              {/* Dịch vụ bổ sung (Extra Services) */}
              <div className="rounded-3xl p-8 border-2 border-dashed border-[#eadcc7] bg-[#fcf9f5] flex flex-col">
                <h4 className="text-[#6b4f3a] text-xl font-black mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#b08b57] rounded-full"></span>
                  {t("services.combo_items.extra")}
                </h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-[#eadcc7] pb-3">
                    <span className="text-[#5f584f]">{t("services.combo_items.coin_rubbing")}</span>
                    <span className="font-bold text-[#6b4f3a]">49k</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#eadcc7] pb-3">
                    <span className="text-[#5f584f]">{t("services.combo_items.cupping")}</span>
                    <span className="font-bold text-[#6b4f3a]">49k</span>
                  </div>
                </div>
                <p className="mt-auto pt-6 text-[10px] italic text-[#8e8579] text-center">
                  * Dịch vụ bổ sung chỉ áp dụng kèm theo các gói massage.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;