import React, { useState, useEffect } from 'react';
import logo from './../../pages/img/LogoLeeuwarden.png';
import "./Header.module.css";

import { Navbar, Nav, Container, NavDropdown, Collapse  } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useLocation } from "react-router-dom";

// Translation
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');

    function checkCartElementExists(elementKey) {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          return elementKey in parsedCart;
        }
        return false;
      }

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        if(checkCartElementExists('isLoggedIn')){
            setLoggedIn(true);
            const parsedCart = JSON.parse(storedCart);
            const name = parsedCart.email.split('@')[0];
            setEmail(name);
        }
    }
  }, []);


    return(
        <header style={{ background: bgHeader() ? '#DEEDFF' : 'white', 
        boxShadow: '0px 5px 5px 0px rgba(0, 0, 0, 0.3), 0px 10px 10px 0px rgba(0, 0, 0, 0.2)' }}>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" style={{ width: '5rem' }}/>
                    </Navbar.Brand>
                    
                    <Nav>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title={<span style={{ fontFamily: 'Montserrat' }} className='fs-2'>{t('header.tran1')}</span>}
                        menuVariant="dark" style={{ fontFamily: 'Montserrat' }}>
                            {/* No recargar de esta manera */}
                            <NavDropdown.Item href="/alquiler/SUP" style={{ fontFamily: 'Montserrat' }}>{t("header.tran2")}</NavDropdown.Item>
                            <NavDropdown.Item href="/alquiler/Canoes" style={{ fontFamily: 'Montserrat' }}>{t("header.tran3")}</NavDropdown.Item>
                            <NavDropdown.Item href="/alquiler/Bonos" style={{ fontFamily: 'Montserrat' }}>{t("header.tran4")}</NavDropdown.Item>
                        </NavDropdown>
                        
                        <Nav.Link href="/contact" >
                            <p style={{ fontFamily: 'Montserrat' }} className='fs-2'>{t('header.tran5')}</p>
                        </Nav.Link> 
                    </Nav>
                        
                    <Nav>
                        {isLoggedIn && (
                            <div style={{ lineHeight: '40px' }}>Bienvenido, {email}</div>
                            )}
                        <Nav.Link href="/preauth">
                            <FontAwesomeIcon icon={faUser} />
                        </Nav.Link>
                        <Nav.Link href="/buyProgress">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Nav.Link>
                        <LanguageSwitcher></LanguageSwitcher>
                    </Nav> 
                </Container>
            </Navbar>
            <ToastContainer></ToastContainer>
        </header>
    )
}

export default GenerateHeader;