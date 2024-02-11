import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Informacion from './components/Informacion';
import Estadisticas from './components/Estadisticas';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import AcercaDe from './components/AcercaDe';
import BackgroundColorChanger from './components/BackgroundColorChanger';

const App = () => {
  const Salcedin ={
    Nombre: "Gandalf",
    Edad: "105",
    Ubicacion: "Gondor",
    Descripcion: "Mago milenario"
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/acerca-de">Información</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
        </Routes>

        {/* Componentes fuera de las rutas */}
        <div>
          <Header />
          <main>
          <BackgroundColorChanger />
            <Informacion {...Salcedin}/>
            <Estadisticas />
          </main>
           
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
