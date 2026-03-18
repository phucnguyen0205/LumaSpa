import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import Link from "next/link";

interface Props {
  params: Promise<{ locale: string }>;
}

const DOMAIN = "https://lumaspa.vn"; 

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  const title = t("seo.title") || "Về Luma Spa | Spa Massage Đà Nẵng Thư Giãn & Chuyên Nghiệp";
  const description = t("seo.description") || "Luma Spa - spa massage Đà Nẵng chuyên nghiệp, thư giãn với liệu trình foot & body care cao cấp. Đặt lịch ngay hôm nay!";
  const url = `${DOMAIN}/${locale}/about`;

  return {
    title,
    description,
    keywords: ["spa Đà Nẵng", "massage Đà Nẵng", "foot massage Đà Nẵng", "body massage Đà Nẵng", "Luma Spa", "spa thư giãn"],
    authors: [{ name: "Luma Spa" }],
    creator: "Luma Spa",
    publisher: "Luma Spa",
    alternates: {
      canonical: url,
      languages: {
        en: `${DOMAIN}/en/about`,
        vi: `${DOMAIN}/vi/about`,
        zh: `${DOMAIN}/zh/about`,
        ko: `${DOMAIN}/ko/about`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Luma Spa",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [
        {
          url: `${DOMAIN}/images/og-spa.jpg`,
          width: 1200,
          height: 630,
          alt: "Luma Spa Đà Nẵng - Không gian thư giãn cao cấp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${DOMAIN}/images/og-spa.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    category: "Spa & Beauty",
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#2b2b2b]">
      <Header />

      <main>
  <section className="relative h-[100vh] min-h-[500px] w-full flex items-center overflow-hidden bg-gradient-to-br from-[#2f241f] via-[#4a382f] to-[#7a5a47] text-white">
  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
  <div className="relative mx-auto max-w-7xl px-6 w-full md:px-10">
    <div className="max-w-3xl">
      <p className="mb-4 tracking-[0.35em] text-sm uppercase text-[#e7b56a]">
        Luma Spa • Foot & Body Care
      </p>
      <h1 className="text-4xl font-bold leading-tight md:text-6xl">
        {t("hero.title_part1")}
        <span className="block text-[#f2c27b]">{t("hero.title_part2")}</span>
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
        {t("hero.description")}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href={`/${locale}/services`}
          className="rounded-full bg-[#e7b56a] px-6 py-3 text-sm font-semibold text-[#2f241f] transition hover:scale-[1.02]"
        >
          {t("common.view_services")}
        </Link>
        <Link
          href={`/${locale}/contact`}
          className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
        >
          {t("common.contact_now")}
        </Link>
      </div>
    </div>
  </div>
</section>

        {/* INTRO SECTION */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b07a3f]">
                {t("intro.sublabel")}
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                {t("intro.title")}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-[#5c5c5c]">
                <p>{t("intro.description_1")}</p>
                <p>{t("intro.description_2")}</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[32px] bg-[#d8b38a]" />
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
                alt="Luma Spa Đà Nẵng - Chăm sóc sức khỏe tinh tế"
                className="relative h-[420px] w-full rounded-[32px] object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b07a3f]">
                {t("features.sublabel")}
              </p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                {t("features.title")}
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-[28px] bg-[#f8f5f0] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 text-3xl">{t(`features.item_${i}.icon`)}</div>
                  <h4 className="text-xl font-semibold">{t(`features.item_${i}.title`)}</h4>
                  <p className="mt-3 leading-7 text-[#666]">
                    {t(`features.item_${i}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[36px] bg-[#2f241f] px-8 py-12 text-center text-white md:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f2c27b]">
              {t("cta.sublabel")}
            </p>
            <h3 className="mt-4 text-3xl font-bold md:text-5xl">
              {t("cta.title")}
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80">
              {t("cta.description")}
            </p>

            <div className="mt-8 flex justify-center">

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}