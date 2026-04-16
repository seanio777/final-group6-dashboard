import { motion } from 'motion/react';
import { Presentation, MapPin, Calendar, Users } from 'lucide-react';

export function Seminars() {
  const seminars = [
    { title: 'Introduction to Web Development with React', presenter: 'Self', date: 'March 2024', location: 'School Coding Club', attendees: '15+', description: 'Student-led workshop introducing peers to React fundamentals, component-based architecture, and building interactive web applications.', topics: ['React', 'JavaScript', 'Web Dev', 'Beginner'] },
    { title: 'Blockchain Basics: From Bitcoin to Web3', presenter: 'Self', date: 'February 2024', location: 'School Tech Talk Series', attendees: '20+', description: 'Educational presentation on blockchain technology fundamentals, cryptocurrency, and introduction to smart contracts using Solidity.', topics: ['Blockchain', 'Web3', 'Crypto', 'Learning'] },
    { title: 'Cybersecurity & Online Safety Workshop', presenter: 'Guest Speaker + Panel', date: 'January 2024', location: 'School Assembly', attendees: '150+', description: 'School-wide cybersecurity awareness workshop covering password security, phishing prevention, and digital safety best practices.', topics: ['Cybersecurity', 'Safety', 'Awareness', 'School Event'] },
    { title: 'Data Science Basics with Python', presenter: 'Computer Science Teacher', date: 'December 2023', location: 'Coding Bootcamp (Summer)', attendees: '25+', description: 'Practical workshop on Python data manipulation, basic machine learning concepts, and data visualization techniques.', topics: ['Python', 'Data Science', 'Bootcamp', 'ML Intro'] },
    { title: 'Git & GitHub for Beginners', presenter: 'Self', date: 'November 2023', location: 'School Coding Club', attendees: '18+', description: 'Workshop teaching version control fundamentals, GitHub workflows, and collaborative coding practices for student projects.', topics: ['Git', 'GitHub', 'Version Control', 'Collaboration'] },
    { title: 'Database Design Fundamentals', presenter: 'Self', date: 'October 2023', location: 'Computer Science Class Project', attendees: '12+', description: 'Technical presentation on relational database design, SQL basics, and implementing databases in real-world applications.', topics: ['Database', 'SQL', 'PostgreSQL', 'Design'] },
    { title: 'Mobile App Development: Getting Started', presenter: 'Tech Community Mentor', date: 'September 2023', location: 'Local Tech Meetup (Students)', attendees: '20+', description: 'Hands-on workshop introducing Flutter and React Native for building cross-platform mobile applications.', topics: ['Mobile Dev', 'Flutter', 'React Native', 'Beginner'] },
    { title: 'IoT Projects with Raspberry Pi', presenter: 'Self', date: 'August 2023', location: 'School Maker Space', attendees: '16+', description: 'Practical workshop demonstrating IoT projects using Raspberry Pi, Python scripting, and real-time data collection systems.', topics: ['IoT', 'Raspberry Pi', 'Python', 'Hardware'] },
    { title: 'UI/UX Design Principles & Tools', presenter: 'Guest Designer', date: 'July 2023', location: 'Coding Club Special Session', attendees: '22+', description: 'Introduction to user interface and user experience design principles, Figma basics, and designing responsive websites.', topics: ['UI/UX', 'Figma', 'Design', 'Responsive'] },
    { title: 'Building REST APIs with Express.js', presenter: 'Self', date: 'June 2023', location: 'Advanced CS Workshop', attendees: '14+', description: 'Student-led session on building backend APIs, RESTful architecture principles, and connecting databases to web applications.', topics: ['REST API', 'Express.js', 'Backend', 'Node.js'] },
    { title: 'Testing Your Code: Debugging & QA', presenter: 'CS Teacher', date: 'May 2023', location: 'School Computer Lab', attendees: '28+', description: 'Workshop on debugging techniques, writing unit tests, and quality assurance practices for robust software development.', topics: ['Testing', 'Debugging', 'Jest', 'QA'] },
    { title: 'Open Source: How to Contribute', presenter: 'Self', date: 'April 2023', location: 'School Tech Fair', attendees: '19+', description: 'Beginner-friendly guide to finding open-source projects, making your first contribution, and joining tech communities.', topics: ['Open Source', 'GitHub', 'Community', 'Collaboration'] },
  ];

  return (
    // FIX 3: generous section padding
    <section id="seminars" style={{ minHeight: '100vh', padding: '6rem 2rem 4rem', position: 'relative', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 className="section-title">Seminars & Workshops</h2>
          {/* FIX 2: neon divider */}
          <div style={{ width: '5rem', height: '4px', background: '#00ff00', margin: '0.75rem auto 0', boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00' }} />
        </motion.div>

        {/* FIX 3: list with consistent gap between cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {seminars.map((seminar, index) => (
            <motion.div
              key={seminar.title}
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <div
                style={{
                  padding: '1.75rem 2rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(0,255,0,0.2)',
                  background: 'rgba(0,0,0,0.45)',
                  backdropFilter: 'blur(6px)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,0,0.5)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.6)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,255,0,0.15)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,0,0.2)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.45)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.65rem', borderRadius: '8px', background: 'rgba(0,255,0,0.1)', color: '#00ff00', flexShrink: 0 }}>
                    <Presentation size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '0.3rem' }}>
                      {seminar.title}
                    </h3>
                    <p style={{ color: '#9ca3af', fontSize: '0.82rem' }}>
                      Presented by: <span style={{ color: 'rgba(0,255,0,0.8)' }}>{seminar.presenter}</span>
                    </p>
                  </div>
                </div>

                {/* Details row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '1rem', marginBottom: '1rem', padding: '0.85rem 0', borderTop: '1px solid rgba(0,255,0,0.08)', borderBottom: '1px solid rgba(0,255,0,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#d1d5db', fontSize: '0.82rem' }}>
                    <Calendar size={14} style={{ color: '#00ff00' }} /> {seminar.date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#d1d5db', fontSize: '0.82rem' }}>
                    <MapPin size={14} style={{ color: '#00ff00' }} /> {seminar.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#d1d5db', fontSize: '0.82rem' }}>
                    <Users size={14} style={{ color: '#00ff00' }} /> {seminar.attendees} attendees
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {seminar.description}
                </p>

                {/* Topics */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {seminar.topics.map(topic => (
                    <span key={topic} style={{ fontSize: '0.7rem', padding: '0.22rem 0.65rem', border: '1px solid rgba(0,255,0,0.3)', color: '#00ff00', borderRadius: '9999px' }}>
                      {topic}
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
