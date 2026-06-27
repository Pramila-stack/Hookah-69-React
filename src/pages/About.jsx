import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const STATS = [
  { icon: 'fa-star',       number: '2022', label: 'Year Established' },
  { icon: 'fa-fire',       number: '6+',  label: 'Hookah Flavors'   },
  { icon: 'fa-wine-glass', number: '10+', label: 'Premium Drinks'   },
  { icon: 'fa-users',      number: '5k+', label: 'Happy Guests'     },
];

const HIGHLIGHTS = [
  '50+ Flavors',
  '18+ Screens',
  'Mountain Views',
];

const MISSION_VISION = [
  {
    icon: 'fa-fire',
    title: 'Our Mission',
    desc: 'To create unforgettable moments through premium hookah experiences, exceptional service, and an atmosphere where every guest feels like family.',
  },
  {
    icon: 'fa-circle-dot',
    title: 'Our Vision',
    desc: "To be recognized as Kathmandu's premier lounge destination, setting the standard for quality, entertainment, and hospitality in Nepal's hospitality industry.",
  },
];

const DIFFERENCE = [
  { icon: 'fa-fire',         title: 'Premium Experience',   desc: 'We curate only the finest hookah flavors and beverages for an unforgettable lounge experience.' },
  { icon: 'fa-music',        title: 'Live Entertainment',   desc: 'From live DJs to sports screenings on our 18+ screens, every night is an event at Hookah69.' },
  { icon: 'fa-mountain',     title: 'Mountain Views',       desc: 'Nestled in Greenland Chowk Kathmandu, enjoy breathtaking Himalayan views while you relax.' },
  { icon: 'fa-heart',        title: 'Community First',      desc: "Since 2024, we've been Kathmandu's gathering place for artists, travelers, and locals alike." },
];

const TIMELINE = [
  { year: '2022', label: 'Hookah69 founded at Greenland Chowk, Kathmandu' },
  { year: '2023', label: 'Expanded menu with 50+ hookah flavors' },
  { year: '2023', label: 'Launched signature cocktail menu' },
  { year: '2024', label: 'Renovated VIP lounge section' },
  { year: '2024', label: 'Celebrated 10k+ happy guests' },
  { year: '2025', label: 'Introduced live music nights & events' },
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

      {/* ── STORY ── */}
      <section className="abt-story-section">
        <div className="abt-story-grid">
          {/* Left — image */}
          <div className="abt-story-img-wrap">
            <img src="/gallery/lounge1.jpeg" alt="Hookah69 Lounge" className="abt-story-img" />
            <div className="abt-story-badge">
              <strong>2+ Years of Excellence</strong>
              <span>The Heart of Greenland Kathmandu</span>
            </div>
          </div>

          {/* Right — text */}
          <div className="abt-story-text">
            <h2>The <span className="gold">Hookah69</span> Story</h2>
            <p>
              Founded in 2022, Hookah69 began with a simple vision: to create Kathmandu's most premium lounge experience.
              Nestled in the heart of Greenland Chowk, we've grown from a small hookah bar to the city's premier destination
              for entertainment and relaxation.
            </p>
            <p>
              Today, we're proud to feature a curated menu of 50+ hookah flavors, and signature cocktails crafted by
              award-winning mixologists. From live DJ nights to intimate gatherings, every evening at Hookah69 is an experience.
            </p>
            <div className="abt-highlights">
              {HIGHLIGHTS.map((h, i) => (
                <div className="abt-highlight-item" key={i}>
                  <i className="fas fa-circle-check"></i> {h}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="abt-mv-grid">
          {MISSION_VISION.map((item, i) => (
            <div className="abt-mv-card" key={i}>
              <div className="abt-mv-icon"><i className={`fas ${item.icon}`}></i></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE HOOKAH69 DIFFERENCE ── */}
      <section className="abt-diff-section">
        <div className="section-header">
          <h2 className="section-title">The <span className="gold">Hookah69</span> Difference</h2>
          <p className="section-subtitle">What makes us Kathmandu's most loved hookah lounge</p>
        </div>
        <div className="abt-diff-grid">
          {DIFFERENCE.map((d, i) => (
            <div className="abt-diff-card" key={i}>
              <div className="abt-diff-icon"><i className={`fas ${d.icon}`}></i></div>
              <h4>{d.title}</h4>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section className="abt-journey-section">
        <div className="section-header">
          <h2 className="section-title">Our <span className="gold">Journey</span></h2>
          <p className="section-subtitle">Milestones that shaped Hookah69</p>
        </div>
        <div className="abt-timeline">
          {TIMELINE.map((t, i) => (
            <div className="abt-timeline-card" key={i}>
              <div className="abt-timeline-num">{i + 1}</div>
              <div className="abt-timeline-year">{t.year}</div>
              <p className="abt-timeline-label">{t.label}</p>
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
