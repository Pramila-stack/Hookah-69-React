import { useEffect } from 'react';

export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll(
      '.feature-card, .review-card, .stat-card, .team-card, .value-card, .gallery-item, .info-card'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal', 'revealed');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, deps);
}
