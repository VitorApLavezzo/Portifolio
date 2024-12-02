import React from 'react';
import './Hero.css'; // Importando o CSS para o componente

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Olá, eu sou o Vitor Aparecido Lavezzo :)</h1>
        <p>Desenvolvedor Back-End</p>
        <div className="hero-buttons">
          <button className="btn">Download CV</button>
          <button className="btn btn-outline">Entrar em contato</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="src/components/Hero/1675897493970-removebg-preview.png" alt="Rhuan Bello" />
      </div>
    </div>
  );
};

export default Hero; 