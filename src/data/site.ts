import type { NavItem } from '../types'

export const SITE = {
  name: 'CEBE Santo Toribio',
  fullName: 'Centro de Educación Básica Especial',
  address: 'Av. Cesar Vallejo 1590, Florencia de Mora - Trujillo',
  addressFull: 'Av. Cesar Vallejo 1590, Florencia de Mora, Trujillo, La Libertad - Perú',
  phone: '(+51) 948 645 265',
  phoneShort: '948 645 265',
  email: 'cebesantotoribio@gmail.com',
  schedule: 'Lunes a Viernes: 8:00 am - 1:00 pm',
  mapsUrl: 'https://maps.google.com/?q=Av.+Cesar+Vallejo+1590+Florencia+de+Mora+Trujillo',
  whatsappUrl:
    'https://wa.me/51948645265?text=Hola,%20deseo%20solicitar%20informaci%C3%B3n%20sobre%20el%20CEBE%20Santo%20Toribio',
} as const

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Página de inicio' },
  { path: '/galeria', label: 'Galería' },
  { path: '/noticias', label: 'Noticias' },
  { path: '/contacto', label: 'Contacto' },
]
