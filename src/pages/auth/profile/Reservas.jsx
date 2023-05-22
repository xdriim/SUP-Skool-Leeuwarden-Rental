import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import perfilImg from './../../../assets/img/usuario.png'
import { useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';
import { meses, anyos } from './../../../utils/filter';

export function Reservas() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  function handleGoBack() {
    navigate('/');
  }

  const [busqueda, setBusqueda] = useState('');
  const date = new Date();
  const currentYear = date.getFullYear();
  const mesActual = meses[date.getMonth()];
  const [mes, setMes] = useState(mesActual);
  const [anyo, setAnyo] = useState(currentYear);
  const [orders, setOrders] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  const [userInfo, setUserInfo] = useState();
  const [user, setUser] = useState(null);
  const [id, setId] = useState();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserInfo(parsedUser);
    }
  }, []);

  useEffect(() => {
    if (userInfo && userInfo.idUser) {
      setId(userInfo.idUser);
    }
  }, [userInfo]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://monet.cat:8080/user/' + id);
        const data = await response.json();
        setUser(data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://monet.cat:8080/order?user_id=${id}`);
        const data = await response.json();
        console.log(data);
        console.log(id);
        if (data.rc === 0) {
          setOrders(data.data);
        } else {
          console.log('Error en la solicitud de los pedidos');
        }
      } catch (error) {
        console.log('Error en la solicitud de los pedidos:', error);
      }
    };

    fetchOrders();
  }, [id]);

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const productPromises = orders.map((order) => {
          const productId = order.productId;
          const productPromise = fetch(`http://monet.cat:8080/product/${productId}`).then((response) => response.json());
          return Promise.all([order, productPromise]);
        });

        const productResponses = await Promise.all(productPromises);
        const combinedData = productResponses.map(([order, product]) => {
          return {
            ...order,
            product: product.data,
          };
        });

        setCombinedData(combinedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product information:', error);
        setCombinedData([]);
        setIsLoading(false);
      }
    };

    if (orders.length > 0) {
      setIsLoading(true);
      fetchProductInfo();
    } else {
      setIsLoading(false);
    }
  }, [orders]);

  const historial = combinedData.filter(reserva => new Date(reserva.toDate) > new Date()).map((reserva, index) => (    
    <Col xs={12} sm={12} md={12} lg={12} xl={12} key={index} value={reserva.product?.name} className='mb-4' style={{ borderBottom: '2px solid #DEEDFF' }} >
      <Row>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <h4>Nº reserva</h4>
          <p>{reserva.orderId}</p>
        </Col>
        <Col xs={9} sm={9} md={9} lg={9} xl={9}>
          <h4>Fecha reserva</h4>
          <p>{reserva.orderDate}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <img src={`http://monet.cat:8080/image/${reserva.product?.images[0]}`} alt={reserva.product?.name} style={{ width: "12vh" }} />
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <p>{reserva.product?.name}</p>
          <p>from {reserva.product?.price}€</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <Button style={{ backgroundColor: '#E03A40', color: 'white', borderColor: '#E03A40' }} onClick={()=> navigate(`/productInfo/${reserva.product?.productId}`)}>
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
                <Button className='mb-5'>
                  <FontAwesomeIcon icon={faLeftLong} onClick={handleGoBack} />
                </Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex flex-column'>
                <Card className='w-50 mb-4'>
                  <Card.Img variant="top" src={perfilImg} />
                  <Card.Body className='text-center'>
                    <Card.Title>{user?.name}</Card.Title>
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
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='border p-3'>
              <Row>
                {isLoading ? (
                  <DotLoader color={"#80ACE0"} loading={true} size={25} />
                ) : (
                  historial
                )}
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
