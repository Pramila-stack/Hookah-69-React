import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SMOKE_ITEMS, HOOKAH_CLASSIC_FLAVORS, HOOKAH_SPECIALS } from '../data/menuData';

const TABS = [
  { key: 'all',       label: 'All Items', icon: 'fa-list' },
  { key: 'smoke',     label: 'Hookah',    icon: 'fa-fire' },
  { key: 'mocktails', label: 'Mocktails', icon: 'fa-blender' },
  { key: 'cocktails', label: 'Cocktails', icon: 'fa-cocktail' },
  { key: 'bar',       label: 'Bar',       icon: 'fa-wine-bottle' },
  { key: 'cafe',      label: 'Café',      icon: 'fa-coffee' },
  { key: 'food',      label: 'Food',      icon: 'fa-hamburger' },
];


export default function Menu() {
  const [activeTab, setActiveTab] = useState('all');
  const tabBarRef = useRef(null);
  const sectionRefs = {
    all:       useRef(null),
    smoke:     useRef(null),
    mocktails: useRef(null),
    cocktails: useRef(null),
    bar:       useRef(null),
    cafe:      useRef(null),
    food:      useRef(null),
  };

  const handleTabClick = (key) => {
    setActiveTab(key);
    setTimeout(() => {
      const target = key === 'all' ? tabBarRef.current : sectionRefs[key].current;
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 20);
  };

  return (
    <>
      {/* HERO */}
      <section className="menu-hero">
        <div className="menu-hero-overlay"></div>
        <div className="menu-hero-content hero-animate">
          <div className="section-badge hero-anim-1"><i className="fas fa-utensils"></i> Our Menu <i className="fas fa-utensils"></i></div>
          <h1 className="hero-anim-2">Explore Our <span className="gold">Flavors</span></h1>
          <p className="hero-anim-3">From premium hookahs to handcrafted cocktails, gourmet food to artisan café beverages.</p>
        </div>
      </section>

      {/* TAB NAV */}
      <div className="menu-tab-bar" ref={tabBarRef}>
        <div className="menu-tabs">
          {TABS.map(t => (
            <button
              key={t.key}
              className={`menu-tab${activeTab === t.key ? ' active' : ''}`}
              onClick={() => handleTabClick(t.key)}
            >
              <i className={`fas ${t.icon}`}></i>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── HOOKAH ── */}
      <div ref={sectionRefs.smoke} className={`menu-panel${activeTab === 'smoke' || activeTab === 'all' ? ' active' : ''}`}>
        <div className="hookah-panel">
          <div className="hk-heading">
            <span className="hk-heading-icon"><i className="fas fa-fire"></i></span>
            <h2>Hookah</h2>
          </div>

          <div className="hk-grid">
            {/* Classic Flavors */}
            <div className="hk-card">
              <h3 className="hk-card-title"><i className="fas fa-leaf"></i> Classic Flavors</h3>
              <div className="hk-flavors-grid">
                {HOOKAH_CLASSIC_FLAVORS.map((f, i) => (
                  <div className="hk-flavor-pill" key={i}>{f}</div>
                ))}
              </div>
            </div>

            {/* Signature Specials */}
            <div className="hk-card hk-card--special">
              <h3 className="hk-card-title"><i className="fas fa-fire"></i> Signature Specials</h3>
              <div className="hk-specials-list">
                {HOOKAH_SPECIALS.map((item, i) => (
                  <div className="hk-special-item" key={i}>
                    <div className="hk-special-left">
                      <span className="hk-special-name">{item.name}</span>
                      <span className="hk-special-desc">{item.desc}</span>
                    </div>
                    {item.price && <span className="hk-special-price">Rs. {item.price}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="menu-note">
            <i className="fas fa-info-circle"></i>
            All hookah sessions include coal service &amp; setup. Add-ons available at the counter.
          </div>
        </div>
      </div>

      {/* ── MOCKTAILS ── */}
      <div ref={sectionRefs.mocktails} className={`menu-panel${activeTab === 'mocktails' || activeTab === 'all' ? ' active' : ''}`}>
        <div className="drinks-panel-wrap">
          <div className="drinks-panel-header">
            <div className="section-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
              <i className="fas fa-blender"></i> Signature Mocktails
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginTop: 10 }}>
              Craft <span className="gold">Mocktails</span>
            </h2>
            <p style={{ color: '#777', marginTop: 10 }}>Refreshing non-alcoholic creations crafted with fresh fruits and premium syrups</p>
          </div>
          <div className="menu-photo-wrap">
            <img src="/menu_mocktails.jpeg" alt="Signature Mocktails Menu" className="menu-photo" />
          </div>
        </div>
      </div>

      {/* ── COCKTAILS ── */}
      <div ref={sectionRefs.cocktails} className={`menu-panel${activeTab === 'cocktails' || activeTab === 'all' ? ' active' : ''}`}>
        <div className="drinks-panel-wrap">
          <div className="drinks-panel-header">
            <div className="section-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
              <i className="fas fa-cocktail"></i> Signature Cocktails
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginTop: 10 }}>
              Craft <span className="gold">Cocktails</span>
            </h2>
            <p style={{ color: '#777', marginTop: 10 }}>Innovative cocktails crafted by our award-winning mixologist</p>
          </div>
          <div className="menu-photo-wrap">
            <img src="/menu-cocktails.jpeg" alt="Signature Cocktails Menu" className="menu-photo" />
          </div>
        </div>
      </div>

      {/* ── BAR ── */}
      <div ref={sectionRefs.bar} className={`menu-panel${activeTab === 'bar' || activeTab === 'all' ? ' active' : ''}`}>
        <div className="drinks-panel-wrap">
          <div className="drinks-panel-header">
            <div className="section-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
              <i className="fas fa-wine-bottle"></i> Bar Menu
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginTop: 10 }}>
              Spirits, Wines &amp; <span className="gold">More</span>
            </h2>
            <p style={{ color: '#777', marginTop: 10 }}>A curated selection of premium spirits, wines, shots, and beers</p>
          </div>
          <div className="menu-photo-wrap">
            <img src="/menu_bar.jpeg" alt="Bar Menu" className="menu-photo" />
          </div>
        </div>
      </div>

      {/* ── CAFÉ ── */}
      <div ref={sectionRefs.cafe} className={`menu-panel${activeTab === 'cafe' || activeTab === 'all' ? ' active' : ''}`}>
        <div className="drinks-panel-wrap">
          <div className="drinks-panel-header">
            <div className="section-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
              <i className="fas fa-coffee"></i> Café Menu
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginTop: 10 }}>
              Artisan <span className="gold">Café</span> Beverages
            </h2>
            <p style={{ color: '#777', marginTop: 10 }}>Specialty coffees, teas, frappes, matcha, and refreshing cold drinks</p>
          </div>
          <div className="menu-photo-wrap">
            <img src="/menu_cafe.jpeg" alt="Café Menu" className="menu-photo" />
          </div>
        </div>
      </div>

      {/* ── FOOD ── */}
      <div ref={sectionRefs.food} className={`menu-panel${activeTab === 'food' || activeTab === 'all' ? ' active' : ''}`}>
        <div className="drinks-panel-wrap">
          <div className="drinks-panel-header">
            <div className="section-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
              <i className="fas fa-hamburger"></i> Food Menu
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginTop: 10 }}>
              Gourmet <span className="gold">Kitchen</span>
            </h2>
            <p style={{ color: '#777', marginTop: 10 }}>From light bites to full meals — all crafted fresh in our kitchen daily</p>
          </div>
          <div className="menu-photo-wrap">
            <img src="/menu_food.jpeg" alt="Food Menu" className="menu-photo" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="menu-cta-section">
        <div className="cta-inner">
          <div className="section-badge" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <i className="fas fa-calendar-check"></i> Reserve a Table
          </div>
          <h2>Ready to <span className="gold">Experience It All?</span></h2>
          <p>Book your table and enjoy the full Hookah69 experience tonight.</p>
          <Link to="/reserve" className="btn btn-orange" style={{ borderRadius: 8, padding: '15px 40px', fontSize: '1rem' }}>
            Reserve Now
          </Link>
        </div>
      </section>
    </>
  );
}
