import { Navbar }                from './components/Navbar'
import { Hero }                  from './components/Hero'
import { About }                 from './components/About'
import { Projects }              from './components/Projects'
import { Achievements }          from './components/Achievements'
import { Seminars }              from './components/Seminars'
import { Skills }                from './components/Skills'
import { Contact }               from './components/Contact'
import { InteractiveBackground } from './components/InteractiveBackground'
import { GridBackground }        from './components/GridBackground'
import { MatrixRain }            from './components/MatrixRain'

import './styles/index.css'

export default function Manlangit() {
  return (
    // manlangit-root scopes fonts, section-title, scrollbar
    // so they don't bleed into Verano or Suing portfolios
    <div
      className="manlangit-root bg-black min-h-screen text-white overflow-x-hidden"
      style={{ display: 'block', width: '100%', maxWidth: '100%', textAlign: 'left' }}
    >
      {/* Background layers — back to front
          z-index 1: MatrixRain        — faint binary rain
          z-index 2: GridBackground    — mouse-reactive moving grid
          z-index 3: InteractiveBackground — particles + connections
          Page background comes from bg-black above (not from any canvas)
      */}
      <MatrixRain />
      <GridBackground />
      <InteractiveBackground />

      {/* Page content sits above all background layers */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Seminars />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}