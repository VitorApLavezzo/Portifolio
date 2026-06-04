import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const categories = [
  {
    label: 'Back-End',
    skills: [
      { name: 'Python', icon: 'https://images.ctfassets.net/em6l9zw4tzag/oVfiswjNH7DuCb7qGEBPK/b391db3a1d0d3290b96ce7f6aacb32b0/python.png' },
      { name: 'Golang', icon: 'https://img.icons8.com/?size=512&id=44442&format=png' },
    ],
  },
  {
    label: 'Banco de Dados',
    skills: [
      { name: 'SQL', icon: 'https://desenvolvimentoaberto.org/wp-content/uploads/2016/11/logoazuresql.png' },
      { name: 'MongoDB', icon: 'https://img.icons8.com/?size=512&id=74402&format=png' },
      { name: 'PostgreSQL', icon: 'https://img.icons8.com/?size=512&id=38561&format=png' },
    ],
  },
  {
    label: 'Front-End',
    skills: [
      { name: 'React', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
      { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' },
      { name: 'CSS', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-wordmark-programming-langugae-language-pack-logos-icons-1175238.png' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => (
  <div className="skills-container">
    <h2>Habilidades</h2>
    <p className="skills-subtitle">Tecnologias que utilizo no dia a dia</p>

    <div className="skills-categories">
      {categories.map((cat) => (
        <div key={cat.label} className="skills-category">
          <span className="category-label">{cat.label}</span>
          <motion.div
            className="skills-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {cat.skills.map((skill) => (
              <motion.div key={skill.name} className="skill-card" variants={cardVariants}>
                <img src={skill.icon} alt={skill.name} />
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
