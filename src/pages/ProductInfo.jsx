import { Container, Row, Col, Button } from 'react-bootstrap';

export function ProductInfo() {
    return (
      <div>
        {/* Recogemos id para hacer FIND de este producto en la base de datos.
            GET en route para esta url
        */}

        <Container>
            <Row>
                <Col>
                    <h1>STRIP CARD</h1>
                    <div>
                        <img src="" alt="img-tickets" />
                        <p>SUP <span>x10</span></p>
                    </div>
                    <div>
                        <Button>Book now</Button>
                    </div>
                </Col>
                <Col>
                    <p>€ 125'00</p>
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p>Conditions:</p>
                        <ul>
                            <li>This strip...</li>
                            <li>You rent...</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
  }