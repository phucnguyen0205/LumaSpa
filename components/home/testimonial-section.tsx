"use client";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

export default function TestimonialSection() {
  // Phải khai báo namespace "home" ở đây
  const { t } = useTranslation("home");
  const [activeIndex, setActiveIndex] = useState(0);

  // Danh sách key dữ liệu ảo (Mock Data)
  const testimonialKeys = ["customer_1", "customer_2", "customer_3", "customer_4"];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#D1B673] rounded-sm p-8 md:p-20 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-16 items-start relative z-10">
            
            {/* CỘT TRÁI: KHUNG ẢNH CỐ ĐỊNH (GIỐNG ẢNH MẪU) */}
            <div className="w-full md:w-5/12 flex flex-col">
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-3 tracking-tight">
                  {t("testimonials.title")}
                </h2>
                <p className="text-stone-700 text-sm md:text-base italic font-light">
                  {t("testimonials.subtitle")}
                </p>
              </div>

              <div className="relative w-full aspect-square bg-[#5F6F52] rounded-sm shadow-2xl flex items-center justify-center overflow-hidden">
                <span className="text-white/10 font-serif text-7xl md:text-[9rem] font-bold uppercase rotate-[-12deg] select-none">
                  {t("testimonials.static_feedback_label")}
                </span>

                {/* Card đánh giá ảo đè lên ảnh (Sử dụng thông tin khách Hàn Quốc) */}
                <div className="absolute bg-white p-5 rounded-2xl shadow-2xl w-[85%] left-6 bottom-16 transform -rotate-1">
                   <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-stone-300 rounded-full" />
                      <div>
                          <p className="text-sm font-bold text-stone-900">Park Ji-hye</p>
                          <p className="text-xs text-amber-500 tracking-tighter">★★★★★</p>
                      </div>
                   </div>
                   <p className="text-[10px] leading-relaxed text-stone-500 line-clamp-2 italic">
                      {t("testimonials.items.customer_4.content")}
                   </p>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI: HIỂN THỊ DỮ LIỆU DỊCH THẬT/ẢO */}
            <div className="w-full md:w-7/12 pt-10 md:pt-32">
              <div className="relative md:pl-16 border-l border-stone-800/10 min-h-[300px] flex flex-col justify-between">
                <div className="space-y-12">
                  <p className="text-stone-800 text-lg md:text-xl leading-relaxed font-light italic">
                    {`"${t(`testimonials.items.${testimonialKeys[activeIndex]}.content`)}"`}
                  </p>
                  <div className="space-y-1">
                    <h4 className="text-2xl md:text-3xl font-serif text-stone-900">
                      {t(`testimonials.items.${testimonialKeys[activeIndex]}.author`)}
                    </h4>
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-stone-600 font-bold">
                      {t(`testimonials.items.${testimonialKeys[activeIndex]}.role`)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-12 justify-center md:justify-start">
                  {testimonialKeys.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeIndex === index ? "bg-stone-900 w-6" : "bg-stone-900/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}