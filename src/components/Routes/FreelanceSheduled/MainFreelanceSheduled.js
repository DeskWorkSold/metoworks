import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Loader from "../../../assets/loader.gif";
import axios from "../../../utils/axios.api";

export const MainFreelanceSheduled = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowConfirm, setModalShowConfirm] = useState(false);
  const [modalShowDecline, setModalShowDecline] = useState(false);
  const [resheduleSuccess, setResheduleSuccess] = useState(false);
  const [resheduleError, setResheduleError] = useState(false);
  const [confirmSuccess, setConfirmSuccess] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [declineSuccess, setDeclineSuccess] = useState(false);
  const [declineError, setdeclineError] = useState(false);
  const [isToken, setIsToken] = useState("");
  const [searchData, setSearchData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    setIsToken(token);
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
      .get(`api/v1/interview/freelancer?stage=schedule&size=${80}&from=${0}`)
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

  const rejectSchedule = (id) => {
    axios
      .post(`api/v1/interview/schedule/reject?id=${id}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        // setSearchData(data);
        if (data) {
          initialFun();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // we have to send time with reschedule api

  const reSchedule = (id) => {
    axios
      .post(`api/v1/interview/schedule/freelancer/reschedule?id=${id}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        // setSearchData(data);
        if (data) {
          initialFun();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const confirmSchedule = (id) => {
    axios
      .post(`api/v1/interview/schedule/confirm?id=${id}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        // setSearchData(data);
        if (data) {
          initialFun();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [errors, setErrors] = useState();
  // reschedule
  function MyVerticallyCenteredReSchedule(props) {
    console.log(props, "props");
    const [arrangeInterview, setArrangeInterview] = useState({
      timestamp: "",
    });
    let values = Object.values(arrangeInterview);
    values = values.every((e, i) => e !== "");
    const reSchedule = () => {
      if (values) {
        axios
          .post(
            `api/v1/interview/schedule/freelancer/reschedule?id=${props.props.id}`,
            arrangeInterview
          )
          .then((res) => {
            if (res.data) {
              props.onHide();
            }
          })
          .catch((error) => {
            console.log(error, "error");
            props.onHide();
          });
      } else {
        let newErrors = {};
        if (!arrangeInterview.timestamp) {
          newErrors.timestamp = "Interview Date & Time is required";
        }
        setErrors(newErrors);
      }
    };
    return (
      <Modal
        {...props}
        // size="lg"
        // show={lgShow}
        // onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Arrange Interview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <Col lg="12">
              <fieldset>
                <label className="text-lg" style={{ width: "100%" }}>
                  Interview Date / Time
                </label>
                <input
                  style={{ width: "100%" }}
                  className="form-control"
                  name="date"
                  type={"datetime-local"}
                  onChange={(e) =>
                    setArrangeInterview({
                      ...arrangeInterview,
                      timestamp: e.target.value,
                    })
                  }
                />
                {errors && errors.timestamp && (
                  <p style={{ color: "red" }}>{errors.timestamp}</p>
                )}
              </fieldset>
            </Col>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ background: "none", color: "#C1C1C1" }}
            onClick={props.onHide}
          >
            Cancel
          </Button>

          <Button
            style={{ background: "none", color: "#39BEC1" }}
            onClick={() => reSchedule(props)}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const modalshow = (items) => {
    // console.log(items, "funtion items");
    if (items.clicked == true) {
      items.clicked = false;
      setModalShow(false);
    } else {
      setModalShow(true);
      items.clicked = true;
    }
  };

  // reschedule success
  function MyVerticallyCenteredResheduleSuccess(props) {
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
            <Modal.Title style={{ color: "black" }}>Seccess</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Succesfully Reschedule</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              // onClick={() => deleteProfileEducationData(props.props)}
              onClick={props.onHide}
            >
              ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  const reshedulesuccess = (items) => {
    // console.log(items, "funtion items");
    if (items.clicked == true) {
      items.clicked = false;
      setResheduleSuccess(false);
    } else {
      setResheduleSuccess(true);
      items.clicked = true;
    }
  };
  //reschedule Error
  function MyVerticallyCenteredResheduleError(props) {
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
            <Modal.Title style={{ color: "black" }}>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Error Reshedule</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              // onClick={() => deleteProfileEducationData(props.props)}
              onClick={props.onHide}
            >
              ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  const resheduleerror = (items) => {
    // console.log(items, "funtion items");
    if (items.clicked == true) {
      items.clicked = false;
      setResheduleError(false);
    } else {
      setResheduleError(true);
      items.clicked = true;
    }
  };

  // confirm
  function MyVerticallyCenteredConfirm(props) {
    // console.log(props, "proooooooooops");

    const ConfirmFunc = () => {
      axios
        .post(`api/v1/interview/schedule/confirm?id=${props.props.id}`)
        .then((res) => {
          if (res.data) {
            props.onHide();
          }
        })
        .catch((error) => {
          console.log(error, "error");
        });
    };

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
            <Modal.Title style={{ color: "black" }}>Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Are You Sure?</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              // onClick={() => deleteProfileEducationData(props.props)}
              onClick={() => ConfirmFunc()}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const modalshowconfirm = (items) => {
    // console.log(items, "funtion items");
    if (items.clicked == true) {
      items.clicked = false;
      setModalShowConfirm(false);
    } else {
      setModalShowConfirm(true);
      items.clicked = true;
    }
  };
  // Confirm success
  function MyVerticallyCenteredConfirmSuccess(props) {
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
            <Modal.Title style={{ color: "black" }}>Seccess</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Succesfully Confirm</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              // onClick={() => deleteProfileEducationData(props.props)}
              onClick={props.onHide}
            >
              ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  const confirmsuccess = (items) => {
    // console.log(items, "funtion items");
    if (items.clicked == true) {
      items.clicked = false;
      setConfirmSuccess(false);
    } else {
      setConfirmSuccess(true);
      items.clicked = true;
    }
  };
  //Confirm Error
  function MyVerticallyCenteredConfirmError(props) {
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
            <Modal.Title style={{ color: "black" }}>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Error Confirm</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              // onClick={() => deleteProfileEducationData(props.props)}
              onClick={props.onHide}
            >
              ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  const confirmerror = (items) => {
    // console.log(items, "funtion items");
    if (items.clicked == true) {
      items.clicked = false;
      setConfirmError(false);
    } else {
      setConfirmError(true);
      items.clicked = true;
    }
  };

  // decline
  function MyVerticallyCenteredDecline(props) {
    console.log(props, "proooooooooops");

    const DeclineFunc = () => {
      axios
        .post(`api/v1/interview/schedule/reject?id=${props.props.id}`)
        .then((res) => {
          if (res.data) {
            props.onHide();
          }
        })
        .catch((error) => {
          console.log(error, "error");
        });
    };

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
            <Modal.Title style={{ color: "black" }}>DECLINE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Are You Sure?</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              onClick={() => DeclineFunc(props.props)}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const modalshowdecline = (items) => {
    // console.log(items, "funtion items");
    if (items.clicked == true) {
      items.clicked = false;
      setModalShowDecline(false);
    } else {
      setModalShowDecline(true);
      items.clicked = true;
    }
  };

  // Decline success
  function MyVerticallyCenteredDeclineSuccess(props) {
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
            <Modal.Title style={{ color: "black" }}>Seccess</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Succesfully Decline</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              // onClick={() => deleteProfileEducationData(props.props)}
              onClick={props.onHide}
            >
              ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  const declinesuccess = (items) => {
    // console.log(items, "funtion items");
    if (items.clicked == true) {
      items.clicked = false;
      setDeclineSuccess(false);
    } else {
      setDeclineSuccess(true);
      items.clicked = true;
    }
  };
  //Decline Error
  function MyVerticallyCenteredDeclineError(props) {
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
            <Modal.Title style={{ color: "black" }}>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Error Decline</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              // onClick={() => deleteProfileEducationData(props.props)}
              onClick={props.onHide}
            >
              ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  const declineerror = (items) => {
    // console.log(items, "funtion items");
    if (items.clicked == true) {
      items.clicked = false;
      setdeclineError(false);
    } else {
      setdeclineError(true);
      items.clicked = true;
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
              <h2 className="text-3xl robot">Scheduled</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-2" />
      {searchData.length > 0 && searchData ? (
        <Container>
          {searchData.length > 0 &&
            searchData.map((items, keys) => {
              return (
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
                            <h2
                              className="text-3xl"
                              style={{ color: "#39BEC1" }}
                            >
                              {items?.recruiter?.companyName}
                            </h2>
                            <p style={{ color: "#7A7979" }} className="text-lg">
                              {items?.job?.title}
                            </p>
                          </Col>
                          <Col lg="5" className="webkit-right">
                            <Button
                              className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                              style={{ background: "#6A489C", border: "none" }}
                              // onClick={() => reSchedule(items.id)}
                              onClick={() => modalshow(items)}
                            >
                              Reschedule
                            </Button>
                            {items.clicked == true && (
                              <MyVerticallyCenteredReSchedule
                                show={modalShow}
                                props={items}
                                onHide={() => modalshow(items)}
                              />
                            )}
                            {/* {items.clicked == true && (
                              <MyVerticallyCenteredResheduleSuccess
                                show={resheduleSuccess}
                                props={items}
                                onHide={() => reshedulesuccess(items)}
                              />
                            )}
                            {items.clicked == true && (
                              <MyVerticallyCenteredResheduleError
                                show={resheduleError}
                                props={items}
                                onHide={() => resheduleerror(items)}
                              />
                            )} */}
                            <Button
                              className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                              style={{ background: "#39BEC1", border: "none" }}
                              // onClick={() => confirmSchedule(items.id)}
                              onClick={() => modalshowconfirm(items)}
                            >
                              Confirm
                            </Button>
                            {items.clicked == true && (
                              <MyVerticallyCenteredConfirm
                                show={modalShowConfirm}
                                props={items}
                                onHide={() => modalshowconfirm(items)}
                              />
                            )}
                            {/* {items.clicked == true && (
                              <MyVerticallyCenteredConfirmSuccess
                                show={confirmSuccess}
                                props={items}
                                onHide={() => confirmsuccess(items)}
                              />
                            )}
                            {items.clicked == true && (
                              <MyVerticallyCenteredConfirmError
                                show={confirmError}
                                props={items}
                                onHide={() => confirmerror(items)}
                              />
                            )} */}
                            <Button
                              //   onClick={handleShow}
                              className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                              style={{ background: "#C1272D", border: "none" }}
                              // onClick={() => rejectSchedule(items.id)}
                              onClick={() => modalshowdecline(items)}
                            >
                              Decline
                            </Button>
                            {items.clicked == true && (
                              <MyVerticallyCenteredDecline
                                show={modalShowDecline}
                                props={items}
                                onHide={() => modalshowdecline(items)}
                              />
                            )}
                            {/* {items.clicked == true && (
                              <MyVerticallyCenteredDeclineSuccess
                                show={declineSuccess}
                                props={items}
                                onHide={() => declinesuccess(items)}
                              />
                            )}
                            {items.clicked == true && (
                              <MyVerticallyCenteredDeclineError
                                show={declineError}
                                props={items}
                                onHide={() => declineerror(items)}
                              />
                            )} */}
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
                                {items?.schedule?.substring(0, 10)} -{" "}
                                {items?.schedule?.substring(11, 16)}
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
                                {items?.type}
                              </h2>
                            </div>
                          </Col>
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">Notes</h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {items?.notes}
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
                                {items?.location}
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
                                {items?.internalState}
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
              );
            })}
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
