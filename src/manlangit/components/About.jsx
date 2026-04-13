import { motion } from 'motion/react'

export function About() {
  const personalInfo = [
    { label: 'Date of Birth',   value: 'July 20, 2006' },
    { label: 'Place of Birth',  value: 'Jose Panganiban, Camarines Norte, Bicol' },
    { label: 'Parents',         value: 'Myla Panganiban & Leroy Manlangit' },
    { label: 'Siblings',        value: '4 (Youngest/Bunso)' },
  ]
  const education = [
    { level: 'Elementary',        school: 'Jose Panganiban Elementary School' },
    { level: 'Junior High School', school: 'Jose Panganiban National High School', program: 'STE Program' },
    { level: 'Senior High School', school: 'Jose Panganiban National High School', program: 'STEM Strand' },
    { level: 'College (Current)',  school: 'Technological Institute of the Philippines – Manila', program: 'BS Computer Engineering' },
  ]
  const achievements = [
    { title: 'Winner – Regional and National Level', event: 'FedEx International Trade Challenge (ITC) 2023' },
    { title: 'International Competitor',             event: 'FedEx ITC Challenge 2023' },
    { title: 'Participant – Script Writer',          event: 'IPOPHL Filmmaking Competition 2025' },
    { title: 'Participant',                          event: 'Regional Chemistry Olympiad 2023' },
  ]
  const seminars = ['Cybersecurity Seminar', 'DTP Globe Training', 'Elective Seminar']

  return (
    <section id="about" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}><div className="circuit-pattern" /></div>
      <div className="m-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="m-text-center m-mb-4">
          <h2 className="section-title">About Me</h2>
          <div className="m-divider" />
        </motion.div>

        {/* Biography */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="m-mb-8">
          <div className="futuristic-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#00ff00', borderBottom: '1px solid rgba(0,255,0,0.3)', paddingBottom: '0.75rem' }}>Biography</h3>
            <p style={{ color: '#d1d5db', lineHeight: 1.8 }}>
              Lance Kelly P. Manlangit was born in Jose Panganiban, Camarines Norte, Bicol on July 20, 2006.
              He is the youngest among five siblings, son of Myla Panganiban and Leroy Manlangit. He is currently
              pursuing a Bachelor of Science in Computer Engineering (BSCpE) at the Technological Institute of
              the Philippines – Manila, where he is a second-year student.
            </p>
          </div>
        </motion.div>

        {/* Objective */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="m-mb-8">
          <div className="futuristic-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#00ff00', borderBottom: '1px solid rgba(0,255,0,0.3)', paddingBottom: '0.75rem' }}>Objective</h3>
            <p style={{ color: '#d1d5db', lineHeight: 1.8 }}>
              As a Computer Engineering student, Lance aims to develop strong technical and analytical skills in
              the fields of computing, networking, and emerging technologies. He strives to contribute innovative
              solutions to real-world problems and continuously improve his knowledge in cybersecurity, software
              development, and system design.
            </p>
          </div>
        </motion.div>

        {/* Personal Info + Academic */}
        <div className="m-grid-2 m-mb-8">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="futuristic-card" style={{ height: '100%' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#00ff00', borderBottom: '1px solid rgba(0,255,0,0.3)', paddingBottom: '0.75rem' }}>Personal Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {personalInfo.map((info, i) => (
                  <motion.div key={info.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1f2937', paddingBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ color: '#00ff00' }}>{info.label}:</span>
                    <span style={{ color: '#d1d5db' }}>{info.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="futuristic-card" style={{ height: '100%' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#00ff00', borderBottom: '1px solid rgba(0,255,0,0.3)', paddingBottom: '0.75rem' }}>Academic Background</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {education.map((edu, i) => (
                  <motion.div key={edu.level} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ borderLeft: '2px solid rgba(0,255,0,0.5)', paddingLeft: '1rem', paddingBottom: '0.75rem' }}>
                    <h4 style={{ color: '#00ff00', marginBottom: '0.25rem' }}>{edu.level}</h4>
                    <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{edu.school}</p>
                    {edu.program && <p style={{ color: '#6b7280', fontSize: '0.8rem', fontStyle: 'italic' }}>{edu.program}</p>}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements + Seminars */}
        <div className="m-grid-2">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="futuristic-card" style={{ height: '100%' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#00ff00', borderBottom: '1px solid rgba(0,255,0,0.3)', paddingBottom: '0.75rem' }}>Achievements</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {achievements.map((a, i) => (
                  <motion.div key={a.event} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ border: '1px solid rgba(0,255,0,0.2)', padding: '1rem', borderRadius: '8px', transition: 'border-color 0.3s' }}>
                    <p style={{ color: '#00ff00', marginBottom: '0.25rem' }}>{a.title}</p>
                    <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>{a.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="futuristic-card" style={{ height: '100%' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#00ff00', borderBottom: '1px solid rgba(0,255,0,0.3)', paddingBottom: '0.75rem' }}>Seminars & Trainings</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {seminars.map((s, i) => (
                  <motion.div key={s} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                    <div style={{ width: '8px', height: '8px', background: '#00ff00', borderRadius: '50%', boxShadow: '0 0 6px #00ff00', flexShrink: 0 }} />
                    <p style={{ color: '#d1d5db' }}>{s}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}