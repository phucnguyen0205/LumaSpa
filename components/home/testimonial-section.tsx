import { getTranslations } from "next-intl/server";
import TestimonialSlider from "./testimonial-slider";

// 1. Định nghĩa interface để sửa lỗi TS(2322)
interface TestimonialSectionProps {
  locale: string;
}

export const dynamic = 'force-dynamic';

// 2. Nhận locale từ Props truyền từ HomePage xuống
export default async function TestimonialSection({ locale }: TestimonialSectionProps) {
  
  // 3. Sử dụng locale trực tiếp trong getTranslations để đảm bảo SEO & Đa ngôn ngữ
  const t = await getTranslations({
    locale,
    namespace: "home"
  });

  const testimonialKeys = ["customer_1", "customer_2", "customer_3", "customer_4"];

  const items = testimonialKeys.map((key) => ({
    content: t(`testimonials.items.${key}.content`),
    author: t(`testimonials.items.${key}.author`),
    role: t(`testimonials.items.${key}.role`)
  }));

  return (
    <section className="bg-white py-16 md:py-24">
      {/* Bạn có thể xóa dòng DEBUG này sau khi đã chạy ổn định */}
      <div className="hidden">DEBUG LOCALE: {locale}</div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#FFCC66] rounded-sm p-8 md:p-20 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-16 items-start relative z-10">
            
            {/* LEFT */}
            <div className="w-full md:w-5/12 flex flex-col">
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-3 tracking-tight">
                  {t("testimonials.title")}
                </h2>
                <p className="text-stone-700 text-sm md:text-base italic font-light">
                  {t("testimonials.subtitle")}
                </p>
              </div>

              <div className="relative w-full aspect-square bg-[#924816] rounded-sm shadow-2xl flex items-center justify-center overflow-hidden">
                <span className="text-white/10 font-serif text-7xl font-bold uppercase rotate-[-25deg] select-none">
                  {t("testimonials.static_feedback_label")}
                </span>

                {/* STATIC CARD (Dùng items[3] - Khách hàng thứ 4) */}
                <div className="absolute bg-white p-5 rounded-2xl shadow-2xl w-[85%] left-6 bottom-16 transform -rotate-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-stone-300 rounded-full" />
                    <div>
                      <p className="text-sm font-bold text-stone-900">
                        {items[3].author}
                      </p>
                      <p className="text-xs text-amber-500">★★★★★</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-stone-500 italic">
                    {items[3].content}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT → CLIENT SLIDER */}
            <div className="w-full md:w-7/12 pt-10 md:pt-32">
              <TestimonialSlider items={items} />
            </div>

          </div>
        </div>
      </div>

      {/* 🔥 Schema SEO - Giúp hiển thị Review trên Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": items.map((item, i) => ({
              "@type": "Review",
              "position": i + 1,
              "author": {
                "@type": "Person",
                "name": item.author
              },
              "reviewBody": item.content,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              }
            }))
          })
        }}
      />
    </section>
  );
}