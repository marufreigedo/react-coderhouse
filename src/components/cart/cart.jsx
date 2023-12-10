import React, { useContext, useState } from 'react';
import { CartContext } from '../cartContext/cartContext';
import './cart.css';

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
  });

  const totalProductos = cart.reduce((total, producto) => total + producto.quantity, 0);
  const totalPrecio = cart.reduce((total, producto) => total + producto.price * producto.quantity, 0);

  const agregarAlCarrito = (item) => {
  };

  const eliminarDelCarrito = (id) => {
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   console.log('Formulario enviado:', formData);

    setCart([]);
  };

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

      
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <label>
          Dirección:
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
        </label>
        <label>
          Correo electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>

        <button type="submit">Realizar compra</button>
      </form>
    </div>
  );
}

export default Cart;
