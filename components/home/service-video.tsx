"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

// Định nghĩa bộ từ điển ngay trong component hoặc import từ file constants
const VIDEO_TRANSLATIONS = {
  vi: {
    title: "Trải nghiệm thực tế",
    playAlt: "Phát video trải nghiệm"
  },
  en: {
    title: "Actual Experience",
    playAlt: "Play experience video"
  },
  ko: {
    title: "실제 경험",
    playAlt: "체험 영상 재생"
  },
  zh: {
    title: "实际体验",
    playAlt: "播放体验视频"
  }
};

export default function ServiceVideo({ 
  youtubeId, 
  thumbnail, 
  locale 
}: { 
  youtubeId: string, 
  thumbnail: string, 
  locale: string 
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Lấy nội dung dựa trên locale, fallback về tiếng Việt
  const t = VIDEO_TRANSLATIONS[locale as keyof typeof VIDEO_TRANSLATIONS] || VIDEO_TRANSLATIONS.vi;

  return (
    <section id="video-review" className="scroll-mt-32 py-8">
      <div className="flex items-center gap-4 mb-8">
        {/* Màu vàng cát đồng bộ #dcc296 */}
        <div className="bg-[#dcc296] p-3 rounded-full shadow-lg shadow-[#dcc296]/20">
          <Play size={20} className="text-white fill-current" />
        </div>
        <h2 className="text-2xl font-serif font-bold uppercase tracking-widest text-stone-900">
          {t.title}
        </h2>
      </div>

      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black group">
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.div
              key="thumbnail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 cursor-pointer flex items-center justify-center z-10"
            >
              <div className="absolute inset-0 bg-[#dcc296]/20 backdrop-blur-[2px] group-hover:bg-[#dcc296]/30 transition-all duration-500" />
              
              <Image
                src={thumbnail || "/images/video-thumbnail.png"} // Sử dụng thumbnail truyền từ props
                alt={t.playAlt}
                fill
                className="object-cover brightness-75 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hiệu ứng sóng Ripple */}
              <div className="relative z-20 flex items-center justify-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: [1, 2.5], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
                    className="absolute w-20 h-20 border border-[#dcc296] rounded-full"
                  />
                ))}
                
                <div className="w-20 h-20 bg-[#dcc296] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Play size={32} className="text-white fill-white ml-1" />
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
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}