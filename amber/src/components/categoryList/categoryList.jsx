import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);



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
