import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="navbar-content">
        <div className="navbar-left">
          <a href="#home" className="nav-link">Início</a>
          <a href="#skills" className="nav-link">Habilidades</a>
          <a href="#experience" className="nav-link">Experiência</a>
          <a href="#education" className="nav-link">Educação</a>
        </div>
        <div className="navbar-right">
          <button onClick={toggleTheme} className="theme-toggle">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 