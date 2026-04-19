import { Metadata } from "next";
import { getPost } from "../../../../lib/blog-data";
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ slug: string; locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
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
  const post = await getPost(slug, locale);
  
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "news" });

  return (
    <>
      <Header />
      {/* Background chính dùng màu Nâu Cafe #3d2b1f */}
      <main className="pt-32 pb-16 bg-[#3d2b1f]">
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12 text-center">
            {/* Tiêu đề dùng màu Trắng Kem #fcfaf7 để nổi bật trên nền nâu */}
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#fcfaf7] mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-[#fcfaf7]/70 font-medium tracking-widest uppercase text-xs">
              <span className="text-[#d48a1f]">Luma Spa</span>
              <span>•</span>
              <span>{t("postedOn")}: {post.date}</span>
            </div>
          </header>

          <div className="relative aspect-video mb-16">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl shadow-black/30" 
            />
          </div>

          {/* Nội dung bài viết nằm trong card màu Trắng Kem #fcfaf7 để dễ đọc */}
          <div className="bg-[#fcfaf7] p-8 md:p-16 rounded-[2.5rem] shadow-xl">
            <div 
              className="prose prose-stone prose-lg max-w-none 
                         prose-headings:font-serif prose-headings:text-[#3d2b1f]
                         prose-strong:text-[#3d2b1f]
                         prose-p:text-stone-700 prose-p:leading-relaxed
                         prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}