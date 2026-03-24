"use client";

import React from "react";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations("home");
  
  // Mapping các icon phù hợp với phong cách sang trọng của Spa
  const features = [
    { 
      key: "item_1", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ) 
    },
    { 
      key: "item_2", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ) 
    },
    { 
      key: "item_3", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
        </svg>
      ) 
    },
    { 
      key: "item_4", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ) 
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Tiêu đề phần Why Choose Us */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-[#b08b57] uppercase tracking-[0.4em] text-xs font-bold mb-4">
            {t("why_choose_us.label")}
          </p>
          <h2 className="text-[#2f2a26] text-4xl md:text-5xl font-bold tracking-tight">
            {t("why_choose_us.title")}
          </h2>
          <div className="flex justify-center mt-6">
             <div className="h-[1px] w-20 bg-[#b08b57]"></div>
          </div>
        </div>

        {/* Danh sách các giá trị cốt lõi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="text-center group cursor-default"
            >
              {/* Icon Circle với hiệu ứng hover mượt mà */}
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border border-[#eadcc7] group-hover:scale-110 group-hover:border-[#b08b57] transition-all duration-500 ease-out"></div>
                <div className="absolute inset-2 rounded-full flex items-center justify-center text-[#b08b57] group-hover:bg-[#b08b57] group-hover:text-white transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
              </div>

              {/* Nội dung text */}
              <h3 className="text-[#6b4f3a] text-lg font-bold mb-4 tracking-wide uppercase transition-colors duration-300 group-hover:text-[#b08b57]">
                {t(`why_choose_us.items.${item.key}.title`)}
              </h3>
              <p className="text-[#6b6258] text-[14px] leading-relaxed max-w-[280px] mx-auto font-light">
                {t(`why_choose_us.items.${item.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;