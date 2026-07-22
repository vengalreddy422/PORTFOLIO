import { Code, Layers, Server, BarChart3, Database, Cloud, Wrench } from 'lucide-react'
import { skills } from '../data'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

const ICONS = {
  Languages: Code,
  Frontend: Layers,
  Backend: Server,
  'Data & AI': BarChart3,
  Databases: Database,
  'Cloud & Deployment': Cloud,
  Tools: Wrench,
}

export default function Skills() {
  const ref = useReveal()
  return (
    <section id="skills" ref={ref} className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading eyebrow="04 — Toolbox" title="Skills & technologies" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => {
          const Icon = ICONS[group.category] || Code
          return (
            <div key={group.category} className="reveal rounded-xl card-surface p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <Icon size={18} className="text-py-lightblue" />
                <h3 className="font-display font-semibold text-mist-100">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-lg bg-ink-700 border border-white/5 text-mist-300 hover:border-py-yellow/40 hover:text-py-yellow transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>


    </section>
  )
}
