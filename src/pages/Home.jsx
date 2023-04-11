import { ProductGrid } from "./../components/ProductGrid";
import { Container } from "react-bootstrap";
import homeStyle from './Home.module.css';

export function Home() {
  return (
    <div className={homeStyle.bg}>
      <Container className="d-flex align-items-center justify-content-center text-center" style={{ height: '90vh' }}>
        <div>
          <h1 className="text-light fw-bold">Escuela de SUP Leeuwarden</h1>
          <h4 className="text-light">Bienvenido al sitio web de Stadsstrand Leeuwarden. En esta página web ofrecemos diferentes opciones de alquiler.</h4>
        </div>
      </Container>
    </div>
    
  );
}