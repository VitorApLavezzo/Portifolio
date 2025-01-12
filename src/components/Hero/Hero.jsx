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
          <motion.button 
            className="btn btn-outline"
            whileHover={{ scale: 1.1 }} // Aumenta o botão ao passar o mouse
            whileTap={{ scale: 0.9 }} // Diminui o botão ao clicar
          >
            Entrar em contato
          </motion.button>
        </div>
      </motion.div>
      <div className="hero-image">
        <img src="Portilio/1675897493970-removebg-preview.png" alt="Rhuan Bello" />
      </div>
    </div>
  );
};

export default Hero; 