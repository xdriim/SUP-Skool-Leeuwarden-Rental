import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../pages/img/LogoLeeuwarden.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import { Datos } from './profile/Datos';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Aquí puedes agregar tu lógica para enviar la información de inicio de sesión al servidor
    // LocalStorage.setItem('user', JSON.parse())
    navigate('/datos');
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
            
                <h4 className='fw-bold mb-4'>Inicio de sesión</h4>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail" className='mb-4'>
                        <Form.Control type="text" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className='mb-4'>
                        <Form.Control type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>

                    <Link to={'/register'} style={{ color: '#80ACE0' }}>Todavía no tienes cuenta?</Link>
                    <Button type="submit" style={{ backgroundColor: '#305090', color: '#DEEDFF', width: '100%' }}>
                        Continuar
                    </Button>
                    
                  </Form>
              </Container>

              <Routes>
                <Route path="/datos" element={<Datos />} />
              </Routes>
          </Container>
    </div>
    
  );
}

