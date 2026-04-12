export default function About() {
  return (
    <section id="about" className="container section-theme">
      <div className="section-label">PERSONAL PROFILE</div>
      <h2>ALL ABOUT <span className="highlight">ME</span></h2>

      <div className="about-grid">
        <article className="info-card">
          <h3>Biography</h3>
          <p>
            Chryzller John Suing is a second-year Computer Engineering student at the
            Technological Institute of the Philippines. Born on March 6, 2006, in Quezon City,
            he now resides in Sampaloc, Manila. Driven by a lifelong fascination with the inner
            workings of technology, Chryzller is dedicated to his academic pursuits in engineering
            and coding. Outside of his studies, he enjoys exploring the vibrant streets of Manila
            and staying informed about the latest technological trends.
          </p>
        </article>

        <article className="info-card">
          <h3>Career Objective</h3>
          <p>
            Striving to apply the fundamental skills of an engineer to solve real-life technical
            challenges in a constantly changing work environment. I have a 'learn it all' attitude
            and want to continuously upgrade my knowledge of the latest technologies and hardware
            integration by learning from industry leaders, the open-source community, and other
            disciplines.
          </p>
        </article>
      </div>
    </section>
  )
}