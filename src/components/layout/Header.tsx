import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_ITEMS, SITE } from '../../data/site'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" onClick={closeMobile} className="flex items-center gap-3.5 group text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-crimson to-brand-slate flex items-center justify-center text-white shadow-md shadow-brand-crimson/25 group-hover:scale-105 transition-transform duration-300 border border-brand-crimsonBright/30">
              <i className="fa-solid fa-graduation-cap text-2xl" />
            </div>
            <div>
              <span className="block text-[11px] font-semibold tracking-wider uppercase text-brand-textMuted">
                {SITE.fullName}
              </span>
              <span className="block font-serif font-bold text-lg md:text-xl text-brand-slate tracking-tight leading-tight group-hover:text-brand-crimson transition-colors">
                {SITE.name}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3" aria-label="Principal">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2.5 text-sm transition-colors rounded-lg group ${
                    isActive ? 'text-brand-crimson font-bold' : 'font-semibold text-slate-600 hover:text-brand-crimson'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${
                        isActive ? 'bg-brand-crimson opacity-100' : 'opacity-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden p-2.5 rounded-lg text-brand-slate hover:text-brand-crimson hover:bg-slate-100 transition-colors"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white shadow-xl animate-view-in">
          <div className="px-4 pt-3 pb-5 space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `w-full px-4 py-3 rounded-xl flex items-center justify-between ${
                    isActive
                      ? 'font-bold bg-brand-crimsonSoft text-brand-crimson'
                      : 'font-semibold text-brand-text hover:bg-brand-crimsonSoft'
                  }`
                }
              >
                <span>{item.label}</span>
                <i className="fa-solid fa-chevron-right text-xs" />
              </NavLink>
            ))}
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-brand-textMuted">
            <i className="fa-solid fa-phone mr-1 text-brand-crimson" /> {SITE.phoneShort}
          </div>
        </div>
      )}
    </header>
  )
}
