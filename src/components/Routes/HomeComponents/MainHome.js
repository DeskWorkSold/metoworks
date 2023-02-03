import React from "react";
import { Image } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

export const MainHome = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg="6" className="p-5 pl-5">
          <h1 className="text-6xl font-semibold robot">
            <span style={{ color: "#39BEC1" }}>Find</span> & Hire
            <br />
            Expert
            <span style={{ color: "#6A489C" }}> Freelancer.</span>
          </h1>
          <p className="text-lg pt-2">
            Work with the best freelance talent for aroundthe world on Our
            secure
          </p>
          <Row className="mt-7 lll">
            <div className="d-flex">
              <Col lg="3">
                <h3>
                  <span style={{ color: "#6A489C", fontSize: "30px" }}>
                    2M+
                  </span>
                  <br />
                  <span className="text-center">
                    Million daily <br />
                    active users
                  </span>
                </h3>
              </Col>
              <Col lg="3">
                <h3>
                  <span style={{ color: "#6A489C", fontSize: "30px" }}>
                    5K+
                  </span>
                  <br />
                  <span className="text-center">
                    Open job <br />
                    positions
                  </span>
                </h3>
              </Col>
              <Col lg="3">
                <h3>
                  <span style={{ color: "#6A489C", fontSize: "30px" }}>
                    2M+
                  </span>
                  <br />
                  <span className="text-center">
                    Million daily <br />
                    Stories shared
                  </span>
                </h3>
              </Col>
            </div>
          </Row>
        </Col>
        <Col lg="6" className="webkit">
          <div className=" p-5">
            <Image src={require("../../../assets/bg-image.png")} />
          </div>
        </Col>
      </Row>

      {/* seconbannerstart */}
    </Container>
  );
};
