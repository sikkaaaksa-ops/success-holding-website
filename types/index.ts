export interface Sector {
  id: string
  slug: string
  icon: string
  titleKey: string
  descriptionKey: string
  color?: string
  imageUrl?: string
}

export interface Subsidiary {
  id: string
  slug: string
  name: { en: string; ar: string }
  sector: string
  logoUrl: string
  description: { en: string; ar: string }
  founded?: number
  website?: string
  highlights: { en: string[]; ar: string[] }
  coverImageUrl?: string
}

export interface Stat {
  id: string
  value: number
  suffix?: string
  labelKey: string
  prefix?: string
}

export interface Project {
  id: string
  slug: string
  name: { en: string; ar: string }
  sector: string
  year: number
  description: { en: string; ar: string }
  imageUrl?: string
  status: 'completed' | 'ongoing' | 'upcoming'
}

export interface Partner {
  id: string
  name: string
  logoUrl: string
  website?: string
  category?: string
}

export interface NewsArticle {
  id: string
  slug: string
  title: { en: string; ar: string }
  excerpt: { en: string; ar: string }
  content?: { en: string; ar: string }
  publishedAt: string
  imageUrl?: string
  category?: string
}

export interface NavItem {
  labelKey: string
  href: string
  children?: NavItem[]
}

export interface Career {
  id: string
  title: { en: string; ar: string }
  department: { en: string; ar: string }
  location: { en: string; ar: string }
  type: { en: string; ar: string }
  description: { en: string; ar: string }
}
