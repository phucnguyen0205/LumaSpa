"use client";

import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link"; // Import thêm Link nếu cần quay về trang chủ
import { MapPin, Phone, Mail, Map as MapIcon } from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation("contact");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Dữ liệu liên hệ:", data);
  };

  return (
    <section
      className="py-16 bg-[#3d2b1f]"
      id="contact"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-stretch">

          {/* LEFT: INFO */}
          <div className="w-full md:w-5/12 space-y-8 flex flex-col">
            
            <div className="space-y-4">
              {/* THAY THẾ CHỮ BẰNG LOGO TẠI ĐÂY */}
              <div className="relative w-50 h-20 mb-2"> {/* Chỉnh width/height phù hợp với logo của bạn */}
                <Image
                  src="/images/logo.png" 
                  alt="Luma Spa Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              
              {/* Giữ lại tên cho SEO nhưng ẩn đi với người dùng */}
              <span className="sr-only" itemProp="name">LUMA SPA</span>
              
              <div className="w-42 h-1 bg-[#ffffff]"></div>

              <meta itemProp="priceRange" content="$$" />
              <meta itemProp="image" content="https://lumaspa.vn/images/spa-branch.jpg" />
              <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content="16.067163" />
                <meta itemProp="longitude" content="108.231607" />
              </div>
            </div>

            <div className="space-y-8 text-[#fcfaf7]/80 flex-grow">
              {/* ADDRESS */}
              <div
                className="flex gap-5"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="text-[#CC6600] shrink-0" size={28} />
                <div>
                  <p className="font-bold uppercase text-base mb-1 text-[#f3d5b5]">
                    {t("address_label")}
                  </p>
                  <p className="text-lg leading-relaxed text-[#fcfaf7]" itemProp="streetAddress">
                    {t("address_value")}
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-5">
                <Phone className="text-[#CC6600] shrink-0" size={28} />
                <div>
                  <p className="font-bold uppercase text-base mb-1 text-[#f3d5b5]">
                    {t("phone_label")}
                  </p>
                  <a
                    href={`tel:${t("phone_value")}`}
                    className="text-md font-bold text-[#fcfaf7] hover:text-[#CC6600] transition-colors tracking-tight"
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
                  <p className="font-bold uppercase text-base mb-1 text-[#f3d5b5]">
                    {t("email_label")}
                  </p>
                  <a 
                    href={`mailto:${t("email_value")}`}
                    className="text-lg font-semibold text-[#fcfaf7] hover:text-[#CC6600] transition-colors underline underline-offset-4 decoration-[#8B795E]"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.916867761821!2d108.219803!3d16.059434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAzJzM0LjAiTiAxMDjCsDEzJzExLjMiRQ!5e0!3m2!1svi!2svn!4v1712345678901!5m2!1svi!2svn" 
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