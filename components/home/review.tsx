"use client";

import React, { useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronRight, Square } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { posts } from "@/lib/blog-data";

// 1. COMPONENT SÓNG: Màu vàng cát đậm đồng bộ
const RippleEffect = memo(({ color = "#B38B59" }: { color?: string }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`ripple-optimized-${i}`}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ 
            scale: [1, 3], 
            opacity: [0, 0.4, 0.2, 0] 
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ 
            willChange: "transform, opacity",
            borderColor: color 
          }}
          className="absolute w-16 h-16 border rounded-full"
        />
      ))}
    </div>
  );
});

RippleEffect.displayName = "RippleEffect";

const NewsAndReview = () => {
  const t = useTranslations("home");
  const locale = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);

  const newsItems = posts
    .filter((post) => post.locale === locale)
    .slice(0, 2);

  return (
    <section className="py-12 md:py-24 bg-[#3d2b1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* CỘT TRÁI: VIDEO REVIEW */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#B38B59] rounded-lg shadow-lg">
                <Play size={18} className="text-[#3d2b1f] fill-current" />
              </div>
              <h2 className="text-lg md:text-xl font-serif font-bold text-[#FDFBF7] uppercase tracking-wider">
                Không gian tại Luma Spa
              </h2>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black">
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  <motion.div
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 cursor-pointer group flex items-center justify-center"
                  >
                    {/* LỚP NỀN VÀNG CÁT ĐẬM MỜ (BACKDROP) */}
                    <div className="absolute inset-0 bg-[#B38B59]/30 backdrop-blur-2xl transition-all duration-700 group-hover:bg-[#B38B59]/45" />

                    {/* ẢNH THUMBNAIL - ĐÃ BỎ CLASS ZOOM (group-hover:scale-110) */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src="/images/video-thumbnail.png" 
                        alt="Luma Spa Space"
                        fill
                        className="object-cover brightness-[0.4] transition-all duration-700"
                      />
                    </div>
                    
                    {/* LỚP PHỦ GRADIENT */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3d2b1f] via-transparent to-[#B38B59]/20 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    {/* HIỆU ỨNG SÓNG VÀ NÚT PLAY */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <RippleEffect color="#B38B59" />
                      
                      <div className="relative z-10 w-20 h-20 bg-[#B38B59] rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FDFBF7] group-hover:shadow-[0_0_50px_rgba(179,139,89,0.5)]">
                        <Play size={32} className="text-[#3d2b1f] fill-[#3d2b1f] ml-1" />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/3F1P6HPpfPE?autoplay=1&rel=0" 
                      title="Luma Spa Review Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex justify-center pt-2">
              <a 
                href="https://www.youtube.com/watch?v=3F1P6HPpfPE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B38B59]/70 hover:text-[#B38B59] text-xs uppercase tracking-[0.2em] transition-colors flex items-center gap-2 group font-medium"
              >
                Xem trực tiếp trên YouTube 
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* CỘT PHẢI: TIN TỨC */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#B38B59]/20 rounded-lg">
                <Square size={18} className="text-[#B38B59] fill-[#B38B59]/30" />
              </div>
              <h2 className="text-lg md:text-xl font-serif font-bold text-[#FDFBF7] uppercase tracking-wider">
                Tin làm đẹp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsItems.map((item) => (
                <Link 
                  href={`/${locale}/news/${item.slug}`}
                  key={item.slug}
                  className="group"
                >
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="space-y-4"
                  >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-white/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-[#FDFBF7] text-base md:text-lg leading-snug group-hover:text-[#B38B59] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#FDFBF7]/60 line-clamp-2 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center md:justify-start pt-6">
              <Link 
                href={`/${locale}/news`}
                className="flex items-center gap-3 bg-[#B38B59] hover:bg-[#FDFBF7] text-[#3d2b1f] px-10 py-4 rounded-full font-bold text-xs transition-all shadow-xl group uppercase tracking-[0.2em]"
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