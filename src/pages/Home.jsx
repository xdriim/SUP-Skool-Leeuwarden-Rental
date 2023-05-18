import { Container } from "react-bootstrap";
import homeStyle from './Home.module.css';
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation("global");
  
  return (
    <div className={homeStyle.bg}>
      <Container className="d-flex align-items-center justify-content-center text-center" style={{ height: '90vh' }}>
        <div>
          <h1 className="text-light fw-bold">{t("home.tran1")}</h1>
          <h4 className="text-light">{t("home.tran2")}</h4>
        </div>
      </Container>
    </div>
  );
}