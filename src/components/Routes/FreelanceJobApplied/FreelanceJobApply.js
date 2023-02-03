import React from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import { BsArrowBarDown, BsBookmark } from "react-icons/bs";

export const FreelanceJobApply = () => {
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
              <h2 className="text-3xl robot">Job Applied</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-2" />
      <Container>
        <Row>
          <Col lg="12">
            <div className="p-3">
              <div className="boxshad">
                <Row>
                  <Col lg="7">
                    <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                      Doctor for Child
                    </h2>
                    <p style={{ color: "#7A7979" }} className="text-l">
                      Full Time
                    </p>
                  </Col>
                  <Col lg="5" className="webkit-right">
                    <p style={{ color: "#7A7979" }} className="text-lg">
                      Posted Date : Jan 2023 &nbsp;&nbsp; &nbsp;&nbsp;
                      <span>Expiry Date : Feb 2023</span>
                    </p>
                  </Col>
                </Row>
                <Row className="align-items-center block-for-res">
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Company Name</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        Gia (PVT) LTD
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Job Industry</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        Hospital
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Salary Range</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        HKD 3 - HKD 6
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Location</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        Central and Western
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">
                        No. of candidates
                      </h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        4
                      </h2>
                    </div>
                  </Col>
                </Row>
                <hr className="my-2" />
                <Row className="align-items-center">
                  <Col lg="12">
                    <div
                      className="py-2"
                      style={{
                        float: "right",
                        color: "#7A7979",
                        fontSize: "25px",
                        display: "flex",
                      }}
                    >
                      <Button
                        className="rounded-full px-3 py-3 w-48 mx-2"
                        style={{
                          background: "none",
                          border: "1px solid #39BEC1",
                          color: "#39BEC1",
                        }}
                      >
                        completed
                      </Button>
                    </div>
                    {/* <Button
                      className="text-white border-rounded px-3"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      View Profile
                    </Button> */}
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <div className="p-3">
              <div className="boxshad">
                <Row>
                  <Col lg="7">
                    <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                      Web Developer
                    </h2>
                    <p style={{ color: "#7A7979" }} className="text-l">
                      Full Time
                    </p>
                  </Col>
                  <Col lg="5" className="webkit-right">
                    <p style={{ color: "#7A7979" }} className="text-lg">
                      Posted Date : Jan 2023 &nbsp;&nbsp; &nbsp;&nbsp;
                      <span>Expiry Date : Feb 2023</span>
                    </p>
                  </Col>
                </Row>
                <Row className="align-items-center block-for-res">
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Company Name</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        Gia (PVT) LTD
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Job Industry</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        IT
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Salary Range</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        HKD 3 - HKD 6
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Location</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        Central and Western
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">
                        No. of candidates
                      </h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        4
                      </h2>
                    </div>
                  </Col>
                </Row>
                <hr className="my-2" />
                <Row className="align-items-center">
                  <Col lg="12">
                    <div
                      className="py-2"
                      style={{
                        float: "right",
                        color: "#7A7979",
                        fontSize: "25px",
                        display: "flex",
                      }}
                    >
                      <Button
                        className="rounded-full px-3 py-3 w-48 mx-2"
                        style={{
                          background: "none",
                          border: "1px solid #6A489C",
                          color: "#6A489C",
                        }}
                      >
                        PENDING
                      </Button>
                    </div>
                    {/* <Button
                      className="text-white border-rounded px-3"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      View Profile
                    </Button> */}
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <div className="p-3">
              <div className="boxshad">
                <Row>
                  <Col lg="7">
                    <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                      Accountant
                    </h2>
                    <p style={{ color: "#7A7979" }} className="text-l">
                      Full Time
                    </p>
                  </Col>
                  <Col lg="5" className="webkit-right">
                    <p style={{ color: "#7A7979" }} className="text-lg">
                      Posted Date : Jan 2023 &nbsp;&nbsp; &nbsp;&nbsp;
                      <span>Expiry Date : Feb 2023</span>
                    </p>
                  </Col>
                </Row>
                <Row className="align-items-center block-for-res">
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Company Name</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        Gia (PVT) LTD
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Job Industry</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        Bank
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Salary Range</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        HKD 3 - HKD 6
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Location</h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        Central and Western
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">
                        No. of candidates
                      </h2>
                      <h2 className="text-l" style={{ color: "#7A7979" }}>
                        4
                      </h2>
                    </div>
                  </Col>
                </Row>
                <hr className="my-2" />
                <Row className="align-items-center">
                  <Col lg="12">
                    <div
                      className="py-2"
                      style={{
                        float: "right",
                        color: "#7A7979",
                        fontSize: "25px",
                        display: "flex",
                      }}
                    >
                      <Button
                        className="rounded-full px-3 py-3 w-48 mx-2"
                        style={{
                          background: "none",
                          border: "1px solid #C1272D",
                          color: "#C1272D",
                        }}
                      >
                        rejected
                      </Button>
                    </div>
                    {/* <Button
                      className="text-white border-rounded px-3"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      View Profile
                    </Button> */}
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};