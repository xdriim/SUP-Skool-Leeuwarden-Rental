import { ProductCard } from "./ProductCard";
import { Container, Row, Col, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// , { useEffect, useState }
import sups from "../utils/sup.json";
import "./ProductGrid.module.css";


export function ProductGrid() {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('https://jcibravo.neocities.org/api/supskoolleuwarden.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data);
  
const supArray = sups.filter((product) => product.id <= 3);
const canoesArray = sups.filter((product) => product.id > 3 && product.id <= 6);
    
  return (
    <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h3>SUP</h3>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
              {supArray.map((product) => (
                    <ProductCard key={product.id} id={product.id} product={product} />
              ))}
                <Col xs={12} sm={12} md={6} lg={6} xl={3} className="d-flex align-items-center justify-content-center" style={{ width: '16rem', height: '26rem' }}>
                  <Card className="text-center" >
                    <Card.Body>
                      <Card.Title>...</Card.Title>
                      <Card.Text>MORE</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h3>Canoes</h3>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
              {canoesArray.map((product) => (
                  <ProductCard key={product.id} id={product.id} product={product} />
              ))}
                <Col xs={12} sm={12} md={6} lg={6} xl={3} className="d-flex align-items-center justify-content-center" style={{ width: '16rem', height: '26rem' }}>
                  <Card className="text-center" >
                    <Card.Body>
                      <Card.Title>...</Card.Title>
                      <Card.Text>MORE</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </Col>
        </Row>
    </Container>
  );
}