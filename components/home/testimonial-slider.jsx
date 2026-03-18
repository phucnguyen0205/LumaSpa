"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const AUTO_PLAY_INTERVAL = 3500;

  useEffect(() => {
    if (isPaused) return; 

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval); // Dọn dẹp bộ nhớ khi component bị hủy
  }, [items.length, isPaused]);

  const variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div 
      className="relative md:pl-16 border-l border-stone-800/10 min-h-[350px] flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}  // Tạm dừng khi rê chuột
      onMouseLeave={() => setIsPaused(false)} // Chạy lại khi bỏ chuột ra
    >
      
      <div className="relative overflow-hidden flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-10"
          >
            <p className="text-stone-800 text-lg md:text-xl leading-relaxed font-light italic min-h-[140px]">
              "{items[activeIndex].content}"
            </p>

            <div className="space-y-1">
              <h4 className="text-2xl md:text-3xl font-serif text-stone-900">
                {items[activeIndex].author}
              </h4>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-700 font-bold">
                {items[activeIndex].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots & Progress Bar */}
      <div className="flex items-center gap-4 mt-12 justify-center md:justify-start">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative h-1.5 transition-all duration-300 overflow-hidden rounded-full bg-stone-900/10"
            style={{ width: activeIndex === index ? "40px" : "10px" }}
          >
            {/* Hiệu ứng thanh chạy nhỏ bên trong dot đang active (tùy chọn) */}
            {activeIndex === index && (
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: isPaused ? "100%" : "100%" }}
                transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                className="absolute inset-0 bg-amber-800"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}