import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; //estilos de Bootstrap
import './navBar.css'; 
import { Link } from 'react-router-dom';




const categories = [
  { name: 'Inicio', path: '/' },
  { name: 'Productos', path: '/productos' },
  { name: 'Novedades', path: '/novedades' },
];

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Image src="src/assets/image/amber.png" alt="" width={100} />
          AMBER
        </Navbar.Brand>
        <Nav className="me-auto">
          {categories.map((category, index) => (
            <Nav.Link key={index} as={Link} to={category.path}>
              {category.name}
            </Nav.Link>
          ))}
        </Nav>
        <Nav className="cart-icon">
          <Nav.Link href="/carrito">
            <i className="bi bi-cart"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;