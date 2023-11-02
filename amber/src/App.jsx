import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Cart from './components/cart/cart';
import CartWidget from './components/cartWidget/cartWidget';
import NavBar from './components/navBar/navBar';

function App() {
  const [cart, setCart] = useState([]);
  

  function agregarAlCarrito(producto) {
    setCart((carritoActual) => {
      const productoExistente = carritoActual.find((item) => item.id === producto.id);
      if (productoExistente) {
        
        return carritoActual.map((item) =>
          item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        
        return [...carritoActual, { ...producto, quantity: 1 }];
      }
    });
  }
  function eliminarDelCarrito(idProducto) {
    setCart((carritoActual) => {
      const producto = carritoActual.find((item) => item.id === idProducto);
      if (producto.quantity > 1) {
        
        return carritoActual.map((item) =>
          item.id === idProducto ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        
        return carritoActual.filter((item) => item.id !== idProducto);
      }
    });
}
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  
      const handleCategorySelect = (category) => {
    
  };
  return (
    <div>
      <NavBar onCategorySelect={handleCategorySelect} itemCount={totalItems} />
      <Routes>
        <Route path="/" element={<ItemListContainer cart={cart} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/product/:id" element={<ItemDetailContainer cart={cart} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/cart" element={<Cart cart={cart} eliminarDelCarrito={eliminarDelCarrito} />} />
      </Routes>
    </div>
  );
}
export default App;