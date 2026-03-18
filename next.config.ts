import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Sửa đường dẫn ở đây (bỏ chữ src)
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  transpilePackages: ["swiper"],
};

export default withNextIntl(nextConfig);