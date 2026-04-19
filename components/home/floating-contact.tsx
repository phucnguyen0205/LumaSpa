"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const contactActions = [
    {
      name: "Call",
      icon: <Phone size={22} fill="currentColor" />,
      link: "tel:0783237168",
    },
    {
  name: "Zalo",
  icon: (
    <img
      src="/images/zalo.png"
      alt="Zalo"
      className="w-8 h-8 object-contain"
    />
  ),
  link: "https://zalo.me/0783237168",
},
    {
      name: "Messenger",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.915 1.455 5.51 3.734 7.19.196.145.313.375.313.623v2.336c0 .546.596.887 1.06.613l2.61-1.546a.798.798 0 01.373-.094c.61.085 1.236.128 1.874.128 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.06 12.872l-2.585-2.756-5.045 2.756 5.548-5.894 2.656 2.756 4.974-2.756-5.548 5.894z" />
        </svg>
      ),
      link: "https://m.me/61576220537133",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={24} fill="currentColor" />,
      link: "https://wa.me/84783237168",
    },
  ];

  return (
    <div className="fixed right-6 bottom-24 z-[99] flex flex-col gap-4">
      {contactActions.map((action, index) => (
        <div key={index} className="relative flex items-center justify-center">
          {/* Hiệu ứng sóng màu vàng cát */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dcc296] opacity-40"></span>
          
          <a
            href={action.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#dcc296] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 border border-white/30"
            title={action.name}
          >
            {action.icon}
          </a>
        </div>
      ))}
    </div>
  );
}