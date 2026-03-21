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

// Truyền dict từ Server xuống để giữ nguyên cấu trúc file mẫu
export default function AboutClient({ dict, locale }: { dict: any; locale: string }) {
  if (!dict) return null;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf8f5] text-[#2b2b2b]">
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#2f241f]/95 via-[#4a382f]/90 to-[#7a5a47]/85" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 lg:px-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="mb-4 text-sm uppercase tracking-[0.35em] text-[#e7b56a]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {dict.hero.kicker}
            </motion.p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl text-white">
              <span className="block text-[#f2c27b]">{dict.hero.title1}</span>
              <span className="block text-[#f2c27b]">{dict.hero.title2}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              {dict.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/spa-services`}
                className="group relative overflow-hidden rounded-full bg-[#e7b56a] px-6 py-3 text-sm font-semibold text-[#2f241f] transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">{dict.hero.ctaServices}</span>
                <div className="absolute inset-0 translate-y-full bg-white/30 transition-transform duration-300 group-hover:translate-y-0" />
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/10"
              >
                {dict.hero.ctaContact}
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf8f5] to-transparent" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <FadeUp>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b07a3f]">
                {dict.about.label}
              </p>

              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                {dict.about.title}
              </h2>

              <div className="mt-6 space-y-4">
                <p className="text-base leading-8 text-[#5c5c5c]">
                  {dict.about.paragraph1}
                </p>
                <p className="text-base leading-8 text-[#5c5c5c]">
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
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#e7b56a]/30 to-[#b07a3f]/20 blur-xl" />
              <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
                  alt={dict.about.imageAlt}
                  className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeUp>
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b07a3f]">
                {dict.section.label}
              </p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                {dict.section.title}
              </h3>
              <div className="mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-[#e7b56a] to-[#b07a3f]" />
            </div>
          </FadeUp>

          <div className="space-y-12">
            <FadeUp>
              <div className="grid items-center gap-12 rounded-3xl bg-[#faf8f5] p-8 md:grid-cols-2 md:p-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b07a3f]">
                    {dict.coreValues.label}
                  </p>

                  <h4 className="mt-3 text-2xl font-bold md:text-3xl">
                    {dict.coreValues.title}
                  </h4>

                  <div className="mt-6 space-y-4 leading-8 text-[#5c5c5c]">
                    <p>
                      <span className="font-semibold text-[#2b2b2b]">
                        {dict.coreValues.items.dedication.title}:
                      </span>{" "}
                      {dict.coreValues.items.dedication.desc}
                    </p>
                    <p>
                      <span className="font-semibold text-[#2b2b2b]">
                        {dict.coreValues.items.professional.title}:
                      </span>{" "}
                      {dict.coreValues.items.professional.desc}
                    </p>
                    <p>
                      <span className="font-semibold text-[#2b2b2b]">
                        {dict.coreValues.items.refined.title}:
                      </span>{" "}
                      {dict.coreValues.items.refined.desc}
                    </p>
                    <p>
                      <span className="font-semibold text-[#2b2b2b]">
                        {dict.coreValues.items.sustainable.title}:
                      </span>{" "}
                      {dict.coreValues.items.sustainable.desc}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800"
                        className="h-48 w-full rounded-2xl object-cover shadow-lg"
                        alt="Gallery 1"
                      />
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800"
                        className="h-40 w-full rounded-2xl object-cover shadow-lg"
                        alt="Gallery 2"
                      />
                    </div>

                    <div className="space-y-4 pt-8">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800"
                        className="h-40 w-full rounded-2xl object-cover shadow-lg"
                        alt="Gallery 3"
                      />
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800"
                        className="h-48 w-full rounded-2xl object-cover shadow-lg"
                        alt="Gallery 4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="grid items-center gap-12 rounded-3xl bg-gradient-to-br from-[#fffaf4] to-white p-8 shadow-sm md:grid-cols-2 md:p-12">
                <div className="order-2 md:order-1">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
                          className="h-40 w-full rounded-2xl object-cover shadow-lg"
                          alt="Gallery 5"
                        />
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
                          className="h-48 w-full rounded-2xl object-cover shadow-lg"
                          alt="Gallery 6"
                        />
                      </div>

                      <div className="space-y-4 pt-8">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop"
                          className="h-48 w-full rounded-2xl object-cover shadow-lg"
                          alt="Gallery 7"
                        />
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
                          className="h-40 w-full rounded-2xl object-cover shadow-lg"
                          alt="Gallery 8"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b07a3f]">
                    {dict.mission.label}
                  </p>

                  <h4 className="mt-3 text-2xl font-bold md:text-3xl">
                    {dict.mission.title}
                  </h4>

                  <div className="mt-6 space-y-4 leading-8 text-[#5c5c5c]">
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