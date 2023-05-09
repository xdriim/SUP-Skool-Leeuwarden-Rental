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

  const handleSubmit = async (values, { setSubmitting }) => {
    // Establecer el valor de isSubmitting en true para deshabilitar el botón de envío y los campos del formulario.
    setSubmitting(true);
  
    // Enviar los datos al servidor.
    const formData = new FormData(document.getElementById('formLogin'))
    try {
      const response = await fetch('https://monet.cat:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/*'
        },
        body: formData
      });
  
      // Si la respuesta del servidor es exitosa, redirigir al usuario a la página de éxito y establecer isSubmitting en false.
      if (response.ok) {
        navigate('/datos');
        setSubmitting(false);
      } else {
        // Si la respuesta del servidor no es exitosa, manejar el error y establecer isSubmitting en false.
        const error = await response.json();
        console.log(error);
        setSubmitting(false);
      }
    } catch (error) {
      // Si se produce un error al enviar los datos al servidor, manejar el error y establecer isSubmitting en false.
      console.error(error);
      setSubmitting(false);
    }
  };
  

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <Container >
            
              <Container style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} className='p-4 w-50'>
                <Button className='mb-5' style={{ backgroundColor: 'transaparent' }} onClick={handleGoBack}>
                  <FontAwesomeIcon icon={faLeftLong} />
                </Button> 
                <div style={{ textAlign: 'center' }}>
                  <img src={logo} alt="logo" style={{ width: '10%' }} />
                </div>
            
                <h4 className='fw-bold mb-4'>{t("login.tran1")}</h4>
                <Formik 
                  initialValues={{
                    nombre: '',
                    correo: '',
                    contra: ''
                  }}
                  validate={(valores) => {
                    let errores = {};

                    // Validación nombre
                    if(!valores.nombre){
                      errores.nombre = 'Por favor ingrese un nombre'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                      errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }

                    // Validación correo
                    if(!valores.correo){
                      errores.correo = 'Por favor ingrese un correo'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                      errores.correo = 'El nombre solo puede contener letras, números, puntos, guiones y guión bajo.'
                    }

                    return errores;
                  }}
                  onSubmit={handleSubmit}
                  >
                  {(isSubmitting, errores) => (
                    <Form id='formLogin'>
                      <Form.Group controlId="formBasicEmail" className='mb-4'>
                          
                          <Field name="correo">
                            {({ field }) => (
                              <Form.Control type="text" name='email' placeholder={t("login.tran2")} { ...field }/>
                            )}
                          </Field>
                          <ErrorMessage name="correo" component="div" className="text-danger" />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword" className='mb-4'>
                          <Form.Control type="password" name='password_hash' placeholder={t("login.tran3")} />
                      </Form.Group>

                      <Link to={'/register'} style={{ color: '#80ACE0' }}>{t("login.tran4")}</Link>
                      <Button type="submit" disabled={!isSubmitting} style={{ backgroundColor: '#305090', color: '#DEEDFF', width: '100%' }} className='mt-3'>
                        {isSubmitting ? t("login.tran5") : t("login.tran6")}
                      </Button>
                    </Form>
                  )}
                </Formik>
                
              </Container>

              <Routes>
                <Route path="/datos" element={<Datos />} />
              </Routes>
          </Container>
    </div>
    
  );
}

