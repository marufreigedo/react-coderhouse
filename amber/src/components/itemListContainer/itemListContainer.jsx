// src/components/itemListContainer.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

function ItemListContainer({ greeting }) {
  return (
    <div className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>¡Bienvenido a AMBER!</Card.Title>
          <Card.Text>{greeting}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemListContainer;

