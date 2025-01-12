import React from 'react';
import { motion } from 'framer-motion'; // Importando motion do framer-motion
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <motion.div 
        className="hero-content"
        initial={{ y: -50, opacity: 0 }} // Estado inicial
        animate={{ y: 0, opacity: 1 }} // Estado final
        transition={{ duration: 0.5 }} // Transição
      >
        <h1>Olá, eu sou o Vitor Aparecido Lavezzo :)</h1>
        <p>Desenvolvedor Back-End</p>
        <div className="hero-buttons">
          <a href="Vitor Lavezzo - CV.pdf" download className="btn">Download CV</a>
          <a href="https://github.com/VitorApLavezzo" target="_blank" className="btn">Github</a>
          </div>
      </motion.div>
      <div className="hero-image">
        <img src={`https://vitoraplavezzo.github.io/Portifolio/1675897493970-removebg-preview.png`} alt="Imagem" />
      </div>
    </div>
  );
};

export default Hero; 