import { Navbar }                from './components/Navbar'
import { Hero }                  from './components/Hero'
import { About }                 from './components/About'
import { Projects }              from './components/Projects'
import { Skills }                from './components/Skills'
import { Contact }               from './components/Contact'
import { InteractiveBackground } from './components/InteractiveBackground'
import { GridBackground }        from './components/GridBackground'
import { MatrixRain }            from './components/MatrixRain'

// index.css chains: tailwind.css → fonts.css → neon-effects.css
// Tailwind MUST be loaded or all utility classes (grid, flex, hidden, etc.) break
import './styles/index.css'

export default function Manlangit() {
  return (
    // manlangit-root scopes fonts, section-title neon, and scrollbar color
    // so they don't bleed into Verano or Suing portfolios
    <div className="manlangit-root bg-black min-h-screen text-white overflow-x-hidden relative">
      <InteractiveBackground />
      <GridBackground />
      <MatrixRain />
      <div className="relative z-10">
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