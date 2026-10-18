export type GalleryCategory = 'montessori' | 'adulta' | 'pastoral'

export interface GalleryItem {
  id: string
  category: GalleryCategory
  label: string
  title: string
  description: string
  image: string
  imageLarge: string
  accent: 'crimson' | 'slate'
}

export interface NewsItem {
  id: string
  badge: string
  badgeClassName: string
  date: string
  title: string
  summary: string
  image: string
  imageLarge: string
  paragraphs: string[]
}

export interface IconCard {
  icon: string
  title: string
  description?: string
  tag?: string
}

export interface NavItem {
  path: string
  label: string
}

export type ContactLevel =
  | 'inicial'
  | 'primaria'
  | 'vida-adulta'
  | 'escuela-familias'
  | 'consultas-generales'

export interface ContactFormData {
  fullName: string
  email: string
  phone: string
  levelInterest: ContactLevel | ''
  message: string
  consent: boolean
}
