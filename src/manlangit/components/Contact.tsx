import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
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

  const contactDetails = [
    { Icon: Mail,          text: 'lancekellymanlangit@gmail.com' },
    { Icon: Phone,         text: '0999-899-9997' },
    { Icon: MapPin,        text: 'From: Jose Panganiban, Camarines Norte, Bicol' },
    { Icon: MapPin,        text: 'Currently in: Sta Mesa, Manila' },
    { Icon: GraduationCap, text: 'Technological Institute of the Philippines Manila' },
    { Icon: Briefcase,     text: 'Computer Engineering Student (2nd Year)' },
  ];

  const fieldBase: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1.1rem',
    background: 'rgba(0, 255, 0, 0.04)',
    border: '1.5px solid rgba(0,255,0,0.25)',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    boxSizing: 'border-box',
    display: 'block',
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#00ff00';
    e.currentTarget.style.boxShadow = '0 0 12px rgba(0,255,0,0.4)';
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(0,255,0,0.25)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <>
      {/* ── Contact Section ── */}
      <section
        id="contact"
        style={{ minHeight: '100vh', padding: '5rem 1.5rem 4rem', position: 'relative', boxSizing: 'border-box' }}
      >
        {/* Background grid */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }}>
          <div className="grid-animation" />
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <h2 className="section-title">Get in Touch</h2>
            <div className="m-divider" />
            <p style={{ color: '#9ca3af', marginTop: '1rem', fontSize: '1rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div className="m-grid-2" style={{ gap: '3rem', alignItems: 'start' }}>

            {/* ── LEFT: Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Card wrapping the form */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(0,255,0,0.04) 0%, rgba(0,0,0,0.6) 100%)',
                border: '1px solid rgba(0,255,0,0.2)',
                borderRadius: '16px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
              }}>
                <h3 style={{ color: '#00ff00', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                  Send a Message
                </h3>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      textAlign: 'center', padding: '2rem',
                      color: '#00ff00', fontSize: '1.1rem',
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✓</div>
                    <p>Message sent! I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Name */}
                    <div>
                      <label style={{ display: 'block', color: '#d1d5db', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                        Name <span style={{ color: '#00ff00' }}>*</span>
                      </label>
                      <input
                        type="text" name="name" id="name"
                        value={formData.name} onChange={handleChange}
                        onFocus={handleFocus} onBlur={handleBlur}
                        required placeholder="Your full name"
                        style={fieldBase}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label style={{ display: 'block', color: '#d1d5db', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                        Email <span style={{ color: '#00ff00' }}>*</span>
                      </label>
                      <input
                        type="email" name="email" id="email"
                        value={formData.email} onChange={handleChange}
                        onFocus={handleFocus} onBlur={handleBlur}
                        required placeholder="your.email@example.com"
                        style={fieldBase}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', color: '#d1d5db', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                        Message <span style={{ color: '#00ff00' }}>*</span>
                      </label>
                      <textarea
                        name="message" id="message"
                        value={formData.message} onChange={handleChange}
                        onFocus={handleFocus} onBlur={handleBlur}
                        required rows={5}
                        placeholder="What's on your mind?"
                        style={{ ...fieldBase, resize: 'none' }}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        width: '100%', padding: '0.9rem',
                        border: '2px solid #00ff00',
                        background: 'transparent', color: '#00ff00',
                        borderRadius: '8px', fontSize: '1rem',
                        fontFamily: 'inherit', fontWeight: 700,
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', gap: '0.5rem',
                        cursor: 'pointer',
                        transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
                        letterSpacing: '0.05em',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = '#00ff00';
                        (e.currentTarget as HTMLButtonElement).style.color = '#000';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(0,255,0,0.5)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                        (e.currentTarget as HTMLButtonElement).style.color = '#00ff00';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                      }}
                    >
                      <Send size={18} />
                      SEND MESSAGE
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* ── RIGHT: Info + Social ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {/* Let's Connect card */}
              <div className="futuristic-card" style={{ padding: '1.75rem' }}>
                <h3 style={{ color: '#00ff00', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Let's Connect!
                </h3>
                <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {contactDetails.map(({ Icon, text }, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <Icon size={16} style={{ color: '#00ff00', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: 1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social icons */}
              <div>
                <p style={{ color: '#6b7280', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Find me on
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      style={{
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                        gap: '0.4rem', padding: '0.9rem 0.5rem',
                        background: 'rgba(0,255,0,0.04)',
                        border: '1px solid rgba(0,255,0,0.2)',
                        borderRadius: '10px',
                        color: '#9ca3af',
                        textDecoration: 'none',
                        fontSize: '0.65rem',
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#00ff00';
                        e.currentTarget.style.borderColor = '#00ff00';
                        e.currentTarget.style.boxShadow = '0 0 12px rgba(0,255,0,0.3)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#9ca3af';
                        e.currentTarget.style.borderColor = 'rgba(0,255,0,0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <social.icon size={22} />
                      <span>{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,255,0,0.03) 100%)',
        borderTop: '1px solid rgba(0,255,0,0.15)',
        padding: '2.5rem 1.5rem',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Top row */}
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'space-between', alignItems: 'center',
            gap: '1.5rem', marginBottom: '1.5rem',
          }}>
            {/* Brand */}
            <div>
              <p className="neon-text" style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                &lt;Lance Kelly /&gt;
              </p>
              <p style={{ color: '#6b7280', fontSize: '0.8rem' }}>
                Aspiring Computer Engineer · TIP Manila
              </p>
            </div>

            {/* Quick links */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['#home', '#about', '#projects', '#skills', '#contact'].map(href => (
                <a
                  key={href}
                  href={href}
                  style={{ color: '#6b7280', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00ff00')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                >
                  {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
                </a>
              ))}
            </div>

            {/* Social mini-icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{ color: '#6b7280', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00ff00')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(0,255,0,0.1)', marginBottom: '1.25rem' }} />

          {/* Bottom row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
            <p style={{ color: '#4b5563', fontSize: '0.8rem' }}>
              © 2026 Lance Kelly P. Manlangit. All rights reserved.
            </p>
            <p style={{ color: '#4b5563', fontSize: '0.8rem' }}>
              Built with <span style={{ color: '#00ff00' }}>React</span> · Powered by <span style={{ color: '#00ff00' }}>passion & neon green</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}