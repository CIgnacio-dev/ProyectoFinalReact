import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function NavbarComponent({ carritoCantidad }) {
  return (
    <Navbar className='navbar-bq' bg="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Boqueen</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          
          <NavDropdown title="Alojamientos" id="alojamientos-dropdown">
            <NavDropdown.Item as={Link} to="/hoteles">Hoteles</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/hostales">Hostales</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/cabanas">Cabañas</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/carrito">
          <FaShoppingCart /> {carritoCantidad > 0 && <span className="carrito-cantidad">{carritoCantidad}</span>}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
