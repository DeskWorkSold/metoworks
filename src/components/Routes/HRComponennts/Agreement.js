import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";

export const Agreement = () => {
  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container>
        <div className="text-center py-5">
          <h2 className="text-2xl" style={{ color: "#6A489C" }}>
            What we serve
          </h2>
          <h2 className="text-6xl robot"> Agreement Template</h2>
        </div>
        <Row className="pb-5">
          <Col lg="4">
            <div
              className="p-3 bg-white webkit"
              style={{
                borderRadius: "10px",
                border: "1px solid #313131",

                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-1/4"
                    src={require("../../../assets/agreement1.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">NDA</h2>
                <hr className="py-3" />

                <p className="text-lg text-left">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide conseteturea, nec ex virtute gubergr when avn
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 bg-white webkit"
              style={{
                borderRadius: "10px",
                border: "1px solid #313131",

                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-2/5"
                    src={require("../../../assets/agreement2.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">Employment</h2>
                <hr className="py-3" />

                <p className="text-lg text-left">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide conseteturea, nec ex virtute gubergr when avn
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div
              className="p-3 bg-white webkit"
              style={{
                borderRadius: "10px",
                border: "1px solid #313131",

                marginTop: "10px",
              }}
            >
              <div>
                <div>
                  <Image
                    className="w-1/4"
                    src={require("../../../assets/agreement3.png")}
                  />
                </div>
                <h2 className="text-3xl font-semibold pb-2">Contract</h2>
                <hr className="py-3" />

                <p className="text-lg text-left">
                  Lorem ipsum dolor sit amet, nec ei eligendi comprehensam, vim
                  inani splendide conseteturea, nec ex virtute gubergr when avn
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
