"use client"; // Chỉ component nhỏ này là client component

import { useState } from "react";
import ContactModal from "@/components/home/contact-modal";

interface BookingButtonProps {
  label: string;
}

export default function BookingButton({ label }: BookingButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center w-full bg-stone-900 text-white py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#dcc296] transition-all duration-500 shadow-lg"
      >
        {label}
      </button>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}