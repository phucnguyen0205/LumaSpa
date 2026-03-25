"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("about");

  return (
    <section className="relative py-16 px-4 md:px-10 lg:px-20 bg-white overflow-hidden">
      {/* Background Hoa Sen mờ */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <Image
          src="/images/lotus-bg.png"
          alt=""
          width={500}
          height={500}
          priority={false}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* CỘT TRÁI: NỘI DUNG */}
        <div className="space-y-6 text-[#4a3b28]">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              {t("title")}
            </h2>
          </div>
          
          <p className="font-semibold text-lg italic">
            {t("welcome", {
              brand: "Luma SPA" 
            })}
          </p>

          <div className="space-y-4 leading-relaxed text-justify">
            <p>{t("description_1")}</p>
            <p>{t("description_2")}</p>
          </div>

          <p className="font-medium text-[#b08b57]">
            {t("footer_text")}
          </p>

          <button className="mt-4 px-8 py-2 border border-[#c4a47c] text-[#c4a47c] rounded-full hover:bg-[#c4a47c] hover:text-white transition-all duration-300 flex items-center gap-2 group font-bold">
            {t("cta")}
            <span className="group-hover:translate-x-1 transition-transform">›</span>
          </button>
        </div>

        {/* CỘT PHẢI: BỐ CỤC ẢNH - Đã cập nhật file từ folder images */}
        <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
          <div className="flex flex-col gap-4 h-full">
            <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-md group">
              <Image
                src="/images/services-img.png"
                alt={t("image_alt_1")}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-md group">
              <Image
                src="/images/interior-img.png"
                alt={t("image_alt_2")}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="relative h-full rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/about-home-spa.png"
              alt={t("image_alt_3")}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;