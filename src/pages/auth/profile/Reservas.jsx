import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import perfilImg from './../../../assets/img/usuario.png'
import { useState } from 'react';
import { get } from './../../../utils/httpClient';

import json from './../../../utils/sup.json';
import { filtratMes, meses, anyos } from './../../../utils/filter';

console.log(anyos);
export function Reservas() {
  // get('/user/login/');
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  // Búsqueda de una reserva en concreto, pero paso nombre y recojo id
  const [busqueda, setBusqueda] = useState();
  
  const [mes, setMes] = useState();
  const [anyo, setAnyo] = useState();

  
    const opciones = anyos.map((anyo, index) => (
      <option key={index} value={anyo}>
        {anyo}
      </option>
    ));
  

  // Lógica de filtro
  // Lógica de búsqueda
  const results = !busqueda ? json : json.filter( (dato) => dato.name.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()) );

  console.log(results);

  filtratMes(2002)


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
                        <Link to={'/datos'} className='text-light text-decoration-none'>Datos</Link>
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
                    <h1>RESERVAS</h1>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Form onSubmit={busqueda}>
                        <Row>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Form.Select aria-label="filtroAnyo">
                              {opciones}
                            </Form.Select>
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Form.Select aria-label="filtroMes">
                              <option>Enero</option>
                              <option value="1">Febrero</option>
                              <option value="2">Marzo</option>
                              <option value="3">Abril</option>
                              <option value="4">Mayo</option>
                              <option value="5">Junio</option>
                              <option value="6">Julio</option>
                              <option value="7">Agosto</option>
                              <option value="8">Septiembre</option>
                              <option value="9">Octubre</option>
                              <option value="10">Noviembre</option>
                              <option value="11">Diciembre</option>
                            </Form.Select>
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                              <Form.Group controlId="formBusqueda" className='mb-4'>
                                  <Form.Control type="text" placeholder="Buscar" value={busqueda} onChange={e => setBusqueda(e.target.value)} />
                              </Form.Group>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                    
                    
                </Col>
            </Row>
        </Container>
    </div>
    );
  }