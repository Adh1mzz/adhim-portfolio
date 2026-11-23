import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

/**
 * Section 04 PROJECTS:
 * - Desktop (>= 1024px): Pinned horizontal scroll showcase driven by GSAP ScrollTrigger.
 * - Tablet & Mobile (< 1024px): Smooth native horizontal swipe/drag.
 */
export default function Projects({ onSelectProject, onNavigate }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getScrollAmount = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 48);

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div className="container">
        <div className="section-eyebrow">{PROJECTS_DATA.eyebrow}</div>
        <div className="projects-header">
          <h2 className="projects-title">
            {PROJECTS_DATA.headingSerif}
            <span className="projects-title__script">
              {PROJECTS_DATA.headingScript}
            </span>
          </h2>
          <p className="projects-hint">{PROJECTS_DATA.scrollHint}</p>
        </div>
      </div>

      <div className="projects-viewport">
        <div ref={trackRef} className="projects-track">
          {/* Card 0: Dark Editorial Intro Poster */}
          <article className="project-poster-card">
            <div className="project-poster-card__top">
              {PROJECTS_DATA.posterCard.topLabel}
            </div>
            <div className="project-poster-card__jp" aria-hidden="true">
              {PROJECTS_DATA.posterCard.katakana}
            </div>
            <div className="project-poster-card__bottom">
              {PROJECTS_DATA.posterCard.bottomLabel}
            </div>
          </article>

          {/* Project Cards 01 - 07 */}
          {PROJECTS_DATA.items.map((project) => (
            <button
              key={project.id}
              type="button"
              className="project-card"
              data-cursor="hover"
              onClick={() => onSelectProject(project)}
            >
              <div className="project-card__media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__img"
                  loading="lazy"
                />
                <div className="project-card__overlay">
                  <span className="project-card__cta">DETAIL ↗</span>
                </div>
              </div>

              <div className="project-card__meta">
                <span>{project.code}</span>
                <span>{project.category}</span>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
            </button>
          ))}

          {/* End Cap CTA */}
          <div className="projects-endcap">
            <p className="projects-endcap__script">
              {PROJECTS_DATA.endCap.scriptText}
            </p>
            <button
              type="button"
              className="projects-endcap__btn"
              onClick={() => onNavigate('#kontak')}
            >
              <span>{PROJECTS_DATA.endCap.buttonLabel}</span>
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
