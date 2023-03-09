import { Container, Row, Col, Button } from 'react-bootstrap';

export function Login() {

    return (
      <div>
        <Container>
            <Row className='mb-5'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                    <h1>Please, select an option from below to continue</h1>
                </Col>
            </Row>
            
        </Container>
    </div>
    );
  }