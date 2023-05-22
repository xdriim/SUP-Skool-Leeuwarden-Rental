import React, { useState, useEffect } from 'react';
import logo from './../../pages/img/LogoLeeuwarden.png';
import "./Header.module.css";

import { Navbar, Nav, Container, NavDropdown, Collapse  } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
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


  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
        setLoggedIn(true);
        const parsedCart = JSON.parse(storedUser);
        const name = parsedCart.email.split('@')[0];
        setEmail(name);
    }
  }, []);

  const handleLinkClick = (event) => {
    if (isLoggedIn) {
      event.preventDefault();
      window.location.href = '/datos';
    }
  };


  function logOut() {
    fetch(`http://monet.cat:8080/user/logout`, {
        method: 'POST'
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`FATAL: ${response.statusText}`);
        }
    })
    .then(data => {
        if (data.rc === 0) {
            setLoggedIn(false);
            sessionStorage.removeItem('user');
            console.log(`SUCCESS: ${data.rc_message} [RC${data.rc}]`);
        } else {
            console.log(`ERROR: ${data.rc_message} [RC${data.rc}]`);
        }
    })
    .catch(error => {
        console.log(error.message);
    });
}
const [showMobileMenu, setShowMobileMenu] = useState(false);

const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };


return (
    <header
      style={{
        background: bgHeader() ? '#DEEDFF' : 'white',
        boxShadow:
          '0px 5px 5px 0px rgba(0, 0, 0, 0.3), 0px 10px 10px 0px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{ width: '5rem' }} />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={toggleMobileMenu}
          />

          <Navbar.Collapse id="navbar-nav" className={showMobileMenu ? '' : 'collapse'}>
            <Nav className="mx-auto">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={
                  <span style={{ fontFamily: 'Montserrat' }} className="fs-2">
                    {t('header.tran1')}
                  </span>
                }
                menuVariant="dark"
                style={{ fontFamily: 'Montserrat' }}
              >
                <NavDropdown.Item
                  href="/alquiler/SUP"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {t('header.tran2')}
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/alquiler/Canoes"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {t('header.tran3')}
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/alquiler/Bonos"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {t('header.tran4')}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact" >
                            <p style={{ fontFamily: 'Montserrat' }} className='fs-2'>{t('header.tran5')}</p>
                </Nav.Link> 
            </Nav>

            {isLoggedIn && (
                <Nav className='d-flex flex-row'>
                  <p className='me-4' style={{ fontWeight: 'bold' }}>Bienvenido, {email}</p>
                  <Nav.Link onClick={logOut} className='me-4'>
                    <FontAwesomeIcon icon={faSignOut} />
                  </Nav.Link>
                </Nav>
              )}
            <Nav className="d-flex flex-row">
            
              <Nav.Link href="/preauth" onClick={handleLinkClick} className='me-4'>
                <FontAwesomeIcon icon={faUser} />
              </Nav.Link>
              <Nav.Link href="/buyProgress" className='me-4'>
                <FontAwesomeIcon icon={faShoppingCart} />
              </Nav.Link>
              
              <LanguageSwitcher />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </header>
  );
}

export default GenerateHeader;