import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
    let { id } = useParams();
    const product = products.find(product => product.id === id);

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={handleGoBack}>Volver a los productos</button>
        </div>
    );
}

export default ProductDetail;