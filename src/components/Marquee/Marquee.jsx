import { useEffect, useRef } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';
import './Marquee.css';

const TERMS = [
  'Python', 'Golang', 'PostgreSQL', 'SQL Server', 'MongoDB', 'React',
  'Web Scraping', 'Integrações', 'Automação', 'Pipelines de dados', 'FastAPI', 'Git',
];

// Doubled so translating the track by -50% lands exactly on a seam.
const TRACK = [...TERMS, ...TERMS];

const Marquee = () => {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return undefined;

    // Movimento continuo e o unico efeito daqui que incomoda de verdade quem
    // pede menos animacao: em vez de parar a esteira, roda bem mais devagar.
    const animation = track.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }],
      { duration: reduced ? 110000 : 38000, iterations: Infinity }
    );

    // updatePlaybackRate eases into the new speed instead of jumping, which a
    // CSS animation-duration swap would not do.
    const slow = () => animation.updatePlaybackRate(0.25);
    const resume = () => animation.updatePlaybackRate(1);
    root.addEventListener('mouseenter', slow);
    root.addEventListener('mouseleave', resume);

    return () => {
      animation.cancel();
      root.removeEventListener('mouseenter', slow);
      root.removeEventListener('mouseleave', resume);
    };
  }, [reduced]);

  return (
    <div ref={rootRef} className="marquee" aria-hidden="true">
      <div ref={trackRef} className="marquee-track">
        {TRACK.map((term, i) => (
          <span key={`${term}-${i}`} className="marquee-item">
            {term}
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
