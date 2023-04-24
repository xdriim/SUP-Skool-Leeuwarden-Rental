import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import perfilImg from './../../../assets/img/usuario.png'
import { useState } from 'react';
import { get } from './../../../utils/httpClient';

import json from './../../../utils/sup.json';

export function Historial() {
  // get('/user/login/');
    const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  // Recoger información según usuario
  const historial = json.map((reserva, index) => (
    <Col xs={12} sm={12} md={12} lg={12} xl={12} key={index} value={reserva.name} className='mb-4' >
      <Row>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <h4>Nº reserva</h4>
          <p>3465</p>
        </Col>
        <Col xs={9} sm={9} md={9} lg={9} xl={9}>
          <h4>Fecha reserva</h4>
          <p>23/07/22</p>
        </Col>
      </Row>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <img src={ reserva.imgUrl } alt={ reserva.name } style={{ width: "12vh" }} />
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <p>{ reserva.name }</p>
          <p>{ reserva.type } - 1 estudiante</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <Button style={{ backgroundColor: '#E03A40', color: 'white', borderColor: '#E03A40' }}>
            Reservar de nuevo
          </Button>
        </Col>
      </Row>
    </Col>
));
  

    return (
      <div className='my-5'>
        <Container>
            <Row className='mb-5'>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button className='mb-5' style={{ backgroundColor: 'transaparent' }}>
                          <FontAwesomeIcon icon={faLeftLong} onClick={handleGoBack} />
                      </Button>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex flex-column'>
                      <Card className='w-50 mb-4'>
                        <Card.Img variant="top" src={perfilImg}  />
                        <Card.Body className='text-center'>
                          <Card.Title>Usuari</Card.Title>
                        </Card.Body>
                      </Card>

                      <Button className='mb-2 w-50'>
                        <Link to={'/datos'} className='text-light text-decoration-none w-100'>Datos</Link>
                      </Button>
                      <Button className='mb-2 w-50'>
                        <Link to={'/reservas'} className='text-light text-decoration-none'>Reservas</Link>
                      </Button>
                      <Button className='w-50'>
                        <Link to={'/historial'} className='text-light text-decoration-none'>Historial</Link>
                      </Button>
                    </Col>
                  </Row>
                </Col>

                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='mx-auto'>
                    <h1>HISTORIAL ALQUILER</h1>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='border p-3'>
                      <Row>
                        {historial}
                      </Row>
                    </Col>
                    
                </Col>
            </Row>
        </Container>
    </div>
    );
  }