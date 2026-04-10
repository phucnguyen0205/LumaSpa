"use client";
import React, { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const PanoramaFullWidth = () => {
  const t = useTranslations("about");
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const [position, setPosition] = useState(50); // Mặc định ở giữa
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Tính toán giới hạn trượt để ảnh không bị lòi khoảng trắng
    const calculateOffset = () => {
      if (containerRef.current && imageRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const imageWidth = imageRef.current.offsetWidth;
        // Độ chênh lệch giữa ảnh và khung
        setOffset(imageWidth - containerWidth);
      }
    };

    calculateOffset();
    window.addEventListener("resize", calculateOffset);
    return () => window.removeEventListener("resize", calculateOffset);
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = clientX - left;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setPosition(percentage);
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[70vh] lg:h-[90vh] overflow-hidden bg-[#121212]">
      <div
        ref={containerRef}
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        className="relative w-full h-full cursor-ew-resize overflow-hidden flex justify-center items-center"
      >
        {/* Lớp chứa ảnh - Giữ đúng tỉ lệ ảnh gốc */}
        <div
          ref={imageRef}
          className="absolute h-full w-auto min-w-full transition-transform duration-500 ease-out will-change-transform"
          style={{
            // position = 50% thì ảnh ở giữa: translate = 0
            // position = 0% (chuột trái) thì ảnh trượt sang phải: translate = + (offset/2)
            // position = 100% (chuột phải) thì ảnh trượt sang trái: translate = - (offset/2)
            transform: `translateX(${(50 - position) * (offset / 100)}px)`,
          }}
        >
          <img
            src="/images/360.jpg"
            alt={t("panorama_alt") || "360 View"}
            className="h-full w-auto max-w-none object-cover"
            onLoad={() => {
               // Trigger lại việc tính toán khi ảnh đã load xong chiều rộng
               window.dispatchEvent(new Event('resize'));
            }}
          />
        </div>

        {/* Overlay trang trí & Hướng dẫn */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Gradient mờ 2 cạnh */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/40 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/40 to-transparent"></div>
          
          {/* Tag hướng dẫn */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
             <div className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <p className="text-white text-xs tracking-widest uppercase opacity-70">
                   {t("panorama_hint") || "Move to explore 360°"}
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanoramaFullWidth;