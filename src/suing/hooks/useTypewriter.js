import { useState, useEffect } from 'react'

export default function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('suing-theme') === 'dark'
  })

  useEffect(() => {
    // Scope the dark mode class to Suing's root element only
    const root = document.querySelector('.suing-root')
    if (root) root.classList.toggle('dark-mode', isDark)
    localStorage.setItem('suing-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return { isDark, toggleTheme }
}