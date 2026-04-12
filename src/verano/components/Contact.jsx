import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

// ← REPLACE ALL values with your actual contact info
const contactInfo = [
  { icon: <FiMail size={18} />, label: 'Email', value: 'ajverano01@gmail.com', href: 'mailto:ajverano01@gmail.com' },
  { icon: <FiPhone size={18} />, label: 'Phone', value: '+63 994 639 1670', href: 'tel:+639946391670' },
  { icon: <FiMapPin size={18} />, label: 'Location', value: 'Parañaque City, Metro Manila, Philippines', href: '#' },
]

const socials = [
  { icon: <FaGithub size={22} />, label: 'GitHub', href: 'https://github.com/seanio777', color: '#e5e7eb' },
  { icon: <FaLinkedin size={22} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ja-verano/', color: '#0a66c2' },
  { icon: <FaFacebook size={22} />, label: 'Facebook', href: 'https://web.facebook.com/j.v.970', color: '#1877f2' },
  { icon: <FaInstagram size={22} />, label: 'Instagram', href: 'https://www.instagram.com/_jcv6?igsh=MXdsNmsxYzkya3VpOA==', color: '#e1306c' },
  { icon: <FaTwitter size={22} />, label: 'Twitter/X', href: 'https://x.com/jaeprvt_', color: '#1da1f2' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg" />
      <div className="glow-orb" style={{
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(30,91,255,0.12) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label">
          <FiSend size={12} /> Contact
        </div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Let's <span>Connect</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* Left: Info */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--white-muted)',
              lineHeight: 1.9,
              marginBottom: 40,
            }}>
              I'm open to opportunities, collaborations, and academic partnerships.
              Feel free to reach out through any of the channels below.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 48 }}>
              {contactInfo.map((c, i) => (
                <a key={i} href={c.href} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  textDecoration: 'none',
                  cursor: 'none',
                }}>
                  <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: 12,
                    background: 'rgba(30, 91, 255, 0.1)',
                    border: '1px solid var(--blue-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cyan-accent)',
                    transition: 'all 0.3s ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(30,91,255,0.2)'; e.currentTarget.style.borderColor = 'var(--blue-bright)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(30,91,255,0.1)'; e.currentTarget.style.borderColor = 'var(--blue-border)' }}
                  >{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--white-dim)', textTransform: 'uppercase', marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: 'var(--white)' }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--white-dim)', textTransform: 'uppercase', marginBottom: 20 }}>
                Find me on
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    title={s.label}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: 'var(--blue-card)',
                      border: '1px solid var(--blue-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--white-muted)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.boxShadow = `0 0 15px ${s.color}40` }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--white-muted)'; e.currentTarget.style.borderColor = 'var(--blue-border)'; e.currentTarget.style.boxShadow = 'none' }}
                  >{s.icon}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Simple contact form */}
          <div className="card">
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.3rem',
              fontWeight: 600,
              color: 'var(--white)',
              marginBottom: 28,
            }}>Send a Message</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { label: 'Your Name', type: 'text', placeholder: 'Juan Dela Cruz' },
                { label: 'Email Address', type: 'email', placeholder: 'juan@email.com' },
                { label: 'Subject', type: 'text', placeholder: 'Regarding...' },
              ].map((field) => (
                <div key={field.label}>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: 'var(--white-dim)',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}>{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%',
                      background: 'rgba(10, 22, 40, 0.8)',
                      border: '1px solid var(--blue-border)',
                      borderRadius: 6,
                      padding: '12px 16px',
                      color: 'var(--white)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      cursor: 'none',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--blue-bright)'}
                    onBlur={e => e.target.style.borderColor = 'var(--blue-border)'}
                  />
                </div>
              ))}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  color: 'var(--white-dim)',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message here..."
                  style={{
                    width: '100%',
                    background: 'rgba(10, 22, 40, 0.8)',
                    border: '1px solid var(--blue-border)',
                    borderRadius: 6,
                    padding: '12px 16px',
                    color: 'var(--white)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease',
                    cursor: 'none',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--blue-bright)'}
                  onBlur={e => e.target.style.borderColor = 'var(--blue-border)'}
                />
              </div>

              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <FiSend size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}