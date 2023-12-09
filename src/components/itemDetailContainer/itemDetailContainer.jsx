import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';
import ItemDetail from '../itemDetail/itemDetail';

const ItemDetailContainer = () => {
  const { categoryId } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProductFromFirebase = async () => {
    try {
      console.log('categoryId del producto:', categoryId);

      const productsCollection = collection(db, 'products');
      const querySnapshot = await getDocs(
        query(productsCollection, where('categoryId', '==', categoryId))
      );

      if (!querySnapshot.empty) {
        const productDocSnap = querySnapshot.docs[0];
        const productData = { id: productDocSnap.id, ...productDocSnap.data() };
        setItem(productData);
      } else {
        console.log('No se encontró el producto con categoryId:', categoryId);
      }
    } catch (error) {
      console.error('Error fetching product:', error);

    
      console.log('Error details:', error.message, error.code);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductFromFirebase();
  }, [categoryId]);

  return (
    <div>
      {isLoading ? 'Cargando...' : (item ? <ItemDetail item={item} /> : 'Producto no encontrado')}
    </div>
  );
};

export default ItemDetailContainer;
