import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Custom circular cursor follower with mix-blend-mode: difference.
 * Default size: 22px -> Scales up to 64px over interactive elements.
 */
export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer || !cursorRef.current) return;

    document.body.classList.add('has-custom-cursor');
    const cursor = cursorRef.current;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.24, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.24, ease: 'power3.out' });

    const handleMove = (e) => {
      cursor.classList.add('is-visible');
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleLeave = () => cursor.classList.remove('is-visible');
    const handleDown = () => cursor.classList.add('is-pressed');
    const handleUp = () => cursor.classList.remove('is-pressed');

    const interactiveSelector = 'a, button, [data-cursor="hover"]';

    const handleOver = (e) => {
      if (e.target.closest(interactiveSelector)) {
        cursor.classList.add('is-hovering');
      }
    };

    const handleOut = (e) => {
      if (e.target.closest(interactiveSelector)) {
        cursor.classList.remove('is-hovering');
      }
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
