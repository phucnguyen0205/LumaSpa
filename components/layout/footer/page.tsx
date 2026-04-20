"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import component Image của Next.js
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function Footer() {
  const params = useParams();
  const locale = params.locale || "vi";

  const { t } = useTranslation(["common", "footer", "contact"]);

  const serviceLinks = [
    { slug: "thai-massage-da-nang", label: t("services.massage_thai", { ns: "footer" }) },
    { slug: "hot-stone-massage-da-nang", label: t("services.massage_da_nong", { ns: "footer" }) },
    { slug: "neck-shoulder-massage-da-nang", label: t("services.massage_co_vai_gay", { ns: "footer" }) },
    { slug: "body-massage-da-nang", label: t("services.body_massage", { ns: "footer" }) },
    { slug: "foot-massage-da-nang", label: t("services.foot_massage", { ns: "footer" }) },
    { slug: "herbal-hair-wash-da-nang", label: t("services.goi_dau_thao_moc", { ns: "footer" }) },
    { slug: "ocean-abyss-scalp-therapy-da-nang", label: t("services.ocean_abyss", { ns: "footer" }) },
    { slug: "foot-neck-shoulder-combo-da-nang", label: t("services.foot_neck_shoulder", { ns: "footer" }) },
    { slug: "facial-treatment-da-nang", label: t("services.cham_soc_da_mat", { ns: "footer" }) },
  ];

  return (
    <footer 
      className="bg-[#ececec] text-[#2b2b2b]" 
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      {/* SEO Hidden Data */}
      <meta itemProp="priceRange" content="$$" />
      <meta itemProp="image" content="https://lumaspa.vn/images/og-image.jpg" />
      <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
        <meta itemProp="latitude" content="16.0544" />
        <meta itemProp="longitude" content="108.2022" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          
          {/* CỘT 1: LOGO + GIỚI THIỆU */}
          <div className="space-y-5">
            <Link
              href={`/${locale}`}
              className="inline-block"
            >
              {/* THAY THẾ CHỮ BẰNG LOGO TẠI ĐÂY */}
              <img 
                src="/images/logospa.png" 
                alt="Luma Spa Logo" 
                className="h-22 w-auto object-contain" // Chỉnh lại h-16 tùy theo kích thước logo của bạn
                itemProp="logo"
              />
              <span className="sr-only" itemProp="name">Luma Spa</span>
            </Link>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9c6b3d]">
              Therapy • Wellness • Relaxation
            </p>

            <h3 className="text-2xl font-bold leading-snug text-[#1d1d1d]" itemProp="alternativeHeadline">
              {t("slogan", { ns: "footer" })}
            </h3>

            <p className="max-w-md text-[16px] leading-8 text-[#555]" itemProp="description">
              {t("about_desc", { ns: "footer" })}
            </p>
          </div>

          {/* CÁC CỘT CÒN LẠI GIỮ NGUYÊN... */}
          {/* CỘT 2: THÔNG TIN + QR */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-wider text-[#1d1d1d]">
              {t("working_hours_title", { ns: "footer", defaultValue: "Thời gian làm việc" })}
            </h4>

            <div className="flex items-start gap-3 text-[14px] leading-relaxed text-[#555]">
              <Clock3 className="mt-0.5 shrink-0 text-[#a85a11]" size={16} />
              <p itemProp="openingHours">{t("working_hours", { ns: "footer" })}</p>
            </div>

            <div className="flex items-center gap-3 text-[14px] text-[#555]">
              <Mail className="shrink-0 text-[#a85a11]" size={16} />
              <p itemProp="email">{t("email_value", { ns: "footer" })}</p>
            </div>

            <div className="w-full max-w-[160px] overflow-hidden rounded-md border-[3px] border-[#8b4300] bg-white shadow-sm mt-2">
              <img
                src="/images/qrcode.png"
                alt="QR Code Đặt lịch hẹn Luma Spa Đà Nẵng"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* CỘT 3: DỊCH VỤ */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-wider text-[#1d1d1d]">
              {t("services_title", { ns: "footer" })}
            </h4>

            <ul className="space-y-2.5">
              {serviceLinks.map((item, idx) => (
                <li
                  key={idx}
                  className="border-b border-black/5 pb-1.5 text-[13px] font-medium leading-6 text-[#555] hover:text-[#d48a1f] transition-colors"
                >
                  <Link href={`/${locale}/services/${item.slug}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 4: FACEBOOK EMBED */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-wider text-[#1d1d1d]">
              Fanpage Facebook
            </h4>
            <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5">
              <iframe
                title="Luma Spa Facebook Fanpage"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61576220537133&tabs=timeline&width=380&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="300"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                loading="lazy" 
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            
            <div className="flex flex-col md:flex-row flex-wrap items-center gap-x-12 gap-y-4 text-sm text-[#4b4b4b] w-full lg:w-auto">
              
              {/* ADDRESS */}
              <div className="flex items-center gap-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="shrink-0 text-[#a85a11]" size={18} />
                <p>
                  <span itemProp="streetAddress">{t("address_value", { ns: "footer" })}</span>
                  <meta itemProp="addressLocality" content="Da Nang" />
                  <meta itemProp="addressRegion" content="Da Nang" />
                  <meta itemProp="addressCountry" content="VN" />
                </p>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">
                <Phone className="shrink-0 text-[#a85a11]" size={18} />
                <a href={`tel:${t("phone_val", { ns: "contact" })}`} itemProp="telephone" className="hover:text-[#a85a11] font-medium">
                  {t("phone_value", { ns: "footer" })}
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <Mail className="shrink-0 text-[#a85a11]" size={18} />
                <p itemProp="email" className="font-medium">{t("email_value", { ns: "footer" })}</p>
              </div>
            </div>

            {/* SOCIAL ICONS - UPDATED WITH INSTAGRAM LINK */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61576220537133"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#a85a11] transition-all hover:bg-[#a85a11]"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-[#a85a11] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </Link>
              <Link
                href="https://www.instagram.com/lumaspa.dn/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#a85a11] transition-all hover:bg-[#a85a11]"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-[#a85a11] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </Link>
              <Link
                href="https://www.youtube.com/@LumaSpaDaNang"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#a85a11] transition-all hover:bg-[#a85a11]"
                aria-label="Youtube"
              >
                <Youtube size={20} className="text-[#a85a11] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-[#7a3700] px-4 py-5 text-center text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
          <p>© {new Date().getFullYear()} LUMA SPA. {t("copyright", { ns: "footer" })}</p>

          <div className="flex gap-6 text-xs md:text-sm">
            <Link className="hover:underline" href={""}>
              {t("privacy_policy", { ns: "footer" })}
            </Link>
            <Link className="hover:underline" href={""}>
              {t("terms_of_service", { ns: "footer" })}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}