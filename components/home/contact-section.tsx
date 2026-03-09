"use client";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Send } from "lucide-react";

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
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* CỘT TRÁI: THÔNG TIN CHI NHÁNH DUY NHẤT */}
          <div className="w-full md:w-5/12 space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-amber-800 mb-2 uppercase">
                LUMA SPA
              </h2>
              <div className="w-20 h-1 bg-amber-600"></div>
            </div>

            <div className="space-y-6 text-stone-700">
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
            <div className="rounded-xl overflow-hidden shadow-lg border-4 border-stone-100 hidden md:block">
                <img 
                    src="/images/spa-branch.jpg" 
                    alt="Luma Spa Branch" 
                    className="w-full h-56 object-cover"
                />
            </div>
          </div>

         

        </div>
      </div>
    </section>
  );
}