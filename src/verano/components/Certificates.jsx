import { useState } from 'react'
import { FiExternalLink, FiShield, FiChevronDown } from 'react-icons/fi'

const certificates = [
  {
    title: 'Advent of Cyber 2025',
    issuer: 'TryHackMe',
    date: 'December 2025',
    credentialId: 'THM-7QSJU6KYRO',
    link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-7QSJU6KYRO.pdf',
    category: 'Security',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'December 2025',
    credentialId: 'c35d5a4e-e50c-432c-a230-8870fc75a1ee',
    link: 'https://www.credly.com/badges/c35d5a4e-e50c-432c-a230-8870fc75a1ee/public_url',
    category: 'Security',
    // ── Cisco badges earned alongside this certificate ──
    badges: [
      'Cybersecurity Administration',
      'Threat Analysis',
      'System Safeguards',
      'Network Defense',
      'Resource Specialist',
    ],
  },
]

const categoryColors = {
  Security:    '#f87171',
  Marketing:   '#fb923c',
  Programming: 'var(--cyan-accent)',
  Technical:   'var(--blue-bright)',
  'Web Dev':   '#a78bfa',
  IoT:         '#34d399',
}

export default function Certificates() {
  // Tracks which card's badge dropdown is open (null = all closed)
  const [openBadges, setOpenBadges] = useState(null)

  return (
    <section id="certificates" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
        top: '20%', left: '10%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">
          <FiShield size={12} /> Certificates
        </div>
        <h2 className="section-title">
          Licenses &amp; <span>Certifications</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          {certificates.map((cert, i) => {
            const color = categoryColors[cert.category] || 'var(--blue-bright)'
            const isBadgeOpen = openBadges === i

            return (
              <div key={i} className="card" style={{ padding: '24px 28px' }}>

                {/* Top: category tag + external link */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.58rem', letterSpacing: '0.15em',
                    color: color, background: `${color}15`, border: `1px solid ${color}30`,
                    padding: '4px 10px', borderRadius: 4, textTransform: 'uppercase',
                  }}>{cert.category}</span>

                  {cert.link !== '#' && (
                    <a href={cert.link} target="_blank" rel="noreferrer" style={{
                      color: 'var(--white-dim)', transition: 'color 0.3s ease', cursor: 'none',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--white-dim)'}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600,
                  color: 'var(--white)', marginBottom: 6, lineHeight: 1.4,
                }}>{cert.title}</h3>

                {/* Issuer */}
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--blue-light)', marginBottom: 16 }}>
                  {cert.issuer}
                </p>

                {/* ── Badge dropdown — only shown if cert has badges ── */}
                {cert.badges && cert.badges.length > 0 && (
                  <div style={{ marginBottom: 16 }}>
                    {/* Toggle button */}
                    <button
                      onClick={() => setOpenBadges(isBadgeOpen ? null : i)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        width: '100%',
                        background: isBadgeOpen ? `${color}18` : `${color}0d`,
                        border: `1px solid ${isBadgeOpen ? color + '60' : color + '30'}`,
                        borderRadius: 6,
                        padding: '8px 14px',
                        color: color,
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        cursor: 'none',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = `${color}22`
                        e.currentTarget.style.borderColor = `${color}60`
                      }}
                      onMouseLeave={e => {
                        if (!isBadgeOpen) {
                          e.currentTarget.style.background = `${color}0d`
                          e.currentTarget.style.borderColor = `${color}30`
                        }
                      }}
                    >
                      <span>🏅 Badges Earned ({cert.badges.length})</span>
                      <FiChevronDown
                        size={13}
                        style={{
                          transition: 'transform 0.25s ease',
                          transform: isBadgeOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>

                    {/* Badge list */}
                    {isBadgeOpen && (
                      <div style={{
                        marginTop: 6,
                        padding: '12px 14px',
                        background: `${color}08`,
                        border: `1px solid ${color}25`,
                        borderRadius: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                        animation: 'fadeInUp 0.25s ease forwards',
                      }}>
                        {cert.badges.map((badge, bi) => (
                          <div key={bi} style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            fontFamily: 'var(--font-body)', fontSize: '0.82rem',
                            color: 'var(--white-muted)',
                          }}>
                            <span style={{
                              width: 6, height: 6, borderRadius: '50%',
                              background: color, flexShrink: 0,
                              boxShadow: `0 0 6px ${color}`,
                            }} />
                            {badge}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Bottom: date + credential ID */}
                <div style={{
                  borderTop: '1px solid var(--blue-border)', paddingTop: 16,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--white-dim)', fontFamily: 'var(--font-body)' }}>
                    {cert.date}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.6rem',
                    color: 'var(--white-dim)', letterSpacing: '0.05em',
                  }}>{cert.credentialId}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}