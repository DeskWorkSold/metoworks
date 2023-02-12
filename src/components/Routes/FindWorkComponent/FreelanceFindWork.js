import React, { useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { A11y, Navigation } from "swiper";
import Modal from "react-bootstrap/Modal";

import { Container, Col, Row, Button, Form, Image } from "react-bootstrap";

import { BsArrowBarDown, BsBookmark } from "react-icons/bs";
import { useEffect } from "react";
import axios from "../../../utils/axios.api";
import { useNavigate } from "react-router-dom";

export const FreelanceFindWork = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const [isSearch, setIsSearch] = useState({
    keyword : '',
    filter : []
  })
  const [searchData, setSearchData] = useState({})

  const searchFun = () => {
    axios
      .post(`api/v1/search/job-post?from=0&size=4`, isSearch)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        console.log(data, 'daaaaaaaaataaaaaaaaaaaa');
        // setIsProfileData(data)
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


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
                      placeholder="Enter Profession, Company Name or Keywords."
                      onChange={(e) => setIsSearch({...isSearch, keyword : e.target.value})}
                    ></input>

                    <Button
                      className="text-white border-rounded"
                      style={{ background: "#39BEC1", border: "none" }}
                      onClick={() => searchFun()}
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
        {searchData?.data?.length > 0 && searchData?.data?.map((values, keys) => {
                  return (<Row>
                    <Col lg="12"
                    key={keys}
                    >
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
                              {values?._source?.title}
                              </h2>
                              <p style={{ color: "#7A7979" }} className="text-lg">
                              {values?._source?.empType}
                              </p>
                            </Col>
                            <Col lg="5" className="webkit-right">
                              <Button
                                className="text-white border-rounded px-3 py-3 w-48 mx-2 mt-2"
                                style={{ background: "#39BEC1", border: "none" }}
                                onClick={() => navigate("/FreelancerProfile", { state: { values } })}
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
                                            <span className="font-semibold">Title:</span>
                                            {values?._source?.title}
                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              Industry:
                                            </span>
                                            {values?._source?.industry}
                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              Job Function :
                                            </span>
                                            {values?._source?.jobFunction}

                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              Job Location :
                                            </span>
                                            {values?._source?.location}

                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              Description :
                                            </span>
                                            {values?._source?.description}
                                           
                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              Requirements :
                                            </span>{" "}
                                            {values?._source?.requirements}

                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              Profession :
                                            </span>
                                            {values?._source?.profession}
                                            
                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              Education Level :
                                            </span>
                                            {values?._source?.educationLevel}
                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              Project Timeline :
                                            </span>{" "}
                                            {values?._source?.projectTimeline.gte + ' - ' + values?._source?.projectTimeline.lte}
                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              Mode of Work:
                                            </span>{" "}
                                            {values?._source?.modeOfWork}
                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              No. of Openings :
                                            </span>
                                            {values?._source?.noOfOpenings}
                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              Salary Range:
                                            </span>
                                            {values?._source?.salaryRange.gte + ' - ' + values?._source?.salaryRange.lte}

                                          </p>
                                        </li>
                                        <li>
                                          <p className="text-lg">
                                            <span className="font-semibold">
                                              Salary Type : 
                                            </span>
                                             {values?._source?.salaryType}
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
                                Posted Date : {values?._source?.postedDate} &nbsp;&nbsp; &nbsp;&nbsp;
                                <span>Expiry Date : {values?._source?.expiryDate}  </span>
                              </p>
                            </Col>
                          </Row>
                          <Row className="align-items-center block-for-res">
                            <Col>
                              <div className="p3 py-3">
                                <h2 className="text-lg font-semibold">Company Name</h2>
                                <h2 className="text-lg" style={{ color: "#7A7979" }}>
                                  {values?._source?.companyName}
                                </h2>
                              </div>
                            </Col>
                            <Col>
                              <div className="p3 py-3">
                                <h2 className="text-lg font-semibold">Job Industry</h2>
                                <h2 className="text-lg" style={{ color: "#7A7979" }}>
                                {values?._source?.industry}
                                </h2>
                              </div>
                            </Col>
                            <Col>
                              <div className="p3 py-3">
                                <h2 className="text-lg font-semibold">Salary Range</h2>
                                <h2 className="text-lg" style={{ color: "#7A7979" }}>
                                {values?._source?.salaryRange?.gte + ' - ' +  values?._source?.salaryRange?.lte}
                                </h2>
                              </div>
                            </Col>
                            <Col>
                              <div className="p3 py-3">
                                <h2 className="text-lg font-semibold">Location</h2>
                                <h2 className="text-lg" style={{ color: "#7A7979" }}>
                                {values?._source?.location}
                                </h2>
                              </div>
                            </Col>
                            <Col>
                              <div className="p3 py-3">
                                <h2 className="text-lg font-semibold">
                                  No. of candidates
                                </h2>
                                <h2 className="text-lg" style={{ color: "#7A7979" }}>
                                {values?._source?.noOfOpenings}
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
                                {values?._source?.description}
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
                  </Row>)
                })}
        
      </Container>
    </Container>
  );
};
