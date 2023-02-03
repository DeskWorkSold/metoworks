import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const MembershipPlan = () => {
  return (
    <Container fluid style={{ background: "#6A489C" }} className="py-5">
      <Container>
        <Row>
          <Col>
            <div className="text-left">
              <h1 className="text-5xl text-white robot"> Membership Plans</h1>
              <div>
                <p className="text-lg p-2" style={{ color: "#fff" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam
                </p>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
};
