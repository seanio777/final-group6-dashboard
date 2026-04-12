import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

const education = [
  {
    level: 'Tertiary',
    school: 'Technological Institute of the Philippines-Manila',        // ← REPLACE
    course: 'BS Computer Engineering',
    year: '2024 - Present',
    location: 'Casal St., Quiapo, Manila',             // ← REPLACE
    status: 'Currently Enrolled',
    units: '2nd Year',
    color: 'var(--cyan-accent)',
  },
  {
    level: 'Senior High School',
    school: 'Parañaque National High School-Main', // ← REPLACE
    course: 'STEM Strand',
    year: '2022 - 2024',
    location: 'San Dionisio, Paranaque',             // ← REPLACE
    status: 'Graduated',
    units: 'With High Honors',
    color: 'var(--blue-bright)',
  },
  {
    level: 'Junior High School',
    school: 'Parañaque National High School-STE Program', // ← REPLACE
    course: 'Science, Technology, and Engineering',
    year: '2017 - 2022',
    location: 'San Dionisio, Parañaque',             // ← REPLACE
    status: 'Graduated',
    units: 'With High Honors',
    color: 'var(--blue-light)',
  },
  {
    level: 'Elementary',
    school: 'San Isidro Elementary School',  // ← REPLACE
    course: 'Primary Education',
    year: '2015 - 2017',
    location: 'San Isidro, Parañaque',             // ← REPLACE
    status: 'Graduated',
    units: 'Salutatorian',
    color: 'var(--blue-ice)',
  },
  {
    level: 'Elementary',
    school: 'Masville Elementary School',  // ← REPLACE
    course: 'Primary Education',
    year: '2011 - 2015',
    location: 'San Isidro, Parañaque',             // ← REPLACE
    status: 'Completed',
    units: '',
    color: 'var(--blue-ice)',
  },
]

export default function Academic() {
  return (
    <section id="academic" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(30,91,255,0.08) 0%, transparent 70%)',
        top: '-10%',
        right: '-5%',
      }} />
      <div className="grid-bg" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">
          <FiBook size={12} /> Academic Background
        </div>
        <h2 className="section-title">
          Educational <span>Journey</span>
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, var(--cyan-accent), var(--blue-glow), transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {education.map((edu, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: -39,
                  top: 28,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: edu.color,
                  border: `2px solid var(--blue-dark)`,
                  boxShadow: `0 0 10px ${edu.color}`,
                }} />

                <div className="card" style={{
                  borderLeft: `3px solid ${edu.color}`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                    <div>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.2em',
                        color: edu.color,
                        textTransform: 'uppercase',
                      }}>{edu.level}</span>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: 'var(--white)',
                        marginTop: 4,
                      }}>{edu.school}</h3>
                      <p style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.95rem',
                        color: 'var(--blue-light)',
                        marginTop: 2,
                      }}>{edu.course}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className="tag" style={{ marginBottom: 8, display: 'block' }}>{edu.status}</span>
                      {edu.units && (
                        <span style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.8rem',
                          color: 'var(--white-muted)',
                        }}>{edu.units}</span>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--white-dim)' }}>
                      <FiCalendar size={13} /> {edu.year}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--white-dim)' }}>
                      <FiMapPin size={13} /> {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}