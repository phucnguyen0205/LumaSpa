import { getTranslations } from "next-intl/server";
import TestimonialSlider from "./testimonial-slider";

interface TestimonialSectionProps {
  locale: string;
}

export const dynamic = 'force-dynamic';

export default async function TestimonialSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home" });

  const testimonialKeys = ["customer_1", "customer_2", "customer_3", "customer_4"];
  
  // Chuẩn bị dữ liệu items kèm ảnh tương ứng
  const items = testimonialKeys.map((key, index) => ({
    content: t(`testimonials.items.${key}.content`),
    author: t(`testimonials.items.${key}.author`),
    role: t(`testimonials.items.${key}.role`),
    image: `/images/customer_${index + 1}.png` 
  }));

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#FFCC66] rounded-sm p-8 md:p-20 shadow-sm relative overflow-hidden">
          
          {/* CHỈ CẦN GỌI DUY NHẤT SLIDER Ở ĐÂY.
            Mọi thứ (Ảnh bên trái + Chữ bên phải) sẽ do Slider quản lý để đồng bộ với nhau.
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