import React from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
export const GenerateCv = () => {
  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container>
        <Row className="align-items-center">
          <Col lg="12">
            <div
              style={{
                // display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className="des-flex"
            >
              <h2 className="text-3xl robot">Generate CV</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-2" />
      <Container>
        <Row className="pb-5">
          <Col lg="4">
            <div
              className="p-3 bg-white webkit border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div className="py-10">
                <div>
                  <Image
                    className="w-1/4 py-3"
                    src={require("../../../assets/cvgenerate.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">IT Industry</h2>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 bg-white webkit border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div className="py-10">
                <div>
                  <Image
                    className="w-1/4 py-3"
                    src={require("../../../assets/cvgenerate.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">Marketing</h2>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 bg-white webkit border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div className="py-10">
                <div>
                  <Image
                    className="w-1/4 py-3"
                    src={require("../../../assets/cvgenerate.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">Education</h2>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="pb-5">
          <Col lg="4">
            <div
              className="p-3 bg-white webkit border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div className="py-10">
                <div>
                  <Image
                    className="w-1/4 py-3"
                    src={require("../../../assets/cvgenerate.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">E-Commerce</h2>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 bg-white webkit border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div className="py-10">
                <div>
                  <Image
                    className="w-1/4 py-3"
                    src={require("../../../assets/cvgenerate.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">Consult</h2>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 bg-white webkit border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div className="py-10">
                <div>
                  <Image
                    className="w-1/4 py-3"
                    src={require("../../../assets/cvgenerate.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">Hospitality</h2>
              </div>
            </div>
          </Col>
          <hr className="my-3" />
          <div className="webkit pt-3">
            <Button
              className="mx-2 px-3 font-semibold"
              style={{
                background: "none",
                fontSize: "20px",
                border: "none",
                color: "#39BEC1",
              }}
            >
              SEE MORE
            </Button>
          </div>
        </Row>
      </Container>
    </Container>
  );
};
