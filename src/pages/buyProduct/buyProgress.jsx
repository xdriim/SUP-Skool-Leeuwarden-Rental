import React, { useState } from "react";

import {InfoBuyer} from "./pages/InfoBuyer";
import {Calendar} from "./pages/setDate";
import {Bought} from "./pages/Bought";

import {MultiStepProgressBar} from "./../../components/MultiStepProgressBar";
import { Row, Col, Container, Button } from "react-bootstrap";

export const UserForm = () => {
  //For manageing state of multi steps Form
  const [page, setPage] = useState(0);

  //proceed to next step
  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  const PageDisplay = () => {
    if (page === 0)
      return <Calendar nextStep={nextStep} />;
    else if(page === 1)
      return <InfoBuyer nextStep={nextStep} />;
    else 
      return <Bought nextStep={nextStep} />;
  };

  return (
    <Container className="my-5">
      <div style={{ margin: "auto", width: "75%" }}>
        <MultiStepProgressBar step={page} />
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          {PageDisplay()}
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-between">
          <Button style={{ visibility: page === 0 ? 'hidden' : 'visible' }}
          onClick={() => {
            if (page === 0) {
              console.log("First page");
            } else {
              setPage((currPage) => currPage - 1);
            }
          }}
          >
            Atrás
          </Button>
          <Button style={{ visibility: page === 2 ? 'hidden' : 'visible' }}
          onClick={() => {
            if (page === 2) {
              console.log("Last page");
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
          >
            Adelante
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
