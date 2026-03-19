
import { notFound } from "next/navigation";
import Script from "next/script";
import Image from "next/image";
import { useTranslation } from "react-i18next"; 
import { services } from "../data";

type Props = {
  params: Promise<{ locale: string; slug: string }>; // Khai báo dạng Promise cho Next.js hiện đại
};

const locales = ["vi", "en", "ko", "zh"];

// 1. METADATA SEO
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params; // Await params
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };

  // Fix TS(7053) bằng cách ép kiểu an toàn
  const name = service.name[locale as keyof typeof service.name] || service.name.vi;
  const description = service.description[locale as keyof typeof service.description] || service.description.vi;
  const url = `https://lumaspa.com/${locale}/spa-services/${slug}`;

  return {
    title: `${name} | Luma Spa Da Nang`,
    description,
    alternates: {
      canonical: url,
      languages: {
        "vi-VN": `/vi/spa-services/${slug}`,
        "en-US": `/en/spa-services/${slug}`,
        "ko-KR": `/ko/spa-services/${slug}`,
        "zh-CN": `/zh/spa-services/${slug}`,
      },
    },
    openGraph: {
      title: `${name} | Luma Spa`,
      description,
      url,
      images: [{ url: service.image, width: 1200, height: 630, alt: name }],
      type: "website",
    },
  };
}

// 2. PAGE COMPONENT
export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params; // Await params
  const service = services.find((s) => s.slug === slug);
  
  if (!service) return notFound();

  // Chuyển i18n logic: Vì đây là Server Component, bạn có thể truyền locale vào t
  // hoặc nếu bạn dùng client component bên trong thì bọc phần UI lại.
  // Ở đây ta giả định dùng nội dung từ data.ts theo locale
  const name = service.name[locale as keyof typeof service.name] || service.name.vi;
  const description = service.description[locale as keyof typeof service.description] || service.description.vi;

  // 3. SCHEMA DATA
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name,
        description,
        provider: {
          "@type": "Spa",
          name: "Luma Spa",
          telephone: "0876712808",
          areaServed: { "@type": "City", name: "Da Nang" },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `https://lumaspa.com/${locale}` },
          { "@type": "ListItem", position: 2, name: "Services", item: `https://lumaspa.com/${locale}/spa-services` },
          { "@type": "ListItem", position: 3, name, item: `https://lumaspa.com/${locale}/spa-services/${slug}` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen pb-20">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="container mx-auto px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-stone-400 mb-4 font-serif italic uppercase tracking-wider">
             Spa Services / {name}
          </nav>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
            {name}
          </h1>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-2xl">
            <Image
              src={service.image}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 prose prose-stone lg:prose-xl">
              <div className="text-stone-600 leading-relaxed whitespace-pre-line">
                {description}
              </div>
              
              <h2 className="text-2xl font-bold mt-10 mb-4 font-serif">
                {locale === 'vi' ? `Lợi ích của ${name}` : `Benefits of ${name}`}
              </h2>
              <h2 className="text-2xl font-bold mt-10 mb-4 font-serif">
                {locale === 'vi' ? 'Quy trình thực hiện' : 'Process'}
              </h2>
            </div>

            <div className="bg-stone-50 p-8 rounded-2xl h-fit border border-stone-100">
              <p className="text-[#d48a1f] text-3xl font-serif font-bold mb-2">
                {service.price}
              </p>
              <p className="text-stone-400 text-sm mb-6 italic">
                 Price includes tax
              </p>
              <a
                href="tel:0876712808"
                className="block w-full bg-[#d48a1f] text-white text-center py-4 rounded-full font-bold hover:bg-stone-900 transition-all uppercase tracking-widest text-sm"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-stone-100">
            <h3 className="font-serif font-bold mb-6 text-2xl">Related Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.filter(s => s.slug !== slug).slice(0, 4).map((s) => (
                <a
                  key={s.slug}
                  href={`/${locale}/spa-services/${s.slug}`}
                  className="p-4 bg-stone-50 rounded-lg text-stone-800 hover:text-[#d48a1f] font-bold transition-colors border border-transparent hover:border-[#d48a1f]/20"
                >
                  {s.name[locale as keyof typeof s.name] || s.name.vi}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((s) => ({
      locale,
      slug: s.slug,
    }))
  );
}