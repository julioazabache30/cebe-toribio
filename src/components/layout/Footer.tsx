import { Link } from 'react-router-dom'
import { NAV_ITEMS, SITE } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-slateDeep text-white border-t border-brand-slateDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-crimson text-white flex items-center justify-center font-bold text-lg border border-brand-crimsonBright/30">
                <i className="fa-solid fa-graduation-cap" />
              </div>
              <div>
                <span className="block text-[10px] tracking-wider uppercase text-slate-400">
                  Comunidad Educativa Católica
                </span>
                <span className="block font-serif font-bold text-lg">{SITE.name}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              Comunidad educativa católica comprometida con la inclusión y desarrollo integral fundamentado en el DUA
              3.0, adaptaciones Montessori y los valores evangélicos.
            </p>
            <div className="text-xs text-rose-200">
              <i className="fa-solid fa-shield-halved mr-1" /> Autorizado y reconocido por el Ministerio de Educación
              del Perú.
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-rose-200 mb-4">Navegación</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px] text-brand-crimson" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-rose-200 mb-4">Sede Trujillo</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Av. Cesar Vallejo 1590, Florencia de Mora
              <br />
              Trujillo, La Libertad - Perú
            </p>
            <p className="text-xs text-slate-300 mb-1">
              <strong>Teléfono:</strong> {SITE.phone}
            </p>
            <p className="text-xs text-slate-300">
              <strong>Email:</strong> {SITE.email}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-slateDark text-center text-xs text-slate-400">
          <p>© {year} {SITE.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
