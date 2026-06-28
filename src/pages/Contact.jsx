import { useState } from 'react';

const FAQS = [
  {
    q: 'What are your opening hours?',
    a: 'We are open daily from 9:00 AM to 10:00 PM, including weekends and public holidays.',
  },
  {
    q: 'Do I need a reservation?',
    a: 'Walk-ins are welcome, but we strongly recommend reserving especially on weekends and for special occasions to guarantee your preferred table.',
  },
  {
    q: 'What is the minimum age to enter?',
    a: 'Hookah69 is an 18+ establishment. Valid government ID is required for entry. No exceptions.',
  },
  {
    q: 'Can I bring my own cake for celebrations?',
    a: 'Yes! You are welcome to bring a cake for birthdays or anniversaries. Let us know in advance so we can arrange candles, plates, and a special surprise.',
  },
  {
    q: 'Do you offer private event packages?',
    a: 'Absolutely. We offer customized Birthday, Anniversary, Corporate, and Private Party packages. Contact us for details and pricing.',
  },
  {
    q: 'Is there parking available?',
    a: 'Bike parking is available directly outside the venue. For cars, public parking areas are available within a 2-minute walk at Greenland Chowk.',
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = form;
    const msg =
      '💬 *Contact Message — Hookah69*\n\n' +
      '👤 *Name:* ' + name + '\n' +
      (form.email ? '📧 *Email:* ' + form.email + '\n' : '') +
      (phone ? '📞 *Phone:* ' + phone + '\n' : '') +
      '📝 *Message:* ' + message;
    window.open('https://wa.me/9779702027432?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer');
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content hero-animate">
          <p className="section-eyebrow hero-anim-1">Get In Touch</p>
          <h1 className="hero-anim-2">Contact <span className="gold">Us</span></h1>
          <p className="hero-anim-3">We'd love to hear from you</p>
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Info Panel */}
          <div className="contact-info">
            <h3 className="contact-info-title">Get In Touch</h3>
            <p className="contact-info-sub">We're here to help. Reach us through any of the channels below.</p>

            <div className="info-card">
              <div className="info-icon"><i className="fas fa-location-dot"></i></div>
              <div>
                <h4>Location</h4>
                <p>Greenland Chowk, Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fas fa-phone"></i></div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+9779702027432">+977 970-2027432</a></p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fas fa-clock"></i></div>
              <div>
                <h4>Opening Hours</h4>
                <p> 9 AM – 10 PM</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fas fa-envelope"></i></div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:hookah403@gmail.com">hookah403@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-socials">
              <p className="contact-socials-label">Follow Us</p>
              <div className="social-links-row">
                
            <a href="https://www.instagram.com/hookah69_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@hookah696" className="social-icon"><i className="fab fa-tiktok"></i></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrap">
            <h3>Send Us a Message</h3>
            <p className="contact-form-sub">Have a question or special request? We'll get back to you shortly.</p>

            {sent && <div className="alert alert-success">Message sent via WhatsApp!</div>}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="c_name">Full Name *</label>
                <input id="c_name" type="text" className="form-input" placeholder="John Doe" value={form.name} onChange={set('name')} required />
              </div>
              <div className="form-group">
                <label htmlFor="c_email">Email Address</label>
                <input id="c_email" type="email" className="form-input" placeholder="john@example.com" value={form.email} onChange={set('email')} />
              </div>
              <div className="form-group">
                <label htmlFor="c_phone">Phone Number</label>
                <input id="c_phone" type="tel" className="form-input" placeholder="+977 98XXXXXXXX" value={form.phone} onChange={set('phone')} />
              </div>
              <div className="form-group">
                <label htmlFor="c_message">Message *</label>
                <textarea id="c_message" className="form-input" rows="5" placeholder="How can we help you?" value={form.message} onChange={set('message')} required></textarea>
              </div>
              <button type="submit" className="btn btn-whatsapp btn-full">
                <i className="fab fa-whatsapp"></i> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="map-wrapper">
          <iframe
            title="Hookah69 Location"
            src="https://www.google.com/maps?q=Hookah69+Premium+Bar,+Greenland+Chowk,+Kathmandu,+Nepal&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="map-overlay-card">
            <div className="map-overlay-icon"><i className="fas fa-location-dot"></i></div>
            <h4>Hookah69 Premium Bar</h4>
            <p>Greenland Chowk, Kathmandu</p>
            <a
              href="https://www.google.com/maps/search/Greenland+Chowk+Kathmandu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-orange btn-sm"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-inner">
          <div className="section-header">
            <p className="section-eyebrow">Common Questions</p>
            <h2 className="section-title">Frequently Asked <span className="gold">Questions</span></h2>
          </div>

          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'}`}></i>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
