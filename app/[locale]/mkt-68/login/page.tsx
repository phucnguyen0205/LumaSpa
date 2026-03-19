"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Cookies from "js-cookie"; // Nên dùng thư viện này để quản lý cookie dễ hơn

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { locale } = useParams(); // Lấy 'vi', 'en', v.v. từ URL

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      // 1. Lưu token
      Cookies.set("admin_token", "true", { expires: 1, path: '/' });
      
      router.push(`/${locale}/mkt-68/dashboard`);
      
      // 3. Refresh để middleware xác nhận quyền truy cập ngay
      setTimeout(() => router.refresh(), 100);
    } else {
      alert("Sai mật khẩu!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5f0]">
      <form onSubmit={handleLogin} className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm border border-stone-200">
        <h1 className="text-3xl font-serif font-bold text-[#4a5d45] mb-8 text-center uppercase tracking-widest">
          LUMA ADMIN
        </h1>
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Mật khẩu quản trị"
            className="w-full p-4 border border-stone-300 rounded-xl outline-none focus:border-[#dcc296] focus:ring-1 focus:ring-[#dcc296] transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <button className="w-full bg-[#4a5d45] text-white py-4 rounded-xl font-bold hover:bg-[#3d4d38] transition-all shadow-lg active:scale-95">
            ĐĂNG NHẬP
          </button>
        </div>
        <p className="text-center text-stone-400 text-xs mt-6 italic">
          Hệ thống quản trị nội dung độc quyền Luma Spa
        </p>
      </form>
    </div>
  );
}