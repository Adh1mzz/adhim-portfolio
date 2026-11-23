import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { FOOTER_DATA } from '../data/portfolioData';

export default function Footer({ onNavigate }) {
  return (
    <footer id="kontak" className="footer-section">
      <div className="container">
        <div className="section-eyebrow section-eyebrow--light">
          {FOOTER_DATA.eyebrow}
        </div>

        <h2 className="footer-heading">
          {FOOTER_DATA.headingSerif}
          <span className="footer-heading__script">
            {FOOTER_DATA.headingScript}
          </span>
        </h2>

        {/* 4-Column Bordered Social Grid */}
        <div className="footer-socials">
          {FOOTER_DATA.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className="footer-social-link"
            >
              <span className="footer-social-link__text">
                <span className="footer-social-link__name">{social.name}</span>
                <span className="footer-social-link__handle">
                  {social.handle}
                </span>
              </span>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                className="footer-social-link__icon"
              />
            </a>
          ))}
        </div>

        {/* Metadata & Back to Top Row */}
        <div className="footer-meta">
          <div className="footer-meta__left">{FOOTER_DATA.metaLeft}</div>
          <div className="footer-meta__center">{FOOTER_DATA.metaCenter}</div>
          <button
            type="button"
            className="footer-top-btn"
            onClick={() => onNavigate('#hero')}
          >
            <span>{FOOTER_DATA.backToTopLabel}</span>
            <span className="footer-top-btn__circle">
              <ArrowUp size={15} strokeWidth={1.5} />
            </span>
          </button>
        </div>

        {/* Giant Edge-to-Edge Wordmark */}
        <div className="footer-wordmark" aria-hidden="true">
          {FOOTER_DATA.giantWord}
        </div>

        <p className="footer-copyright">{FOOTER_DATA.copyright}</p>
      </div>
    </footer>
  );
}
