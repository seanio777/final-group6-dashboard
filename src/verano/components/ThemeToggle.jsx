import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  // On first load, check saved preference
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      setIsDark(false)
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        position:       'fixed',
        bottom:         100, // sits above the scroll-to-top button
        right:          40,  
        zIndex:         9000,
        width:          48,
        height:         48,
        borderRadius:   '50%',
        background:     isDark
          ? 'rgba(13, 31, 60, 0.9)'
          : 'rgba(255, 255, 255, 0.9)',
        border:         isDark
          ? '1px solid rgba(59,130,246,0.4)'
          : '1px solid rgba(13,110,253,0.3)',
        color:          isDark ? '#fbbf24' : '#1e5bff',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        cursor:         'none',
        boxShadow:      isDark
          ? '0 4px 20px rgba(30,91,255,0.3)'
          : '0 4px 20px rgba(0,0,0,0.15)',
        transition:     'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
      }}
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  )
}