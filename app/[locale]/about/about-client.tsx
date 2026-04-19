"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function AboutClient({ dict, locale }: { dict: any; locale: string }) {
  if (!dict) return null;

  return (
    /* THAY ĐỔI: Nền toàn trang chuyển sang nâu cà phê tối #3d2b1f */
    <div className="min-h-screen overflow-x-hidden bg-[#3d2b1f] text-[#fcfaf7]">
      
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop')",
            }}
          />
          {/* Lớp phủ Gradient tối hơn để làm nổi bật text trắng kem */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a120e]/95 via-[#3d2b1f]/90 to-[#8B795E]/40" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 lg:px-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="mb-4 text-sm uppercase tracking-[0.35em] text-[#CC6600]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {dict.hero.kicker}
            </motion.p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl text-white">
              <span className="block text-[#f3d5b5]">{dict.hero.title1}</span>
              <span className="block text-[#f3d5b5]">{dict.hero.title2}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#fcfaf7]/85 md:text-lg">
              {dict.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/services`}
                className="group relative overflow-hidden rounded-full bg-[#8B795E] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">{dict.hero.ctaServices}</span>
                <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="rounded-full border border-[#8B795E] px-6 py-3 text-sm font-semibold text-[#fcfaf7] backdrop-blur-sm transition-all hover:scale-105 hover:bg-[#8B795E]/20"
              >
                {dict.hero.ctaContact}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Gradient transition chuyển mượt sang màu nâu tối của trang */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#3d2b1f] to-transparent" />
      </section>

      {/* SECTION 2: GIỚI THIỆU CHUNG */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <FadeUp>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#CC6600]">
                {dict.about.label}
              </p>

              <h2 className="text-3xl font-bold leading-tight md:text-4xl text-[#f3d5b5]">
                {dict.about.title}
              </h2>

              <div className="mt-6 space-y-4">
                <p className="text-base leading-8 text-[#fcfaf7]/70">
                  {dict.about.paragraph1}
                </p>
                <p className="text-base leading-8 text-[#fcfaf7]/70">
                  {dict.about.paragraph2}
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Blur effect dùng màu cam cháy mờ #CC6600 */}
              <div className="absolute -inset-4 rounded-[32px] bg-[#CC6600]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] shadow-2xl border border-[#8B795E]/20">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
                  alt={dict.about.imageAlt}
                  className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-110 brightness-90 hover:brightness-100"
                />
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 3: GIÁ TRỊ CỐT LÕI & SỨ MỆNH */}
      <section className="bg-[#3d2b1f] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeUp>
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#CC6600]">
                {dict.section.label}
              </p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl text-[#fcfaf7]">
                {dict.section.title}
              </h3>
              <div className="mx-auto mt-4 h-1 w-16 bg-[#8B795E]" />
            </div>
          </FadeUp>

          <div className="space-y-12">
            {/* Box Giá trị cốt lõi - Nền Đồng đất #8B795E nhẹ */}
            <FadeUp>
              <div className="grid items-center gap-12 rounded-3xl bg-[#8B795E]/10 p-8 md:grid-cols-2 md:p-12 border border-[#8B795E]/20">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#CC6600]">
                    {dict.coreValues.label}
                  </p>

                  <h4 className="mt-3 text-2xl font-bold md:text-3xl text-[#f3d5b5]">
                    {dict.coreValues.title}
                  </h4>

                  <div className="mt-6 space-y-4 leading-8 text-[#fcfaf7]/70">
                    <p>
                      <span className="font-semibold text-[#fcfaf7]">
                        {dict.coreValues.items.dedication.title}:
                      </span>{" "}
                      {dict.coreValues.items.dedication.desc}
                    </p>
                    <p>
                      <span className="font-semibold text-[#fcfaf7]">
                        {dict.coreValues.items.professional.title}:
                      </span>{" "}
                      {dict.coreValues.items.professional.desc}
                    </p>
                    <p>
                      <span className="font-semibold text-[#fcfaf7]">
                        {dict.coreValues.items.refined.title}:
                      </span>{" "}
                      {dict.coreValues.items.refined.desc}
                    </p>
                    <p>
                      <span className="font-semibold text-[#fcfaf7]">
                        {dict.coreValues.items.sustainable.title}:
                      </span>{" "}
                      {dict.coreValues.items.sustainable.desc}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {/* ... (Các ảnh Gallery giữ nguyên, thêm filter brightness nhẹ) ... */}
                    <div className="space-y-4">
                      <motion.img
                        src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800"
                        className="h-48 w-full rounded-2xl object-cover shadow-lg brightness-90"
                      />
                      <motion.img
                        src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800"
                        className="h-40 w-full rounded-2xl object-cover shadow-lg brightness-90"
                      />
                    </div>
                    <div className="space-y-4 pt-8">
                      <motion.img
                        src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800"
                        className="h-40 w-full rounded-2xl object-cover shadow-lg brightness-90"
                      />
                      <motion.img
                        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800"
                        className="h-48 w-full rounded-2xl object-cover shadow-lg brightness-90"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Box Sứ mệnh - Nền Nâu sâu tối hơn chút */}
            <FadeUp delay={0.2}>
              <div className="grid items-center gap-12 rounded-3xl bg-[#1a120e]/40 p-8 shadow-sm md:grid-cols-2 md:p-12 border border-white/5">
                <div className="order-2 md:order-1">
                   {/* ... (Gallery ảnh sứ mệnh) ... */}
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <motion.img
                          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800"
                          className="h-40 w-full rounded-2xl object-cover shadow-lg brightness-90"
                        />
                        <motion.img
                          src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800"
                          className="h-48 w-full rounded-2xl object-cover shadow-lg brightness-90"
                        />
                      </div>
                      <div className="space-y-4 pt-8">
                        <motion.img
                          src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800"
                          className="h-48 w-full rounded-2xl object-cover shadow-lg brightness-90"
                        />
                        <motion.img
                          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800"
                          className="h-40 w-full rounded-2xl object-cover shadow-lg brightness-90"
                        />
                      </div>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#CC6600]">
                    {dict.mission.label}
                  </p>

                  <h4 className="mt-3 text-2xl font-bold md:text-3xl text-[#f3d5b5]">
                    {dict.mission.title}
                  </h4>

                  <div className="mt-6 space-y-4 leading-8 text-[#fcfaf7]/70">
                    <p>{dict.mission.paragraph1}</p>
                    <p>{dict.mission.paragraph2}</p>
                    <p>{dict.mission.paragraph3}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}