import { useState, useEffect, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home',     href: '#home' },
    { name: 'About',    href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills',   href: '#skills' },
    { name: 'Contact',  href: '#contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'all 0.3s',
          background: isScrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0,255,0,0.2)' : 'none',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '64px', position: 'relative' }}>

            {/* Left: Dashboard */}
            <Link
              to="/"
              style={{
                color: '#00ff00',
                fontSize: '0.75rem',
                fontFamily: 'Orbitron, monospace',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                padding: '0.4rem 0.85rem',
                border: '1px solid rgba(0,255,0,0.4)',
                borderRadius: '4px',
                background: 'rgba(0,255,0,0.05)',
                letterSpacing: '0.08em',
                textShadow: '0 0 8px #00ff00',
                boxShadow: '0 0 8px rgba(0,255,0,0.15)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#00ff00';
                (e.currentTarget as HTMLElement).style.color = '#000';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 18px rgba(0,255,0,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,255,0,0.05)';
                (e.currentTarget as HTMLElement).style.color = '#00ff00';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 8px rgba(0,255,0,0.15)';
              }}
            >
              ← DASHBOARD
            </Link>

            {/* Center: Logo — absolutely centered */}
            <a href="#home" onClick={e => handleNavClick(e as any, '#home')}
              style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontSize: '1.5rem', color: '#00ff00', textDecoration: 'none', fontWeight: 'bold', textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00', whiteSpace: 'nowrap', fontFamily: 'Orbitron, monospace' }}>
              &lt;Portfolio /&gt;
            </a>

            {/* Right: Desktop nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginLeft: 'auto', flexShrink: 0 }}
              className="manlangit-desktop-nav">
              {navItems.map(item => (
                <a key={item.name} href={item.href} onClick={e => handleNavClick(e, item.href)}
                  style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s', fontFamily: 'Orbitron, monospace' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00ff00')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#d1d5db')}>
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ display: 'none', background: 'none', border: 'none', color: '#00ff00', cursor: 'pointer', marginLeft: 'auto', flexShrink: 0 }}
              className="manlangit-mobile-btn">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          style={{ position: 'fixed', top: '64px', left: 0, right: 0, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,255,0,0.2)', zIndex: 40, padding: '1rem 1.5rem' }}>
          <Link to="/" style={{ display: 'block', padding: '0.75rem 0', color: '#00ff00', textDecoration: 'none', fontFamily: 'monospace', fontSize: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            ← BACK TO DASHBOARD
          </Link>
          {navItems.map(item => (
            <a key={item.name} href={item.href} onClick={e => handleNavClick(e, item.href)}
              style={{ display: 'block', padding: '0.75rem 0', color: '#d1d5db', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', fontFamily: 'Orbitron, monospace' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00ff00')}
              onMouseLeave={e => (e.currentTarget.style.color = '#d1d5db')}>
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}