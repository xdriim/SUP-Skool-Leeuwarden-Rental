import { Container, Row, Col, Image, Button } from "react-bootstrap";
import error from './../pages/img/404_5.png';
import { useNavigate } from "react-router-dom";

// Translation
import { useTranslation } from 'react-i18next';

export function Error() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();
  const volverInicio = () => {
    navigate('/');
  }
  {/* Tener en cuenta los códigos de error de la API */}
    return (
      <div className="m-0 vh-100 row justify-content-center align-items-center">
        <Container className="text-center mb-5 py-5">
          <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Image src={error} style={{ width: '60%' }}></Image>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <p style={{ fontFamily: 'Montserrat' }}>{t("error.tran1")}</p>
                <Button onClick={volverInicio} style={{ backgroundColor: '#305090', color: '#DEEDFF', fontFamily: 'Montserrat' }}>  {t("error.tran2")}</Button>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }