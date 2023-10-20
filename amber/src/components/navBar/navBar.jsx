import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/cartWidget';

const categories = [
  { name: 'Inicio', path: '/' },
  { name: 'Productos', path: '/category/productos' },
  { name: 'Novedades', path: '/category/novedades' },
];

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Image src="/src/assets/image/amber.png" alt="" width={100} />
        </Navbar.Brand>
        <Nav className="me-auto">
          {categories.map((category, index) => (
            <Nav.Link key={index} as={Link} to={category.path}>
              {category.name}
            </Nav.Link>
          ))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
