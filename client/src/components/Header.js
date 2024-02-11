import React from 'react';
import "./styles.css";
import fotoGandalf from "../imagenes/abuelacuentame.webp";

const Header = ({nombre}) => {
  return (
    <header>
      <div className="perfil">
        <h1>{nombre}</h1>
        <img src={fotoGandalf} alt="Foto de perfil" />
      </div>
    </header>
  );
};

export default Header;