import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './itemList.css'; 

function ItemList({ products, onAddToCart }) {
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