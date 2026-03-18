"use client";
import { useState, useEffect } from "react";
import { Trash2, Upload, ImageIcon } from "lucide-react";

export default function BannerAdmin() {
  const [banners, setBanners] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("luma_banners");
    if (saved) setBanners(JSON.parse(saved));
  }, []);

  const saveToStorage = (list: string[]) => {
    setBanners(list);
    localStorage.setItem("luma_banners", JSON.stringify(list));
    window.dispatchEvent(new Event("storage"));
  };

  // Hàm xử lý khi chọn file từ máy tính
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Thêm ảnh mới vào danh sách hiện tại
        const newList = [...banners, base64String];
        saveToStorage(newList);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeBanner = (index: number) => {
    const newList = banners.filter((_, i) => i !== index);
    saveToStorage(newList);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-sm border border-stone-200">
      <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-2">
        <ImageIcon className="text-amber-600" /> Quản lý Hero Banners
      </h2>

      {/* Khu vực tải ảnh */}
      <div className="mb-8">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-stone-300 rounded-lg cursor-pointer bg-stone-50 hover:bg-stone-100 transition">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="text-stone-400 mb-2" size={30} />
            <p className="text-sm text-stone-500">
              <span className="font-semibold">Nhấp để tải ảnh lên</span> hoặc kéo thả vào đây
            </p>
            <p className="text-xs text-stone-400">PNG, JPG hoặc JPEG (Nên dùng ảnh 1920x1080)</p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept="image/*" 
            multiple 
            onChange={handleFileUpload} 
          />
        </label>
      </div>

      {/* Danh sách banner hiện có */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {banners.map((url, index) => (
          <div key={index} className="group relative aspect-video bg-stone-200 rounded-lg overflow-hidden border">
            <img src={url} alt="preview" className="object-cover w-full h-full" />
            
            {/* Nút xóa hiện khi hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <button
                onClick={() => removeBanner(index)}
                className="bg-red-500 text-white p-2 rounded-full hover:scale-110 transition"
                title="Xóa banner"
              >
                <Trash2 size={20} />
              </button>
            </div>
            <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded">
              Banner #{index + 1}
            </div>
          </div>
        ))}
      </div>

      {banners.length === 0 && (
        <div className="text-center py-10 text-stone-400 border rounded-lg">
          Chưa có banner nào được tải lên.
        </div>
      )}
    </div>
  );
}