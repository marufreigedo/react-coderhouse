import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer({ cart, setCart }) {
  const { itemid } = useParams();
  const [product, setProduct] = useState(null);

 
  useEffect(() => {
    const fakeAPIResponse = {
      id: itemid,
      title: 'Nombre del Producto',
      description: 'Descripción del producto',
      price: 19.99,
    };

    setProduct(fakeAPIResponse);
  }, [itemid]);

  const handleAddToCart = () => {
    if (product) {
      setCart([...cart, product]);
      alert('Producto agregado al carrito');
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
