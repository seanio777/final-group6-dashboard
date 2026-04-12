import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Placeholder — wire up EmailJS or similar in a future version
    alert('Message sent! (UI prototype)')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>

      <div className="contact-grid">
        {/* Left — form */}
        <div className="contact-card contact-form-card">
          <h3>Let's Connect!</h3>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right — contact info */}
        <div className="contact-card contact-info-card">
          <h3>Contact Info</h3>
          <ul className="info-list">
            <li>📧 <a href="mailto:mcjsuing@tip.edu.ph">mcjsuing@tip.edu.ph</a></li>
            <li>📱 +63 929 627 7955</li>
            <li>🏠 1441 Kundiman St., Sampaloc Manila</li>
            <li>🎓 Technological Institute Of the Philippines - Manila</li>
          </ul>

          <div className="social-links">
            <a href="https://www.facebook.com/chryzllerjohn.suing" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/in/chryzller-john-suing-0927503a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/itzyourbabyboy_cj/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://github.com/mcjsuing-sketch" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      <p className="copyright">© 2026 | Designed with VS Code</p>
    </section>
  )
}