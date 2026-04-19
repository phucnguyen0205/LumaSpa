"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { 
  Facebook, 
  Instagram, 
  Phone, 
  Mail, 
  MessageCircle, 
  X 
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useTranslation(["contact", "footer"]);

  if (!isOpen) return null;

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="text-[#1877F2]" />,
      link: "https://www.facebook.com/profile.php?id=61576220537133",
      label: "Luma Spa Đà Nẵng",
    },
    {
      name: "Instagram",
      icon: <Instagram className="text-[#E4405F]" />,
      link: "#", 
      label: "@lumaspa.danang",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="text-[#25D366]" />,
      link: "https://wa.me/84783237168",
      label: "+84 783 237 168",
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl animate-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-[#a85a11] p-6 text-center text-white">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          <h3 className="text-xl font-bold uppercase tracking-wider">
            {t("contact_title", { ns: "contact", defaultValue: "Liên hệ với chúng tôi" })}
          </h3>
          <p className="mt-1 text-xs text-white/80">
            {t("contact_subtitle", { ns: "contact", defaultValue: "Luma Spa luôn sẵn sàng lắng nghe bạn" })}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          
          {/* Social Links */}
          <div className="grid gap-3">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-gray-100 p-3 hover:bg-gray-50 hover:border-[#a85a11]/30 transition-all group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-gray-400 leading-none mb-1">{item.name}</p>
                  <p className="text-sm font-semibold text-gray-700">{item.label}</p>
                </div>
              </a>
            ))}
          </div>

          <hr className="border-gray-100" />

          {/* Direct Contact */}
          <div className="space-y-3">
            <a 
              href="tel:0783237168" 
              className="flex items-center gap-4 p-2 group"
            >
              <Phone size={18} className="text-[#a85a11]" />
              <span className="text-sm font-medium text-gray-600 group-hover:text-[#a85a11]">
                {t("phone_value", { ns: "footer" })}
              </span>
            </a>
            <a 
              href="mailto:lumaspadn@gmail.com" 
              className="flex items-center gap-4 p-2 group"
            >
              <Mail size={18} className="text-[#a85a11]" />
              <span className="text-sm font-medium text-gray-600 group-hover:text-[#a85a11]">
                {t("email_value", { ns: "footer" })}
              </span>
            </a>
          </div>
        </div>

        {/* Footer Modal */}
        <div className="bg-gray-50 p-4 text-center">
          <p className="text-[11px] text-gray-400 italic">
            {t("working_hours", { ns: "footer" })}
          </p>
        </div>
      </div>
    </div>
  );
}