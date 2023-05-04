import React, { useTransition } from 'react';
import logo from './../../pages/img/LogoLeeuwarden.png';
import "./Header.module.css";

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useLocation } from "react-router-dom";

// Translation
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';


// Aquí debe entrar la cesta para modificar un número al lado de faShoppingCart

export function GenerateHeader() {
    const { t } = useTranslation("global");
    let location = useLocation();

    const bgHeader = () =>{
        if(location.pathname.startsWith('/alquiler')){
            return true
        }else{
            return false
        }
    } 

    return(
        <header style={{ background: bgHeader() ? '#DEEDFF' : 'white', 
        boxShadow: '0px 5px 5px 0px rgba(0, 0, 0, 0.3), 0px 10px 10px 0px rgba(0, 0, 0, 0.2)' }}>
            <Navbar>
                <Container>
                    <Nav>
                        <NavDropdown
                        id="nav-dropdown-dark-example"
                        title={t('header.tran1')}
                        menuVariant="dark">
                            {/* No recargar de esta manera */}
                            <NavDropdown.Item href="/alquiler/SUP">{t("header.tran2")}</NavDropdown.Item>
                            <NavDropdown.Item href="/alquiler/Canoes">{t("header.tran3")}</NavDropdown.Item>
                            <NavDropdown.Item href="/alquiler/Bonos">{t("header.tran4")}</NavDropdown.Item>
                        </NavDropdown>
                        
                        <Nav.Link href="/contact">
                            <p>{t('header.tran5')}</p>
                        </Nav.Link>
                    </Nav> 
                    
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" style={{ width: '9rem' }}/>
                    </Navbar.Brand>
                    
                    <Nav>
                        <Nav.Link href="/preauth">
                            <FontAwesomeIcon icon={faUser} />
                        </Nav.Link>
                        <Nav.Link href="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Nav.Link>
                        <LanguageSwitcher></LanguageSwitcher>
                    </Nav> 
                </Container>
            </Navbar>
        </header>
    )
}

export default GenerateHeader;