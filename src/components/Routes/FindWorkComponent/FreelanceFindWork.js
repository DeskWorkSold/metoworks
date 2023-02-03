import React, { useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { A11y, Navigation } from "swiper";
import Modal from "react-bootstrap/Modal";

import { Container, Col, Row, Button, Form, Image } from "react-bootstrap";

import { BsArrowBarDown, BsBookmark } from "react-icons/bs";

export const FreelanceFindWork = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container>
        <Row>
          <Col lg="12">
            <Col lg="12" className="webkit">
              <Row>
                <Col>
                  <div className="About_main_images_search">
                    <input
                      placeholder="Enter Profession, Company Name or Keywords.
"
                    ></input>

                    <Button
                      className="text-white border-rounded"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      Search
                    </Button>
                    <Button
                      className="text-white border-rounded mx-2"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      Reset
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>

        <Row>
          <Col lg="12" className="webkit">
            <div className="p-2">
              <h2 className="text-2xl">Advance Search</h2>
              <BsArrowBarDown
                className="text-2xl"
                style={{ color: "#39BEC1" }}
              />
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
                      Doctor for Child
                    </h2>
                    <p style={{ color: "#7A7979" }} className="text-lg">
                      Full Time
                    </p>
                  </Col>
                  <Col lg="5" className="webkit-right">
                    <Button
                      className="text-white border-rounded px-3 py-3 w-48 mx-2 mt-2"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      View Profile
                    </Button>
                    <Button
                      onClick={handleShow}
                      className="text-white border-rounded px-3 py-3 w-48 mx-2 mt-2"
                      style={{ background: "#C1C1C1", border: "none" }}
                    >
                      view more details
                    </Button>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title style={{ color: "black" }}>
                          Post A Job
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Row>
                          <div className="p-3">
                            <ul style={{ listStyle: "none" }}>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">Title:</span>{" "}
                                  Doctor for Child{" "}
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    Industry:
                                  </span>{" "}
                                  Hospitality / Travel / Airlines / Clubhous
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    Job Function :{" "}
                                  </span>{" "}
                                  General Management
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    Job Location :
                                  </span>{" "}
                                  Central and Western
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    Description :
                                  </span>{" "}
                                  simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the
                                  1500s, when avn unknown printer took a galley
                                  of type and scramble.
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    Requirements :
                                  </span>{" "}
                                  simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the
                                  1500s, when avn unknown printer took a galley
                                  of type and scramble.
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    Profession :
                                  </span>{" "}
                                  Doctor
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    Education Level :
                                  </span>{" "}
                                  MASTER DEGREE
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    Project Timeline :
                                  </span>{" "}
                                  2023-01-19 - 2023-02-03
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    Mode of Work:
                                  </span>{" "}
                                  Office
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    No. of Openings :
                                  </span>
                                  04
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    Salary Range:
                                  </span>{" "}
                                  1000-5000
                                </p>
                              </li>
                              <li>
                                <p className="text-lg">
                                  <span className="font-semibold">
                                    Salary Type :
                                  </span>
                                  1000-5000
                                </p>
                              </li>
                            </ul>
                          </div>
                        </Row>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleClose}
                          style={{ background: "none", color: "#C1C1C1" }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="primary"
                          style={{ background: "none", color: "#39BEC1" }}
                        >
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    {/* <Button
                      className="text-white border-rounded py-2 px-3 w-48"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      apply
                    </Button>
                    <Button
                      className="text-white border-rounded py-2 px-3 w-48 mx-2"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      view more details
                    </Button> */}
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
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        Gia (PVT) LTD
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Job Industry</h2>
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        Hospital
                      </h2>
                    </div>
                  </Col>
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Salary Range</h2>
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        HKD 3 - HKD 6
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
                  <Col>
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">
                        No. of candidates
                      </h2>
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        4
                      </h2>
                    </div>
                  </Col>
                </Row>
                <hr className="my-2" />
                <Row className="align-items-center">
                  <Col lg="10">
                    <div className="p3 py-3">
                      <h2 className="text-lg font-semibold">Job Description</h2>
                      <h2 className="text-l py-3" style={{ color: "#7A7979" }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy
                      </h2>
                    </div>
                  </Col>

                  <Col lg="2">
                    <p
                      className="py-2"
                      style={{
                        float: "right",
                        color: "#7A7979",
                        fontSize: "25px",
                        display: "flex",
                      }}
                    >
                      <BsBookmark />
                    </p>
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
