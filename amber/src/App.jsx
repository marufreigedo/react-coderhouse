
import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './components/navBar/navBar';
import CartWidget from './components/cartWidget/cartWidget';
import ItemListContainer from './components/itemListContainer/itemListContainer';


function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <CartWidget />
        <ItemListContainer greeting="Descubre nuestras increíbles tazas" />
      </Container>
      {/* Agrega otros componentes y contenido aquí */}
    </div>
  );
}

export default App;
