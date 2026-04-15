"use client";

import React from "react";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations("home");
  
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
    /* THAY ĐỔI 1: Nền chuyển sang màu nâu cà phê đậm #3d2b1f để hòa hợp với ServicesSection */
    <section className="py-24 bg-[#3d2b1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Tiêu đề phần Why Choose Us */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-[#CC6600] uppercase tracking-[0.4em] text-xs font-bold mb-4">
            {t("why_choose_us.label")}
          </p>
          {/* Chữ tiêu đề màu trắng kem #fcfaf7 */}
          <h2 className="text-[#fcfaf7] text-4xl md:text-5xl font-serif font-bold tracking-tight">
            {t("why_choose_us.title")}
          </h2>
          <div className="flex justify-center mt-6">
             {/* Thanh gạch ngang màu đồng #8B795E */}
             <div className="h-[2px] w-20 bg-[#8B795E]"></div>
          </div>
        </div>

        {/* Danh sách các giá trị cốt lõi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="text-center group cursor-default p-8 rounded-3xl transition-all duration-500 hover:bg-white/5"
            >
              {/* Icon Circle: Kết hợp mã #8B795E và #CC6600 */}
              <div className="relative w-24 h-24 mx-auto mb-10">
                {/* Viền tròn màu đồng mờ #8B795E */}
                <div className="absolute inset-0 rounded-full border border-[#8B795E]/30 group-hover:scale-110 group-hover:border-[#CC6600] transition-all duration-500 ease-out"></div>
                
                {/* Vòng tròn icon dùng màu nền #8B795E */}
                <div className="absolute inset-2 rounded-full flex items-center justify-center text-[#fcfaf7] bg-[#8B795E] group-hover:bg-[#CC6600] transition-all duration-500 shadow-xl">
                  {item.icon}
                </div>
              </div>

              {/* Nội dung text */}
              <h3 className="text-[#f3d5b5] text-lg font-serif font-bold mb-4 tracking-wide uppercase transition-colors duration-300 group-hover:text-[#CC6600]">
                {t(`why_choose_us.items.${item.key}.title`)}
              </h3>
              
              {/* Mô tả text kem mờ #fcfaf7/70 */}
              <p className="text-[#fcfaf7]/70 text-[14px] leading-relaxed max-w-[280px] mx-auto font-light">
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