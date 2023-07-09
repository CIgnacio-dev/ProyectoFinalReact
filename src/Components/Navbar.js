import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/alojamientos">Alojamientos</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle as={Nav.Link} id="categorias-dropdown">
              Categorías
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/alojamientos/hotel">Hotel</Dropdown.Item>
              <Dropdown.Item href="/alojamientos/hostal">Hostal</Dropdown.Item>
              <Dropdown.Item href="/alojamientos/cabana">Cabaña</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
