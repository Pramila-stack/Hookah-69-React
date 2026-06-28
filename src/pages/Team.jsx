import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const TEAM = [
  {
    name: 'Prithvi Giri',
    role: 'Chef',
    initials: 'PG',
    img: '/team/prithvi.jpg',
    bio: 'Prithvi Giri, 23 Age, from Sindhupalchok, is a highly skilled and passionate culinary professional with Six years of experience in the kitchen, including three years as a chef. Beginning his journey from the ground level, he has worked his way up through dedication, discipline, and continuous learning. Having gained experience across different kitchens and environments, Prithvi has refined his skills and developed a sharp understanding of flavors, presentation, and kitchen management. Known for his creativity, leadership, and commitment to excellence, he consistently delivers high-quality dishes while maintaining top standards. His journey, experience, and professionalism make him a standout and valuable asset to any culinary team.',
  },
  {
    name: 'Suresh Giri',
    role: 'Bartender',
    initials: 'SG',
    img: '/team/suresh.jpg',
    bio: 'Suresh Giri, 21 Age, hailing from Sindhupalchok, is a skilled and passionate hospitality professional with over three years of hands-on experience as both a bartender and barista. Known for his ability to craft quality beverages—ranging from expertly brewed coffee to well-balanced cocktails—he combines creativity with excellent customer service to deliver a memorable experience for every guest. With a strong work ethic and a friendly personality, Suresh consistently brings positive energy to the workplace, making him a valuable addition to any team in the food and beverage industry.',
  },
  {
    name: 'Shova Gurung',
    role: 'Waitress',
    initials: 'SG',
    img: '/team/shova.jpg',
    bio: 'Shova Gurung, 20 Age, from Lamjung, is a talented and versatile hospitality professional with four years of experience as a waitress. An all-rounder in both service and bar operations, she is skilled at delivering excellent customer service while also assisting in beverage preparation and bar support. Known for her friendly attitude, strong communication skills, and ability to perform efficiently in fast-paced environments, Shova creates a welcoming and enjoyable experience for every guest. Her adaptability, teamwork, and dedication make her a valuable asset to Hookah69.',
  },
  {
    name: 'Roshan Chunara',
    role: 'Waiter',
    initials: 'RC',
    img: '/team/roshan.jpg',
    bio: 'Roshan Chunara, 23, from Baitadi, is a hardworking and experienced waiter with three years of experience in the hospitality industry. He is known for his polite and professional approach, ensuring guests receive attentive and efficient service. With strong communication skills and the ability to handle busy environments with ease, Roshan consistently creates a positive dining experience for customers. His dedication, teamwork, and friendly attitude make him a valuable asset at Hookah69.',
  },
  {
    name: 'Krishna Gurung',
    role: 'Cook',
    initials: 'KG',
    img: '/team/krishna.jpg',
    bio: 'Krishna Gurung, 21 Aged, from Gorkha, is a dedicated and hardworking culinary professional with three years of experience in the kitchen. Starting his journey as a helper and steadily working his way up to a cook, he has developed strong skills, discipline, and a deep understanding of kitchen operations. Known for his commitment, reliability, and willingness to learn, Krishna consistently delivers quality food while maintaining high standards of hygiene and teamwork. His growth and determination make him a valuable asset to Hookah69.',
  },
  {
    name: 'Sujan Tamang',
    role: 'Cook',
    initials: 'ST',
    img: '/team/sujan.jpg',
    bio: 'Sujan Tamang, 21 Aged, from Sindhupalchok, is a passionate and hardworking culinary professional with three years of experience in the kitchen. Starting from the ground level, he has steadily grown through dedication and hands-on learning to become a skilled cook. He has a strong understanding of kitchen operations, food preparation, and maintaining hygiene standards. Known for his discipline, consistency, and eagerness to improve, Sujan brings both energy and commitment to his work, making him a reliable and valuable member of any kitchen team.',
  },
  {
    name: 'Suresh Sunar',
    role: 'Helper',
    initials: 'SS',
    img: '/team/sureshsunar.jpg',
    bio: 'Suresh Sunar, 20 Age, from Gulmi, is a dedicated and hardworking individual with 2.5 years of experience as a kitchen helper. Starting from the very root, he has gained valuable hands-on knowledge of kitchen operations, food preparation support, and maintaining cleanliness and hygiene standards. Known for his strong work ethic, willingness to learn, and positive attitude, Suresh consistently supports the team with reliability and efficiency, making him a dependable asset in any kitchen environment.',
  },
];

function TeamCard({ member, onView }) {
  const shortBio = member.bio.length > 120 ? member.bio.slice(0, 120) + '...' : member.bio;
  return (
    <div className="tm-card">
      <div className="tm-card-photo">
        <img
          src={member.img}
          alt={member.name}
          className="tm-photo-img"
          onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
        />
        <div className="tm-photo-fallback" style={{ display: 'none' }}>{member.initials}</div>
      </div>
      <div className="tm-card-body">
        <span className="tm-name">{member.name}</span>
        <p className="tm-role">{member.role}</p>
        <p className="tm-bio-short">{shortBio}</p>
        <button className="tm-view-btn" onClick={() => onView(member)}>View Profile</button>
      </div>
    </div>
  );
}

function ProfileModal({ member, onClose }) {
  if (!member) return null;
  return createPortal(
    <div className="tm-modal-overlay">
      <div className="tm-modal">
        <button className="tm-modal-close" onClick={onClose}><i className="fas fa-times"></i></button>
        <div className="tm-modal-top">
          <div className="tm-modal-avatar">
            <img
              src={member.img}
              alt={member.name}
              className="tm-modal-img"
              onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="tm-modal-fallback" style={{ display: 'none' }}>{member.initials}</div>
          </div>
          <div className="tm-modal-info">
            <span className="tm-modal-name">{member.name}</span>
            <p className="tm-modal-role">{member.role}</p>
            <p className="tm-modal-bio">{member.bio}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Team() {
  const [active, setActive] = useState(null);

  const openModal = (member) => setActive(member);
  const closeModal = () => setActive(null);

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
          <p className="section-subtitle">Every great experience starts with great people.</p>
        </div>

        <div className="tm-grid">
          {TEAM.map((member, i) => (
            <TeamCard key={i} member={member} onView={openModal} />
          ))}
        </div>
      </section>

      <ProfileModal member={active} onClose={closeModal} />

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
