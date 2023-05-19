import { Container, Row, Col, Image } from "react-bootstrap";
import homeStyle from './Home.module.css';
import { useTranslation } from "react-i18next";
import background from './img/fondo.jpg';

export function Home() {
  const { t } = useTranslation("global");
  
  return (
    <div className={homeStyle.bg}>
      <Container className="d-flex align-items-center py-5" style={{ minHeight: '87.8vh' }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <h1 className="text-light fw-bold" style={{ fontSize: '4.25rem', fontFamily: 'Montserrat' }}>{t("home.tran1")}</h1>
            <h4 className="text-light" style={{ fontFamily: 'Montserrat' }}>{t("home.tran2")}</h4>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}