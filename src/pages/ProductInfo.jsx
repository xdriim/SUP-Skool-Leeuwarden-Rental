import { Container, Row, Col, Button, ButtonGroup, Image } from 'react-bootstrap';
//import sups from "../utils/sup.json";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from "react-router-dom";

// Translation
import { useTranslation } from 'react-i18next';

// Spinner de carga
import { DotLoader } from "react-spinners";

export function ProductInfo() {
    const { t } = useTranslation("global");
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const [product, setProduct] = useState();
    const [cart, setCart] = useState([]);
    const [images, setImages] = useState([]);
    const { productId } = useParams();
    console.log(productId);

    useEffect(() => {
        fetch(`http://monet.cat:8080/product/${productId}`)
          .then(response => response.json())
          .then((product) => {
            setProduct(product.data);
            setImages(product.data.images);
            setImageGrandeUrl('http://monet.cat:8080/image/'+product.data.images[0]);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching product:', error);
            setProduct(null);
          });
      }, [productId]);

    
    console.log(product);

    const [imageGrandeUrl, setImageGrandeUrl] = useState();

    const handleClick = (event) => {
        setImageGrandeUrl(event.target.src);
    }

    useEffect(() => {
        const storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      }, []);
      
      const [error, setError] = useState('');
    
      const addToCart = () => {
        // Verificar si el producto ya está en el carrito
        const isProductInCart = cart.find((item) => item.productId === product.productId);
      
        if (isProductInCart) {
          // El producto ya está en el carrito, mostrar mensaje de error durante 5 segundos
          setError('El producto ya está en el carrito');
          setTimeout(() => {
            setError('');
          }, 5000);
          return;
        }
      
        // Agregar el producto al carrito
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        navigate('/setDate');
      };

      const bookNow = () => {
        addToCart();
      };

    return (
      <div>
        <Container className='my-5'>
            {/* tendrias que hacer un forEach para determinar cuantas imagenes de más hay */}
            {isLoading ? (
                <DotLoader color={"#80ACE0"} loading={true}  size={25} />
            ) : (
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <h1 className='mb-3 fw-bold' style={{ fontFamily: 'Montserrat' }}>{product.name}</h1>
                    <div style={{ maxWidth: '88%' }}>
                        <Image src={imageGrandeUrl} alt="img-tickets" className='img-fluid square border rounded' style={{ width: '100%' }}/>
                        <div style={{ textAlign: 'center' }} className='mt-2'>
                            {images.map((image, index) => (
                                <Image
                                key={index}
                                src={'http://monet.cat:8080/image/'+image}
                                className='img-fluid square border rounded'
                                style={{ width: 'calc(25% - 10px)', margin: '0 5px', display: 'inline-block' }}
                                onClick={handleClick}
                                />
                            ))}
                            </div>
                    </div>
                    
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <h2 style={{ color: 'grey', marginBottom: '30px', width: 'fit-content', fontFamily: 'Montserrat' }}>from {product.price}€</h2>
                    <div className='my-3'>
                    <ButtonGroup style={{ borderColor: '#305090', width: '100%' }}>
                        {/* <Button style={{ background: 'transparent', color: '#AFAFAF', fontFamily: 'Montserrat' }} className="mr-2" onClick={addToCart}>
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                        </Button> */}
                        <Button style={{ background: '#DEEDFF', color: '#305090', fontWeight: 'bold', fontFamily: 'Montserrat' }} className='rounded' onClick={bookNow}>
                            Book now
                        </Button>
                    </ButtonGroup>
                    {error && (
                          <p id="error" style={{ display: 'block', color: 'red', fontWeight: 'bold' }}>
                            {error}
                          </p>
                        )}
                    </div>
                    <div>
                        <p style={{ fontFamily: 'Montserrat' }}><b style={{ fontFamily: 'Montserrat' }}>Buy </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus nulla accusantium alias sint natus esse itaque tenetur maiores, mollitia omnis ipsa. Modi sit ducimus vero non delectus molestias dignissimos.</p>
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
            )}
                
        </Container>
    </div>
    );
  }