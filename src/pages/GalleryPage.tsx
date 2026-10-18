import { useCallback, useMemo, useState } from 'react'
import { Modal, ModalCloseButton } from '../components/ui/Modal'
import { PageHero } from '../components/ui/PageHero'
import { GALLERY_FILTERS, GALLERY_ITEMS } from '../data/gallery'
import type { GalleryCategory, GalleryItem } from '../types'

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | 'all'>('all')
  const [selected, setSelected] = useState<GalleryItem | null>(null)
  const closeLightbox = useCallback(() => setSelected(null), [])

  const visibleItems = useMemo(
    () => (filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        tag="Recorrido Visual"
        title="Galería Institucional"
        description="Explora nuestros ambientes adaptados para el DUA 3.0, actividades sensoriales Montessori, talleres ocupacionales y la vida comunitaria en Florencia de Mora."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10" role="tablist">
          {GALLERY_FILTERS.map((f) => {
            const active = f.value === filter
            return (
              <button
                key={f.value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 border ${
                  active
                    ? 'bg-brand-crimson text-white border-brand-crimson shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border-slate-200'
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item)}
              className="group text-left relative rounded-2xl overflow-hidden shadow-custom bg-white border border-slate-100 animate-view-in focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-crimson"
            >
              <div className="overflow-hidden aspect-video relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-slateDeep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-brand-crimson text-white flex items-center justify-center text-lg shadow-lg">
                    <i className="fa-solid fa-magnifying-glass-plus" />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                    item.accent === 'crimson'
                      ? 'text-brand-crimson bg-brand-crimsonSoft'
                      : 'text-brand-slate bg-brand-slateSoft'
                  }`}
                >
                  {item.label}
                </span>
                <h3 className="font-bold text-brand-slate text-base mt-2 group-hover:text-brand-crimson transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-textMuted mt-1 line-clamp-2">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Modal open={selected !== null} onClose={closeLightbox} labelledBy="lightbox-title" overlayClassName="bg-black/90">
        {selected && (
          <div className="relative max-w-4xl w-full bg-brand-slateDeep rounded-2xl overflow-hidden shadow-2xl border border-brand-crimson/40">
            <ModalCloseButton onClick={closeLightbox} />
            <div className="max-h-[70vh] bg-black flex items-center justify-center">
              <img src={selected.imageLarge} alt={selected.title} className="max-h-[70vh] w-auto max-w-full object-contain" />
            </div>
            <div className="p-6 text-white bg-brand-slateDark">
              <span className="text-xs font-bold text-rose-200 uppercase tracking-wider">{selected.label}</span>
              <h3 id="lightbox-title" className="text-xl font-bold mt-1">
                {selected.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">{selected.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
