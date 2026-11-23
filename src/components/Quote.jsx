import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QUOTE_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.quote-word', {
        opacity: 1,
        stagger: 0.14,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
          end: 'center 45%',
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="quote" ref={sectionRef} className="quote-section">
      <div className="quote-watermark" aria-hidden="true">
        {QUOTE_DATA.watermarkJp}
      </div>

      <div className="quote-inner">
        <div className="section-eyebrow section-eyebrow--light">
          {QUOTE_DATA.eyebrow}
        </div>

        <blockquote className="quote-text">
          {QUOTE_DATA.quoteParts.map((word, idx) => (
            <span key={idx} className="quote-word">
              {word}
            </span>
          ))}
        </blockquote>

        <p className="quote-signature">{QUOTE_DATA.signature}</p>
      </div>
    </section>
  );
}
