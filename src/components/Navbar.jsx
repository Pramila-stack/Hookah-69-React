import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const span1Style = menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {};
  const span2Style = menuOpen ? { opacity: '0' } : {};
  const span3Style = menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {};

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon-wrap">
            <i className="fas fa-fire" style={{ color: '#0a0a0a' }}></i>
          </div>
          <div className="logo-text">
            <span className="logo-main">HOOKAH<span>69</span></span>
            <span className="logo-sub">Premium Bar</span>
          </div>
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          {[
            { to: '/', label: 'Home', icon: 'fa-home', end: true },
            { to: '/menu', label: 'Menu', icon: 'fa-utensils' },
            { to: '/reserve', label: 'Reserve', icon: 'fa-calendar' },
            { to: '/gallery', label: 'Gallery', icon: 'fa-images' },
            { to: '/team', label: 'Team', icon: 'fa-users' },
            { to: '/contact', label: 'Contact', icon: 'fa-envelope' },
            { to: '/about', label: 'About', icon: 'fa-info-circle' },
          ].map(({ to, label, icon, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={closeMenu}
              >
                <i className={`fas ${icon}`}></i> {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
          </div>
          <div className="nav-divider"></div>
          <Link to="/reserve" className="btn btn-gold" style={{ padding: '9px 20px', fontSize: '0.82rem' }}>
            Reserve Now
          </Link>
        </div>

        <button
          className="hamburger"
          id="hamburger"
          ref={hamburgerRef}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span style={span1Style}></span>
          <span style={span2Style}></span>
          <span style={span3Style}></span>
        </button>
      </div>
    </nav>
  );
}
