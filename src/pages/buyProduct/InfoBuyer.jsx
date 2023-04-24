import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export function Contact() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [numero, setNumero] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    
    // Aquí puedes agregar tu lógica para enviar la información de inicio de sesión al servidor
    // LocalStorage.setItem('user', JSON.parse())
    
  };
    return (
      <Container className='my-5'>
        <Row>
          <Col style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} className='p-4'>
          <h4 className='text-center fw-bold mb-4'>Información comprador</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicNombre" className='mb-4'>
                  <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicCorreo" className='mb-4'>
                  <Form.Control type="email" placeholder="Correo" value={correo} onChange={e => setCorreo(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicNumero" className='mb-4'>
                  <Form.Control type="number" placeholder="Numero" value={numero} onChange={e => setNumero(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicAsunto" className='mb-4'>
                  <Form.Control type="text" placeholder="Asunto" value={asunto} onChange={e => setAsunto(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicMensaje" className='mb-4'>
                  <Form.Control as="textarea" rows={3} placeholder="Mensaje" value={mensaje} onChange={e => setMensaje(e.target.value)} />
              </Form.Group>

              <Button type="submit" style={{ backgroundColor: '#305090', color: '#DEEDFF', width: '100%' }}>
                  Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }