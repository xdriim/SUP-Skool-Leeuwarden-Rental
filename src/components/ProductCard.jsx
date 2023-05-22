import { Card, Col, Button } from 'react-bootstrap';
import cardStyle from "./ProductCard.module.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
// Translation
import { useTranslation } from 'react-i18next';

export function ProductCard({ product }) {
  const { t } = useTranslation("global");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={3} className="mb-4 d-flex justify-content-center">
      <Link to={`/productInfo/${product.productId}`} style={{ color: '#305090', textDecoration: 'none' }}>
        <Card className="sliderSup" style={{ 
          width: '16rem',
          transition: 'all 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          boxShadow: isHovered ? '0px 0px 10px 0px rgba(0,0,0,0.5)' : 'none'
        }} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <Card.Img variant="top" className="productImage" src={'http://monet.cat:8080/image/'+product.images[0]} style={{ minHeight: '25vh' }}/>
          <Card.Body>
            <Card.Title className={cardStyle.title} style={{ fontFamily: 'Montserrat' }}>{product.name}</Card.Title>
            <div className='d-flex justify-content-between'>
              <p style={{ fontFamily: 'Montserrat' }}>{t("productCard.tran1")} <span className={cardStyle.negrita} style={{ fontFamily: 'Montserrat' }}>{product.price}€</span></p>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}