import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fStyle from './Footer.module.css';

import { useLocation } from "react-router-dom";

export function GenerateFooter() {
    let location = useLocation();
    console.log(location.pathname);

    const bgHeader = () =>{
        if(location.pathname.startsWith('/alquiler')){
            return true
        }else{
            return false
        }
    } 
    return(
        <footer style={{ background: bgHeader() ? '#DEEDFF' : 'white', padding: '20px' }} className='sticky-footer'> 
            <Container>
                <Row style={{ color: '#305090' }}>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <p>Terms and Conditions and Privacy Statement</p>
                        <p>SUP Skool Leeuwarden 2023</p>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} className='text-end'>
                        <p>T: <a href="tel:+310582038399" className={fStyle.anchor} style={{ textDecoration: 'none', color: '#305090' }}>058 203 83 99</a> | T: <a href="tel:+310582038183" className={fStyle.anchor} style={{ textDecoration: 'none', color: '#305090' }}>058 203 81 83</a> (rental)</p>
                        <p>M: <a href="mailto:info@supskoolleuwarden.nl" className={fStyle.anchor} style={{ textDecoration: 'none', color: '#305090' }}>info@supskoolleuwarden.nl</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default GenerateFooter;