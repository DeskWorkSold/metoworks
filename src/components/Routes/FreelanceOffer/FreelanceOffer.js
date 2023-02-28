import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/axios.api";
import Loader from "../../../assets/loader.gif";
import Modal from "react-bootstrap/Modal";

export const FreelanceOffer = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({});
  const [modalShowAccept, setModalShowAccept] = useState(false);
  const [modalShowRevise, setModalShowRevise] = useState(false);
  const [modalShowReject, setModalShowReject] = useState(false);
  console.log(searchData);

  useEffect(() => {
    checkAuth();
    setTimeout(() => {
      initialFun();
    }, 1000);
  }, []);

  const checkAuth = async () => {
    const token = await localStorage.getItem("access-token");
    if (!token) {
      navigate("/login");
    }
  };

  const initialFun = () => {
    axios
      .get(`api/v1/interview/freelancer?stage=offer&size=100&from=0`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setAcceptFunc = (event) => {
    let eventVal = event.clicked == true;
    axios
      .post(`api/v1/interview/offer/confirm?id=${event.id}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        // console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        modalshowaccept(eventVal);
        // setIsProfileData(data)
        setTimeout(() => {
          initialFun();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const revisedFunc = (event) => {
    let eventVal = event.clicked == true;
    axios
      .post(`api/v1/interview/offer/freelancer/revise?id=${event.id}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        modalshowrevise(eventVal);
        setTimeout(() => {
          initialFun();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectFunc = (event) => {
    let eventVal = event.clicked == true;
    axios
      .post(`api/v1/interview/offer/reject?id=${event.id}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        // console.log(data, "daaaaaaaaataaaaaaaaaaaa");

        modalshowreject(eventVal);
        // setIsProfileData(data)
        setTimeout(() => {
          initialFun();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Revise
  function MyVerticallyCenteredRevise(props) {
    return (
      <div>
        <Modal
          id="modal"
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Revise</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Revised succesfully</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const modalshowrevise = (event) => {
    // console.log(event, "funtion event");
    if (event.clicked == true) {
      event.clicked = false;
      setModalShowRevise(false);
    } else {
      setModalShowRevise(true);
      event.clicked = true;
    }
  };

  // Accept
  function MyVerticallyCenteredAccept(props) {
    return (
      <div>
        <Modal
          id="modal"
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Accept</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Accept succesfully</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const modalshowaccept = (event) => {
    // console.log(event, "funtion event");
    if (event.clicked == true) {
      event.clicked = false;
      setModalShowAccept(false);
    } else {
      setModalShowAccept(true);
      event.clicked = true;
    }
  };

  // Reject
  function MyVerticallyCenteredReject(props) {
    return (
      <div>
        <Modal
          id="modal"
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Reject</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Reject Succesfully</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const modalshowreject = (event) => {
    // console.log(event, "funtion event");
    if (event.clicked == true) {
      event.clicked = false;
      setModalShowReject(false);
    } else {
      setModalShowReject(true);
      event.clicked = true;
    }
  };

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
              <h2 className="text-3xl robot">Offer</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-2" />
      {searchData.length > 0 && searchData ? (
        <Container>
          <Col lg="12">
            {searchData.length > 0 &&
              searchData.map((event, key) => {
                return (
                  <>
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

                            <h2
                              className="text-3xl"
                              style={{ color: "#39BEC1" }}
                            >
                              {event.recruiter.companyName}
                            </h2>
                            <p style={{ color: "#7A7979" }} className="text-lg">
                              {event.job.title}
                            </p>
                          </Col>
                          <Col lg="5" className="webkit-right">
                            <Button
                              className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                              style={{ background: "#6A489C", border: "none" }}
                              onClick={() => revisedFunc(event)}
                            >
                              Revise
                            </Button>
                            {event.clicked == true && (
                              <MyVerticallyCenteredRevise
                                show={modalShowRevise}
                                props={event}
                                onHide={() => modalshowrevise(event)}
                              />
                            )}
                            <Button
                              className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                              style={{ background: "#39BEC1", border: "none" }}
                              onClick={() => setAcceptFunc(event)}
                            >
                              Accept
                            </Button>
                            {event.clicked == true && (
                              <MyVerticallyCenteredAccept
                                show={modalShowAccept}
                                props={event}
                                onHide={() => modalshowaccept(event)}
                              />
                            )}
                            <Button
                              //   onClick={handleShow}
                              className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                              style={{ background: "#C1272D", border: "none" }}
                              onClick={() => rejectFunc(event)}
                            >
                              Reject
                            </Button>
                            {event.clicked == true && (
                              <MyVerticallyCenteredReject
                                show={modalShowReject}
                                props={event}
                                onHide={() => modalshowreject(event)}
                              />
                            )}
                          </Col>
                        </Row>

                        <Row className="align-items-center block-for-res">
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Interview Date & Time
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.schedule.substring(0, 10)} -{" "}
                                {event.schedule.substring(11, 16)}
                              </h2>
                            </div>
                          </Col>
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Interview Type
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.type}
                              </h2>
                            </div>
                          </Col>
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">Salary</h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.offer.salary}
                              </h2>
                            </div>
                          </Col>
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Location
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.location}
                              </h2>
                            </div>
                          </Col>
                        </Row>
                        {/* <hr className="my-2" /> */}
                        <Row className="align-items-center">
                          <Col lg="3">
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Joining Date
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.offer.joiningDate.substring(0, 10)}
                              </h2>
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">Notes</h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.notes}
                              </h2>
                            </div>
                          </Col>
                          <Col>
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
                                {event.internalState}
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
                  </>
                );
              })}
          </Col>
        </Container>
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <img src={Loader} style={{ width: 180, height: 180 }} />{" "}
        </div>
      )}
    </Container>
  );
};
