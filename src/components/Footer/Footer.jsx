import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span className="footer-name">Vitor Lavezzo</span>
      <span className="footer-divider">·</span>
      <span className="footer-copy">© {new Date().getFullYear()} Todos os direitos reservados</span>
    </div>
  </footer>
);

export default Footer;
