import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../pages/img/LogoLeeuwarden.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import { Datos } from './profile/Datos';
import { Formik, ErrorMessage, Field } from 'formik';

// Translation
import { useTranslation } from 'react-i18next';

export function Login() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();
  function handleGoBack() {
    navigate(-1);
  }
  
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
  
  // Obtener los productos de la carta
  //const storedCart = localStorage.getItem('cart');

    fetch('http://monet.cat:8080/user/login', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.rc === 0) {
          setLoggedIn(true);
            // Guardar en el localStorage junto con el email del usuario
            const idUser = data.data.userId;
            sessionStorage.setItem('user', JSON.stringify({ email, isLoggedIn, idUser }));
          navigate('/');
        } else {
          const error = document.getElementById('error');
          error.innerHTML = data.rc_message;
          error.style.display = 'block';
        }
      })
      .catch(error => {
        alert(`FATAL: ${error.message}`);
      });
  };
  

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <Container >
            
              <Container style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} className='p-4 w-50'>
                <Button className='mb-5' style={{ backgroundColor: 'transaparent' }} onClick={handleGoBack}>
                  <FontAwesomeIcon icon={faLeftLong} />
                </Button> 
                <div style={{ textAlign: 'center' }}>
                  <img src={logo} alt="logo" style={{ width: '10%' }} onClick={ () => navigate('/')} />
                </div>
            
                <h4 className='fw-bold mb-4' style={{ fontFamily: 'Montserrat' }}>{t("login.tran1")}</h4>
                

                <Form id='formLogin' onSubmit={handleSubmit}>
                      <Form.Group controlId="formBasicEmail" className='mb-4' style={{ fontFamily: 'Montserrat' }}>                          
                          <Form.Control type="text" name='email' placeholder={t("login.tran2")} />                            
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                          <Form.Control type="password" name='password_hash' placeholder={t("login.tran3")} />
                      </Form.Group>
                      <p style={{ display: 'none', color: 'red' }} id='error'></p>

                      <Link to={'/register'} style={{ color: '#80ACE0', fontFamily: 'Montserrat' }}>{t("login.tran4")}</Link>
                      <Button type="submit"  style={{ backgroundColor: '#305090', color: '#DEEDFF', width: '100%', fontFamily: 'Montserrat' }} className='mt-3'>
                         {t("login.tran5")}
                      </Button>
                    </Form>
                
              </Container>

              <Routes>
                <Route path="/datos" element={<Datos />} />
              </Routes>
          </Container>
    </div>
    
  );
}

