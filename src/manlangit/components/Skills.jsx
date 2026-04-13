import { motion } from 'motion/react'
import { useState } from 'react'

export function Skills() {
  const [isInView, setIsInView] = useState(false)

  const skills = [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React / Next.js',         level: 85 },
    { name: 'Python',                  level: 88 },
    { name: 'Node.js / Express',       level: 82 },
    { name: 'C++ / C',                 level: 80 },
    { name: 'Database (SQL/NoSQL)',     level: 75 },
    { name: 'Cloud (AWS/Azure)',        level: 70 },
    { name: 'DevOps / CI/CD',          level: 72 },
  ]

  const tools = [
    { name: 'Git',     icon: '🔧' },
    { name: 'Docker',  icon: '🐳' },
    { name: 'Linux',   icon: '🐧' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma',   icon: '🎨' },
    { name: 'Postman', icon: '📮' },
  ]

  const stats = [
    { label: 'Projects',     value: '25+' },
    { label: 'Experience',   value: '3 yrs' },
    { label: 'Technologies', value: '15+' },
  ]

  return (
    <section id="skills" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}><div className="circuit-pattern" /></div>
      <div className="m-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          onViewportEnter={() => setIsInView(true)} className="m-text-center m-mb-4">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="m-divider" />
        </motion.div>

        <div className="m-grid-2">
          {/* Skill bars */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#00ff00' }}>Technical Skills</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#d1d5db' }}>{skill.name}</span>
                    <span style={{ color: '#00ff00' }}>{skill.level}%</span>
                  </div>
                  <div className="m-skill-bar-bg">
                    <motion.div
                      className="m-skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools + stats */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#00ff00' }}>Tools & Platforms</h3>
            <div className="m-tools-grid">
              {tools.map((tool, i) => (
                <motion.div key={tool.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="futuristic-card"
                  style={{ textAlign: 'center', cursor: 'pointer', padding: '1.5rem 1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{tool.icon}</div>
                  <p style={{ color: '#d1d5db', fontSize: '0.9rem' }}>{tool.name}</p>
                </motion.div>
              ))}
            </div>

            <div className="m-stats-grid">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.2 }}
                  style={{ textAlign: 'center' }}>
                  <div style={{ position: 'relative', width: '96px', height: '96px', margin: '0 auto 0.75rem' }}>
                    <svg style={{ transform: 'rotate(-90deg)', width: '96px', height: '96px' }}>
                      <circle cx="48" cy="48" r="40" stroke="#1a1a1a" strokeWidth="8" fill="none" />
                      <motion.circle cx="48" cy="48" r="40" stroke="#00ff00" strokeWidth="8" fill="none" strokeLinecap="round"
                        initial={{ strokeDashoffset: 251.2 }} whileInView={{ strokeDashoffset: 50 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: i * 0.2 }}
                        style={{ strokeDasharray: 251.2, filter: 'drop-shadow(0 0 8px #00ff00)' }}
                      />
                    </svg>
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: '#00ff00', fontSize: '0.9rem', fontWeight: 'bold' }}>{stat.value}</span>
                    </div>
                  </div>
                  <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}