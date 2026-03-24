"use client";

import React from "react";
import { useTranslations } from "next-intl";

const CommitmentSection = () => {
  const t = useTranslations("home");

  // Các icon được thiết kế mảnh, sang trọng phù hợp với Spa
  const commitments = [
    {
      key: "quality", // Tương ứng với item_1 trong Why Choose Us hoặc tạo key mới trong JSON
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-8.062 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 8.062 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.946 8.062 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-8.062 3.42 3.42 0 010-4.438z" />
        </svg>
      )
    },
    {
      key: "organic", // Tương ứng với item_3 trong JSON
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      key: "service", // Cam kết về sự hài lòng
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-[#2f2a26] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center relative">
          
          {/* Đường kẻ trang trí giữa các item trên Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/3 w-[1px] h-20 bg-[#b08b57]/30 -translate-y-1/2"></div>
          <div className="hidden lg:block absolute top-1/2 left-2/3 w-[1px] h-20 bg-[#b08b57]/30 -translate-y-1/2"></div>

          {commitments.map((item, index) => (
            <div 
              key={item.key} 
              className="space-y-6 group cursor-default"
            >
              {/* Icon với vòng tròn sáng nhẹ bao quanh */}
              <div className="relative flex justify-center text-[#b08b57] transition-all duration-500 group-hover:text-white">
                <div className="absolute inset-0 bg-[#b08b57]/10 scale-150 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative transform group-hover:rotate-[360deg] transition-transform duration-1000">
                  {item.icon}
                </div>
              </div>

              {/* Nội dung cam kết lấy từ JSON */}
              <div className="space-y-3">
                <h3 className="text-[#b08b57] text-lg font-bold tracking-[0.2em] uppercase transition-colors group-hover:text-white">
                  {t(`commitments.${item.key}.title`)}
                </h3>
                <p className="text-gray-400 text-[13px] leading-relaxed max-w-[280px] mx-auto font-light tracking-wide italic">
                  "{t(`commitments.${item.key}.desc`)}"
                </p>
              </div>

              {/* Dấu chấm trang trí nhỏ phía dưới */}
              <div className="flex justify-center pt-2">
                <div className="w-1 h-1 bg-[#b08b57] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;