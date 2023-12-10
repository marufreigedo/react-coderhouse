import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';
import ItemDetail from '../itemDetail/itemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProductFromFirebase = async () => {
    try {
      const productsCollection = collection(db, 'products');
      const querySnapshot = await getDocs(query(productsCollection, where('id', '==', id)));

      if (!querySnapshot.empty) {
        const productDocSnap = querySnapshot.docs[0];
        const productData = { id: productDocSnap.id, ...productDocSnap.data() };
        setItem(productData);
      } else {
        console.log('No se encontró el producto con id:', id);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductFromFirebase();
  }, [id]);

  return (
    <div>
      {isLoading ? 'Cargando...' : (item ? <ItemDetail item={item} /> : 'Producto no encontrado')}
    </div>
  );
};

export default ItemDetailContainer;
