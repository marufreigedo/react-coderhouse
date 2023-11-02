import React from 'react';
import './cart.css';

function Cart({ cart, agregarAlCarrito, eliminarDelCarrito }) {
  
  const total = cart.reduce((sum, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity);
  
    if (isNaN(price) || isNaN(quantity)) {
      console.error(`Invalid item in cart: `, item);
      return sum;
    }
  
    console.log(`Item price: ${price}, quantity: ${quantity}`);
    return sum + price * quantity;
  }, 0);

  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Descripción: {item.description}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.price}</p>
          <button onClick={() => agregarAlCarrito(item)}>Agregar más</button>
          <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar uno</button>
        </div>
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
}

export default Cart;