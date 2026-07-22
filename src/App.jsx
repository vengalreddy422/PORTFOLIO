import { useState } from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <div className="min-h-screen">
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}

      <div className={`transition-opacity duration-700 ${introDone ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
