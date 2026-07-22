import { useState } from 'react'
import { Briefcase, Trophy, ExternalLink } from 'lucide-react'
import { experience, achievements } from '../data'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function Experience() {
  const [tab, setTab] = useState('experience')
  const ref = useReveal([tab])

  return (
    <section id="experience" ref={ref} className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="03 — Journey"
        title="Experience & achievements"
        subtitle="What I've worked on, and what it's added up to."
        align="center"
      />

      <div className="reveal flex justify-center mb-12">
        <div className="inline-flex p-1 rounded-full card-surface">
          <button
            onClick={() => setTab('experience')}
            className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
              tab === 'experience' ? 'bg-py-blue text-white' : 'text-mist-300 hover:text-mist-100'
            }`}
          >
            <Briefcase size={15} /> Experience
          </button>
          <button
            onClick={() => setTab('achievements')}
            className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
              tab === 'achievements' ? 'bg-py-blue text-white' : 'text-mist-300 hover:text-mist-100'
            }`}
          >
            <Trophy size={15} /> Achievements
          </button>
        </div>
      </div>

      {tab === 'experience' ? (
        <div className="relative pl-8 md:pl-10 max-w-3xl mx-auto">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-py-yellow via-white/10 to-transparent" />
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="reveal relative">
                <span className="absolute -left-8 md:-left-10 top-1.5 w-4 h-4 rounded-full bg-ink-900 border-2 border-py-lightblue" />
                <div className="rounded-xl card-surface p-6 shadow-card">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-mist-100">{exp.role}</h3>
                      <p className="text-mist-500 text-sm">{exp.org}</p>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-py-yellow/10 text-py-yellow border border-py-yellow/30 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-mist-300">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-py-lightblue mt-1.5">&bull;</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-ink-700 text-mist-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-py-lightblue hover:text-py-yellow transition-colors"
                    >
                      Visit live site <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {achievements.map((a, i) => (
            <div key={i} className="reveal rounded-xl card-surface p-6 shadow-card">
              <Trophy size={18} className="text-py-yellow mb-3" />
              <h3 className="font-display font-semibold text-mist-100 mb-1">{a.title}</h3>
              <p className="text-sm text-mist-300">{a.detail}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
