import React from 'react';
import logo from '../images/SUP.png';
import "./Header.module.css";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/brands.css';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export function GenerateHeader() {
    return(
        
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="ml-auto">
                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                <Button pill variant="outline-success">Buscar</Button>
            </Form>
            <Nav className="ml-auto">
                <Nav.Link href="/about">
                <FontAwesomeIcon icon={faUser} />
                </Nav.Link>
                <Nav.Link href="#">
                <FontAwesomeIcon icon={faShoppingCart} />
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
      
    )
}

export default GenerateHeader;