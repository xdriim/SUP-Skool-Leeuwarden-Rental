import { Card, Col, Button } from 'react-bootstrap';
import cardStyle from "./ProductCard.module.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function ProductCard({ product }) {
  //const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <Col xs={12} sm={12} md={6} lg={6} xl={3} className="mb-4">
      <Link to={`/productInfo/${product.id}`} style={{ color: '#305090', textDecoration: 'none' }}>
        <Card className="sliderSup" style={{ 
          width: '16rem',
          transition: 'all 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          boxShadow: isHovered ? '0px 0px 10px 0px rgba(0,0,0,0.5)' : 'none'
        }} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <Card.Img variant="top" className="productImage" src={product.imgUrl} />
          <Card.Body>
            <Card.Title className={cardStyle.title}>{product.name}</Card.Title>
            <div className='d-flex justify-content-between'>
              <p>from <span className={cardStyle.negrita}>{product.price}€</span></p>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}