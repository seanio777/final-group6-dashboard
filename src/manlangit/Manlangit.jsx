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
    // IMPORTANT: No "relative" here — it would trap fixed-position canvases
    // inside this element, making them stack as blocks instead of overlapping.
    // Inline styles override the global #root { display:flex; text-align:center }
    <div
      className="manlangit-root bg-black min-h-screen text-white overflow-x-hidden"
      style={{ display: 'block', width: '100%', maxWidth: '100%', textAlign: 'left' }}
    >
      {/* Background layers — fixed, so they cover the full viewport */}
      <MatrixRain />
      <GridBackground />
      <InteractiveBackground />

      {/* Page content sits above all background layers */}
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
