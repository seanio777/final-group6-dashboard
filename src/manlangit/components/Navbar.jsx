import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home',     href: '#home' },
    { name: 'About',    href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills',   href: '#skills' },
    { name: 'Contact',  href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`m-navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="m-navbar-inner">
          <Link to="/" style={{ color: '#00ff00', fontSize: '0.8rem', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
            ← DASHBOARD
          </Link>

          <a href="#home" className="m-nav-logo" onClick={e => handleNavClick(e, '#home')}>
            &lt;Portfolio /&gt;
          </a>

          <nav className="m-nav-links">
            {navItems.map(item => (
              <a key={item.name} href={item.href} onClick={e => handleNavClick(e, item.href)}>
                {item.name}
              </a>
            ))}
          </nav>

          <button className="m-nav-mobile-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div
          className="m-nav-mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/" className="m-nav-dash" style={{ color: '#00ff00' }}>← BACK TO DASHBOARD</Link>
          {navItems.map(item => (
            <a key={item.name} href={item.href} onClick={e => handleNavClick(e, item.href)}>
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </>
  )
}