import { useEffect, useRef } from 'react';
import { CV_URL } from '../../constants';
import './Navbar.css';

const LINKS = [
  { href: '#skills', label: '01 skills' },
  { href: '#projects', label: '02 projetos' },
  { href: '#experience', label: '03 experiência' },
  { href: '#education', label: '04 educação' },
  { href: '#contact', label: '05 contato' },
];

const Navbar = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scroller = document.scrollingElement || document.documentElement;
      const progress =
        scroller.scrollTop / Math.max(1, scroller.scrollHeight - scroller.clientHeight);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div ref={progressRef} className="navbar-progress" aria-hidden="true" />
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          <span className="navbar-logo-badge">VL</span>
          vitor.lavezzo
        </a>

        <div className="navbar-links">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="navbar-link">
              {label}
            </a>
          ))}
        </div>

        <a href={CV_URL} download className="navbar-cv">
          CV ↓
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
