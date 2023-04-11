import { ProductCard } from "./ProductCard";
import { Container, Row, Col, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// , { useEffect, useState }
import sups from "../utils/sup.json";
import "./ProductGrid.module.css";

export function ProductGrid() {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('http://monet.cat:8080/product')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data);
  

  // Condición si button more is clicked then supArray must be complete. 
// const supArray = sups.filter((product) => product.id <= 3);
const [moreSups, setMoreSups] = useState(false);

const handleMoreSups = () => {
  setMoreSups(true);
}

const supArray = () =>{
  if(moreSups) return sups;
  else return sups.filter((product) => product.id <= 3);
};


// Efecto hover
const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }
    
  return (
    <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h3>SUP</h3>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
              
                {supArray().map((product) => (
                  <ProductCard key={product.id} id={product.id} product={product} />
                ))}
          
                  <Card className="text-center" onClick={handleMoreSups} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                  style={{ transition: 'all 0.3s ease-in-out',
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isHovered ? '0px 0px 10px 0px rgba(0,0,0,0.5)' : 'none',
                  cursor: isHovered ? 'pointer' : 'none',
                  backgroundColor: isHovered ? '#DEEDFF' : 'transparent' }}>
                    <Card.Body>
                      <Card.Title>...</Card.Title>
                      <Card.Text>MORE</Card.Text>
                    </Card.Body>
                  </Card>
              
            </Row>
          </Col>
        </Row>
        
         
    </Container>
  );
}