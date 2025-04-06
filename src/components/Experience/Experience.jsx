import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const [isExpandedNappIntegration, setIsExpandedNappIntegration] = useState(false);
  const [isExpandedNappAss, setIsExpandedNappAss] = useState(false);
  const [isExpandedNappInternship, setIsExpandedNappInternship] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleNappIntegration = () => {
    setIsExpandedNappIntegration(!isExpandedNappAss);
  };

  const toggleNappAss = () => {
    setIsExpandedNappAss(!isExpandedNappAss);
  };

  const toggleNappInternship = () => {
    setIsExpandedNappInternship(!isExpandedNappInternship);
  };

  return (
    <div className="experience-container">
      <h2>Minhas Experiências</h2>
      <div className="experience-item animated-card">
        <h3 onClick={toggleNappIntegration} className="clickable-title">
          NAPP - Analista de Integração Júnior
          <span className="experience-period">Janeiro de 2025 - Presente</span>
        </h3>
        {isExpandedNappIntegration && (
          <div className="experience-details">
            <ul>
              <li>Responsável pela integração de lojas localizadas em shoppings e aeroportos, com foco na auditoria dos empreendimentos.</li>
              <li>Coleta de informações por meio de ferramentas instaladas remotamente nos computadores das lojas, além do uso de rotinas de web scraping, web services, entre outros métodos.</li>
              <li>Utilização de tecnologias como: Python, Git, SQL Server, SQLite, PostgreSQL, Firebird, Oracle, Access, MySQL, entre outras.</li>
              <li>Desenvolvimento orientado a objetos como principal metodologia.</li>
            </ul>
          </div>
        )}
      </div>
      <div className="experience-item animated-card">
        <h3 onClick={toggleNappAss} className="clickable-title">
          NAPP - Assistente de Integração (Central de Catálogos)
          <span className="experience-period"> Julho de 2023 - Janeiro de 2025</span>
        </h3>
        {isExpandedNappIntegration && (
          <div className="experience-details">
            <ul>
              <li>No primeiro momento, fiquei responsável pelo O2O (online to offline), focado em produtos enviados para o marketplace do google.</li>
              <li>Com o passar do tempo passei a entrar para a parte técnica do setor, onde fiquei focado no desenvolvimento de Web Scrapings e scripts de automatização.</li>
              <li>Responsável pela integração e sincronização de dados de catálogos entre diversos sistemas e plataformas.</li>
              <li>Faço a análise e validação dos dados integrados, garantindo conformidade com os padrões de qualidade e requisitos dos clientes.</li>
            </ul>
          </div>
        )}
      </div>
      <div className="experience-item animated-card">
        <h3 onClick={toggleNappInternship} className="clickable-title">
          NAPP - Central de Catálogos (Estagiário)
          <span className="experience-period"> Fevereiro de 2023 - Julho de 2023</span>
        </h3>
        {isExpandedNappInternship && (
          <div className="experience-details">
            <ul>
              <li>Auxiliava na organização e atualização dos catálogos de produtos.</li>
              <li>Participava de reuniões de equipe para o planejamento e execução de estratégias de melhoria dos catálogos.</li>
              <li>Auxiliava na integração de novos dados e informações dos produtos ao sistema central.</li>
              <li>Introdução da área de desenvolvimento do setor.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience; 