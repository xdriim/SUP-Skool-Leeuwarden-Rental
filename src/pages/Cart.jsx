import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export function Cart() {
  const cartArray = [{
    id: 1,
    name: 'SUPBoard',
    price: 230.00
  },
  {
    id: 2,
    name: 'Canoe',
    price: 235.00
  }
];

  return (
    <Container>
        <Row>
            <Col>
                <h1>Dentro de Cart</h1>
            </Col>
            {cartArray.map((product) => {
                return (
                    <Col>{product.name}</Col>
                )
                
            })}
        </Row>
    </Container>
  );
}

