import { FiCalendar, FiMapPin, FiMonitor, FiExternalLink } from 'react-icons/fi'

const seminars = [
  {
    title: 'Cyber-Aware, Cyber-Safe: Strengthening Our Digital Defenses',
    organizer: 'Computer Engineering Student Society (CoESS) - TIP Manila',
    date: 'October 2024',
    location: 'On-campus',
    type: 'Seminar',
    tags: ['Cybersecurity Awareness', 'Best Practices'],
    certificateLink: '', // ← paste URL here if you have e-cert, leave '' to hide button
  },
  {
    title: 'Scholars\' Values Formation Orientation',
    organizer: 'DOST-SEI',
    date: 'February 2025',
    location: 'Zoom / Virtual',
    type: 'Webinar',
    tags: ['Social Responsibility', 'Community Building'],
    certificateLink: 'https://drive.google.com/file/d/1hKExn6gvHOPygUPZp2d_fwrB68HPXCBw/view?usp=drive_link',
  },
  {
    title: 'Cybersecurity Awareness Month Seminar',
    organizer: 'Computer Engineering Student Society (CoESS) - TIP Manila',
    date: 'October 2025',
    location: 'On-campus',
    type: 'Seminar',
    tags: ['Digital Ethics', 'Global Security Standards'],
    certificateLink: '',
  },
  {
    title: 'Program Elective Seminar',
    organizer: 'Computer Engineering Student Society (CoESS) - TIP Manila',
    date: 'January 2026',
    location: 'On-campus',
    type: 'Seminar',
    tags: ['Academic Specialization', 'Domain Awareness'],
    certificateLink: '',
  },
]

const typeColors = {
  Seminar:  'var(--cyan-accent)',
  Training: 'var(--blue-bright)',
  Workshop: '#a78bfa',
  Bootcamp: '#34d399',
}

export default function Seminars() {
  return (
    <section id="seminars" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        bottom: '0%', left: '30%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">
          <FiMonitor size={12} /> Seminars & Trainings
        </div>
        <h2 className="section-title">
          Learning &amp; <span>Development</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: 24,
        }}>
          {seminars.map((s, i) => (
            <div key={i} className="card">
              {/* Type badge + optional cert button */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: typeColors[s.type] || 'var(--blue-bright)',
                  background: `${typeColors[s.type] || 'var(--blue-bright)'}18`,
                  border: `1px solid ${typeColors[s.type] || 'var(--blue-bright)'}33`,
                  padding: '4px 10px',
                  borderRadius: 4,
                  textTransform: 'uppercase',
                }}>{s.type}</span>

                {/* ── Certificate button — only shows if certificateLink is not empty ── */}
                {s.certificateLink && (
                  <a
                    href={s.certificateLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.1em',
                      color: 'var(--cyan-accent)',
                      background: 'rgba(0,212,255,0.08)',
                      border: '1px solid rgba(0,212,255,0.25)',
                      padding: '4px 10px',
                      borderRadius: 4,
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      cursor: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(0,212,255,0.15)'
                      e.currentTarget.style.borderColor = 'var(--cyan-accent)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(0,212,255,0.08)'
                      e.currentTarget.style.borderColor = 'rgba(0,212,255,0.25)'
                    }}
                  >
                    <FiExternalLink size={10} /> View Certificate
                  </a>
                )}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: 8,
                lineHeight: 1.4,
              }}>{s.title}</h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--blue-light)',
                marginBottom: 16,
              }}>{s.organizer}</p>

              <div style={{ display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', color: 'var(--white-dim)', fontFamily: 'var(--font-body)' }}>
                  <FiCalendar size={12} /> {s.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', color: 'var(--white-dim)', fontFamily: 'var(--font-body)' }}>
                  <FiMapPin size={12} /> {s.location}
                </span>
              </div>

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {s.tags.map(tag => (
                  <span key={tag} className="tag" style={{ fontSize: '0.7rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}