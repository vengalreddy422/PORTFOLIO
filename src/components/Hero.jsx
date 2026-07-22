import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data'
import Scene3D from './Scene3D'

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-[28rem] h-[28rem] bg-py-blue/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-[24rem] h-[24rem] bg-py-yellow/10 rounded-full blur-[120px] animate-floatSlow" />

      {/* 3D rotating visual, ambient depth layer */}
      <Scene3D className="pointer-events-none absolute right-[-4rem] top-1/2 -translate-y-1/2 w-[26rem] h-[26rem] opacity-70 hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <p className="text-py-yellow font-display text-xs sm:text-sm tracking-[0.25em] font-bold uppercase mb-4">
            Portfolio / Vallem Vengal Reddy
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight uppercase">
            <span className="text-py-yellow">VALLEM</span>{' '}
            <span className="text-white">VENGAL</span><br />
            <span className="text-py-lightblue">REDDY</span>
          </h1>
          <p className="mt-5 text-lg text-mist-300 max-w-md">
            {profile.title}. I build full-stack web apps end to end — and use data to make them smarter.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="hr-btn-primary">
              <span className="hr-btn-primary-inner">
                View my work
              </span>
            </a>
            <a href="#contact" className="hr-btn-secondary">
              <span className="hr-btn-secondary-inner">
                Get in touch
              </span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-mist-300">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-py-yellow transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-py-yellow transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-py-yellow transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Main Info Card */}
          <div className="col-span-2 p-6 rounded-2xl card-surface shadow-card hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300">
            <h3 className="font-display font-semibold text-lg text-mist-100 mb-2">My Journey</h3>
            <p className="text-sm text-mist-300 leading-relaxed">
              {profile.bio[0]}
            </p>
          </div>

          {/* Stats Card 1 */}
          <div className="p-6 rounded-2xl card-surface shadow-card flex flex-col justify-center items-center text-center hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-py-lightblue to-py-blue mb-1">
              5+
            </span>
            <span className="text-[10px] font-mono text-mist-300 uppercase tracking-widest">Projects Built</span>
          </div>

          {/* Stats Card 2 */}
          <div className="p-6 rounded-2xl card-surface shadow-card flex flex-col justify-center items-center text-center hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-py-yellow to-py-amber mb-1">
              20+
            </span>
            <span className="text-[10px] font-mono text-mist-300 uppercase tracking-widest">Technologies</span>
          </div>

          {/* Status Card */}
          <div className="col-span-2 p-5 rounded-2xl card-surface shadow-card flex items-center justify-between hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#27c93f]"></span>
              </span>
              <span className="text-sm font-medium text-mist-100">Available for opportunities</span>
            </div>
            <a href="#contact" className="text-[11px] font-mono text-py-yellow hover:text-py-amber transition-colors">
              HIRE ME &rarr;
            </a>
          </div>

        </div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-mist-500 hover:text-py-yellow transition-colors"
      >
        <span className="font-mono text-[11px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
