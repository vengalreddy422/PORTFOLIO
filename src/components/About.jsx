import { Github, Linkedin, Code2 } from 'lucide-react'
import { profile } from '../data'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" ref={ref} className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading eyebrow="01 — About" title="A little about me" />

      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="reveal md:col-span-3 space-y-4 text-mist-300 leading-relaxed">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="flex items-center gap-4 pt-4">
            <a href={profile.github} target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full card-surface hover:border-py-yellow/60 transition-colors">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full card-surface hover:border-py-yellow/60 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full card-surface hover:border-py-yellow/60 transition-colors">
              <Code2 size={18} />
            </a>
          </div>
        </div>

        <div className="reveal md:col-span-2 rounded-xl card-surface p-6 shadow-card">
          <p className="font-mono text-xs text-mist-500 uppercase tracking-widest mb-4"># quick facts</p>
          <dl className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-white/5 pb-3">
              <dt className="text-mist-500">Focus</dt>
              <dd className="text-mist-100 text-right">Python Full Stack + AI</dd>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-3">
              <dt className="text-mist-500">Currently</dt>
              <dd className="text-mist-100 text-right">Building & deploying full-stack apps</dd>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-3">
              <dt className="text-mist-500">Toolbox</dt>
              <dd className="text-mist-100 text-right">Django · React · MySQL</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-mist-500">Also into</dt>
              <dd className="text-mist-100 text-right">Data analysis with Pandas & NumPy</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
