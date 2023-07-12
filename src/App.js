import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DetallesHotel from './components/Detalles/DetallesHotel';
import DetallesHostal from './components/Detalles/DetallesHostal';
import DetallesCabana from './components/Detalles/DetallesCabana';
import Hoteles  from './components/Hoteles';
import Hostales  from './components/Hostales';
import Cabanas  from './components/Cabanas';
import Contacto from './components/Contacto';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import Carrito from './components/Carrito';
import Shop from './components/Shop';
import '../src/style.css'

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (reserva, cantidadPersonas) => {
    const reservaConPersonas = { ...reserva, cantidadPersonas };
    setCarrito([...carrito, reservaConPersonas]);
  };
  const calcularPrecioTotal = () => {
    let total = 0;
    carrito.forEach((reserva) => {
      total += reserva.precioTotal || 0; 
    });
    return total;
  };
  return (
    <Router>
      <NavbarComponent carritoCantidad={carrito.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoteles" element={<Hoteles agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/hostales" element={<Hostales agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/cabanas" element={<Cabanas agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/detalles-hotel" element={<DetallesHotel />} />
        <Route path="/detalles-hostal" element={<DetallesHostal />} />
        <Route path="/detalles-cabana" element={<DetallesCabana />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito carrito={carrito} calcularPrecioTotal={calcularPrecioTotal} />} />
        <Route path="/shop" element={<Shop agregarAlCarrito={agregarAlCarrito} />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
