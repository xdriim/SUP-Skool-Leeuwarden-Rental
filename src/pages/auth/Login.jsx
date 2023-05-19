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

  const handleSubmit = async (values, { setSubmitting }, event) => {
    // Establecer el valor de isSubmitting en true para deshabilitar el botón de envío y los campos del formulario.
    
    
  
    // Enviar los datos al servidor.
    const formData = new FormData(document.getElementById('formLogin'));
    console.log("Hola");

   
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
            
                <h4 className='fw-bold mb-4' style={{ fontFamily: 'Montserrat' }}>{t("login.tran1")}</h4>
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
                  {(formikProps) => (
                    <Form id='formLogin' onSubmit={formikProps.handleSubmit}>
                      <Form.Group controlId="formBasicEmail" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                          <Field name="correo">
                            {({ field }) => (
                              <Form.Control type="text" name='email' placeholder={t("login.tran2")} { ...field }/>
                            )}
                          </Field>
                          <ErrorMessage name="correo" component="div" className="text-danger" />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                          <Form.Control type="password" name='password_hash' placeholder={t("login.tran3")} />
                      </Form.Group>

                      <Link to={'/register'} style={{ color: '#80ACE0', fontFamily: 'Montserrat' }}>{t("login.tran4")}</Link>
                      <Button type="submit" disabled={formikProps.isSubmitting} style={{ backgroundColor: '#305090', color: '#DEEDFF', width: '100%', fontFamily: 'Montserrat' }} className='mt-3'>
                        {formikProps.isSubmitting ? t("login.tran6") : t("login.tran5")}
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

