import { useState, useEffect } from 'react';
import './App.css';
import Skills from './components/Skills/Skills'; // Importando o componente Skills
import Hero from './components/Hero/Hero'; // Importando o componente Hero
import Experience from './components/Experience/Experience'; // Importando o componente Experience
import Education from './components/Education/Education';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [darkMode, setDarkMode] = useState(false); // Estado para controlar o modo

  const toggleTheme = () => {
    setDarkMode(!darkMode); // Alterna entre os modos
  };

  useEffect(() => {
    // Adiciona ou remove a classe de tema ao body
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle">
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </nav>
      <Hero /> {/* Adicionando o componente Hero */}
      <Skills /> {/* Adicionando o componente Skills */}
      <Experience /> {/* Adicionando o componente Experience */}
      <Education />
    </div>
  );
}

export default App;