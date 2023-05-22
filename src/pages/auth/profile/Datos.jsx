import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { Link, useAsyncError, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import perfilImg from './../../../assets/img/usuario.png'
import { useState, useEffect } from 'react';

export function Datos() {
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
      setIdU(2); // Actualiza el ID de usuario según tus necesidades
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://monet.cat:8080/user/' + idU);
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [idU]);

  const [nombre, setNombre] = useState('');
  const [nacimiento, setNacimiento] = useState('');
  const [contrasenya, setContrasenya] = useState('');
  const [nuevaContrasenya, setNuevaContrasenya] = useState('');
  const [repetirContrasenya, setRepetirContrasenya] = useState('');

  const changeDatos = () => {
    // Realiza las validaciones necesarias y envía los datos del formulario
  };

  const changeContra = () => {
    // Realiza las validaciones necesarias y cambia la contraseña
  };

  return (
    <div className='my-5'>
      <Container>
        <Row className='mb-5'>
          <Col xs={12} md={4} lg={3} className='mb-4'>
            <Row>
              <Col xs={12} className='mb-3'>
                <Button className='mb-5' onClick={handleGoBack}>
                  <FontAwesomeIcon icon={faLeftLong} />
                </Button>
              </Col>
              <Col xs={12} className='mb-4'>
                <Card className='w-100'>
                  <Card.Img variant="top" src={perfilImg} />
                  <Card.Body className='text-center'>
                    <Card.Title>Usuario</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4}>
                <Link to={'/datos'} className='text-light text-decoration-none w-100'>
                  <Button className='mb-2 w-100'>
                    Datos
                  </Button>
                </Link>
              </Col>
              <Col xs={4}>
                <Link to={'/reservas'} className='text-light text-decoration-none w-100'>
                  <Button className='mb-2 w-100'>
                    Reservas
                  </Button>
                </Link>
              </Col>
              <Col xs={4}>
                <Link to={'/historial'} className='text-light text-decoration-none w-100'>
                  <Button className='w-100'>
                    Historial
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={8} lg={9} className='mx-auto'>
            <h1>MIS DATOS</h1>
            <h3>Datos de mi cuenta</h3>
            <Col xs={12}>
              <Form onSubmit={changeDatos}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicNombre" className='mb-4'>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicNacimiento" className='mb-4'>
                      <Form.Label>Fecha de nacimiento</Form.Label>
                      <Form.Control type="date" placeholder="Fecha de nacimiento" value={nacimiento} onChange={e => setNacimiento(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" style={{ backgroundColor: 'transparent', color: '#E03A40', borderColor: '#E03A40' }} className='float-end' disabled>
                      Guardar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>

            <h3>Contraseña</h3>
            <Col xs={12}>
              <Row>
                <Form onSubmit={changeContra}>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicContraseñaActual" className='mb-4'>
                      <Form.Label>Contraseña actual</Form.Label>
                      <Form.Control type="password" placeholder="Contraseña actual" value={contrasenya} onChange={e => setContrasenya(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicNuevaContraseña" className='mb-4'>
                      <Form.Label>Nueva contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Nueva contraseña" value={nuevaContrasenya} onChange={e => setNuevaContrasenya(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicRepetirContraseña" className='mb-4'>
                      <Form.Label>Repetir contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Repetir contraseña" value={repetirContrasenya} onChange={e => setRepetirContrasenya(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" style={{ backgroundColor: 'transparent', color: '#E03A40', borderColor: '#E03A40' }} className='float-end' disabled>
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
