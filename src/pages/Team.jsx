import { Link } from 'react-router-dom';

const TEAM = [
  {
    name: 'Rajan Thapa',
    role: 'Founder & CEO',
    initials: 'RT',
    img: '/team/rajan.jpg',   // drop your photo as public/team/rajan.jpg
    bio: 'Visionary entrepreneur who transformed a dream into Kathmandu\'s finest hookah lounge. 10+ years in hospitality.',
    socials: [
      { icon: 'fa-instagram', url: '#' },
      { icon: 'fa-facebook',  url: '#' },
      { icon: 'fa-linkedin',  url: '#' },
    ],
  },
  {
    name: 'Priya Sharma',
    role: 'Head Mixologist',
    initials: 'PS',
    img: '/team/priya.jpg',   // drop your photo as public/team/priya.jpg
    bio: 'Award-winning cocktail artist with training from Mumbai\'s top bars. Creates our signature drinks menu.',
    socials: [
      { icon: 'fa-instagram', url: '#' },
      { icon: 'fa-facebook',  url: '#' },
    ],
  },
  {
    name: 'Bikash Rai',
    role: 'Hookah Master',
    initials: 'BR',
    img: '/team/bikash.jpg',  // drop your photo as public/team/bikash.jpg
    bio: 'Expert in blending premium hookah flavors. 7 years of experience crafting unforgettable smoke sessions.',
    socials: [
      { icon: 'fa-instagram', url: '#' },
      { icon: 'fa-tiktok',    url: '#' },
    ],
  },
  {
    name: 'Sunita Lama',
    role: 'Events Manager',
    initials: 'SL',
    img: '/team/sunita.jpg',  // drop your photo as public/team/sunita.jpg
    bio: 'Orchestrates flawless events from intimate anniversaries to large-scale private parties. Detail-obsessed.',
    socials: [
      { icon: 'fa-instagram', url: '#' },
      { icon: 'fa-facebook',  url: '#' },
      { icon: 'fa-linkedin',  url: '#' },
    ],
  },
];

function TeamAvatar({ member }) {
  return (
    <div className="team-avatar-wrap">
      <img
        src={member.img}
        alt={member.name}
        className="team-photo"
        onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
      />
      <div className="team-initials" style={{ display: 'none' }}>{member.initials}</div>
    </div>
  );
}

export default function Team() {
  return (
    <>
      <section className="page-hero team-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="section-eyebrow">The People Behind the Magic</p>
          <h1>Meet Our <span className="gold">Team</span></h1>
          <p>Passionate professionals dedicated to your perfect evening</p>
        </div>
      </section>

      <section className="team-section">
        <div className="section-header">
          <p className="section-eyebrow">Our Family</p>
          <h2 className="section-title">The Faces of <span className="gold">Hookah69</span></h2>
          <p className="section-subtitle">Every great experience starts with great people. Meet the team that makes Hookah69 extraordinary.</p>
        </div>

        <div className="team-grid">
          {TEAM.map((member, i) => (
            <div className="team-card" key={i}>
              <TeamAvatar member={member} />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
              <div className="team-socials">
                {member.socials.map((s, j) => (
                  <a key={j} href={s.url} className="team-social-link" aria-label={s.icon} target="_blank" rel="noopener noreferrer">
                    <i className={`fab ${s.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <p className="section-eyebrow">Join Our Journey</p>
          <h2>Experience Our <span className="gold">Hospitality</span></h2>
          <p>Come meet our team in person and let us craft an unforgettable evening for you.</p>
          <Link to="/reserve" className="btn btn-orange btn-lg">Reserve Your Table</Link>
        </div>
      </section>
    </>
  );
}
