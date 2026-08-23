import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const categories = [
  {
    label: 'back-end',
    skills: ['Python', 'Golang'],
  },
  {
    label: 'dados',
    skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Oracle', 'Firebird', 'MySQL'],
  },
  {
    label: 'front-end',
    skills: ['React', 'HTML', 'CSS'],
  },
  {
    label: 'ferramentas',
    skills: ['Git', 'Web Scraping', 'Web Services', 'POO'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Skills = () => (
  <div className="skills-container">
    <span className="section-eyebrow">~/skills</span>
    <h2 className="section-heading">Habilidades</h2>
    <p className="section-subtitle">Tecnologias que utilizo no dia a dia</p>

    <div className="skills-categories">
      {categories.map((cat) => (
        <div key={cat.label} className="skills-category panel">
          <span className="category-label">{cat.label}</span>
          <motion.div
            className="skills-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {cat.skills.map((skill) => (
              <motion.span key={skill} className="skill-chip" variants={chipVariants}>
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
