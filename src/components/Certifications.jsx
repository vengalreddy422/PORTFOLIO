import { Award } from 'lucide-react'
import { certifications } from '../data'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function Certifications() {
  const ref = useReveal()
  return (
    <section id="certifications" ref={ref} className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading eyebrow="06 — Credentials" title="Certifications journey" align="center" />

      <div className="grid sm:grid-cols-2 gap-6">
        {certifications.map((c) => (
          <div key={c.title} className="reveal rounded-xl card-surface p-6 shadow-card">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-py-yellow" />
                <h3 className="font-display font-semibold text-mist-100">{c.title}</h3>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-ink-700 text-mist-300 border border-white/5 whitespace-nowrap">
                {c.year}
              </span>
            </div>
            <p className="text-py-lightblue text-sm font-medium mb-2">{c.issuer}</p>
            <p className="text-sm text-mist-300 leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
