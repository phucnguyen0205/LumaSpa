"use client"; // Bắt buộc phải có dòng này

import { motion } from "framer-motion";
import Image from "next/image";

interface BannerProps {
  image: string;
  name: string;
}

export default function ServiceBanner({ image, name }: BannerProps) {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover scale-105 transition-transform duration-[10s] ease-out"
        priority
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent flex flex-col items-center justify-center text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#d48a1f] text-sm md:text-base font-serif uppercase tracking-[0.4em] mb-4 block">
            Luma Spa Experience
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white uppercase tracking-[0.2em] drop-shadow-2xl">
            {name}
          </h1>
          <div className="w-20 h-[2px] bg-[#d48a1f] mx-auto mt-8"></div>
        </motion.div>
      </div>
    </section>
  );
}