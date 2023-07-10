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
