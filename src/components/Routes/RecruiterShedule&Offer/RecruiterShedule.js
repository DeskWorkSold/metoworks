import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Loader from "../../../assets/loader.gif";
import axios from "../../../utils/axios.api";

export const RecruiterShedule = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowConfirm, setModalShowConfirm] = useState(false);
  const [modalShowDecline, setModalShowDecline] = useState(false);
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
      .get(`api/v1/interview?stage=schedule&size=20&from=0`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        let isData = data.filter((e) => {
          return e.internalState == "RESCHEDULE";
        });
        setSearchData(isData);
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

  // reschedule
  function MyVerticallyCenteredReSchedule(props) {
    const [errors, setErrors] = useState();
    //   console.log(props, "props");
    const [isReschedule, setIsReschedule] = useState({
      location: "",
      notes: "",
      timestamp: "",
      type: "",
    });

    const reSchedule = () => {
      let values = Object.values(isReschedule);
      values = values.every((e, i) => e !== "");
      if (values) {
        axios
          .post(
            `api/v1/interview/schedule/recruiter/reschedule?id=${props.props.id}`,
            isReschedule
          )
          .then((res) => {
            if (res.data) {
              props.onHide();
            }
          })
          .catch((error) => {
            console.log(error, "error");
          });
      } else {
        let newErrors = {};
        if (!isReschedule.timestamp) {
          newErrors.timestamp = "Interview Date & Time is required";
        }
        if (!isReschedule.location) {
          newErrors.location = "Location is required";
        }
        if (!isReschedule.type) {
          newErrors.type = "Type is required";
        }
        if (!isReschedule.notes) {
          newErrors.notes = "notes is required";
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
            Reschedule Interview
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
                    setIsReschedule({
                      ...isReschedule,
                      timestamp: e.target.value,
                    })
                  }
                />
                {errors && errors.timestamp && (
                  <p style={{ color: "red" }}>{errors.timestamp}</p>
                )}
              </fieldset>
            </Col>
            <Col lg="12">
              <fieldset>
                <label className="text-lg" style={{ width: "100%" }}>
                  Interview Type
                </label>
                <Form.Select
                  aria-label="Default select example"
                  value={isReschedule.interviewType}
                  onChange={(e) =>
                    setIsReschedule({ ...isReschedule, type: e.target.value })
                  }
                >
                  <option hidden="">Select </option>
                  <option value="ONLINE">Online</option>
                  <option value="IN_PERSON">In Person</option>
                </Form.Select>
                {errors && errors.type && (
                  <p style={{ color: "red" }}>{errors.type}</p>
                )}
              </fieldset>
            </Col>
            <Col lg="12">
              <fieldset>
                <label className="text-lg" style={{ width: "100%" }}>
                  Interview Location / Link
                </label>
                <input
                  style={{ width: "100%" }}
                  className="form-control"
                  name="Link"
                  type={"text"}
                  onChange={(e) =>
                    setIsReschedule({
                      ...isReschedule,
                      location: e.target.value,
                    })
                  }
                />

                {errors && errors.location && (
                  <p style={{ color: "red" }}>{errors.location}</p>
                )}
              </fieldset>
            </Col>
            <Col lg="12">
              <fieldset>
                <label className="text-lg" style={{ width: "100%" }}>
                  Notes
                </label>
                <input
                  style={{ width: "100%" }}
                  className="form-control"
                  name="Notes"
                  type={"text"}
                  onChange={(e) =>
                    setIsReschedule({ ...isReschedule, notes: e.target.value })
                  }
                />

                {errors && errors.notes && (
                  <p style={{ color: "red" }}>{errors.notes}</p>
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

  // confirm
  function MyVerticallyCenteredConfirm(props) {
    // console.log(props, "proooooooooops");

    const [errors, setErrors] = useState();

    const [offerJob, setOfferJob] = useState({
      interviewId: props.props.id,
      jobTitle: "",
      joiningDate: "",
      msg: "",
      salary: "",
    });
    // console.log(offerJob, 'sdfds');
    const ConfirmFunc = () => {
      let values = Object.values(offerJob);
      values = values.every((e) => e !== "");
      if (values) {
        axios
          .post(`api/v1/interview/offer`, offerJob)
          .then((res) => {
            if (res.data) {
              props.onHide();
            }
          })
          .catch((error) => {
            console.log(error, "error");
          });
      } else {
        let newErrors = {};
        if (!offerJob.jobTitle) {
          newErrors.jobTitle = "Interview Date & Time is required";
        }
        if (!offerJob.joiningDate) {
          newErrors.joiningDate = "Location is required";
        }
        if (!offerJob.msg) {
          newErrors.msg = "Type is required";
        }
        if (!offerJob.salary) {
          newErrors.salary = "notes is required";
        }
        setErrors(newErrors);
      }
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
            <Modal.Title style={{ color: "black" }}>
              Offer Job Position
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">
                <Col lg="12">
                  <fieldset>
                    <label className="text-lg" style={{ width: "100%" }}>
                      Joining Date
                    </label>
                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      name="date"
                      type={"date"}
                      onChange={(e) =>
                        setOfferJob({
                          ...offerJob,
                          joiningDate: e.target.value,
                        })
                      }
                    />
                    {errors && errors.joiningDate && (
                      <p style={{ color: "red" }}>{errors.joiningDate}</p>
                    )}
                  </fieldset>
                </Col>
                <Col lg="12">
                  <fieldset>
                    <label className="text-lg" style={{ width: "100%" }}>
                      Job Title
                    </label>
                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      name="jobTitle"
                      type={"text"}
                      onChange={(e) =>
                        setOfferJob({ ...offerJob, jobTitle: e.target.value })
                      }
                    />
                    {errors && errors.jobTitle && (
                      <p style={{ color: "red" }}>{errors.jobTitle}</p>
                    )}
                  </fieldset>
                </Col>
                <Col lg="12">
                  <fieldset>
                    <label className="text-lg" style={{ width: "100%" }}>
                      Salary
                    </label>
                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      name="salary"
                      type="number"
                      onChange={(e) =>
                        setOfferJob({ ...offerJob, salary: e.target.value })
                      }
                    />
                    {errors && errors.salary && (
                      <p style={{ color: "red" }}>{errors.salary}</p>
                    )}
                  </fieldset>
                </Col>
                <Col lg="12">
                  <fieldset>
                    <label className="text-lg" style={{ width: "100%" }}>
                      Message
                    </label>
                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      name="message"
                      type={"text"}
                      onChange={(e) =>
                        setOfferJob({ ...offerJob, msg: e.target.value })
                      }
                    />
                    {errors && errors.msg && (
                      <p style={{ color: "red" }}>{errors.msg}</p>
                    )}
                  </fieldset>
                </Col>
              </div>
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

  // decline
  function MyVerticallyCenteredDecline(props) {
    const [errors, setErrors] = useState();
    //   console.log(props, "proooooooooops");
    const [isDecline, setIsDecline] = useState({ reason: "" });

    const DeclineFunc = () => {
      let value = Object.values(isDecline);
      value = value.every((e) => e !== "");
      if (value) {
        axios
          .post(
            `api/v1/interview/schedule/reject?id=${props.props.id}`,
            isDecline
          )
          .then((res) => {
            if (res.data) {
              props.onHide();
            }
          })
          .catch((error) => {
            console.log(error, "error");
          });
      } else {
        let newErrors = {};
        if (!isDecline.reason) {
          newErrors.reason = "Reason must required";
        }
        setErrors(newErrors);
      }
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
            <Modal.Title style={{ color: "black" }}>
              Decline Interview
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Are you sure you want to decline ?</div>
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Please type the reason for rejecting the applicant.
                  </label>
                  <input
                    style={{ width: "100%" }}
                    className="form-control"
                    name="reason"
                    type={"text"}
                    onChange={(e) =>
                      setIsDecline({ ...isDecline, reason: e.target.value })
                    }
                  />
                  {errors && errors.reason && (
                    <p style={{ color: "red" }}>{errors.reason}</p>
                  )}
                </fieldset>
              </Col>
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
              onClick={() => DeclineFunc()}
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
                            <Button
                              className="text-white border-rounded px-3 py-3 mx-2 mt-2"
                              style={{ background: "#39BEC1", border: "none" }}
                              // onClick={() => confirmSchedule(items.id)}
                              onClick={() => modalshowconfirm(items)}
                            >
                              Offer Position
                            </Button>
                            {items.clicked == true && (
                              <MyVerticallyCenteredConfirm
                                show={modalShowConfirm}
                                props={items}
                                onHide={() => modalshowconfirm(items)}
                              />
                            )}
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
