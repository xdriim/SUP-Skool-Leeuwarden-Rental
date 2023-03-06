import { Card, Button } from 'react-bootstrap';
import "./ProductCard.module.css";

export function ProductCard({ product }) {
  //const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <Card className="sliderSup" style={{ width: '18rem' }}>
      <Card.Img variant="top" className="productImage" src={product.imgUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Button variant="primary">from <span className="negrita">{product.price}€</span></Button>
      </Card.Body>
    </Card>
  );
}