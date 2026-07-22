import { useState } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'
import { projects } from '../data'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'

export default function Projects() {
  const ref = useReveal()
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAll, setShowAll] = useState(false)
  
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" ref={ref} className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading eyebrow="05 — Work" title="Projects" subtitle="Full-stack builds, from database to deployment." />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((p) => (
          <div
            key={p.title}
            className="reveal rounded-xl card-surface shadow-card flex flex-col hover:border-py-lightblue/30 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedProject(p)}
          >
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden bg-ink-900 border-b border-white/5">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-py-blue text-white shadow-lg">
                Featured
              </span>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display font-semibold text-lg text-mist-100">{p.title}</h3>
              <p className="text-sm text-mist-300 leading-relaxed mt-2 mb-6 flex-1 line-clamp-2">
                {p.description}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(p) }}
                  className="flex-1 bg-ink-950 hover:bg-ink-900 text-mist-100 border border-white/10 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 rounded-lg py-2 text-sm font-medium"
                >
                  View More
                </button>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-2 bg-mist-100 hover:bg-white text-ink-900 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 rounded-lg py-2 px-4 text-sm font-medium"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-xl bg-ink-800 hover:bg-ink-700 text-mist-100 border border-white/10 hover:border-py-blue/30 transition-all duration-300 font-medium text-sm shadow-card hover:-translate-y-1 active:scale-95"
          >
            {showAll ? 'View Less' : 'View More Projects'}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-ink-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Header / Close */}
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 bg-ink-800/80 hover:bg-ink-700 text-mist-300 hover:text-white rounded-full backdrop-blur transition-colors border border-white/5"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto">
              {/* Image */}
              <div className="w-full h-64 sm:h-80 bg-ink-950 border-b border-white/5">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-mist-100 mb-6">
                  {selectedProject.title}
                </h2>

                <div className="space-y-8">
                  {/* Overview */}
                  <div>
                    <h4 className="text-lg font-medium text-mist-100 mb-3 border-b border-white/5 pb-2">Project Overview</h4>
                    <p className="text-mist-300 leading-relaxed text-sm sm:text-base">
                      {selectedProject.overview}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-lg font-medium text-mist-100 mb-3 border-b border-white/5 pb-2">Key Highlights</h4>
                    <ul className="list-disc list-inside text-mist-300 space-y-2 text-sm sm:text-base">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-medium text-mist-100 mb-3 border-b border-white/5 pb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-md bg-ink-800 text-mist-300 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div>
                    <h4 className="text-lg font-medium text-mist-100 mb-3 border-b border-white/5 pb-2">Project Links</h4>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-ink-800 hover:bg-ink-700 transition-colors text-mist-100 border border-white/10 text-sm font-medium"
                      >
                        <Github size={16} /> GitHub
                      </a>
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-py-blue hover:bg-py-lightblue transition-colors text-white text-sm font-medium shadow-glow"
                      >
                        Live Portal <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
