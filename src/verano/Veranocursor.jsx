import { useEffect, useRef } from 'react'

export default function VeranoCursor() {
  const dotRef    = useRef(null)
  const ringRef   = useRef(null)
  const mouse     = useRef({ x: 0, y: 0 })
  const ring      = useRef({ x: 0, y: 0 })
  const rafRef    = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ringEl = ringRef.current
    if (!dot || !ringEl) return

    const onMove = e => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      dot.style.left = `${e.clientX - 5}px`
      dot.style.top  = `${e.clientY - 5}px`
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1
      ringEl.style.left = `${ring.current.x - 17}px`
      ringEl.style.top  = `${ring.current.y - 17}px`
      rafRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position:      'fixed',
          width:         10,
          height:        10,
          borderRadius:  '50%',
          background:    'var(--cyan-accent, #00d4ff)',
          pointerEvents: 'none',
          zIndex:        99999,
          boxShadow:     '0 0 10px var(--cyan-accent, #00d4ff), 0 0 20px var(--cyan-accent, #00d4ff)',
          transition:    'transform 0.1s ease',
        }}
      />
      {/* Follower ring */}
      <div
        ref={ringRef}
        style={{
          position:      'fixed',
          width:         34,
          height:        34,
          borderRadius:  '50%',
          border:        '1px solid var(--blue-bright, #3b82f6)',
          pointerEvents: 'none',
          zIndex:        99998,
          opacity:       0.6,
        }}
      />
    </>
  )
}