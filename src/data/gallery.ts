import type { GalleryCategory, GalleryItem } from '../types'

const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

const build = (
  id: string,
  photo: string,
  category: GalleryCategory,
  label: string,
  title: string,
  description: string,
  accent: GalleryItem['accent'],
): GalleryItem => ({
  id,
  category,
  label,
  title,
  description,
  accent,
  image: unsplash(photo, 800),
  imageLarge: unsplash(photo, 1200),
})

export const GALLERY_FILTERS: { value: GalleryCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Todas las Fotos' },
  { value: 'montessori', label: 'Ambientes DUA y Montessori' },
  { value: 'adulta', label: 'Tránsito a la Vida Adulta' },
  { value: 'pastoral', label: 'Pastoral y Escuela de Familias' },
]

export const GALLERY_ITEMS: GalleryItem[] = [
  build(
    'sensory-corner',
    'photo-1577896851231-70ef18881754',
    'montessori',
    'Montessori & DUA',
    'Rincón Sensorial y Autonomía',
    'Materiales pedagógicos adaptados para la libre exploración, coordinación visomotriz y el aprendizaje sin barreras.',
    'crimson',
  ),
  build(
    'occupational-workshop',
    'photo-1580582932707-520aed937b7b',
    'adulta',
    'Vida Adulta',
    'Taller Ocupacional y Funcional',
    'Espacios formativos dedicados a desarrollar habilidades para la vida diaria, el trabajo colaborativo y la autodeterminación.',
    'slate',
  ),
  build(
    'respectful-parenting',
    'photo-1517048676732-d65bc937f952',
    'pastoral',
    'Escuela de Familias',
    'Encuentros de Crianza Respetuosa',
    'Talleres guiados por el Comité de Bienestar sobre Disciplina Positiva, prácticas restaurativas y acompañamiento familiar.',
    'crimson',
  ),
  build(
    'art-workshop',
    'photo-1503676260728-1c00da094a0b',
    'montessori',
    'Expresión & DUA',
    'Talleres de Modelado y Arte',
    'Actividades multisensoriales que refuerzan la motricidad fina, la autoestima y la comunicación no verbal.',
    'slate',
  ),
  build(
    'pilgrims-day',
    'photo-1546410531-bb4caa6b424d',
    'pastoral',
    'Pastoral',
    'Jornadas Peregrinos de Santo Toribio',
    'Celebraciones litúrgicas y dinámicas comunitarias organizadas por la Comisión Pastoral y Vida de Fe.',
    'crimson',
  ),
  build(
    'daily-living-skills',
    'photo-1516627145497-ae6968895b74',
    'adulta',
    'Autonomía',
    'Habilidades de la Vida Diaria (AVD)',
    'Prácticas continuas de autonomía en alimentación, cuidado personal y desenvolvimiento seguro hacia un proyecto de vida pleno.',
    'slate',
  ),
]
