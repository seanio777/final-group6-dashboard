import './Verano.css'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Objective    from './components/Objective'
import Academic     from './components/Academic'
import Seminars     from './components/Seminars'
import Achievements from './components/Achievements'
import Projects     from './components/Projects'
import Certificates from './components/Certificates'
import Contact      from './components/Contact'
import References   from './components/References'
import ScrollToTop  from './components/ScrollToTop'
import ThemeToggle  from './components/ThemeToggle'

export default function Verano() {
  return (
    <div className="verano-root">
      <Navbar />
      <Hero />
      <Objective />
      <Academic />
      <Seminars />
      <Achievements />
      <Projects />
      <Certificates />
      <Contact />
      <References />
      <ScrollToTop />
      <ThemeToggle />
    </div>
  )
}