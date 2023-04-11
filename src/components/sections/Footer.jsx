import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fStyle from './Footer.module.css';

export function GenerateFooter() {
    return(
        <footer style={{ background: '#DEEDFF', padding: '20px' }}> 
            <Container>
                <Row style={{ color: '#305090' }}>
                    <Col>
                        <p>Terms and Conditions and Privacy Statement</p>
                        <p>SUP Skool Leeuwarden 2023</p>
                    </Col>
                    <Col>
                        <p>T: <a href="tel:+310582038399" className={fStyle.anchor} style={{ textDecoration: 'none', color: '#305090' }}>058 203 83 99</a> | T: <a href="tel:+310582038183" className={fStyle.anchor} style={{ textDecoration: 'none', color: '#305090' }}>058 203 81 83</a> (rental)</p>
                        <p>M: <a href="mailto:info@supskoolleuwarden.nl" className={fStyle.anchor} style={{ textDecoration: 'none', color: '#305090' }}>info@supskoolleuwarden.nl</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default GenerateFooter;