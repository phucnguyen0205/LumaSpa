import { Metadata } from "next";
import { initTranslations } from "@/i18n"; 
import Header from "@/components/layout/header/page";
import ContactSection from "@/components/home/contact-section";
import Footer from "@/components/layout/footer/page";
import HeroSection from "@/components/home/hero-section"; 
import AboutImageSection from "@/components/about-image-section-1";
import TestimonialSection from "@/components/home/testimonial-section";
import TranslationsProvider from "@/components/translations-provider";

interface Props {
  params: Promise<{ locale: string }>; 
}
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const namespaces = ['home', 'common', 'contact', 'services', 'header', 'footer']; //

  // Lấy resources từ Server
  const { resources } = await initTranslations(locale, namespaces);

  return (
    <TranslationsProvider 
      locale={locale} 
      namespaces={namespaces} 
      resources={resources}
    >
      <main className="min-h-screen flex flex-col">
        <Header />
        <HeroSection /> 
        <AboutImageSection imageUrl="/images/sample-spa.jpg" />
        <TestimonialSection />
        <ContactSection />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}