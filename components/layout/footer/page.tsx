"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("common");

  const serviceItems = [
    t("services.body_massage"),
    t("services.facial_care"),
    t("services.herbal_bath"),
    t("services.hot_stone"),
  ];

  return (
    <footer className="bg-[#ececec] text-[#2b2b2b]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          {/* CỘT 1: LOGO + GIỚI THIỆU */}
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-block text-4xl font-serif font-bold tracking-tight text-[#d48a1f]"
            >
              LUMA<span className="text-[#6b3d12]">SPA</span>
            </Link>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9c6b3d]">
              Therapy • Wellness • Relaxation
            </p>

            <h3 className="text-2xl font-bold leading-snug text-[#1d1d1d]">
              Luma Spa – Vỗ về cơ thể, dịu êm tâm trí
            </h3>

            <p className="max-w-md text-[16px] leading-8 text-[#555]">
              {t("footer.about_desc")}
            </p>
          </div>

          {/* CỘT 2: THÔNG TIN + CTA + QR */}
          <div className="space-y-5">
            <h4 className="text-2xl font-bold uppercase text-[#1d1d1d]">
              Thời gian làm việc
            </h4>

            <div className="flex items-start gap-3 text-[16px] text-[#333]">
              <Clock3 className="mt-1 shrink-0 text-[#a85a11]" size={18} />
              <p>{t("footer.working_hours")}</p>
            </div>

            <div className="flex items-center gap-3 text-[16px] text-[#333]">
              <Mail className="shrink-0 text-[#a85a11]" size={18} />
              <p>{t("contact.email_val")}</p>
            </div>

            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-[#8b4300] px-8 py-4 text-base font-bold text-white transition hover:opacity-90"
            >
              ĐẶT LỊCH NGAY
            </Link>

            <div className="w-full max-w-[240px] overflow-hidden rounded-md border-4 border-[#8b4300] bg-white shadow-sm">
              <img
                src="/images/qr-booking.jpg"
                alt="QR đặt lịch"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* CỘT 3: DỊCH VỤ */}
          <div className="space-y-5">
            <h4 className="text-2xl font-bold uppercase text-[#1d1d1d]">
              {t("footer.services_title")}
            </h4>

            <ul className="space-y-4">
              {serviceItems.map((item) => (
                <li
                  key={item}
                  className="border-b border-black/10 pb-3 text-[16px] leading-7 text-[#333]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 4: FACEBOOK */}
          <div className="space-y-5">
            <h4 className="text-2xl font-bold uppercase text-[#1d1d1d]">
              Fanpage Facebook
            </h4>

            <div className="overflow-hidden rounded-md bg-white shadow-sm">
              <iframe
                title="Luma Spa Facebook"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61576220537133&tabs=timeline&width=380&height=420&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="420"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>

        {/* HÀNG DƯỚI: CONTACT + SOCIAL */}
        <div className="mt-12 border-t border-black/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="grid grid-cols-1 gap-4 text-sm text-[#4b4b4b] md:grid-cols-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-[#a85a11]" size={18} />
                <p>{t("contact.address_val")}</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="shrink-0 text-[#a85a11]" size={18} />
                <p>{t("contact.phone_val")}</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="shrink-0 text-[#a85a11]" size={18} />
                <p>{t("contact.email_val")}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61576220537133"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3b5998] text-white transition hover:scale-105"
              >
                <Facebook size={18} />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c13584] text-white transition hover:scale-105"
              >
                <Instagram size={18} />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff0000] text-white transition hover:scale-105"
              >
                <Youtube size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#7a3700] px-4 py-5 text-center text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
          <p>{t("footer.copyright")}</p>

          <div className="flex gap-6 text-xs md:text-sm">
            <Link href="/privacy" className="hover:opacity-80">
              {t("footer.privacy_policy")}
            </Link>
            <Link href="/terms" className="hover:opacity-80">
              {t("footer.terms_of_service")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}