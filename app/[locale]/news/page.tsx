import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import { posts } from "../../../lib/blog-data"; 
import Link from "next/link";

interface Props {
  params: Promise<{ locale: string }>;
}

const DOMAIN = "https://lumaspa.com.vn";

/**
 * 🔥 METADATA SEO (BLOG = KÉO TRAFFIC)
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoMap: any = {
    vi: {
      title: "Blog Spa Đà Nẵng | Kinh nghiệm massage & chăm sóc da | Luma Spa",
      desc: "Tổng hợp kinh nghiệm chọn spa Đà Nẵng, massage thư giãn, chăm sóc da, review spa uy tín giúp bạn lựa chọn tốt nhất.",
    },
    en: {
      title: "Da Nang Spa Blog | Massage & Skincare Tips | Luma Spa",
      desc: "Explore spa tips, massage guides, and skincare advice in Da Nang.",
    },
    ko: {
      title: "다낭 스파 블로그 | 마사지 & 스킨케어 팁 | Luma Spa",
      desc: "다낭의 스파 팁, 마사지 가이드, 스킨케어 조언을 탐색하세요.",
    },
    zh: {
      title: "岘港 Spa 博客 | 按摩 & 护肤技巧 | Luma Spa",
      desc: "探索岘港的 Spa 小贴士、按摩指南和护肤建议。",
    }
  };

  const currentSEO = seoMap[locale] || seoMap["vi"];

  return {
    title: currentSEO.title,
    description: currentSEO.desc,

    keywords: [
  "top spa Đà Nẵng",
  "best spa Đà Nẵng",
  "spa Đà Nẵng",
  "spa nổi tiếng Đà Nẵng",
  "spa tốt nhất Đà Nẵng",
  "spa uy tín Đà Nẵng",
  "review spa Đà Nẵng",
  "massage Đà Nẵng",
  "massage body Đà Nẵng",
  "massage foot Đà Nẵng",
  "spa chăm sóc da Đà Nẵng",
  "spa thư giãn Đà Nẵng",
  "spa cao cấp Đà Nẵng",
  "spa Đà Nẵng giá rẻ",
  "spa Đà Nẵng gần biển",
  "spa Đà Nẵng gần trung tâm",
  "spa Đà Nẵng cho khách du lịch",
  "massage thư giãn sau khi du lịch Đà Nẵng",
  "spa phục hồi năng lượng Đà Nẵng",
  "spa Đà Nẵng mở khuya",
  "địa chỉ spa uy tín ở Đà Nẵng",
  "kinh nghiệm đi spa Đà Nẵng",
  "nên đi spa nào ở Đà Nẵng",
  "best spa in Da Nang",
  "Da Nang massage service",
  "Da Nang spa review",
  "relaxing massage Da Nang",
  "body massage Da Nang",
],

    alternates: {
      canonical: `${DOMAIN}/${locale}/news`,
      languages: {
        vi: `${DOMAIN}/vi/news`,
        en: `${DOMAIN}/en/news`,
      },
    },

    openGraph: {
      title: currentSEO.title,
      description: currentSEO.desc,
      url: `${DOMAIN}/${locale}/news`,
      siteName: "Luma Spa",
      images: [
        {
          url: `${DOMAIN}/images/blog-og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
  };
}

/**
 * 🔥 PAGE
 */
export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });

  const filteredPosts = posts.filter((post) => post.locale === locale);

  /**
   * 🔥 BLOG SCHEMA
   */
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Spa Đà Nẵng - Luma Spa",
    "url": `${DOMAIN}/${locale}/news`,
    "description": "Chia sẻ kinh nghiệm spa, massage, chăm sóc da tại Đà Nẵng",
  };

  /**
   * 🔥 LIST ARTICLE SCHEMA
   */
  const articleListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        headline: post.title,
        image: post.image,
        url: `${DOMAIN}/${locale}/news/${post.slug}`,
      },
    })),
  };

  return (
    <>
      <Header />

      <main className="min-h-screen pt-32 pb-16 bg-[#3d2b1f]">
        
        {/* 🔥 SCHEMA */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListSchema) }} />

        <section className="container mx-auto px-4">

          {/* 🔥 SEO CONTENT (ẨN - GOOGLE ĐỌC) */}
          <section className="hidden">
            <h1>Spa Đà Nẵng - Blog chia sẻ kinh nghiệm</h1>
            <p>
              Blog Luma Spa chia sẻ kinh nghiệm chọn spa Đà Nẵng uy tín, review massage thư giãn,
              chăm sóc da và các dịch vụ làm đẹp giúp bạn tìm được địa chỉ phù hợp nhất.
            </p>
          </section>

          {/* HEADER */}
          <div className="flex items-center gap-3 mb-12 border-b border-[#fcfaf7]/10 pb-6">
            <div className="bg-[#d48a1f] p-2 rounded-lg text-[#fcfaf7] text-sm">📸</div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-[#fcfaf7] uppercase tracking-[0.2em]">
                {t("title")}
              </h1>
              <p className="text-[#fcfaf7]/60 text-xs mt-1">{t("subtitle")}</p>
            </div>
          </div>

          {/* LIST POST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredPosts.map((post) => (
              <Link 
                href={`/${locale}/news/${post.slug}`} 
                key={`${post.locale}-${post.slug}`} 
                className="group flex flex-col bg-[#fcfaf7] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="overflow-hidden aspect-[16/9]">
                  <img 
                    src={post.image} 
                    alt={`${post.title} - spa Đà Nẵng`} // 🔥 thêm keyword vào alt
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="text-[#d48a1f] text-[10px] font-bold tracking-widest uppercase mb-3 block">
                    {post.date}
                  </span>

                  <h3 className="text-lg md:text-xl font-serif font-bold text-[#3d2b1f] mb-3 group-hover:text-[#d48a1f] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-stone-600 text-sm line-clamp-3 leading-relaxed mb-6 flex-grow">
                    {post.description}
                  </p>

                  {/* 🔥 INTERNAL LINK */}
                  <div className="mt-auto flex items-center text-[11px] font-bold text-[#3d2b1f] uppercase tracking-wider group-hover:gap-3 transition-all">
                    <span className="border-b border-[#d48a1f] pb-1">
                       {t("readMore")}
                    </span>
                    <span className="ml-1 text-[#d48a1f]">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <Link href={`/${locale}/services`}>
              <button className="bg-[#d48a1f] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest">
                Xem dịch vụ spa Đà Nẵng
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}