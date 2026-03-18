"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo logic: Trong thực tế bạn nên gọi API và lưu Token vào Cookie
    if (password === "admin123") {
      document.cookie = "admin_token=true; path=/";
      router.push("/mkt-@68/dashboard");
    } else {
      alert("Sai mật khẩu!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h1 className="text-2xl font-serif font-bold text-amber-800 mb-6 text-center text-stone-800">LUMA ADMIN</h1>
        <input
          type="password"
          placeholder="Mật khẩu quản trị"
          className="w-full p-3 border rounded-lg mb-4 outline-none focus:border-amber-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-stone-900 text-white py-3 rounded-lg hover:bg-amber-700 transition-all">
          ĐĂNG NHẬP
        </button>
      </form>
    </div>
  );
}