import { ProductCard } from "./../components/ProductCard";
import { Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// , { useEffect, useState }
import sups from "../utils/sup.json";
import { useParams } from "react-router-dom";


export function ListProducts(props) {

    const { productsSearch } = useParams();
    console.log(productsSearch);

    const filterData = () => {
      const filtrat = sups.filter(product => product.name.toLowerCase().includes(productsSearch.toLowerCase()));
      if(filtrat.length > 0 && productsSearch.trim() !== '') return filtrat;
      else return [];
    }

    const busquedaCorrecta = () => {
      if(filterData().length > 0) return true
      else return false
    }

  console.log(filterData());
  console.log(busquedaCorrecta());

  // SI ESTÁ VACÍO DEBERIA MOSTRAR ALGO
  // CON UN MENSAJE DE NO COINCIDE
    
  return (
    <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
              {filterData().map((product) => (
                  <ProductCard key={product.id} id={product.id} product={product} />
              ))}
              {!busquedaCorrecta() &&
                <Col>
                  <h1>No hay resultados para "{productsSearch}"</h1>
                </Col>
              }
              
            </Row>
          </Col>
        </Row>
    </Container>
  );
}