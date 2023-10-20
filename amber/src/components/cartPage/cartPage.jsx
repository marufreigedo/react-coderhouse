import React from 'react';

function CartPage({ cart, setCart }) {
  return (
    <div>
      <h1>Carrito de compras</h1>
      {cart.map((product, index) => (
  <div key={index}>
    <p>{product.title}</p>
    <p>Precio: ${product.price}</p>
  </div>
))}
    </div>
  );
}

export default CartPage;
