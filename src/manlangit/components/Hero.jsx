import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Aspiring Computer Engineer | Tech Enthusiast | Innovator"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => scrollToSection('about')

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
        <div className="grid-animation" />
      </div>

      {/* Scan lines */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <motion.div
          style={{ position: 'absolute', top: '25%', left: 0, width: '100%', height: '2px', background: 'linear-gradient(to right, transparent, #00ff00, transparent)' }}
          animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ position: 'absolute', bottom: '25%', left: 0, width: '100%', height: '2px', background: 'linear-gradient(to right, transparent, #00ff00, transparent)' }}
          animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="m-hero-grid" style={{ width: '100%', padding: '0 1rem' }}>
        {/* Text — shown second on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ order: 2 }}
        >
          <motion.h1
            className="neon-text"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 4rem)', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            LANCE KELLY P. MANLANGIT
          </motion.h1>

          <div style={{ height: '5rem', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.1rem', color: '#d1d5db', fontFamily: 'monospace' }}>
              {displayedText}
              <span style={{ display: 'inline-block', width: '2px', height: '1.2rem', background: '#00ff00', marginLeft: '4px', animation: 'neonPulse 1s infinite' }} />
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="neon-button"
              style={{ padding: '0.75rem 2rem', border: '2px solid #00ff00', color: '#00ff00', background: 'transparent', cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'Orbitron, monospace' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#00ff00'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#00ff00'; }}
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              style={{ padding: '0.75rem 2rem', border: '2px solid #6b7280', color: '#d1d5db', background: 'transparent', cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'Orbitron, monospace' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#00ff00'; e.currentTarget.style.color = '#00ff00'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#6b7280'; e.currentTarget.style.color = '#d1d5db'; }}
            >
              View Projects
            </button>
          </motion.div>
        </motion.div>

        {/* Photo — shown first on mobile */}
        <motion.div
          className="m-hero-image-wrap"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ order: 1 }}
        >
          <div className="m-hero-img-container">
            <div style={{ position: 'absolute', inset: 0, background: '#00ff00', borderRadius: '8px', filter: 'blur(20px)', opacity: 0.3, animation: 'neonPulse 2s infinite' }} />
            <div className="neon-border" style={{ borderRadius: '8px', padding: '4px', position: 'relative' }}>
              {/* Image moved to public folder — reference as /lance.png */}
              <img
                src="/lance-hero.png"
                alt="Lance Kelly P. Manlangit"
                style={{ width: '100%', maxWidth: '320px', height: 'auto', objectFit: 'contain', borderRadius: '6px', display: 'block' }}
              />
            </div>
            <motion.div
              style={{ position: 'absolute', top: '-1rem', right: '-1rem', color: '#00ff00', opacity: 0.5 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="2" />
                <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="1" />
                <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="1" />
                <line x1="40" y1="10" x2="40" y2="70" stroke="currentColor" strokeWidth="1" />
                <line x1="10" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="1" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: '#00ff00', background: 'none', border: 'none', cursor: 'pointer' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  )
}