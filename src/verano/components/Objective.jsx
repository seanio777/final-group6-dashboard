import { FiTarget, FiCpu, FiCode, FiZap } from 'react-icons/fi'

const goals = [
  {
    icon: <FiCpu size={22} />,
    title: 'Technical Excellence',
    desc: 'To develop a strong foundation in both hardware and software systems, mastering the core principles of computer engineering.',
  },
  {
    icon: <FiCode size={22} />,
    title: 'Software Development',
    desc: 'To build practical programming skills and apply them in real-world embedded systems, applications, and digital solutions.',
  },
  {
    icon: <FiZap size={22} />,
    title: 'Innovation & Research',
    desc: 'To contribute to cutting-edge research and innovation in the field of computer engineering through collaborative projects.',
  },
]

export default function Objective() {
  return (
    <section id="objective" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
        top: '50%',
        left: '-5%',
        transform: 'translateY(-50%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div className="section-label">
              <FiTarget size={12} /> Objective
            </div>
            <h2 className="section-title" style={{ marginBottom: 28 }}>
              My Goals as a<br /><span>CPE Student</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--white-muted)',
              lineHeight: 1.9,
              marginBottom: 24,
            }}>
              {/* ← REPLACE with your actual objective */}
              As a Bachelor of Science in Computer Engineering student, my primary objective is to
              acquire comprehensive knowledge in both hardware and software disciplines. I aim to
              become a well-rounded engineer capable of designing, developing, and maintaining
              complex computer systems and embedded solutions.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--white-muted)',
              lineHeight: 1.9,
            }}>
              I strive to apply theoretical concepts to practical problems, collaborate effectively
              in team environments, and continuously grow through learning opportunities, internships,
              and academic excellence throughout my academic journey.
            </p>
          </div>

          {/* Right: Goal cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {goals.map((goal, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: 20, padding: '24px 28px' }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: 'rgba(30, 91, 255, 0.15)',
                  border: '1px solid rgba(30, 91, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan-accent)',
                  flexShrink: 0,
                }}>
                  {goal.icon}
                </div>
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--white)',
                    marginBottom: 8,
                  }}>{goal.title}</h4>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--white-muted)',
                    lineHeight: 1.7,
                  }}>{goal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}