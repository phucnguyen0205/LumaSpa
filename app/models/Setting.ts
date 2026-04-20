import mongoose, { Schema, model, models } from "mongoose";

const SettingSchema = new Schema({
  key: { type: String, required: true, unique: true }, // ví dụ: "luma_banners"
  data: { type: [String], default: [] },               // mảng các link ảnh
});

export const Setting = models.Setting || model("Setting", SettingSchema);