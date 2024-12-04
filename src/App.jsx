import { useState, useEffect } from 'react';
import './App.css';
import Skills from './components/Skills/Skills';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Navbar from './components/Navbar/Navbar';
import { initAnimations } from './utils/animationObserver';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    initAnimations();
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="app-container">
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
      </main>
    </div>
  );
}

export default App;