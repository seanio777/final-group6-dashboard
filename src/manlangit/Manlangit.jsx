import { Navbar }                from './components/Navbar'
import { Hero }                  from './components/Hero'
import { About }                 from './components/About'
import { Projects }              from './components/Projects'
import { Skills }                from './components/Skills'
import { Contact }               from './components/Contact'
import { InteractiveBackground } from './components/InteractiveBackground'
import { GridBackground }        from './components/GridBackground'
import { MatrixRain }            from './components/MatrixRain'

import './styles/index.css'

export default function Manlangit() {
  return (
    <div className="manlangit-root bg-black min-h-screen text-white overflow-x-hidden relative">

      {/* ── Background layers (back to front) ────────────────
          z-index 1: MatrixRain    — faint binary rain
          z-index 2: GridBackground — mouse-reactive grid
          z-index 3: InteractiveBackground — particles + connections
          All three are transparent so they composite together.
          The black page background comes from bg-black above.
      ──────────────────────────────────────────────────── */}
      <MatrixRain />
      <GridBackground />
      <InteractiveBackground />

      {/* ── Page content sits above all background layers ── */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

    </div>
  )
}