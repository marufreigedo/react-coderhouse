import { FaShoppingCart } from 'react-icons/fa'; // Ícono de carrito de compras
import React from 'react';

function CartWidget() {
  const itemCount = 3; // Número fijo de elementos en el carrito 

  const handleClick = () => {
   
    alert('Dirigiendote al carrito'); 
  };

  return (
    <button className="cart-button" onClick={handleClick}>
      <FaShoppingCart size={24} />
      <span>{itemCount}</span>
    </button>
  );
}

export default CartWidget;