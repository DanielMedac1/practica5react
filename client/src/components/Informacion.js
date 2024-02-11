import React from 'react';
import "./styles.css";

const Informacion = ({Nombre, Edad, Ubicacion, Descripcion} ) => {
  return (
    <section className="informacion">
      <h2>Información Personal</h2>
      <div className="infoContenedor">
        <p><strong>Nombre:</strong> {Nombre}</p>
        <p><strong>Edad:</strong> {Edad}</p>
        <p><strong>Ubicación:</strong> {Ubicacion}</p>
        <p><strong>Descripción:</strong> {Descripcion}</p>
      </div>
    </section>
  );
};

export default Informacion;
