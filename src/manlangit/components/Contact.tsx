import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: FaGithub,   label: 'GitHub',   href: 'https://github.com/Ransuuuu' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lance-kelly-manlangit-05650528a/' },
    { icon: FaTwitter,  label: 'Twitter',  href: 'https://twitter.com' },
    { icon: FaEnvelope, label: 'Email',    href: 'mailto:lancekellymanlangit@gmail.com' },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '2px solid #374151',
    borderRadius: '0.5rem',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    boxSizing: 'border-box',
    display: 'block',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: '#d1d5db',
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
  };

  return (
    <section id="contact" style={{ minHeight: '100vh', padding: '5rem 1.5rem', position: 'relative', boxSizing: 'border-box' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none' }}>
        <div className="grid-animation" />
      </div>

      {/* Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <div className="m-divider" />
        </motion.div>

        {/* Two-column layout: form | info */}
        <div className="m-grid-2" style={{ maxWidth: '1100px', margin: '0 auto', alignItems: 'start' }}>

          {/* ── Left: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Name */}
              <div>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  className="neon-input"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  style={inputStyle}
                  className="neon-input"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Your message..."
                  style={{ ...inputStyle, resize: 'none' }}
                  className="neon-input"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="neon-button"
                style={{
                  width: '100%',
                  padding: '0.875rem 2rem',
                  border: '2px solid #00ff00',
                  color: '#00ff00',
                  background: 'transparent',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#00ff00';
                  (e.currentTarget as HTMLButtonElement).style.color = 'black';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = '#00ff00';
                }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* ── Right: Info & Social ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Info card */}
            <div className="futuristic-card">
              <h3 style={{ color: '#00ff00', fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem' }}>
                Let's Connect!
              </h3>
              <p style={{ color: '#d1d5db', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { emoji: '📧', text: 'lancekellymanlangit@gmail.com' },
                  { emoji: '📱', text: '0999-899-9997' },
                  { emoji: '🏠', text: 'From: Jose Panganiban, Camarines Norte, Bicol' },
                  { emoji: '📍', text: 'Currently in: Sta Mesa, Manila' },
                  { emoji: '🎓', text: 'Technological Institute of the Philippines Manila' },
                  { emoji: '💼', text: 'Computer Engineering Student (2nd Year)' },
                ].map(item => (
                  <p key={item.emoji} style={{ color: '#9ca3af', fontSize: '0.9rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#00ff00', flexShrink: 0 }}>{item.emoji}</span>
                    {item.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="futuristic-card"
                  style={{
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00ff00')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                >
                  <social.icon size={26} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ marginTop: '5rem', textAlign: 'center', color: '#6b7280', paddingBottom: '2rem' }}
      >
        <p>© 2026 Lance Kelly P. Manlangit. Built with passion and neon green.</p>
      </motion.footer>
    </section>
  );
}