import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../Reveal/Reveal';
import stagger from '../../utils/stagger';
import SectionLabel from '../SectionLabel/SectionLabel';
import './Experience.css';

const EXPERIENCES = [
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
  // One panel open at a time; clicking the open one closes it.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="section experience">
      <div className="section-inner section-split">
        <div>
          <SectionLabel text="03 / EXPERIÊNCIA" />
          <Reveal as="h2" className="section-title">
            Trajetória
          </Reveal>
          <p className="experience-lede">
            3 cargos na NAPP,
            <br />
            de estagiário a analista.
          </p>
        </div>

        <div className="experience-list">
          {EXPERIENCES.map((item, i) => {
            const open = openIndex === i;
            const panelId = `experience-panel-${i}`;

            return (
              <Reveal key={item.role} className="experience-item" delay={stagger(i)}>
                <button
                  type="button"
                  className="experience-trigger"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <span className="experience-identity">
                    <span className="experience-role">{item.role}</span>
                    <span className="experience-company">{item.company}</span>
                  </span>

                  <span className="experience-period">
                    {item.current && <span className="experience-badge">ATUAL</span>}
                    {item.period}
                  </span>

                  <span
                    className="experience-chevron"
                    style={{ transform: `rotate(${open ? 180 : 0}deg)` }}
                    aria-hidden="true"
                  >
                    {open ? '−' : '+'}
                  </span>
                </button>

                {open && (
                  <ul id={panelId} className="experience-bullets">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: (bulletIndex % 4) * 0.06,
                          ease: [0.19, 1, 0.22, 1],
                        }}
                      >
                        <span className="experience-bullet-mark">→</span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
