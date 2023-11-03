import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/cartWidget';

const categories = [
  { name: 'Inicio', path: '/' },
  { name: 'Tazas de ceramica', path: '/category/tazas-de-ceramica' },
  { name: 'Tazas de vidrio', path: '/category/tazas-de-vidrio' },
  { name: 'Tazas de Porcelana', path: '/category/tazas-de-porcelana' },
  { name: 'Todos los productos', path: '/category/todos-los-productos' },
];

function NavBar({ onCategorySelect, itemCount }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Image src="/src/assets/image/amber2.png" alt="" width={100} />
        </Navbar.Brand>
        <Nav className="me-auto">
          {categories.map((category, index) => (
            <Nav.Link key={index} as={Link} to={category.path} onClick={() => onCategorySelect(category.name)}>
              {category.name}
            </Nav.Link>
          ))}
        </Nav>
        <CartWidget itemCount={itemCount} />
      </Container>
    </Navbar>
  );
}


export default NavBar;