import { useState, type ChangeEvent, type FormEvent } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { SITE } from '../data/site'
import { useToast } from '../hooks/useToast'
import { sendContactRequest } from '../services/contactService'
import type { ContactFormData } from '../types'

const INITIAL_FORM: ContactFormData = {
  fullName: '',
  email: '',
  phone: '',
  levelInterest: '',
  message: '',
  consent: false,
}

const LEVEL_OPTIONS = [
  { value: 'inicial', label: 'Nivel Inicial (3 a 5 años)' },
  { value: 'primaria', label: 'Nivel Primaria' },
  { value: 'vida-adulta', label: 'Tránsito a la Vida Adulta' },
  { value: 'escuela-familias', label: 'Asesoría Pedagógica y Escuela de Familias' },
  { value: 'consultas-generales', label: 'Consultas Generales' },
]

const CONTACT_INFO = [
  { icon: 'fa-location-dot', title: 'Dirección Oficial', value: SITE.addressFull, soft: 'crimson' },
  { icon: 'fa-phone', title: 'Teléfono Principal', value: SITE.phone, soft: 'slate' },
  { icon: 'fa-envelope', title: 'Correo Institucional', value: SITE.email, soft: 'crimson', highlight: true },
  { icon: 'fa-clock', title: 'Horario de Secretaría', value: SITE.schedule, soft: 'slate' },
]

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-crimson focus:border-brand-crimson text-sm transition-all'
const labelClass = 'block text-xs font-bold text-brand-slate uppercase tracking-wider mb-2'

export default function ContactPage() {
  const { showToast } = useToast()
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target
    const nextValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value
    setForm((prev) => ({ ...prev, [name]: nextValue }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    try {
      await sendContactRequest({ ...form, fullName: form.fullName.trim(), message: form.message.trim() })
      setForm(INITIAL_FORM)
      showToast('¡Mensaje Enviado!', 'Nos comunicaremos con usted a la brevedad.')
    } catch {
      showToast('Error', 'No se pudo enviar su solicitud. Intente nuevamente.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHero
        tag="Atención a las Familias"
        title="Contacto y Admisión"
        description="Nuestra Secretaría y la Asesoría Académica están a su disposición para resolver dudas sobre vacantes y el modelo formativo de Santo Toribio."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-custom border border-slate-100">
          <div className="mb-6">
            <h2 className="text-2xl font-serif font-bold text-brand-slate">Formulario de Consulta</h2>
            <p className="text-xs sm:text-sm text-brand-textMuted mt-1">
              Complete sus datos y el equipo psicopedagógico se comunicará con su familia a la brevedad.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fullName" className={labelClass}>Nombre del Padre / Tutor *</label>
                <input id="fullName" name="fullName" type="text" required maxLength={100} autoComplete="name"
                  placeholder="Ej. Ana Lucía Morales" value={form.fullName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Correo Electrónico *</label>
                <input id="email" name="email" type="email" required maxLength={120} autoComplete="email"
                  placeholder="correo@ejemplo.com" value={form.email} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className={labelClass}>Teléfono / WhatsApp *</label>
                <input id="phone" name="phone" type="tel" required pattern="[0-9+\s()-]{6,20}" autoComplete="tel"
                  placeholder="Ej. 948 645 265" value={form.phone} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="levelInterest" className={labelClass}>Nivel de Interés *</label>
                <select id="levelInterest" name="levelInterest" required value={form.levelInterest}
                  onChange={handleChange} className={`${inputClass} text-brand-text`}>
                  <option value="" disabled>Seleccione una opción</option>
                  {LEVEL_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Detalle de su Consulta o Información del Menor *</label>
              <textarea id="message" name="message" rows={4} required maxLength={2000}
                placeholder="Cuéntenos sobre la edad de su hijo/a, diagnóstico o avances, y las necesidades específicas para orientarle con calidez..."
                value={form.message} onChange={handleChange} className={inputClass} />
            </div>

            <div className="flex items-center gap-2">
              <input id="consent" name="consent" type="checkbox" required checked={form.consent}
                onChange={handleChange} className="rounded accent-brand-crimson h-4 w-4" />
              <label htmlFor="consent" className="text-xs text-brand-textMuted">
                Acepto el tratamiento de datos para propósitos informativos de admisión.
              </label>
            </div>

            <button type="submit" disabled={submitting}
              className="w-full py-4 bg-brand-crimson hover:bg-brand-crimsonDark disabled:opacity-70 disabled:cursor-wait text-white font-bold rounded-xl shadow-crimson transition-all duration-300 flex items-center justify-center gap-2 group">
              <span>{submitting ? 'Enviando solicitud...' : 'Enviar Solicitud de Información'}</span>
              <i className={submitting ? 'fa-solid fa-spinner fa-spin' : 'fa-solid fa-paper-plane group-hover:translate-x-1 transition-transform'} />
            </button>
          </form>
        </div>

        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-custom border border-slate-100 space-y-6">
            <h3 className="text-xl font-serif font-bold text-brand-slate border-b border-slate-100 pb-3">
              Información Institucional
            </h3>
            <div className="space-y-4 text-sm text-brand-textMuted">
              {CONTACT_INFO.map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl text-brand-crimson flex items-center justify-center shrink-0 ${
                    info.soft === 'crimson' ? 'bg-brand-crimsonSoft' : 'bg-brand-slateSoft'}`}>
                    <i className={`fa-solid ${info.icon}`} />
                  </div>
                  <div>
                    <strong className="block text-brand-slate text-sm">{info.title}</strong>
                    <span className={info.highlight ? 'text-brand-crimson font-medium' : ''}>{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-brand-slate hover:bg-brand-slateDark text-white text-xs font-bold transition-colors flex items-center justify-center gap-2">
                <i className="fa-solid fa-map-location-dot text-rose-200" />
                <span>Ver en Google Maps</span>
              </a>
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2">
                <i className="fa-brands fa-whatsapp text-sm" />
                <span>WhatsApp Directo</span>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-slateDeep to-brand-slateDark rounded-3xl p-6 text-white text-center shadow-custom border border-brand-slateDark">
            <i className="fa-solid fa-cross text-3xl text-rose-300 mb-2" />
            <h4 className="font-bold text-base">Comunidad Peregrinos de Santo Toribio</h4>
            <p className="text-xs text-slate-300 mt-1">
              Un faro de esperanza y educación inclusiva católica en Florencia de Mora.
            </p>
          </div>
        </aside>
      </div>
    </>
  )
}
