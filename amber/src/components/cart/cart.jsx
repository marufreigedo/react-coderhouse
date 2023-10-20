import React from 'react';

function Cart({ cart, removeItemFromCart }) {
  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Cantidad: {item.quantity}</p>
          <button onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;