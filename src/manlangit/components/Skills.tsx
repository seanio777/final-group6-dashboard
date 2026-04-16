import { motion } from 'motion/react';
import { useState } from 'react';

export function Skills() {
  const [isInView, setIsInView] = useState(false);

  const skills = [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React / Next.js',         level: 85 },
    { name: 'Python',                  level: 88 },
    { name: 'Node.js / Express',       level: 82 },
    { name: 'C++ / C',                 level: 80 },
    { name: 'Database (SQL/NoSQL)',     level: 75 },
    { name: 'Cloud (AWS/Azure)',        level: 70 },
    { name: 'DevOps / CI/CD',          level: 72 },
  ];

  const tools = [
    { name: 'Git',     icon: '🔧' },
    { name: 'Docker',  icon: '🐳' },
    { name: 'Linux',   icon: '🐧' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma',   icon: '🎨' },
    { name: 'Postman', icon: '📮' },
  ];

  return (
    // FIX 1: generous section padding
    <section id="skills" style={{ minHeight: '100vh', padding: '6rem 2rem 4rem', position: 'relative', boxSizing: 'border-box' }}>
      <div className="absolute inset-0 opacity-5" style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
        <div className="circuit-pattern" />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          onViewportEnter={() => setIsInView(true)}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          {/* FIX 2: neon divider */}
          <div style={{ width: '5rem', height: '4px', background: '#00ff00', margin: '0.75rem auto 0', boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00' }} />
        </motion.div>

        {/* FIX 1: two-col grid with proper gap */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="skills-2col">

          {/* Technical Skills */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 style={{ color: '#00ff00', fontSize: '1.2rem', fontWeight: 700, marginBottom: '2rem' }}>Technical Skills</h3>
            {/* FIX 1: each skill bar row has good vertical spacing */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <span style={{ color: '#d1d5db', fontSize: '0.9rem' }}>{skill.name}</span>
                    <span style={{ color: '#00ff00', fontSize: '0.9rem', fontWeight: 600 }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: '10px', background: '#1f2937', borderRadius: '9999px', overflow: 'hidden', border: '1px solid rgba(0,255,0,0.25)' }}>
                    <motion.div
                      style={{ height: '100%', background: 'linear-gradient(to right, #00ff00, #00cc00)', borderRadius: '9999px', boxShadow: '0 0 8px #00ff00' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: isInView ? `${skill.level}%` : 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 style={{ color: '#00ff00', fontSize: '1.2rem', fontWeight: 700, marginBottom: '2rem' }}>Tools & Platforms</h3>
            {/* FIX 1: 3-col grid for tools */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.08 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,0,0.05) 0%, rgba(0,0,0,0.8) 100%)',
                    border: '1px solid rgba(0,255,0,0.2)',
                    borderRadius: '12px',
                    padding: '1.25rem 0.75rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#00ff00'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,0,0.2)'; }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{tool.icon}</div>
                  <p style={{ color: '#d1d5db', fontSize: '0.82rem' }}>{tool.name}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
              {[
                { label: 'Projects', value: 25, suffix: '+' },
                { label: 'Experience', value: 3, suffix: ' yrs' },
                { label: 'Technologies', value: 15, suffix: '+' },
              ].map((stat, index) => (
                <motion.div key={stat.label}
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{ position: 'relative', width: '88px', height: '88px', margin: '0 auto 0.75rem' }}>
                    <svg style={{ transform: 'rotate(-90deg)', width: '88px', height: '88px' }}>
                      <circle cx="44" cy="44" r="36" stroke="#1a1a1a" strokeWidth="7" fill="none" />
                      <motion.circle cx="44" cy="44" r="36" stroke="#00ff00" strokeWidth="7" fill="none" strokeLinecap="round"
                        initial={{ strokeDashoffset: 226 }} whileInView={{ strokeDashoffset: 46 }}
                        viewport={{ once: true }} transition={{ duration: 1.5, delay: index * 0.2 }}
                        style={{ strokeDasharray: 226, filter: 'drop-shadow(0 0 8px #00ff00)' }}
                      />
                    </svg>
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: '#00ff00', fontSize: '0.88rem', fontWeight: 700 }}>{stat.value}{stat.suffix}</span>
                    </div>
                  </div>
                  <p style={{ color: '#9ca3af', fontSize: '0.82rem' }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
