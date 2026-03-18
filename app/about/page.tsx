import Header from "@/components/layout/header/page";
import Footer from "@/components/layout/footer/page";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#2b2b2b]">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2f241f] via-[#4a382f] to-[#7a5a47] text-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
            <div className="max-w-3xl">
              <p className="mb-4 tracking-[0.35em] text-sm uppercase text-[#e7b56a]">
                Luma Spa • Foot & Body Care
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Không chỉ là thư giãn,
                <span className="block text-[#f2c27b]">
                  mà là hành trình phục hồi năng lượng
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                Luma Spa mang đến trải nghiệm chăm sóc Foot & Body theo phong cách
                ấm áp, tinh tế và chuyên nghiệp. Chúng tôi tin rằng một cơ thể thư
                giãn là nền tảng của một tinh thần cân bằng.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-full bg-[#e7b56a] px-6 py-3 text-sm font-semibold text-[#2f241f] transition hover:scale-[1.02]"
                >
                  Xem dịch vụ
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b07a3f]">
                Về chúng tôi
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Một không gian chăm sóc cơ thể nhẹ nhàng và tinh tế
              </h2>
              <p className="mt-6 text-base leading-8 text-[#5c5c5c]">
                Tại Luma Spa, chúng tôi tập trung vào trải nghiệm thư giãn toàn diện
                với các liệu trình foot massage, body massage, chăm sóc cơ thể và
                phục hồi năng lượng. Mỗi liệu trình đều được xây dựng để giúp khách
                hàng giảm căng thẳng, cải thiện tuần hoàn và tái tạo sự cân bằng.
              </p>
              <p className="mt-4 text-base leading-8 text-[#5c5c5c]">
                Không gian spa được thiết kế ấm cúng, mùi hương dễ chịu, đội ngũ kỹ
                thuật viên tận tâm và quy trình phục vụ chuyên nghiệp nhằm mang đến
                cảm giác thư thái ngay từ lần đầu trải nghiệm.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[32px] bg-[#d8b38a]" />
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
                alt="Luma Spa"
                className="relative h-[420px] w-full rounded-[32px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b07a3f]">
                Điểm nổi bật
              </p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                Vì sao khách hàng chọn Luma Spa
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[28px] bg-[#f8f5f0] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 text-3xl">🌿</div>
                <h4 className="text-xl font-semibold">Liệu trình thư giãn chuyên sâu</h4>
                <p className="mt-3 leading-7 text-[#666]">
                  Kết hợp kỹ thuật massage bài bản với trải nghiệm nhẹ nhàng, phù hợp
                  cho khách hàng cần phục hồi sau ngày dài làm việc.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#f8f5f0] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 text-3xl">✨</div>
                <h4 className="text-xl font-semibold">Không gian tinh tế, sạch sẽ</h4>
                <p className="mt-3 leading-7 text-[#666]">
                  Thiết kế ấm áp, ánh sáng dịu, mùi hương dễ chịu và tiêu chuẩn vệ sinh
                  được chú trọng trong từng chi tiết.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#f8f5f0] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 text-3xl">💆</div>
                <h4 className="text-xl font-semibold">Đội ngũ tận tâm</h4>
                <p className="mt-3 leading-7 text-[#666]">
                  Kỹ thuật viên được đào tạo kỹ năng chăm sóc khách hàng và thao tác
                  chuyên nghiệp để mang lại cảm giác an tâm khi trải nghiệm.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[36px] bg-[#2f241f] px-8 py-12 text-center text-white md:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f2c27b]">
              Trải nghiệm cùng Luma Spa
            </p>
            <h3 className="mt-4 text-3xl font-bold md:text-5xl">
              Chăm sóc cơ thể, nuôi dưỡng sự thư thái
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80">
              Đặt lịch ngay hôm nay để tận hưởng không gian thư giãn và các liệu trình
              chăm sóc chuyên nghiệp dành riêng cho bạn.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-[#e7b56a] px-7 py-3 text-sm font-semibold text-[#2f241f] transition hover:scale-[1.03]"
              >
                Đặt lịch tư vấn
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}