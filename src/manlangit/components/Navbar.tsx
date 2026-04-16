import { useState, useEffect } from 'react';
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
    { name: 'Home',         href: '#home' },
    { name: 'About',        href: '#about' },
    { name: 'Projects',     href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Seminars',     href: '#seminars' },
    { name: 'Skills',       href: '#skills' },
    { name: 'Contact',      href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-[#00ff00]/20' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* FIX 8: increased left padding so Dashboard button isn't flush against edge */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}>
          <div className="flex items-center justify-between h-16">

            {/* FIX 8: DASHBOARD button styled to match portfolio aesthetic */}
            <Link
              to="/"
              style={{
                color: '#00ff00',
                fontSize: '0.72rem',
                fontFamily: 'Orbitron, monospace',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                letterSpacing: '0.1em',
                padding: '0.35rem 0.85rem',
                border: '1px solid rgba(0,255,0,0.45)',
                borderRadius: '4px',
                textShadow: '0 0 8px rgba(0,255,0,0.7)',
                boxShadow: '0 0 6px rgba(0,255,0,0.15)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,255,0,0.1)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px rgba(0,255,0,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 6px rgba(0,255,0,0.15)';
              }}
            >
              ← DASHBOARD
            </Link>

            {/* Logo — centered */}
            <a href="#home" className="text-2xl neon-text" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
              &lt;Portfolio /&gt;
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-[#00ff00] transition-colors duration-300 relative group"
                  style={{ fontSize: '0.8rem', fontFamily: 'Orbitron, monospace' }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ff00] transition-all duration-300 group-hover:w-full neon-glow" />
                </a>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-[#00ff00]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-[#00ff00]/20 z-40 md:hidden"
        >
          <div className="container mx-auto px-4 py-4">
            <Link
              to="/"
              className="block py-3 text-[#00ff00] hover:text-white transition-colors duration-300 font-mono text-sm border-b border-[#00ff00]/20 mb-2"
            >
              ← BACK TO DASHBOARD
            </Link>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-3 text-gray-300 hover:text-[#00ff00] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
