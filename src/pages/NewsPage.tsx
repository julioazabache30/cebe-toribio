import { useCallback, useState } from 'react'
import { Modal, ModalCloseButton } from '../components/ui/Modal'
import { PageHero } from '../components/ui/PageHero'
import { NEWS_ITEMS } from '../data/news'
import type { NewsItem } from '../types'

export default function NewsPage() {
  const [selected, setSelected] = useState<NewsItem | null>(null)
  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <>
      <PageHero
        tag="Comunidad y Pastoral"
        title="Noticias y Comunicados"
        description="Infórmate sobre las convocatorias de la Escuela de Familias, avances diagnósticos del PEP, jornadas pastorales y proyectos pedagógicos."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NEWS_ITEMS.map((news) => (
          <article
            key={news.id}
            className="bg-white rounded-2xl overflow-hidden shadow-custom border border-slate-100 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="relative h-48 overflow-hidden">
                <img src={news.image} alt={news.title} loading="lazy" className="w-full h-full object-cover" />
                <span
                  className={`absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 ${news.badgeClassName}`}
                >
                  {news.badge}
                </span>
              </div>
              <div className="p-6">
                <div className="text-xs text-brand-textMuted font-medium mb-2 flex items-center gap-1.5">
                  <i className="fa-regular fa-calendar text-brand-crimson" /> {news.date}
                </div>
                <h3 className="text-lg font-bold text-brand-slate mb-2 line-clamp-2 hover:text-brand-crimson transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-brand-textMuted line-clamp-3 leading-relaxed mb-4">{news.summary}</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button
                type="button"
                onClick={() => setSelected(news)}
                className="w-full py-2.5 rounded-xl border border-brand-crimson text-brand-crimson font-semibold text-xs hover:bg-brand-crimson hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Leer nota completa</span>
                <i className="fa-solid fa-arrow-right text-[10px]" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <Modal open={selected !== null} onClose={closeModal} labelledBy="news-modal-title">
        {selected && (
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <div className="relative h-64 bg-slate-900 shrink-0">
              <img src={selected.imageLarge} alt={selected.title} className="w-full h-full object-cover opacity-90" />
              <ModalCloseButton onClick={closeModal} />
              <span className="absolute bottom-4 left-6 bg-brand-crimson text-white text-xs font-bold px-3 py-1 rounded-md border border-white/20">
                {selected.badge}
              </span>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="text-xs text-brand-textMuted font-semibold flex items-center gap-1.5">
                <i className="fa-regular fa-calendar text-brand-crimson" /> {selected.date}
              </div>
              <h3 id="news-modal-title" className="text-2xl font-serif font-bold text-brand-slate leading-snug">
                {selected.title}
              </h3>
              <div className="text-sm text-brand-textMuted space-y-3 leading-relaxed">
                {selected.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors"
              >
                Cerrar Noticia
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
