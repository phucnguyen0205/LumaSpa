import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Setting } from "@/app/models/Setting";

// API Lấy dữ liệu (Dùng cho cả Admin và Trang chủ)
export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (key) {
      const setting = await Setting.findOne({ key });
      return NextResponse.json(setting?.data || []);
    }

    const allSettings = await Setting.find({});
    return NextResponse.json(allSettings);
  } catch (error) {
    return NextResponse.json({ error: "Lỗi khi lấy dữ liệu" }, { status: 500 });
  }
}

// API Lưu dữ liệu (Dùng cho Admin)
export async function POST(request: Request) {
  try {
    await connectDB();
    const { key, data } = await request.json();

    const updatedSetting = await Setting.findOneAndUpdate(
      { key },
      { data },
      { upsert: true, new: true } // Nếu chưa có thì tạo mới, có rồi thì cập nhật
    );

    return NextResponse.json(updatedSetting);
  } catch (error) {
    return NextResponse.json({ error: "Lỗi khi lưu dữ liệu" }, { status: 500 });
  }
}