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
    // FIXES:
    // 1. No "relative" on root — prevents fixed canvases from being trapped
    //    inside a positioned ancestor (which made them stack as blocks).
    // 2. "text-left" and inline style overrides break out of global #root
    //    flex-column / text-center layout from the shared index.css.
    <div
      className="manlangit-root bg-black min-h-screen text-white overflow-x-hidden"
      style={{ display: 'block', width: '100%', maxWidth: '100%', textAlign: 'left' }}
    >
      {/* Background layers — fixed positioning works because parent is NOT relative */}
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