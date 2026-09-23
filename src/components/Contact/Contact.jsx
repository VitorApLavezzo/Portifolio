import { useEffect, useRef } from 'react';
import Reveal from '../Reveal/Reveal';
import SectionLabel from '../SectionLabel/SectionLabel';
import {
  CV_URL,
  EMAIL,
  GITHUB_URL,
  GITHUB_HANDLE,
  LINKEDIN_URL,
  LINKEDIN_HANDLE,
} from '../../constants';
import './Contact.css';

const Contact = () => {
  const magnetRef = useRef(null);

  // The address drifts toward the cursor before you reach it.
  useEffect(() => {
    const magnet = magnetRef.current;
    if (!magnet) return undefined;

    const onMove = (event) => {
      const rect = magnet.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.3;
      magnet.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      magnet.style.transform = '';
    };

    magnet.addEventListener('mousemove', onMove);
    magnet.addEventListener('mouseleave', onLeave);
    return () => {
      magnet.removeEventListener('mousemove', onMove);
      magnet.removeEventListener('mouseleave', onLeave);
      onLeave();
    };
  }, []);

  return (
    <section id="contact" className="section contact">
      <div className="contact-inner">
        <SectionLabel text="05 / CONTATO" tone="ink" />

        <Reveal as="h2" className="contact-title">
          Vamos
          <br />
          conversar?
        </Reveal>

        <Reveal className="contact-email-wrap">
          <a ref={magnetRef} href={`mailto:${EMAIL}`} className="contact-email">
            {EMAIL} ↗
          </a>
        </Reveal>

        <div className="contact-links">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-card-label">GitHub</span>
            <span className="contact-card-value">{GITHUB_HANDLE} ↗</span>
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-card-label">LinkedIn</span>
            <span className="contact-card-value">{LINKEDIN_HANDLE} ↗</span>
          </a>
          <a href={CV_URL} download className="contact-card">
            <span className="contact-card-label">Currículo</span>
            <span className="contact-card-value">Download PDF ↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
