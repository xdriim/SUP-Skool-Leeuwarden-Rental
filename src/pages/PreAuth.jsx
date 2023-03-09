import { Container, Row, Col, Button } from 'react-bootstrap';

export function PreAuth() {

    return (
      <div>
        <Container>
            <Row className='mb-5'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                    <h1>Please, select an option from below to continue</h1>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <Button style={{ background: '#DEEDFF', color: '#305090', width: '15rem', marginBottom: '20px' }}>
                            Log in
                        </Button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                <Button style={{ background: '#DEEDFF', color: '#305090', width: '15rem' }}>
                            Continue as guest
                        </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                    <h3>Still don't have an account? <span style={{ fontWeight: 'bold' }}>Create one!</span></h3>
                </Col>
            </Row>
        </Container>
    </div>
    );
  }