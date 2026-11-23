import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SITE_META } from '../data/portfolioData';

/**
 * Exact video-matched Preloader:
 * - Dark charcoal overlay with katakana アディム, 1px progress bar,
 *   subtitle left, zero-padded counter 000 -> 100 right.
 * - Exits via 5-column staggered vertical curtain wipe upward.
 */
export default function Preloader({ onRevealStart, onComplete }) {
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const barRef = useRef(null);
  const panelsRef = useRef([]);
  const [count, setCount] = useState('000');
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.classList.add('is-loading');

    const obj = { value: 0 };
    const tl = gsap.timeline();

    // Animate 000 -> 100 counter & thin 1px progress line
    tl.to(obj, {
      value: 100,
      duration: 1.75,
      ease: 'power2.inOut',
      onUpdate: () => {
        const rounded = Math.round(obj.value);
        setCount(String(rounded).padStart(3, '0'));
        if (barRef.current) {
          barRef.current.style.width = `${rounded}%`;
        }
      },
    })
      // Fade out katakana + counter smoothly
      .to(contentRef.current, {
        opacity: 0,
        y: -14,
        duration: 0.42,
        ease: 'power2.in',
      })
      // Trigger Hero entrance animations right as curtains begin lifting
      .add(() => {
        onRevealStart?.();
      }, '-=0.12')
      // 5-column staggered vertical curtain wipe upward (matches 00:03 in video)
      .to(
        panelsRef.current,
        {
          yPercent: -100,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power4.inOut',
        },
        '-=0.05'
      )
      .add(() => {
        document.body.classList.remove('is-loading');
        setDone(true);
        onComplete?.();
      });

    return () => {
      tl.kill();
      document.body.classList.remove('is-loading');
    };
  }, [onRevealStart, onComplete]);

  return (
    <div
      ref={rootRef}
      className={`preloader ${done ? 'is-done' : ''}`}
      aria-hidden={done}
    >
      <div className="preloader__panels">
        {[0, 1, 2, 3, 4].map((idx) => (
          <div
            key={idx}
            ref={(el) => {
              panelsRef.current[idx] = el;
            }}
            className="preloader__panel"
          />
        ))}
      </div>

      <div ref={contentRef} className="preloader__content">
        <div className="preloader__jp">{SITE_META.katakana}</div>
        <div className="preloader__bar-wrap">
          <div className="preloader__bar-track">
            <div ref={barRef} className="preloader__bar-fill" />
          </div>
          <div className="preloader__meta">
            <span>{SITE_META.preloaderSubtitle}</span>
            <span className="preloader__counter">{count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
