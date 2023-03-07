import { ProductCard } from "./ProductCard";
import { Container, Row, Col } from 'react-bootstrap';
import style from "./ProductCard.module.css";
import React from 'react';
// , { useEffect, useState }
import sups from "../utils/sup.json";



export function ProductGrid() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//     fetch('http://monet.cat:8080/')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);

const supArray = sups.filter((product) => product.id < 3);
console.log(supArray);
    
  return (
    <div>
    <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h3>SUP</h3>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
            {supArray.map((product) => (
                <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                  <ProductCard key={product.id} product={product} />
                </Col>  
            ))}
                  <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                    <article className={style.moreCards}>...</article>
                  </Col>
            </Row>
          </Col>
        </Row>
    </Container>
    </div>
  );
}