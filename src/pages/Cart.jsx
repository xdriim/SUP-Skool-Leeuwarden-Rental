import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, ProgressBar } from 'react-bootstrap';
import prod from './../pages/img/IMG-20200526-WA0013-300x300.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

// Translation
import { useTranslation } from 'react-i18next';

export function Cart() {
  const navigate = useNavigate();

  const cartArray = [{
    id: 1,
    name: 'SUPBoard',
    fecha: '24 de marzo 2023',
    hora: '16:00',
    tiempo: '120',
    personas: 2,
    type: 'sup',
    minPrice: 12.5,
    price: function(){
      return this.minPrice * this.personas * (this.tiempo/60)
    }
  },
  {
    id: 2,
    name: 'Canoe x 10',
    type: 'bono',
    price: 235.00
  },
  {
    id: 3,
    name: 'Canoe Board',
    fecha: '22 de enero 2023',
    hora: '15:00',
    tiempo: '60',
    personas: 2,
    type: 'canoe',
    minPrice: 9,
    price: function(){
      return this.minPrice * this.personas * (this.tiempo/60)
    }
  },
  {
    id: 4,
    name: 'Bonos de navidad',
    type: 'bono',
    price: 20.00
  },
];

  const precioBonos = cartArray.filter((prod) => prod.type === 'bono').reduce((a, b)=>{
    return a.price + b.price;
  });
  const precioOtros = cartArray.filter((prod) => prod.type !== 'bono').reduce((a, b)=>{
    return a.price() + b.price();
  });

  console.log(precioOtros);
  const precioTotal = precioBonos + precioOtros;

  // Aquí debe de ir toda la lógica de carrito de vaciar cesta y quitar producto

  // Lógica descuento
  const [descuento, setDescuento] = useState('');
  const handleDescuento = event => {
    event.preventDefault();
    
  };

  const comprar = event => {
    navigate('/buyProgress');
  };

  return (
    <Container className='my-5'>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} className='p-4'>
            <h3>Cesta</h3>
            <Row>
            {cartArray.map((product) => {
              if(product.type === 'bono'){
                return (
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className='mb-3' key={product.id}>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <img className='rounded' src={prod} alt="prod" />
                      </Col>
                      <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                        <p className='fw-bold'>{product.name}</p>
                        <p className='fw-bold' style={{ color: '#E03A40' }}>{product.price}€</p>
                      </Col>
                      <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Button style={{ color: '#80ACE0', backgroundColor: 'transparent', borderColor: '#80ACE0' }}>
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                      )
              }else{
                return (
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} key={product.id} className='mb-3'>
                    <Row>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <img className='rounded' src={prod} alt="prod" />
                      </Col>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3} className='mx-auto'>
                        <p className='fw-bold'>{product.name}</p>
                        <p>{product.fecha}</p>
                        <p>{product.hora} ({product.tiempo})</p>
                        <p>{product.personas} personas</p>
                        <p className='fw-bold' style={{ color: '#E03A40' }}>{product.price()}€</p>
                      </Col>
                      <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <Button style={{ color: '#80ACE0', backgroundColor: 'transparent', borderColor: '#80ACE0' }}>
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
              )
              }
            })}
            </Row>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', height: 'max-content' }} className='mx-auto p-4'>
            <h3>Resumen</h3>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Row>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <p className='fw-bold'>Total</p>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4} className='ms-auto'>
                    <p style={{ color: '#E03A40' }}>{ precioTotal }€</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Button style={{ color: 'white', backgroundColor: '#E03A40', border: 'none', width: '100%' }} onClick={comprar}>Completar reserva</Button>
              </Col>
            </Row>
          </Col>
            
            {/* Aquí va el input de descuento */}
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Form onSubmit={handleDescuento}>
                <Form.Group controlId="formBasicNombre" className='mt-4' >
                    <Form.Control type="text" placeholder="SUSCRIPCIÓN / CÓDIGO DESCUENTO" value={descuento} onChange={e => setDescuento(e.target.value)} 
                    style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', height: 'max-content' }} 
                    className='ps-4'  />
                </Form.Group>
              </Form>
            </Col>
        </Row>
    </Container>
  );
}

