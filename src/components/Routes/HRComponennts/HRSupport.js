import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

export const HRSupport = () => {
  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container>
        <div className="bg_white text-left">
          <h1 className="text-6xl text-black robot">HR Support Functions</h1>
          <div>
            <p className="text-2xl p-2" style={{ color: "#6A489C" }}>
              Nine types of HR support functions as follows
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <Row className="pb-5">
          <Col lg="4">
            <div
              className="p-3 hover:bg-white webkit hover:border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-1/4"
                    src={require("../../../assets/support1.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">Payroll</h2>

                <p className="text-lg px-4">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide consete
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 hover:bg-white webkit hover:border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-1/4"
                    src={require("../../../assets/support2.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">Training</h2>

                <p className="text-lg px-4">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide consete
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 hover:bg-white webkit hover:border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-1/4"
                    src={require("../../../assets/support3.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">Write JD</h2>

                <p className="text-lg px-4">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide consete
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="pb-5">
          <Col lg="4">
            <div
              className="p-3 hover:bg-white webkit hover:border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-1/4"
                    src={require("../../../assets/support4.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">Write CV</h2>

                <p className="text-lg px-4">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide consete
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 hover:bg-white webkit hover:border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-1/4"
                    src={require("../../../assets/support5.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">
                  Tailor Made Project
                </h2>

                <p className="text-lg px-4">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide consete
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 hover:bg-white webkit hover:border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-1/4"
                    src={require("../../../assets/support6.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">
                  Interview Training
                </h2>

                <p className="text-lg px-4">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide consete
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="pb-5">
          <Col lg="4">
            <div
              className="p-3 hover:bg-white webkit hover:border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-1/4"
                    src={require("../../../assets/support7.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">HR Consultation</h2>

                <p className="text-lg px-4">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide consete
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 hover:bg-white webkit hover:border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-1/4"
                    src={require("../../../assets/support8.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">Team Building</h2>

                <p className="text-lg px-4">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide consete
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 hover:bg-white webkit hover:border"
              style={{
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-1/4"
                    src={require("../../../assets/support9.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">TBC</h2>

                <p className="text-lg px-4">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide consete
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
