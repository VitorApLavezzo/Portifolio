import React from 'react';
import './Education.css';

const Education = ({ isLightMode }) => {
  return (
    <div className={`education-container ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <h2>Educação e Formação</h2>
      <div className="education-item">
        <h3>Universidade Paulista, Bacharelado em Ciência da Computação | Cursando | 2023 - 2026</h3>
        <p>Foco em desenvolvimento de software e tecnologias emergentes.</p>
      </div>
      <div className="education-item">
        <h3>ETEC Dep. Salim Sedeh, Ensino Médio integrado ao técnico em Desenvolvimento de Sistemas | 2022</h3>
        <p>Formação técnica em desenvolvimento de sistemas e programação.</p>
      </div>
      <div className="education-item">
        <h3>Curso complementar sobre SQL/Firebird pela Napp Academy</h3>
        <p>Aprendizado em bancos de dados e gerenciamento de dados.</p>
      </div>
      <div className="education-item">
        <h3>Curso complementar sobre Python pela Udemy | Cursando</h3>
        <p>Desenvolvimento de habilidades em programação com Python.</p>
      </div>
    </div>
  );
};

export default Education; 