import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Giả sử bạn có danh sách dịch vụ
  // const services = await getServices(); 

  return [
    {
      url: 'https://lumaspa.com.vn',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://lumaspa.com.vn/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}