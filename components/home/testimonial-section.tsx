import TestimonialSlider from "./testimonial-slider";

interface TestimonialSectionProps {
  locale: string;
}

export const dynamic = 'force-dynamic';

export default async function TestimonialSection({ locale }: TestimonialSectionProps) {
  // Lưu ý: Vì data đã nằm trong TestimonialSlider (Client Component), 
  // chúng ta không cần fetch items ở đây nữa. 
  // Slider sẽ tự dựa vào hook useLocale() để hiển thị đúng tiếng VI/EN/ZH/KO.

  return (
    <section className="bg-[#3d2b1f] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#8B795E] rounded-2xl p-8 md:p-20 shadow-2xl relative overflow-hidden border border-white/5">
          {/* Họa tiết trang trí chìm */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#CC6600]/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3d2b1f]/20 rounded-full blur-3xl -ml-32 -mb-32" />

          {/* Gọi Slider - Component này tự lo liệu phần đa ngôn ngữ bên trong */}
          <TestimonialSlider />
        </div>
      </div>

      {/* LƯU Ý VỀ SEO: 
         Vì data hiện tại nằm ở Client side, Schema JSON-LD tốt nhất 
         nên được đưa vào bên trong TestimonialSlider hoặc fetch từ API/JSON file 
         nếu bạn muốn Google Bot đọc chuẩn xác nhất ở Server Side.
      */}
    </section>
  );
}