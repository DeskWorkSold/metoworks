import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/axios.api";
import Loader from "../../../assets/loader.gif";
import Modal from "react-bootstrap/Modal";

export const RecruiterOffer = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({});
  // const [modalShowAccept, setModalShowAccept] = useState(false);
  // const [modalShowRevise, setModalShowRevise] = useState(false);
  const [modalShowOffer, setModalShowOffer] = useState(false);
  const [offerSuccess, setOfferSuccess] = useState(false);
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

  console.log(searchData, "ssefklsdhfkjdshfkjhadskjfhkj");

  const initialFun = (props) => {
    console.log(props, "intial Proioooooops");
    axios
      .get(`api/v1/interview?stage=offer&size=4&from=0`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        if (props && props.id) {
          setSearchData(
            data &&
              data.length > 0 &&
              data.map((e, i) => {
                if (e.id == props.id) {
                  return {
                    ...e,
                    clicked: (e.clicked = true),
                  };
                } else {
                  return {
                    ...e,
                    clicked: false,
                  };
                }
              })
          );
        } else {
          setSearchData(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(searchData, "search");

  const closeBookmark = (props) => {
    console.log(props, "propssssss");
    initialFun();
    setOfferSuccess(false);
  };

  // Offer
  function MyVerticallyCenteredOffer(props) {
    const [isJobOffer, setIsJobOffer] = useState({
      interviewId: props?.props?.id,
      jobTitle: "",
      joiningDate: "",
      salary: "",
      msg: "",
    });
    // console.log(isJobOffer, 'isJobOffer');
    const [errors, setErrors] = useState();

    const JobOfferFunc = (event) => {
      console.log(event, "eventeventeventevent");
      let value = Object.values(isJobOffer);
      value = value.every((e) => e !== "");
      if (value) {
        axios
          .post(`api/v1/interview/offer`, isJobOffer)
          .then((res) => {
            if (res.data) {
              initialFun(event);
              event.clicked = false;
              setModalShowOffer(false);
              setOfferSuccess(true);
            }
          })
          .catch((error) => {
            console.log(error, "error");
            setModalShowOffer(false);
          });
      } else {
        let newErrors = {};
        if (!isJobOffer.timestamp) {
          newErrors.joiningDate = "Joining Date is required";
        }
        if (!isJobOffer.location) {
          newErrors.jobTitle = "Job Title is required";
        }
        if (!isJobOffer.type) {
          newErrors.salary = "Salary is required";
        }
        if (!isJobOffer.notes) {
          newErrors.msg = "Message is required";
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
                        setIsJobOffer({
                          ...isJobOffer,
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
                        setIsJobOffer({
                          ...isJobOffer,
                          jobTitle: e.target.value,
                        })
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
                        setIsJobOffer({ ...isJobOffer, salary: e.target.value })
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
                        setIsJobOffer({ ...isJobOffer, msg: e.target.value })
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
              onClick={() => closeBookmark(props)}
            >
              Cancel
            </Button>

            <Button
              style={{ background: "none", color: "#39BEC1" }}
              // onClick={() => deleteProfileEducationData(props.props)}
              onClick={() => JobOfferFunc(props?.props)}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const modalshowoffer = (items) => {
    // console.log(items, "funtion items");
    initialFun(items);
    setModalShowOffer(true);
  };
  // offer success
  function MyVerticallyCenteredOfferSuccess(props) {
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
            <Modal.Title style={{ color: "black" }}>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">Succesfully Offer</div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ background: "none", color: "#39BEC1" }}
              // onClick={() => deleteProfileEducationData(props.props)}
              onClick={() => closeBookmark(props)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

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
                              //   onClick={handleShow}
                              className="text-white border-rounded px-3 py-3 mx-2 mt-2"
                              style={{ background: "#C1272D", border: "none" }}
                              onClick={() => modalshowoffer(event)}
                            >
                              Offer Position
                            </Button>
                            {event.clicked && modalShowOffer && (
                              <MyVerticallyCenteredOffer
                                show={event.clicked}
                                props={event}
                              />
                            )}

                            {event.clicked && offerSuccess && (
                              <MyVerticallyCenteredOfferSuccess
                                show={offerSuccess}
                                props={event}
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
                                {event?.schedule?.substring(0, 10)} -
                                {event?.schedule?.substring(11, 16)}
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
