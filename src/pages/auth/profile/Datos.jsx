import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { Link, useAsyncError, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import perfilImg from './../../../assets/img/usuario.png'
import { useState, useEffect } from 'react';

export function Datos() {
  // get('/user/login/');
    const navigate = useNavigate();

  function handleGoBack() {
    navigate('/');
  }

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const [idU, setIdU] = useState();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
        setLoggedIn(true);
        const parsedCart = JSON.parse(storedUser);
        // Tendria que recoger el id, pero!!!! Nunca lo he pasado
        setIdU(2);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://monet.cat:8080/user/'+idU);
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [idU]);

  // Recoger información que tiene el usuario actual
  const [nombre, setNombre] = useState('');
  const [nacimiento, setNacimiento] = useState('');
  const [contrasenya, setContrasenya] = useState('');

  const [nuevaContrasenya, setNuevaContrasenya] = useState('');
  const [repetirContrasenya, setRepetirContrasenya] = useState('');

  // Cambiazo cogiendo api
  const changeDatos = () => {
    // Recoger información en formulario y entonces hacer las comprobaciones necesarias. Ya después envio
  };

  const changeContra = () => {

  };

    return (
      <div className='my-5'>
        <Container>
            <Row className='mb-5'>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button className='mb-5' style={{ backgroundColor: 'transaparent' }} onClick={handleGoBack}>
                          <FontAwesomeIcon icon={faLeftLong}  />
                      </Button>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex flex-column'>
                      <Card className='w-50 mb-4'>
                        <Card.Img variant="top" src={perfilImg}  />
                        <Card.Body className='text-center'>
                          <Card.Title>Usuari</Card.Title>
                        </Card.Body>
                      </Card>

                      <Link to={'/datos'} className='text-light text-decoration-none w-100'>
                        <Button className='mb-2 w-50'>
                          Datos
                        </Button>
                      </Link>
                      <Link to={'/reservas'} className='text-light text-decoration-none'>
                        <Button className='mb-2 w-50'>
                          Reservas
                        </Button>
                      </Link>
                      <Link to={'/historial'} className='text-light text-decoration-none'>
                        <Button className='w-50'>
                          Historial
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>

                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='mx-auto'>
                    <h1>MIS DATOS</h1>
                    <h3>Datos de mi cuenta</h3>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Form onSubmit={changeDatos}>
                        <Row>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                          <Form.Group controlId="formBasicNombre" className='mb-4'>
                            <Form.Label>Nombre</Form.Label>
                              <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                          </Form.Group>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Form.Group controlId="formBasicNombre" className='mb-4'>
                            <Form.Label>Fecha de nacimiento</Form.Label>
                                <Form.Control type="date" placeholder="Contraseña" value={nacimiento} onChange={e => setNacimiento(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Button type="submit" style={{ backgroundColor: 'transparent', color: '#E03A40', borderColor: '#E03A40' }} className='d-flex float-end' disabled>
                              Guardar
                          </Button>
                        </Col>
                        </Row>
                      </Form>
                    </Col>
                    
                    <h3>Contraseña</h3>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Row>
                        <Form onSubmit={changeContra}>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Group controlId="formBasicNombre" className='mb-4'>
                                <Form.Label>Contraseña actual</Form.Label>
                                  <Form.Control type="text" placeholder="Contraseña actual" value={contrasenya} onChange={e => setContrasenya(e.target.value)} />
                              </Form.Group>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Group controlId="formBasicNombre" className='mb-4'>
                                <Form.Label>Nueva contraseña</Form.Label>
                                  <Form.Control type="text" placeholder="Nueva contraseña" value={nuevaContrasenya} onChange={e => setNuevaContrasenya(e.target.value)} />
                              </Form.Group>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Group controlId="formBasicNombre" className='mb-4'>
                                <Form.Label>Repetir contraseña</Form.Label>
                                  <Form.Control type="text" placeholder="Repetir contraseña" value={repetirContrasenya} onChange={e => setRepetirContrasenya(e.target.value)} />
                              </Form.Group>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Button type="submit" style={{ backgroundColor: 'transparent', color: '#E03A40', borderColor: '#E03A40' }} className='d-flex float-end' disabled>
                                  Guardar cambios
                            </Button>
                          </Col>
                          
                        </Form>
                      </Row>
                    </Col>
                </Col>
            </Row>
        </Container>
    </div>
    );
  }