"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl"; // Thêm useLocale
import { posts } from "@/lib/blog-data"; // Import dữ liệu thật từ file của bạn

const NewsAndReview = () => {
  const t = useTranslations("home");
  const locale = useLocale(); // Lấy locale hiện tại (vi, en, ko, zh)

  // Lấy 2 bài viết mới nhất dựa trên locale đang chọn
  const newsItems = posts
    .filter((post) => post.locale === locale)
    .slice(0, 2); // Chỉ lấy 2 bài đầu tiên trong danh sách

  return (
    <section className="py-12 md:py-16 bg-[#3d2b1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* CỘT TRÁI: VIDEO REVIEW */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#CC6600] rounded-lg shadow-lg">
                <Play size={18} className="text-[#fcfaf7] fill-current" />
              </div>
              <h2 className="text-lg md:text-xl font-serif font-bold text-[#fcfaf7] uppercase tracking-wider">
                {/* Dùng i18n cho tiêu đề video nếu cần */}
                Không gian tại Luma Spa
              </h2>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-[4px] border-[#8B795E]/20">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3F1P6HPpfPE" 
                title="Luma Spa Review Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CỘT PHẢI: TIN TỨC */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#8B795E] rounded-lg">
                <div className="w-4 h-4 border-2 border-[#fcfaf7] rounded-sm" />
              </div>
              <h2 className="text-lg md:text-xl font-serif font-bold text-[#fcfaf7] uppercase tracking-wider">
                {/* Có thể dùng t("newsTitle") từ file json */}
                Tin làm đẹp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {newsItems.map((item) => (
                <Link 
                  href={`/${locale}/news/${item.slug}`} // Chuyển sang href thật
                  key={item.slug}
                >
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer p-4 rounded-2xl bg-[#8B795E]/5 hover:bg-[#8B795E]/10 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 shadow-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                      />
                    </div>
                    <h3 className="font-bold text-[#f3d5b5] text-sm md:text-base leading-snug group-hover:text-[#CC6600] transition-colors mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#fcfaf7]/60 line-clamp-2 font-light leading-relaxed">
                      {item.description} {/* Đổi desc thành description cho đúng interface Post */}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* NÚT XEM THÊM */}
            <div className="flex justify-center md:justify-end pt-4">
              <Link 
                href={`/${locale}/news`} // Chuyển hướng về trang danh sách tin tức
                className="flex items-center gap-2 bg-[#8B795E] hover:bg-[#a65300] text-[#fcfaf7] px-8 py-3 rounded-full font-bold text-sm transition-all shadow-xl group uppercase tracking-widest"
              >
                {/* Dùng t("seeMore") từ i18n */}
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