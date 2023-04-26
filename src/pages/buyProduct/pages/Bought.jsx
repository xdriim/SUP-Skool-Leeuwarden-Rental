import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck }  from "@fortawesome/free-solid-svg-icons";

export function Bought() {
  const { t } = useTranslation("global");
  
  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center text-center" style={{ height: '90vh' }}>
        <div>
          <h1 className="fw-bold">Reserva realizada exitosamente
          <FontAwesomeIcon icon={faCheck} style={{ color: '#1DFA75' }}></FontAwesomeIcon>
          </h1>
          <h4>Revisa tu correo electrónico para ver los detalles</h4>
        </div>
        <ToastContainer></ToastContainer>
      </Container>
    </div>
    
  );
}