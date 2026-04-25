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
  title: t("seo.title") || "Top Spa Đà Nẵng | Luma Spa - Foot & Body Massage",
  description:
    t("seo.description") ||
    "Luma Spa - top spa Đà Nẵng chuyên trị liệu, foot & body massage, spa gần đây uy tín, thư giãn và phục hồi năng lượng.",
  
  keywords: [
  // 🇻🇳 Vietnamese
  "spa Đà Nẵng",
  "top spa Đà Nẵng",
  "spa gần đây",
  "massage Đà Nẵng",
  "foot massage",
  "body massage",
  "foot & body massage",
  "trị liệu thư giãn",
  "spa uy tín Đà Nẵng",
  "massage gần đây",

  // 🇺🇸 English
  "best spa Da Nang",
  "top spa in Da Nang",
  "Da Nang spa near me",
  "massage Da Nang",
  "foot massage Da Nang",
  "body massage Da Nang",
  "foot and body massage",
  "wellness spa Da Nang",
  "relaxing spa treatment",
  "therapeutic massage Da Nang",

  // 🇰🇷 Korean
  "다낭 스파",
  "다낭 마사지",
  "다낭 최고의 스파",
  "다낭 근처 스파",
  "발 마사지 다낭",
  "바디 마사지 다낭",
  "다낭 힐링 마사지",
  "다낭 웰니스 스파",

  // 🇨🇳 Chinese
  "岘港水疗",
  "岘港按摩",
  "岘港最佳水疗",
  "岘港附近水疗",
  "足部按摩 岘港",
  "全身按摩 岘港",
  "岘港放松按摩",
  "岘港养生水疗",
],

  alternates: {
    canonical: `${DOMAIN}/${locale}/about`,
  },

  openGraph: {
    title:
      "Top Spa Đà Nẵng | Luma Spa - Foot & Body Massage & Trị Liệu",
    description:
      "Trải nghiệm top spa Đà Nẵng với dịch vụ foot & body massage, trị liệu chuyên sâu, không gian thư giãn chuẩn quốc tế.",
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