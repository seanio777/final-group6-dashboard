import { FiDownload, FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
    }}>
      <div className="grid-bg" />
      <div className="glow-orb" style={{
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(30,91,255,0.15) 0%, transparent 70%)',
        top: '50%', right: '-10%', transform: 'translateY(-50%)',
      }} />
      <div className="glow-orb" style={{
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        bottom: '10%', left: '5%',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      <div className="container" style={{
        display: 'flex', alignItems: 'center', gap: 80,
        position: 'relative', zIndex: 2,
        flexWrap: 'wrap',
      }}>
        {/* Left: Text */}
        <div style={{ flex: 1, minWidth: 280, animation: 'fadeInLeft 1s ease forwards' }}>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,212,255,0.08)',
            border: '1px solid rgba(0,212,255,0.2)',
            borderRadius: 4, padding: '8px 16px', marginBottom: 32,
          }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 8px #22c55e' }} />
            <span style={{ fontFamily:'var(--font-display)', fontSize:'0.65rem', letterSpacing:'0.15em', color:'var(--cyan-accent)' }}>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          <p style={{ fontFamily:'var(--font-heading)', fontSize:'1.1rem', color:'var(--white-muted)', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:12 }}>
            Hello, I'm
          </p>

          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2.2rem, 6vw, 5rem)', fontWeight:900, lineHeight:1, marginBottom:8, letterSpacing:'-0.02em' }}>
            <span style={{ color:'var(--white)' }}>JOSE ANTONIO</span><br />
            <span style={{ background:'linear-gradient(135deg, var(--blue-bright), var(--cyan-accent))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              VERANO
            </span>
          </h1>

          <div style={{ fontFamily:'var(--font-heading)', fontSize:'1.1rem', fontWeight:600, color:'var(--blue-ice)', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:28 }}>
            BS Computer Engineering Student
          </div>

          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--white-muted)',
            lineHeight: 1.9,
            maxWidth: 520,
            marginBottom: 40,
          }}>
            <p style={{ marginBottom: 12 }}>
              His name is <strong style={{ color:'var(--white)' }}>Jose Antonio C. Verano</strong>, born on{' '}
              <strong style={{ color:'var(--white)' }}>November 5, 2006</strong>, and currently
              residing in <strong style={{ color:'var(--white)' }}>Paranaque City, Metro Manila</strong>.
            </p>
            <p style={{ marginBottom: 12 }}>
              He began his elementary education at <strong style={{ color:'var(--white)' }}>Masville Elementary School</strong>,
              completing Grades 1 to 4 before transferring to{' '}
              <strong style={{ color:'var(--white)' }}>San Isidro Elementary School</strong>, where he finished
              his elementary journey (Grades 5 to 6).
            </p>
            <p style={{ marginBottom: 12 }}>
              He then passed the entrance examination for the{' '}
              <strong style={{ color:'var(--white)' }}>STE Program at Parañaque National High School</strong>,
              where he completed his Junior High School education{' '}
              <strong style={{ color:'var(--cyan-accent)' }}>with High Honors</strong>.
              He continued his Senior High School journey at{' '}
              <strong style={{ color:'var(--white)' }}>Parañaque National High School – Main Campus</strong>,
              graduating likewise{' '}
              <strong style={{ color:'var(--cyan-accent)' }}>with High Honors</strong>.
            </p>
            <p>
              He is currently enrolled in{' '}
              <strong style={{ color:'var(--white)' }}>BS Computer Engineering</strong> at the{' '}
              <strong style={{ color:'var(--white)' }}>Technological Institute of the Philippines – Manila</strong>,
              with an expected graduation of{' '}
              <strong style={{ color:'var(--white)' }}>2028</strong>.{' '}
              After graduation, he aspires to{' '}
              <strong style={{ color:'var(--white)' }}>be a Cybersecurity Analyst</strong>.
            </p>
          </div>

          <div style={{ display:'flex', gap:16, flexWrap:'wrap', marginBottom:48 }}>
            <a href="#contact" className="btn-primary">
              Get In Touch <FiArrowDown size={16} />
            </a>
            <a href="/resume.pdf" className="btn-outline" download>
              Download CV <FiDownload size={16} />
            </a>
          </div>

          {/* Socials — hidden on mobile to prevent overlap with SCROLL indicator */}
          <div className="hero-socials" style={{ display:'flex', gap:16, alignItems:'center', flexWrap:'wrap' }}>
            <span style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', letterSpacing:'0.2em', color:'var(--white-dim)' }}>FOLLOW</span>
            <div style={{ width:30, height:1, background:'var(--blue-border)' }} />
            {[
              { icon:<FaGithub size={18}/>, href:'https://github.com/seanio777', label:'GitHub' },
              { icon:<FaLinkedin size={18}/>, href:'https://www.linkedin.com/in/ja-verano/', label:'LinkedIn' },
              { icon:<FaFacebook size={18}/>, href:'https://web.facebook.com/j.v.970', label:'Facebook' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                color:'var(--white-dim)', transition:'color 0.3s ease', cursor:'none',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan-accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--white-dim)'}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div style={{ flexShrink:0, animation:'fadeInUp 1.2s ease forwards', position:'relative' }}>
          <div style={{ position:'absolute', inset:-20, borderRadius:'50%', border:'1px solid rgba(30,91,255,0.2)' }} />
          <div style={{ position:'absolute', inset:-40, borderRadius:'50%', border:'1px solid rgba(30,91,255,0.1)' }} />
          <div style={{
            width: 'clamp(220px, 30vw, 320px)',
            height: 'clamp(270px, 37vw, 380px)',
            borderRadius: 20, overflow:'hidden',
            border:'2px solid var(--blue-border)',
            background:'var(--blue-card)',
            position:'relative', animation:'pulse-glow 4s infinite',
          }}>
            <img src="/profile.jpg" alt="Profile" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.innerHTML = '<span style="font-size:5rem;display:flex;align-items:center;justify-content:center;height:100%">👤</span>'
              }}
            />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(2,11,24,0.6) 0%, transparent 60%)' }} />
          </div>
          <div style={{
            position:'absolute', bottom:-20, left:-40,
            background:'var(--blue-card)', border:'1px solid var(--blue-border)',
            borderRadius:10, padding:'12px 20px',
          }}>
            <div style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', color:'var(--cyan-accent)' }}>CPE</div>
            <div style={{ fontFamily:'var(--font-heading)', fontSize:'0.75rem', color:'var(--white-muted)', letterSpacing:'0.1em' }}>STUDENT</div>
          </div>
        </div>
      </div>

      {/* SCROLL indicator — hidden on mobile via CSS class */}
      <div className="scroll-indicator" style={{
        position:'absolute', bottom:40, left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:8,
        animation:'fadeInUp 1.5s ease forwards', zIndex:2,
      }}>
        <span style={{ fontFamily:'var(--font-display)', fontSize:'0.55rem', letterSpacing:'0.3em', color:'var(--white-dim)' }}>SCROLL</span>
        <div style={{ width:1, height:50, background:'linear-gradient(to bottom, var(--blue-bright), transparent)' }} />
      </div>
    </section>
  )
}