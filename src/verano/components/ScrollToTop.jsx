import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      title="Scroll to top"
      style={{
        position:   'fixed',
        bottom:     40,
        right:      40,
        zIndex:     9000,
        width:      48,
        height:     48,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--blue-glow), var(--blue-bright))',
        border:     '1px solid rgba(59,130,246,0.4)',
        color:      'white',
        display:    'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor:     'none',
        boxShadow:  '0 4px 20px rgba(30,91,255,0.4)',
        transform:  visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        opacity:    visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(30,91,255,0.6)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(30,91,255,0.4)'
      }}
    >
      <FiArrowUp size={20} />
    </button>
  )
}