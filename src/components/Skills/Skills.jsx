import Reveal from '../Reveal/Reveal';
import stagger from '../../utils/stagger';
import SectionLabel from '../SectionLabel/SectionLabel';
import './Skills.css';

const CATEGORIES = [
  { label: 'back-end', skills: ['Python', 'Golang'] },
  { label: 'dados', skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Oracle', 'Firebird', 'MySQL'] },
  { label: 'front-end', skills: ['React', 'HTML', 'CSS'] },
  { label: 'ferramentas', skills: ['Git', 'Web Scraping', 'Web Services', 'POO'] },
];

const Skills = () => (
  <section id="skills" className="section">
    <div className="section-inner section-split">
      <div>
        <SectionLabel text="01 / SKILLS" />
        <Reveal as="h2" className="section-title">
          Stack
        </Reveal>
      </div>

      <div className="skills-rows">
        {CATEGORIES.map((category, i) => (
          <Reveal key={category.label} className="skills-row" delay={stagger(i)}>
            <span className="skills-row-label">{category.label}</span>
            <div className="skills-row-text">{category.skills.join(' · ')}</div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
