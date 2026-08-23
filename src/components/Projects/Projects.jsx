import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    name: 'Hub3D',
    status: 'sistema em produção',
    statusState: 'live',
    period: '2025 — atual',
    description:
      'ERP para microempresas de impressão 3D: catálogo público, orçamentos com precificação por custo real, kanban de produção, controle de estoque de filamento e financeiro completo, tudo em um único painel.',
    stack: ['React', 'TypeScript', 'Node.js', 'NestJS', 'Prisma', 'PostgreSQL'],
    link: null,
    linkLabel: 'código privado',
  },
  {
    name: 'AnomalyDetect',
    status: 'TCC · em desenvolvimento',
    statusState: 'live',
    period: '2025 — 2026',
    description:
      'Monitoramento de computadores com detecção de anomalias em duas camadas (heurísticas + machine learning por máquina) e explicações em linguagem simples geradas por IA, com painel em tempo real via WebSocket.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'WebSocket', 'LLM'],
    link: 'https://github.com/VitorApLavezzo/TCC',
    linkLabel: 'ver repositório',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Projects = () => (
  <div className="projects-container">
    <span className="section-eyebrow">~/projects</span>
    <h2 className="section-heading">Sistemas construídos</h2>
    <p className="section-subtitle">
      Projetos de maior escopo — do desenho do banco de dados à interface final.
    </p>

    <motion.div
      className="projects-list"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {projects.map((project) => (
        <motion.article key={project.name} className="project-card panel" variants={cardVariants}>
          <header className="project-header">
            <div className="project-title-row">
              <h3 className="project-name">{project.name}</h3>
              <span className={`project-status project-status--${project.statusState}`}>
                <span className="project-status-dot" />
                {project.status}
              </span>
            </div>
            <span className="project-period">{project.period}</span>
          </header>

          <p className="project-description">{project.description}</p>

          <div className="project-stack">
            {project.stack.map((tech) => (
              <span key={tech} className="project-stack-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-footer">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                {project.linkLabel} →
              </a>
            ) : (
              <span className="project-link project-link--disabled">{project.linkLabel}</span>
            )}
          </div>
        </motion.article>
      ))}
    </motion.div>
  </div>
);

export default Projects;
