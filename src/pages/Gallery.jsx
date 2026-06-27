import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const REAL_IMGS = [
  '/gallery/lounge1.jpeg',
  '/gallery/lounge2.jpeg',
  '/gallery/lounge3.jpeg',
  '/gallery/menu.jpeg',
];

/* Logo placeholder used when no real image is available */
const LOGO_PLACEHOLDER = '/hookah69-logo.png'; // fallback — will use CSS gradient

const ALL_ITEMS = [
  { img: '/gallery/lounge1.jpeg', title: 'Main Lounge Area',    desc: 'Our luxurious main lounge with mountain views',     date: '2024-02-15', featured: true  },
  { img: '/gallery/lounge2.jpeg', title: 'VIP Section',         desc: 'Exclusive VIP area for private gatherings',         date: '2024-02-10', featured: true  },
  { img: '/gallery/lounge3.jpeg', title: 'Outdoor Seating',     desc: 'Beautiful outdoor space with open-air ambience',    date: '2024-02-05', featured: false },
  // ── ADD YOUR VIDEOS BELOW ──
  { img: '/gallery/menu.jpeg', video: '/gallery/video1.mp4', type: 'video', title: 'Hookah69 Vibes', desc: 'Experience the atmosphere at Hookah69', date: '2024-06-27', featured: false },

];

const FEATURED = ALL_ITEMS.filter(i => i.featured);

export default function Gallery() {
  const trackRef = useRef(null);
  const [likes, setLikes] = useState(ALL_ITEMS.map(() => ({ count: 124, liked: false })));

  /* Auto-scroll the featured carousel */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame;
    let pos = 0;
    const speed = 0.6;

    const tick = () => {
      pos += speed;
      if (pos >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const pause  = () => cancelAnimationFrame(frame);
    const resume = () => { frame = requestAnimationFrame(tick); };
    track.parentElement.addEventListener('mouseenter', pause);
    track.parentElement.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(frame);
      track.parentElement?.removeEventListener('mouseenter', pause);
      track.parentElement?.removeEventListener('mouseleave', resume);
    };
  }, []);


  const toggleLike = (i) => {
    setLikes(prev => prev.map((l, idx) =>
      idx === i ? { count: l.liked ? l.count - 1 : l.count + 1, liked: !l.liked } : l
    ));
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="gal-hero">
        <div className="gal-hero-bg">
          <img src="/gallery/lounge2.jpeg" alt="" className="gal-hero-img" />
          <div className="gal-hero-overlay"></div>
        </div>
        <div className="gal-hero-content hero-animate">
          <p className="section-eyebrow hero-anim-1">Visual Stories</p>
          <h1 className="hero-anim-2">Our Gallery<br /><span className="gold">Moments at Hookah69</span></h1>
          <p className="hero-anim-3">Take a visual journey through our premium lounge experience</p>
          <div className="gal-hero-stats hero-anim-4">
            <div className="gal-stat"><span className="gold">20+</span><small>Photos</small></div>
            <div className="gal-stat"><span className="gold">4</span><small>Videos</small></div>
            <div className="gal-stat"><span className="gold">6</span><small>Categories</small></div>
          </div>
        </div>
      </section>

      {/* ── FEATURED CAROUSEL ── */}
      <section className="gal-featured-section">
        <h3 className="gal-featured-title">Featured Moments</h3>
        <div className="gal-carousel-viewport">
          <div className="gal-carousel-track" ref={trackRef}>
            {/* duplicate for seamless loop */}
            {[...FEATURED, ...FEATURED].map((item, i) => (
              <div className="gal-carousel-card" key={i}>
                <img src={item.img} alt={item.title} />
                <div className="gal-carousel-label">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="gal-grid-section">
        <div className="gal-grid">
          {ALL_ITEMS.map((item, i) => (
            <div className="gal-card" key={i}>
              <div className="gal-card-img-wrap">
                {item.type === 'video' ? (
                  <video
                    src={item.video}
                    poster={item.img}
                    className="gal-card-img"
                    controls
                    controlsList="nodownload"
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={item.img} alt={item.title} className="gal-card-img" />
                )}
                {item.featured && <span className="gal-badge">Featured</span>}
                {item.type === 'video' && <span className="gal-badge gal-badge-video"><i className="fas fa-play"></i> Video</span>}
                {item.type !== 'video' && (
                  <div className="gal-card-overlay">
                    <p className="gal-card-desc">{item.desc}</p>
                  </div>
                )}
              </div>
              <div className="gal-card-body">
                <h4 className="gal-card-title">{item.title}</h4>
                <p className="gal-card-sub">{item.desc}</p>
                <div className="gal-card-footer">
                  <span className="gal-card-date">{item.date}</span>
                  <div className="gal-card-actions">
                    <button
                      className={`gal-like-btn${likes[i].liked ? ' liked' : ''}`}
                      onClick={() => toggleLike(i)}
                      aria-label="Like"
                    >
                      <i className="fas fa-heart"></i>
                    </button>
                    <span className="gal-views"><i className="fas fa-eye"></i> {likes[i].count}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <p className="section-eyebrow">Create Your Memories</p>
          <h2>Want to <span className="gold">Experience This?</span></h2>
          <p>Reserve your table and create your own memories at Hookah69.</p>
          <Link to="/reserve" className="btn btn-orange btn-lg">Reserve Now</Link>
        </div>
      </section>
    </>
  );
}
