import React from 'react';

const ItemDetail = ({ item, onAddToCart }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <button onClick={onAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
