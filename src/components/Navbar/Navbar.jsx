import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Início' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#experience', label: 'Experiência' },
    { href: '#education', label: 'Educação' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'} ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="#home" className="navbar-logo">
          VL<span className="logo-dot">.</span>
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="navbar-right">
          <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle" aria-label="Alternar tema">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
