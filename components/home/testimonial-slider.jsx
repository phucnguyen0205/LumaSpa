"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

// 1. DATA ĐA NGÔN NGỮ ĐÃ ĐƯỢC CẬP NHẬT THEO THỰC TẾ LUMA SPA
const TRANSLATIONS = {
  vi: {
    title: "Đánh Giá Khách Hàng",
    subtitle: "Trải nghiệm thực tế của khách hàng tại Luma Spa",
    label: "FEEDBACK",
    items: [
      {
        content: "Siêu ấn tượng! Tối đi chơi về khách sạn gần đó mỏi chân quá nên ào vô 2 đứa làm 2 suất massage chân. Kết quả trên cả hài lòng nha, ok nên ngay trưa hôm sau lại ra gội đầu ủng hộ.",
        author: "Khang Vinh Hồ Ngọc",
        role: "Local Guide (Việt Nam)"
      },
      {
        content: "Các kỹ thuật viên rất chuyên nghiệp và cơ sở vật chất cực kỳ sạch sẽ. Liệu trình massage cổ vai gáy và gội đầu dưỡng sinh là trải nghiệm nhất định phải thử. Thư giãn tuyệt vời nhất tại Đà Nẵng!",
        author: "James Wilson",
        role: "Khách du lịch (Anh Quốc)"
      },
      {
        content: "Spa tốt nhất tại Đà Nẵng. Môi trường trang nhã, kỹ thuật viên tay nghề rất cao và tận tâm. Thực sự khuyên dùng cho du khách muốn trải nghiệm chất lượng dịch vụ massage và gội đầu tốt nhất.",
        author: "Li Wei",
        role: "Khách du lịch (Trung Quốc)"
      },
      {
        content: "Đây là trải nghiệm massage chân hài lòng nhất ở Đà Nẵng. Không gian rất ấm cúng, thoải mái và nhân viên rất thân thiện, nói tiếng Anh tốt.",
        author: "Park Ji-hye",
        role: "Khách du lịch (Hàn Quốc)"
      }
    ]
  },
  en: {
    title: "Customer Reviews",
    subtitle: "Real experiences at Luma Spa",
    label: "FEEDBACK",
    items: [
      {
        content: "Super impressed! Came here for foot massages after walking all day. Beyond satisfied! So good that we came back the next day for hair wash services.",
        author: "Khang Vinh Ho Ngoc",
        role: "Local Guide (Vietnam)"
      },
      {
        content: "Professional therapists and extremely clean facilities. The neck-shoulder massage and herbal hair wash are must-try services. Best relaxation in Da Nang!",
        author: "James Wilson",
        role: "Tourist (UK)"
      },
      {
        content: "Best spa in Da Nang. Elegant environment, highly skilled and dedicated therapists. Highly recommended for travelers looking for top-quality massage and shampoo services.",
        author: "Li Wei",
        role: "Tourist (China)"
      },
      {
        content: "Most satisfying foot massage experience in Da Nang. The atmosphere is very cozy and pleasant, and the staff are extremely friendly.",
        author: "Park Ji-hye",
        role: "Tourist (Korea)"
      }
    ]
  },
  zh: {
    title: "客户评价",
    subtitle: "Luma Spa 的真实体验",
    label: "反馈",
    items: [
      {
        content: "印象超级深刻！走了一整天路后在这里做了足部按摩，非常满意！第二天中午我们又回来体验了洗发服务，非常棒。",
        author: "Khang Vinh Ho Ngoc",
        role: "当地导游（越南）"
      },
      {
        content: "专业的理疗师和极其干净的设施。颈肩按摩和中药洗发是必选项目。岘港最好的放松体验！",
        author: "James Wilson",
        role: "游客（英国）"
      },
      {
        content: "岘港最好的水疗中心。环境优雅，技师技术精湛且敬业。强烈推荐给寻找高品质按摩和洗发服务的游客。",
        author: "李薇",
        role: "游客（中国）"
      },
      {
        content: "岘港最令我满意的足部按摩。氛围非常温馨舒适，工作人员也非常热情友好。",
        author: "朴智惠",
        role: "游客（韩国）"
      }
    ]
  },
  ko: {
    title: "고객 후기",
    subtitle: "루마 스파에서의 리얼 경험",
    label: "피드백",
    items: [
      {
        content: "정말 감동적입니다! 근처 호텔에 묵으면서 발이 너무 피로해 방문했는데, 발 마사지 실력에 정말 만족했습니다. 다음날 점심에 다시 와서 머리 감기 서비스까지 받았어요.",
        author: "Khang Vinh Ho Ngoc",
        role: "로컬 가이드 (베트남)"
      },
      {
        content: "전문적인 테라피스트와 매우 깨끗한 시설을 갖추고 있습니다. 목-어깨 마사지와 두피 케어 샴푸는 꼭 경험해봐야 합니다. 다낭 최고의 휴식처!",
        author: "James Wilson",
        role: "관광객 (영국)"
      },
      {
        content: "다낭 최고의 스파입니다. 분위기가 우아하고 테라피스트들의 실력이 뛰어납니다. 고품격 마사지와 샴푸 서비스를 찾는 분들께 강력 추천합니다.",
        author: "리웨이",
        role: "관광객 (중국)"
      },
      {
        content: "다낭에서 가장 만족스러운 발 마사지였습니다. 분위기가 매우 아늑하고 편안하며 직원들이 정말 친절합니다.",
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

          <div className="absolute bg-[#FDFBF7] p-5 rounded-2xl shadow-2xl w-[85%] left-6 bottom-10 transform -rotate-1 border border-white/20">
            <div className="flex items-center gap-4 mb-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-stone- stone-200 shadow-inner">
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