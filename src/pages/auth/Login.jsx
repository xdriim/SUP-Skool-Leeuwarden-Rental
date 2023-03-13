import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Aquí puedes agregar tu lógica para enviar la información de inicio de sesión al servidor
    // LocalStorage.setItem('user', JSON.parse())
    
  };

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else. Only with Juan Illescas
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-4'>
            Submit
        </Button>
        </Form>
    </Container>
  );
}

