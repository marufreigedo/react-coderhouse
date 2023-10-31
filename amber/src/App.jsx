import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Cart from './components/cart/cart';
import CartWidget from './components/cartWidget/cartWidget';

function App() {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<ItemListContainer cart={cart} setCart={setCart} greeting="¡Bienvenido!" />} />
        <Route path="/category/:categoryid" element={<ItemListContainer cart={cart} setCart={setCart} />} />
        <Route path="/item/:itemid" element={<ItemDetailContainer cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
      <CartWidget itemCount={itemCount} />
    </div>
  );
}

export default App;