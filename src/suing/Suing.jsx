import './Suing.css'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Academic     from './components/Academic'
import Seminars     from './components/Seminars'
import Achievements from './components/Achievements'
import Projects     from './components/Projects'
import References   from './components/References'
import Contact      from './components/Contact'

export default function Suing() {
  return (
    <div className="suing-root">
      <Navbar />
      <Hero />
      <About />
      <Academic />
      <Seminars />
      <Achievements />
      <Projects />
      <References />
      <Contact />
    </div>
  )
}