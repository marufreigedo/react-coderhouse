import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; //estilos de Bootstrap
import './navBar.css'; 



function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Image src="amber/src/assets/image/amber.png" alt="Logo" width={100} /> 
          AMBER
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/categorias">Categorías</Nav.Link>
        </Nav>
        <Nav className="cart-icon"> {/* Aplica la clase cart-icon */}
          <Nav.Link href="/carrito">
            <i className="bi bi-cart"></i> 
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;