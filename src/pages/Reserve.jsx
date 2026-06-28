import { useState } from 'react';

const EVENTS = [
  { key: 'Casual Hangout',       icon: 'fa-champagne-glasses' },
  { key: 'Birthday Celebration', icon: 'fa-cake-candles' },
  { key: 'Anniversary',          icon: 'fa-heart' },
  { key: 'Business Meeting',     icon: 'fa-briefcase' },
  
];

export default function Reserve() {
  const [selectedEvent, setSelectedEvent] = useState('Casual Hangout');
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '2', special: '' });

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const confirmViaWhatsApp = () => {
    const { name, email, phone, date, time, guests, special } = form;
    if (!name || !phone || !date || !time) {
      alert('Please fill in Full Name, Phone Number, Date and Time before confirming.');
      return;
    }
    const msg =
      '🪔 *Hookah69 Reservation Request*\n\n' +
      '🎉 *Event:* ' + selectedEvent + '\n' +
      '👤 *Name:* ' + name + '\n' +
      (email ? '📧 *Email:* ' + email + '\n' : '') +
      '📞 *Phone:* ' + phone + '\n' +
      '📅 *Date:* ' + date + '\n' +
      '🕐 *Time:* ' + time + '\n' +
      '👥 *Guests:* ' + guests + '\n' +
      (special ? '📝 *Special Requests:* ' + special + '\n' : '') +
      '\nThank you! Please confirm my booking.';
    window.open('https://wa.me/9779702027432?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* HERO */}
      <section className="reserve-hero">
        <div className="reserve-hero-overlay"></div>
        <div className="reserve-hero-content">
          <p className="section-eyebrow">Book Your Spot</p>
          <h1>Reserve a <span className="gold">Table</span></h1>
          <p>Secure your seat at Kathmandu's finest hookah lounge</p>
        </div>
      </section>

      <section className="rsv-section">
        <div className="rsv-wrapper rsv-wrapper--single">
          {/* FORM */}
          <div className="rsv-right">
            <div className="rsv-form-card">
              <div className="rsv-form-header">
                <h3>Reserve Your Table</h3>
                <p>Fill in the details and we'll send your booking via WhatsApp</p>
              </div>

              {/* Event Type */}
              <div className="rsv-field-group">
                <label className="rsv-label"><i className="fas fa-calendar-star"></i> Event Type</label>
                <div className="event-grid">
                  {EVENTS.map(ev => (
                    <button
                      key={ev.key}
                      type="button"
                      className={`evt-btn${selectedEvent === ev.key ? ' active' : ''}`}
                      onClick={() => setSelectedEvent(ev.key)}
                    >
                      <i className={`fas ${ev.icon}`}></i> {ev.key}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="rsv-field-group">
                <label className="rsv-label" htmlFor="rsv_name"><i className="fas fa-user"></i> Full Name *</label>
                <input type="text" id="rsv_name" className="rsv-input" placeholder="John Doe" value={form.name} onChange={set('name')} required />
              </div>

              {/* Email */}
              <div className="rsv-field-group">
                <label className="rsv-label" htmlFor="rsv_email"><i className="fas fa-envelope"></i> Email Address *</label>
                <input type="email" id="rsv_email" className="rsv-input" placeholder="john@example.com" value={form.email} onChange={set('email')} />
              </div>

              {/* Phone */}
              <div className="rsv-field-group">
                <label className="rsv-label" htmlFor="rsv_phone"><i className="fas fa-phone"></i> Phone Number *</label>
                <input type="tel" id="rsv_phone" className="rsv-input" placeholder="+977 981-2345678" value={form.phone} onChange={set('phone')} required />
              </div>

              {/* Date & Time */}
              <div className="rsv-row">
                <div className="rsv-field-group">
                  <label className="rsv-label" htmlFor="rsv_date"><i className="fas fa-calendar"></i> Date *</label>
                  <input type="date" id="rsv_date" className="rsv-input" value={form.date} onChange={set('date')} required />
                </div>
                <div className="rsv-field-group">
                  <label className="rsv-label" htmlFor="rsv_time"><i className="fas fa-clock"></i> Time *</label>
                  <input type="time" id="rsv_time" className="rsv-input" min="09:00" max="22:00" value={form.time} onChange={set('time')} required />
                  <span className="rsv-hint">Open: 10:00 AM - 22:00 PM</span>
                </div>
              </div>

              {/* Guests */}
              <div className="rsv-field-group">
                <label className="rsv-label" htmlFor="rsv_guests"><i className="fas fa-users"></i> Number of Guests *</label>
                <div className="rsv-select-wrap">
                  <select id="rsv_guests" className="rsv-input rsv-select" value={form.guests} onChange={set('guests')}>
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    <option value="10+">10+ Guests</option>
                  </select>
                  <i className="fas fa-chevron-down rsv-select-arrow"></i>
                </div>
              </div>

              {/* Special */}
              <div className="rsv-field-group">
                <label className="rsv-label" htmlFor="rsv_special">
                  <i className="fas fa-comment-dots"></i> Special Request <span className="rsv-optional">(Optional)</span>
                </label>
                <textarea id="rsv_special" className="rsv-input" rows="3" placeholder="Any special requirements? (Allergies, decorations, cake, etc.)" value={form.special} onChange={set('special')}></textarea>
              </div>

              <button type="button" className="btn-wa-confirm" onClick={confirmViaWhatsApp}>
                <i className="fab fa-whatsapp"></i> Confirm via WhatsApp
              </button>
              <p className="rsv-status"><span className="status-dot"></span> Tables available for booking</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
