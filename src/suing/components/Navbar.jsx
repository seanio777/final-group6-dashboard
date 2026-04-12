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

  // Initialise typewriter + active nav on scroll
  useTypewriter()

  return (
    <nav>
      <div className="logo">MyPortfolio</div>

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