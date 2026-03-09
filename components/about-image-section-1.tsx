"use client";
import React, { useRef, useState, useEffect } from 'react';

export default function AboutImageSection({ imageUrl }: { imageUrl: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Kiểm tra nếu section đang nằm trong tầm mắt
      if (rect.top < windowHeight && rect.bottom > 0) {
        /**
         * TÍNH TOÁN VỊ TRÍ (REVEAL EFFECT):
         * 1. Xác định tỷ lệ phần trăm section đã đi qua màn hình (0 đến 1).
         * 2. Nhân với một con số (ví dụ -15 đến -20) để ảnh trượt từ dưới lên trên.
         */
        const distanceFromTop = windowHeight - rect.top;
        const totalDistance = windowHeight + rect.height;
        const scrollPercent = distanceFromTop / totalDistance;
        
        // Di chuyển ảnh khoảng 20% chiều cao của chính nó để lộ thêm chi tiết
        const moveRange = 40; 
        const yPos = (scrollPercent * moveRange) - (moveRange / 2);
        
        setOffset(yPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chạy ngay khi load để định vị ảnh

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Giữ nguyên kích thước khung h-[60vh] md:h-[65vh] của bạn */}
      <div className="relative h-[60vh] md:h-[65vh] w-full overflow-hidden">
        
        {/* PHẦN QUAN TRỌNG: 
            - Bỏ hoàn toàn 'bg-fixed'.
            - h-[140%]: Ảnh cao hơn khung 40% để có phần dư thừa nhằm "hiển thị thêm" khi trôi.
            - scale-110: Tránh lộ viền trắng khi ảnh di chuyển mạnh.
        */}
        <div
          className="absolute left-0 w-full h-[140%] -top-[20%] bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            // Di chuyển ảnh theo % để tạo hiệu ứng reveal mượt mà
            transform: `translateY(${offset}%)`, 
            filter: 'brightness(1)', // Ảnh rõ nét, không mờ, không tối
          }}
        />

        {/* Nội dung đè lên (nếu có) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Nội dung trang trí tối giản không làm mờ */}
        </div>
      </div>
    </section>
  );
}