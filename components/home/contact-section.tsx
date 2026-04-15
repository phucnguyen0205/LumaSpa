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
      className="py-16 bg-[#3d2b1f]" /* Đổi sang nền nâu tối */
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
                className="text-3xl font-serif font-bold text-[#fcfaf7] mb-2 uppercase"
                itemProp="name"
              >
                LUMA SPA
              </h2>
              <div className="w-42 h-1 bg-[#CD6839]"></div> {/* Thanh gạch màu đồng */}

              <meta itemProp="priceRange" content="$$" />
              <meta itemProp="image" content="https://lumaspa.vn/images/spa-branch.jpg" />
              <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content="16.067163" />
                <meta itemProp="longitude" content="108.231607" />
              </div>
            </div>

          <div className="space-y-8 text-[#fcfaf7]/80 flex-grow"> {/* Tăng gap giữa các mục từ space-y-6 lên 8 */}

              {/* ADDRESS */}
              <div
                className="flex gap-5" /* Tăng gap giữa icon và chữ */
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="text-[#CC6600] shrink-0" size={28} /> {/* Tăng size icon */}
                <div>
                  <p className="font-bold uppercase text-base mb-1 text-[#f3d5b5]"> {/* text-sm -> text-base */}
                    {t("address_label")}
                  </p>
                  <p className="text-lg leading-relaxed text-[#fcfaf7]" itemProp="streetAddress"> {/* text-sm -> text-lg & làm sáng màu chữ */}
                    {t("address_value")}
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-5">
                <Phone className="text-[#CC6600] shrink-0" size={28} />
                <div>
                  <p className="font-bold uppercase text-base mb-1 text-[#f3d5b5]"> {/* text-sm -> text-base */}
                    {t("phone_label")}
                  </p>
                  <a
                    href={`tel:${t("phone_value")}`}
                    className="text-md font-bold text-[#fcfaf7] hover:text-[#CC6600] transition-colors tracking-tight" /* text-sm -> text-2xl để SĐT thật nổi bật */
                    itemProp="telephone"
                  >
                    {t("phone_value")}
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-5">
                <Mail className="text-[#CC6600] shrink-0" size={28} />
                <div>
                  <p className="font-bold uppercase text-base mb-1 text-[#f3d5b5]"> {/* text-sm -> text-base */}
                    {t("email_label")}
                  </p>
                  <a 
                    href={`mailto:${t("email_value")}`}
                    className="text-lg font-semibold text-[#fcfaf7] hover:text-[#CC6600] transition-colors underline underline-offset-4 decoration-[#8B795E]" /* text-sm -> text-lg */
                    itemProp="email"
                  >
                    {t("email_value")}
                  </a>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 hidden md:block mt-auto relative h-56 group">
              <Image
                src="/images/interior.png"
                alt="Không gian thư giãn Luma Spa tại Đà Nẵng"
                fill
                sizes="(max-width:768px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-90"
              />
            </div>
          </div>

          {/* RIGHT: GOOGLE MAP */}
          <div className="w-full md:w-7/12 flex flex-col">
            <div className="bg-[#3d2b1f] p-2 rounded-2xl shadow-inner border border-white/5 h-full min-h-[450px] relative">

              <div className="absolute top-6 left-6 z-10 bg-[#3d2b1f]/90 px-4 py-2 rounded-lg shadow-md flex items-center gap-2 border border-[#8B795E]/30">
                <MapIcon size={16} className="text-[#CC6600]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#fcfaf7]">
                  {t("find_us")}
                </span>
              </div>

              <iframe
                title="Vị trí Luma Spa trên bản đồ Đà Nẵng"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.967745319754!2d108.23160771006347!3d16.067163484547834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142182bc828bdcb%3A0xae3e3ccbd687f481!2zMTkwIE5ndXnhu4VuIEPDtG5nIFRy4bupLCBBbiBI4bqjaSwgU8ahbiBUcsOgLCDEkMOgIE7hurVuZyA1OTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1773061290970!5m2!1svi!2s"
                className="w-full h-full rounded-xl grayscale-[0.3] invert-[0.05] hover:grayscale-0 transition-all duration-700"
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