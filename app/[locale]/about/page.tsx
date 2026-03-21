import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import AboutClient from "./about-client";

interface Props {
  params: Promise<{ locale: string }>;
}

const DOMAIN = "https://lumaspa.com.vn";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("seo.title") || "Về Luma Spa",
    description: t("seo.description"),
    alternates: {
      canonical: `${DOMAIN}/${locale}/about`,
    },
    openGraph: {
      title: t("seo.title"),
      description: t("seo.description"),
      images: [`${DOMAIN}/images/og-about.jpg`],
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  // Map tất cả key từ JSON vào object dict
  const dict = {
    hero: {
      kicker: t("hero.kicker"),
      title1: t("hero.title1"),
      title2: t("hero.title2"),
      description: t("hero.description"),
      ctaServices: t("hero.ctaServices"),
      ctaContact: t("hero.ctaContact"),
    },
    about: {
      label: t("about.label"),
      title: t("about.title"),
      paragraph1: t("about.paragraph1"),
      paragraph2: t("about.paragraph2"),
      imageAlt: t("about.imageAlt"),
    },
    section: {
      label: t("section.label"),
      title: t("section.title"),
    },
    coreValues: {
      label: t("coreValues.label"),
      title: t("coreValues.title"),
      items: {
        dedication: { title: t("coreValues.items.dedication.title"), desc: t("coreValues.items.dedication.desc") },
        professional: { title: t("coreValues.items.professional.title"), desc: t("coreValues.items.professional.desc") },
        refined: { title: t("coreValues.items.refined.title"), desc: t("coreValues.items.refined.desc") },
        sustainable: { title: t("coreValues.items.sustainable.title"), desc: t("coreValues.items.sustainable.desc") },
      }
    },
    mission: {
      label: t("mission.label"),
      title: t("mission.title"),
      paragraph1: t("mission.paragraph1"),
      paragraph2: t("mission.paragraph2"),
      paragraph3: t("mission.paragraph3"),
    }
  };

  return (
    <>
      <Header />
      <main>
        <AboutClient dict={dict} locale={locale} />
      </main>
      <Footer />
    </>
  );
}