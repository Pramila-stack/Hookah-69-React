import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/',        label: 'Home',    icon: 'fa-home',        end: true },
  { to: '/menu',    label: 'Menu',    icon: 'fa-utensils' },
  { to: '/reserve', label: 'Reserve', icon: 'fa-calendar' },
  { to: '/gallery', label: 'Gallery', icon: 'fa-images' },
  { to: '/team',    label: 'Team',    icon: 'fa-users' },
  { to: '/contact', label: 'Contact', icon: 'fa-envelope' },
  { to: '/about',   label: 'About',   icon: 'fa-info-circle' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change or outside click
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (hamburgerRef.current && hamburgerRef.current.contains(e.target)) return;
      setMenuOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const s1 = menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {};
  const s2 = menuOpen ? { opacity: 0 }                                       : {};
  const s3 = menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {};

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <div className="nav-logo-circle">
            <img src="/logo.png" alt="Hookah69 Logo" className="nav-logo-img" />
          </div>
          <div className="logo-text">
            <span className="logo-main">HOOKAH<span>69</span></span>
            <span className="logo-sub">Premium Bar</span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-links">
          {NAV_ITEMS.map(({ to, label, icon, end }) => (
            <li key={to}>
              <NavLink
                to={to} end={end}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                <i className={`fas ${icon}`}></i> {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="nav-right">
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
          </div>
          <div className="nav-divider"></div>
          <Link to="/reserve" className="btn btn-gold nav-reserve-btn">Reserve Now</Link>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          ref={hamburgerRef}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span style={s1}></span>
          <span style={s2}></span>
          <span style={s3}></span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-nav-links">
          {NAV_ITEMS.map(({ to, label, icon, end }) => (
            <li key={to}>
              <NavLink
                to={to} end={end}
                className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
                onClick={closeMenu}
              >
                <i className={`fas ${icon}`}></i> {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-drawer-footer">
          <div className="mobile-socials">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
            <a href="https://wa.me/9779702027432" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <Link to="/reserve" className="btn btn-gold btn-block" onClick={closeMenu}>
            <i className="fas fa-calendar"></i> Reserve Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
