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
    phone_value_2?: string;
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
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <main className="bg-white">
        {/* 1. BANNER ẢNH PHÒNG - Tối giản, không chữ */}
        <section className="relative h-[400px] md:h-[550px] w-full overflow-hidden">
          <Image
            src="/images/contact-banner.jpg" // Thay bằng ảnh banner thực tế
            alt="Luma Spa Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* 2. SECTION THÔNG TIN & FORM */}
        <section className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* CỘT TRÁI: THÔNG TIN CÔNG TY (40%) */}
            <div className="w-full lg:w-[40%] space-y-8 text-[#1a1a1a]">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold uppercase tracking-tight text-[#c2410c]">
                  {messages.brand_name}
                </h2>
                <div className="w-16 h-1 bg-[#c2410c]"></div>
              </div>

              <div className="space-y-8 pt-4">
                {/* Địa chỉ */}
                <div className="flex gap-5">
                  <div className="bg-orange-50 p-3 rounded-full shrink-0 h-fit">
                    <MapPin className="text-[#c2410c]" size={22} />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold mb-1 uppercase tracking-wider text-stone-900">
                      {messages.info.address_label}
                    </p>
                    <address className="not-italic text-stone-600 leading-relaxed text-base">
                      {messages.address_value}
                    </address>
                  </div>
                </div>

                {/* Điện thoại */}
                <div className="flex gap-5">
                  <div className="bg-orange-50 p-3 rounded-full shrink-0 h-fit">
                    <Phone className="text-[#c2410c]" size={22} />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold mb-1 uppercase tracking-wider text-stone-900">
                      {messages.info.phone_label}
                    </p>
                    <div className="space-y-1 text-lg">
                      <p className="text-[#c2410c] font-bold">{messages.phone_value}</p>
                      {messages.phone_value_2 && (
                        <p className="text-[#c2410c] font-bold">{messages.phone_value_2}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">
                  <div className="bg-orange-50 p-3 rounded-full shrink-0 h-fit">
                    <Mail className="text-[#c2410c]" size={22} />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold mb-1 uppercase tracking-wider text-stone-900">
                      {messages.info.email_label}
                    </p>
                    <p className="text-[#c2410c] font-bold text-lg hover:underline cursor-pointer">
                      {messages.email_value}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI: FORM LIÊN HỆ (60%) */}
            <div className="w-full lg:w-[60%]">
              <div className="bg-[#f8f5f2] p-8 md:p-12 rounded-sm shadow-sm">
                <p className="text-sm font-medium text-stone-700 mb-10 leading-relaxed italic border-l-4 border-[#c2410c] pl-4">
                  {messages.form.note ||
                    "NẾU QUÝ KHÁCH CÓ THẮC MẮC, Ý KIẾN PHẢN HỒI... xin chân thành cảm ơn!"}
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-600">
                      {messages.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-stone-200 p-3 text-sm outline-none focus:border-[#c2410c] bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-600">
                      {messages.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full border border-stone-200 p-3 text-sm outline-none focus:border-[#c2410c] bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-600">
                      {messages.form.email}
                    </label>
                    <input
                      type="email"
                      className="w-full border border-stone-200 p-3 text-sm outline-none focus:border-[#c2410c] bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-600">
                      {messages.form.message} *
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full border border-stone-200 p-3 text-sm outline-none focus:border-[#c2410c] bg-white transition-all resize-none"
                    />
                  </div>

                  <div className="md:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="bg-[#c2410c] text-white px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-all flex items-center justify-center gap-3 group w-full md:w-auto"
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

        {/* 3. SECTION BẢN ĐỒ - Full width, không border */}
        <section className="w-full h-[500px] transition-all duration-1000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8955514023225!2d108.217899175921!3d16.071011439380963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421831353055f7%3A0x546bb2961225026!2zQ-G6p3UgUuG7k25n!5e0!3m2!1svi!2svn!4v1712400000000!5m2!1svi!2svn"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        {/* 4. SECTION ĐỊA DANH (Dùng Swiper, Bỏ Zoom Ảnh) */}
        <section className="container mx-auto px-6 py-24 max-w-7xl relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] uppercase tracking-[0.3em]">
              {messages.attractions_title}
            </h2>
            <div className="w-24 h-1 bg-[#dcc296] mx-auto"></div>
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
                1024: { slidesPerView: 4 }, //desktop: 4 ảnh
              }}
              className="!static" // Quan trọng để nút bấm căn theo container cha
            >
              {messages.attractions_list?.map((item, index) => (
                <SwiperSlide key={index} className="pb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-[320px] w-full overflow-hidden group/item cursor-pointer rounded-sm shadow-sm"
                  >
                    {/* Image: Bỏ class 'transition-transform duration-1000 group-hover/item:scale-110' */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover" // Giữ nguyên object-cover để ảnh lấp đầy
                    />

                    {/* Overlay chữ - Giữ nguyên hiệu ứng biến mất khi hover */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center transition-all duration-700 ease-in-out group-hover/item:opacity-0 group-hover/item:pointer-events-none">
                      <div className="border border-white/30 w-full h-full flex flex-col items-center justify-center backdrop-blur-[2px]">
                        <h3 className="text-white font-serif text-lg uppercase tracking-widest leading-relaxed px-4 drop-shadow-lg">
                          {item.title}
                        </h3>
                        <div className="w-12 h-px bg-[#dcc296] mt-4"></div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Nút điều hướng tùy chỉnh - Giữ nguyên thiết kế */}
            {messages.attractions_list && messages.attractions_list.length > 4 && (
              <>
                <button className="btn-prev-attraction absolute left-[-10px] top-[50%] -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md shadow-xl p-2 rounded-full text-stone-800 hover:bg-[#c2410c] hover:text-white transition-all disabled:opacity-0 disabled:pointer-events-none border border-stone-100">
                  <ChevronLeft size={20} />
                </button>
                <button className="btn-next-attraction absolute right-[-10px] top-[50%] -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md shadow-xl p-2 rounded-full text-stone-800 hover:bg-[#c2410c] hover:text-white transition-all disabled:opacity-0 disabled:pointer-events-none border border-stone-100">
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}