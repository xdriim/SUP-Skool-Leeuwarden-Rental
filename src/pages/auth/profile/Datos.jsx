import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import perfilImg from './../../../assets/img/usuario.png'
import { useState } from 'react';

export function Datos() {
    const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  // Recoger información que tiene el usuario actual
  const [nombre, setNombre] = useState('');
  const [nacimiento, setNacimiento] = useState('');
  const [contrasenya, setContrasenya] = useState('');

  // Cambiazo
  const changeDatos = () => {

  };

    return (
      <div>
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
                    <h1>MIS DATOS</h1>
                    <h3>Datos de mi cuenta</h3>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Row>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                           <Form onSubmit={changeDatos}>
                            <Form.Group controlId="formBasicNombre" className='mb-4'>
                                <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                            </Form.Group>
                            
                            <Button type="submit" style={{ backgroundColor: '#305090', color: '#DEEDFF', width: '100%' }}>
                                Enviar
                            </Button>
                           </Form>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Form.Group controlId="formBasicNombre" className='mb-4'>
                                <Form.Control type="text" placeholder="Contraseña" value={nombre} onChange={e => setNombre(e.target.value)} />
                            </Form.Group>
                        </Col>
                      </Row>
                    </Col>
                    <h3>Contraseña</h3>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>

                    </Col>
                </Col>
            </Row>
        </Container>
    </div>
    );
  }