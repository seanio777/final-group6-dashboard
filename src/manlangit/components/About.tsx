import { motion } from 'motion/react';

export function About() {
  const personalInfo = [
    { label: 'Date of Birth',  value: 'July 20, 2006' },
    { label: 'Place of Birth', value: 'Jose Panganiban, Camarines Norte, Bicol' },
    { label: 'Parents',        value: 'Myla Panganiban & Leroy Manlangit' },
    { label: 'Siblings',       value: '4 (Youngest/Bunso)' },
  ];

  const education = [
    { level: 'Elementary',        school: 'Jose Panganiban Elementary School' },
    { level: 'Junior High School', school: 'Jose Panganiban National High School', program: 'STE Program' },
    { level: 'Senior High School', school: 'Jose Panganiban National High School', program: 'STEM Strand' },
    { level: 'College (Current)',  school: 'Technological Institute of the Philippines – Manila', program: 'BS Computer Engineering' },
  ];

  const achievements = [
    { title: 'Winner – Regional and National Level', event: 'FedEx International Trade Challenge (ITC) 2023' },
    { title: 'International Competitor',             event: 'FedEx ITC Challenge 2023' },
    { title: 'Participant – Script Writer',          event: 'IPOPHL Filmmaking Competition 2025' },
    { title: 'Participant',                          event: 'Regional Chemistry Olympiad 2023' },
  ];

  const seminars = ['Cybersecurity Seminar', 'DTP Globe Training', 'Elective Seminar'];

  // Shared card style
  const card: React.CSSProperties = {
    background: 'linear-gradient(135deg, rgba(0,255,0,0.05) 0%, rgba(0,0,0,0.8) 100%)',
    border: '1px solid rgba(0,255,0,0.2)',
    borderRadius: '14px',
    backdropFilter: 'blur(10px)',
    padding: '2rem 2.25rem',    // FIX 7: generous padding
    boxSizing: 'border-box',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    height: '100%',
  };

  const cardH3: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#00ff00',
    fontWeight: 700,
    borderBottom: '1px solid rgba(0,255,0,0.25)',
    paddingBottom: '0.85rem',
    marginBottom: '1.5rem',     // FIX 7: more space below heading
  };

  return (
    <section id="about" className="min-h-screen relative" style={{ padding: '6rem 2rem 4rem' }}>
      <div className="absolute inset-0 opacity-5"><div className="circuit-pattern" /></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 className="section-title">About Me</h2>
          {/* FIX 2: neon divider line under section title */}
          <div style={{ width: '5rem', height: '4px', background: '#00ff00', margin: '0.75rem auto 0', boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00' }} />
        </motion.div>

        {/* FIX 6: Biography — centred text, max-width centred block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <div style={{ ...card, maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ ...cardH3, textAlign: 'center' }}>Biography</h3>
            <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: 1.85 }}>
              Lance Kelly P. Manlangit was born in Jose Panganiban, Camarines Norte, Bicol on July 20, 2006.
              He is the youngest among five siblings, son of Myla Panganiban and Leroy Manlangit. He is currently
              pursuing a Bachelor of Science in Computer Engineering (BSCpE) at the Technological Institute of
              the Philippines – Manila, where he is a second-year student.
            </p>
          </div>
        </motion.div>

        {/* FIX 6: Objective — centred text, max-width centred block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ ...card, maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ ...cardH3, textAlign: 'center' }}>Objective</h3>
            <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: 1.85 }}>
              As a Computer Engineering student, Lance aims to develop strong technical and analytical skills in
              the fields of computing, networking, and emerging technologies. He strives to contribute innovative
              solutions to real-world problems and continuously improve his knowledge in cybersecurity, software
              development, and system design.
            </p>
          </div>
        </motion.div>

        {/* FIX 7: Personal Info + Academic — more gap, proper padding */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}
          className="about-2col">
          {/* Personal Information */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={card}>
              <h3 style={cardH3}>Personal Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {personalInfo.map((info, i) => (
                  <motion.div key={info.label}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
                             gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '0.9rem' }}
                  >
                    <span style={{ color: '#00ff00', fontSize: '0.9rem' }}>{info.label}:</span>
                    <span style={{ color: '#d1d5db', fontSize: '0.9rem', textAlign: 'right', maxWidth: '60%' }}>{info.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Academic Background */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={card}>
              <h3 style={cardH3}>Academic Background</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {education.map((edu, i) => (
                  <motion.div key={edu.level}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ borderLeft: '3px solid rgba(0,255,0,0.5)', paddingLeft: '1rem',
                             paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <h4 style={{ color: '#00ff00', marginBottom: '0.3rem', fontSize: '0.95rem' }}>{edu.level}</h4>
                    <p style={{ color: '#d1d5db', fontSize: '0.88rem', marginBottom: '0.2rem' }}>{edu.school}</p>
                    {edu.program && <p style={{ color: '#6b7280', fontSize: '0.8rem', fontStyle: 'italic' }}>{edu.program}</p>}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FIX 7: Achievements + Seminars */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
          className="about-2col">
          {/* Achievements */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={card}>
              <h3 style={cardH3}>Achievements</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {achievements.map((a, i) => (
                  <motion.div key={a.event}
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ border: '1px solid rgba(0,255,0,0.2)', padding: '1rem 1.1rem',
                             borderRadius: '10px', transition: 'border-color 0.3s' }}
                  >
                    <p style={{ color: '#00ff00', marginBottom: '0.35rem', fontSize: '0.9rem', fontWeight: 600 }}>{a.title}</p>
                    <p style={{ color: '#9ca3af', fontSize: '0.82rem' }}>{a.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Seminars & Trainings */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={card}>
              <h3 style={cardH3}>Seminars & Trainings</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {seminars.map((s, i) => (
                  <motion.div key={s}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.9rem',
                             padding: '0.85rem 1rem', border: '1px solid rgba(0,255,0,0.15)',
                             borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s' }}
                  >
                    <div style={{ width: '9px', height: '9px', background: '#00ff00', borderRadius: '50%',
                                  boxShadow: '0 0 8px #00ff00', flexShrink: 0 }} />
                    <p style={{ color: '#d1d5db', fontSize: '0.92rem' }}>{s}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
