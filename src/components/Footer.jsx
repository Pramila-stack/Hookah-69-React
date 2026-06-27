import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div>
          <Link to="/" className="footer-logo">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="logo-icon-wrap" style={{ width: 40, height: 40 }}>
                <i className="fas fa-fire" style={{ color: '#0a0a0a', fontSize: '0.9rem' }}></i>
              </div>
              <span className="logo-main" style={{ fontSize: '1rem' }}>HOOKAH<span>69</span></span>
            </div>
          </Link>
          <p className="footer-tagline">
            Kathmandu's premium hookah lounge — where every evening is an unforgettable experience.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            {[
              { to: '/', label: 'Home' },
              { to: '/menu', label: 'Menu' },
              { to: '/reserve', label: 'Reserve a Table' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/team', label: 'Our Team' },
              { to: '/contact', label: 'Contact Us' },
              { to: '/about', label: 'About Us' },
            ].map(({ to, label }) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Visit Info */}
        <div>
          <h4 className="footer-heading">Visit Us</h4>
          <ul className="footer-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Greenland Chowk, Kathmandu, Nepal</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+9779702027432">+977 970-2027432</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:gyaudan@gmail.com">gyaudan@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="footer-heading">Opening Hours</h4>
          <ul className="footer-info">
            <li>
              <i className="fas fa-clock"></i>
              <div>
                <p className="hours">9:00 AM – 10:00 PM</p>
                <p className="footer-note">Open daily</p>
              </div>
            </li>
            <li>
              <i className="fas fa-utensils"></i>
              <div>
                <p className="hours">Kitchen Hours</p>
                <p className="footer-note">Closes at 9:20 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Hookah69 Premium Bar. All rights reserved.</p>
        <p>Designed with <span style={{ color: 'var(--orange)' }}>♥</span> in Kathmandu</p>
      </div>
    </footer>
  );
}
