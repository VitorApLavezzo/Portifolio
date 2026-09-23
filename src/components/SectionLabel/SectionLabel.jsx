import { useEffect, useRef } from 'react';
import './SectionLabel.css';

const GLYPHS = '▚▞█▓▒░/<>_#01';
const FRAMES = 18;
const FRAME_MS = 35;

/**
 * The numbered section eyebrow ("01 / SKILLS"). On first scroll-in the text
 * decodes from noise into its final characters — the one flourish that carries
 * the "systems" identity across every section heading.
 */
const SectionLabel = ({ text, tone = 'signal' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let intervalId;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          let frame = 0;
          intervalId = window.setInterval(() => {
            frame += 1;
            const revealed = (frame / FRAMES) * text.length;
            el.textContent = [...text]
              .map((char, i) =>
                char === ' ' || i < revealed
                  ? char
                  : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              )
              .join('');
            if (frame >= FRAMES) {
              window.clearInterval(intervalId);
              el.textContent = text;
            }
          }, FRAME_MS);
        });
      },
      { rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearInterval(intervalId);
      el.textContent = text;
    };
  }, [text]);

  return (
    <div ref={ref} className={`section-label section-label-${tone}`}>
      {text}
    </div>
  );
};

export default SectionLabel;
