import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span className="footer-status">
        <span className="footer-status-dot" />
        systems nominal
      </span>
      <span className="footer-copy">
        Vitor Lavezzo · © {new Date().getFullYear()}
      </span>
    </div>
  </footer>
);

export default Footer;
