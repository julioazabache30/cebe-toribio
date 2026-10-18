import { SITE } from '../../data/site'

export function TopBar() {
  return (
    <div className="bg-brand-slateDeep text-slate-300 text-xs py-2.5 px-4 border-b border-brand-slateDark hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-location-dot text-brand-crimson" /> {SITE.address}
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-phone text-brand-crimson" /> {SITE.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-envelope text-brand-crimson" /> {SITE.email}
          </span>
        </div>
        <span className="text-rose-300 font-medium">
          <i className="fa-solid fa-award mr-1" /> Educación Especializada
        </span>
      </div>
    </div>
  )
}
