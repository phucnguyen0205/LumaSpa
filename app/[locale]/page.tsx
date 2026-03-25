import { initTranslations } from "@/i18n"; 
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import HeroSection from "@/components/home/hero-section"; 
import AboutSection from "@/components/about-section/page";
import ServicesSection from "@/components/home/services-section";
import Hotel360Section from "@/components/home/360-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import TestimonialSection from "@/components/home/testimonial-section";
import ContactSection from "@/components/home/contact-section";
import TranslationsProvider from "@/components/translations-provider";
import CommitmentSection from "@/components/home/commitment-section";
import NewsAndReview from "@/components/home/review";

interface Props { params: Promise<{ locale: string }>; }

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const namespaces = ['home', 'common', 'contact', 'services', 'header', 'footer'];
  const { resources } = await initTranslations(locale, namespaces);

  return (
    <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
      <main className="min-h-screen flex flex-col">
        <Header />
        <HeroSection /> 
        <AboutSection />
        <ServicesSection />
        <Hotel360Section />
        <WhyChooseUs /> 
        <NewsAndReview />
        <TestimonialSection locale={locale} />
        <CommitmentSection />
        <ContactSection />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}