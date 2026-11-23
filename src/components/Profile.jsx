import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROFILE_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.profile-reveal', {
        y: 36,
        opacity: 0,
        duration: 0.85,
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

  return (
    <section id="profil" ref={sectionRef} className="profile-section">
      <div className="container">
        <div className="section-eyebrow profile-reveal">{PROFILE_DATA.eyebrow}</div>

        <div className="profile-grid">
          {/* Left Column: 3:4 Portrait + Vertical Japanese Text + Captions */}
          <div className="profile-media profile-reveal">
            <div className="profile-image-wrap">
              <img
                src={PROFILE_DATA.portraitImage}
                alt="Potret Ahmad Fauzul Adhim"
                className="profile-image"
                loading="lazy"
              />
            </div>

            <div className="profile-jp-vertical" aria-hidden="true">
              {PROFILE_DATA.katakana}
            </div>

            <div className="profile-caption">
              <span>{PROFILE_DATA.captionLeft}</span>
              <span>{PROFILE_DATA.captionRight}</span>
            </div>
          </div>

          {/* Right Column: Editorial Bio + 2x2 Grid + Bordered Statement Box */}
          <div className="profile-content">
            <h2 className="profile-heading profile-reveal">
              {PROFILE_DATA.headingSerif}
              <span className="profile-heading__script">
                {PROFILE_DATA.headingScript}
              </span>
            </h2>

            <p className="profile-bio profile-reveal">{PROFILE_DATA.bio}</p>

            <div className="profile-divider profile-reveal" />

            <div className="profile-meta-grid profile-reveal">
              {PROFILE_DATA.details.map((item) => (
                <div key={item.label}>
                  <p className="profile-meta-label">{item.label}</p>
                  <p className="profile-meta-value">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="profile-statement profile-reveal">
              <div className="profile-statement__head">
                <span>{PROFILE_DATA.statementLabel}</span>
                <span className="profile-statement__jp">
                  {PROFILE_DATA.statementJp}
                </span>
              </div>
              <p className="profile-statement__quote">
                {PROFILE_DATA.statementQuote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
