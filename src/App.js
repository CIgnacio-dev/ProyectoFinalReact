import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Hoteles from './components/Hoteles';
import Hostales from './components/Hostales';
import Cabanas from './components/Cabanas';
import DetallesHotel from './components/Detalles/DetallesHotel';
import DetallesHostal from './components/Detalles/DetallesHostal';
import DetallesCabana from './components/Detalles/DetallesCabana';
import Carrito from './components/Carrito';
import './style.css';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (reserva) => {
    setCarrito([...carrito, reserva]);
  };
  return (
    <Router>
      
      <Navbar carrito={carrito} />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/hoteles" element={<Hoteles categoria="Hoteles" />} />
        <Route path="/hostales" element={<Hostales categoria="Hostales" />} />
        <Route path="/cabanas" element={<Cabanas categoria="Cabanas" />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/detalles-hotel" element={<DetallesHotel />} />
        <Route path="/detalles-hostal" element={<DetallesHostal />} />
        <Route path="/detalles-cabana" element={<DetallesCabana />} />
      
        
        <Route path="/carrito" element={<Carrito carrito={carrito} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
