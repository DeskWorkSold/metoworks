import React from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";

export const MainFreelanceSheduled = () => {
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
              <h2 className="text-3xl robot">Scheduled</h2>
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
                    {/* <p
                      className="py-2"
                      style={{
                        float: "right",
                        color: "#7A7979",
                        fontSize: "20px",
                        display: "flex",
                      }}
                    >
                      <BsBookmark /> Bookmark
                    </p> */}
                    <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                      Gia (PVT) LTD
                    </h2>
                    <p style={{ color: "#7A7979" }} className="text-lg">
                      Doctor for Child
                    </p>
                  </Col>
                  <Col lg="5" className="webkit-right">
                    <Button
                      className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                      style={{ background: "#6A489C", border: "none" }}
                    >
                      Reschedule
                    </Button>
                    <Button
                      className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      Confirm
                    </Button>
                    <Button
                      //   onClick={handleShow}
                      className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                      style={{ background: "#C1272D", border: "none" }}
                    >
                      Decline
                    </Button>
                  </Col>
                </Row>
                <Row className="align-items-center block-for-res">
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">
                        Interview Date & Time
                      </h2>
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        2023-01-20 / 15:51
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Interview Type</h2>
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        In Person
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Notes</h2>
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        Note goes here
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Location</h2>
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        Central and Western
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
                        CONFIRM
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
                    {/* <p
                      className="py-2"
                      style={{
                        float: "right",
                        color: "#7A7979",
                        fontSize: "20px",
                        display: "flex",
                      }}
                    >
                      <BsBookmark /> Bookmark
                    </p> */}
                    <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                      AJ (PVT) LTD
                    </h2>
                    <p style={{ color: "#7A7979" }} className="text-lg">
                      Developer
                    </p>
                  </Col>
                  <Col lg="5" className="webkit-right">
                    <Button
                      className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                      style={{ background: "#6A489C", border: "none" }}
                    >
                      Reschedule
                    </Button>
                    <Button
                      className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      Confirm
                    </Button>
                    <Button
                      //   onClick={handleShow}
                      className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                      style={{ background: "#C1272D", border: "none" }}
                    >
                      Decline
                    </Button>
                  </Col>
                </Row>
                <Row className="align-items-center block-for-res">
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">
                        Interview Date & Time
                      </h2>
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        2023-01-20 / 15:51
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Interview Type</h2>
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        In Person
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Notes</h2>
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        Note goes here
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Location</h2>
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        Central and Western
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
                        Reschedule
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
