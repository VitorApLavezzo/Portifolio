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
    { href: '#home', label: '~/home' },
    { href: '#skills', label: '~/skills' },
    { href: '#projects', label: '~/projects' },
    { href: '#playground', label: '~/playground' },
    { href: '#experience', label: '~/experience' },
    { href: '#education', label: '~/education' },
    { href: '#contact', label: '~/contact' },
  ];

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'} ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="#home" className="navbar-logo">
          <span className="navbar-logo-badge">VL</span>
          <span className="navbar-logo-status" aria-hidden="true" />
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
