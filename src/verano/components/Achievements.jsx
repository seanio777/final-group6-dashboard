import { FiAward, FiExternalLink } from 'react-icons/fi'
import { FaTrophy, FaMedal, FaStar, FaNewspaper } from 'react-icons/fa'

const achievements = [
  {
    title: "Dean's Lister",
    subtitle: '1st Semester AY 2024-2025',
    description: 'Recognized for outstanding academic performance with a GWA of 1.55, qualifying for the Dean\'s List.',
    icon: <FaTrophy size={20} />,
    color: '#fbbf24',
    certificateLink: 'https://drive.google.com/file/d/1vTqX1dIC-hnsagbXYykng9oqth7B_8Gk/view?usp=sharing',
  },
  {
    title: '2nd Runner Up – Inhinyera\'s Shirt Design Competition',
    subtitle: 'Inhinyera | TIP Manila',
    description: 'Awarded 2nd runner up in the Shirt Design Competition held during the celebration of Women\'s Month and Inhinyera\'s 10th Founding Anniversary.',
    icon: <FaMedal size={20} />,
    color: '#cd7f32',
    certificateLink: 'https://drive.google.com/file/d/17o8R2G2uJ_jHoh5iUJtyuIgCFMn-ywGT/view?usp=drive_link',
  },
  {
    title: 'With High Honors',
    subtitle: 'Senior High School Graduation | PNHS Main',
    description: 'Graduated Senior High School With High Honors, recognition given to students who demonstrated outstanding academic performance throughout the Senior High School program.',
    icon: <FaStar size={20} />,
    color: '#fbbf24',
    certificateLink: 'https://drive.google.com/file/d/1wc-JB4PxChVfU2BZF8ihT7d-dGKdxyra/view?usp=drive_link',
  },
  {
    title: 'With High Honors',
    subtitle: 'Junior High School Graduation | PNHS-STE',
    description: 'Completed Junior High School at the Parañaque National High School-STE Program With High Honors, demonstrating consistent academic excellence throughout the program.',
    icon: <FaStar size={20} />,
    color: '#fbbf24',
    certificateLink: '',
  },
  {
    title: '5th Place – Division Schools Press Conference',
    subtitle: 'Pagwawasto at Pag-uulo ng Balita | Elementary',
    description: 'Placed 5th in the Division Schools Press Conference during elementary, competing in the Filipino journalism category of Pagwawasto at Pag-uulo ng Balita (News Editing and Headline Writing).',
    icon: <FaNewspaper size={20} />,
    color: '#60a5fa',
    certificateLink: '',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg" />
      <div className="glow-orb" style={{
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(30,91,255,0.1) 0%, transparent 70%)',
        top: '50%', right: '-10%', transform: 'translateY(-50%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">
          <FiAward size={12} /> Achievements
        </div>
        <h2 className="section-title">
          Awards &amp; <span>Recognition</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: 28,
        }}>
          {achievements.map((a, i) => (
            // ── FIX: card uses flex column so button always pins to bottom ──
            <div key={i} className="card" style={{
              position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
            }}>
              {/* Watermark */}
              <div style={{
                position: 'absolute', top: -10, right: 16,
                fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 900,
                color: 'rgba(30,91,255,0.06)', lineHeight: 1, userSelect: 'none',
              }}>0{i + 1}</div>

              <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', flex: 1 }}>
                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: `${a.color}18`, border: `1px solid ${a.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: a.color, flexShrink: 0,
                }}>
                  {a.icon}
                </div>

                {/* Text block — flex column so description grows and button stays at bottom */}
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700,
                    color: 'var(--white)', marginBottom: 4,
                  }}>{a.title}</h3>

                  <p style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.62rem', letterSpacing: '0.1em',
                    color: a.color, marginBottom: 10, textTransform: 'uppercase',
                  }}>{a.subtitle}</p>

                  {/* Description grows to fill space */}
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--white-muted)',
                    lineHeight: 1.7, flex: 1,
                    marginBottom: 16,   /* always 16px below description */
                  }}>{a.description}</p>

                  {/* ── Button row — always at the same vertical position ── */}
                  <div style={{ minHeight: 32 }}>
                    {a.certificateLink ? (
                      <a
                        href={a.certificateLink}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 5,
                          fontFamily: 'var(--font-display)', fontSize: '0.55rem',
                          letterSpacing: '0.1em', color: a.color,
                          background: `${a.color}12`, border: `1px solid ${a.color}30`,
                          padding: '5px 12px', borderRadius: 4,
                          textDecoration: 'none', textTransform: 'uppercase',
                          cursor: 'none', transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = `${a.color}22`
                          e.currentTarget.style.borderColor = a.color
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = `${a.color}12`
                          e.currentTarget.style.borderColor = `${a.color}30`
                        }}
                      >
                        <FiExternalLink size={10} /> View Proof
                      </a>
                    ) : (
                      /* Empty placeholder keeps height consistent for cards without a link */
                      <span style={{ display: 'block', height: 28 }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}