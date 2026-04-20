"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ContactModal from "./contact-modal";

export default function HeroSection() {
  const { t } = useTranslation("home");
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // Giữ ảnh mặc định để trang web không bị trắng trong lúc chờ load database
  const [banners, setBanners] = useState<string[]>(["/images/hero-banner.jpg"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadBannersFromDB = async () => {
      try {
        // Gọi API để lấy dữ liệu thật từ MongoDB
        const res = await fetch("/api/settings?key=luma_banners");
        if (res.ok) {
          const data = await res.json();
          // Nếu database có ảnh thì mới cập nhật, không thì dùng ảnh mặc định
          if (Array.isArray(data) && data.length > 0) {
            setBanners(data);
          }
        }
      } catch (e) {
        console.error("Lỗi lấy banner từ Database:", e);
      }
    };

    loadBannersFromDB();
  }, []);
useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners]);
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-stone-100">
      {/* Background Banners */}
      {banners.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Luma Spa Banner ${index + 1}`}
            className="w-full h-full object-cover brightness-[0.75]"
            loading={index === 0 ? "eager" : "lazy"} 
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-[5]" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl drop-shadow-lg">
        <h2 className="text-[#dcc296] font-medium tracking-[0.4em] mb-4 uppercase animate-in fade-in slide-in-from-bottom-4 duration-700">
          {t("hero.subtitle")}
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {t("hero.title")}
        </h1>
        
        <p className="text-lg md:text-xl mb-10 font-light text-stone-100 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {t("hero.description")}
        </p>
        
        {/* Nút bấm Liên hệ */}
        <button 
          onClick={() => setIsContactOpen(true)}
          className="group relative overflow-hidden border-2 border-[#dcc296] px-12 py-4 transition-all duration-300 hover:border-transparent"
        >
          <span className="relative z-10 text-[#dcc296] group-hover:text-white font-bold tracking-widest uppercase transition-colors duration-300">
            {t("hero.cta")}
          </span>
          <div className="absolute inset-0 bg-[#dcc296] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      {/* Indicators */}
      {banners.length > 1 && (
        <div className="absolute bottom-10 flex gap-3 z-20">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-500 ${
                i === currentIndex ? "w-12 bg-[#dcc296]" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* Modal liên hệ hiện ra khi click nút */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </section>
  );
}