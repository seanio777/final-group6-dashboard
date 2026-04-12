import { Navbar }               from './components/Navbar'
import { Hero }                 from './components/Hero'
import { About }                from './components/About'
import { Projects }             from './components/Projects'
import { Skills }               from './components/Skills'
import { Contact }              from './components/Contact'
import { InteractiveBackground } from './components/InteractiveBackground'
import { GridBackground }       from './components/GridBackground'
import { MatrixRain }           from './components/MatrixRain'

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden relative">
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