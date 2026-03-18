"use client";

import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { MapPin, Phone, Mail, Map as MapIcon } from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation("contact");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Dữ liệu liên hệ:", data);
  };

  return (
    <section
      className="py-16 bg-white"
      id="contact"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-stretch">

          {/* LEFT: INFO */}
          <div className="w-full md:w-5/12 space-y-8 flex flex-col">
            
            <div>
              <h2
                className="text-3xl font-serif font-bold text-amber-800 mb-2 uppercase"
                itemProp="name"
              >
                LUMA SPA
              </h2>
              <div className="w-20 h-1 bg-amber-600"></div>

              {/* SEO hidden meta - Cung cấp dữ liệu vàng cho Google */}
              <meta itemProp="priceRange" content="$$" />
              <meta itemProp="image" content="https://lumaspa.vn/images/spa-branch.jpg" />
              <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content="16.067163" />
                <meta itemProp="longitude" content="108.231607" />
              </div>
            </div>

            <div className="space-y-6 text-stone-700 flex-grow">

              {/* ADDRESS */}
              <div
                className="flex gap-4"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="text-amber-600 shrink-0" size={24} />
                <div>
                  <p className="font-bold uppercase text-sm mb-1">
                    {t("address_label")}
                  </p>
                  <p className="text-sm leading-relaxed" itemProp="streetAddress">
                    {t("address_value")}
                  </p>
                  <meta itemProp="addressLocality" content="Da Nang" />
                  <meta itemProp="addressRegion" content="Da Nang" />
                  <meta itemProp="addressCountry" content="VN" />
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4">
                <Phone className="text-amber-600 shrink-0" size={24} />
                <div>
                  <p className="font-bold uppercase text-sm mb-1">
                    {t("phone_label")}
                  </p>
                  <a
                    href={`tel:${t("phone_value")}`}
                    className="text-sm font-semibold text-stone-500 hover:text-amber-600 transition-colors"
                    itemProp="telephone"
                  >
                    {t("phone_value")}
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <Mail className="text-amber-600 shrink-0" size={24} />
                <div>
                  <p className="font-bold uppercase text-sm mb-1">
                    {t("email_label")}
                  </p>
                  <a 
                    href={`mailto:${t("email_value")}`}
                    className="text-sm font-semibold text-stone-500 hover:text-amber-600 transition-colors" 
                    itemProp="email"
                  >
                    {t("email_value")}
                  </a>
                </div>
              </div>
            </div>

            {/* IMAGE (Sử dụng Image của Next.js để tối ưu tốc độ) */}
            <div className="rounded-xl overflow-hidden shadow-md border hidden md:block mt-auto relative h-56 group">
              <Image
                src="/images/spa-branch.jpg"
                alt="Không gian thư giãn Luma Spa tại Đà Nẵng"
                fill
                sizes="(max-width:768px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT: GOOGLE MAP */}
          <div className="w-full md:w-7/12 flex flex-col">
            <div className="bg-stone-100 p-2 rounded-2xl shadow-inner border h-full min-h-[450px] relative">

              <div className="absolute top-6 left-6 z-10 bg-white/95 px-4 py-2 rounded-lg shadow-md flex items-center gap-2 border border-stone-200">
                <MapIcon size={16} className="text-amber-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600">
                  {t("find_us")}
                </span>
              </div>

              <iframe
                title="Vị trí Luma Spa trên bản đồ Đà Nẵng"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.967745319754!2d108.23160771006347!3d16.067163484547834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142182bc828bdcb%3A0xae3e3ccbd687f481!2zMTkwIE5ndXnhu4VuIEPDtG5nIFRy4bupLCBBbiBI4bqjaSwgU8ahbiBUcsOgLCDEkMOgIE7hurVuZyA1OTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1773061290970!5m2!1svi!2s"
                className="w-full h-full rounded-xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}