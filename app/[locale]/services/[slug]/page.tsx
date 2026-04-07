import { notFound } from "next/navigation";
import Script from "next/script";
import Image from "next/image";
import { SERVICES_DATA } from "../data";
import { Play, ChevronRight } from "lucide-react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const locales = ["vi", "en", "ko", "zh"];
const BASE_URL = "https://lumaspa.com.vi";

// 1. METADATA SEO TỐI ƯU
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  const name = service.name[locale as keyof typeof service.name] || service.name.vi;
  const description = service.description[locale as keyof typeof service.description] || service.description.vi;
  
  // URL tuyệt đối cho Hreflang
  const currentUrl = `${BASE_URL}/${locale}/services/${slug}`;

  return {
    title: `${name} | Luma Spa Da Nang`,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        "vi-VN": `${BASE_URL}/vi/services/${slug}`,
        "en-US": `${BASE_URL}/en/services/${slug}`,
        "ko-KR": `${BASE_URL}/ko/services/${slug}`,
        "zh-CN": `${BASE_URL}/zh/services/${slug}`,
        "x-default": `${BASE_URL}/en/services/${slug}`,
      },
    },
    openGraph: {
      title: `${name} - Best Spa Experience in Da Nang`,
      description,
      url: currentUrl,
      siteName: "Luma Spa Da Nang",
      images: [{ url: service.image, width: 1200, height: 630, alt: name }],
      locale: locale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  
  if (!service) return notFound();

  const name = service.name[locale as keyof typeof service.name] || service.name.vi;
  const description = service.description[locale as keyof typeof service.description] || service.description.vi;

  // 2. SCHEMA DATA (JSON-LD) MỞ RỘNG
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": name,
        "image": `${BASE_URL}${service.image}`,
        "description": description,
        "brand": { "@type": "Brand", "name": "Luma Spa" },
        "offers": {
          "@type": "Offer",
          "price": service.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "VND",
          "availability": "https://schema.org/InStoreOnly"
        },
        "provider": {
          "@type": "Spa",
          "name": "Luma Spa",
          "image": `${BASE_URL}/logo.png`,
          "telephone": "0876712808",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Address", // Cập nhật địa chỉ thực tế
            "addressLocality": "Da Nang",
            "addressCountry": "VN"
          },
          "areaServed": { "@type": "City", "name": "Da Nang" }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": locale === 'vi' ? "Trang chủ" : "Home", "item": `${BASE_URL}/${locale}` },
          { "@type": "ListItem", "position": 2, "name": locale === 'vi' ? "Dịch vụ" : "Services", "item": `${BASE_URL}/${locale}/services` },
          { "@type": "ListItem", "position": 3, "name": name, "item": `${BASE_URL}/${locale}/services/${slug}` }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen pb-20 bg-white">
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* BANNER - Sử dụng H1 duy nhất cho SEO */}
      <section className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden">
        <Image src={service.image} alt={name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-[#d48a1f] uppercase tracking-[0.4em] text-sm mb-4 font-serif">Luma Spa Da Nang</p>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white uppercase tracking-[0.1em] drop-shadow-2xl">
              {name}
            </h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <article className="lg:col-span-2 space-y-16">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-[10px] text-stone-400 uppercase tracking-widest font-bold">
               <a href={`/${locale}`} className="hover:text-[#d48a1f]">Home</a>
               <ChevronRight size={10} />
               <a href={`/${locale}/services`} className="hover:text-[#d48a1f]">Services</a>
               <ChevronRight size={10} />
               <span className="text-stone-900">{name}</span>
            </nav>

            <div className="prose prose-stone max-w-none">
              <h2 className="text-2xl font-serif text-stone-900 uppercase tracking-widest mb-6">
                {locale === 'vi' ? 'Thông tin dịch vụ' : 'Service Details'}
              </h2>
              <p className="text-xl text-stone-700 leading-relaxed italic border-l-4 border-[#d48a1f] pl-8 py-2">
                {description}
              </p>
              {/* Bạn có thể thêm nội dung chi tiết hơn ở đây để tăng độ dài content cho SEO */}
            </div>

            {/* VIDEO SECTION */}
            <section id="video-review" className="scroll-mt-32 py-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-red-600 p-3 rounded-full animate-pulse">
                  <Play size={20} className="text-white" fill="currentColor" />
                </div>
                <h2 className="text-2xl font-serif font-bold uppercase tracking-widest text-stone-900">
                  {locale === 'vi' ? 'Trải nghiệm thực tế' : 'Actual Experience'}
                </h2>
              </div>
              
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${service.youtubeId}?rel=0&modestbranding=1&hl=${locale}`}
                  className="absolute inset-0 w-full h-full"
                  title={`${name} Review Video`}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </section>
          </article>

          {/* SIDEBAR BÁO GIÁ */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 bg-[#fcfaf7] p-8 md:p-10 rounded-sm border border-stone-100 shadow-sm">
              <div className="mb-10">
                <h3 className="text-stone-500 text-[10px] uppercase tracking-[0.3em] mb-3 font-bold">
                  {locale === 'vi' ? 'Báo giá dịch vụ' : 'Investment'}
                </h3>
                <p className="text-[#d48a1f] text-4xl font-serif font-bold">
                  {service.price}
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:0876712808"
                  className="flex items-center justify-center w-full bg-[#d48a1f] text-white py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-stone-900 transition-all shadow-lg"
                >
                  {locale === 'vi' ? 'Liên hệ đặt lịch' : 'Book Appointment'}
                </a>
                <p className="text-[10px] text-stone-400 text-center leading-loose">
                  * {locale === 'vi' ? 'Giá bao gồm trị liệu chuyên sâu & trà thảo mộc' : 'Price includes therapy & herbal tea'}
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* RELATED SERVICES - Internal Linking cho SEO */}
        <section className="mt-32 pt-20 border-t border-stone-100">
          <h2 className="font-serif font-bold mb-16 text-3xl uppercase tracking-[0.2em] text-center text-stone-900">
            {locale === 'vi' ? 'Khám phá thêm' : 'More Treatments'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SERVICES_DATA.filter(s => s.slug !== slug).slice(0, 3).map((s) => (
              <a key={s.slug} href={`/${locale}/services/${s.slug}`} className="group space-y-6">
                <div className="relative h-72 overflow-hidden rounded-sm bg-stone-200">
                  <Image
                    src={s.image}
                    alt={s.name[locale as keyof typeof s.name] || s.name.vi}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h4 className="font-serif font-bold text-lg uppercase tracking-widest text-stone-800 group-hover:text-[#d48a1f] transition-colors">
                  {s.name[locale as keyof typeof s.name] || s.name.vi}
                </h4>
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    SERVICES_DATA.map((s) => ({
      locale,
      slug: s.slug,
    }))
  );
}