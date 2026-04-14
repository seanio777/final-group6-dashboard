import { Navbar }                from './components/Navbar'
import { Hero }                  from './components/Hero'
import { About }                 from './components/About'
import { Projects }              from './components/Projects'
import { Skills }                from './components/Skills'
import { Contact }               from './components/Contact'
import { InteractiveBackground } from './components/InteractiveBackground'
import { GridBackground }        from './components/GridBackground'
import { MatrixRain }            from './components/MatrixRain'

// His original styles — kept exactly as-is from his repo
// index.css chains: fonts → tailwind (v4) → theme → neon-effects
import './styles/index.css'

export default function Manlangit() {
  return (
    // manlangit-root scopes his fonts/scrollbar/section-title
    // so they don't bleed into Verano or Suing portfolios
    <div className="manlangit-root bg-black min-h-screen text-white overflow-x-hidden relative">
      {/* Background layers — back to front */}
      <MatrixRain />       {/* z-index 1 — faint binary rain */}
      <GridBackground />   {/* z-index 2 — mouse-reactive grid */}
      <InteractiveBackground /> {/* z-index 3 — particles */}

      {/* Page content above all backgrounds */}
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