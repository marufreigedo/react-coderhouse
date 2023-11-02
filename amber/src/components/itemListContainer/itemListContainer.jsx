import React, { useState } from 'react';
import './itemListContainer.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../navBar/navBar';
import ItemList from '../itemList/itemList';
import ItemDetail from '../itemDetailContainer/itemDetailContainer';
import CartPage from '../cartPage/cartPage';
import CartWidget from '../cartWidget/cartWidget';
import Banner from '../banner/banner';
import { Card, Button } from 'react-bootstrap';



function ItemListContainer({ products, agregarAlCarrito }) {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos los productos');

  const handleAddToCart = (product) => {
    agregarAlCarrito(product);
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  const filteredProducts = selectedCategory === 'Todos los productos' ? products : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <NavBar onCategorySelect={handleCategorySelect} />
      <Routes>
        <Route path="/" element={
          <>
            <Banner /> 
            <ItemList products={filteredProducts} onAddToCart={handleAddToCart} />
          </>
        } />
        <Route path="/product/:id" element={<ItemDetail />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
      <CartWidget itemCount={cart.reduce((count, item) => count + item.quantity, 0)} />
    </div>
  );
}


export default ItemListContainer;