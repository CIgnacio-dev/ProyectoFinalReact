import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Alojamientos from './components/Alojamientos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import DetallesHotel from './components/Detalles/DetallesHotel';
import DetallesHostal from './components/Detalles/DetallesHostal';
import DetallesCabana from './components/Detalles/DetallesCabana';
import './style.css';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoteles" element={<Alojamientos categoria="Hoteles" />} />
        <Route path="/hostales" element={<Alojamientos categoria="Hostales" />} />
        <Route path="/cabanias" element={<Alojamientos categoria="Cabañas" />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/detalles-hotel" element={<DetallesHotel />} />
        <Route path="/detalles-hostal" element={<DetallesHostal />} />
        <Route path="/detalles-cabana" element={<DetallesCabana />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
