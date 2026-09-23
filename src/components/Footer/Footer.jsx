import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <span className="footer-status">
        <span className="footer-status-dot" />
        systems nominal
      </span>
      <span>Vitor Lavezzo · © {new Date().getFullYear()}</span>
    </div>
  </footer>
);

export default Footer;
