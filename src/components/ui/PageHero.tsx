interface PageHeroProps {
  tag: string
  title: string
  description: string
}

export function PageHero({ tag, title, description }: PageHeroProps) {
  return (
    <div className="bg-gradient-to-r from-brand-slateDeep via-brand-slateDark to-brand-slateDeep py-14 text-white text-center border-b border-brand-slateDark">
      <div className="max-w-5xl mx-auto px-4">
        <span className="text-rose-200 font-bold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-white/20">
          {tag}
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold">{title}</h1>
        <p className="text-slate-200 text-sm md:text-base max-w-2xl mx-auto mt-3">{description}</p>
      </div>
    </div>
  )
}
