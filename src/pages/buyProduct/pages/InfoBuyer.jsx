import { Container, Row, Col, Form, Button, ProgressBar } from 'react-bootstrap';
import { useState } from 'react';

export function InfoBuyer({ nextStep }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = event => {
    


    // Antes de nextStep---> reserva realizada   IR A PAGO POR MOLLIE
    
    window.open('https://www.mollie.com/checkout/select-method/XEbNV6xASP')
      nextStep();
    
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

              <Form.Group controlId="formBasicTelefono" className='mb-4'>
                  <Form.Control type="number" placeholder="Teléfono" value={telefono} onChange={e => setTelefono(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicComentario" className='mb-4'>
                  <Form.Control as="textarea" rows={3} placeholder="Comentario" value={comentario} onChange={e => setComentario(e.target.value)} />
              </Form.Group>

              <Button type="submit" style={{ backgroundColor: '#305090', color: '#DEEDFF', width: '100%' }}>
                  Ir a pagar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }