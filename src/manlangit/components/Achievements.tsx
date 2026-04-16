import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export function Achievements() {
  const achievements = [
    { title: 'Best Web Application - Local Hackathon 2024', issuer: 'Tech Hub City', date: '2024', description: 'Won first place for innovative Enrollment UI System design demonstrating advanced React and responsive design skills.', badges: ['Web Dev', 'Hackathon', '1st Place'] },
    { title: 'Student Tech Innovation Award', issuer: 'High School STEM Program', date: '2024', description: 'Recognized for exceptional technology projects and contributions to school coding club.', badges: ['Innovation', 'STEM', 'School Award'] },
    { title: 'Project Excellence in Cybersecurity', issuer: 'School Science Fair 2024', date: '2024', description: 'Awarded for Cybersecurity Dashboard project showcasing advanced data visualization and security concepts.', badges: ['Cybersecurity', 'Science Fair', 'Excellence'] },
    { title: 'Python Programming Proficiency Certification', issuer: 'CodeAcademy', date: '2023', description: 'Completed comprehensive Python programming course with certified proficiency in data structures and algorithms.', badges: ['Python', 'Programming', 'Certified'] },
    { title: 'Blockchain Research & Innovation', issuer: 'School Research Competition', date: '2024', description: 'Presented Crypto-Pulse project, demonstrating advanced understanding of blockchain technology and Web3 concepts.', badges: ['Blockchain', 'Research', 'Presentation'] },
    { title: 'Web Development Excellence Award', issuer: 'District Coding Competition', date: '2023', description: 'Top performer in web development category, showcasing proficiency in React, JavaScript, and responsive design.', badges: ['Web Dev', 'Competition', 'Top 3'] },
    { title: 'Full Stack Project Showcase Winner', issuer: 'School Tech Expo 2023', date: '2023', description: 'Recognized for comprehensive full-stack projects demonstrating backend and frontend development expertise.', badges: ['Full Stack', 'Expo', 'Winner'] },
    { title: 'IoT & Maker Space Recognition', issuer: 'School Innovation Lab', date: '2023', description: 'Honored for IoT projects using Raspberry Pi and Python, contributing to maker space community.', badges: ['IoT', 'Maker Space', 'Recognition'] },
    { title: 'Coding Club Vice President', issuer: 'High School Leadership', date: '2023-2024', description: 'Elected leadership position, organizing coding events and mentoring junior students in programming.', badges: ['Leadership', 'Mentoring', 'Club Officer'] },
    { title: 'Database Design Project Award', issuer: 'Computer Science Class', date: '2024', description: 'Created advanced database consultation system (DCMS) receiving highest project rating in class.', badges: ['Database', 'Project', 'A+ Grade'] },
    { title: 'Frontend Development Skills Recognition', issuer: 'Coding Bootcamp 2024', date: '2024', description: 'Successfully completed advanced frontend bootcamp with focus on React, UI/UX, and responsive design.', badges: ['Frontend', 'Bootcamp', 'Completed'] },
    { title: 'GitHub Student Developer Award', issuer: 'GitHub Education Program', date: '2024', description: 'Recognized as active student developer contributing to multiple repositories and open-source learning projects.', badges: ['Open Source', 'GitHub', 'Developer'] },
  ];

  return (
    // FIX 4: generous section padding
    <section id="achievements" style={{ minHeight: '100vh', padding: '6rem 2rem 4rem', position: 'relative', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 className="section-title">Achievements & Awards</h2>
          {/* FIX 2: neon divider */}
          <div style={{ width: '5rem', height: '4px', background: '#00ff00', margin: '0.75rem auto 0', boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00' }} />
        </motion.div>

        {/* FIX 4: 3-col grid with good gap */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }} className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <div
                style={{
                  height: '100%', padding: '1.75rem',
                  borderRadius: '14px',
                  border: '1px solid rgba(0,255,0,0.2)',
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s',
                  display: 'flex', flexDirection: 'column', gap: '0.85rem',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,0,0.55)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.65)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 18px rgba(0,255,0,0.2)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,0,0.2)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.5)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Icon + title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(0,255,0,0.1)', color: '#00ff00', flexShrink: 0 }}>
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '0.25rem' }}>
                      {achievement.title}
                    </h3>
                    <p style={{ color: '#6b7280', fontSize: '0.78rem' }}>
                      {achievement.issuer} <span style={{ color: 'rgba(0,255,0,0.5)' }}>·</span> {achievement.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: '#9ca3af', fontSize: '0.82rem', lineHeight: 1.65, flex: 1 }}>
                  {achievement.description}
                </p>

                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {achievement.badges.map(badge => (
                    <span key={badge} style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem', border: '1px solid rgba(0,255,0,0.3)', color: '#00ff00', borderRadius: '9999px' }}>
                      {badge}
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
