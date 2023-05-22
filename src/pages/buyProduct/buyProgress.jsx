import React, { useState } from "react";

import {InfoBuyer} from "./pages/InfoBuyer";
import {Cart} from "./../Cart";
import {Bought} from "./pages/Bought";

import {MultiStepProgressBar} from "./../../components/MultiStepProgressBar";
import { Row, Col, Container } from "react-bootstrap";

export const UserForm = () => {
  //For manageing state of multi steps Form
  const [page, setPage] = useState(0);

  //proceed to next step
  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  const PageDisplay = () => {
    if (page === 0)
      return <Cart nextStep={nextStep} />;
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
       
      </Row>
    </Container>
  );
};
