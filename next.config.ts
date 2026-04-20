import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/vi',
        permanent: true, // SEO sẽ tốt hơn vì xác định /vi là trang chủ chính
      },
    ];
  },

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