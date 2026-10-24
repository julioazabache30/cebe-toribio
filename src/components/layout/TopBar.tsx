import { SITE } from '../../data/site'

export function TopBar() {
  const handleDownloadHtml = () => {
    const htmlContent = document.documentElement.outerHTML
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'CEBE_Santo_Toribio.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-brand-lead text-slate-100 text-xs py-2 px-4 border-b border-brand-leadDark hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-1.5 gap-x-4">
        <div className="flex items-center gap-x-5 lg:gap-x-6 text-slate-200">
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-location-dot text-rose-300" />
            <span className="hidden xl:inline">{SITE.address}</span>
            <span className="xl:hidden">Florencia de Mora - Trujillo</span>
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-phone text-rose-300" /> {SITE.phone}
          </span>
          <span className="hidden lg:flex items-center gap-1.5">
            <i className="fa-solid fa-envelope text-rose-300" /> {SITE.email}
          </span>
        </div>
        <div className="flex items-center space-x-3 lg:space-x-4">
          <span className="text-rose-200 font-medium flex items-center gap-1.5">
            <i className="fa-solid fa-cross text-rose-300" /> Comunidad Educativa Católica
          </span>
        </div>
      </div>
    </div>
  )
}

