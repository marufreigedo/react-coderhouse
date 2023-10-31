import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ItemList({ products, onAddToCart }) {
  return (
    <div>
      {products.map((product) => (
        <Card key={product.id}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary" onClick={() => onAddToCart(product)}>Agregar al carrito</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ItemList;