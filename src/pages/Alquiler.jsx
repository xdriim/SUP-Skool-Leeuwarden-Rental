import { ProductCard } from "./../components/ProductCard";
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

//import sups from "../utils/sup.json";
import { useParams } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

export function Alquiler() {
  const { t } = useTranslation("global");
  
    const [products, setData] = useState([]);

    useEffect(() => {
    fetch('http://monet.cat:8080/product')
      .then(response => response.json())
      .then(products => setData(products.data));
    }, []);

  console.log(products);
  const { typeID } = useParams();
  
  const [type, setType] = useState(typeID);
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
    switch (type) {
      case 'SUP':
        return products.filter(i => i.productTypeId === 1 );
      case 'Canoes':
        return products.filter(i => i.productTypeId === 2 );
      case 'Bonos':
        return products.filter(i => i.productTypeId === 3 );
      default:
        break;
    }
  };
    
  return (
    <Container className='my-5'>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-between mb-3">
            <Row>
              <Col>
                <Button id="bSUP" onClick={(e)=> changeType(e)} style={{ background: type === 'SUP' ? 'red' : 'blue' }}>SUP</Button>
              </Col>
              <Col>
                <Button id="bCanoes" onClick={(e)=> changeType(e)} style={{ background: type === 'Canoes' ? 'red' : 'blue' }}>Canoes</Button>
              </Col>
              <Col>
                <Button id="bBonos" onClick={(e)=> changeType(e)} style={{ background: type === 'Bonos' ? 'red' : 'blue' }}>Bonos</Button>
              </Col>
            </Row>
            <Row>
              {/* Dropdown: price  */}
              <Col>
                <p style={{ textDecoration: 'underline' }}>Sort: by default</p>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ display: 'none' }}>
                  Sort: by default
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
                {alquilerArray().map((product) => (
                  <ProductCard key={product.id} id={product.id} product={product} />
                ))}
            </Row>
          </Col>
        </Row>
    </Container>
  );
}