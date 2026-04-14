export interface Post {
  slug: string;
  locale: string;
  title: string;
  description: string;
  image: string;
  date: string;
  content: string;
}

export const posts: Post[] = [
  // ==========================================
  // 1. TIẾNG VIỆT (VI)
  // ==========================================
  {
    slug: 'massage-toan-than-mang-lai-loi-ich-gi',
    locale: 'vi',
    title: 'Massage Toàn Thân Tại Luma Spa Đà Nẵng – Giải Pháp "Vàng" Cho Đau Cổ Vai Gáy Và Đau Chân',
    description: 'Bạn bị đau cổ vai gáy hay mỏi chân sau ngày dài tại Đà Nẵng? Khám phá liệu trình massage toàn thân chuyên sâu tại Luma Spa để phục hồi năng lượng ngay tức thì.',
    image: '/images/blog/massage-body-luma.jpg',
    date: '15/04/2026',
    content: `
    <div class="space-y-8 text-stone-700 leading-relaxed font-serif">
      <p class="text-xl italic text-stone-500 border-l-4 border-amber-600 pl-4 py-2">
        Bạn có đang cảm thấy vùng cổ cứng đờ sau 8 tiếng ngồi văn phòng, hay đôi chân mỏi nhừ sau một ngày dài dạo quanh những cây cầu xinh đẹp của Đà Nẵng? 
      </p>

      <div class="bg-amber-50 p-6 rounded-2xl border border-amber-100 my-8 font-medium">
          Nếu bạn đang tìm kiếm một địa chỉ <strong>spa Đà Nẵng uy tín</strong> để phục hồi năng lượng, <strong>Luma Spa Danang (190 Nguyễn Công Trứ)</strong> chính là điểm đến lý tưởng.
      </div>

      <h2 class="text-2xl font-bold text-stone-800 flex items-center gap-2 uppercase tracking-wide">
        <span class="text-amber-600">01.</span> Massage toàn thân mang lại lợi ích gì?
      </h2>
      <p>Massage body không chỉ là một liệu pháp xa xỉ, mà là cách khoa học nhất để chăm sóc hệ cơ xương khớp và tinh thần:</p>
      <ul class="list-none space-y-3 pl-0">
        <li class="flex items-start gap-2"> <span class="text-amber-600">✔</span> <strong>Giảm stress:</strong> Xoa dịu hệ thần kinh bằng tinh dầu cao cấp.</li>
        <li class="flex items-start gap-2"> <span class="text-amber-600">✔</span> <strong>Cải thiện lưu thông máu:</strong> Thúc đẩy tuần hoàn máu, giúp da dẻ hồng hào.</li>
        <li class="flex items-start gap-2"> <span class="text-amber-600">✔</span> <strong>Ngủ ngon:</strong> Một cơ thể không đau nhức là tiền đề cho giấc ngủ sâu.</li>
      </ul>

      <div class="my-10">
        <img src="/images/blog/massage-covaigay.jpg" alt="Massage cổ vai gáy tại Luma Spa" class="rounded-3xl shadow-lg w-full object-cover" />
      </div>

      <h2 class="text-2xl font-bold text-stone-800 flex items-center gap-2 uppercase tracking-wide">
        <span class="text-amber-600">02.</span> Giải pháp giảm đau cổ vai gáy chuyên sâu
      </h2>
      <p>Đau cổ vai gáy thường do tư thế ngồi không chuẩn gây bó cơ. Tại Luma Spa, chúng tôi áp dụng quy trình 3 tác động:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        <div class="p-6 bg-stone-50 rounded-2xl border-t-4 border-amber-700 shadow-sm transition hover:shadow-md">
          <div class="text-2xl mb-3">🌿</div>
          <h4 class="font-bold text-stone-800 mb-2">Ấn huyệt</h4>
          <p class="text-sm text-stone-500">Giải phóng các nút thắt cơ (trigger points) vùng vai.</p>
        </div>
        <div class="p-6 bg-stone-50 rounded-2xl border-t-4 border-amber-700 shadow-sm transition hover:shadow-md">
          <div class="text-2xl mb-3">🔥</div>
          <h4 class="font-bold text-stone-800 mb-2">Thảo dược</h4>
          <p class="text-sm text-stone-500">Chườm thảo dược ấm giúp mềm cơ và thư giãn mạch máu.</p>
        </div>
        <div class="p-6 bg-stone-50 rounded-2xl border-t-4 border-amber-700 shadow-sm transition hover:shadow-md">
          <div class="text-2xl mb-3">🧠</div>
          <h4 class="font-bold text-stone-800 mb-2">Lưu thông</h4>
          <p class="text-sm text-stone-500">Tăng cường oxy lên não, giảm đau đầu và chóng mặt.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-stone-800 flex items-center gap-2 uppercase tracking-wide">
        <span class="text-amber-600">03.</span> Massage chân – “Cứu cánh” đôi chân mệt mỏi
      </h2>
      <p>Đôi chân là "trái tim thứ hai". Liệu pháp tại Luma Spa tập trung kích thích các huyệt đạo tạng phủ.</p>

      <div class="my-10">
        <img src="/images/blog/foot-massage.jpg" alt="Massage chân tại Luma Spa Đà Nẵng" class="rounded-3xl shadow-lg w-full object-cover" />
      </div>

      <div class="mt-16 p-8 bg-stone-900 text-stone-100 rounded-[2rem] text-center shadow-xl">
        <h3 class="text-2xl font-bold mb-4 text-amber-500 uppercase tracking-widest text-white">Đừng để cơn đau làm phiền bạn!</h3>
        <p class="font-bold text-xl text-white mb-2 underline decoration-amber-500">HOTLINE: 0783.237.168</p>
        <p class="text-sm opacity-70 italic text-white">Địa chỉ: 190 Nguyễn Công Trứ, Quận Sơn Trà, Đà Nẵng</p>
      </div>
    </div>
    `
  },

  // ==========================================
  // 2. TIẾNG ANH (EN)
  // ==========================================
  {
    slug: 'benefits-of-full-body-massage-da-nang',
    locale: 'en',
    title: 'Full Body Massage at Luma Spa Da Nang – The "Golden" Solution for Neck, Shoulder & Foot Pain',
    description: 'Feeling stiff after office hours or tired after exploring Da Nang? Discover our therapeutic full body massage to restore your energy instantly.',
    image: '/images/blog/massage-body-luma.jpg',
    date: 'April 15, 2026',
    content: `
      <div class="space-y-8 text-stone-700 leading-relaxed font-serif">
        <p class="text-xl italic text-stone-500 border-l-4 border-amber-600 pl-4 py-2">
          Do you feel your neck stiffening after 8 hours at the office, or your feet aching after a long day in Da Nang?
        </p>

        <h2 class="text-2xl font-bold text-stone-800 flex items-center gap-2 uppercase tracking-wide">
          <span class="text-amber-600">01.</span> Benefits of Full Body Massage
        </h2>
        <ul class="list-none space-y-3 pl-0">
          <li class="flex items-start gap-2"> <span class="text-amber-600">✔</span> <strong>Stress Relief:</strong> Calms the nervous system with essential oils.</li>
          <li class="flex items-start gap-2"> <span class="text-amber-600">✔</span> <strong>Blood Flow:</strong> Improved circulation for a healthy glow.</li>
        </ul>

        <div class="my-10">
          <img src="/images/blog/massage-covaigay.jpg" alt="Neck and Shoulder Massage at Luma Spa" class="rounded-3xl shadow-lg w-full object-cover" />
        </div>

        <h2 class="text-2xl font-bold text-stone-800 uppercase tracking-wide">
          <span class="text-amber-600">02.</span> Intensive Neck & Shoulder Relief
        </h2>
        <p>Our therapists apply a specialized 3-step process to treat chronic neck and shoulder tension:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 text-center">
          <div class="p-6 bg-stone-50 rounded-2xl border-t-4 border-amber-700">
            <div class="text-2xl mb-2">🌿</div>
            <h4 class="font-bold text-stone-800 uppercase text-xs">Acupressure</h4>
            <p class="text-[11px] text-stone-500 mt-2 italic">Releasing trigger points in the shoulder area.</p>
          </div>
          <div class="p-6 bg-stone-50 rounded-2xl border-t-4 border-amber-700">
            <div class="text-2xl mb-2">🔥</div>
            <h4 class="font-bold text-stone-800 uppercase text-xs">Herbal Heat</h4>
            <p class="text-[11px] text-stone-500 mt-2 italic">Warm compresses to soften stiff muscles.</p>
          </div>
          <div class="p-6 bg-stone-50 rounded-2xl border-t-4 border-amber-700">
            <div class="text-2xl mb-2">🧠</div>
            <h4 class="font-bold text-stone-800 uppercase text-xs">Circulation</h4>
            <p class="text-[11px] text-stone-500 mt-2 italic">Boosting oxygen to the brain, reducing headaches.</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-stone-800 uppercase tracking-wide">
          <span class="text-amber-600">03.</span> Foot Massage – A "Lifesaver"
        </h2>
        <div class="my-10">
          <img src="/images/blog/foot-massage.jpg" alt="Foot Massage at Luma Spa Da Nang" class="rounded-3xl shadow-lg w-full object-cover" />
        </div>

        <div class="mt-16 p-8 bg-stone-900 text-stone-100 rounded-[2rem] text-center shadow-xl">
          <h3 class="text-2xl font-bold mb-4 text-amber-500 uppercase tracking-widest text-white text-white">Book Your Session Today!</h3>
          <p class="font-bold text-xl text-white mb-2 underline decoration-amber-500">HOTLINE: 0783.237.168</p>
          <p class="text-sm opacity-70 italic text-sm text-white text-white">190 Nguyen Cong Tru, Son Tra District, Da Nang</p>
        </div>
      </div>
    `
  },

  // ==========================================
  // 3. TIẾNG HÀN (KO)
  // ==========================================
  {
    slug: 'benefits-of-full-body-massage-da-nang',
    locale: 'ko',
    title: '다낭 루마 스파 전신 마사지 – 목, 어깨 및 발 통증을 위한 "골든" 솔루션',
    description: '사무실에서 8시간 근무 후 목이 뻣뻣해지거나 다낭을 여행한 후 피곤하신가요? 루마 스파의 전신 마사지를 경험해보세요.',
    image: '/images/blog/massage-body-luma.jpg',
    date: '2026년 4월 15일',
    content: `
      <div class="space-y-8 text-stone-700 leading-relaxed font-serif">
        <p class="text-xl italic text-stone-500 border-l-4 border-amber-600 pl-4 py-2">
          사무실에서 8시간 근무 후 목이 뻣뻣해지거나, 다낭 여행 후 발이 아프신가요?
        </p>

        <h2 class="text-2xl font-bold text-stone-800 flex items-center gap-2 uppercase tracking-wide">
          <span class="text-amber-600">01.</span> 전신 마사지의 이점
        </h2>
        <ul class="list-none space-y-3 pl-0">
          <li class="flex items-start gap-2"> <span class="text-amber-600">✔</span> <strong>스트레스 해소:</strong> 신경계를 안정시킵니다.</li>
          <li class="flex items-start gap-2"> <span class="text-amber-600">✔</span> <strong>숙면:</strong> 깊은 수면의 열쇠입니다.</li>
        </ul>

        <div class="my-10">
          <img src="/images/blog/massage-covaigay.jpg" alt="다낭 루마 스파 목 어깨 마사지" class="rounded-3xl shadow-lg w-full object-cover" />
        </div>

        <h2 class="text-2xl font-bold text-stone-800 uppercase tracking-wide">
          <span class="text-amber-600">02.</span> 집중적인 목 및 어깨 통증 완화
        </h2>
        <p>루마 스파에서는 다음과 같은 3단계 과정을 통해 만성적인 목과 어깨의 긴장을 치료합니다:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 text-center">
          <div class="p-6 bg-stone-50 rounded-2xl border-t-4 border-amber-700">
            <div class="text-2xl mb-2">🌿</div>
            <h4 class="font-bold text-stone-800 uppercase text-[10px]">지압 기술</h4>
            <p class="text-[10px] text-stone-500 mt-2 italic">어깨 부위의 뭉친 근육을 풀어줍니다.</p>
          </div>
          <div class="p-6 bg-stone-50 rounded-2xl border-t-4 border-amber-700">
            <div class="text-2xl mb-2">🔥</div>
            <h4 class="font-bold text-stone-800 uppercase text-[10px]">허브 찜질</h4>
            <p class="text-[10px] text-stone-500 mt-2 italic">뻣뻣한 근육을 부드럽게 만듭니다.</p>
          </div>
          <div class="p-6 bg-stone-50 rounded-2xl border-t-4 border-amber-700">
            <div class="text-2xl mb-2">🧠</div>
            <h4 class="font-bold text-stone-800 uppercase text-[10px]">혈액 순환</h4>
            <p class="text-[10px] text-stone-500 mt-2 italic">뇌로 가는 산소를 증가시켜 두통을 줄입니다.</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-stone-800 uppercase tracking-wide">
          <span class="text-amber-600">03.</span> 발 마사지 – 피로한 발의 "구세주"
        </h2>
        <div class="my-10">
          <img src="/images/blog/foot-massage.jpg" alt="다낭 루마 스파 발 마사지" class="rounded-3xl shadow-lg w-full object-cover" />
        </div>

        <div class="mt-16 p-8 bg-stone-900 text-stone-100 rounded-[2rem] text-center shadow-xl">
          <h3 class="text-2xl font-bold mb-4 text-amber-500 uppercase tracking-widest text-white text-white">오늘 바로 예약하세요!</h3>
          <p class="font-bold text-xl text-white mb-2 underline decoration-amber-500 text-white">핫라인: 0783.237.168</p>
          <p class="text-sm opacity-70 italic text-sm text-white text-white">190 Nguyen Cong Tru, Son Tra District, Da Nang</p>
        </div>
      </div>
    `
  }
];

export async function getPost(slug: string, locale: string) {
  return posts.find((p) => p.slug === slug && p.locale === locale);
}