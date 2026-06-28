import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const contacts = [
  {
    label: 'GitHub',
    value: 'VitorApLavezzo',
    href: 'https://github.com/VitorApLavezzo',
    icon: 'https://img.icons8.com/?size=512&id=62856&format=png',
  },
  {
    label: 'LinkedIn',
    value: 'vitor-aparecido-lavezzo',
    href: 'https://linkedin.com/in/vitor-aparecido-lavezzo',
    icon: 'https://img.icons8.com/?size=512&id=13930&format=png',
  },
  {
    label: 'E-mail',
    value: 'valavezzo@email.com',
    href: 'mailto:valavezzo@email.com',
    icon: 'https://img.icons8.com/?size=512&id=12623&format=png',
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

const Contact = () => (
  <div className="contact-container">
    <h2>Contato</h2>
    <p className="section-subtitle">Vamos conversar? Entre em contato por qualquer canal abaixo.</p>

    <motion.div
      className="contact-list"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {contacts.map((c) => (
        <motion.a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noreferrer"
          className="contact-card"
          variants={cardVariants}
          whileHover={{ y: -4 }}
        >
          <img src={c.icon} alt={c.label} />
          <div className="contact-info">
            <span className="contact-label">{c.label}</span>
            <span className="contact-value">{c.value}</span>
          </div>
          <span className="contact-arrow">→</span>
        </motion.a>
      ))}
    </motion.div>
  </div>
);

export default Contact;
