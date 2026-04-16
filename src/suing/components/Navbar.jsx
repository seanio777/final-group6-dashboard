import { useState } from 'react'
import { Link } from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import useTypewriter from '../hooks/useTypewriter'

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About Me',     href: '#about' },
  { label: 'Education',    href: '#academic' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects',     href: '#projects' },
  { label: 'References',   href: '#references' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  useTypewriter()

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={isOpen ? 'nav-open' : ''}>
      {/* Back to dashboard — replaces logo */}
      <Link to="/" className="logo" style={{ textDecoration: 'none' }} onClick={closeMenu}>
        ← Dashboard
      </Link>

      {/* Mobile hamburger */}
      <button
        id="nav-toggle"
        className={`nav-toggle${isOpen ? ' open' : ''}`}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link.label}>
            <a href={link.href} onClick={closeMenu}>{link.label}</a>
          </li>
        ))}
      </ul>

      <button
        id="theme-toggle"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}