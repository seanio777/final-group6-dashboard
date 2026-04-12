import { useEffect, useRef } from 'react'
import './Dashboard.css'

// ── Member data ───────────────────────────────────────────────────
const members = [
  {
    id: '01',
    name: 'Lance Kelly P.\nManlangit',
    role: 'CPE Student',
    tagline: '"Think in logic. Build in code. Innovate in reality."',
    photo: '/lance.jpeg',
    alt: 'Lance',
    href: 'https://personal-portfolio-ten-phi-88.vercel.app/?fbclid=IwY2xjawQ4qWpleHRuA2FlbQIxMABicmlkETFFT011TG5pMVBPY3lUVERMc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHolUZSMO8RYARsJWio1FODUZMa9Ke2RmtW9m83qTx76AdMWc-lZnOSfHtRuf_aem_JEK6syc_9z1fMCHLP7_4dQ',
  },
  {
    id: '02',
    name: 'Chryzller John\nSuing',
    role: 'CPE Student',
    tagline: '"The best way to predict the future is to invent it."',
    photo: '/suing.jpg',
    alt: 'Chryzller',
    href: 'https://portfolio-s-gamma.vercel.app/', 
  },
  {
    id: '03',
    name: 'Jose Antonio C.\nVerano',
    role: 'CPE Student',
    tagline: '"Building better, byte by byte."',
    photo: '/verano.jpg',
    alt: 'Jose Antonio',
    href: 'https://verano-portfolio.vercel.app/',
  },
]

// ── Custom cursor hook ────────────────────────────────────────────
function useCursor() {
  const cursorRef    = useRef(null)
  const cursorRingRef = useRef(null)
  const mouse  = useRef({ x: 0, y: 0 })
  const ring   = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const cursor     = cursorRef.current
    const cursorRing = cursorRingRef.current
    if (!cursor || !cursorRing) return

    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      cursor.style.left = `${e.clientX - 4}px`
      cursor.style.top  = `${e.clientY - 4}px`
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      cursorRing.style.left = `${ring.current.x - 16}px`
      cursorRing.style.top  = `${ring.current.y - 16}px`
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      cursor.style.transform        = 'scale(2.2)'
      cursorRing.style.transform    = 'scale(1.6)'
      cursorRing.style.borderColor  = 'rgba(0,255,136,0.6)'
      cursorRing.style.borderWidth  = '1.5px'
    }
    const onLeave = () => {
      cursor.style.transform        = 'scale(1)'
      cursorRing.style.transform    = 'scale(1)'
      cursorRing.style.borderColor  = ''
      cursorRing.style.borderWidth  = '1px'
    }

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    const links = document.querySelectorAll('a, button')
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      links.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return { cursorRef, cursorRingRef }
}

// ── MemberCard component ──────────────────────────────────────────
function MemberCard({ member }) {
  const [first, second] = member.name.split('\n')
  return (
    <a
      className="member-card"
      href={member.href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="card-number">{member.id}</span>

      <div className="photo-wrap">
        <div className="photo-ring">
          <img
            className="photo-img"
            src={member.photo}
            alt={member.alt}
            onError={e => { e.target.style.display = 'none' }}
          />
        </div>
        <div className="online-dot" />
      </div>

      <p className="member-role">{member.role}</p>
      <h2 className="member-name">
        {first}<br />{second}
      </h2>
      <p className="member-tagline">{member.tagline}</p>

      <div className="card-divider" />

      <div className="view-btn">
        View Portfolio <span className="arrow">→</span>
      </div>
    </a>
  )
}

// ── RSVPCard component ────────────────────────────────────────────
function RSVPCard() {
  return (
    <div className="rsvp-section">
      <p className="section-label">Special Feature</p>

      <a
        className="rsvp-card"
        href="https://palazzo-rsvp.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="rsvp-glow" />

        {/* Gold flower wax seal */}
        <div className="wax-seal-wrap">
          <div className="wax-seal-img-wrap">
            <img
              src="/wax-seal.png"
              alt="Wax Seal"
              className="wax-seal-img"
            />
          </div>
        </div>

        {/* Text */}
        <div className="rsvp-card-text">
          <p className="rsvp-eyebrow">You're Invited</p>
          <h3 className="rsvp-title">Chryzller &amp; Sebasthian</h3>
          <p className="rsvp-sub">October 24, 2026 · Palazzo Verde</p>
        </div>

        {/* Arrow */}
        <div className="rsvp-arrow">→</div>
      </a>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────
export default function App() {
  const { cursorRef, cursorRingRef } = useCursor()

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor"      ref={cursorRef} />
      <div className="cursor-ring" ref={cursorRingRef} />

      {/* Background layers */}
      <div className="grid-bg" />
      <div className="scanline" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="page">

        {/* Header */}
        <header>
          <div className="logo">
            <div className="logo-dot" />
            <span className="logo-text">TEAM DASHBOARD</span>
          </div>
          <div className="header-right">
            <span className="header-badge">CPE22S1</span>
            <div className="status-indicator">
              <span className="status-dot" />
              SYSTEMS ONLINE
            </div>
          </div>
        </header>

        {/* Main */}
        <main>

          {/* Hero */}
          <div className="hero">
            <p className="hero-label">Bachelor of Science in Computer Engineering</p>
            <h1 className="hero-title">
              Our <span>Portfolios</span>
            </h1>
            <p className="hero-sub">
              Select a member card below to view their individual digital portfolio.
            </p>
          </div>

          {/* Member cards */}
          <div className="cards-grid">
            {members.map(m => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>

          {/* RSVP card */}
          <RSVPCard />

        </main>

        {/* Footer */}
        <footer>
          <span className="footer-left">© 2026 CPE22S1 — All Rights Reserved</span>
          <span className="footer-right">BS Computer Engineering · TIP Manila</span>
        </footer>

      </div>
    </>
  )
}