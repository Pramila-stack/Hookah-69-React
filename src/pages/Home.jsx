import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { REVIEWS } from '../data/menuData';

const SHUFFLED = [...REVIEWS].sort(() => Math.random() - 0.5);

export default function Home() {
  const [likes, setLikes] = useState(SHUFFLED.map(r => ({ count: r.likes, liked: false })));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleLike = (i) => {
    setLikes(prev => prev.map((l, idx) =>
      idx === i ? { count: l.liked ? l.count - 1 : l.count + 1, liked: !l.liked } : l
    ));
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">★ Kathmandu's Finest Hookah Lounge ★</p>
          <h1 className="hero-title">
            Where Flavors Meet the <span className="gold">Mountains</span>
          </h1>
          <p className="hero-sub">
            Premium hookah sessions, handcrafted cocktails, and gourmet bites in Kathmandu's most stylish lounge.
          </p>
          <div className="hero-meta">
            <span className="hero-meta-item"><i className="fas fa-clock"></i> Open Daily 9 AM – 10 PM (Kitchen closes 9:20PM)</span>
            <span className="hero-meta-item"><i className="fas fa-map-marker-alt"></i> Greenland Chowk, KTM</span>
          </div>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-gold btn-lg">
              <i className="fas fa-utensils"></i> Explore Flavors
            </Link>
            <Link to="/gallery" className="btn btn-outline btn-lg">
              <i className="fas fa-images"></i> Discover Ambience
            </Link>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-inner">
            {[
              { number: 'Different', label: 'Hookah Flavors' },
              { number: '10+', label: 'Premium Drinks' },
              { number: '5K+', label: 'Happy Guests' },
            ].map(s => (
              <div className="stat-card reveal" key={s.label}>
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="features-section">
        <div className="features-inner">
          <div className="section-header">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">An Experience Like <span className="gold">No Other</span></h2>
            <p className="section-subtitle">We combine premium hookah, artisan cocktails, and warm hospitality to deliver evenings you'll never forget.</p>
          </div>

          <div className="features-grid">
            {[
              { icon: 'fa-fire', title: 'Premium Hookah', desc: 'Handcrafted sessions with the finest tobacco blends and fresh fruit bases. Every puff, perfected.' },
              { icon: 'fa-cocktail', title: 'Signature Cocktails', desc: 'Innovative cocktails crafted by our award-winning mixologist using premium spirits and local ingredients.' },
              { icon: 'fa-heart', title: 'Best Courtesy', desc: 'Our trained staff goes beyond service — we create personal connections that keep guests coming back.' },
              { icon: 'fa-map-marker-alt', title: 'Center Location', desc: 'Conveniently located at Greenland Chowk,Tokha. Easy to find, impossible to forget.' },
              { icon: 'fa-utensils', title: 'Gourmet Food', desc: 'Curated menu of global bites and local favorites — from zesty momos to sizzling platters.' },
            ].map(f => (
              <div className="feature-card reveal" key={f.title}>
                <div className="feature-icon"><i className={`fas ${f.icon}`}></i></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="section-header">
            <h2 className="section-title">Everything You Need for a <span className="gold">Perfect Night</span></h2>
          </div>

          <div className="amenities-row">
            {[
              { icon: 'fa-wifi', label: 'Free WiFi' },
              { icon: 'fa-motorcycle', label: 'Bike Parking' },
              { icon: 'fa-map-marker-alt', label: 'Center Location' },
              { icon: 'fa-thumbs-up', label: 'Loved by Locals' },
              { icon: 'fa-smile', label: 'Friendly Staff' },
            ].map(a => (
              <div className="amenity" key={a.label}>
                <i className={`fas ${a.icon}`}></i> {a.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section">
        <div className="reviews-inner">
          <div className="section-header">
            <span className="section-eyebrow">Guest Reviews</span>
            <h2 className="section-title">What Our Guests <span className="gold">Say</span></h2>
            <p className="section-subtitle">Real experiences from our valued guests. Join thousands who've made Hookah69 their favourite spot.</p>
          </div>

          <div className="reviews-grid">
            {SHUFFLED.map((r, i) => (
              <div className="review-card reveal" key={i}>
                <div className="review-header">
                  <div className="review-avatar">
                    <img
                      src={r.img}
                      alt={r.name}
                      className="review-avatar-img"
                      onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                    <span className="review-avatar-initials" style={{ display: 'none' }}>{r.initials}</span>
                  </div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-date">{r.date_label}</div>
                  </div>
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-footer">
                  <button
                    className={`like-btn${likes[i].liked ? ' liked' : ''}`}
                    onClick={() => toggleLike(i)}
                  >
                    <i className="fas fa-thumbs-up" style={likes[i].liked ? { color: 'var(--orange)' } : {}}></i>
                    {likes[i].count}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <span className="section-eyebrow">Reserve Tonight</span>
          <h2>Ready for an <span className="gold">Unforgettable</span> Evening?</h2>
          <p>Book your table now and experience Kathmandu's finest hookah lounge. Limited seats available every evening.</p>
          <Link to="/reserve" className="btn btn-gold btn-lg">
            <i className="fas fa-calendar"></i> Book Your Experience
          </Link>
        </div>
      </section>
    </>
  );
}
