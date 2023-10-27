import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa"; 
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; Trainee Tesla 2023/2</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/teslaufmg/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} className="icon" />
          </a>
          <a href="https://www.youtube.com/seucanal" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={32} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
