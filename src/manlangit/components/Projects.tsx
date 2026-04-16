import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export function Projects() {
  const projects = [
    {
      title: 'UI of Enrollment System',
      description: 'Web-based UI Enrollment System',
      tags: ['WebRTC', 'Socket.io', 'React', 'Express'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      github: 'https://github.com/Ransuuuu/enrollment-ui-design.git',
      demo: 'https://enrollment-ui-design.vercel.app/',
    },
    {
      title: 'Login Dashboard',
      description: 'A cyberpunk frontend design of login dashboard',
      tags: ['Python', 'Raspberry Pi', 'MQTT', 'Flutter'],
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
      github: 'https://github.com/lancemanlangit/Dashboard.git',
      demo: 'https://dashboard12-six.vercel.app/',
    },
    {
      title: 'Crypto-Pulse',
      description: 'Secure and transparent voting platform leveraging blockchain technology for elections.',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      github: 'https://github.com/Ransuuuu/Crypto-Pulse',
      demo: 'https://cryptopulse-theta-jet.vercel.app/',
    },
    {
      title: 'DCMS',
      description: 'A database management consultation system for managing and optimizing database performance.',
      tags: ['Python', 'FastAPI', 'TensorFlow', 'Vue.js'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      github: 'https://github.com/lancemanlangit/Database-Consultation-Management-System.git',
      demo: '#',
    },
    {
      title: 'Cybersecurity Dashboard',
      description: 'Real-time security monitoring dashboard with threat detection and analysis capabilities.',
      tags: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      github: 'https://github.com/lancemanlangit/Cybersecurity-Dashboard.git',
      demo: 'https://cybersecuritydashboard-i6mn3jf6i-ransuuuus-projects.vercel.app/',
    },
  ];

  return (
    // FIX 5: section gets generous padding
    <section id="projects" style={{ minHeight: '100vh', padding: '6rem 2rem 4rem', position: 'relative', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 className="section-title">Projects</h2>
          {/* FIX 2: neon divider under section title */}
          <div style={{ width: '5rem', height: '4px', background: '#00ff00', margin: '0.75rem auto 0', boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00' }} />
        </motion.div>

        {/* FIX 5: grid with proper gap */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              style={{
                background: 'rgba(0,0,0,0.8)',
                border: '1px solid rgba(0,255,0,0.2)',
                borderRadius: '14px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#00ff00';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0,255,0,0.35), 0 0 48px rgba(0,255,0,0.15)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,0,0.2)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', height: '192px', flexShrink: 0 }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }} />

                {/* FIX 5: GitHub & External link buttons — always visible, bottom-right */}
                <div style={{ position: 'absolute', bottom: '0.85rem', right: '0.85rem', display: 'flex', gap: '0.5rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    title="View on GitHub"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.35rem',
                      padding: '0.45rem 0.8rem',
                      background: 'rgba(0,0,0,0.85)',
                      border: '1px solid rgba(0,255,0,0.5)',
                      borderRadius: '6px',
                      color: '#00ff00',
                      fontSize: '0.72rem',
                      fontFamily: 'Orbitron, monospace',
                      textDecoration: 'none',
                      transition: 'all 0.25s',
                      backdropFilter: 'blur(4px)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = '#00ff00';
                      (e.currentTarget as HTMLElement).style.color = '#000';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.85)';
                      (e.currentTarget as HTMLElement).style.color = '#00ff00';
                    }}
                  >
                    <FaGithub size={13} /> Code
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      title="Live Demo"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.35rem',
                        padding: '0.45rem 0.8rem',
                        background: 'rgba(0,0,0,0.85)',
                        border: '1px solid rgba(0,255,0,0.5)',
                        borderRadius: '6px',
                        color: '#00ff00',
                        fontSize: '0.72rem',
                        fontFamily: 'Orbitron, monospace',
                        textDecoration: 'none',
                        transition: 'all 0.25s',
                        backdropFilter: 'blur(4px)',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = '#00ff00';
                        (e.currentTarget as HTMLElement).style.color = '#000';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.85)';
                        (e.currentTarget as HTMLElement).style.color = '#00ff00';
                      }}
                    >
                      <FaExternalLinkAlt size={11} /> Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, transition: 'color 0.3s' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.65, flex: 1 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.7rem', padding: '0.25rem 0.65rem',
                        border: '1px solid rgba(0,255,0,0.3)', color: '#00ff00',
                        borderRadius: '9999px', transition: 'background 0.2s',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
