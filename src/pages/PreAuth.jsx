import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

// Translation
import { useTranslation } from 'react-i18next';

export function PreAuth() {
    const { t } = useTranslation("global");

    const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  function goLogin(){
    navigate('/login');
  }

    return (
      <div className='my-5 py-5 d-flex align-items-center justify-content-center' style={{ minHeight: '70vh' }}>
        <Container>
            <Row className='mb-5'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                    <h1 style={{ fontFamily: 'Montserrat' }}>{t("preAuth.tran1")}</h1>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <Button style={{ background: '#DEEDFF', color: '#305090', width: '15rem', marginBottom: '20px', fontFamily: 'Montserrat' }} onClick={goLogin}>
                            {t("preAuth.tran2")}
                        </Button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                        <Button style={{ background: '#DEEDFF', color: '#305090', width: '15rem', fontFamily: 'Montserrat' }} onClick={handleGoBack}>
                            {t("preAuth.tran3")}
                        </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                    <h3 style={{ fontFamily: 'Montserrat' }}>{t("preAuth.tran4")}
                        <Link to={'/register'} style={{ color: '#305090' }}>
                            <span style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>{t("preAuth.tran5")}</span>
                        </Link>
                    </h3>
                </Col>
            </Row>
        </Container>
    </div>
    );
  }