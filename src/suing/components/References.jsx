const references = [
  {
    name: 'Dr. Jennifer B. Enriquez',
    title: 'PROGRAM CHAIR',
    org: 'Program Chair, BS Computer Engineering',
    institution: 'Technological Institute of the Philippines - Manila',
    email: 'jbeenriquez@tip.edu.ph',
    phone: '+63 XXX XXX XXXX',
    photo: '/dr-jennifer-enriquez.jpg',
  },
]

export default function References() {
  return (
    <section id="references" className="container section-theme">
      <div className="section-label">PROFESSIONAL CONTACTS</div>
      <h2><span className="highlight">Professional</span> References</h2>

      <div className="references-grid">
        {references.map((ref, i) => (
          <article key={i} className="reference-card">
            <img
              src={ref.photo}
              alt={ref.name}
              className="reference-photo"
              onError={e => { e.target.style.display = 'none' }}
            />
            <h3>{ref.name}</h3>
            <p className="reference-title">{ref.title}</p>
            <p className="reference-org">{ref.org}</p>
            <p className="reference-institution">{ref.institution}</p>
            <div className="reference-contact">
              <p>
                <span className="contact-icon">📧</span>{' '}
                <a href={`mailto:${ref.email}`}>{ref.email}</a>
              </p>
              <p>
                <span className="contact-icon">📱</span> {ref.phone}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}