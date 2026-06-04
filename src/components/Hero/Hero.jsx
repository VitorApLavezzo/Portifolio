import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <motion.div
        className="hero-content"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      >
        <span className="hero-greeting">Olá, eu sou</span>
        <h1 className="hero-name">Vitor Lavezzo</h1>
        <p className="hero-role">Desenvolvedor Back-End</p>
        <p className="hero-bio">
          Desenvolvedor focado em integração de sistemas, automação e qualidade de dados.
          Experiência com Python, Golang, múltiplos bancos de dados e metodologias orientadas a objetos.
        </p>
        <div className="hero-buttons">
          <a href="Vitor Lavezzo - CV.pdf" download className="btn btn-primary">
            Download CV
          </a>
          <a href="https://github.com/VitorApLavezzo" target="_blank" rel="noreferrer" className="btn btn-outline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/vitor-aparecido-lavezzo" target="_blank" rel="noreferrer" className="btn btn-outline">
            LinkedIn
          </a>
        </div>
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      >
        <img
          src="https://vitoraplavezzo.github.io/Portifolio/1675897493970-removebg-preview.png"
          alt="Vitor Lavezzo"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
