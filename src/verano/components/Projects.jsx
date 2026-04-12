import { FiGithub, FiExternalLink, FiCode, FiFolder, FiUsers, FiMonitor, FiClipboard, FiTrendingUp, FiHeart } from 'react-icons/fi'
import { FaGamepad, FaNewspaper } from 'react-icons/fa'

// ← REPLACE all entries with your actual projects
const projects = [
  {
    title: 'Mr. Bunny: A Text-Based Horror Game',
    description:
      'A choice-driven text-based horror game written in C++. Players navigate through a day and night cycle inside the house of Mr. Bunny. Every decision affects the player\'s HP, leading to multiple outcomes and a chilling finale.',
    tech: ['C++', 'Functions', 'Control Flow', 'Game Logic'],
    icon: <FaGamepad size={22} />,
    color: '#f87171',
    github: 'https://github.com/seanio777/mr-bunny-game.git',
    demo: '',
    status: 'Completed',
    year: '2024',
    image: '/evil bunny.jpg',
  },
  {
    title: 'Bullet Rush',
    description:
      'A 3D first-person shooter game built with Python and the Ursina Engine. Features enemy AI, a health and ammo system, score tracking, a high score board, level progression, and pause/restart functionality.',
    tech: ['Python', 'Ursina Engine', 'OOP', '3D Game Dev', 'Group Project'],
    icon: <FaGamepad size={22} />,
    color: '#f87171',
    github: 'https://github.com/seanio777/bullet-rush.git',
    demo: '',
    status: 'Completed',
    year: '2024',
    image: '/bullet-rush.png',
  },
  {
    title: 'Guidance Counseling Appointment System',
    description:
      'A console-based appointment management system built in C++ for student-counselor scheduling. Implements six core data structures: Vector, Queue, Stack, Linked List, Binary Search Tree, and Graph.',
    tech: ['C++', 'Data Structures', 'OOP', 'BST', 'Graph', 'Group Project'],
    icon: <FiUsers size={22} />,
    color: '#34d399',
    github: 'https://github.com/seanio777/guidance-counseling-system.git',
    demo: '',
    status: 'Completed',
    year: '2024',
    image: '/counseling.png',
  },
  {
    title: 'SkyLine Analytics — Login & Dashboard UI',
    description:
      'A React-based enterprise login and analytics dashboard UI featuring glassmorphism design, simulated authentication with loading states, error handling with shake animation, and a mock analytics dashboard.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Glassmorphism'],
    icon: <FiMonitor size={22} />,
    color: '#10b981',
    github: 'https://github.com/seanio777/project-gatekeeper.git',
    demo: 'https://seanio777.github.io/project-gatekeeper/',
    status: 'Completed',
    year: '2024',
    image: '/login-ui.png',
  },
  {
    title: 'ADEi University — Student Enrollment Portal',
    description:
      'A fully responsive React-based student enrollment form featuring dynamic college and degree program dropdowns, Philippine mobile and landline input masking, and real-time field validation.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Responsive Design'],
    icon: <FiClipboard size={22} />,
    color: '#0d6efd',
    github: 'https://github.com/seanio777/enrollment-ui-design.git',
    demo: 'https://adei-enrollment-form.netlify.app/',
    status: 'Completed',
    year: '2024',
    image: '/adei-enrolment.png',
  },
  {
    title: 'CryptoPulse — Live Crypto Dashboard',
    description:
      'A real-time cryptocurrency dashboard powered by the CoinGecko API. Features live price tracking for the top 10 coins, multi-currency support, switchable line and bar charts, and a dedicated market analysis page.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'CoinGecko API', 'React Router'],
    icon: <FiTrendingUp size={22} />,
    color: '#22d3ee',
    github: 'https://github.com/seanio777/crypto-pulse.git',
    demo: 'https://crypto-pulse-five-eosin.vercel.app/',
    status: 'Completed',
    year: '2025',
    image: '/crypto-pulse.png',
  },
  {
    title: 'Palazzo Verde — Wedding RSVP Website',
    description:
      'An elegant wedding invitation and RSVP web app built with React. Features a cinematic hero section, venue locator, attire guide, and a refined RSVP form with attendance tracking and personalized success messages.',
    tech: ['React', 'Vite', 'CSS', 'Google Maps'],
    icon: <FiHeart size={22} />,
    color: '#C5A059',
    github: 'https://github.com/seanio777/palazzo-rsvp.git',
    demo: 'https://palazzo-rsvp.vercel.app/',
    status: 'In Progress',
    year: '2026',
    image: '/palazzo-rsvp.png',
  },
  /*{
    title: 'Project Gatekeeper',
    description:
      'A web-based application built with React and Vite. [Add your description here — what does it do? What problem does it solve?]',
    tech: ['React', 'Vite', 'JavaScript', 'CSS'],
    icon: <FiCode size={22} />,
    color: '#a78bfa',
    github: 'https://github.com/seanio777/project-gatekeeper',
    demo: '',
    status: 'Completed',
    year: '2024',
    image: '',
  },*/
]

const statusColors = {
  Completed:    { bg:'rgba(34,197,94,0.1)',  border:'rgba(34,197,94,0.3)',  text:'#22c55e' },
  'In Progress':{ bg:'rgba(251,191,36,0.1)', border:'rgba(251,191,36,0.3)', text:'#fbbf24' },
  Ongoing:      { bg:'rgba(96,165,250,0.1)', border:'rgba(96,165,250,0.3)', text:'#60a5fa' },
}

export default function Projects() {
  return (
    <section id="projects" style={{ position:'relative', overflow:'hidden' }}>
      <div className="grid-bg" />
      <div className="glow-orb" style={{
        width:500, height:500,
        background:'radial-gradient(circle, rgba(30,91,255,0.1) 0%, transparent 70%)',
        top:'20%', right:'-10%',
      }} />
      <div className="glow-orb" style={{
        width:300, height:300,
        background:'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
        bottom:'10%', left:'5%',
      }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <div className="section-label">
          <FiCode size={12} /> Projects
        </div>
        <h2 className="section-title">
          Things I've <span>Built</span>
        </h2>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap:28,
        }}>
          {projects.map((project, i) => {
            const sc = statusColors[project.status] || statusColors['Completed']
            return (
              <div key={i} className="card" style={{ display:'flex', flexDirection:'column', minWidth:0 }}>

                {/* ── Image Preview Placeholder ── */}
                <div style={{
                  width: '100%',
                  height: 160,
                  borderRadius: 8,
                  overflow: 'hidden',
                  marginBottom: 20,
                  background: 'linear-gradient(135deg, var(--blue-mid), var(--blue-card))',
                  border: '1px dashed var(--blue-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  position: 'relative',
                  flexShrink: 0,
                  transition: 'border-color 0.3s ease',
                }}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width:'100%', height:'100%', objectFit:'cover' }}
                    />
                  ) : (
                    <>
                      {/* Grid pattern inside placeholder */}
                      <div style={{
                        position:'absolute', inset:0,
                        backgroundImage:'linear-gradient(rgba(30,91,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,91,255,0.04) 1px, transparent 1px)',
                        backgroundSize:'20px 20px',
                      }} />
                      <span style={{ fontSize:'1.8rem', opacity:0.3, position:'relative', zIndex:1 }}>🖼️</span>
                      <span style={{
                        fontFamily:'var(--font-display)',
                        fontSize:'0.5rem',
                        letterSpacing:'0.2em',
                        color:'var(--white-dim)',
                        textTransform:'uppercase',
                        position:'relative', zIndex:1,
                      }}>Preview Coming Soon</span>
                    </>
                  )}
                </div>

                {/* Top: icon + status + year */}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
                  <div style={{
                    width:52, height:52, borderRadius:12,
                    background:`${project.color}18`,
                    border:`1px solid ${project.color}30`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:project.color, flexShrink:0,
                  }}>
                    {project.icon}
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6 }}>
                    <span style={{
                      fontFamily:'var(--font-display)', fontSize:'0.58rem', letterSpacing:'0.12em',
                      color:sc.text, background:sc.bg, border:`1px solid ${sc.border}`,
                      padding:'4px 10px', borderRadius:4, textTransform:'uppercase',
                    }}>{project.status}</span>
                    <span style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', color:'var(--white-dim)', letterSpacing:'0.1em' }}>
                      {project.year}
                    </span>
                  </div>
                </div>

                <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.1rem', fontWeight:700, color:'var(--white)', marginBottom:10, lineHeight:1.3 }}>
                  {project.title}
                </h3>

                <p style={{ fontFamily:'var(--font-body)', fontSize:'0.85rem', color:'var(--white-muted)', lineHeight:1.75, marginBottom:20, flex:1 }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
                  {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                <div style={{ height:1, background:'var(--blue-border)', marginBottom:18 }} />

                {/* Links */}
                <div style={{ display:'flex', gap:16 }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" style={{
                      display:'flex', alignItems:'center', gap:6,
                      fontFamily:'var(--font-heading)', fontSize:'0.82rem', fontWeight:600,
                      color:'var(--white-muted)', textDecoration:'none', letterSpacing:'0.05em',
                      transition:'color 0.3s ease', cursor:'none',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--white-muted)'}
                    >
                      <FiGithub size={15} /> View Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" style={{
                      display:'flex', alignItems:'center', gap:6,
                      fontFamily:'var(--font-heading)', fontSize:'0.82rem', fontWeight:600,
                      color:'var(--white-muted)', textDecoration:'none', letterSpacing:'0.05em',
                      transition:'color 0.3s ease', cursor:'none',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--white-muted)'}
                    >
                      <FiExternalLink size={15} /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span style={{ fontFamily:'var(--font-body)', fontSize:'0.8rem', color:'var(--white-dim)', fontStyle:'italic' }}>
                      Source code available upon request
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop:48, textAlign:'center',
          padding:'24px 32px',
          background:'rgba(13,31,60,0.5)',
          border:'1px solid var(--blue-border)',
          borderRadius:12,
        }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.9rem', color:'var(--white-muted)', lineHeight:1.7 }}>
            More projects are being developed and will be added soon.{' '}
            <a href="https://github.com/seanio777" target="_blank" rel="noreferrer" style={{
              color:'var(--cyan-accent)', textDecoration:'none', fontWeight:500, cursor:'none',
            }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              Visit my GitHub
            </a>{' '}
            to see all repositories.
          </p>
        </div>
      </div>
    </section>
  )
}