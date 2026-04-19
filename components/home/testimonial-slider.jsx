"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

// 1. DATA ĐA NGÔN NGỮ TRỰC TIẾP
const TRANSLATIONS = {
  vi: {
    title: "Đánh Giá Khách Hàng",
    subtitle: "Trải nghiệm của khách hàng tại Luma Spa",
    label: "FEEDBACK",
    items: [
      {
        content: "Mình được người quen dẫn đến, team mình có 4 người. Phòng xông hơi đá muối rộng rãi, thoải mái. Thái độ phục vụ của nhân viên ở đây cực kỳ tốt.",
        author: "Trần Nhật Anh",
        role: "Khách hàng thân quen (Việt Nam)"
      },
      {
        content: "Các kỹ thuật viên rất chuyên nghiệp và cơ sở vật chất cực kỳ sạch sẽ. Phòng xông hơi đá muối là trải nghiệm nhất định phải thử. Thư giãn tuyệt vời nhất tại Đà Nẵng!",
        author: "James Wilson",
        role: "Khách du lịch (Anh Quốc)"
      },
      {
        content: "Spa tốt nhất tại Đà Nẵng. Môi trường trang nhã, kỹ thuật chuyên nghiệp. Thực sự khuyên dùng cho du khách muốn trải nghiệm chất lượng cao.",
        author: "Li Wei",
        role: "Khách du lịch (Trung Quốc)"
      },
      {
        content: "Đây là trải nghiệm spa hài lòng nhất ở Đà Nẵng. Phòng muối rất rộng rãi, thoải mái và nhân viên rất thân thiện.",
        author: "Park Ji-hye",
        role: "Khách du lịch (Hàn Quốc)"
      }
    ]
  },
  en: {
    title: "Customer Reviews",
    subtitle: "Customer experience at Luma Spa",
    label: "FEEDBACK",
    items: [
      {
        content: "Recommended by a friend, our team of 4 came here. The salt rock sauna is spacious and comfortable. The staff attitude is extremely good.",
        author: "Tran Nhat Anh",
        role: "Regular Customer (Vietnam)"
      },
      {
        content: "Professional therapists and extremely clean facilities. The salt rock sauna is a must-try. Best relaxation in Da Nang!",
        author: "James Wilson",
        role: "Tourist (UK)"
      },
      {
        content: "Best spa in Da Nang. Elegant environment, professional technique. Highly recommended for tourists looking for a high-quality experience.",
        author: "Li Wei",
        role: "Tourist (China)"
      },
      {
        content: "The most satisfying spa in Da Nang. The salt room is very large and pleasant, and the staff are kind.",
        author: "Park Ji-hye",
        role: "Tourist (Korea)"
      }
    ]
  },
  zh: {
    title: "客户评价",
    subtitle: "Luma Spa 的客户体验",
    label: "反馈",
    items: [
      {
        content: "经熟人介绍，我们一行4人来到这里。岩盐桑拿房宽敞舒适。这里员工的服务态度非常好。",
        author: "陈日安",
        role: "常客（越南）"
      },
      {
        content: "专业的理疗师和极其干净的设施。岩盐桑拿是必尝之选。岘港最好的放松之所！",
        author: "James Wilson",
        role: "游客（英国）"
      },
      {
        content: "岘港最好的水疗中心。环境优雅，技术专业。强烈推荐给寻找高品质体验的游客。",
        author: "李薇",
        role: "游客（中国）"
      },
      {
        content: "岘港最令我满意的 Spa。盐屋非常宽敞舒适，员工们也很亲切。",
        author: "朴智惠",
        role: "游客（韩国）"
      }
    ]
  },
  ko: {
    title: "고객 후기",
    subtitle: "루마 스파에서의 고객 경험",
    label: "피드백",
    items: [
      {
        content: "지인의 소개로 4명이 함께 방문했습니다. 암염 사우나가 넓고 쾌적하며, 직원들의 서비스 태도가 매우 훌륭합니다.",
        author: "쩐 녓 안",
        role: "단골 고객 (베트남)"
      },
      {
        content: "전문적인 테라피스트와 매우 깨끗한 시설을 갖추고 있습니다. 암염 사우나는 꼭 경험해봐야 합니다. 다낭 최고의 휴식처!",
        author: "James Wilson",
        role: "관광객 (영국)"
      },
      {
        content: "다낭 최고의 스파입니다. 분위기가 우아하고 기술이 전문적입니다. 고품격 서비스를 찾는 관광객에게 강력 추천합니다.",
        author: "리웨이",
        role: "관광객 (중국)"
      },
      {
        content: "다낭에서 가장 만족스러운 스파였습니다. 소금방이 매우 넓고 쾌적하며 직원들이 친절합니다.",
        author: "박지혜",
        role: "관광객 (한국)"
      }
    ]
  }
};

export default function TestimonialSlider() {
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Lấy dữ liệu theo locale hiện tại, fallback về 'vi' nếu không tìm thấy
  const t = TRANSLATIONS[locale] || TRANSLATIONS.vi;
  const items = t.items;

  const AUTO_PLAY_INTERVAL = 4000;
  const currentItem = items[activeIndex];

  useEffect(() => {
    if (isPaused) return; 
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  return (
    <div className="flex flex-col md:flex-row gap-16 items-start relative z-10 w-full">
      
      {/* --- CỘT TRÁI: KHUNG ẢNH --- */}
      <div className="w-full md:w-5/12 flex flex-col">
        <div className="mb-10 text-center md:text-left text-[#FDFBF7]">
          <h2 className="text-3xl md:text-4xl font-serif mb-3 tracking-tight">{t.title}</h2>
          <p className="text-sm md:text-base italic font-light opacity-80">{t.subtitle}</p>
        </div>

        <div className="relative w-full aspect-square bg-[#3d2b1f]/40 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden border border-white/10">
          <span className="text-white/5 font-serif text-8xl font-bold uppercase rotate-[-25deg] select-none">
            {t.label}
          </span>

          {/* KHUNG ẢNH LỚN */}
          <div className="absolute top-6 right-6 w-[80%] h-[80%] border-[6px] border-white/20 rounded-lg overflow-hidden shadow-2xl hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="relative w-full h-full"
              >
                <Image 
                  src={`/images/customer_${activeIndex + 1}.png`} 
                  alt={currentItem.author} 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* STATIC CARD: Card feedback nhỏ */}
          <div className="absolute bg-[#FDFBF7] p-5 rounded-2xl shadow-2xl w-[85%] left-6 bottom-10 transform -rotate-1 border border-white/20">
            <div className="flex items-center gap-4 mb-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-stone-200 shadow-inner">
                <Image 
                  key={`avt-${activeIndex}`} 
                  src={`/images/customer_${activeIndex + 1}.png`} 
                  alt={currentItem.author} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[#3d2b1f] leading-tight">{currentItem.author}</p>
                <p className="text-xs text-[#B38B59]">★★★★★</p>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.p 
                key={activeIndex}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-[11px] text-[#3d2b1f]/70 italic leading-relaxed line-clamp-2"
              >
                "{currentItem.content}"
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* --- CỘT PHẢI: NỘI DUNG SLIDER --- */}
      <div 
        className="w-full md:w-7/12 pt-10 md:pt-32 relative md:pl-16 border-l border-white/10 min-h-[350px] flex flex-col justify-between"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-10"
          >
            <p className="text-[#FDFBF7] text-xl md:text-2xl leading-relaxed font-light italic min-h-[140px]">
              "{currentItem.content}"
            </p>
            <div className="space-y-1">
              <h4 className="text-2xl md:text-3xl font-serif text-[#FDFBF7]">{currentItem.author}</h4>
              <p className="text-xs uppercase tracking-[0.3em] text-[#B38B59] font-bold">{currentItem.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS NAVIGATION */}
        <div className="flex items-center gap-4 mt-12 justify-center md:justify-start">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsPaused(false);
              }}
              className="relative h-1.5 transition-all duration-500 overflow-hidden rounded-full bg-white/10"
              style={{ width: activeIndex === index ? "60px" : "15px" }}
            >
              {activeIndex === index && (
                <motion.div
                  key={`progress-${index}-${isPaused}`}
                  initial={{ width: 0 }}
                  animate={{ width: isPaused ? "0%" : "100%" }}
                  transition={{
                    duration: isPaused ? 0 : AUTO_PLAY_INTERVAL / 1000,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-[#B38B59]"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}