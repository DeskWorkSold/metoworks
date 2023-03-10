import React, { useEffect, useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { A11y, Navigation } from "swiper";
import Modal from "react-bootstrap/Modal";

import { Container, Col, Row, Button, Form, Image } from "react-bootstrap";
import axios from "../../../utils/axios.api";

import { BsArrowBarDown, BsBookmark } from "react-icons/bs";
import Loader from "../../../assets/loader.gif";
import { useNavigate } from "react-router-dom";

export const FreelanceSavedJobs = () => {
  const [isToken, setIsToken] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchData, setSearchData] = useState({});
  const [applyShow, setApplyShow] = useState(false);
  const [applyShowError, setApplyShowError] = useState(false);

  const navigate = useNavigate();

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

  const initialFun = (props) => {
    axios

      .get(`api/v1/user/freelancer/saved-jobs`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data;
        // console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        if (props && props.id) {
          setSearchData(
            data &&
              data.length > 0 &&
              data.map((e, i) => {
                if (e.id == props.id) {
                  return {
                    ...e,
                    clicked: e.clicked ? false : true,
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

  // const saveJob = (event) => {
  //   axios
  //     .post(`api/v1/user/freelancer/saved-jobs/${event._id}`)
  //     .then((res) => {
  //       // console.log(res, "Initial Data");
  //       let data = res.data.data;
  //       console.log(data, "daaaaaaaaataaaaaaaaaaaa");
  //       searchFun();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const applyFunc = (event) => {
    // console.log(event, "eeeeeeeeeeeeeeee");
    axios
      .post(`api/v1/interview/apply?jobId=${event.id}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        setApplyShow(true);
        initialFun(event);
        // setIsProfileData(data)
      })
      .catch((err) => {
        setApplyShowError(true);
        initialFun(event);
        console.log(err);
      });
  };
  const closeBookmark = (props) => {
    setApplyShow(false);
    setApplyShowError(false);
    setModalShow(false);
    initialFun(props);
  };
  function MyVerticallyCenteredModal(props) {
    console.log(props, "proooooooooops");
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
            <Modal.Title style={{ color: "black" }}>Post A Job</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Title : </span>{" "}
                      {props?.props?.title}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Industry : </span>{" "}
                      {props?.props?.industry}
                    </p>
                  </li>
                  {/* <li>
                    <p className="text-lg">
                      <span className="font-semibold">Job Function : </span>{" "}
                      General Management
                    </p>
                  </li> */}
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Job Location : </span>{" "}
                      {props?.props?.location}
                    </p>
                  </li>
                  {/* <li>
                    <p className="text-lg">
                      <span className="font-semibold">Description :</span>{" "}
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when avn unknown printer
                      took a galley of type and scramble.
                    </p>
                  </li> */}
                  {/* <li>
                    <p className="text-lg">
                      <span className="font-semibold">Requirements :</span>{" "}
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when avn unknown printer
                      took a galley of type and scramble.
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Profession :</span> Doctor
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Education Level :</span>{" "}
                      MASTER DEGREE
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Project Timeline :</span>{" "}
                      2023-01-19 - 2023-02-03
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Mode of Work:</span>{" "}
                      Office
                    </p>
                  </li> */}
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">No. of Openings : </span>
                      {props?.props?.noOfOpenings}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Salary Range : </span>
                      {props?.props?.salaryRange.gte} -
                      {props?.props?.salaryRange.lte}
                    </p>
                  </li>
                  {/* <li>
                    <p className="text-lg">
                      <span className="font-semibold">Salary Type :</span>
                      1000-5000
                    </p>
                  </li> */}
                </ul>
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
              onClick={props.post}
            >
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const modalshow = (values) => {
    // console.log(values, "funtion values");
    if (values.clicked == true) {
      // alert('its work')
      values.clicked = false;
      setModalShow(false);
    } else {
      setModalShow(true);
      values.clicked = true;
    }
  };

  function MyVerticallyCenteredModalApply(props) {
    return (
      <Modal
        {...props}
        size="sm"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        // centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Apply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Apply Successfully</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => closeBookmark(props)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function MyVerticallyCenteredModalApplyError(props) {
    return (
      <Modal
        {...props}
        size="sm"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        // centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Job Applied
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 class="text-red-700">already Applied Job</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => closeBookmark(props)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // const applyshow = (items) => {
  //   console.log(items, "funtion items");
  //   if (items.clicked == true) {
  //     items.clicked = false;
  //     setApplyShow(false);
  //   } else {
  //     setApplyShow(true);
  //     items.clicked = true;
  //   }
  // };

  // const applyshowerror = (items) => {
  //   console.log(items, "funtion items");
  //   if (items.clicked == true) {
  //     items.clicked = false;
  //     setApplyShowError(false);
  //   } else {
  //     setApplyShowError(true);
  //     items.clicked = true;
  //   }
  // };

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
              <h2 className="text-3xl robot">Saved Jobs</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-2" />
      {searchData.length > 0 && searchData ? (
        <Container>
          {searchData.length > 0 &&
            searchData.map((items, keys) => {
              console.log(items, "items");
              return (
                <Row>
                  <Col lg="12" key={keys}>
                    <div className="p-3">
                      <div className="boxshad">
                        <Row className="align-items-center">
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
                              {items?.title}
                            </h2>
                            <p style={{ color: "#7A7979" }} className="text-lg">
                              {items?.empType}
                            </p>
                          </Col>
                          <Col lg="5" className="webkit-right">
                            <Button
                              className="text-white border-rounded px-3 py-3 w-48 mx-2 mt-2"
                              style={{ background: "#39BEC1", border: "none" }}
                              onClick={() => applyFunc(items)}
                            >
                              APPLY
                            </Button>
                            {items.clicked && applyShow && (
                              <MyVerticallyCenteredModalApply
                                show={items.clicked}
                                props={items}
                              />
                            )}
                            {items.clicked && applyShowError && (
                              <MyVerticallyCenteredModalApplyError
                                show={applyShowError}
                                props={items}
                              />
                            )}
                            <Button
                              onClick={() => modalshow(items)}
                              className="text-white border-rounded px-3 py-3 w-48 mt-2"
                              style={{ background: "#C1C1C1", border: "none" }}
                            >
                              VIEW MORE DETAIL
                            </Button>
                            {items.clicked == true && modalShow && (
                              <MyVerticallyCenteredModal
                                show={modalShow}
                                props={items}
                                onHide={() => modalshow(items)}
                              />
                            )}
                            {/* <Modal
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
                                        <span className="font-semibold">
                                          Title:
                                        </span>{" "}
                                        {items?.title}
                                      </p>
                                    </li>
                                    <li>
                                      <p className="text-lg">
                                        <span className="font-semibold">
                                          Industry:
                                        </span>{" "}
                                        {items?.industry}
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
                                        typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text
                                        ever since the 1500s, when avn unknown
                                        printer took a galley of type and
                                        scramble.
                                      </p>
                                    </li>
                                    <li>
                                      <p className="text-lg">
                                        <span className="font-semibold">
                                          Requirements :
                                        </span>{" "}
                                        simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text
                                        ever since the 1500s, when avn unknown
                                        printer took a galley of type and
                                        scramble.
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
                                        HKD{items?.salaryRange.gte} - HDK
                                        {items?.salaryRange.lte}
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
                          </Modal> */}
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
                              Posted Date : {items?.postedDate.substring(0, 10)}
                              {/* <span className="mrdg">
                              Expiry Date : {items?.expiryDate}{" "}
                            </span> */}
                            </p>
                          </Col>
                        </Row>
                        <Row className="align-items-center block-for-res">
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Company Name
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {items?.companyName}
                              </h2>
                            </div>
                          </Col>
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Job Industry
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {items?.industry}
                              </h2>
                            </div>
                          </Col>
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Salary Range
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                HKD{items?.salaryRange.gte} - HDK
                                {items?.salaryRange.lte}
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
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                No. of candidates
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {items?.noOfOpenings}
                              </h2>
                            </div>
                          </Col>
                        </Row>
                        <hr className="my-2" />
                        <Row className="align-items-center">
                          <Col lg="10">
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Job Description
                              </h2>
                              <h2
                                className="text-l py-3"
                                style={{ color: "#7A7979" }}
                              >
                                {items?.description}
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
                              <BsBookmark style={{ color: "#39BEC1" }} />
                            </p>
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
          <img src={Loader} style={{ width: 180, height: 180 }} />
        </div>
      )}
    </Container>
  );
};
