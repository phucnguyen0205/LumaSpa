import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lumaspa.com.vn";
  const locales = ["vi", "en", "zh", "ko"];
  
  const pages = ["/about", "/contact", "/news", "/services"];

  const sitemapEntries: MetadataRoute.Sitemap = [];
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  });

  // 2. Tạo link cho từng ngôn ngữ
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    });
    pages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });

  return sitemapEntries;
}