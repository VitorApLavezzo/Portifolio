import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  const educationItems = [
    {
      title: 'Universidade Paulista, Bacharelado em Ciência da Computação | Cursando | 2023 - 2026',
      description: 'Foco em desenvolvimento de software e tecnologias emergentes.',
    },
    {
      title: 'ETEC Dep. Salim Sedeh, Ensino Médio integrado ao técnico em Desenvolvimento de Sistemas | 2022',
      description: 'Formação técnica em desenvolvimento de sistemas e programação.',
    },
    {
      title: 'Curso complementar sobre SQL/Firebird pela Napp Academy',
      description: 'Aprendizado em bancos de dados e gerenciamento de dados.',
    },
    {
      title: 'Curso complementar sobre Python pela Udemy | Cursando',
      description: 'Desenvolvimento de habilidades em programação com Python.',
    },
  ];

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="education-container">
      <h2>Educação e Formação</h2>
      {educationItems.map((item, index) => (
        <motion.div
          key={index}
          className="education-item"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Education; 