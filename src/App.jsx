import { useCallback, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Expertise from './components/Expertise';
import Quote from './components/Quote';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef(null);
  const [heroReveal, setHeroReveal] = useState(false);
  const [activeSection, setActiveSection] = useState('profil');
  const [selectedProject, setSelectedProject] = useState(null);

  // Initialize Lenis smooth scroll synced with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause Lenis scrolling while Project Modal is open
  useEffect(() => {
    if (!lenisRef.current) return;
    if (selectedProject) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [selectedProject]);

  // Track active section for Sticky Navbar highlight
  useEffect(() => {
    const ids = ['profil', 'keahlian', 'quote', 'projects', 'kontak'];
    const observers = ids
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { rootMargin: '-40% 0px -45% 0px' }
        );
        observer.observe(el);
        return observer;
      })
      .filter(Boolean);

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleRevealStart = useCallback(() => {
    setHeroReveal(true);
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    ScrollTrigger.refresh();
  }, []);

  const handleNavigate = useCallback((selector) => {
    const target = document.querySelector(selector);
    if (!target) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: selector === '#hero' ? 0 : -48,
        duration: 1.25,
      });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <CustomCursor />

      <Preloader
        onRevealStart={handleRevealStart}
        onComplete={handlePreloaderComplete}
      />

      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      <main>
        <Hero startReveal={heroReveal} />
        <Profile />
        <Expertise onNavigate={handleNavigate} />
        <Quote />
        <Projects
          onSelectProject={setSelectedProject}
          onNavigate={handleNavigate}
        />
      </main>

      <Footer onNavigate={handleNavigate} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
