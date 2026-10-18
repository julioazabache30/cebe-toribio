import { useNavigate } from 'react-router-dom'
import { SectionHeading } from '../components/ui/SectionHeading'
import {
  HERO_HIGHLIGHTS,
  LEVEL_FEATURES,
  METRICS,
  MISSION,
  PILLARS,
  PRINCIPLES,
  VALUES,
  VISION,
} from '../data/home'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80'
const HERO_FALLBACK = 'https://placehold.co/900x600/323840/ffffff?text=CEBE+Santo+Toribio'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-slateDeep via-brand-slateDark to-brand-slateDeep text-white overflow-hidden py-16 lg:py-24 border-b border-brand-slateDark">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d01037_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-brand-crimson/25 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-brand-slate/30 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-crimson/30 border border-brand-crimson/40 text-rose-100 text-xs md:text-sm font-semibold tracking-wide backdrop-blur-sm">
                <i className="fa-solid fa-church text-brand-crimsonBright" />
                <span>Bajo la protección de la Virgen María • Peregrinos de Santo Toribio</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.15]">
                Preparamos para la{' '}
                <span className="text-rose-200 underline decoration-brand-crimson decoration-wavy">Vida</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                Promovemos la pertenencia, la interdependencia positiva, el crecimiento emocional y la autonomía
                funcional mediante adaptaciones Montessori, guiando a cada estudiante hacia una vida plena.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/contacto')}
                  className="w-full sm:w-auto px-7 py-3.5 bg-brand-crimson hover:bg-brand-crimsonDark text-white font-bold rounded-xl shadow-crimson hover:shadow-lg border border-brand-crimsonBright/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Solicitar Informes &amp; Matrícula</span>
                  <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/galeria')}
                  className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <i className="fa-regular fa-images text-brand-crimsonBright" />
                  <span>Conocer Nuestros Espacios</span>
                </button>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/15 text-left">
                {HERO_HIGHLIGHTS.map((h) => (
                  <div key={h.value}>
                    <div className="text-lg sm:text-xl font-bold text-brand-crimsonBright">{h.value}</div>
                    <div className="text-xs text-slate-300">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <img
                    src={HERO_IMAGE}
                    alt="Alumnos en ambiente de estimulación y aprendizaje"
                    className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = HERO_FALLBACK
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-slateDeep via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg text-brand-text border border-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-crimsonSoft text-brand-crimson flex items-center justify-center text-lg">
                        <i className="fa-solid fa-hands-holding-child" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-brand-slate">Faro de Esperanza Inclusiva</div>
                        <div className="text-xs text-brand-textMuted">Formación inspirada en el amor de Cristo</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-brand-crimson text-white font-bold text-xs py-2 px-3.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1.5">
                  <i className="fa-solid fa-heart" /> Vocación &amp; Fe
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {METRICS.map((m) => (
            <div
              key={m.title}
              className="p-4 rounded-2xl bg-brand-surface border border-slate-100 hover:border-brand-crimson/30 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-brand-crimson mb-1">{m.value}</div>
              <div className="text-xs md:text-sm font-semibold text-brand-slate uppercase tracking-wide">{m.title}</div>
              <p className="text-xs text-brand-textMuted mt-1">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-gradient-to-br from-brand-surface to-white p-8 rounded-3xl border border-slate-200 shadow-custom relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-crimson/5 rounded-bl-full pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-crimsonSoft text-brand-crimson text-xs font-bold uppercase tracking-wider mb-4">
              <i className="fa-solid fa-bullseye" /> Misión Institucional
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-slate mb-4">
              Educación Personalizada y Desarrollo Integral
            </h3>
            <blockquote className="text-sm text-brand-textMuted leading-relaxed italic border-l-4 border-brand-crimson pl-4">
              “{MISSION}”
            </blockquote>
          </article>

          <article className="bg-gradient-to-br from-brand-slateDeep to-brand-slateDark text-white p-8 rounded-3xl border border-brand-slateDark shadow-custom-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-crimson/15 rounded-bl-full pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rose-200 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <i className="fa-solid fa-eye" /> Visión Institucional
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Faro de Esperanza y Referente Inclusivo Católico</h3>
            <blockquote className="text-sm text-slate-200 leading-relaxed italic border-l-4 border-brand-crimson pl-4">
              “{VISION}”
            </blockquote>
          </article>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Propuesta Técnico-Pedagógica"
            title="Pilares Formativos del Modelo Santo Toribio"
            description="Nuestra práctica docente articula la innovación metodológica, la rigurosidad científica y la vocación de servicio cristiano."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map((p, index) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-7 shadow-custom border border-slate-100 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl text-brand-crimson flex items-center justify-center text-2xl mb-6 shadow-sm ${index % 2 === 0 ? 'bg-brand-crimsonSoft' : 'bg-brand-slateSoft'
                      }`}
                  >
                    <i className={`fa-solid ${p.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-slate mb-3">{p.title}</h3>
                  <p className="text-brand-textMuted text-sm leading-relaxed mb-6">{p.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-brand-crimson flex items-center gap-1">
                  <span>{p.tag}</span>
                  <i className="fa-solid fa-check text-emerald-600 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Identidad Cristiana"
            title="Nuestros Valores Institucionales"
            description="Pilares que sustentan nuestra vida comunitaria y vocación de servicio."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 text-center">
            {VALUES.map((v, index) => (
              <div
                key={v.title}
                className={`p-4 rounded-2xl bg-brand-surface border border-slate-100 hover:border-brand-crimson hover:-translate-y-1 transition-all ${index === VALUES.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-crimsonSoft text-brand-crimson flex items-center justify-center text-xl mb-3">
                  <i className={`fa-solid ${v.icon}`} />
                </div>
                <h4 className="font-bold text-sm text-brand-slate">{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels banner */}
      <section className="py-16 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-slateDeep via-brand-slateDark to-brand-slateDeep rounded-3xl p-8 sm:p-12 text-white shadow-custom-lg border border-brand-slateDark grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block bg-brand-crimson text-xs font-extrabold uppercase px-3 py-1 rounded-md border border-brand-crimsonBright/30">
                Nivel Inicial • Primaria • Tránsito a la Vida Adulta
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-snug">
                Acompañando cada etapa formativa hacia la autonomía plena
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Desde la estimulación sensorio-motriz hasta la consolidación de competencias pre-laborales y sociales en
                el programa de Tránsito a la Vida Adulta, nuestro equipo multidisciplinario guía a los estudiantes y sus
                familias con vocación católica.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-rose-100 font-medium">
                {LEVEL_FEATURES.map((f) => (
                  <span key={f} className="flex items-center gap-1.5">
                    <i className="fa-solid fa-circle-check text-brand-crimsonBright" /> {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <button
                type="button"
                onClick={() => navigate('/contacto')}
                className="px-8 py-4 bg-white text-brand-slate font-bold rounded-2xl hover:bg-brand-crimsonSoft hover:text-brand-crimson hover:shadow-xl transition-all duration-300 text-sm flex items-center gap-2"
              >
                <i className="fa-solid fa-calendar-check text-brand-crimson" />
                <span>Agendar Visita Pedagógica</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Marco Normativo y Ético" title="Principios de Educación Especial" className="mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-brand-surface border border-slate-100 hover:border-brand-crimson/30 transition-colors"
              >
                <h4 className="text-lg font-bold text-brand-slate mb-2 flex items-center gap-2">
                  <i className={`fa-solid ${p.icon} text-brand-crimson`} /> {p.title}
                </h4>
                <p className="text-sm text-brand-textMuted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
