
import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './components/navBar/navBar';
import CartWidget from './components/cartWidget/cartWidget';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter

function App() {
  return (
    <Router> {/* Encierra toda tu aplicación con BrowserRouter */}
      <div>
        <NavBar />
        <Container>
          <CartWidget />
          <ItemListContainer greeting="Descubre nuestras increíbles tazas" />
        </Container>
      </div>
    </Router>
  );
}

export default App;