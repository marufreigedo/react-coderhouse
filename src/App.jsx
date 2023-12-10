import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/cartContext/cartContext';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Cart from './components/cart/cart';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase/client';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(products);
    }

    getProducts();
  }, []);

  function agregarAlCarrito(producto) {
    setCart((carritoActual) => {
      const productoEnCarrito = carritoActual.find((item) => item.id === producto.id);
      if (productoEnCarrito) {
        productoEnCarrito.quantity += 1;
      } else {
        carritoActual.push({ ...producto, quantity: 1 });
      }
      return [...carritoActual];
    });
  }

  function eliminarDelCarrito(idProducto) {
    setCart((carritoActual) => {
      const productoEnCarrito = carritoActual.find((item) => item.id === idProducto);
      if (productoEnCarrito) {
        if (productoEnCarrito.quantity > 1) {
          productoEnCarrito.quantity -= 1;
        } else {
          return carritoActual.filter((item) => item.id !== idProducto);
        }
      }
      return [...carritoActual];
    });
  }

  return (
    <CartProvider>
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer products={products} agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/item/:id"
          element={<ItemDetailContainer products={products} />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/category/:categoryid"
          element={<ItemListContainer products={products} agregarAlCarrito={agregarAlCarrito} />}
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
