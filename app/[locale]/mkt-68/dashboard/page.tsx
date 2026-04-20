"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { 
  Trash2, 
  Upload, 
  ImageIcon, 
  FileText, 
  LayoutDashboard, 
  LogOut 
} from "lucide-react";
import Cookies from "js-cookie";

type TabType = "banners" | "menus";

// Đã cập nhật thông số Cloudinary của bạn
const CLOUD_NAME = "dd1vk7hhg"; 
const UPLOAD_PRESET = "Lumaspa";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("banners");
  const [banners, setBanners] = useState<string[]>([]);
  const [menus, setMenus] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false); // Trạng thái chờ khi upload
  const router = useRouter();
  const { locale } = useParams();

  // Load dữ liệu từ localStorage (Lưu danh sách link online)
useEffect(() => {
  const fetchInitialData = async () => {
    const bannerRes = await fetch("/api/settings?key=luma_banners");
    const menuRes = await fetch("/api/settings?key=luma_service_menus");
    
    if (bannerRes.ok) setBanners(await bannerRes.json());
    if (menuRes.ok) setMenus(await menuRes.json());
  };
  fetchInitialData();
}, []);

  // --- LOGIC UPLOAD LÊN CLOUDINARY ---
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: TabType) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const uploadPromises = Array.from(files).map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          { method: "POST", body: formData }
        );
        const data = await res.json();
        return data.secure_url; 
      } catch (error) {
        console.error("Lỗi upload:", error);
        return null;
      }
    });

    const uploadedUrls = (await Promise.all(uploadPromises)).filter((url): url is string => url !== null);

    if (uploadedUrls.length > 0) {
      if (type === "banners") {
        const newList = [...banners, ...uploadedUrls];
        saveData("luma_banners", newList, setBanners);
      } else {
        const newList = [...menus, ...uploadedUrls];
        saveData("luma_service_menus", newList, setMenus);
      }
    }
    setIsUploading(false);
    e.target.value = ""; // Reset input file
  };

const saveData = async (key: string, data: string[], setter: (val: string[]) => void) => {
  setter(data);
  try {
    await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, data }),
    });
  } catch (error) {
    console.error("Lỗi server:", error);
  }
};

  const removeItem = (index: number, type: TabType) => {
    const currentList = type === "banners" ? banners : menus;
    const newList = currentList.filter((_, i) => i !== index);
    if (type === "banners") saveData("luma_banners", newList, setBanners);
    else saveData("luma_service_menus", newList, setMenus);
  };

  const handleLogout = () => {
    Cookies.remove("admin_token", { path: '/' });
    router.push(`/${locale}/mkt-@68/login`);
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-8 flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
          <div className="flex items-center gap-4">
            <div className="bg-[#4a5d45] p-3 rounded-xl shadow-lg shadow-[#4a5d45]/20">
              <LayoutDashboard className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#4a5d45]">Luma Admin</h1>
              <p className="text-stone-400 text-xs uppercase tracking-widest">Management System</p>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 hover:bg-red-50 px-4 py-2 rounded-xl transition-all font-bold text-sm border border-transparent hover:border-red-100"
          >
            <LogOut size={18} /> ĐĂNG XUẤT
          </button>
        </header>

        {/* TAB NAVBAR */}
        <div className="flex border-b border-stone-200 mb-8 gap-10 px-2">
          <button
            onClick={() => setActiveTab("banners")}
            className={`pb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-all ${
              activeTab === "banners" 
              ? "border-b-2 border-[#4a5d45] text-[#4a5d45]" 
              : "text-stone-400 hover:text-stone-600"
            }`}
          >
            <ImageIcon size={16} /> Banners
          </button>
          <button
            onClick={() => setActiveTab("menus")}
            className={`pb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-all ${
              activeTab === "menus" 
              ? "border-b-2 border-[#4a5d45] text-[#4a5d45]" 
              : "text-stone-400 hover:text-stone-600"
            }`}
          >
            <FileText size={16} /> Service Menus
          </button>
        </div>

        {/* NỘI DUNG */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-8 min-h-[400px]">
          {/* Section: Upload */}
          <div className="mb-10 text-center">
            <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-stone-200 rounded-2xl cursor-pointer bg-stone-50/50 hover:bg-stone-50 transition-all hover:border-[#dcc296] ${isUploading ? "opacity-50 cursor-not-allowed" : ""}`}>
              <div className="flex flex-col items-center justify-center">
                <Upload className={`${isUploading ? "animate-bounce" : ""} text-stone-400 mb-2`} size={24} />
                <p className="text-sm text-stone-500 font-bold uppercase">
                  {isUploading ? "ĐANG TẢI LÊN..." : `TẢI ${activeTab === "banners" ? "BANNER" : "MENU"} MỚI`}
                </p>
              </div>
              <input 
                type="file" 
                className="hidden" 
                accept="image/*" 
                multiple 
                disabled={isUploading}
                onChange={(e) => handleUpload(e, activeTab)} 
              />
            </label>
          </div>

          {/* Section: Preview List */}
          <div className={`grid gap-6 ${activeTab === "banners" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`}>
            {(activeTab === "banners" ? banners : menus).map((url, index) => (
              <div 
                key={index} 
                className={`group relative rounded-xl overflow-hidden border border-stone-100 shadow-sm transition-all hover:shadow-lg 
                ${activeTab === "banners" ? "aspect-video" : "aspect-[3/4]"}`}
              >
                <img 
                  src={url} 
                  alt="preview" 
                  className={`w-full h-full ${activeTab === "banners" ? "object-cover" : "object-contain bg-stone-50"}`} 
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button
                    onClick={() => removeItem(index, activeTab)}
                    className="bg-red-500 text-white p-3 rounded-full hover:scale-110 transition shadow-xl"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {(activeTab === "banners" ? banners : menus).length === 0 && !isUploading && (
            <div className="text-center py-20 text-stone-300 italic">
              Không có dữ liệu hiển thị.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}