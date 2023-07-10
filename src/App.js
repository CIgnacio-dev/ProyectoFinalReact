import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from './components/Home';
import Alojamientos from './components/Alojamientos';
import Contacto from './components/Contacto';
import './style.css';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Alojamientos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/hoteles">Hoteles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hostales">Hostales</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cabanias">Cabañas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoteles" element={<Alojamientos categoria="Hoteles" />} />
        <Route path="/hostales" element={<Alojamientos categoria="Hostales" />} />
        <Route path="/cabanias" element={<Alojamientos categoria="Cabañas" />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
