import { ProductCard } from "./../components/ProductCard";
import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// , { useEffect, useState }
import sups from "../utils/sup.json";
import "./../components/ProductGrid.module.css";
import { useParams } from 'react-router-dom';

export function Alquiler() {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('http://monet.cat:8080/product')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data);
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
        return sups
      case 'Canoes':
        return sups.filter(i => i.id > 2 );
      case 'Bonos':
        return sups.filter(i => i.id < 2 );
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
              <Col>
                <p style={{ textDecoration: 'underline' }}>Sort: by default</p>
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