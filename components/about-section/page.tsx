"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";

const AboutSection = () => {
  const t = useTranslations("about");
const params = useParams();
const locale = params.locale;
  return (
    /* - bg-[#8B795E]: Màu nền chủ đạo bạn đã chọn.
       - border-y border-[#fcfaf7]/10: Viền cực mảnh để tạo sự tinh tế.
    */
    <section className="relative py-20 px-4 md:px-10 lg:px-20 bg-[#8B795E] overflow-hidden">
      
      {/* HIỆU ỨNG ÁNH SÁNG (Glow effect) - Chỉnh lại tông vàng Champagne để hòa hợp với #8B795E */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Quầng sáng vàng nhẹ tỏa ra từ góc */}
        <div className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-[#f3d5b5]/20 blur-[130px] rounded-full" />
        {/* Quầng cam cháy nhẹ để giữ độ ấm */}
        <div className="absolute -bottom-[15%] -right-[5%] w-[500px] h-[500px] bg-[#CC6600]/10 blur-[110px] rounded-full" />
      </div>

      {/* ẢNH NỀN TRANG TRÍ - Nhuộm màu để tiệp hoàn toàn vào nền #8B795E */}
      <div 
        className="absolute left-[-220px] top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-15 hidden lg:block"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent 80%)',
          maskImage: 'linear-gradient(to right, black 20%, transparent 80%)',
        }}
      >
        <Image
          src="/images/background-home.png"
          alt=""
          width={900}
          height={900}
          style={{ 
            objectFit: 'contain', 
            objectPosition: 'left',
            filter: 'sepia(0.8) brightness(0.6) contrast(1.1)' 
          }}
          priority={false}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* CỘT TRÁI: NỘI DUNG */}
        <div className="space-y-6">
          <div className="space-y-2">
            {/* text-[#fcfaf7]: Màu trắng kem giúp tiêu đề cực kỳ sang trọng trên nền #8B795E */}
            <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tight text-[#fcfaf7]">
              {t("title")}
            </h2>
            <div className="w-95 h-[2px] bg-[#3d2b1f]" />
          </div>
          
          {/* text-[#3d2b1f]: Màu nâu gỗ đậm cho dòng chào mừng tạo sự vững chãi */}
          <p className="font-semibold text-xl italic text-[#3d2b1f]">
            {t("welcome", { brand: "Luma SPA" })}
          </p>

          {/* text-[#fcfaf7]/90: Chữ màu kem có độ trong suốt nhẹ để tạo cảm giác mềm mại */}
          <div className="space-y-4 leading-relaxed text-justify text-[#fcfaf7]/90 text-lg font-light">
            <p>{t("description_1")}</p>
            <p>{t("description_2")}</p>
          </div>

          <p className="font-medium text-[#fcfaf7] tracking-widest uppercase text-xs opacity-80 border-l-2 border-[#CC6600] pl-4">
            {t("footer_text")}
          </p>

          {/* Nút bấm: Nền nâu đậm để nổi bật trên nền #8B795E */}
        <Link href={`/${locale}/about`} className="inline-block mt-6">
    <button className="px-10 py-4 bg-[#3d2b1f] text-[#fcfaf7] hover:bg-[#a65300] transition-all duration-500 flex items-center gap-3 group font-bold uppercase tracking-widest text-sm shadow-xl">
      {t("cta")}
      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
    </button>
  </Link>
        </div>

        {/* CỘT PHẢI: BỐ CỤC ẢNH */}
        <div className="grid grid-cols-2 gap-5 h-[450px] md:h-[550px]">
          <div className="flex flex-col gap-5 h-full">
            <div className="relative h-1/2 rounded-3xl overflow-hidden shadow-2xl group border border-[#fcfaf7]/20">
              <Image
                src="/images/services-img.png"
                alt={t("image_alt_1")}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.9]"
              />
            </div>
            <div className="relative h-1/2 rounded-3xl overflow-hidden shadow-2xl group border border-[#fcfaf7]/20">
              <Image
                src="/images/interior.png"
                alt={t("image_alt_2")}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.9]"
              />
            </div>
          </div>
          <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl group border border-[#fcfaf7]/20">
            <Image
              src="/images/about-home.png"
              alt={t("image_alt_3")}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;