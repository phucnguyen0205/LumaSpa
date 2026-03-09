"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    // KHÔNG đếm nếu đường dẫn bắt đầu bằng /admin
    if (pathname.includes('/admin')) return;

    try {
      const rawData = localStorage.getItem("luma_analytics") || "{}";
      const stats = JSON.parse(rawData);
      
      // Tăng số lượt xem cho route hiện tại
      stats[pathname] = (stats[pathname] || 0) + 1;
      
      localStorage.setItem("luma_analytics", JSON.stringify(stats));
    } catch (e) {
      console.error("Lỗi ghi log analytics:", e);
    }
  }, [pathname]);

  return null;
}