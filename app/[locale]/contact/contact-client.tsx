"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ContactProps {
  messages: {
    title: string;
    subtitle: string;
    brand_name: string;
    address_value: string;
    phone_value: string;
    email_value: string;
    quote: string;
    info: {
      address_label: string;
      phone_label: string;
      email_label: string;
    };
    form: {
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
      note?: string;
    };
    attractions_title: string;
    attractions_list: {
      title: string;
      image: string;
    }[];
  };
}

export default function ContactClient({ messages }: ContactProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      {/* BACKGROUND NÂU CÀ PHÊ (#3d2b1f), TEXT TRẮNG KEM (#FDFBF7) NỔI BẬT */}
      <main className="bg-[#3d2b1f] text-[#FDFBF7]">
        {/* 1. BANNER ẢNH PHÒNG */}
        <section className="relative h-[400px] md:h-[550px] w-full overflow-hidden">
          <Image
            src="/images/contact-banner.jpg" 
            alt="Luma Spa Banner"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-[#3d2b1f]/30" />
        </section>

        {/* 2. SECTION THÔNG TIN & FORM */}
        <section className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* CỘT TRÁI: THÔNG TIN CÔNG TY */}
            <div className="w-full lg:w-[40%] space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold uppercase tracking-widest text-[#C2A382]">
                  {messages.brand_name}
                </h2>
                <div className="w-16 h-1 bg-[#C2A382]/50"></div>
              </div>

              <div className="space-y-8 pt-4">
                {/* Địa chỉ */}
                <div className="flex gap-5">
                  <div className="bg-[#C2A382]/20 p-3 rounded-full shrink-0 h-fit text-[#C2A382]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1 uppercase tracking-[0.2em] text-[#C2A382]">
                      {messages.info.address_label}
                    </p>
                    <address className="not-italic text-[#FDFBF7]/80 leading-relaxed text-base">
                      {messages.address_value}
                    </address>
                  </div>
                </div>

                {/* Điện thoại */}
                <div className="flex gap-5">
                  <div className="bg-[#C2A382]/20 p-3 rounded-full shrink-0 h-fit text-[#C2A382]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1 uppercase tracking-[0.2em] text-[#C2A382]">
                      {messages.info.phone_label}
                    </p>
                    <p className="text-[#FDFBF7] font-bold text-lg">{messages.phone_value}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">
                  <div className="bg-[#C2A382]/20 p-3 rounded-full shrink-0 h-fit text-[#C2A382]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1 uppercase tracking-[0.2em] text-[#C2A382]">
                      {messages.info.email_label}
                    </p>
                    <p className="text-[#FDFBF7] font-medium text-lg hover:text-[#C2A382] transition-colors cursor-pointer">
                      {messages.email_value}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI: FORM LIÊN HỆ */}
            <div className="w-full lg:w-[60%]">
              <div className="bg-[#FDFBF7]/5 p-8 md:p-12 rounded-3xl shadow-sm border border-white/10">
                <p className="text-sm font-medium text-[#FDFBF7]/70 mb-10 leading-relaxed italic border-l-4 border-[#C2A382] pl-4">
                  {messages.form.note}
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#FDFBF7]/60">
                      {messages.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-white/20 p-3 text-sm outline-none focus:border-[#C2A382] bg-transparent transition-all text-[#FDFBF7]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#FDFBF7]/60">
                      {messages.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full border-b border-white/20 p-3 text-sm outline-none focus:border-[#C2A382] bg-transparent transition-all text-[#FDFBF7]"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#FDFBF7]/60">
                      {messages.form.email}
                    </label>
                    <input
                      type="email"
                      className="w-full border-b border-white/20 p-3 text-sm outline-none focus:border-[#C2A382] bg-transparent transition-all text-[#FDFBF7]"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#FDFBF7]/60">
                      {messages.form.message} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full border-b border-white/20 p-3 text-sm outline-none focus:border-[#C2A382] bg-transparent transition-all resize-none text-[#FDFBF7]"
                    />
                  </div>

                  <div className="md:col-span-2 pt-6">
                    {/* NÚT MÀU CÁT ẤM (#C2A382) */}
                    <button
                      type="submit"
                      className="bg-[#C2A382] text-[#3d2b1f] px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#FDFBF7] transition-all flex items-center justify-center gap-3 group w-full md:w-auto rounded-full"
                    >
                      {messages.form.submit}
                      <span className="group-hover:translate-x-2 transition-transform text-lg">›</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION BẢN ĐỒ */}
        <section className="w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-1000 border-y border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.911650302781!2d108.23112347585573!3d16.07009493941454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177f15b49721%3A0xc3f8379435b62b08!2zMTkwIE5ndXnhu4VuIEPDtG5nIFRyw6ksIEFuIEjhuqNpIELhuq9jLCBTxqFuIFRyw6AsIMSQw6AgTuG6t25nIDU1MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1713531456789!5m2!1sen!2s"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>

        {/* 4. SECTION ĐỊA DANH */}
        <section className="container mx-auto px-6 py-24 max-w-7xl relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-[#FDFBF7] uppercase tracking-[0.3em]">
              {messages.attractions_title}
            </h2>
            <div className="w-24 h-px bg-[#C2A382]/40 mx-auto"></div>
          </div>

          <div className="relative group/attractions px-2">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: ".btn-next-attraction",
                prevEl: ".btn-prev-attraction",
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="!static"
            >
              {messages.attractions_list?.map((item, index) => (
                <SwiperSlide key={index} className="pb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-[320px] w-full overflow-hidden group/item cursor-pointer rounded-2xl shadow-xl border border-white/5"
                  >
                    {/* 1. Lớp Ảnh: Zoom khi hover */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover/item:scale-110"
                    />

                    {/* 2. Lớp phủ tối (Overlay) CỐ ĐỊNH: Không bị ẩn đi khi hover để tránh giật sáng */}
                    <div className="absolute inset-0 bg-[#3d2b1f]/50" />

                    {/* 3. Lớp Chữ và Khung: Ẩn đi khi hover (opacity-0) */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center transition-all duration-500 ease-in-out group-hover/item:opacity-0 group-hover/item:pointer-events-none">
                      <div className="border border-white/20 w-full h-full flex flex-col items-center justify-center backdrop-blur-[1px]">
                        <h3 className="text-[#FDFBF7] font-serif text-lg uppercase tracking-widest leading-relaxed px-4">
                          {item.title}
                        </h3>
                        <div className="w-12 h-px bg-[#C2A382] mt-4"></div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {messages.attractions_list && messages.attractions_list.length > 4 && (
              <>
                <button className="btn-prev-attraction absolute left-[-10px] top-[50%] -translate-y-1/2 z-20 bg-[#C2A382] shadow-lg p-3 rounded-full text-[#3d2b1f] hover:bg-[#FDFBF7] transition-all border-none">
                  <ChevronLeft size={18} />
                </button>
                <button className="btn-next-attraction absolute right-[-10px] top-[50%] -translate-y-1/2 z-20 bg-[#C2A382] shadow-lg p-3 rounded-full text-[#3d2b1f] hover:bg-[#FDFBF7] transition-all border-none">
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}