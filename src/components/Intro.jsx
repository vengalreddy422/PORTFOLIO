import { useEffect, useState } from 'react'
import { profile } from '../data'

const GREETING = "Hello, I'm"
const NAME = ` ${profile.name}`
const FULL_TEXT = GREETING + NAME

export default function Intro({ onFinish }) {
  const [charIdx, setCharIdx] = useState(0)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [leaving, setLeaving] = useState(false)

  // Typing effect
  useEffect(() => {
    if (charIdx < FULL_TEXT.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 70) // Typist speed
      return () => clearTimeout(t)
    } else {
      // Finished typing name
      const tSub = setTimeout(() => setShowSubtitle(true), 300)
      
      // Start exit animation after reading
      const tLeave = setTimeout(() => {
        setLeaving(true)
      }, 1500)

      // Unmount
      const tFinish = setTimeout(() => {
        onFinish()
      }, 2000)

      return () => {
        clearTimeout(tSub)
        clearTimeout(tLeave)
        clearTimeout(tFinish)
      }
    }
  }, [charIdx, onFinish])

  const currentText = FULL_TEXT.slice(0, charIdx)
  
  // Split the typed string to color "Hello, I'm" and the name differently
  let greetingPart = currentText.slice(0, GREETING.length)
  let namePart = currentText.slice(GREETING.length)

  const renderAnimatedText = (text, startIdx) => {
    return text.split('').map((char, i) => (
      <span
        key={startIdx + i}
        className="inline-block animate-bounceIn"
        style={{ whiteSpace: 'pre' }}
      >
        {char}
      </span>
    ))
  }

  return (
    <div
      className={`fixed inset-0 z-[100] bg-ink-950 flex flex-col items-center justify-center transition-opacity duration-500 overflow-hidden ${
        leaving ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Particles / Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-py-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[20rem] h-[20rem] bg-py-yellow/5 rounded-full blur-[100px]" />
        
        {/* Few specific dust particles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-12 translate-y-12 w-2 h-2 rounded-full bg-py-blue/40 blur-[1px] animate-floatSlow" />
        <div className="absolute top-1/2 left-1/2 translate-x-24 -translate-y-8 w-3 h-3 rounded-full bg-py-lightblue/30 blur-[2px] animate-floatSlow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-32 -translate-y-20 w-1.5 h-1.5 rounded-full bg-py-yellow/30 blur-[1px] animate-floatSlow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="z-10 text-center flex flex-col items-center justify-center px-4">
        <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight mb-4 flex items-center justify-center flex-wrap">
          <span className="text-py-blue mr-2">{renderAnimatedText(greetingPart, 0)}</span>
          <span className="text-mist-100">{renderAnimatedText(namePart, GREETING.length)}</span>
          {/* Blinking cursor */}
          <span className={`inline-block w-2 sm:w-3 h-8 sm:h-12 bg-py-lightblue ml-1 align-middle transition-opacity ${charIdx < FULL_TEXT.length ? 'animate-blink' : 'opacity-0'}`} />
        </h1>
        
        {/* Subtitle */}
        <p 
          className={`font-mono text-sm sm:text-lg text-mist-400 uppercase tracking-widest transition-all duration-700 transform ${
            showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {profile.title}
        </p>
      </div>
    </div>
  )
}
