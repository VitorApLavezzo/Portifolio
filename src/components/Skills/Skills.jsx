import React from 'react';
import './Skills.css'; // Importando o CSS para o componente

const Skills = () => {
  const skills = [
    { name: 'Python', icon: '' },
    { name: 'Golang', icon: '🐹' },
    { name: 'MongoDB', icon: '🗄️' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'React', icon: '⚛️' },
    { name: 'HTML', icon: '🔤' },
    { name: 'CSS', icon: '🎨' },
  ]; // Lista atualizada de habilidades

  return (
    <div className="skills-container">
      <h2>Minhas Habilidades</h2>
      <p>As tecnologias que utilizo para desenvolver projetos incríveis.</p>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;