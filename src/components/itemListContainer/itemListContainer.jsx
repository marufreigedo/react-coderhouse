import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../navBar/navBar';
import ItemList from '../itemList/itemList';
import Banner from '../banner/banner';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';

function ItemListContainer({ agregarAlCarrito }) {
  const [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    const getProductsFromFirebase = async () => {
      try {
        const productsCollection = collection(db, 'products');
        let productsQuery;

        if (categoryid) {
          productsQuery = query(productsCollection, where('category', '==', categoryid));
        } else {
          productsQuery = query(productsCollection);
        }

        const productsSnapshot = await getDocs(productsQuery);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('Categoría seleccionada:', categoryid);
        console.log('Productos filtrados:', productsList);

        setProducts(productsList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProductsFromFirebase();
  }, [categoryid]);

  const handleAddToCart = (product) => {
    agregarAlCarrito(product);
  };

  const handleCategorySelect = (category) => {
    console.log('Categoría seleccionada:', category);
  };

  return (
    <div>
      <NavBar onCategorySelect={handleCategorySelect} />
      <Banner />
      <ItemList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemListContainer;
