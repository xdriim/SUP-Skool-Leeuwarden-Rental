import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import logo from './../../pages/img/LogoLeeuwarden.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";
// Translation
import { useTranslation } from 'react-i18next';
//Validació formulari
import { Formik, ErrorMessage, Field } from 'formik';


export function Register() {
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
  const storedCart = localStorage.getItem('cart');

    fetch('http://monet.cat:8080/user/signup', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.rc === 0) {
          setLoggedIn(true);
          if(storedCart){
            // Guardar los productos de la carta en el localStorage junto con el email del usuario
            localStorage.setItem('cart', JSON.stringify({ email, isLoggedIn , storedCart }));
          }else{
            localStorage.setItem('cart', JSON.stringify({ email, isLoggedIn }));
          }
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

  function formContra(contra){
    let validacion = true;
    let mensaje = [];
    // Validación contraseña
    if(!contra){
      mensaje.push('Por favor ingrese un contraseña');
      validacion = false;
    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(contra)){
      mensaje.push('La contraseña debe contener al menos 8 caracteres y al menos una letra minúscula, una letra mayúscula, un número y un carácter especial');
      validacion = false;
    }
    return validacion;
  }

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <Container>
          <Container style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} className='p-4 w-50'>
            <Button className='mb-5' style={{ backgroundColor: 'transaparent' }} onClick={handleGoBack}>
              <FontAwesomeIcon icon={faLeftLong} />
            </Button>
            <div style={{ textAlign: 'center' }}>
              <img src={logo} alt="logo" style={{ width: '10%' }} />
            </div>
            
            <h4 className='fw-bold mb-4' style={{ fontFamily: 'Montserrat' }}>{t("register.tran1")}</h4>
            
              <Form id='formRegister' onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicApellido" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                        <Form.Control type="text" name='surname' placeholder={t("register.tran2")} />
                </Form.Group>
                <Form.Group controlId="formBasicNombre" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                        <Form.Control type="text" name='name' placeholder={t("register.tran3")} />                     
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className='mb-4' style={{ fontFamily: 'Montserrat' }}>                
                        <Form.Control type="text" name='email' placeholder={t("register.tran4")} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                        <Form.Control type="password" name='password_hash' placeholder={t("register.tran5")} />
                </Form.Group>
                <Form.Group controlId="formBasicPasswordConfirm" className='mb-4' style={{ fontFamily: 'Montserrat' }}>                
                        <Form.Control type="password" name='password_confirm_hash' placeholder={t("register.tran6")} />
                </Form.Group>

                <p style={{ display: 'none', color: 'red' }} id='error'></p>
                <Button type="submit" style={{ backgroundColor: '#305090', color: '#DEEDFF', width: '100%', fontFamily: 'Montserrat' }} className='mt-3'>
                        {t("register.tran7")}
                      </Button>
              </Form>
              
          </Container>
      </Container>
    </div>
  );
}

