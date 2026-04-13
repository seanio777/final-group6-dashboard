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
    // No "relative" here — keeps fixed canvases as true viewport overlays
    // Inline style overrides the global #root flex layout
    <div
      className="manlangit-root"
      style={{ display: 'block', width: '100%', maxWidth: '100%', textAlign: 'left' }}
    >
      <MatrixRain />
      <GridBackground />
      <InteractiveBackground />

      <div style={{ position: 'relative', zIndex: 10 }}>
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