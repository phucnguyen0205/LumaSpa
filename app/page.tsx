import { Metadata } from "next";
import { initTranslations } from "@/i18n"; 
import Header from "@/components/layout/header/page";
import ContactSection from "@/components/home/contact-section";
import Footer from "@/components/layout/footer/page";
import HeroSection from "@/components/home/hero-section"; // Import component mới tách

interface Props {
  params: Promise<{ locale: string }>; 
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    vi: "LumaSpa - Trải nghiệm thư giãn",
    en: "LumaSpa - Luxury Experience",
    zh: "LumaSpa - 奢华体验",
    ko: "LumaSpa - 럭셔리 경험"
  };

  return {
    title: titles[locale] || titles.vi,
    description: "LumaSpa cung cấp các liệu trình chăm sóc da đẳng cấp..."
  };
}
export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  // Server vẫn cần init để các thành phần Server khác (nếu có) hoặc Metadata hoạt động
  await initTranslations(locale, ['home', 'common', 'contact']);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Gọi trực tiếp, không truyền t={t} */}
      <HeroSection /> 

      <ContactSection />
      <Footer />
    </main>
  );
}