"use client";
import React from 'react';
import { useTranslation } from "react-i18next";

export default function TestimonialSection() {
  // Sử dụng hook i18next để lấy các giá trị dịch thuật dựa trên Key
  const { t } = useTranslation("home");

  // ĐỐI TƯỢNG DỮ LIỆU DẠNG KEY (Để bạn dễ dàng quản lý đa ngôn ngữ)
  const testimonialContent = {
    // Tiêu đề chính và phụ nằm phía trên bên trái
    header: {
      title: t("testimonials.title"), // "Đánh giá của Khách Hàng"
      subtitle: t("testimonials.subtitle"), // "Trải nghiệm của khách hàng tại ChillOut Spa"
    },
    // Chữ trang trí mờ trong khung ảnh
    staticText: t("testimonials.static_feedback_label"), // "FEEDBACK"
    
    // PHẦN DỮ LIỆU THẬT: Khi có khách hàng đánh giá, dữ liệu sẽ truyền vào đây
    // Ở đây tôi để placeholder để bạn kết nối API sau này
    realData: {
      content: t("testimonials.current_content"), 
      author: t("testimonials.current_author"),
      role: t("testimonials.current_role")
    }
  };

  return (
    /* KHUNG 1: MÀU TRẮNG BAO NGOÀI (PADDING TẠO KHOẢNG TRỐNG) */
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#D1B673] rounded-sm p-8 md:p-20 shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row gap-16 items-start relative z-10">
            
            {/* CỘT BÊN TRÁI: TIÊU ĐỀ & KHUNG ẢNH */}
            <div className="w-full md:w-5/12 flex flex-col">
              {/* Phần chữ Key đa ngôn ngữ ở trên */}
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-3 tracking-tight">
                  {testimonialContent.header.title}
                </h2>
                <p className="text-stone-700 text-sm md:text-base italic font-light">
                  {testimonialContent.header.subtitle}
                </p>
              </div>

              {/* KHUNG ẢNH TRỐNG: Bạn sẽ gắn thẻ <img> của bạn vào đây */}
              <div className="relative w-full aspect-square bg-[#5F6F52] rounded-sm shadow-2xl flex items-center justify-center group overflow-hidden">
                {/* Chữ Feedback mờ trang trí phía dưới */}
                <span className="text-white/10 font-serif text-7xl md:text-8xl font-bold uppercase rotate-[-12deg] select-none">
                  {testimonialContent.staticText}
                </span>

                {/* Card Feedback nhỏ đè lên (Giữ form mẫu của bạn) */}
                <div className="absolute bg-white p-6 rounded-[2rem] shadow-2xl w-[85%] left-4 bottom-12 transform -rotate-1 transition-transform group-hover:rotate-0 duration-500">
                   <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 bg-stone-100 rounded-full flex-shrink-0"></div>
                      <div>
                          <p className="text-sm font-bold text-stone-900">User Name</p>
                          <p className="text-xs text-amber-500 tracking-tighter">★★★★★</p>
                      </div>
                   </div>
                   <div className="space-y-1">
                      <div className="h-2 bg-stone-100 rounded w-full"></div>
                      <div className="h-2 bg-stone-100 rounded w-[90%]"></div>
                      <div className="h-2 bg-stone-100 rounded w-[40%]"></div>
                   </div>
                </div>
              </div>
            </div>

            {/* CỘT BÊN PHẢI: HIỂN THỊ DỮ LIỆU THẬT */}
            <div className="w-full md:w-7/12 pt-10 md:pt-32">
              <div className="relative md:pl-16 border-l border-stone-800/10 min-h-[300px] flex flex-col justify-between">
                
                {/* Nội dung đánh giá thật (Sử dụng Key) */}
                <div className="space-y-12">
                  <p className="text-stone-800 text-lg md:text-xl leading-relaxed font-light italic">
                    {testimonialContent.realData.content ? (
                        `"${testimonialContent.realData.content}"`
                    ) : (
                        // Hiện trạng thái chờ nếu chưa có dữ liệu
                        t("testimonials.loading_text")
                    )}
                  </p>

                  <div className="space-y-1">
                    <h4 className="text-2xl md:text-3xl font-serif text-stone-900">
                      {testimonialContent.realData.author}
                    </h4>
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-stone-600 font-bold">
                      {testimonialContent.realData.role}
                    </p>
                  </div>
                </div>

                {/* Các chấm điều hướng trang trí */}
                <div className="flex gap-3 mt-12 justify-center md:justify-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-800/20 cursor-pointer"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-800 cursor-pointer"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-800/20 cursor-pointer"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}