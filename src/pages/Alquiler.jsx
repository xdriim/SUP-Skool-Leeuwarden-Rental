import { ProductCard } from "./../components/ProductCard";
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

//import sups from "../utils/sup.json";
import { useParams } from 'react-router-dom';

// Spinner de carga
import { DotLoader } from "react-spinners";

// Translation
import { useTranslation } from 'react-i18next';

export function Alquiler() {
  const { t } = useTranslation("global");
  const [isLoading, setIsLoading] = useState(true);
  
  const [products, setData] = useState([]);

    useEffect(() => {
    fetch('http://monet.cat:8080/product')
      .then(response => response.json())
      .then((products) => {
        setData(products.data);
        setIsLoading(false);
    })
    .catch((error) => console.log(error));
    }, []);


  console.log(products);
  const { typeID } = useParams();
  
  const [type, setType] = useState(typeID);
  const [filter, setFilter] = useState('Ordenar por defecto');
  // Type puede venir definido anteriormente en el desplegable de alquiler

  function changeType(e){
    switch (e.target.id) {
      case 'bSUP':
        setType('SUP');
        break;
      case 'bCanoes':
        setType('Canoes');
        break;
      case 'bBonos':
        setType('Bonos');
        break;
      default:
        break;
    }
  }

    const alquilerArray = () =>{
      let filteredProducts;
      switch (type) {
        case 'SUP':
          filteredProducts = products.filter(i => i.productTypeId === 1 );
          break;
        case 'Canoes':
          filteredProducts = products.filter(i => i.productTypeId === 2 );
          break;
        case 'Bonos':
          filteredProducts = products.filter(i => i.productTypeId === 3 );
          break;
        default:
          filteredProducts = products;
          break;
      }

      if (filter === 'Precio: bajo a alto') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (filter === 'Precio: alto a bajo'){
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      return filteredProducts;
    };
    
  return (
    <Container className='my-5'>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-between mb-3">
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Button id="bSUP" onClick={(e)=> changeType(e)} style={{ background: type === 'SUP' ? '#80ACE0' : 'white', borderColor:  '#80ACE0', fontWeight: type === 'SUP' ? 'bold' : 'normal', color: '#305090', fontFamily: 'Montserrat'}}>SUP</Button>
              </Col>
              <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                <Button id="bCanoes" onClick={(e)=> changeType(e)} style={{ background: type === 'Canoes' ? '#80ACE0' : 'white', borderColor: '#80ACE0', fontWeight: type === 'Canoes' ? 'bold' : 'normal', color: '#305090', fontFamily: 'Montserrat' }}>Canoes</Button>
              </Col>
              <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                <Button id="bBonos" onClick={(e)=> changeType(e)} style={{ background: type === 'Bonos' ? '#80ACE0' : 'white', borderColor: '#80ACE0', fontWeight: type === 'Bonos' ? 'bold' : 'normal', color: '#305090', fontFamily: 'Montserrat' }}>Bonos</Button>
              </Col>
            </Row>
            <Row>
              {/* Dropdown: price  */}
              <Col>
                <Dropdown>
                  <Dropdown.Toggle className="fs-5" style={{ backgroundColor: 'transparent', color: 'black', borderColor: 'transparent', textDecoration: 'underline', fontFamily: 'Montserrat' }} >
                  {filter}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setFilter('Ordenar por defecto')} style={{ fontFamily: 'Montserrat' }}>Ordenar por defecto</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Precio: bajo a alto')} style={{ fontFamily: 'Montserrat' }}>Precio: bajo a alto</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Precio: alto a bajo')} style={{ fontFamily: 'Montserrat' }}>Precio: alto a bajo</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
            {isLoading ? (
            <DotLoader color={"#80ACE0"} loading={true}  size={25} />
            ) : (
              alquilerArray().map((product) => (
                <ProductCard key={product.productId} id={product.productId} product={product} />
              ))
            )}
            </Row>
          </Col>
        </Row>
    </Container>
  );
}