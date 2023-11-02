import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage({ cart, eliminarDelCarrito }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <div>
      {cart.map((producto, index) => (
        <div key={index}>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar del carrito</button>
        </div>
      ))}
      <button onClick={handleGoBack}>Volver a los productos</button>
    </div>
  );
}

export default CartPage;