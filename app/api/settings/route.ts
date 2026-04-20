import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Setting } from "@/app/models/Setting";


export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (!key) return NextResponse.json({ error: "Missing key" }, { status: 400 });

    const setting = await Setting.findOne({ key });
    return NextResponse.json(setting?.data || []);
  } catch (error: any) {
    // Dòng này sẽ hiện lỗi chi tiết trong Vercel Logs
    console.error("LỖI API GET:", error.message); 
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const { key, data } = await request.json();

    // Sửa lỗi cảnh báo Mongoose và lưu dữ liệu
    const updatedSetting = await Setting.findOneAndUpdate(
      { key },
      { data },
      { upsert: true, returnDocument: 'after' } 
    );

    return NextResponse.json(updatedSetting);
  } catch (error: any) {
    console.error("LỖI API POST:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}