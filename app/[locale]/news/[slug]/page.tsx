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
      <main className="bg-white min-h-screen">
        {/* PHẦN HERO: Ép H1 xuống size XL trên mobile để không bị tràn */}
        <section className="bg-[#3d2b1f] pt-32 pb-8 md:pt-48 md:pb-24">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="text-xl md:text-5xl font-serif font-bold text-[#fcfaf7] mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-[#fcfaf7]/50 font-medium tracking-[0.2em] uppercase text-[9px]">
              <span className="text-[#d48a1f]">Luma Spa</span>
              <span>•</span>
              <span>{t("postedOn")}: {post.date}</span>
            </div>
          </div>
        </section>

        <article className="w-full">
          {/* Ảnh banner chính: Thu nhỏ h-48 trên mobile */}
          <div className="w-full h-[200px] md:h-[600px] relative">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* DÙNG PROSE ĐỂ KHỐNG CHẾ TOÀN BỘ NỘI DUNG HTML */}
          <div 
            className="w-full prose prose-stone max-w-none
                       /* Text chính: 14px cho mobile | 16px cho desktop */
                       text-sm md:text-base 
                       
                       /* ÉP H1/H2 TRONG NỘI DUNG (Cái bạn bị to ở ảnh) */
                       prose-h1:text-xl md:prose-h1:text-4xl
                       prose-h2:text-lg md:prose-h2:text-3xl
                       prose-h2:mt-10 prose-h2:mb-4
                       
                       /* ÉP H3 TRONG NỘI DUNG */
                       prose-h3:text-base md:prose-h3:text-2xl
                       prose-h3:mt-8 prose-h3:mb-3
                       
                       /* Giảm khoảng cách padding/margin thừa trên mobile */
                       prose-p:my-3 prose-p:leading-relaxed
                       antialiased"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </main>
      <Footer />
    </>
  );
}