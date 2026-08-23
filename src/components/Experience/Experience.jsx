import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: 'Analista de Integração Júnior',
    company: 'NAPP',
    period: 'Jan 2025 — Presente',
    current: true,
    bullets: [
      'Integração de farmácias, supermercados, petshops e lojas dos EUA, com foco em coleta de produtos.',
      'Coleta de dados via ferramentas instaladas remotamente, web scraping e web services.',
      'Stack: Python, Git, SQL Server, SQLite, PostgreSQL, Firebird, Oracle, Access, MySQL.',
      'Desenvolvimento orientado a objetos como metodologia principal.',
    ],
  },
  {
    role: 'Assistente de Integração',
    company: 'NAPP',
    period: 'Jul 2023 — Jan 2025',
    current: false,
    bullets: [
      'Responsável pelo O2O (online to offline) para o Google Marketplace.',
      'Desenvolvimento de scripts de web scraping e automação de processos.',
      'Integração e sincronização de dados de catálogos entre sistemas e plataformas.',
      'Análise e validação de dados integrados, garantindo qualidade e conformidade.',
    ],
  },
  {
    role: 'Estagiário — Central de Catálogos',
    company: 'NAPP',
    period: 'Fev 2023 — Jul 2023',
    current: false,
    bullets: [
      'Organização e atualização de catálogos de produtos.',
      'Participação em reuniões de equipe para estratégias de melhoria.',
      'Apoio na integração de novos dados ao sistema central.',
      'Introdução à área de desenvolvimento do setor.',
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="experience-container">
      <span className="section-eyebrow">~/experience</span>
      <h2 className="section-heading">Experiência</h2>
      <p className="section-subtitle">Minha trajetória profissional</p>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className={`timeline-item ${openIndex === i ? 'active' : ''}`}>
            <div className="timeline-dot" />
            <div className="timeline-body">
              <button
                className="timeline-header"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <div className="timeline-header-left">
                  <span className="timeline-role">{exp.role}</span>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <div className="timeline-header-right">
                  {exp.current && <span className="badge-current">Atual</span>}
                  <span className="timeline-period">{exp.period}</span>
                  <span className="timeline-chevron">{openIndex === i ? '−' : '+'}</span>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className="timeline-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <ul>
                      {exp.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
