import { Container, Row, Col, Button, ButtonGroup, Image } from 'react-bootstrap';
import sups from "../utils/sup.json";
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export function ProductInfo() {

    const { productId } = useParams();
    console.log(productId);
    const product = sups.find((product) => product.id.toString() === productId);

    return (
      <div>
        <Container>
            <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <h1 style={{ marginBottom: '30px' }}>{product.name}</h1>
                    <div className='square border rounded' style={{ display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    width: 'max-content'
                                                                }}>
                        <Image  src={product.imgUrl} alt="img-tickets" className='img-fluid'/>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                    <ButtonGroup style={{ borderColor: '#305090' }}>
                        <Button style={{ background: 'transparent', color: '#AFAFAF' }} className="mr-2">
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                        </Button>
                        <Button style={{ background: '#DEEDFF', color: '#305090', fontWeight: 'bold' }}>
                            Book now
                        </Button>
                    </ButtonGroup>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <h2 style={{ color: 'red', marginBottom: '30px', width: 'fit-content' }}>€ {product.price}</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus nulla accusantium alias sint natus esse itaque tenetur maiores, mollitia omnis ipsa. Modi sit ducimus vero non delectus molestias dignissimos.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a, distinctio beatae ipsa voluptatibus facere aliquam culpa? Saepe blanditiis ipsum distinctio totam quis placeat, deserunt voluptas ut numquam dolor tempora.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a, distinctio beatae ipsa voluptatibus facere aliquam culpa? Saepe blanditiis ipsum distinctio totam quis placeat, deserunt voluptas ut numquam dolor tempora.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a, distinctio beatae ipsa voluptatibus facere aliquam culpa? Saepe blanditiis ipsum distinctio totam quis placeat, deserunt voluptas ut numquam dolor tempora.</p>
                        <p>Conditions:</p>
                        <ul>
                            <li>This strip...</li>
                            <li>You rent...</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
  }