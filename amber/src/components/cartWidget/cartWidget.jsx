import { FaShoppingCart } from 'react-icons/fa';
import React, { useState } from 'react';

function CartWidget() {
  const [itemCount, setItemCount] = useState(0);

  const handleClick = () => {
    alert('Dirigiéndote al carrito');
  };

  return (
    <button className="cart-button" onClick={handleClick}>
      <FaShoppingCart size={24} />
      <span>{itemCount}</span>
    </button>
  );
}

export default CartWidget;
