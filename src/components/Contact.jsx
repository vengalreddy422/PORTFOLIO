import { Mail, Phone, Linkedin, Github, Code2, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard not available — ignore
    }
  }

  const cards = [
    { icon: Mail, label: 'Email me at', value: profile.email, href: `mailto:${profile.email}`, copyable: true },
    { icon: Phone, label: 'Call me at', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
    { icon: Linkedin, label: 'Connect on', value: 'LinkedIn', href: profile.linkedin },
    { icon: Github, label: 'View my work on', value: 'GitHub', href: profile.github },
    { icon: Code2, label: 'Practice on', value: 'LeetCode', href: profile.leetcode },
  ]

  return (
    <section id="contact" ref={ref} className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="07 — Contact"
        title={
          <>
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-py-lightblue to-py-yellow">real</span> together
          </>
        }
        subtitle="I'm actively looking for full-stack development opportunities where I can build things that matter."
        align="center"
      />

      <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {cards.map((c) => {
          const Icon = c.icon
          return (
            <div key={c.label} className="rounded-xl card-surface p-5 flex items-center gap-4 shadow-card">
              <div className="w-11 h-11 rounded-lg bg-py-blue/15 border border-py-blue/30 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-py-lightblue" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-mist-500">{c.label}</p>
                <p className="text-mist-100 font-medium truncate">{c.value}</p>
              </div>
              {c.copyable ? (
                <button onClick={copyEmail} aria-label="Copy email" className="text-mist-500 hover:text-py-yellow transition-colors shrink-0">
                  {copied ? <Check size={16} className="text-py-yellow" /> : <Copy size={16} />}
                </button>
              ) : (
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-mist-500 hover:text-py-yellow transition-colors shrink-0">
                  →
                </a>
              )}
            </div>
          )
        })}
      </div>

      <p className="reveal text-center mt-14 font-mono text-sm text-mist-500 italic">
        "Great software isn't just about writing code — it's about solving real problems with elegant solutions."
      </p>
    </section>
  )
}
