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

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const socialLinks = [
    { icon: FaGithub,   label: 'GitHub',   href: 'https://github.com/Ransuuuu',                                        color: '#00ff00' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lance-kelly-manlangit-05650528a/',       color: '#00ff00' },
    { icon: FaTwitter,  label: 'Twitter',  href: 'https://twitter.com',                                                 color: '#00ff00' },
    { icon: FaEnvelope, label: 'Email',    href: 'mailto:lancekellymanlangit@gmail.com',                                color: '#00ff00' },
  ]

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 opacity-5"><div className="grid-animation" /></div>
      <div className="container mx-auto px-4 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title text-center mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-12 neon-glow" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
                { id: 'email',   label: 'Email',   type: 'email', placeholder: 'your.email@example.com' },
              ].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-gray-300 mb-2">{field.label}</label>
                  <input type={field.type} id={field.id} name={field.id} value={formData[field.id]} onChange={handleChange} required
                    className="neon-input w-full px-4 py-3 bg-transparent border-2 border-gray-700 rounded-lg text-white focus:border-[#00ff00] focus:outline-none transition-all duration-300"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                  className="neon-input w-full px-4 py-3 bg-transparent border-2 border-gray-700 rounded-lg text-white focus:border-[#00ff00] focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="neon-button w-full px-8 py-3 border-2 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                <Send size={20} /> Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="futuristic-card p-8 mb-8">
              <h3 className="text-2xl mb-4 text-[#00ff00]">Let's Connect!</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
              <div className="space-y-3">
                <p className="text-gray-400"><span className="text-[#00ff00]">📧</span> lancekellymanlangit@gmail.com</p>
                <p className="text-gray-400"><span className="text-[#00ff00]">📱</span> 0999-899-9997</p>
                <p className="text-gray-400"><span className="text-[#00ff00]">🏠</span> From: Jose Panganiban, Camarines Norte, Bicol</p>
                <p className="text-gray-400"><span className="text-[#00ff00]">📍</span> Currently in: Sta Mesa, Manila</p>
                <p className="text-gray-400"><span className="text-[#00ff00]">🎓</span> Technological Institute of the Philippines Manila</p>
                <p className="text-gray-400"><span className="text-[#00ff00]">💼</span> Computer Engineering Student (2nd Year)</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {socialLinks.map((social, i) => (
                <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 10 }} className="futuristic-card p-4 flex items-center justify-center group cursor-pointer">
                  <social.icon className="text-gray-400 group-hover:text-[#00ff00] transition-colors duration-300" size={28} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-20 text-center text-gray-500 pb-8">
        <p>© 2026 Lance Kelly P. Manlangit. Built with passion and neon green.</p>
      </motion.footer>
    </section>
  )
}