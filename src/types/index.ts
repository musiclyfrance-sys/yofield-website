/* ─── Global TypeScript types for Yofield ─────────────── */

export interface ServiceCategory {
  slug: string
  num: string
  name: string
  nameShort: string
  poetic: string
  description: string
  longDescription: string
  seoTitle: string
  seoDescription: string
  icon: string
  color: 'soil' | 'pine' | 'citron' | 'mist' | 'sage'
  promises: string[]
  prestations: string[] // slugs of related prestations
}

export interface Prestation {
  slug: string
  categorySlug: string
  num: string
  name: string
  nameFull: string
  description: string
  longDescription: string
  seoTitle: string
  seoDescription: string
  promises: string[]
  steps: ProcessStep[]
  faq: FAQItem[]
  relatedSlugs: string[] // other prestation slugs
}

export interface ProcessStep {
  num: string
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface CasStudy {
  slug: string
  title: string
  client: string
  sector: string
  year: number
  description: string
  challenge: string
  approach: string
  result: string
  services: string[] // prestation slugs
  categories: string[] // category slugs
  coverImage: string
  coverAlt: string
  featured: boolean
  tags: string[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  coverImage: string
  coverAlt: string
  readingTime: number
  content: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface SEOMeta {
  title: string
  description: string
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}
