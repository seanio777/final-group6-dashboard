const achievements = [
  {
    icon: '🥈',
    title: "2nd Runner Up – Inhinyera's Shirt Design Competition",
    subtitle: 'Inhinyera - TIP Manila',
    description:
      "Awarded 2nd runner up in the Shirt Design Competition during Women's Month celebration.",
  },
  {
    icon: '⭐',
    title: 'With High Honors',
    subtitle: 'Senior High School Graduation',
    description:
      'Maintained High Honors status throughout Senior High School, culminating in a distinguished graduation.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="container section-theme">
      <div className="section-label">RECOGNITION &amp; HONORS</div>
      <h2>Awards &amp; <span className="highlight">Recognition</span></h2>

      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <article key={i} className="achievement-card">
            <div className="achievement-icon">{a.icon}</div>
            <h3>{a.title}</h3>
            <p className="achievement-subtitle">{a.subtitle}</p>
            <p>{a.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}