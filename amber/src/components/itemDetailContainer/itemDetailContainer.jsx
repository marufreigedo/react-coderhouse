import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './itemDetailContainer.css';


function ItemDetailContainer({ products }) {
  const { itemid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productMatch = products.find((item) => item.id === Number(itemid));
    setProduct(productMatch);
  }, [itemid, products]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <p>Detalles: {product.details}</p>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;