import { notFound } from "next/navigation";
import Image from "next/image";
import { ChevronRight, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { Metadata } from "next";
import { SERVICES_DATA } from "../data";
import ServiceVideo from "@/components/home/service-video";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const locales = ["vi", "en", "ko", "zh"];
const DICTIONARY = {
  vi: {
    home: "Trang chủ",
    services: "Dịch vụ",
    serviceDetail: "Chi tiết dịch vụ",
    whyChoose: "Tại sao nên chọn dịch vụ này?",
    benefit1: "Thư giãn sâu & Giảm căng thẳng",
    benefit2: "Cải thiện lưu thông khí huyết",
    benefit3: "Kỹ thuật viên tay nghề cao",
    seoDescription: "Tại Luma Spa Đà Nẵng, chúng tôi không chỉ cung cấp một liệu trình massage, mà mang đến một không gian tĩnh lặng giúp bạn tái tạo năng lượng hoàn hảo. Mỗi động tác ấn huyệt, miết cơ đều được thực hiện với sự tận tâm nhất.",
    bookingTitle: "Thông tin đặt lịch",
    btnBook: "Liên hệ đặt lịch ngay",
    location: "Địa chỉ: Đà Nẵng, Việt Nam",
    guarantee: "Dịch vụ cam kết mang lại sự hài lòng tối đa.",
    hotline: "Hotline"
  },
  en: {
    home: "Home",
    services: "Services",
    serviceDetail: "Service Details",
    whyChoose: "Why Choose This Service?",
    benefit1: "Deep Relaxation & Stress Relief",
    benefit2: "Improve Blood Circulation",
    benefit3: "Highly Skilled Therapists",
    seoDescription: "At Luma Spa Da Nang, we don't just offer a massage treatment; we provide a tranquil space that helps you perfectly regenerate your energy. Every acupressure and muscle stroke is performed with utmost dedication.",
    bookingTitle: "Booking Information",
    btnBook: "Book Appointment Now",
    location: "Location: Da Nang, Vietnam",
    guarantee: "Service committed to maximum satisfaction.",
    hotline: "Hotline"
  },
  ko: {
    home: "홈",
    services: "서비스",
    serviceDetail: "서비스 세부 정보",
    whyChoose: "왜 이 서비스를 선택해야 할까요?",
    benefit1: "심층 휴식 및 스트레스 해소",
    benefit2: "혈액 순환 개선",
    benefit3: "숙련된 테라피스트",
    seoDescription: "다낭 루마 스파에서는 단순한 마사지 트리트먼트뿐만 아니라 완벽하게 에너지를 재생할 수 있는 고요한 공간을 제공합니다. 모든 지압과 근육 이완 동작은 정성을 다해 수행됩니다.",
    bookingTitle: "예약 정보",
    btnBook: "지금 예약하기",
    location: "위치: 베트남 다낭",
    guarantee: "최고의 만족을 보장하는 서비스.",
    hotline: "핫라인"
  },
  zh: {
    home: "首页",
    services: "服务项目",
    serviceDetail: "服务详情",
    whyChoose: "为什么选择这项服务？",
    benefit1: "深度放松与减压",
    benefit2: "促进血液循环",
    benefit3: "高素质理疗师",
    seoDescription: "在岘港 Luma Spa，我们不仅提供按摩疗程，还提供一个宁静的空间，帮助您完美地再生能量。每一次穴位按摩和肌肉推拿都倾注了我们的专业与用心。",
    bookingTitle: "预订信息",
    btnBook: "立即联系预订",
    location: "地点：越南岘港",
    guarantee: "服务致力于让您获得最大满意度。",
    hotline: "热线"
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  const name = service.name[locale as keyof typeof service.name] || service.name.vi;
  return {
    title: `${name} | Luma Spa Da Nang`,
    description: service.description[locale as keyof typeof service.description] || service.description.vi,
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  
  if (!service) return notFound();

  const name = service.name[locale as keyof typeof service.name] || service.name.vi;
  const description = service.description[locale as keyof typeof service.description] || service.description.vi;
  
  // Lấy bộ từ điển dựa trên locale
  const t = DICTIONARY[locale as keyof typeof DICTIONARY] || DICTIONARY.vi;

  return (
    <main className="min-h-screen pb-20 bg-white">
      {/* BANNER */}
   <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
  <Image 
    src={service.image} 
    alt={name} 
    fill 
    className="object-cover" 
    priority 
    sizes="100vw" 
  />
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <div className="text-center px-4">
      <p className="text-[#dcc296] uppercase tracking-[0.4em] text-xs mb-4 font-serif">
        Luxury Wellness Experience
      </p>
      
      {/* Chỉ đổi font-serif sang font-sans cho phần {name} */}
      <h1 className="text-4xl md:text-6xl font-sans font-bold text-white uppercase tracking-widest drop-shadow-2xl">
        {name}
      </h1>
    </div>
  </div>
</section>

      <section className="container mx-auto px-6 py-16 max-w-7xl">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
    <article className="lg:col-span-2 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[10px] text-stone-400 uppercase tracking-widest font-bold">
        <a href={`/${locale}`} className="hover:text-[#dcc296]">{t.home}</a>
        <ChevronRight size={10} />
        <a href={`/${locale}/services`} className="hover:text-[#dcc296]">{t.services}</a>
        <ChevronRight size={10} />
        <span className="text-stone-900">{name}</span>
      </nav>

      <div className="prose prose-stone max-w-none">
        <h2 className="text-2xl font-serif text-stone-900 uppercase tracking-widest mb-8 border-b border-stone-100 pb-4">
          {t.serviceDetail}
        </h2>
        <p className="text-xl text-stone-700 leading-relaxed italic border-l-4 border-[#dcc296] pl-8 py-2 mb-10">
          {description}
        </p>
        
        <h3 className="text-lg font-serif text-stone-800 uppercase tracking-wider mb-6">
          {t.whyChoose}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center p-6 bg-[#fcfaf7] border border-stone-50 text-center">
            <Sparkles size={24} className="text-[#dcc296] mb-4" strokeWidth={1.5} />
            <p className="text-[11px] font-bold uppercase tracking-tighter text-stone-700">{t.benefit1}</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-[#fcfaf7] border border-stone-50 text-center">
            <Clock size={24} className="text-[#dcc296] mb-4" strokeWidth={1.5} />
            <p className="text-[11px] font-bold uppercase tracking-tighter text-stone-700">{t.benefit2}</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-[#fcfaf7] border border-stone-50 text-center">
            <ShieldCheck size={24} className="text-[#dcc296] mb-4" strokeWidth={1.5} />
            <p className="text-[11px] font-bold uppercase tracking-tighter text-stone-700">{t.benefit3}</p>
          </div>
        </div>

        {/* Đoạn mô tả SEO đã chuyển qua key */}
        <p className="text-stone-600 leading-relaxed">
          {t.seoDescription}
        </p>
      </div>

      <ServiceVideo 
        youtubeId={service.youtubeId} 
        thumbnail={service.image} 
        locale={locale} 
      />
    </article>

    <aside className="lg:col-span-1">
      <div className="sticky top-32 bg-[#fcfaf7] p-8 md:p-10 rounded-sm border border-stone-100 shadow-sm">
        <div className="mb-10">
          <h3 className="text-stone-500 text-[10px] uppercase tracking-[0.3em] mb-3 font-bold">
            {t.bookingTitle}
          </h3>
          <p className="text-[#dcc296] text-4xl font-serif font-bold">
            {service.price}
          </p>
          <p className="mt-4 text-stone-400 text-[10px] italic leading-relaxed">
            * {t.guarantee}
          </p>
        </div>

        <button className="flex items-center justify-center w-full bg-stone-900 text-white py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#dcc296] transition-all">
          {t.btnBook}
        </button>

        <div className="mt-8 pt-8 border-t border-stone-200">
          <p className="text-[10px] text-stone-400 uppercase tracking-widest leading-loose">
            {t.location} <br/>
            {t.hotline}: 0876 712 808
          </p>
        </div>
      </div>
    </aside>
  </div>
</section>
    </main>
  );
}

export async function generateStaticParams() {
  return locales.flatMap((locale) => SERVICES_DATA.map((s) => ({ locale, slug: s.slug })));
}