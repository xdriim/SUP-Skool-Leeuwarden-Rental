import { ProductCard } from "./ProductCard";
import { Container, Row, Col, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// , { useEffect, useState }
import sups from "../utils/sup.json";
import "./ProductGrid.module.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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

const [moreCanoes, setMoreCanoes] = useState(false);

const handleMoreCanoes = () => {
  setMoreCanoes(true);
}

const canoesArray = () =>{
  if(moreCanoes) return sups;
  else return sups.filter((product) => product.id > 3 && product.id <= 6);
};


// Efecto hover
const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }


  // Proximamente separar en otro componente el botón de more
  // Efecto hover
const [isHovered1, setIsHovered1] = useState(false);

const handleMouseEnter1 = () => {
  setIsHovered1(true);
}

const handleMouseLeave1 = () => {
  setIsHovered1(false);
}
    
  return (
    <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h3>SUP</h3>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
              {moreSups &&
              <Carousel responsive={responsive}>
                {supArray().map((product) => (
                  <ProductCard key={product.id} id={product.id} product={product} />
                ))}
                </Carousel>
              }
              {!moreSups &&
              
                supArray().map((product) => (
                  <ProductCard key={product.id} id={product.id} product={product} />
                ))}
                 
              {!moreSups &&
                 <Col xs={12} sm={12} md={6} lg={6} xl={3} className="d-flex align-items-center justify-content-center" 
              style={{ width: '16rem', height: '26rem' }}
              >
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
                </Col>
              }
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h3>Canoes</h3>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
            {moreCanoes &&
              <Carousel responsive={responsive}>
                {canoesArray().map((product) => (
                  <ProductCard key={product.id} id={product.id} product={product} />
                ))}
                </Carousel>
              }
              {!moreCanoes &&
              
                canoesArray().map((product) => (
                  <ProductCard key={product.id} id={product.id} product={product} />
                ))}
                 
              {!moreCanoes &&
                 <Col xs={12} sm={12} md={6} lg={6} xl={3} className="d-flex align-items-center justify-content-center" 
              style={{ width: '16rem', height: '26rem' }}
              >
                  <Card className="text-center" onClick={handleMoreCanoes} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}
                  style={{ transition: 'all 0.3s ease-in-out',
                  transform: isHovered1 ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isHovered1 ? '0px 0px 10px 0px rgba(0,0,0,0.5)' : 'none',
                  cursor: isHovered1 ? 'pointer' : 'none',
                  backgroundColor: isHovered1 ? '#DEEDFF' : 'transparent' }}>
                    <Card.Body>
                      <Card.Title>...</Card.Title>
                      <Card.Text>MORE</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              }
            </Row>
          </Col>
        </Row>
    </Container>
  );
}