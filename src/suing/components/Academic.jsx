const education = [
  {
    level: 'ELEMENTARY',
    school: 'The Immaculate Mother Academy Inc.',
    program: 'General Education',
    years: '2011 - 2018',
    location: 'Caloocan City',
    status: 'Completed',
    statusClass: '',
  },
  {
    level: 'JUNIOR HIGH SCHOOL',
    school: 'The Immaculate Mother Academy Inc.',
    program: 'General Education',
    years: '2018 - 2022',
    location: 'Caloocan City',
    status: 'Completed',
    statusClass: '',
  },
  {
    level: 'SENIOR HIGH SCHOOL',
    school: 'The Immaculate Mother Academy Inc.',
    program: 'General Academic Strand',
    years: '2022 - 2024',
    location: 'Caloocan City',
    status: 'Graduated',
    statusClass: 'graduated',
  },
  {
    level: 'TERTIARY',
    school: 'Technological Institute of the Philippines – Manila',
    program: 'BS Computer Engineering',
    years: '2024 - Present',
    location: 'Casal St., Quiapo, Manila',
    status: 'Currently Enrolled',
    statusClass: 'current',
  },
]

export default function Academic() {
  return (
    <section id="academic" className="container section-theme academic-section">
      <div className="section-label">ACADEMIC BACKGROUND</div>
      <h2>Educational <span className="highlight">Journey</span></h2>

      <div className="timeline-container">
        <div className="timeline-line" />
        <div className="timeline-items">
          {education.map((edu, i) => (
            <article key={i} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-card">
                <div className="level-badge">{edu.level}</div>
                <h3>{edu.school}</h3>
                <p className="program-info">{edu.program}</p>
                <div className="timeline-meta">
                  <span>📅 {edu.years}</span>
                  <span>📍 {edu.location}</span>
                </div>
                <div className={`status-badge ${edu.statusClass}`}>{edu.status}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}