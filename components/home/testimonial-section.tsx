import { getTranslations } from "next-intl/server";
import TestimonialSlider from "./testimonial-slider";

interface TestimonialSectionProps {
  locale: string;
}

export const dynamic = 'force-dynamic';

export default async function TestimonialSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home" });

  const testimonialKeys = ["customer_1", "customer_2", "customer_3", "customer_4"];
  
  const items = testimonialKeys.map((key, index) => ({
    content: t(`testimonials.items.${key}.content`),
    author: t(`testimonials.items.${key}.author`),
    role: t(`testimonials.items.${key}.role`),
    image: `/images/customer_${index + 1}.png` 
  }));

  return (
    /* THAY ĐỔI 1: Nền nâu tối #3d2b1f để liền mạch với News và WhyChooseUs */
    <section className="bg-[#3d2b1f] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* THAY ĐỔI 2: Box chính đổi từ màu vàng sáng sang màu #8B795E (Đồng đất). 
            Đây là màu chủ đạo của thương hiệu, tạo nền nã cho nội dung bên trong.
        */}
        <div className="bg-[#8B795E] rounded-2xl p-8 md:p-20 shadow-2xl relative overflow-hidden border border-white/5">
          
          {/* Họa tiết trang trí chìm (Optional): 
              Thêm một chút "texture" để phần background của Box không bị quá phẳng.
          */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#CC6600]/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3d2b1f]/20 rounded-full blur-3xl -ml-32 -mb-32" />

          {/* CHỈ CẦN GỌI DUY NHẤT SLIDER Ở ĐÂY.
            Lưu ý: Bạn nhớ vào file TestimonialSlider để chỉnh màu chữ:
            - Title/Label: nên dùng #3d2b1f hoặc #fcfaf7
            - Content: nên dùng #fcfaf7 (Trắng kem) để dễ đọc.
          */}
          <TestimonialSlider 
            items={items} 
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
            label={t("testimonials.static_feedback_label")}
          />

        </div>
      </div>

      {/* SEO Schema giữ nguyên */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": items.map((item, i) => ({
              "@type": "Review",
              "position": i + 1,
              "author": { "@type": "Person", "name": item.author },
              "reviewBody": item.content,
              "image": item.image,
              "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            }))
          })
        }}
      />
    </section>
  );
}