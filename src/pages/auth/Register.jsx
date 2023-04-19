import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import logo from './../../pages/img/LogoLeeuwarden.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

import { useNavigate  } from "react-router-dom";

export function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Usuario:', nombre);
    console.log('Email:', email);
    console.log('Contraseña:', password);
    // Aquí puedes enviar los datos del formulario a un servidor o hacer otras operaciones
  }

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <Container>
            <Button className='mb-5' style={{ backgroundColor: 'transaparent' }}>
              <FontAwesomeIcon icon={faLeftLong} onClick={handleGoBack} />
            </Button>
          <Container style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} className='p-4'>
            <div style={{ textAlign: 'center' }}>
              <img src={logo} alt="logo" style={{ width: '10%' }} />
            </div>
            
            <h4 className='fw-bold mb-4'>Registro</h4>
              <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicNombre" className='mb-4'>
                    <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className='mb-4'>
                    <Form.Control type="text" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className='mb-4'>
                    <Form.Control type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button type="submit" style={{ backgroundColor: '#305090', color: '#DEEDFF', width: '100%' }}>
                    Continuar
                </Button>
              </Form>
          </Container>
      </Container>
    </div>
  );
}

