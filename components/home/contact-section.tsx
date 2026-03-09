"use client";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Map as MapIcon } from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation("common");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Dữ liệu liên hệ:", data);
    // Xử lý gửi API liên hệ tại đây
  };

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-stretch">
          
          {/* CỘT TRÁI: THÔNG TIN CHI NHÁNH */}
          <div className="w-full md:w-5/12 space-y-8 flex flex-col">
            <div>
              <h2 className="text-3xl font-serif font-bold text-amber-800 mb-2 uppercase">
                LUMA SPA
              </h2>
              <div className="w-20 h-1 bg-amber-600"></div>
            </div>

            <div className="space-y-6 text-stone-700 flex-grow">
              <div className="flex gap-4">
                <MapPin className="text-amber-600 shrink-0" size={24} />
                <div>
                  <p className="font-bold uppercase text-sm mb-1">{t("contact.address_label")}</p>
                  <p className="text-sm">{t("contact.address_value")}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-amber-600 shrink-0" size={24} />
                <div>
                  <p className="font-bold uppercase text-sm mb-1">{t("contact.phone_label")}</p>
                  <p className="text-sm font-medium">{t("contact.phone_value")}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-amber-600 shrink-0" size={24} />
                <div>
                  <p className="font-bold uppercase text-sm mb-1">{t("contact.email_label")}</p>
                  <p className="text-sm font-medium">contact@lumaspa.vn</p>
                </div>
              </div>
            </div>

            {/* Ảnh minh họa chi nhánh */}
            <div className="rounded-xl overflow-hidden shadow-lg border-4 border-stone-100 hidden md:block mt-auto">
                <img 
                    src="/images/spa-branch.jpg" 
                    alt="Luma Spa Branch" 
                    className="w-full h-48 object-cover"
                />
            </div>
          </div>

          {/* CỘT PHẢI: GOOGLE MAPS */}
          <div className="w-full md:w-7/12 flex flex-col">
            <div className="bg-stone-50 p-2 rounded-2xl shadow-inner border border-stone-100 h-full min-h-[450px] relative group">
              {/* Header nhỏ cho bản đồ */}
              <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-amber-100 flex items-center gap-2">
                <MapIcon size={16} className="text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800">{t("contact.find_us")}</span>
              </div>

              {/* Iframe Google Maps */}
              <iframe
                title="Luma Spa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.967745319754!2d108.23160771006347!3d16.067163484547834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142182bc828bdcb%3A0xae3e3ccbd687f481!2zMTkwIE5ndXnhu4VuIEPDtG5nIFRy4bupLCBBbiBI4bqjaSwgU8ahbiBUcsOgLCDEkMOgIE7hurVuZyA1OTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1773061290970!5m2!1svi!2s"
                className="w-full h-full rounded-xl grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen={true}
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