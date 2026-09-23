import Reveal from '../Reveal/Reveal';
import stagger from '../../utils/stagger';
import SectionLabel from '../SectionLabel/SectionLabel';
import './Education.css';

const EDUCATION = [
  {
    institution: 'Universidade Paulista (UNIP)',
    course: 'Bacharelado em Ciência da Computação',
    period: '2023 — 2026',
    status: 'Cursando',
  },
  {
    institution: 'ETEC Dep. Salim Sedeh',
    course: 'Ensino Médio integrado ao Técnico em Desenvolvimento de Sistemas',
    period: '2022',
    status: 'Concluído',
  },
  {
    institution: 'NAPP Academy',
    course: 'SQL e Firebird',
    period: '2023',
    status: 'Concluído',
  },
  {
    institution: 'Udemy',
    course: 'Python — Desenvolvimento Back-End',
    period: '2024',
    status: 'Concluído',
  },
];

const Education = () => (
  <section id="education" className="section">
    <div className="section-inner section-split">
      <div>
        <SectionLabel text="04 / EDUCAÇÃO" />
        <Reveal as="h2" className="section-title">
          Formação
        </Reveal>
      </div>

      <div className="education-grid">
        {EDUCATION.map((item, i) => (
          <Reveal key={item.course} className="education-card" delay={stagger(i)}>
            <div className="education-card-meta">
              <span>{item.period}</span>
              <span className={item.status === 'Cursando' ? 'is-active' : ''}>
                ● {item.status}
              </span>
            </div>
            <h3 className="education-course">{item.course}</h3>
            <span className="education-institution">{item.institution}</span>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
