interface SectionHeadingProps {
  tag: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ tag, title, description, className = 'mb-12' }: SectionHeadingProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <span className="text-brand-crimson font-bold text-xs uppercase tracking-widest bg-brand-crimsonSoft px-3 py-1 rounded-full border border-brand-crimson/20">
        {tag}
      </span>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-slate mt-3 mb-4">{title}</h2>
      {description && <p className="text-brand-textMuted text-sm md:text-base">{description}</p>}
    </div>
  )
}
