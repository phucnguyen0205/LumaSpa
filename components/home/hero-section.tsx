"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation("home");
  const [banners, setBanners] = useState<string[]>(["/images/hero-banner.jpg"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadBanners = () => {
      const saved = localStorage.getItem("luma_banners");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) setBanners(parsed);
      }
    };

    loadBanners();
    window.addEventListener("storage", loadBanners);
    return () => window.removeEventListener("storage", loadBanners);
  }, []);

  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [banners]);

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Slideshow hiệu ứng mờ dần */}
      {banners.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Vì ảnh Base64 từ máy tính không có kích thước định sẵn, 
              dùng thẻ img chuẩn hoặc unoptimized Image của Next.js */}
          <img
            src={src}
            alt="Luma Spa Banner"
            className="w-full h-full object-cover brightness-[0.65]"
          />
        </div>
      ))}

      {/* Nội dung chữ */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h2 className="text-amber-500 font-medium tracking-[0.4em] mb-4 uppercase drop-shadow-md">
          {t("hero.subtitle")}
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight drop-shadow-lg">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light text-stone-100 max-w-2xl mx-auto">
          {t("hero.description")}
        </p>
        <button className="group relative overflow-hidden border-2 border-amber-600 px-12 py-4 transition-all duration-300">
          <span className="relative z-10 text-amber-500 group-hover:text-white font-bold tracking-widest uppercase">
            {t("hero.cta")}
          </span>
          <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      {/* Chấm chỉ số slide */}
      {banners.length > 1 && (
        <div className="absolute bottom-10 flex gap-3 z-20">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-500 ${
                i === currentIndex ? "w-12 bg-amber-500" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}