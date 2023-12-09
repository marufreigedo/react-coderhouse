import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/client'; 
import './itemList.css'; 


function ItemList({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsFromFirebase = async () => {
      const productsCollection = collection(db, 'products'); 
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => doc.data());
      setProducts(productsList);
    };

    getProductsFromFirebase();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Card key={product.id}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary" onClick={() => onAddToCart(product)}>Agregar al carrito</Button>
            <Link to={`/item/${product.id}`}>Ver detalles</Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ItemList;
