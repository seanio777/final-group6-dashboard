const seminars = [
  {
    title: 'Cyber-Aware, Cyber-Safe: Strengthening Our Digital Defenses',
    organizer: 'Computer Engineering Student Society (CoESS) - TIP Manila',
    type: 'SEMINAR',
  },
  {
    title: 'Cybersecurity Awareness Month Seminar',
    organizer: 'Computer Engineering Student Society (CoESS) - TIP Manila',
    type: 'SEMINAR',
  },
  {
    title: 'Program Elective Seminar',
    organizer: 'Computer Engineering Student Society (CoESS) - TIP Manila',
    type: 'SEMINAR',
  },
]

export default function Seminars() {
  return (
    <section id="skills" className="container section-theme">
      <div className="section-label">PROFESSIONAL DEVELOPMENT</div>
      <h2>Seminars &amp; <span className="highlight">Trainings</span></h2>

      <div className="seminar-grid">
        {seminars.map((s, i) => (
          <article key={i} className="seminar-card">
            <div className="badge">{s.type}</div>
            <h3>{s.title}</h3>
            <p className="subtitle">{s.organizer}</p>
            <div className="tags" />
          </article>
        ))}
      </div>
    </section>
  )
}