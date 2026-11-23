import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_META } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ startReveal }) {
  const heroRef = useRef(null);
  const portraitParallaxRef = useRef(null);
  const portraitImgRef = useRef(null);
  const titleWrapRef = useRef(null);
  const hasAnimated = useRef(false);

  // 1. State awal sebelum preloader terbuka
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero__char", { yPercent: 115, opacity: 0 });
      gsap.set(".hero__portrait", { y: 40, opacity: 0, scale: 0.97 });
      gsap.set(".hero__script-accent", { y: 20, opacity: 0 });
      gsap.set(".hero__jp", { y: 16, opacity: 0 });
      gsap.set(".hero__stagger", { y: 18, opacity: 0 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 2. Animasi masuk saat curtain reveal selesai
  useEffect(() => {
    if (!startReveal || hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".hero__char", {
        yPercent: 0,
        opacity: 1,
        duration: 1.05,
        stagger: 0.06,
        ease: "power4.out",
      })
        .to(
          ".hero__portrait",
          { y: 0, opacity: 1, scale: 1, duration: 1.0, ease: "power3.out" },
          "-=0.75",
        )
        .to(".hero__jp", { y: 0, opacity: 1, duration: 0.7 }, "-=0.7")
        .to(
          ".hero__script-accent",
          { y: 0, opacity: 1, duration: 0.85 },
          "-=0.65",
        )
        .to(
          ".hero__stagger",
          { y: 0, opacity: 1, duration: 0.75, stagger: 0.08 },
          "-=0.65",
        );
    }, heroRef);

    return () => ctx.revert();
  }, [startReveal]);

  // 3. INTERAKTIF: Mouse Parallax 3D + Scroll Parallax (khusus desktop)
  useEffect(() => {
    const isDesktop = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    if (!isDesktop || !heroRef.current || !portraitParallaxRef.current) return;

    const heroEl = heroRef.current;

    const movePhotoX = gsap.quickTo(portraitParallaxRef.current, "x", {
      duration: 0.65,
      ease: "power3.out",
    });
    const movePhotoY = gsap.quickTo(portraitParallaxRef.current, "y", {
      duration: 0.65,
      ease: "power3.out",
    });
    const tiltPhoto = gsap.quickTo(portraitParallaxRef.current, "rotation", {
      duration: 0.65,
      ease: "power3.out",
    });

    // Teks raksasa di belakang bergerak berlawanan agar terasa efek kedalaman 3D
    const moveTitleX = gsap.quickTo(titleWrapRef.current, "x", {
      duration: 0.85,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      const rect = heroEl.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 s.d. 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      movePhotoX(relX * 28);
      movePhotoY(relY * 16);
      tiltPhoto(relX * 2.5);
      moveTitleX(relX * -18);
    };

    const handleMouseLeave = () => {
      movePhotoX(0);
      movePhotoY(0);
      tiltPhoto(0);
      moveTitleX(0);
    };

    heroEl.addEventListener("mousemove", handleMouseMove);
    heroEl.addEventListener("mouseleave", handleMouseLeave);

    // Scroll Parallax halus saat halaman digulir ke bawah
    const ctx = gsap.context(() => {
      gsap.to(".hero__portrait-wrap", {
        y: 65,
        ease: "none",
        scrollTrigger: {
          trigger: heroEl,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => {
      heroEl.removeEventListener("mousemove", handleMouseMove);
      heroEl.removeEventListener("mouseleave", handleMouseLeave);
      ctx.revert();
    };
  }, []);

  // 4. INTERAKTIF: Efek Hover langsung pada foto cutout
  const handlePortraitEnter = () => {
    if (!portraitImgRef.current) return;
    gsap.to(portraitImgRef.current, {
      scale: 1.035,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handlePortraitLeave = () => {
    if (!portraitImgRef.current) return;
    gsap.to(portraitImgRef.current, {
      scale: 1,
      duration: 0.55,
      ease: "power3.out",
    });
  };

  const letters = SITE_META.heroGiantWord.split("");

  return (
    <div id="hero" ref={heroRef} className="hero-wrapper">
      <section className="hero" aria-label="Hero">
        <div className="hero__frame">
          <div className="hero__barcode" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="hero__top">
            <div className="hero__identity hero__stagger">
              {/* Badge Logo UNIM + Pill INFORMATIKA */}
              <div className="hero__badge" aria-label="UNIM Informatika">
                <div className="hero__badge-box">
                  <img
                    src={SITE_META.badgeLogo || "/images/logo_UNIM.png"}
                    alt="Logo Universitas Islam Majapahit"
                    className="hero__badge-logo"
                  />
                </div>
                <div className="hero__badge-pill">{SITE_META.badgePill}</div>
              </div>

              <div className="hero__intro-block">
                <p className="hero__role">{SITE_META.heroRoleTitle}</p>
                <p className="hero__tagline">
                  {SITE_META.heroTagline.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < SITE_META.heroTagline.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="hero__date-block hero__stagger">
              <p className="hero__date">{SITE_META.heroDateLocation}</p>
              <p className="hero__credit">{SITE_META.heroCredit}</p>
            </div>
          </div>

          <div className="hero__center">
            <div className="hero__jp">{SITE_META.katakana}</div>

            {/* Wrapper teks belakang untuk parallax berlawanan */}
            <div ref={titleWrapRef} className="hero__title-wrap">
              <h1 className="hero__title" aria-label={SITE_META.heroGiantWord}>
                {letters.map((char, idx) => (
                  <span key={idx} className="hero__char-mask">
                    <span className="hero__char">{char}</span>
                  </span>
                ))}
              </h1>

              <span className="hero__script-accent" aria-hidden="true">
                {SITE_META.heroScriptAccent}
              </span>
            </div>
          </div>

          {/* Wrapper Foto Utama Interaktif */}
          <div className="hero__portrait-wrap">
            <div ref={portraitParallaxRef} className="hero__portrait-parallax">
              <img
                ref={portraitImgRef}
                src={SITE_META.heroImage}
                alt={SITE_META.heroImageAlt}
                className="hero__portrait"
                data-cursor="hover"
                onMouseEnter={handlePortraitEnter}
                onMouseLeave={handlePortraitLeave}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="hero__bottom">
            <div className="hero__news hero__stagger">
              <h2 className="hero__news-title">
                {SITE_META.currentFocusTitle}
              </h2>
              <p className="hero__news-text">{SITE_META.currentFocusText}</p>
            </div>

            <div className="hero__motto hero__stagger">
              <h2 className="hero__motto-title">{SITE_META.mottoTitle}</h2>
              <p className="hero__motto-quote">{SITE_META.mottoQuote}</p>
              <p className="hero__motto-author">{SITE_META.mottoAuthor}</p>
            </div>
          </div>

          <div className="hero__scroll hero__stagger" aria-hidden="true">
            <span className="hero__scroll-text">SCROLL</span>
            <span className="hero__scroll-line" />
          </div>
        </div>
      </section>

      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((groupIdx) => (
            <div key={groupIdx} className="marquee-group">
              {SITE_META.marqueeItems.map((item, idx) => (
                <div
                  key={`${groupIdx}-${idx}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "clamp(1.5rem, 3vw, 2.8rem)",
                  }}
                >
                  <span
                    className={`marquee-item ${
                      item.style === "jp"
                        ? "marquee-item--jp"
                        : "marquee-item--italic"
                    }`}
                  >
                    {item.text}
                  </span>
                  <span className="marquee-star">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
