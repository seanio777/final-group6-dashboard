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
  useTypewriter()

  return (
    <nav>
      {/* Back to dashboard */}
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
        ← Dashboard
      </Link>

      <ul>
        {navLinks.map(link => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
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