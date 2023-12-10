import React, { useContext } from 'react';
import { CartContext } from '../cartContext/cartContext';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cart, eliminarDelCarrito } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      {cart.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.name}</h2>
          <p>{producto.description}</p>
          <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar del carrito</button>
        </div>
      ))}
      <button onClick={handleGoBack}>Volver a los productos</button>
    </div>
  );
}

export default CartPage;
