import React from 'react';

const Estadisticas = () => {
  return (
    <section className="estadisticas">
      <h2>Estadísticas</h2>
      <div className="estadiContenedor">
        <div className="estadistica">
          <h3>Seguidores</h3>
          <p>1.000.000</p>
        </div>
        <div className="estadistica">
          <h3>Seguidos</h3>
          <p>8</p>
        </div>
        <div className="estadistica">
          <h3>Publicaciones</h3>
          <p>9</p>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
