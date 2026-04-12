import { motion } from 'framer-motion'; // Changed from 'motion/react'
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: FaGithub,   label: 'GitHub',   href: 'https://github.com/Ransuuuu' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lance-kelly-manlangit-05650528a/' },
    { icon: FaTwitter,  label: 'Twitter',  href: 'https://twitter.com' },
    { icon: Mail,       label: 'Email',    href: 'mailto:lancekellymanlangit@gmail.com' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative bg-black overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 grid-animation" style={{ backgroundImage: 'radial-gradient(#00ff00 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Get in Touch</h2>
          <div className="w-20 h-1 bg-[#00ff00] mx-auto mb-12 shadow-[0_0_10px_#00ff00]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name',  label: 'Name',  type: 'text',  placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
              ].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-gray-300 mb-2">{field.label}</label>
                  <input 
                    type={field.type} 
                    id={field.id} 
                    name={field.id} 
                    value={formData[field.id]} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-lg text-white focus:border-[#00ff00] focus:outline-none transition-all duration-300"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-lg text-white focus:border-[#00ff00] focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px #00ff00" }} 
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 border-2 border-[#00ff00] text-[#00ff00] font-bold hover:bg-[#00ff00] hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} /> Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="flex flex-col justify-center"
          >
            <div className="bg-gray-900/40 border border-gray-800 p-8 mb-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#00ff00]">Let's Connect!</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="text-[#00ff00]">📧</span> lancekellymanlangit@gmail.com
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="text-[#00ff00]">📱</span> 0999-899-9997
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-[#00ff00]">📍</span> Sta Mesa, Manila | Jose Panganiban, Bicol
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-[#00ff00]">🎓</span> TIP Manila - CpE Student (2nd Year)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={social.label} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }} 
                    className="bg-gray-900/60 border border-gray-800 p-4 rounded-lg flex items-center justify-center group hover:border-[#00ff00] transition-colors"
                  >
                    <Icon className="text-gray-400 group-hover:text-[#00ff00] transition-colors duration-300" size={28} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.footer 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        className="mt-20 text-center text-gray-500 pb-8"
      >
        <p>© 2026 Lance Kelly P. Manlangit. Built with passion and neon green.</p>
      </motion.footer>
    </section>
  );
}