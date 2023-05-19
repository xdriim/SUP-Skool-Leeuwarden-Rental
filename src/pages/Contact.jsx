import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Mapa } from './../components/Mapa';
import { useState } from 'react';

// Translation
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation("global");

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
          <Col className='me-5'>
            <Row>
              <Col>
                <div className='mb-5 p-5' style={{ backgroundColor: '#DEEDFF', width: '100%', height: '300px' }}>
                  <p style={{ fontFamily: 'Montserrat' }}>{t("contact.tran1")}</p>
                  <p style={{ fontFamily: 'Montserrat' }}>{t("contact.tran2")}</p>
                  <p style={{ fontFamily: 'Montserrat' }}>{t("contact.tran3")}</p>
                  <p style={{ fontFamily: 'Montserrat' }}>{t("contact.tran4")}</p>
                  <p style={{ fontFamily: 'Montserrat' }}>{t("contact.tran5")}</p>
                  <p style={{ fontFamily: 'Montserrat' }}>{t("contact.tran6")}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div style={{width: "100%", height: '300px', border: '3px solid green'}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.165808339287!2d5.799561499999999!3d53.1969425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c8fe852048a47d%3A0x79daaa0e14e407e2!2sStadsstrand%20Leeuwarden!5e0!3m2!1sca!2ses!4v1683034719592!5m2!1sca!2ses"
                 width="100%" height="100%" loading="lazy" title='mapa'></iframe>
                </div>
              </Col>
            </Row>
          </Col>
          <Col style={{ border: '1px solid #80ACE0', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} className='p-4'>
          <h4 className='text-center fw-bold mb-4' style={{ fontFamily: 'Montserrat' }}>{t("contact.tran7")}</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicNombre" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                  <Form.Control type="text" placeholder={t("contact.tran8")} value={nombre} onChange={e => setNombre(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicCorreo" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                  <Form.Control type="email" placeholder={t("contact.tran9")} value={correo} onChange={e => setCorreo(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicNumero" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                  <Form.Control type="number" placeholder={t("contact.tran10")} value={numero} onChange={e => setNumero(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicAsunto" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                  <Form.Control type="text" placeholder={t("contact.tran11")} value={asunto} onChange={e => setAsunto(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicMensaje" className='mb-4' style={{ fontFamily: 'Montserrat' }}>
                  <Form.Control as="textarea" rows={3} placeholder={t("contact.tran12")} value={mensaje} onChange={e => setMensaje(e.target.value)} />
              </Form.Group>

              <Button type="submit" style={{ backgroundColor: '#305090', color: '#DEEDFF', width: '100%', fontFamily: 'Montserrat' }}>
                  {t("contact.tran13")}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }