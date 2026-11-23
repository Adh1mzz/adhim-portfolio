import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE_META } from '../data/portfolioData';

export default function Navbar({ onNavigate, activeSection }) {
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      const kontakEl = document.getElementById('kontak');
      const threshold = heroEl ? heroEl.offsetHeight * 0.65 : 500;
      setVisible(window.scrollY > threshold);

      if (kontakEl) {
        const rect = kontakEl.getBoundingClientRect();
        setIsDark(rect.top <= 72);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <header
        className={`navbar ${visible ? 'is-visible' : ''} ${isDark ? 'is-dark' : ''}`}
      >
        <div className="container navbar__inner">
          <a
            href="#hero"
            className="navbar__logo"
            onClick={(e) => handleLinkClick(e, '#hero')}
          >
            <span>{SITE_META.brandFirst}</span>
            <span className="navbar__logo-script">{SITE_META.brandScriptInitial}</span>
          </a>

          <nav aria-label="Navigasi Utama">
            <ul className="navbar__links">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`navbar__link ${isActive ? 'is-active' : ''}`}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      <span className="navbar__num">{item.num}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className={`navbar__burger ${menuOpen ? 'is-open' : ''}`}
            aria-label="Buka menu navigasi"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-nav__list">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="mobile-nav__link"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                <span className="mobile-nav__num">{item.num}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
