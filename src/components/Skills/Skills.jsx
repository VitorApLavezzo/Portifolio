import React from 'react';
import './Skills.css'; // Importando o CSS para o componente

const Skills = () => {
  const skills = [
    { name: 'Python', icon: 'https://images.ctfassets.net/em6l9zw4tzag/oVfiswjNH7DuCb7qGEBPK/b391db3a1d0d3290b96ce7f6aacb32b0/python.png', link: 'https://www.python.org/' },
    { name: 'Golang', icon: 'https://img.icons8.com/?size=512&id=44442&format=png', link: 'https://golang.org/' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/?size=512&id=74402&format=png', link: 'https://www.mongodb.com/' },
    { name: 'SQL', icon: 'https://desenvolvimentoaberto.org/wp-content/uploads/2016/11/logoazuresql.png', link: 'https://www.mysql.com/' },
    { name: 'React', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', link: 'https://reactjs.org/' },
    { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png', link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
    { name: 'CSS', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-wordmark-programming-langugae-language-pack-logos-icons-1175238.png', link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' },
  ]; // Lista atualizada de habilidades

  return (
    <div className="skills-container">
      <h2>Minhas Habilidades</h2>
      <p>As tecnologias que utilizo para desenvolver projetos incríveis.</p>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <a key={index} href={skill.link} target="_blank" rel="noopener noreferrer" className="skill-card">
            <img src={skill.icon} alt={skill.name} className="icon" />
            <div className="skill-name">{skill.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;