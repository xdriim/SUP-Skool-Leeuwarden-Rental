import React from 'react';
import logo from './../../images/SUP.png';
import "./Header.module.css";
import { SearchBar } from './../SearchBar';

import { Navbar, Nav, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export function GenerateHeader() {
    return(
        <header style={{ background: '#DEEDFF', marginBottom: '50px' }}>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="Logo" /></Navbar.Brand>
                    <SearchBar />
                    <Nav className="ml-auto">
                        <Nav.Link href="/preauth">
                            <FontAwesomeIcon icon={faUser} />
                        </Nav.Link>
                        <Nav.Link href="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Nav.Link>
                    </Nav> 
                </Container>
            </Navbar>
        </header>
    )
}

export default GenerateHeader;