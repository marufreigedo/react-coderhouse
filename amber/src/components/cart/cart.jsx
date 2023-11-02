import React from 'react';
import './cart.css';

function Cart({ cart, agregarAlCarrito, eliminarDelCarrito }) {
  
  const totalProductos = cart.reduce((total, producto) => total + producto.quantity, 0);

  
  const totalPrecio = cart.reduce((total, producto) => total + producto.price * producto.quantity, 0);

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
      <h2>Total de productos: {totalProductos}</h2>
      <h2>Total a pagar: ${totalPrecio}</h2>
    </div>
  );
}

export default Cart;