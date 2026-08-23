import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const CAREER_START = new Date('2023-02-01');

const getUptime = () => {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();
  let months = now.getMonth() - CAREER_START.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return `${years}a ${months}m`;
};

const Hero = () => {
  return (
    <div className="hero-container">
      <motion.div
        className="hero-content"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="hero-statusbar">
          <span className="status-item status-live">
            <span className="status-dot" />
            disponível para novos projetos
          </span>
          <span className="status-divider" />
          <span className="status-item">uptime: {getUptime()}</span>
          <span className="status-divider" />
          <span className="status-item">build: 2026.08</span>
        </div>

        <h1 className="hero-name">Vitor Lavezzo</h1>
        <p className="hero-role">
          <span className="hero-role-key">role</span>
          <span className="hero-role-colon">:</span> desenvolvedor full-stack &amp; integração de sistemas
        </p>
        <p className="hero-bio">
          Construo pontes confiáveis entre sistemas: integrações, automações e pipelines de dados
          que precisam simplesmente funcionar. Stack principal em Python e Golang, com bancos de
          dados relacionais e não relacionais no dia a dia.
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
        className="hero-id-card"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="hero-id-frame">
          <img
            src="https://vitoraplavezzo.github.io/Portifolio/1675897493970-removebg-preview.png"
            alt="Vitor Lavezzo"
          />
        </div>
        <div className="hero-id-meta">
          <span>VITOR LAVEZZO</span>
          <span>SP · BRASIL</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
