// src/app/[locale]/services/data.ts

export interface ServiceData {
  slug: string;
  youtubeId: string; // ID từ link Youtube để nhúng vào iframe
  name: {
    vi: string;
    en: string;
    zh: string;
    ko: string;
  };
  keywords: {
    vi: string;
    en: string;
    zh: string;
    ko: string;
  };
  description: {
    vi: string;
    en: string;
    zh: string;
    ko: string;
  };
  price: string;
  image: string;
  highlight?: boolean;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "thai-massage-da-nang",
    youtubeId: "dQw4w9WgXcQ", // Thay bằng ID thực tế
    name: {
      vi: "Massage Thái Cổ Truyền",
      en: "Traditional Thai Massage",
      zh: "传统泰式按摩",
      ko: "전통 태국 마사지",
    },
    keywords: {
      vi: "massage thái đà nẵng, spa đà nẵng, massage trị liệu, luma spa",
      en: "thai massage da nang, best spa in da nang, therapy massage, luma spa",
      zh: "岘港按摩, 岘港泰式按摩, 岘港水疗, Luma Spa",
      ko: "다낭 마사지, 다낭 태국 마사지, 다낭 스파, 루마 스파",
    },
    description: {
      vi: "Massage Thái tại Đà Nẵng giúp thư giãn, giảm đau nhức và cải thiện lưu thông máu.",
      en: "Thai massage in Da Nang for relaxation, pain relief and better circulation.",
      zh: "岘港泰式按摩，放松身心，缓解酸痛，促进血液循环。",
      ko: "다낭 태국 마사지는 휴식, 통증 완화 및 혈액 순환 개선에 도움이 됩니다.",
    },
    price: "360.000đ - 560.000đ",
    image: "/images/services/thai.jpg",
  },
  {
    keywords: {
      vi: "massage đá nóng đà nẵng, spa đà nẵng, massage trị liệu, luma spa",
      en: "hot stone massage da nang, best spa in da nang, therapy massage, luma spa",
      zh: "岘港热石按摩, 岘港水疗, 岘港按摩治疗, Luma Spa",
      ko: "다낭 핫스톤 마사지, 다낭 스파, 다낭 치료 마사지, 루마 스파",
    },
    slug: "hot-stone-massage-da-nang",
    youtubeId: "v7AYKz67YpY",
    name: {
      vi: "Massage Đá Nóng",
      en: "Hot Stone Massage",
      zh: "热石按摩",
      ko: "핫스톤 마사지",
    },
    description: {
      vi: "Sử dụng đá núi lửa kết hợp tinh dầu để thải độc và giảm căng thẳng cơ bắp.",
      en: "Using volcanic stones combined with essential oils to detoxify and reduce muscle tension.",
      zh: "采用火山石结合精油，排毒并缓解肌肉紧张。",
      ko: "화산석과 에센셜 오일을 사용하여 독소를 배출하고 근육 긴장을 완화합니다.",
    },
    price: "450.000đ - 650.000đ",
    image: "/images/services/hot-stone.jpg",
  },
  {
    keywords: {
      vi: "massage cổ vai gáy đà nẵng, spa đà nẵng, massage trị liệu, luma spa",
      en: "neck shoulder massage da nang, best spa in da nang, therapy massage, luma spa",
      zh: "岘港颈肩按摩, 岘港水疗, 岘港按摩治疗, Luma Spa",
      ko: "다낭 목 어깨 마사지, 다낭 스파, 다낭 치료 마사지, 루마 스파",
    },
    slug: "neck-shoulder-massage-da-nang",
    youtubeId: "example_id_3",
    name: {
      vi: "Massage Cổ Vai Gáy",
      en: "Neck & Shoulder Massage",
      zh: "颈肩按摩",
      ko: "목 & 어깨 마사지",
    },
    description: {
      vi: "Giải pháp hoàn hảo cho dân văn phòng, giảm đau mỏi vùng cổ và vai tức thì.",
      en: "Perfect solution for office workers, instant relief for neck and shoulder pain.",
      zh: "上班族的完美选择，即刻缓解颈肩酸痛。",
      ko: "사무직 종사자에게 완벽한 솔루션, 목과 어깨 통증을 즉시 완화해 줍니다.",
    },
    price: "250.000đ - 400.000đ",
    image: "/images/services/neck.jpg",
  },
  {
    keywords: {
      vi: "massage toàn thân đà nẵng, spa đà nẵng, massage trị liệu, luma spa",
      en: "body massage da nang, best spa in da nang, therapy massage, luma spa",
      zh: "岘港全身按摩, 岘港水疗, 岘港按摩治疗, Luma Spa",
      ko: "다낭 전신 마사지, 다낭 스파, 다낭 치료 마사지, 루마 스파",
    },
    slug: "body-massage-da-nang",
    youtubeId: "example_id_4",
    name: {
      vi: "Massage Toàn Thân",
      en: "Body Massage",
      zh: "全身按摩",
      ko: "전신 마사지",
    },
    description: {
      vi: "Kết hợp các kỹ thuật ấn huyệt và miết cơ giúp phục hồi năng lượng toàn diện.",
      en: "Combining acupressure and muscle stroking techniques for full energy recovery.",
      zh: "结合穴位按摩和肌肉推拿技术，全面恢复活力。",
      ko: "지압과 근육 마사지 기술을 결합하여 에너지를 전면적으로 회복시킵니다.",
    },
    price: "400.000đ - 600.000đ",
    image: "/images/services/body.jpg",
  },
  {
    keywords: {
      vi: "massage chân đà nẵng, spa đà nẵng, massage trị liệu, luma spa",
      en: "foot massage da nang, best spa in da nang, therapy massage, luma spa",
      zh: "岘港足底按摩, 岘港水疗, 岘港按摩治疗, Luma Spa",
      ko: "다낭 발 마사지, 다낭 스파, 다낭 치료 마사지, 루마 스파",
    },
    slug: "foot-massage-da-nang",
    youtubeId: "example_id_5",
    name: {
      vi: "Massage Chân",
      en: "Foot Massage",
      zh: "足底按摩",
      ko: "발 마사지",
    },
    description: {
      vi: "Tập trung vào các huyệt đạo ở lòng bàn chân, giúp xua tan mệt mỏi sau ngày dài di chuyển.",
      en: "Focusing on pressure points on the soles, helping to dispel fatigue after a long day of moving.",
      zh: "针对足底穴位，缓解长途跋涉后的疲劳。",
      ko: "발바닥의 지압점에 집중하여 장시간 이동 후의 피로를 풀어줍니다.",
    },
    price: "200.000đ - 350.000đ",
    image: "/images/services/foot.jpg",
  },
  {
    keywords: {
      vi: "gội đầu thảo dược đà nẵng, spa đà nẵng, chăm sóc tóc, luma spa",
      en: "herbal hair wash da nang, best spa in da nang, hair care, luma spa",
      zh: "岘港草本洗发, 岘港水疗, 岘港头发护理, Luma Spa",
      ko: "다낭 허브 헤어 워시, 다낭 스파, 헤어 케어, 루마 스파",
    },
    slug: "herbal-hair-wash-da-nang",
    youtubeId: "example_id_6",
    name: {
      vi: "Gội Đầu Thảo Dược",
      en: "Herbal Hair Wash",
      zh: "草本洗发",
      ko: "한방 샴푸",
    },
    description: {
      vi: "Sử dụng các loại thảo mộc tự nhiên giúp làm sạch da đầu và thư giãn trí óc.",
      en: "Using natural herbs to cleanse the scalp and relax the mind.",
      zh: "采用天然草本清洁头皮，放松心情。",
      ko: "천연 허브를 사용하여 두피를 세정하고 마음을 편안하게 해줍니다.",
    },
    price: "150.000đ - 250.000đ",
    image: "/images/services/hair-wash.jpg",
  },
  {
    keywords: {
      vi: "gội đầu ocean abyss đà nẵng, spa đà nẵng, chăm sóc tóc, luma spa",
      en: "ocean abyss scalp therapy da nang, best spa in da nang, hair care, luma spa",
      zh: "岘港深海头皮疗法, 岘港水疗, 岘港头发护理, Luma Spa",
      ko: "다낭 오션 어비스 두피 테라피, 다낭 스파, 헤어 케어, 루마 스파",
    },
    slug: "ocean-abyss-scalp-therapy-da-nang",
    youtubeId: "example_id_7",
    name: {
      vi: "Gội Đầu Ocean Abyss",
      en: "Ocean Abyss Scalp Therapy",
      zh: "深海头皮疗法",
      ko: "오션 어비스 두피 테라피",
    },
    description: {
      vi: "Gội đầu dưỡng sinh cao cấp kết hợp massage thư giãn chuyên sâu tại Đà Nẵng.",
      en: "Premium scalp therapy with relaxing massage in Da Nang.",
      zh: "岘港高级养生洗发，结合深度放松按摩。",
      ko: "다낭의 심층 릴랙스 마사지와 결합된 프리미엄 두피 테라피.",
    },
    price: "239.000đ - 339.000đ",
    image: "/images/services/ocean.jpg",
    highlight: true,
  },
  {
    keywords: {
      vi: "combo chân cổ vai gáy đà nẵng, spa đà nẵng, massage trị liệu, luma spa",
      en: "foot neck shoulder combo da nang, best spa in da nang, therapy massage, luma spa",
      zh: "岘港足部颈肩套装, 岘港水疗, 岘港按摩治疗, Luma Spa",
      ko: "다낭 발 목 어깨 콤보, 다낭 스파, 다낭 치료 마사지, 루마 스파",
    },
    slug: "foot-neck-shoulder-combo-da-nang",
    youtubeId: "example_id_8",
    name: {
      vi: "Combo Chân & Cổ Vai Gáy",
      en: "Foot & Neck Shoulder Combo",
      zh: "足部与颈肩套装",
      ko: "발 & 목 어깨 콤보",
    },
    description: {
      vi: "Sự kết hợp hoàn hảo để chăm sóc các vùng mệt mỏi nhất trên cơ thể.",
      en: "The perfect combination to care for the most tired areas of the body.",
      zh: "呵护身体最疲劳部位 promotion 的完美结合。",
      ko: "신체에서 가장 피로한 부위를 관리하기 위한 완벽한 조합.",
    },
    price: "450.000đ - 700.000đ",
    image: "/images/services/combo.jpg",
  },
  {
    keywords: {
      vi: "chăm sóc da mặt đà nẵng, spa đà nẵng, facial treatment, luma spa",
      en: "facial treatment da nang, best spa in da nang, skin care, luma spa",
      zh: "岘港面部护理, 岘港水疗, 岘港护肤, Luma Spa",
      ko: "다낭 페이셜 트리트먼트, 다낭 스파, 피부 관리, 루마 스파",
    },
    slug: "facial-treatment-da-nang",
    youtubeId: "example_id_9",
    name: {
      vi: "Chăm Sóc Da Mặt",
      en: "Facial Treatment",
      zh: "面部护理",
      ko: "페이셜 케어",
    },
    description: {
      vi: "Liệu trình chăm sóc da chuyên sâu, mang lại làn da tươi trẻ và mịn màng.",
      en: "Intensive skin care treatment, providing youthful and smooth skin.",
      zh: "深度肌肤护理，打造年轻水润肌肤。",
      ko: "생기 있고 매끄러운 피부를 선사하는 집중 스킨케어 트리트먼트.",
    },
    price: "300.000đ - 800.000đ",
    image: "/images/services/facial.jpg",
  },
];