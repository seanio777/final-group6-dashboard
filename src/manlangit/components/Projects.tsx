import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export function Projects() {
  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'A smart task management system with AI-driven prioritization and scheduling recommendations.',
      tags: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Real-Time Collaboration Platform',
      description: 'Web-based platform enabling seamless real-time collaboration with video, chat, and whiteboard features.',
      tags: ['WebRTC', 'Socket.io', 'React', 'Express'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'IoT Home Automation',
      description: 'Smart home system integrating various IoT devices with voice control and mobile app interface.',
      tags: ['Python', 'Raspberry Pi', 'MQTT', 'Flutter'],
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Crypto-Pulse',
      description: 'Secure and transparent voting platform leveraging blockchain technology for elections.',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      github: 'https://github.com/Ransuuuu/Crypto-Pulse',
      demo: '#',
    },
    {
      title: 'Machine Learning Model Trainer',
      description: 'Interactive platform for training and deploying custom ML models without coding.',
      tags: ['Python', 'FastAPI', 'TensorFlow', 'Vue.js'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Cybersecurity Dashboard',
      description: 'Real-time security monitoring dashboard with threat detection and analysis capabilities.',
      tags: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" style={{ minHeight: '100vh', padding: '5rem 1.5rem', position: 'relative', boxSizing: 'border-box' }}>
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
          <h2 className="section-title">Projects</h2>
          <div className="m-divider" />
        </motion.div>

        {/* Projects grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="m-grid-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                /* equal-height cards */
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px 12px 0 0', height: '192px', flexShrink: 0 }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, black, rgba(0,0,0,0.5), transparent)',
                  opacity: 0.6,
                  transition: 'opacity 0.3s ease',
                }} />
                {/* Hover links */}
                <div className="project-overlay" style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
                  opacity: 0, transition: 'opacity 0.3s ease',
                }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="neon-glow"
                    style={{
                      padding: '0.75rem', background: 'rgba(0,0,0,0.8)', borderRadius: '50%',
                      color: '#00ff00', display: 'flex', transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#00ff00'; e.currentTarget.style.color = 'black'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.8)'; e.currentTarget.style.color = '#00ff00'; }}
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="neon-glow"
                    style={{
                      padding: '0.75rem', background: 'rgba(0,0,0,0.8)', borderRadius: '50%',
                      color: '#00ff00', display: 'flex', transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#00ff00'; e.currentTarget.style.color = 'black'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.8)'; e.currentTarget.style.color = '#00ff00'; }}
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontSize: '1.1rem', fontWeight: 600, color: '#fff',
                  marginBottom: '0.75rem', lineHeight: 1.4,
                  transition: 'color 0.3s ease',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00ff00')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                >
                  {project.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>
                  {project.description}
                </p>
                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem', padding: '0.25rem 0.75rem',
                        border: '1px solid rgba(0,255,0,0.3)', color: '#00ff00',
                        borderRadius: '9999px', transition: 'background 0.3s ease',
                        cursor: 'default',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,255,0,0.1)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
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