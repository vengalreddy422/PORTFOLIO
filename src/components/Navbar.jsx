import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-900/85 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-semibold text-xl tracking-tight text-mist-100">
          Vengal<span className="text-py-yellow">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-base text-mist-300">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-py-yellow transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-mist-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-ink-900/95 border-t border-white/5 px-6 py-4 flex flex-col gap-4 font-body text-base text-mist-300">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)} className="block py-1">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
