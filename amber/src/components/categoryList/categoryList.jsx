import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error('Error al cargar categorías:', error);
      });
  }, []);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>
          <Link to={`/category/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
