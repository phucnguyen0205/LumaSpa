export type Locale = "vi" | "en" | "zh" | "ko";
export type Category = "massage" | "hair" | "facial" | "combo";

export interface ServiceData {
  id: string;
  slug: string;
  category: Category;
  youtubeId: string;
  image: string;
  price: string;
  priceValue: number;
  highlight?: boolean;
  seo: {
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    keywords: Record<Locale, string[]>;
  };
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  longDescription: Record<Locale, string>;
  whyChoose: Record<Locale, string>;
  benefits: Record<Locale, string[]>;
  footerAddress: Record<Locale, string>;
  rating: number;
  reviewCount: number;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "thai-massage",
    slug: "thai-massage-da-nang",
    category: "massage",
    youtubeId: "dQw4w9WgXcQ",
    image: "/images/Gemini_Generated_Image_qwy0gvqwy0gvqwy0.png",
    price: "360.000đ - 560.000đ",
    priceValue: 360000,
    rating: 4.9,
    reviewCount: 120,
    seo: {
      title: {
        vi: "Massage Thái Cổ Truyền Đà Nẵng | Luma Spa",
        en: "Traditional Thai Massage Da Nang | Luma Spa",
        zh: "传统泰式按摩 岘港 | Luma Spa",
        ko: "전통 태국 마사지 다낭 | 루마 스파",
      },
      description: {
        vi: "Trải nghiệm liệu pháp ấn huyệt và kéo giãn đặc trưng của Thái Lan ngay tại Đà Nẵng.",
        en: "Experience authentic Thai pressure point therapy and stretching in Da Nang.",
        zh: "在岘港体验地道的泰式穴位压力疗法和拉伸。",
        ko: "다낭에서 정통 태국식 지압과 스트레칭을 경험해 보세요.",
      },
      keywords: {
        vi: ["massage thái đà nẵng", "thai massage da nang", "massage trị liệu xương khớp"],
        en: ["thai massage da nang", "traditional thai massage", "deep tissue massage"],
        zh: ["岘港按摩", "岘港泰式按摩", "岘港水疗"],
        ko: ["다낭 마사지", "다낭 태국 마사지", "다낭 스파"],
      },
    },
    name: {
      vi: "Massage Thái Cổ Truyền",
      en: "Traditional Thai Massage",
      zh: "传统泰式按摩",
      ko: "전통 태국 마사지",
    },
    description: {
      vi: "Trải nghiệm liệu pháp ấn huyệt và kéo giãn đặc trưng của Thái Lan ngay tại Đà Nẵng.",
      en: "Experience authentic Thai pressure point therapy and stretching in Da Nang.",
      zh: "在岘港体验地道的泰式穴位压力疗法和拉伸。",
      ko: "다낭에서 정통 태국식 지압과 스트레칭을 경험해 보세요.",
    },
    longDescription: {
      vi: "Tại Luma Spa Đà Nẵng, chúng tôi mang đến không gian tĩnh lặng giúp bạn tái tạo năng lượng hoàn hảo. Mỗi động tác ấn huyệt, miết cơ đều được thực hiện với sự tận tâm nhất.",
      en: "At Luma Spa Da Nang, we provide a tranquil space to perfectly regenerate your energy. Every acupressure and muscle stroke is performed with utmost dedication.",
      zh: "在岘港 Luma Spa，我们提供宁静的空间，助您完美重塑能量。每一次穴位按摩和肌肉推拿都倾注了我们的专业与用心。",
      ko: "루마 스파 다낭에서는 에너지를 완벽하게 재충전할 수 있는 고요한 공간을 제공합니다. 모든 지압과 근육 이완 동작은 정성을 다해 수행됩니다.",
    },
    whyChoose: { vi: "Tại sao nên chọn dịch vụ này?", en: "Why Choose This Service?", ko: "왜 이 서비스를 선택해야 할까요?", zh: "为什么选择这项服务？" },
    benefits: {
      vi: ["Giải phóng năng lượng", "Giảm đau xương khớp", "Cơ thể linh hoạt"],
      en: ["Release blockages", "Relieve joint pain", "Body flexibility"],
      ko: ["에너지 흐름 개선", "관절 통증 완화", "신체 유연성 회복"],
      zh: ["释放能量阻塞", "缓解关节疼痛", "恢复身体柔韧性"]
    },
    footerAddress: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam", ko: "베트남 다낭", zh: "越南岘港" }
  },
  {
    id: "hot-stone",
    slug: "hot-stone-massage-da-nang",
    category: "massage",
    youtubeId: "v7AYKz67YpY",
    image: "/images/Gemini_Generated_Image_qwy0gvqwy0gvqwy0.png",
    price: "450.000đ - 650.000đ",
    priceValue: 450000,
    rating: 4.8,
    reviewCount: 95,
    seo: {
      title: {
        vi: "Massage Đá Nóng Thư Giãn Đà Nẵng | Luma Spa",
        en: "Hot Stone Massage Da Nang | Luma Spa",
        zh: "热石按摩 岘港 | Luma Spa",
        ko: "핫스톤 마사지 다낭 | 루마 스파",
      },
      description: {
        vi: "Sự kết hợp hoàn hảo giữa nhiệt năng từ đá núi lửa và tinh dầu thảo mộc.",
        en: "A perfect blend of volcanic stone heat and herbal essential oils to detoxify.",
        zh: "火山石的热能与草本精油的完美结合，排毒排汗。",
        ko: "화산석의 열기와 허브 에센셜 오일의 완벽한 조화로 독소를 배출합니다.",
      },
      keywords: {
        vi: ["massage đá nóng đà nẵng", "hot stone massage da nang", "massage thư giãn"],
        en: ["hot stone massage da nang", "volcanic stone massage", "detox massage"],
        zh: ["岘港热石按摩", "岘港水疗", "排毒按摩"],
        ko: ["다낭 핫스톤 마사지", "다낭 스파", "다낭 마사지 잘하는곳"],
      },
    },
    name: {
      vi: "Massage Đá Nóng",
      en: "Hot Stone Massage",
      zh: "热石按摩",
      ko: "핫스톤 마사지",
    },
    description: {
      vi: "Sự kết hợp hoàn hảo giữa nhiệt năng từ đá núi lửa và tinh dầu thảo mộc.",
      en: "A perfect blend of volcanic stone heat and herbal essential oils to detoxify.",
      zh: "火山石的热能与草本精油的完美结合，排毒排汗。",
      ko: "화산석의 열기와 허브 에센셜 오일의 완벽한 조화로 독소를 배출합니다.",
    },
    longDescription: {
      vi: "Nhiệt năng từ đá núi lửa len lỏi vào các mô cơ, giúp sưởi ấm kinh lạc và đưa bạn vào trạng thái thư giãn sâu nhất tại Luma Spa.",
      en: "Heat from volcanic stones penetrates muscle tissues, warming meridians and bringing you into the deepest state of relaxation.",
      zh: "来自火山石的热能渗透进肌肉组织，温暖经络，带您进入最深层放松的状态。",
      ko: "화산석의 열기가 근육 조직 깊숙이 침투하여 경락을 따뜻하게 하고 깊은 휴식의 상태로 안내합니다.",
    },
    whyChoose: { vi: "Lợi ích của Đá Nóng?", en: "Benefits of Hot Stone?", ko: "핫스톤의 장점은?", zh: "热石按摩的好处？" },
    benefits: {
      vi: ["Thải độc cơ thể", "Sưởi ấm kinh lạc", "Thư giãn sâu"],
      en: ["Body detox", "Warm meridians", "Deep relaxation"],
      ko: ["독소 배출", "경락 온열", "심층 휴식"],
      zh: ["排毒养颜", "温暖经络", "深度放松"]
    },
    footerAddress: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam", ko: "베트남 다낭", zh: "越南岘港" }
  },
  {
    id: "ocean-abyss",
    slug: "ocean-abyss-scalp-therapy-da-nang",
    category: "hair",
    youtubeId: "dQw4w9WgXcQ",
    image: "/images/Gemini_Generated_Image_qwy0gvqwy0gvqwy0.png",
    price: "239.000đ - 339.000đ",
    priceValue: 239000,
    highlight: true,
    rating: 5.0,
    reviewCount: 210,
    seo: {
      title: {
        vi: "Gội Đầu Ocean Abyss Cao Cấp Đà Nẵng | Luma Spa",
        en: "Ocean Abyss Scalp Therapy Da Nang | Luma Spa",
        zh: "深海头皮疗法 岘港 | Luma Spa",
        ko: "오션 어비스 두피 테라피 다낭 | 루마 스파",
      },
      description: {
        vi: "Liệu trình đặc biệt kết hợp gội đầu dưỡng sinh với massage bấm huyệt chuyên sâu.",
        en: "A special treatment combining nutritional hair wash with intensive acupressure.",
        zh: "将养生洗发与深度穴位按摩及香薰疗法相结合的特色疗程。",
        ko: "영양 샴푸와 집중 지압 마사지, 아로마 테라피를 결합한 특별한 트리트먼트입니다.",
      },
      keywords: {
        vi: ["gội đầu ocean abyss đà nẵng", "gội đầu dưỡng sinh", "luma spa highlight"],
        en: ["ocean abyss scalp therapy", "premium scalp treatment", "luma spa signature"],
        zh: ["岘港深海头皮疗法", "岘港顶级水疗", "岘港头发护理"],
        ko: ["다낭 오션 어비스 두피 테라피", "다낭 프리미엄 스파", "루마 스파 시그니처"],
      },
    },
    name: {
      vi: "Gội Đầu Ocean Abyss",
      en: "Ocean Abyss Scalp Therapy",
      zh: "深海头皮疗法",
      ko: "오션 어비스 두피 테라피",
    },
    description: {
      vi: "Liệu trình đặc biệt kết hợp gội đầu dưỡng sinh với massage bấm huyệt chuyên sâu.",
      en: "A special treatment combining nutritional hair wash with intensive acupressure.",
      zh: "将养生洗发与深度穴位按摩及香薰疗法相结合的特色疗程。",
      ko: "영양 샴푸와 집중 지압 마사지, 아로마 테라피를 결합한 특별한 트리트먼트입니다.",
    },
    longDescription: {
      vi: "Liệu trình đặc biệt tại Luma Spa giúp tái tạo năng lượng từ sâu bên trong thông qua liệu pháp mùi hương và bấm huyệt vùng đầu.",
      en: "A special treatment at Luma Spa that regenerates energy from within through aromatherapy and scalp acupressure.",
      zh: "Luma Spa 的特色疗程，通过香薰疗法和头部分按，从内而外再生能量。",
      ko: "루마 스파만의 특별한 트리트먼트로, 아로마 테라피와 두피 지압을 통해 내면의 에너지를 재생시켜 드립니다.",
    },
    whyChoose: { vi: "Điểm đặc biệt của Luma?", en: "Why Luma Signature?", ko: "루마만의 특별함?", zh: "Luma 的特色之处？" },
    benefits: {
      vi: ["Tái tạo năng lượng", "Giảm căng thẳng", "Chăm sóc da đầu"],
      en: ["Energy regeneration", "Reduce stress", "Scalp care"],
      ko: ["에너지 재충전", "스트레스 해소", "두피 케어"],
      zh: ["能量再生", "减轻压力", "头皮护理"]
    },
    footerAddress: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam", ko: "베트남 다낭", zh: "越南岘港" }
  },
  {
    id: "neck-shoulder",
    slug: "neck-shoulder-massage-da-nang",
    category: "massage",
    youtubeId: "example_id_3",
    image: "/images/Gemini_Generated_Image_qwy0gvqwy0gvqwy0.png",
    price: "250.000đ - 400.000đ",
    priceValue: 250000,
    rating: 4.7,
    reviewCount: 156,
    seo: {
      title: {
        vi: "Massage Cổ Vai Gáy Trị Liệu Đà Nẵng | Luma Spa",
        en: "Neck & Shoulder Massage Da Nang | Luma Spa",
        zh: "颈肩按摩 岘港 | Luma Spa",
        ko: "목 & 어깨 마사지 다낭 | 루마 스파",
      },
      description: {
        vi: "Kỹ thuật miết cơ chuyên sâu giúp đánh tan các nút thắt cơ vùng vai gáy.",
        en: "Intensive muscle stroking techniques dissolve knots in the neck and shoulders.",
        zh: "深度肌肉按摩技术可消除颈肩部位的结节。",
        ko: "집중적인 근육 마사지 기술로 목과 어깨의 뭉친 근육을 풀어줍니다.",
      },
      keywords: {
        vi: ["massage cổ vai gáy đà nẵng", "trị liệu cổ vai gáy", "luma spa trị liệu"],
        en: ["neck and shoulder massage da nang", "office syndrome treatment"],
        zh: ["岘港颈肩按摩", "岘港水疗", "缓解颈部疼痛"],
        ko: ["다낭 목 어깨 마사지", "다낭 스파", "어깨 통증 완화"],
      },
    },
    name: {
      vi: "Massage Cổ Vai Gáy",
      en: "Neck & Shoulder Massage",
      zh: "颈肩按摩",
      ko: "목 & 어깨 마사지",
    },
    description: {
      vi: "Kỹ thuật miết cơ chuyên sâu giúp đánh tan các nút thắt cơ vùng vai gáy.",
      en: "Intensive muscle stroking techniques dissolve knots in the neck and shoulders.",
      zh: "深度肌肉按摩技术可消除颈肩部位的结节。",
      ko: "집중적인 근육 마사지 기술로 목과 어깨의 뭉친 근육을 풀어줍니다.",
    },
    longDescription: {
      vi: "Cứu cánh cho những cơn đau mỏi do ngồi máy tính lâu. Chúng tôi tập trung vào các điểm căng cứng để giải phóng áp lực tức thì cho vùng cổ vai gáy.",
      en: "A lifesaver for pains caused by long hours at the computer. We focus on tension points to provide instant pressure relief for the neck and shoulders.",
      zh: "长时间坐在电脑前的救星。我们专注于压力点，为您立刻缓解颈肩部压力。",
      ko: "장시간 컴퓨터 사용으로 인한 통증의 해결사입니다. 긴장된 부위에 집중하여 즉각적인 압박 해소 효과를 선사합니다.",
    },
    whyChoose: { vi: "Hiệu quả tức thì?", en: "Instant Relief?", ko: "즉각적인 효과?", zh: "效果立刻见效？" },
    benefits: {
      vi: ["Tan nút thắt cơ", "Giảm đau tức thì", "Cải thiện tư thế"],
      en: ["Dissolve knots", "Instant relief", "Improve posture"],
      ko: ["근육 뭉침 해제", "통증 즉각 완화", "자세 개선"],
      zh: ["消除肌肉结节", "立刻缓解疼痛", "改善体态"]
    },
    footerAddress: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam", ko: "베트남 다낭", zh: "越南岘港" }
  },
  {
    id: "foot-massage",
    slug: "foot-massage-da-nang",
    category: "massage",
    youtubeId: "example_id_5",
    image: "/images/Gemini_Generated_Image_qwy0gvqwy0gvqwy0.png",
    price: "200.000đ - 350.000đ",
    priceValue: 200000,
    rating: 4.8,
    reviewCount: 320,
    seo: {
      title: {
        vi: "Massage Chân Chuyên Sâu Đà Nẵng | Luma Spa",
        en: "Intensive Foot Massage Da Nang | Luma Spa",
        zh: "深度足底按摩 岘港 | Luma Spa",
        ko: "집중 발 마사지 다낭 | 루마 스파",
      },
      description: {
        vi: "Tập trung vào hệ thống phản xạ học tại lòng bàn chân để xua tan mệt mỏi.",
        en: "Focuses on the reflexology system in the soles to dispel fatigue.",
        zh: "专注于足底反射系统，驱散全身疲劳。",
        ko: "발바닥의 반사 체계에 집중하여 피로를 말끔히 씻어줍니다.",
      },
      keywords: {
        vi: ["massage chân đà nẵng", "foot massage da nang", "luma spa foot massage"],
        en: ["foot massage da nang", "reflexology massage", "foot spa da nang"],
        zh: ["岘港足底按摩", "岘港水疗", "足部反射疗法"],
        ko: ["다낭 발 마사지", "다낭 스파", "발 반사요법"],
      },
    },
    name: {
      vi: "Massage Chân Chuyên Sâu",
      en: "Intensive Foot Massage",
      zh: "深度足底按摩",
      ko: "집중 발 마사지",
    },
    description: {
      vi: "Tập trung vào hệ thống phản xạ học tại lòng bàn chân để xua tan mệt mỏi.",
      en: "Focuses on the reflexology system in the soles to dispel fatigue.",
      zh: "专注于足底反射系统，驱散全身疲劳。",
      ko: "발바닥 của 반사 체계에 집중하여 피로를 말끔히 씻어줍니다.",
    },
    longDescription: {
      vi: "Lý tưởng sau một ngày dài khám phá Đà Nẵng. Liệu pháp bấm huyệt lòng bàn chân giúp kích thích các cơ quan nội tạng và hồi phục đôi chân mệt mỏi.",
      en: "Ideal after a long day of exploring Da Nang. Foot reflexology helps stimulate internal organs and recover tired feet.",
      zh: "漫步岘港一整天后的理想选择。足底反射疗法有助于刺激内脏器官，恢复疲惫的双足。",
      ko: "다낭을 여행한 긴 하루 후에 이상적입니다. 발 반사요법은 내장 기관을 자극하고 지친 발의 회복을 돕습니다.",
    },
    whyChoose: { vi: "Tại sao cần Foot Massage?", en: "Why Foot Massage?", ko: "발 마사지가 필요한 이유?", zh: "为什么需要足部按摩？" },
    benefits: {
      vi: ["Giảm mỏi chân", "Kích thích nội tạng", "Ngủ ngon hơn"],
      en: ["Reduce leg fatigue", "Stimulate organs", "Better sleep"],
      ko: ["발 피로 해소", "장기 기능 자극", "숙면 유도"],
      zh: ["缓解腿部疲劳", "刺激内脏器官", "改善睡眠"]
    },
    footerAddress: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam", ko: "베트남 다낭", zh: "越南岘港" }
  },
  {
    id: "body-massage",
    slug: "body-massage-da-nang",
    category: "massage",
    youtubeId: "example_id_4",
    image: "/images/Gemini_Generated_Image_qwy0gvqwy0gvqwy0.png",
    price: "400.000đ - 600.000đ",
    priceValue: 400000,
    rating: 4.9,
    reviewCount: 245,
    seo: {
      title: {
        vi: "Massage Toàn Thân Luma Signature Đà Nẵng",
        en: "Luma Signature Body Massage Da Nang",
        zh: "Luma 特色全身按摩 岘港",
        ko: "루마 시그니처 전신 마사지 다낭",
      },
      description: {
        vi: "Sự hòa quyện giữa kỹ thuật Thụy Điển nhẹ nhàng và ấn huyệt phương Đông.",
        en: "A harmony of gentle Swedish techniques and Oriental acupressure.",
        zh: "揉合了温和的瑞典技术和东方穴位按摩。",
        ko: "부드러운 스웨디시 기법과 동양의 지압이 조화를 이룹니다.",
      },
      keywords: {
        vi: ["massage toàn thân đà nẵng", "body massage da nang", "luma spa signature"],
        en: ["full body massage da nang", "luma signature massage"],
        zh: ["岘港全身按摩", "岘港水疗", "Luma Spa 特色"],
        ko: ["다낭 전신 마사지", "다낭 스파", "루마 시그니처"],
      },
    },
    name: {
      vi: "Massage Toàn Thân Luma",
      en: "Luma Signature Body Massage",
      zh: "Luma 特色全身按摩",
      ko: "루마 시그니처 전신 마사지",
    },
    description: {
      vi: "Sự hòa quyện giữa kỹ thuật Thụy Điển nhẹ nhàng và ấn huyệt phương Đông.",
      en: "A harmony of gentle Swedish techniques and Oriental acupressure.",
      zh: "揉合了温和的瑞典技术和东方穴位按摩。",
      ko: "부드러운 스웨디시 기법과 동양의 지압이 조화를 이룹니다.",
    },
    longDescription: {
      vi: "Liệu trình signature giúp tái tạo năng lượng, làm mềm cơ và cải thiện giấc ngủ ngon thông qua sự kết hợp tinh tế giữa các trường phái massage.",
      en: "Our signature treatment regenerates energy, softens muscles, and improves sleep quality through a delicate combination of massage styles.",
      zh: "特色疗程有助于能量再生，柔化肌肉，并通过多种按摩风格的精妙结合改善睡眠质量。",
      ko: "다양한 마사지 기법의 정교한 조합을 통해 에너지를 재충전하고 근육을 부드럽게 하며 숙면을 돕는 시그니처 트리트먼트입니다.",
    },
    whyChoose: { vi: "Signature có gì?", en: "What's in Signature?", ko: "시그니처의 특징?", zh: "特色按摩包含什么？" },
    benefits: {
      vi: ["Tái tạo năng lượng", "Làm mềm cơ", "Ngủ ngon sâu"],
      en: ["Regenerate energy", "Soften muscles", "Deep sleep"],
      ko: ["에너지 재충전", "근육 이완", "숙면 유도"],
      zh: ["能量再生", "柔化肌肉", "深度睡眠"]
    },
    footerAddress: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam", ko: "베트남 다낭", zh: "越南岘港" }
  },
  {
    id: "herbal-hair-wash",
    slug: "herbal-hair-wash-da-nang",
    category: "hair",
    youtubeId: "example_id_6",
    image: "/images/Gemini_Generated_Image_qwy0gvqwy0gvqwy0.png",
    price: "150.000đ - 250.000đ",
    priceValue: 150000,
    rating: 4.8,
    reviewCount: 189,
    seo: {
      title: {
        vi: "Gội Đầu Thảo Dược Nam Bộ Đà Nẵng | Luma Spa",
        en: "Vietnamese Herbal Hair Wash Da Nang | Luma Spa",
        zh: "越南草本洗发 岘港 | Luma Spa",
        ko: "베트남식 한방 샴푸 다낭 | 루마 스파",
      },
      description: {
        vi: "Làm sạch tóc và thư giãn da đầu với hương thơm từ bồ kết, sả, chanh.",
        en: "Cleanse hair and relax the scalp with fragrances of lemongrass and herbs.",
        zh: "享受皂角、香茅、柠檬和名贵草本的芳香，清洁并放松头皮。",
        ko: "보켓, 레몬그라스, 레몬의 향기와 함께 두피를 세정하고 휴식을 선사합니다.",
      },
      keywords: {
        vi: ["gội đầu thảo dược đà nẵng", "gội đầu dưỡng sinh đà nẵng", "luma spa gội đầu"],
        en: ["herbal hair wash da nang", "scalp treatment da nang"],
        zh: ["岘港草本洗发", "岘港水疗", "养生洗发"],
        ko: ["다낭 허브 헤어 워시", "다낭 두피 마사지", "베트남 샴푸"],
      },
    },
    name: {
      vi: "Gội Đầu Thảo Dược Nam Bộ",
      en: "Vietnamese Herbal Hair Wash",
      zh: "越南草本洗发",
      ko: "베트남식 한방 샴푸",
    },
    description: {
      vi: "Làm sạch tóc và thư giãn da đầu với hương thơm từ bồ kết, sả, chanh.",
      en: "Cleanse hair and relax the scalp with fragrances of lemongrass and herbs.",
      zh: "享受皂角、香茅、柠檬和名贵草本的芳香，清洁并放松头皮。",
      ko: "보켓, 레몬그라스, 레몬의 향기와 함께 두피를 세정하고 휴식을 선사합니다.",
    },
    longDescription: {
      vi: "Không chỉ làm sạch tóc, chúng tôi sử dụng các loại thảo mộc tự nhiên giúp nuôi dưỡng mái tóc khỏe mạnh và giảm căng thẳng trí óc hoàn hảo.",
      en: "Beyond cleaning, we use natural herbs to nourish healthy hair and provide perfect mental stress relief.",
      zh: "不仅是清洁头发，我们还使用天然草本滋养秀发，并完美缓解精神压力。",
      ko: "단순한 세정을 넘어 천연 허브를 사용하여 건강한 모발을 가꾸어주고 정신적 스트레스를 말끔히 해소해 드립니다.",
    },
    whyChoose: { vi: "Thảo dược tự nhiên?", en: "Natural Herbs?", ko: "천연 허브의 힘?", zh: "天然草本护理？" },
    benefits: {
      vi: ["Sạch sâu da đầu", "Giảm stress trí óc", "Tóc chắc khỏe"],
      en: ["Deep scalp clean", "Reduce stress", "Strong hair"],
      ko: ["두피 딥클렌징", "스트레스 감소", "모발 강화"],
      zh: ["头皮深层清洁", "减轻压力", "强韧发质"]
    },
    footerAddress: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam", ko: "베트남 다낭", zh: "越南岘港" }
  },
  {
    id: "foot-neck-combo",
    slug: "foot-neck-shoulder-combo-da-nang",
    category: "combo",
    youtubeId: "example_id_8",
    image: "/images/Gemini_Generated_Image_qwy0gvqwy0gvqwy0.png",
    price: "450.000đ - 700.000đ",
    priceValue: 450000,
    rating: 4.9,
    reviewCount: 278,
    seo: {
      title: {
        vi: "Combo Massage Chân & Cổ Vai Gáy Đà Nẵng | Luma Spa",
        en: "Foot & Neck Shoulder Combo Da Nang | Luma Spa",
        zh: "足部与颈肩套装 岘港 | Luma Spa",
        ko: "발 & 목 어깨 콤보 다낭 | 루마 스파",
      },
      description: {
        vi: "Chăm sóc toàn diện các vùng chịu áp lực lớn nhất với mức giá tối ưu.",
        en: "Comprehensive care for high-pressure areas at an optimal price.",
        zh: "以最优价格为压力最大的部位提供全面呵护。",
        ko: "가장 압박이 심한 부위를 합리적인 가격으로 종합 관리해 드립니다.",
      },
      keywords: {
        vi: ["combo massage đà nẵng", "massage chân cổ vai gáy", "luma spa combo"],
        en: ["foot and neck shoulder combo da nang", "best value spa combo"],
        zh: ["岘港足部颈肩套装", "岘港水疗套餐", "按摩优惠"],
        ko: ["다낭 마사지 콤보", "발 목 어깨 마사지", "가성비 마사지"],
      },
    },
    name: {
      vi: "Combo Chân & Cổ Vai Gáy",
      en: "Foot & Neck Shoulder Combo",
      zh: "足部与颈肩套装",
      ko: "발 & 목 어깨 콤보",
    },
    description: {
      vi: "Chăm sóc toàn diện các vùng chịu áp lực lớn nhất với mức giá tối ưu.",
      en: "Comprehensive care for high-pressure areas at an optimal price.",
      zh: "以最优价格为压力最大的部位提供全面呵护。",
      ko: "가장 압박이 심한 부위를 합리적인 가격으로 종합 관리해 드립니다.",
    },
    longDescription: {
      vi: "Gói dịch vụ được yêu thích nhất cho những ai bận rộn, giúp cơ thể phục hồi nhanh chóng sau những chuyến đi dài tại Đà Nẵng.",
      en: "The most popular package for busy individuals, helping the body recover quickly after long trips in Da Nang.",
      zh: "最受忙碌人士欢迎的套餐，帮助身体在岘港长途旅行后快速恢复。",
      ko: "바쁜 분들에게 가장 인기 있는 패키지로, 다낭 여행 후 지친 몸을 빠르게 회복시켜 드립니다.",
    },
    whyChoose: { vi: "Tại sao chọn Combo?", en: "Why choose Combo?", ko: "콤보를 선택하는 이유?", zh: "为什么选择套餐？" },
    benefits: {
      vi: ["Phục hồi nhanh", "Tiết kiệm chi phí", "Chăm sóc toàn diện"],
      en: ["Fast recovery", "Cost saving", "Full care"],
      ko: ["빠른 회복", "비용 절감", "종합 케어"],
      zh: ["快速恢复", "节省费用", "全面护理"]
    },
    footerAddress: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam", ko: "베트남 다낭", zh: "越南岘港" }
  },
  {
    id: "facial-treatment",
    slug: "facial-treatment-da-nang",
    category: "facial",
    youtubeId: "example_id_9",
    image: "/images/Gemini_Generated_Image_qwy0gvqwy0gvqwy0.png",
    price: "300.000đ - 800.000đ",
    priceValue: 300000,
    rating: 4.8,
    reviewCount: 134,
    seo: {
      title: {
        vi: "Chăm Sóc Da Mặt Chuyên Sâu Đà Nẵng | Luma Spa",
        en: "Intensive Facial Treatment Da Nang | Luma Spa",
        zh: "面部深度护理 岘港 | Luma Spa",
        ko: "집중 페이셜 케어 다낭 | 루마 스파",
      },
      description: {
        vi: "Làn da được nuông chiều với liệu trình làm sạch sâu và đắp mặt nạ dưỡng chất.",
        en: "Pamper your skin with deep cleansing and nutrient-rich masks.",
        zh: "通过深度清洁和营养面膜宠爱您的肌肤，重现光彩。",
        ko: "딥 클렌징과 영양 마스크로 피부에 진정한 휴식을 선사합니다.",
      },
      keywords: {
        vi: ["chăm sóc da mặt đà nẵng", "facial treatment da nang", "luma spa facial"],
        en: ["facial treatment da nang", "professional skin care"],
        zh: ["岘港面部护理", "护肤", "美容护理"],
        ko: ["다낭 페이셜 케어", "피부관리", "미용 스파"],
      },
    },
    name: {
      vi: "Chăm Sóc Da Mặt Chuyên Sâu",
      en: "Intensive Facial Treatment",
      zh: "面部深度护理",
      ko: "집중 페이셜 케어",
    },
    description: {
      vi: "Làn da được nuông chiều với liệu trình làm sạch sâu và đắp mặt nạ dưỡng chất.",
      en: "Pamper your skin with deep cleansing and nutrient-rich masks.",
      zh: "通过深度清洁和营养面膜宠爱您的肌肤，重现光彩。",
      ko: "딥 클렌징과 영양 마스크로 피부에 진정한 휴식을 선사합니다.",
    },
    longDescription: {
      vi: "Liệu trình giúp mang lại vẻ ngoài rạng rỡ, tràn đầy sức sống thông qua kỹ thuật nâng cơ và cấp ẩm chuyên sâu cho mọi loại da.",
      en: "The treatment brings a radiant, vital look through lifting techniques and intensive hydration for all skin types.",
      zh: "通过对各类肌肤的提拉技术和深度补水，让您重现光彩照人、充满活力的面容。",
      ko: "리프팅 기법과 집중 보습을 통해 모든 피부 타입에 생기와 광채를 되찾아 드립니다.",
    },
    whyChoose: { vi: "Hiệu quả cho da?", en: "Skin results?", ko: "피부 개선 효과?", zh: "护肤效果？" },
    benefits: {
      vi: ["Sáng da rạng rỡ", "Cấp ẩm chuyên sâu", "Nâng cơ mặt"],
      en: ["Radiant skin", "Intensive hydration", "Facial lifting"],
      ko: ["피부 광채", "집중 보습", "페이셜 리프팅"],
      zh: ["提亮肤色", "深度补水", "面部提拉"]
    },
    footerAddress: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam", ko: "베트남 다낭", zh: "越南岘港" }
  },
];