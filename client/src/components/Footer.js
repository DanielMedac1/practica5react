import React from 'react';
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="contacto">
        <h2>Contacto</h2>
        <p>Email: gandalfelgris@gmail.com</p>
        <p>Teléfono: 967 27 83 90</p>
      </div>
      <div className="rrss">
        <h2>Redes Sociales</h2>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;