import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SMOKE_ITEMS, HOOKAH_CLASSIC_FLAVORS, HOOKAH_SPECIALS,
  SPIRITS, WINES, SHOTS, BEERS,
  CAFE_ESPRESSO, CAFE_ICE_ESPRESSO, CAFE_ALTERNATIVES, FRAPPES,
  MILKSHAKES, LASSI, JUICES, MATCHA, TEA,
  FOOD_SALADS, FOOD_GRAVY, FOOD_RICE_BOWL, FOOD_VEG_SNACKS,
  FOOD_NONVEG_SNACKS, FOOD_SPECIAL, FOOD_BURGER, FOOD_SIZZLER,
  FOOD_CHOWMIEN, FOOD_PASTA, FOOD_PIZZA, FOOD_NOODLES, FOOD_MOMO
} from '../data/menuData';

const TABS = [
  { key: 'smoke',     label: 'Hookah',    icon: 'fa-fire' },
  { key: 'mocktails', label: 'Mocktails', icon: 'fa-blender' },
  { key: 'cocktails', label: 'Cocktails', icon: 'fa-cocktail' },
  { key: 'bar',       label: 'Bar',       icon: 'fa-wine-bottle' },
  { key: 'cafe',      label: 'Café',      icon: 'fa-coffee' },
  { key: 'food',      label: 'Food',      icon: 'fa-hamburger' },
];

function CafeRow({ items }) {
  return <>{items.map((item, i) => (
    <div className="cafe-row" key={i}>
      <span>{item.name}</span>
      <span className="cprice">Rs.{item.price}</span>
    </div>
  ))}</>;
}

function FoodRow({ items }) {
  return <>{items.map((item, i) => (
    <div className="food-row" key={i}>
      <span className="fname">{item.name}</span>
      <span className="fprice">Rs.{item.price}</span>
    </div>
  ))}</>;
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('smoke');

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
      <div className="menu-tab-bar">
        <div className="menu-tabs">
          {TABS.map(t => (
            <button
              key={t.key}
              className={`menu-tab${activeTab === t.key ? ' active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              <i className={`fas ${t.icon}`}></i>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── HOOKAH ── */}
      <div className={`menu-panel${activeTab === 'smoke' ? ' active' : ''}`}>
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
      <div className={`menu-panel${activeTab === 'mocktails' ? ' active' : ''}`}>
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
      <div className={`menu-panel${activeTab === 'cocktails' ? ' active' : ''}`}>
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
      <div className={`menu-panel${activeTab === 'bar' ? ' active' : ''}`}>
        <div className="bar-panel">
          <div className="bar-inner">
            <div className="panel-header">
              <div className="section-badge bar-badge"><i className="fas fa-wine-bottle"></i> Bar Menu</div>
              <h2>Spirits, Wines &amp; More</h2>
              <p>A curated selection of premium spirits, wines, shots, and beers</p>
            </div>

            {/* Spirits */}
            <div className="bar-block">
              <div className="bar-block-title"><i className="fas fa-bottle-droplet"></i> Spirits</div>
              <div className="bar-col-header">
                <span>Name</span>
                <div className="col-right"><span>30 ml</span><span>Full 750 ml</span></div>
              </div>
              {SPIRITS.map((item, i) => (
                <div className="bar-row" key={i}>
                  <span className="bar-item-name">{item.name}</span>
                  <div className="bar-prices">
                    <span className="bar-price">Rs.{item.price30}</span>
                    <span className="bar-price">Rs.{item.price750}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Wine */}
            <div className="bar-block">
              <div className="bar-block-title"><i className="fas fa-wine-glass-alt"></i> Wine</div>
              <div className="bar-col-header">
                <span>Name</span>
                <div className="col-right"><span>Glass</span><span>Bottle</span></div>
              </div>
              {WINES.map((item, i) => (
                <div className="bar-row" key={i}>
                  <span className="bar-item-name">{item.name}</span>
                  <div className="bar-prices">
                    <span className="bar-price">Rs.{item.glass}</span>
                    <span className="bar-price">Rs.{item.bottle}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Shots & Beers */}
            <div className="bar-two-col">
              <div className="bar-block">
                <div className="bar-block-title"><i className="fas fa-martini-glass"></i> Shots</div>
                {SHOTS.map((item, i) => (
                  <div className="simple-bar-row" key={i}>
                    <span>{item.name}</span>
                    <span className="sprice">Rs.{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="bar-block">
                <div className="bar-block-title"><i className="fas fa-beer"></i> Beers</div>
                {BEERS.map((item, i) => (
                  <div className="simple-bar-row" key={i}>
                    <span>{item.name}</span>
                    <span className="sprice">Rs.{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Smoke in bar */}
            <div className="bar-block" style={{ marginTop: 40 }}>
              <div className="bar-block-title"><i className="fas fa-fire"></i> Smoke</div>
              {SMOKE_ITEMS.map((item, i) => (
                <div className="bar-row" key={i}>
                  <span className="bar-item-name">
                    {item.name}{item.desc && <small style={{ fontWeight: 400, color: '#778' }}> ({item.desc})</small>}
                  </span>
                  <div className="bar-prices" style={{ gap: 0 }}>
                    <span className="bar-price">Rs.{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="bar-script">Bar</p>
        </div>
      </div>

      {/* ── CAFÉ ── */}
      <div className={`menu-panel${activeTab === 'cafe' ? ' active' : ''}`}>
        <div className="cafe-panel">
          <div className="cafe-inner">
            <div className="panel-header">
              <div className="section-badge cafe-badge"><i className="fas fa-coffee"></i> Café Menu</div>
              <h2>Artisan Café Beverages</h2>
              <p>Specialty coffees, teas, frappes, matcha, and refreshing cold drinks</p>
            </div>
            <div className="cafe-columns">
              <div>
                <div className="cafe-block">
                  <div className="cafe-block-title"><i className="fas fa-coffee"></i> Espresso Based</div>
                  <CafeRow items={CAFE_ESPRESSO} />
                </div>
                <div className="cafe-block">
                  <div className="cafe-block-title"><i className="fas fa-blender"></i> Frappe</div>
                  <CafeRow items={FRAPPES} />
                </div>
                <div className="cafe-block">
                  <div className="cafe-block-title"><i className="fas fa-mug-saucer"></i> Milkshakes</div>
                  <CafeRow items={MILKSHAKES} />
                </div>
                <div className="cafe-block">
                  <div className="cafe-block-title"><i className="fas fa-glass-water"></i> Lassi</div>
                  <CafeRow items={LASSI} />
                </div>
                <div className="cafe-block">
                  <div className="cafe-block-title"><i className="fas fa-lemon"></i> Fresh Juice</div>
                  <CafeRow items={JUICES} />
                </div>
              </div>
              <div>
                <div className="cafe-block">
                  <div className="cafe-block-title"><i className="fas fa-ice-cream"></i> Espresso Based Ice Beverage</div>
                  <CafeRow items={CAFE_ICE_ESPRESSO} />
                </div>
                <div className="cafe-block">
                  <div className="cafe-block-title"><i className="fas fa-mug-hot"></i> Coffee Alternative</div>
                  <CafeRow items={CAFE_ALTERNATIVES} />
                </div>
                <div className="cafe-block">
                  <div className="cafe-block-title">🍵 Matcha Drinks</div>
                  <CafeRow items={MATCHA} />
                </div>
                <div className="cafe-block">
                  <div className="cafe-block-title"><i className="fas fa-leaf"></i> Flavour Tea</div>
                  <CafeRow items={TEA} />
                </div>
              </div>
            </div>
            <p className="cafe-script">Cafe's</p>
          </div>
        </div>
      </div>

      {/* ── FOOD ── */}
      <div className={`menu-panel${activeTab === 'food' ? ' active' : ''}`}>
        <div className="food-panel">
          <div className="food-inner">
            <div className="panel-header">
              <div className="section-badge food-badge"><i className="fas fa-hamburger"></i> Food Menu</div>
              <h2>Gourmet Kitchen</h2>
              <p>From light bites to full meals — all crafted fresh in our kitchen daily</p>
            </div>

            {/* Top grid */}
            <div className="food-top-grid">
              <div>
                <div className="food-block">
                  <div className="food-block-title"><i className="fas fa-seedling"></i> Salads</div>
                  <FoodRow items={FOOD_SALADS} />
                </div>
                <div className="food-block">
                  <div className="food-block-title"><i className="fas fa-utensils"></i> Gravy with Rice</div>
                  <FoodRow items={FOOD_GRAVY} />
                </div>
                <div className="food-block">
                  <div className="food-block-title">🍚 Rice Bowl</div>
                  <FoodRow items={FOOD_RICE_BOWL} />
                </div>
              </div>
              <div className="food-block">
                <div className="food-block-title"><i className="fas fa-leaf"></i> Veg-Snacks</div>
                <FoodRow items={FOOD_VEG_SNACKS} />
              </div>
              <div className="food-block">
                <div className="food-block-title"><i className="fas fa-fish"></i> Non-Veg Snacks</div>
                <FoodRow items={FOOD_NONVEG_SNACKS} />
              </div>
            </div>

            {/* Special box */}
            <div className="food-special-box">
              <h3>Hookah69 Special</h3>
              {FOOD_SPECIAL.map((item, i) => (
                <div className="food-special-row" key={i}>
                  <span>{item.name}</span>
                  <span>Rs.{item.price}</span>
                </div>
              ))}
            </div>

            {/* Bottom grid */}
            <div className="food-bottom-grid">
              <div>
                <div className="food-block">
                  <div className="food-block-title"><i className="fas fa-hamburger"></i> Burger &amp; Sandwich</div>
                  <FoodRow items={FOOD_BURGER} />
                </div>
                <div className="food-block">
                  <div className="food-block-title"><i className="fas fa-fire-flame-curved"></i> Sizzler</div>
                  <FoodRow items={FOOD_SIZZLER} />
                </div>
                <div className="food-block">
                  <div className="food-block-title"><i className="fas fa-utensils"></i> Chowmien &amp; Thukpa</div>
                  <FoodRow items={FOOD_CHOWMIEN} />
                </div>
              </div>
              <div>
                <div className="food-block">
                  <div className="food-block-title"><i className="fas fa-utensils"></i> Pasta</div>
                  <FoodRow items={FOOD_PASTA} />
                </div>
                <div className="food-block">
                  <div className="food-block-title">
                    <i className="fas fa-pizza-slice"></i> Pizza <small style={{ fontSize: '.75rem', fontWeight: 500, color: '#999', textTransform: 'none', letterSpacing: 0 }}>(Small / Large)</small>
                  </div>
                  <FoodRow items={FOOD_PIZZA} />
                </div>
              </div>
              <div>
                <div className="food-block">
                  <div className="food-block-title">🍜 Noodles</div>
                  <FoodRow items={FOOD_NOODLES} />
                </div>
              </div>
            </div>

            {/* MO:MO */}
            <div className="food-momo-section">
              <div className="momo-table-title">🥟 MO:MO &nbsp; Steam / Kothey / Jhol / Chilly</div>
              <table className="momo-table">
                <thead>
                  <tr>
                    <th>Type</th><th>Steam</th><th>Kothey</th><th>Jhol</th><th>Chilly</th>
                  </tr>
                </thead>
                <tbody>
                  {FOOD_MOMO.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>Rs.{item.steam}</td>
                      <td>Rs.{item.kothey}</td>
                      <td>Rs.{item.jhol}</td>
                      <td>Rs.{item.chilly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="food-script">Foods</p>
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
