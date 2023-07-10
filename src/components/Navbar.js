import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar className='navbar-bq' bg="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Boqueen</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          
          <NavDropdown title="Alojamientos" id="alojamientos-dropdown">
            <NavDropdown.Item as={Link} to="/hoteles">Hoteles</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/hostales">Hostales</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/cabañas">Cabañas</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
