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

  const handleSubmit = async (values, { setSubmitting }) => {
    // Establecer el valor de isSubmitting en true para deshabilitar el botón de envío y los campos del formulario.
    setSubmitting(true);
  
    // Enviar los datos al servidor.
    try {
      const response = await fetch('https://monet.cat:8080/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
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
      <Container>
          <Container style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} className='p-4 w-50'>
            <Button className='mb-5' style={{ backgroundColor: 'transaparent' }} onClick={handleGoBack}>
              <FontAwesomeIcon icon={faLeftLong} />
            </Button>
            <div style={{ textAlign: 'center' }}>
              <img src={logo} alt="logo" style={{ width: '10%' }} />
            </div>
            
            <h4 className='fw-bold mb-4' style={{ fontFamily: 'Montserrat' }}>{t("register.tran1")}</h4>
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

                    // Validación apellido
                    if(!valores.apellido){
                      errores.apellido = 'Por favor ingrese su apellido'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
                      errores.apellido = 'El campo apellido solo puede contener letras y espacios'
                    }

                    // Validación correo
                    if(!valores.correo){
                      errores.correo = 'Por favor ingrese un correo'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                      errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guión bajo.'
                    }

                    // Validación contraseña
                    if(!valores.contra){
                      errores.contra = 'Por favor ingrese una contraseña'
                    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(valores.contra)){
                      errores.contra = 'La contraseña debe contener al menos 8 caracteres y al menos una letra minúscula, una letra mayúscula, un número y un carácter especial'
                    }

                    // Validación contraseña
                    if(!valores.contraConf){
                      errores.contraConf = 'Por favor ingrese una contraseña'
                    } else if(valores.contra !== valores.contraConf){
                      errores.contraConf = 'Las contraseñas no coinciden'
                    }

                    return errores;
                  }}
                  onSubmit={handleSubmit}
                  >
                    {(isSubmitting, errores) => (
              <Form>
                <Form.Group controlId="formBasicApellido" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                    <Field name="apellido">
                      {({ field }) => (
                        <Form.Control type="text" name='surname' placeholder={t("register.tran2")} { ...field }/>
                      )}
                    </Field>
                    <ErrorMessage name="apellido" component="div" className="text-danger" />
                </Form.Group>
                <Form.Group controlId="formBasicNombre" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                    <Field name="nombre">
                      {({ field }) => (
                        <Form.Control type="text" name='name' placeholder={t("register.tran3")} { ...field }/>
                      )}
                    </Field>
                    <ErrorMessage name="nombre" component="div" className="text-danger" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                <Field name="correo">
                      {({ field }) => (
                        <Form.Control type="text" name='email' placeholder={t("register.tran4")} { ...field }/>
                      )}
                    </Field>
                    <ErrorMessage name="correo" component="div" className="text-danger" />                </Form.Group>

                <Form.Group controlId="formBasicPassword" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                <Field name="contra">
                      {({ field }) => (
                        <Form.Control type="text" name='password_hash' placeholder={t("register.tran5")} { ...field }/>
                      )}
                    </Field>
                    <ErrorMessage name="contra" component="div" className="text-danger" />                </Form.Group>
                <Form.Group controlId="formBasicPasswordConfirm" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                <Field name="contraConf">
                      {({ field }) => (
                        <Form.Control type="text" name='password_confirm_hash' placeholder={t("register.tran6")} { ...field }/>
                      )}
                    </Field>
                    <ErrorMessage name="contraConf" component="div" className="text-danger" />                </Form.Group>
                <Button type="submit" disabled={!isSubmitting} style={{ backgroundColor: '#305090', color: '#DEEDFF', width: '100%', fontFamily: 'Montserrat' }} className='mt-3'>
                        {isSubmitting ? t("register.tran7") : t("login.tran8")}
                      </Button>
              </Form>
                    )}
            </Formik>
              
          </Container>
      </Container>
    </div>
  );
}

