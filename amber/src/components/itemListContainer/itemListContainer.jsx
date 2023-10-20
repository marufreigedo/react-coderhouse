import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

function ItemListContainer({ cart, setCart, setItemCount }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    const newCartItem = {
      id: product.id,
      name: product.title,
      quantity: 1,
    };
  
    setCart((prevCart) => [...prevCart, newCartItem]);
  
    if (setItemCount) {
      setItemCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div className="mt-4">
      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length > 0 ? (
        <div>
          {products.map((product) => (
            <Card key={product.id}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Precio: ${product.price}</Card.Text>
                <Button onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}

export default ItemListContainer;
