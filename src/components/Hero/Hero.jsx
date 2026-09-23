import { useEffect, useRef } from 'react';
import Reveal from '../Reveal/Reveal';
import stagger from '../../utils/stagger';
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from '../../constants';
import vitorPhoto from '../../assets/vitor.png';
import './Hero.css';

const CAREER_START = new Date('2023-02-01');
const NAME_LINES = ['Vitor', 'Lavezzo'];

const getUptime = () => {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();
  let months = now.getMonth() - CAREER_START.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return `${years}a ${months}m`;
};

const Hero = () => {
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  // Spotlight follows the cursor across the header, and the ID card tilts
  // toward it. Both only move in direct response to the pointer, so they stay
  // on even when the visitor asks for less motion.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    const onMove = (event) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--x', `${event.clientX - rect.left}px`);
      hero.style.setProperty('--y', `${event.clientY - rect.top}px`);

      const card = cardRef.current;
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const dx = (event.clientX - (cardRect.left + cardRect.width / 2)) / rect.width;
      const dy = (event.clientY - (cardRect.top + cardRect.height / 2)) / rect.height;
      card.style.transform = `perspective(700px) rotateY(${dx * 14}deg) rotateX(${-dy * 14}deg)`;
    };

    const onLeave = () => {
      if (cardRef.current) cardRef.current.style.transform = '';
    };

    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
    return () => {
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
      onLeave();
    };
  }, []);

  return (
    <header id="home" ref={heroRef} className="hero">
      <div className="hero-dots" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <Reveal className="hero-status">
        <span className="hero-status-live">
          <span className="hero-status-dot" />
          disponível para novos projetos
        </span>
        <span>SP · Brasil — {getUptime()} de carreira</span>
      </Reveal>

      <div className="hero-main">
        <div>
          <h1 className="hero-name" aria-label="Vitor Lavezzo.">
            {NAME_LINES.map((line, lineIndex) => {
              const offset = NAME_LINES.slice(0, lineIndex).reduce((n, l) => n + l.length, 0);
              return (
                <span key={line} className="hero-name-line" aria-hidden="true">
                  {[...line].map((char, i) => (
                    <span
                      key={`${char}-${i}`}
                      className="hero-letter"
                      style={{ animationDelay: `${150 + (offset + i) * 45}ms` }}
                    >
                      {char}
                    </span>
                  ))}
                  {lineIndex === NAME_LINES.length - 1 && (
                    <span className="hero-name-dot">.</span>
                  )}
                </span>
              );
            })}
          </h1>
        </div>

        {/* The reveal owns opacity/translate on the outer node; the tilt owns
            transform on the inner one, so the two never fight over `transform`. */}
        <Reveal className="hero-card-reveal">
          <div ref={cardRef} className="hero-card">
            <div className="hero-card-frame">
              <img src={vitorPhoto} alt="Vitor Lavezzo" />
            </div>
            <div className="hero-card-meta">
              <span>ID · VL-2023</span>
              <span className="hero-card-meta-dot">●</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hero-meta">
        <Reveal className="hero-role" delay={stagger(0)}>
          <span className="hero-role-key">role:</span> desenvolvedor full-stack
          <br />
          &amp; integração de sistemas
        </Reveal>

        <Reveal as="p" className="hero-bio" delay={stagger(1)}>
          Construo pontes confiáveis entre sistemas: integrações, automações e pipelines de
          dados que precisam simplesmente funcionar. Python e Golang no dia a dia.
        </Reveal>

        <Reveal className="hero-cta" delay={stagger(2)}>
          <a href={CV_URL} download className="hero-cv">
            Download CV
          </a>
          <div className="hero-socials">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
};

export default Hero;
