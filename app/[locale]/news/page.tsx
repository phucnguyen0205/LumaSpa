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
      {/* Nền chính toàn trang là Nâu Cafe #3d2b1f */}
      <main className="min-h-screen pt-32 pb-16 bg-[#3d2b1f]">
        <section className="container mx-auto px-4">
          
          {/* Header section với border và text màu Trắng Kem */}
          <div className="flex items-center gap-3 mb-12 border-b border-[#fcfaf7]/10 pb-6">
            <div className="bg-[#d48a1f] p-2 rounded-lg text-[#fcfaf7]">📸</div>
            <div>
              <h1 className="text-3xl font-serif font-bold text-[#fcfaf7] uppercase tracking-[0.2em]">
                {t("title")}
              </h1>
              <p className="text-[#fcfaf7]/60 text-sm mt-1">{t("subtitle")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredPosts.map((post) => (
              <Link 
                href={`/${locale}/news/${post.slug}`} 
                key={`${post.locale}-${post.slug}`} 
                className="group flex flex-col bg-[#fcfaf7] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="overflow-hidden aspect-[16/9]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                
                {/* Content card dùng màu Trắng Kem làm nền để text Nâu Cafe nổi bật */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <span className="text-[#d48a1f] text-xs font-bold tracking-widest uppercase mb-4 block">
                    {post.date}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#3d2b1f] mb-4 group-hover:text-[#d48a1f] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-stone-600 line-clamp-3 leading-relaxed mb-8 flex-grow">
                    {post.description}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-bold text-[#3d2b1f] uppercase tracking-wider group-hover:gap-3 transition-all">
                    <span className="border-b-2 border-[#d48a1f] pb-1">
                       {t("readMore")}
                    </span>
                    <span className="ml-2 text-[#d48a1f]">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Button Xem thêm với style tối giản tương phản */}
          <div className="flex justify-center mt-24">
            <button className="bg-transparent border border-[#fcfaf7]/30 hover:border-[#d48a1f] hover:bg-[#d48a1f] text-[#fcfaf7] px-12 py-4 rounded-full flex items-center gap-3 font-bold transition-all duration-300">
              {t("seeMore")}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}