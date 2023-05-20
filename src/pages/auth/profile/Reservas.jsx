import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import perfilImg from './../../../assets/img/usuario.png'
import { useState, useEffect } from 'react';

import { filtratMes, filtratAny, meses, anyos } from './../../../utils/filter';

// Spinner de carga
import { DotLoader } from "react-spinners";

export function Reservas() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  function handleGoBack() {
    navigate('/');
  }



  // Búsqueda de una reserva en concreto, pero paso nombre y recojo id
  const [busqueda, setBusqueda] = useState();

  const date = new Date();
  const currentYear = date.getFullYear();
  const mesActual = meses[date.getMonth()];
  
  const [mes, setMes] = useState(mesActual);
  const [anyo, setAnyo] = useState(currentYear);

  
    const opcionesM = meses.map((mes, index) => (
      <option key={index} value={mes}>
        {mes}
      </option>
    ));

    const opcionesA = anyos.map((anyo, index) => (
      <option key={index} value={anyo}>
        {anyo}
      </option>
    ));
  
  
    const [orders, setOrders] = useState([]);
    const [combinedData, setCombinedData] = useState([]);

    useEffect(() => {
      fetch('http://monet.cat:8080/order?user_id=2')
        .then(response => response.json())
        .then((orders) => {
          setOrders(orders.data)
      })
      .catch((error) => console.log(error));
      }, []);

      useEffect(() => {
        const fetchProductInfo = async () => {
          try {
            const productPromises = orders.map((order) => {
              const productId = order.productId;
              const productPromise = fetch(`http://monet.cat:8080/product/${productId}`).then(response => response.json());
              return Promise.all([order, productPromise]);
            });
    
            const productResponses = await Promise.all(productPromises);
            const combinedData = productResponses.map(([order, product]) => {
              return {
                ...order,
                product: product.data
              };
            });
    
            setCombinedData(combinedData);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching product information:', error);
            setCombinedData([]);
          }
        };
    
        if (orders.length > 0) {
          fetchProductInfo();
        }
      }, [orders]);

      console.log(combinedData);

  // Lógica de filtro
  // Lógica de búsqueda


  //const results = !busqueda ? products : products.filter( (dato) => dato.name.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()) );

  console.log(mes+' '+anyo);

  //const filtratMesBusqueda = results.filter(item => filtratAny(anyo).includes(item));

  //console.log(filtratMesBusqueda);

  //console.log(json.filter(item => filtratAny(anyo).includes(item) && filtratMes(mes).includes(item) ));

  const reservas = isLoading ? (
    <DotLoader color={"#80ACE0"} loading={true}  size={25} />
    ) : (
  combinedData.map((reserva, index) => (
          <Col xs={12} sm={12} md={12} lg={12} xl={12} key={index} value={reserva.product.name} className='mb-4' >
            <Row>
              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <h4>Nº reserva</h4>
                <p>{ reserva.orderId }</p>
              </Col>
              <Col xs={9} sm={9} md={9} lg={9} xl={9}>
                <h4>Fecha reserva</h4>
                <p>{ reserva.orderDate }</p>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <img src={ 'http://monet.cat:8080/image/'+reserva.product.images[0] } alt={ reserva.product.name } style={{ width: "12vh" }} />
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <p>{ reserva.product.name }</p>
                <p>from { reserva.product.price }€</p>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <Button style={{ backgroundColor: 'transparent', color: '#E03A40', borderColor: '#E03A40' }} className='mb-2' disabled>
                  Cancelar reserva
                </Button>
                <Button style={{ backgroundColor: '#E03A40', color: 'white', borderColor: '#E03A40' }} disabled>
                  Reservar de nuevo
                </Button>
              </Col>
            </Row>
          </Col>
  )));


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

                      <Link to={'/datos'} className='text-light text-decoration-none w-100'>
                        <Button className='mb-2 w-50'>Datos</Button>
                      </Link>
                      <Link to={'/reservas'} className='text-light text-decoration-none'>
                        <Button className='mb-2 w-50'>Reservas</Button>
                      </Link>
                      <Link to={'/historial'} className='text-light text-decoration-none'>
                        <Button className='w-50'>Historial</Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>

                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='mx-auto'>
                    <h1>RESERVAS</h1>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Form>
                        <Row>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Form.Select aria-label="filtroAnyo" onChange={e => setAnyo(e.target.value)}>
                              {opcionesA}
                            </Form.Select>
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Form.Select aria-label="filtroMes" onChange={e => setMes(e.target.value)}>
                              {opcionesM}
                            </Form.Select>
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                              <Form.Group controlId="formBusqueda" className='mb-4'>
                                  <Form.Control type="text" placeholder="Buscar" value={busqueda} onChange={e => setBusqueda(e.target.value)} />
                              </Form.Group>
                          </Col>

                          {/* Caja reservas */}
                          <Col xs={12} sm={12} md={12} lg={12} xl={12} className='border p-3'>
                            <Row>
                              {reservas}
                            </Row>
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