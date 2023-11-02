import React, { useState } from 'react';
import './itemListContainer.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../navBar/navBar';
import ItemList from '../itemList/itemList';
import ItemDetail from '../itemDetailContainer/itemDetailContainer';
import CartPage from '../cartPage/cartPage';
import CartWidget from '../cartWidget/cartWidget';
import { Card, Button } from 'react-bootstrap';



function ItemListContainer({ cart, agregarAlCarrito }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([

    {
      id: 1,
      title: 'Taza de El grinch',
      description: 'Taza navideña original Diseño de la cabeza del Grinch',
      price: 4500,
      category: 'Tazas de ceramica',
      image: 'https://i.pinimg.com/564x/96/72/1f/96721fefea99d090530cae6364910aa1.jpg'
      },
      
    {
      id: 2,
      title: 'Taza de Mickey Mouse',
      description: 'Taza de ceramica con diseño',
      price: 3900,
      category: 'Tazas de ceramica',
      image: 'https://i.pinimg.com/564x/6a/37/2e/6a372e6a90f4422552fc8031797361fe.jpg'
    },
    {
      id: 3 ,
      title: 'Taza de Winnie Pooh',
      description: 'Taza de ceramica con diseño de Winnie Pooh',
      price: 4500,
      category: 'Tazas de ceramica',
      image: 'https://i.pinimg.com/564x/fe/bd/47/febd478f65af30349639515aaecb4fee.jpg'
    },
    {
      id: 4 ,
      title: 'Taza Arcoiris',
      description: 'Taza de vidrio con diseño de arcoiris',
      price: 3500,
      category: 'Tazas de vidrio',
      image: 'https://i.pinimg.com/564x/08/4d/22/084d22a5e3ca00e4d4e417dc89e341ff.jpg'
    },
    {
      id: 5 ,
      title: 'Taza de Margaritas',
      description: 'Taza de Porcelana con diseño de margaritas',
      price: 4000,
      category: 'Tazas de Porcelana',
      image: 'https://i.pinimg.com/564x/c2/24/71/c2247199135f3d899a198bc0efdb7c00.jpg'
    }
  ]);

  const handleAddToCart = (product) => {
    agregarAlCarrito(product);
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  const filteredProducts = selectedCategory === 'Todos los productos' ? products : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <Routes>
        <Route path="/" element={<ItemList products={filteredProducts} onAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ItemDetail />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </div>
  );
}
export default ItemListContainer;