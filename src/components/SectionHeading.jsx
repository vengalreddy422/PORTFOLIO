export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`reveal mb-12 ${align === 'center' ? 'text-center mx-auto max-w-xl' : ''}`}>
      {eyebrow && <p className="section-eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-mist-100">{title}</h2>
      {subtitle && <p className="mt-3 text-mist-300">{subtitle}</p>}
    </div>
  )
}
