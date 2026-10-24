interface PageHeroProps {
  tag: string
  title: string
  description: string
}

export function PageHero({ tag, title, description }: PageHeroProps) {
  return (
    <div className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/70 py-14 text-center border-b border-slate-200/80 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#82071f_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <span className="text-brand-crimsonDark font-bold text-xs uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-rose-200/80 shadow-xs">
          {tag}
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-800 tracking-tight">{title}</h1>
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mt-3 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

