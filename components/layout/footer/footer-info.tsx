"use client";

import Link from "next/link";

const services = [
  "Massage Toàn Thân",
  "Massage Trị Liệu",
  "Gội Đầu Dưỡng Sinh",
  "Massage Chân",
  "Chăm Sóc Da Toàn Thân",
  "Dưỡng Sinh Trị Liệu Chuyên Sâu",
  "Dịch Vụ Khác",
];

export default function FooterInfo() {
  return (
    <section className="bg-[#efefef] text-[#2b2b2b]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Cột 1: Giới thiệu */}
          <div>
            <div className="mb-5">
              <h2 className="text-4xl font-bold tracking-wide text-[#9a5a14]">
                LUMA<span className="text-[#5b3311]">SPA</span>
              </h2>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-[#8c6b4d]">
                Foot & Body Wellness
              </p>
            </div>

            <h3 className="text-2xl font-semibold leading-snug">
              Luma Spa – Vỗ về cơ thể, dịu êm tâm trí
            </h3>

            <p className="mt-5 text-[17px] leading-8 text-[#555]">
              Luma Spa là điểm dừng chân lý tưởng cho những ai muốn chăm sóc
              bản thân một cách toàn diện. Chúng tôi kết hợp tinh hoa trị liệu
              thư giãn với không gian ấm áp để mang lại cảm giác nhẹ nhàng,
              phục hồi và cân bằng cho khách hàng.
            </p>
          </div>

          {/* Cột 2: Thông tin */}
          <div>
            <h3 className="text-2xl font-bold uppercase">Thời gian làm việc</h3>

            <p className="mt-6 text-[17px] leading-8">
              Thứ Hai - Chủ Nhật: 09:00 - 24:00
            </p>

            <p className="mt-5 text-[17px] leading-8">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:lumaspa68@gmail.com"
                className="text-[#3d5f8c] hover:underline"
              >
                lumaspa68@gmail.com
              </a>
            </p>

            <Link
              href="/booking"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#8b4300] px-8 py-4 text-lg font-bold text-white transition hover:opacity-90"
            >
              ĐẶT LỊCH NGAY
            </Link>

            <div className="mt-8 w-full max-w-[240px] overflow-hidden rounded-md border-4 border-[#8b4300] bg-white">
              <img
                src="/images/qr-booking.jpg"
                alt="QR đặt lịch"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Cột 3: Dịch vụ */}
          <div>
            <h3 className="text-2xl font-bold uppercase">Dịch vụ</h3>

            <ul className="mt-6 space-y-4">
              {services.map((item) => (
                <li
                  key={item}
                  className="border-b border-black/10 pb-3 text-[17px] leading-7 text-[#333]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 4: Facebook */}
          <div>
            <h3 className="text-2xl font-bold uppercase">Fanpage Facebook</h3>

            <div className="mt-6 overflow-hidden rounded-md bg-white shadow-sm">
              <iframe
                title="Luma Spa Facebook"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61576220537133&tabs=timeline&width=380&height=460&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="460"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61576220537133"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b5998] text-white text-xl font-bold"
          >
            f
          </a>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c13584] text-white text-xl font-bold"
          >
            ig
          </a>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white text-xl font-bold"
          >
            t
          </a>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff0000] text-white text-xl font-bold"
          >
            ▶
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-[#7a3700] px-6 py-5 text-center text-base text-white">
        Copyright 2022 - 2026 © Luma Spa. All Rights Reserved.
      </div>
    </section>
  );
}