import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Usuario:', nombre);
    console.log('Email:', email);
    console.log('Contraseña:', password);
    // Aquí puedes enviar los datos del formulario a un servidor o hacer otras operaciones
  }

  return (
    <div>
      {/* icono fontAwesome volver atrás */}
        <Container style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} className='p-4'>
          <img src="./../../images/SUP.png" alt="logo" />
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
    </div>
  );
}

