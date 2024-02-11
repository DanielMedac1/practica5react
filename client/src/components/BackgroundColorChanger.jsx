import React, { useState } from 'react';

const BackgroundColorChanger = () => {
  // Estado para almacenar el color de fondo actual
  const [backgroundColor, setBackgroundColor] = useState('white'); // Color de fondo inicial
  
  // Función para cambiar el color de fondo
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };
  
  return (
    <div style={{ backgroundColor }}>
      <h1>Cambiar color de la cabecera</h1>
      <button onClick={() => changeBackgroundColor('lightblue')}>Azul claro</button>
      <button onClick={() => changeBackgroundColor('lightgreen')}>Verde claro</button>
      <button onClick={() => changeBackgroundColor('lightpink')}>Rosa claro</button>
    </div>
  );
};

export default BackgroundColorChanger;