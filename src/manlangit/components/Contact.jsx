import { motion } from 'motion/react'
import { Send } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = e => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const socialLinks = [
    { icon: FaGithub,   label: 'GitHub',   href: 'https://github.com/Ransuuuu' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lance-kelly-manlangit-05650528a/' },
    { icon: FaTwitter,  label: 'Twitter',  href: 'https://twitter.com' },
    { icon: FaEnvelope, label: 'Email',    href: 'mailto:lancekellymanlangit@gmail.com' },
  ]

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem', background: 'transparent',
    border: '2px solid #374151', borderRadius: '8px', color: '#fff',
    fontFamily: 'Orbitron, monospace', fontSize: '0.9rem', boxSizing: 'border-box',
    outline: 'none', transition: 'border-color 0.3s',
  }

  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}><div className="grid-animation" /></div>
      <div className="m-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="m-text-center m-mb-4">
          <h2 className="section-title">Get in Touch</h2>
          <div className="m-divider" />
        </motion.div>

        <div className="m-grid-2" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { id: 'name',  label: 'Name',  type: 'text',  placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
              ].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} style={{ display: 'block', color: '#d1d5db', marginBottom: '0.5rem' }}>{field.label}</label>
                  <input type={field.type} id={field.id} name={field.id} value={formData[field.id]} onChange={handleChange} required
                    placeholder={field.placeholder} className="neon-input" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#00ff00'}
                    onBlur={e => e.target.style.borderColor = '#374151'}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" style={{ display: 'block', color: '#d1d5db', marginBottom: '0.5rem' }}>Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                  placeholder="Your message..." className="neon-input" style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => e.target.style.borderColor = '#00ff00'}
                  onBlur={e => e.target.style.borderColor = '#374151'}
                />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="neon-button"
                style={{ width: '100%', padding: '0.75rem 2rem', border: '2px solid #00ff00', color: '#00ff00', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: 'Orbitron, monospace', fontSize: '1rem', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#00ff00'; e.currentTarget.style.color = '#000'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#00ff00'; }}
              >
                <Send size={20} /> Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="futuristic-card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#00ff00' }}>Let's Connect!</h3>
              <p style={{ color: '#d1d5db', marginBottom: '1.5rem', lineHeight: 1.7 }}>I'm always open to discussing new projects, creative ideas, or opportunities.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icon: '📧', text: 'lancekellymanlangit@gmail.com' },
                  { icon: '📱', text: '0999-899-9997' },
                  { icon: '🏠', text: 'From: Jose Panganiban, Camarines Norte, Bicol' },
                  { icon: '📍', text: 'Currently in: Sta Mesa, Manila' },
                  { icon: '🎓', text: 'Technological Institute of the Philippines Manila' },
                  { icon: '💼', text: 'Computer Engineering Student (2nd Year)' },
                ].map((item, i) => (
                  <p key={i} style={{ color: '#9ca3af' }}><span style={{ color: '#00ff00' }}>{item.icon}</span> {item.text}</p>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {socialLinks.map((social, i) => (
                <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  className="futuristic-card"
                  style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <social.icon style={{ color: '#9ca3af', transition: 'color 0.3s' }} size={28}
                    onMouseEnter={e => e.target.style.color = '#00ff00'}
                    onMouseLeave={e => e.target.style.color = '#9ca3af'}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ marginTop: '5rem', textAlign: 'center', color: '#6b7280', paddingBottom: '2rem' }}>
          <p>© 2026 Lance Kelly P. Manlangit. Built with passion and neon green.</p>
        </motion.footer>
      </div>
    </section>
  )
}