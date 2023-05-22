import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

// Translation
import { useTranslation } from 'react-i18next';

export function Cart({ nextStep }) {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
    }
  }, []);

  useEffect(() => {
    // Actualizar el precio total
    const totalPrice = cart.reduce((acc, item) => acc + item.product.stock * item.product.price, 0);
    setTotalPrice(totalPrice);
  
  }, [cart]);
  

  // Aquí debe de ir toda la lógica de carrito de vaciar cesta y quitar producto

  // Lógica descuento
  // const [descuento, setDescuento] = useState('');
  // const handleDescuento = event => {
  //   event.preventDefault();
  // };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product.productId !== productId);
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const comprar = () => {
    nextStep();
  };

  return (
    <Container className='my-5'>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} className='p-4'>
            <h3>Cesta</h3>
            <Row>
            {cart && cart.length > 0 ? (
              cart.map((item) => {
                const product = item.product;
              return (
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className='mb-3' key={product.productId}>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={11} xl={11}>
                        <Row>
                          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <img className='rounded' src={'http://monet.cat:8080/image/'+product.images[0]} alt="prod" style={{ width: '100%' }}/>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                            <p className='fw-bold'>{product.name}</p>
                            <p className=''>1h 30min</p>
                            <p className=''>from {product.price}€</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={1} xl={1}>
                        <Button style={{ color: '#80ACE0', backgroundColor: 'transparent', borderColor: '#80ACE0' }} onClick={() => removeFromCart(product.productId)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
              );
                  })
              ) : (
                <p>No hay productos en el carrito</p>
              )
            }
            </Row>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', height: 'max-content' }} className='mx-auto p-4'>
            <h3>Resumen</h3>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <p className='fw-bold'>Total</p>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={4} xl={4} className='ms-auto'>
                    <p style={{ color: '#E03A40' }}>{totalPrice} €</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Button disabled={cart.length === 0} style={{ color: 'white', backgroundColor: '#E03A40', border: 'none', width: '100%' }} onClick={comprar}>Completar reserva</Button>
              </Col>
            </Row>
          </Col>
            
            {/* Aquí va el input de descuento */}
            {/* <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Form onSubmit={handleDescuento}>
                <Form.Group controlId="formBasicNombre" className='mt-4' >
                    <Form.Control type="text" placeholder="SUSCRIPCIÓN / CÓDIGO DESCUENTO" value={descuento} onChange={e => setDescuento(e.target.value)} 
                    style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', height: 'max-content' }} 
                    className='ps-4'  />
                </Form.Group>
              </Form>
            </Col> */}
        </Row>
    </Container>
  );
}

