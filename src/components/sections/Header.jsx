import React from 'react';
import logo from './../../images/SUP.png';
import "./Header.module.css";

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";

// Aquí debe entrar la cesta para modificar un número al lado de faShoppingCart

export function GenerateHeader() {
    let location = useLocation();
    console.log(location.pathname);

    const bgHeader = () =>{
        if(location.pathname === '/alquiler'){
            return true
        }else{
            return false
        }
    } 

    return(
        <header style={{ background: bgHeader() ? '#DEEDFF' : 'white' }}>
            <Navbar>
                <Container>
                    <Nav className="ml-auto">
                        <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Alquiler"
                        menuVariant="dark">
                            {/* No recargar de esta manera */}
                            <NavDropdown.Item href="/alquiler/SUP">SUP</NavDropdown.Item>
                            <NavDropdown.Item href="/alquiler/Canoes">Canoes</NavDropdown.Item>
                            <NavDropdown.Item href="/alquiler/Bonos">Bonos</NavDropdown.Item>
                        </NavDropdown>
                        
                        <Nav.Link href="/contact">
                            <p>Contacto</p>
                        </Nav.Link>
                    </Nav> 
                    <Navbar.Brand href="/"><img src={logo} alt="Logo" /></Navbar.Brand>
                    
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