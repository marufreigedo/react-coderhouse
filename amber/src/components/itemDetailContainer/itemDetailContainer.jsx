import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer({ cart , agregarAlCarrito }) {
  const { itemid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = cart.find((item) => item.id === Number(itemid));
    setProduct(product);
  }, [itemid, cart]);

  const handleAddToCart = () => {
    if (product) {
      agregarAlCarrito(product);
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
          <p>Detalles: {product.details}</p>
        </div>
      ) : null }
    </div>
  );
}
export default ItemDetailContainer;