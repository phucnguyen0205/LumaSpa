"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TestimonialSlider({ items, title, subtitle, label }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Guard: Tránh lỗi length nếu items chưa load
  if (!items || items.length === 0) return null;

  const AUTO_PLAY_INTERVAL = 4000;
  const currentItem = items[activeIndex];

  useEffect(() => {
    if (isPaused) return; 
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  return (
    <div className="flex flex-col md:flex-row gap-16 items-start relative z-10 w-full">
      
      {/* --- CỘT TRÁI: KHUNG ẢNH ĐỔI THEO ĐÁNH GIÁ --- */}
      <div className="w-full md:w-5/12 flex flex-col">
        <div className="mb-10 text-center md:text-left text-stone-800">
          <h2 className="text-3xl md:text-4xl font-serif mb-3 tracking-tight">{title}</h2>
          <p className="text-sm md:text-base italic font-light opacity-90">{subtitle}</p>
        </div>

        <div className="relative w-full aspect-square bg-[#924816] rounded-sm shadow-2xl flex items-center justify-center overflow-hidden">
          <span className="text-white/10 font-serif text-8xl font-bold uppercase rotate-[-25deg] select-none">
            {label}
          </span>

          {/* KHUNG ẢNH LỚN: Tự động đổi ảnh khi activeIndex thay đổi */}
          <div className="absolute top-6 right-6 w-100 h-100 border-[6px] border-white/30 rounded-md overflow-hidden shadow-xl hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image src={currentItem.image} alt={currentItem.author} fill className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* STATIC CARD: Card feedback nhỏ đổi nội dung theo ảnh */}
          <div className="absolute bg-white p-5 rounded-2xl shadow-2xl w-[90%] left-6 bottom-16 transform -rotate-1 border border-stone-100">
            <div className="flex items-center gap-4 mb-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-stone-200">
                <Image key={`avt-${activeIndex}`} src={currentItem.image} alt={currentItem.author} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-900 leading-tight">{currentItem.author}</p>
                <p className="text-xs text-amber-500">★★★★★</p>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.p 
                key={activeIndex}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-[10px] text-stone-500 italic leading-relaxed"
              >
                "{currentItem.content}"
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* --- CỘT PHẢI: NỘI DUNG SLIDER --- */}
      <div 
        className="w-full md:w-7/12 pt-10 md:pt-32 relative md:pl-16 border-l border-stone-800/10 min-h-[350px] flex flex-col justify-between"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <p className="text-stone-800 text-lg md:text-xl leading-relaxed font-light italic min-h-[140px]">
              "{currentItem.content}"
            </p>
            <div className="space-y-1">
              <h4 className="text-2xl md:text-3xl font-serif text-stone-900">{currentItem.author}</h4>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-700 font-bold">{currentItem.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS NAVIGATION */}
       <div className="flex items-center gap-4 mt-12 justify-center md:justify-start">
  {items.map((_, index) => (
    <button
      key={index}
      onClick={() => {
        setActiveIndex(index);
        setIsPaused(false); // Reset lại để chạy tiếp nếu user click
      }}
      className="relative h-1.5 transition-all duration-300 overflow-hidden rounded-full bg-stone-900/10"
      style={{ width: activeIndex === index ? "40px" : "10px" }}
    >
      {/* THANH CHẠY THỜI GIAN (Chỉ hiện khi index đang active) */}
      {activeIndex === index && (
        <motion.div
          key={`progress-${index}-${isPaused}`} // Key này giúp reset animation khi đổi slide
          initial={{ width: 0 }}
          animate={{ width: isPaused ? "0%" : "100%" }} // Dừng lại nếu đang bị Pause
          transition={{
            duration: isPaused ? 0 : AUTO_PLAY_INTERVAL / 1000,
            ease: "linear",
          }}
          className="absolute inset-0 bg-amber-800"
        />
      )}
    </button>
  ))}
</div>
      </div>
    </div>
  );
}