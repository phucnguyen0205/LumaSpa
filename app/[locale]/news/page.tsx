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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });

  return {
    title: t("seo.title"),
    description: t("seo.description"),
    alternates: {
      canonical: `${DOMAIN}/${locale}/news`,
    },
  };
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });
  const filteredPosts = posts.filter((post) => post.locale === locale);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 bg-[#3d2b1f]">
        <section className="container mx-auto px-4">
          
          {/* Header section - Đã giảm cỡ chữ title từ 3xl xuống 2xl */}
          <div className="flex items-center gap-3 mb-12 border-b border-[#fcfaf7]/10 pb-6">
            <div className="bg-[#d48a1f] p-2 rounded-lg text-[#fcfaf7] text-sm">📸</div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-[#fcfaf7] uppercase tracking-[0.2em]">
                {t("title")}
              </h1>
              <p className="text-[#fcfaf7]/60 text-xs mt-1">{t("subtitle")}</p>
            </div>
          </div>

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
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                
                {/* Content card - Đã giảm các cỡ chữ bên trong */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="text-[#d48a1f] text-[10px] font-bold tracking-widest uppercase mb-3 block">
                    {post.date}
                  </span>
                  {/* Giảm tiêu đề từ 2xl xuống xl */}
                  <h3 className="text-lg md:text-xl font-serif font-bold text-[#3d2b1f] mb-3 group-hover:text-[#d48a1f] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  {/* Giảm text mô tả từ base xuống sm */}
                  <p className="text-stone-600 text-sm line-clamp-3 leading-relaxed mb-6 flex-grow">
                    {post.description}
                  </p>
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

          {/* Button Xem thêm - Giảm padding và text size */}
          <div className="flex justify-center mt-16">
            <button className="bg-transparent border border-[#fcfaf7]/30 hover:border-[#d48a1f] hover:bg-[#d48a1f] text-[#fcfaf7] px-8 py-3 rounded-full flex items-center gap-3 text-xs font-bold transition-all duration-300 uppercase tracking-widest">
              {t("seeMore")}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}