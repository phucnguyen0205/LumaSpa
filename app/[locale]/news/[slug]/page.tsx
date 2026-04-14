import { Metadata } from "next";
import { getPost } from "../../../../lib/blog-data";
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ slug: string; locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  // Truyền cả slug và locale để lấy đúng bài viết
  const post = await getPost(slug, locale);

  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} | Luma Spa`,
    description: post.description,
    alternates: {
      canonical: `https://lumaspa.com.vn/${locale}/news/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug, locale } = await params;
  const post = await getPost(slug, locale); // Lấy đúng bài theo ngôn ngữ
  
  if (!post) notFound();

  // Lấy dịch vụ dịch thuật nếu cần dùng các chữ như "Ngày đăng"
  const t = await getTranslations({ locale, namespace: "news" });

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 bg-[#fdfcfb]">
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12 text-center">
             <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
               {post.title}
             </h1>
             <div className="flex items-center justify-center gap-4 text-stone-500 font-medium tracking-widest uppercase text-xs">
               <span className="text-[#d48a1f]">Luma Spa</span>
               <span>•</span>
               <span>{t("postedOn")}: {post.date}</span>
             </div>
          </header>

          <div className="relative aspect-video mb-16">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl shadow-stone-200" 
            />
          </div>

          <div 
            className="prose prose-stone prose-lg max-w-none 
                       prose-headings:font-serif prose-headings:text-stone-800
                       prose-strong:text-stone-900
                       prose-p:text-stone-600 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </main>
      <Footer />
    </>
  );
}