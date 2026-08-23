import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const educationItems = [
  {
    institution: 'Universidade Paulista (UNIP)',
    course: 'Bacharelado em Ciência da Computação',
    period: '2023 — 2026',
    status: 'Cursando',
    description: 'Foco em desenvolvimento de software e tecnologias emergentes.',
  },
  {
    institution: 'ETEC Dep. Salim Sedeh',
    course: 'Ensino Médio integrado ao Técnico em Desenvolvimento de Sistemas',
    period: '2022',
    status: 'Concluído',
    description: 'Formação técnica em desenvolvimento de sistemas e programação.',
  },
  {
    institution: 'NAPP Academy',
    course: 'SQL e Firebird',
    period: '2023',
    status: 'Concluído',
    description: 'Curso complementar focado em bancos de dados relacionais.',
  },
  {
    institution: 'Udemy',
    course: 'Python — Desenvolvimento Back-End',
    period: '2024',
    status: 'Concluído',
    description: 'Aprofundamento em programação Python e desenvolvimento back-end.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

const Education = () => (
  <div className="education-container">
    <span className="section-eyebrow">~/education</span>
    <h2 className="section-heading">Educação</h2>
    <p className="section-subtitle">Formação acadêmica e cursos complementares</p>

    <motion.div
      className="education-list"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {educationItems.map((item, i) => (
        <motion.div key={i} className="education-item" variants={itemVariants}>
          <div className="education-item-left">
            <span className={`edu-status ${item.status === 'Cursando' ? 'ongoing' : 'done'}`}>
              {item.status}
            </span>
            <span className="edu-period">{item.period}</span>
          </div>
          <div className="education-item-right">
            <h3 className="edu-course">{item.course}</h3>
            <span className="edu-institution">{item.institution}</span>
            <p className="edu-description">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Education;
