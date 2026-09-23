import Reveal from '../Reveal/Reveal';
import stagger from '../../utils/stagger';
import SectionLabel from '../SectionLabel/SectionLabel';
import './Projects.css';

const PROJECTS = [
  {
    name: 'Hub3D',
    status: 'sistema em produção',
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
    period: '2025 — 2026',
    description:
      'Monitoramento de computadores com detecção de anomalias em duas camadas (heurísticas + machine learning por máquina) e explicações em linguagem simples geradas por IA, com painel em tempo real via WebSocket.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'WebSocket', 'LLM'],
    link: 'https://github.com/VitorApLavezzo/TCC',
    linkLabel: 'ver repositório',
  },
];

const Projects = () => (
  <section id="projects" className="section">
    <div className="section-inner">
      <div className="projects-head">
        <div>
          <SectionLabel text="02 / PROJETOS" />
          <Reveal as="h2" className="section-title">
            Sistemas construídos
          </Reveal>
        </div>
        <p className="projects-lede">Do desenho do banco de dados à interface final.</p>
      </div>

      {PROJECTS.map((project, i) => (
        <Reveal as="article" key={project.name} className="project" delay={stagger(i)}>
          <span className="project-num">{String(i + 1).padStart(2, '0')}</span>

          <div>
            <h3 className="project-name">{project.name}</h3>
            <div className="project-meta">
              <span className="project-status">
                <span className="project-status-dot" />
                {project.status}
              </span>
              <span>{project.period}</span>
            </div>
          </div>

          <div className="project-body">
            <p className="project-description">{project.description}</p>
            <div className="project-stack">{project.stack.join('  /  ')}</div>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                {project.linkLabel} ↗
              </a>
            ) : (
              <span className="project-nolink">{project.linkLabel}</span>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Projects;
