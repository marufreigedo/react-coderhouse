import { FaShoppingCart } from 'react-icons/fa'; //ícono de carrito de compras

function CartWidget() {
  const itemCount = 5; // Número fijo de elementos en el carrito 

  return (
    <div>
      <FaShoppingCart size={24} /> 
      <span>{itemCount}</span> 
    </div>
  );
}

export default CartWidget;