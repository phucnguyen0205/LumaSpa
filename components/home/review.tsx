"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const NewsAndReview = () => {
  const t = useTranslations("home");

  const newsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
      title: "Massage Toàn Thân Mang Lại Lợi Ích Gì? Những Lưu Ý Quan Trọng",
      desc: "Trong cuộc sống hiện đại, căng thẳng, đau mỏi cơ thể và áp lực tinh...",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800",
      title: "Massage Thái Là Gì? Lợi Ích Tuyệt Vời Từ Massage Thái",
      desc: "Massage Thái là một trong những kỹ thuật massage truyền thống nổi tiếng...",
    },
  ];

  return (
    // Giảm py-16 md:py-24 xuống py-8 md:py-12 để bớt thừa trên dưới
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* CỘT TRÁI (5/12): VIDEO REVIEW */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-[#b08b57] rounded-md">
                <Play size={18} className="text-white fill-current" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-[#4a3b28] uppercase tracking-tight">
                Không gian tại Luma Spa
              </h2>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-[4px] border-[#f8f5f0]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3F1P6HPpfPE" 
                title="Luma Spa Review Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CỘT PHẢI (7/12): TIN TỨC */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-[#b08b57] rounded-md">
                <div className="w-4 h-4 border-2 border-white rounded-sm" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-[#4a3b28] uppercase tracking-tight">
                Tin làm đẹp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {newsItems.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 shadow-md">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-bold text-[#2b2b2b] text-sm md:text-base leading-snug group-hover:text-[#b08b57] transition-colors mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 line-clamp-2 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* NÚT XEM THÊM - Căn phải, giảm margin top */}
            <div className="flex justify-center md:justify-end pt-2">
              <Link 
                href="/blog"
                className="flex items-center gap-2 bg-[#ffb400] hover:bg-[#e6a300] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md group"
              >
                Xem thêm tin mới
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsAndReview;