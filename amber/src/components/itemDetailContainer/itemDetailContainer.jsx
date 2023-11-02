import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer({ cart , agregarAlCarrito }) {
  const { itemid } = useParams();
  const [product, setProduct] = useState(null);

  const handleAddToCart = () => {
    if (product) {
      agregarAlCarrito(product.id);
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
         
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;