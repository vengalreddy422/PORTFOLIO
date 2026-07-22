import { GraduationCap } from 'lucide-react'
import { education } from '../data'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function Education() {
  const ref = useReveal()
  return (
    <section id="education" ref={ref} className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading eyebrow="02 — Education" title="Education timeline" subtitle="From Class 10 to my Master's degree." />

      <div className="relative">
        {/* the "road" — desktop only, animated toy travels along it */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4 -z-0">
          <div className="absolute inset-0 rounded-full bg-ink-950 border border-white/10" />
          <div className="road-dashes absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]" />
          <div className="toy-vehicle absolute left-1/2 -translate-x-1/2">
            <div className="w-9 h-9 -ml-[18px] rounded-full bg-py-yellow shadow-glow flex items-center justify-center text-base">
              🎓
            </div>
          </div>
        </div>

        {/* mobile road (simple vertical line, no animation for clarity on small screens) */}
        <div className="md:hidden absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-py-lightblue via-white/10 to-transparent" />

        <div className="space-y-8 md:space-y-4">
          {education.map((e, i) => {
            const flip = i % 2 === 1
            return (
              <div key={i} className={`reveal relative md:flex md:items-center md:gap-10 pl-8 md:pl-0 ${flip ? 'md:flex-row-reverse' : ''}`}>
                <span className="md:hidden absolute -left-0 top-1.5 w-4 h-4 rounded-full bg-ink-900 border-2 border-py-yellow" />

                <div className="md:w-1/2">
                  <div className={`rounded-xl card-surface p-6 shadow-card ${flip ? 'md:ml-6' : 'md:mr-6'}`}>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <h3 className="font-display font-semibold text-lg text-mist-100 flex items-center gap-2">
                        <GraduationCap size={18} className="text-py-lightblue" />
                        {e.degree}
                      </h3>
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-py-blue/15 text-py-lightblue border border-py-blue/30">
                        {e.years}
                      </span>
                    </div>
                    <p className="text-mist-300">{e.institution}</p>
                    <p className="text-py-yellow/90 text-sm mt-1 font-medium">{e.grade}</p>
                  </div>
                </div>

                {/* spacer on the other side so the card sits to one side of the road */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
