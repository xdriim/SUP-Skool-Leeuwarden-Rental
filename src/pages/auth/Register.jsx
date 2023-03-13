import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export function Register() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Usuario:', usuario);
    console.log('Email:', email);
    console.log('Contraseña:', password);
    // Aquí puedes enviar los datos del formulario a un servidor o hacer otras operaciones
  }

  return (
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="usuario">
        <Form.Label className='mt-3'>Usuario:</Form.Label>
        <Form.Control type="text" value={usuario} onChange={(event) => setUsuario(event.target.value)} />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label className='mt-3'>Email:</Form.Label>
        <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label className='mt-3'>Contraseña:</Form.Label>
        <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>
      <Button className='mt-3' variant="primary" type="submit">Registrarse</Button>
    </Form>
    </Container>
  );
}

