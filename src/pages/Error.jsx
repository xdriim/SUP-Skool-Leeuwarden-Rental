import { Container, Row, Col } from "react-bootstrap";

export function Error() {
  {/* Tener en cuenta los códigos de error de la API */}
    return (
      <Container className="text-center">
        <Row>
            <Col>
              <h1>ERROR 404</h1>
            </Col>
        </Row>
        <Row>
            <Col>
              <h2>Page not found</h2>
            </Col>
        </Row>
      </Container>
    );
  }