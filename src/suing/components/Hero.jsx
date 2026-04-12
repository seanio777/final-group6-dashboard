export default function Hero() {
  return (
    <header id="home" className="bg">
      <div className="hero">
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="profile-img"
          onError={e => { e.target.style.display = 'none' }}
        />
        <h1>Hey! It's Chryzller John Suing</h1>
        <p>Student | Tech Enthusiast</p>
      </div>
    </header>
  )
}