import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { EXPERTISE_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

/**
 * Section 02 KEAHLIAN:
 * Interactive full-width rows with GSAP cursor-tracking floating image card
 * and subtle velocity-based rotation tilt.
 */
export default function Expertise({ onNavigate }) {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);
  const lastX = useRef(0);
  const [activePreview, setActivePreview] = useState(
    EXPERTISE_DATA.items[0].previewImage
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.expertise-reveal', {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 76%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleRowEnter = (imageSrc, e) => {
    setActivePreview(imageSrc);
    if (!previewRef.current) return;
    lastX.current = e.clientX;
    gsap.killTweensOf(previewRef.current);
    gsap.set(previewRef.current, { x: e.clientX + 28, y: e.clientY - 24 });
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.35,
      ease: 'power3.out',
    });
  };

  const handleRowMove = (e) => {
    if (!previewRef.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    const tilt = gsap.utils.clamp(-8, 8, dx * 0.45);

    gsap.to(previewRef.current, {
      x: e.clientX + 28,
      y: e.clientY - 24,
      rotation: tilt,
      duration: 0.4,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  const handleRowLeave = () => {
    if (!previewRef.current) return;
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.85,
      rotation: 0,
      duration: 0.28,
      ease: 'power2.in',
    });
  };

  return (
    <section id="keahlian" ref={sectionRef} className="expertise-section">
      <div className="container">
        <div className="section-eyebrow expertise-reveal">
          {EXPERTISE_DATA.eyebrow}
        </div>

        <div className="expertise-header expertise-reveal">
          <h2 className="expertise-title">
            {EXPERTISE_DATA.headingSerif}
            <span className="expertise-title__script">
              {EXPERTISE_DATA.headingScript}
            </span>
          </h2>
          <p className="expertise-subtitle">{EXPERTISE_DATA.subtitle}</p>
        </div>

        <div className="expertise-list">
          {EXPERTISE_DATA.items.map((item) => (
            <div
              key={item.num}
              className="expertise-row expertise-reveal"
              data-cursor="hover"
              role="button"
              tabIndex={0}
              onMouseEnter={(e) => handleRowEnter(item.previewImage, e)}
              onMouseMove={handleRowMove}
              onMouseLeave={handleRowLeave}
              onClick={() => onNavigate(item.targetSection)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigate(item.targetSection);
                }
              }}
            >
              <span className="expertise-row__num">{item.num}</span>

              <h3 className="expertise-row__title">{item.title}</h3>

              <div className="expertise-row__desc-wrap">
                <p className="expertise-row__desc">{item.description}</p>
                <div className="expertise-row__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="expertise-row__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="expertise-row__arrow" aria-hidden="true">
                <ArrowRight size={18} strokeWidth={1.5} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cursor-following preview card (240px x 300px) */}
      <div
        ref={previewRef}
        className="expertise-floating-preview"
        aria-hidden="true"
      >
        <img src={activePreview} alt="" />
      </div>
    </section>
  );
}
