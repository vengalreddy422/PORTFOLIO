import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-mist-500">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
