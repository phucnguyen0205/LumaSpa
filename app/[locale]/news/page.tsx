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
  // Lấy bản dịch từ news.json
  const t = await getTranslations({ locale, namespace: "news" });

  // LỌC BÀI VIẾT: Chỉ hiện bài có locale trùng với ngôn ngữ hiện tại
  const filteredPosts = posts.filter((post) => post.locale === locale);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 bg-[#fdfcfb]">
        <section className="container mx-auto px-4">
          
          <div className="flex items-center gap-3 mb-12 border-b border-stone-200 pb-6">
            <div className="bg-[#d48a1f] p-2 rounded-lg text-white">📸</div>
            <div>
              <h1 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-widest">
                {t("title")}
              </h1>
              <p className="text-stone-500 text-sm">{t("subtitle")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredPosts.map((post) => (
              <Link 
                href={`/${locale}/news/${post.slug}`} 
                key={`${post.locale}-${post.slug}`} 
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="overflow-hidden aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                
                <div className="p-8">
                  <span className="text-[#d48a1f] text-xs font-bold tracking-widest uppercase mb-3 block">
                    {post.date}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4 group-hover:text-[#d48a1f] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-stone-600 line-clamp-3 leading-relaxed mb-6">
                    {post.description}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-bold text-stone-900 group-hover:gap-3 transition-all uppercase">
                    {t("readMore")} <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-20">
            <button className="bg-[#d48a1f] hover:bg-stone-900 text-white px-10 py-4 rounded-full flex items-center gap-3 font-bold transition-all duration-300 shadow-lg">
              {t("seeMore")}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}