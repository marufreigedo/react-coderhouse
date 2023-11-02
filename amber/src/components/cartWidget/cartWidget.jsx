import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function CartWidget({ itemCount }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart'); 
  };

  return (
    <button className="cart-button" onClick={handleClick}>
      <FaShoppingCart size={24} />
      <span>{itemCount}</span>
    </button>
  );
}

export default CartWidget;
