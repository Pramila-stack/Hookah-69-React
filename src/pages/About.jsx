import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const STATS = [
  { icon: 'fa-star',       number: '2022', label: 'Year Established' },
  { icon: 'fa-fire',       number: '6+',  label: 'Hookah Flavors'   },
  { icon: 'fa-wine-glass', number: '10+', label: 'Premium Drinks'   },
  { icon: 'fa-users',      number: '5k+', label: 'Happy Guests'     },
];



export default function About() {
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 80; i++) {
      const s = document.createElement('span');
      s.className = 'abt-star';
      s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${Math.random()*2+1}px;height:${Math.random()*2+1}px;opacity:${Math.random()*0.6+0.2};animation-delay:${Math.random()*3}s;`;
      container.appendChild(s);
    }
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="abt-hero">
        <div className="abt-stars" ref={starsRef}></div>
        <div className="abt-hero-content">
          <div className="abt-eyebrow">
            <i className="fas fa-star"></i> Est. 2022 • Greenland Chowk, Kathmandu <i className="fas fa-star"></i>
          </div>
          <h1 className="abt-title">
            Where <span className="gold">Flavors</span> Meet<br />the Experience
          </h1>
          <p className="abt-desc">
            Established in 2022, Hookah69 is dedicated to creating a premium and relaxing experience for every guest.
            We take pride in serving the perfect aroma of high-quality hookah flavors, carefully crafted to deliver smooth and
            satisfying sessions every time. Along with our exceptional hookah, we offer a wide range of signature cocktails,
            refreshing mocktails, and delicious food prepared with great taste and care. We are committed to providing excellent
            hospitality and warm courtesy, ensuring that every visit feels comfortable, enjoyable, and memorable.
            At Hookah69, it's not just about the flavor — it's about the complete experience.
          </p>
          <div className="abt-hero-btns">
            <Link to="/reserve" className="btn btn-gold btn-lg">Reserve Your Table</Link>
            <Link to="/menu"    className="btn abt-btn-outline btn-lg">Explore Menu</Link>
          </div>
        </div>

        <div className="abt-stats-strip">
          {STATS.map((s, i) => (
            <div className="abt-stat-card" key={i}>
              <i className={`fas ${s.icon} abt-stat-icon`}></i>
              <div className="abt-stat-number">{s.number}</div>
              <div className="abt-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

{/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <p className="section-eyebrow">Come Experience It</p>
          <h2>Be Part of the <span className="gold">Hookah69 Story</span></h2>
          <p>Every evening at Hookah69 is a new chapter. Reserve your table and write yours.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/reserve" className="btn btn-gold btn-lg">Reserve a Table</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
