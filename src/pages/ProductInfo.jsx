import { Container, Row, Col, Button, ButtonGroup, Image } from 'react-bootstrap';
import sups from "../utils/sup.json";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import imagenPrueba from './../pages/img/1-pers-kano-300x300.jpg';
import imagenPrueba1 from './../pages/img/IMG-20200526-WA0013-300x300.jpg';
import imagenPrueba2 from './../pages/img/Rectangle 6bg.png';
import imagenPrueba3 from './../pages/img/ticket.png';

// Translation
import { useTranslation } from 'react-i18next';

export function ProductInfo() {
    const { t } = useTranslation("global");

    const { productId } = useParams();
    console.log(productId);
    const product = sups.find((product) => product.id.toString() === productId);

    const [imageGrandeUrl, setImageGrandeUrl] = useState(product.imgUrl);

    const handleClick = (event) => {
        setImageGrandeUrl(event.target.src);
    }

    return (
      <div>
        <Container className='my-5'>
            <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <h1 className='mb-3 fw-bold'>{product.name}</h1>
                    <div style={{ maxWidth: '88%' }}>
                        <Image src={imageGrandeUrl} alt="img-tickets" className='img-fluid square border rounded' style={{ width: '100%' }}/>
                        <div style={{ textAlign: 'center' }} className='mt-2'>
                        {/* tendrias que hacer un forEach para determinar cuantas imagenes de más hay */}
                            <Image src={imagenPrueba} className='img-fluid square border rounded' style={{ width: 'calc(25% - 10px)', margin: '0 5px', display: 'inline-block' }} onClick={handleClick}></Image>
                            <Image src={imagenPrueba1} className='img-fluid square border rounded' style={{ width: 'calc(25% - 10px)', margin: '0 5px', display: 'inline-block' }} onClick={handleClick}></Image>
                            <Image src={imagenPrueba2} className='img-fluid square border rounded' style={{ width: 'calc(25% - 10px)', margin: '0 5px', display: 'inline-block' }} onClick={handleClick}></Image>
                            <Image src={imagenPrueba3} className='img-fluid square border rounded' style={{ width: 'calc(25% - 10px)', margin: '0 5px', display: 'inline-block' }} onClick={handleClick}></Image>
                        </div>
                    </div>
                    
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <h2 style={{ color: 'grey', marginBottom: '30px', width: 'fit-content' }}>€ {product.price}</h2>
                    <div className='my-3'>
                    <ButtonGroup style={{ borderColor: '#305090', width: '100%' }}>
                        <Button style={{ background: 'transparent', color: '#AFAFAF' }} className="mr-2">
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                        </Button>
                        <Button style={{ background: '#DEEDFF', color: '#305090', fontWeight: 'bold' }}>
                            Book now
                        </Button>
                    </ButtonGroup>
                    </div>
                    <div>
                        <p><b>Buy </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus nulla accusantium alias sint natus esse itaque tenetur maiores, mollitia omnis ipsa. Modi sit ducimus vero non delectus molestias dignissimos.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a, distinctio beatae ipsa voluptatibus facere aliquam culpa? Saepe blanditiis ipsum distinctio totam quis placeat, deserunt voluptas ut numquam dolor tempora.</p>
                        <p><b>How does it work? </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a, distinctio beatae ipsa voluptatibus facere aliquam culpa? Saepe blanditiis ipsum distinctio totam quis placeat, deserunt voluptas ut numquam dolor tempora.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a, distinctio beatae ipsa voluptatibus facere aliquam culpa? Saepe blanditiis ipsum distinctio totam quis placeat, deserunt voluptas ut numquam dolor tempora.</p>
                        <p><b>Conditions:</b></p>
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