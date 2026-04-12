const projects = [
  {
    title: 'Project Gatekeeper',
    description:
      'A collaborative AI-powered project management platform designed to help teams organize, track, and manage their initiatives efficiently with real-time updates and intuitive interface.',
    link: 'https://project-gatekeeper-7ie0fjhb4-mcjsuing-sketchs-projects.vercel.app',
  },
  {
    title: 'Enrollment UI Design',
    description:
      'A modern and intuitive user interface for enrollment management system. Features streamlined registration workflow, real-time form validation, and responsive design for seamless user experience across all devices.',
    link: 'https://enrollment-ui-design-aa0ujs2m1-mcjsuing-sketchs-projects.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container section-theme">
      <div className="section-label">PORTFOLIO SHOWCASE</div>
      <h2><span className="highlight">Featured</span> Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={i} className="project-card">
            <div className="project-badge">PROJECT</div>
            <h3>{p.title}</h3>
            <p className="project-description">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}