import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // ❌ XÓA HOẶC COMMENT ĐOẠN REDIRECTS NÀY
  // Vì nó ghi đè và làm mất tác dụng của Middleware khi xử lý Cookie
  /*
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
  */

  transpilePackages: ["swiper"],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', 
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com', 
      },
    ],
  },
};

export default withNextIntl(nextConfig);