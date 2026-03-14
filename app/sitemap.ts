import { MetadataRoute } from 'next'
import { data } from '@/utils/data'

const BASE_URL = 'https://icons.kishore-sv.me'

export default function sitemap(): MetadataRoute.Sitemap {
  const iconPages = data.map((icon) => ({
    url: `${BASE_URL}/icons/${icon.name.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/icons`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/installation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/usage`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/docs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...iconPages,
  ]
}

export const dynamic = "force-static"