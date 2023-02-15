import React, { useEffect } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";

// import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { A11y, Navigation } from "swiper";
import { Container, Col, Row, Button, Form, Image } from "react-bootstrap";

import { BsArrowBarDown, BsBookmark } from "react-icons/bs";
import { useState } from "react";
import axios from "../../../utils/axios.api";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import "swiper/css/scrollbar";

export const MainProfession = () => {
  const [isSearch, setIsSearch] = useState({
    keyword: "",
    filter: [],
  });
  const [searchData, setSearchData] = useState({});
  const [modalShow, setModalShow] = React.useState(false);

  const [searchShow, setSearchShow] = useState(false);

  const searchFun = () => {
    axios
      .post(`api/v1/search/freelancer?from=0&size=1`, isSearch)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const resetFun = () => {
    setSearchData(null);
  };
  const handleChanger = () => {
    if (searchShow === true) {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };
  function MyVerticallyCenteredModal(props) {
    // console.log(props, "proooooooooops");
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
                      <span className="font-semibold">Title:</span>
                      {props?.props?._source?.title}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Industry:</span>
                      {props?.props?._source?.industry}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Job Function :</span>
                      {props?.props?._source?.jobFunction}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Job Location :</span>
                      {props?.props?._source?.location}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Description :</span>
                      {props?.props?._source?.description}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Requirements :</span>{" "}
                      {props?.props?._source?.requirements}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Profession :</span>
                      {props?.props?._source?.profession}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Education Level :</span>
                      {props?.props?._source?.educationLevel}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Project Timeline :</span>{" "}
                      {props?.props?._source?.projectTimeline.gte +
                        " - " +
                        props?.props?._source?.projectTimeline.lte}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Mode of Work:</span>{" "}
                      {props?.props?._source?.modeOfWork}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">No. of Openings :</span>
                      {props?.props?._source?.noOfOpenings}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Salary Range:</span>
                      {props?.props?._source?.salaryRange.gte +
                        " - " +
                        props?.props?._source?.salaryRange.lte}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Salary Type :</span>
                      {props?.props?._source?.salaryType}
                    </p>
                  </li>
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
      values.clicked = false;
      setModalShow(false);
    } else {
      setModalShow(true);
      values.clicked = true;
    }
  };
  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container>
        <div className="py-3 text-center">
          <h2 className="text-6xl">
            Hire the Top 3% of <br />
            Freelance Talent
          </h2>
        </div>
        <Row>
          <Col lg="12">
            <Col lg="12" className="webkit">
              <Row>
                <Col>
                  <div className="About_main_images_search">
                    <input
                      placeholder="Enter Profession, Company Name or Keywords."
                      onChange={(e) =>
                        setIsSearch({ ...isSearch, keyword: e.target.value })
                      }
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
                      onClick={() => resetFun()}
                    >
                      Reset
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
        {searchShow === true ? (
          <>
            <Row className="align-items-center">
              <Col lg="5">
                <div className="p-3">
                  <Col lg="12">
                    <fieldset>
                      <label className="text-2xl" style={{ width: "100%" }}>
                        Job Industry
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option hidden="">Select Job Industry</option>
                        <option>Universities / Education</option>
                        <option>Manufacturing</option>
                        <option>Security </option>
                        <option>Real Estate</option>
                        <option>
                          Professional Consultings (Legal, HR, Finance etc.)
                        </option>
                        <option>Banking and Finance</option>
                        <option>
                          Beautiy Care and Health / Welness / Fitness
                        </option>
                        <option>Government / Public Utilities</option>
                        <option>
                          Hospitality / Travel / Airlines / Clubhouse
                        </option>
                        <option>
                          IT / R&amp;D / Cyber Security / Telecommunication /
                          Science
                        </option>
                        <option>Retail</option>
                        <option>Insurance</option>
                        <option>
                          Logistics / Transportaton / Supply Chain
                        </option>
                        <option>F&amp;B / Wine &amp; Spriits</option>
                        <option>
                          Logistics / Transportaton / Supply Chain
                        </option>
                        <option>Medical / Pharmacy / Hospital</option>
                        <option>Engineerings</option>
                        <option>Others</option>
                      </Form.Select>
                      {/* <input
                style={{ width: "100%" }}
                className="form-control"
                type={"text"}
                name="firstname"
                //   value={user.name}
                //   onChange={getUserData}
                placeholder="Select Job Industry
                "
                required
              /> */}
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-2xl" style={{ width: "100%" }}>
                        Job Function
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option hidden="">Select Job Function</option>
                        <option>HR &amp; Admin</option>
                        <option>General Management</option>
                        <option>Finance and Accounting</option>
                        <option>Sales and Marketing</option>
                        <option>
                          Banking and Financial Institue Professionals
                        </option>
                        <option>
                          Insurance Professionals (back-end functions)
                        </option>
                        <option>IT Professionals (Specific Fields)</option>
                        <option>Manufacturing</option>
                        <option>
                          Real Estate (Surveyers / reasearchers etc.)
                        </option>
                        <option>Professional Designers</option>
                        <option>Lecturers / Teachers</option>
                        <option>Engineering / Architect</option>
                        <option>Others</option>
                      </Form.Select>
                      {/* <input
                style={{ width: "100%" }}
                className="form-control"
                type={"text"}
                name="lastname"
                //   value={user.email}
                //   onChange={getUserData}
                placeholder="Select Job Function
                "
                required
              /> */}
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-2xl" style={{ width: "100%" }}>
                        Sub Job Function
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option hidden="">Select Sub Job Function</option>
                      </Form.Select>
                      {/* <input
                style={{ width: "100%" }}
                className="form-control"
                name="Email"
                type={"email"}
                //   value={user.number}
                //   onChange={getUserData}
                placeholder="Select Sub Job Function
                "
              /> */}
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-2xl" style={{ width: "100%" }}>
                        Profession
                      </label>
                      {/* <Form.Select aria-label="Default select example">
                    <option>Select Job Title</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select> */}
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="Email"
                        type={"email"}
                        //   value={user.number}
                        //   onChange={getUserData}
                        placeholder="Enter Profession
                "
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-2xl" style={{ width: "100%" }}>
                        Language
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option hidden="">Select Language</option>
                        <option value="English">English</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Cantonese">Cantonese</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                        <option value="Mandarin">Mandarin</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Burmese">Burmese</option>
                        <option value="Czech">Czech</option>
                        <option value="Dutch">Dutch</option>
                        <option value="Greek">Greek</option>
                        <option value="Hakka">Hakka</option>
                        <option value="Hungarian">Hungarian</option>
                        <option value="Hunnanese">Hunnanese</option>
                        <option value="Malay/Indonesian">
                          Malay/Indonesian
                        </option>
                        <option value="Nepali">Nepali</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Russian">Russian</option>
                        <option value="Shanghainese">Shanghainese</option>
                        <option value="Swedish">Swedish</option>
                        <option value="Tagalog">Tagalog</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Thai">Thai</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Others">Others</option>
                      </Form.Select>
                      {/* <input
                style={{ width: "100%" }}
                className="form-control"
                name="Email"
                type={"email"}
                //   value={user.number}
                //   onChange={getUserData}
                placeholder="Select Job Title

                "
              /> */}
                    </fieldset>
                  </Col>
                </div>
              </Col>
              <Col lg="2">
                <hr className="hr" />
              </Col>
              <Col lg="5">
                <div className="p-3">
                  <Col lg="12">
                    <fieldset>
                      <label className="text-2xl" style={{ width: "100%" }}>
                        Company Name
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option>Enter Company Name</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      {/* <input
                style={{ width: "100%" }}
                className="form-control"
                type={"text"}
                name="firstname"
                //   value={user.name}
                //   onChange={getUserData}
                placeholder="Select Job Industry
                "
                required
              /> */}
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-2xl" style={{ width: "100%" }}>
                        Mode of Work
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Mode of Work</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      {/* <input
                style={{ width: "100%" }}
                className="form-control"
                type={"text"}
                name="lastname"
                //   value={user.email}
                //   onChange={getUserData}
                placeholder="Select Job Function
                "
                required
              /> */}
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-2xl" style={{ width: "100%" }}>
                        Salary Range
                      </label>
                      <div style={{ display: "flex" }}>
                        <input
                          style={{ width: "100%" }}
                          className="form-control"
                          name="Email"
                          type={"email"}
                          //   value={user.number}
                          //   onChange={getUserData}
                          placeholder="Enter Min Salary 

                "
                        />
                        <input
                          style={{ width: "100%" }}
                          className="form-control mx-2"
                          name="Email"
                          type={"email"}
                          //   value={user.number}
                          //   onChange={getUserData}
                          placeholder="Enter Max Salary 

                "
                        />
                      </div>
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-2xl" style={{ width: "100%" }}>
                        Work Experience
                      </label>
                      <div style={{ display: "flex" }}>
                        <input
                          style={{ width: "100%" }}
                          className="form-control"
                          name="minwork"
                          type={"text"}
                          //   value={user.number}
                          //   onChange={getUserData}
                          placeholder="Min Work Exp 

                "
                        />
                        <input
                          style={{ width: "100%" }}
                          className="form-control mx-2"
                          name="text"
                          type={"text"}
                          //   value={user.number}
                          //   onChange={getUserData}
                          placeholder="Max Work Exp

                "
                        />
                      </div>
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-2xl" style={{ width: "100%" }}>
                        Location
                      </label>
                      <Form.Select aria-label="Default select example">
                        <option hidden="">Select Job Location</option>
                        <option>Central and Western</option>
                        <option>Eastern</option>
                        <option>Southern</option>
                        <option>Wan Chai</option>
                        <option>Kowloon City</option>
                        <option>Kwun Tong</option>
                        <option>Sham Shui Po</option>
                        <option>Wong Tai Sin</option>
                        <option>Yau Tsim Mong</option>
                        <option>Islands</option>
                        <option>Kwai Tsing</option>
                        <option>North</option>
                        <option>Sai Kung</option>
                        <option>Shatin</option>
                        <option>Tai Po</option>
                        <option>Tsuen Wan</option>
                        <option>Tuen Mun</option>
                        <option>Yuen Long</option>
                        <option>China</option>
                        <option>South East Asia (SEA)</option>
                        <option>Asia Pacific (APAC)</option>
                        <option>Others</option>
                      </Form.Select>
                      {/* <input
                style={{ width: "100%" }}
                className="form-control"
                name="Email"
                type={"email"}
                //   value={user.number}
                //   onChange={getUserData}
                placeholder="Select Job Title

                "
              /> */}
                    </fieldset>
                  </Col>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          ""
        )}
        <Row>
          <Col lg="12" className="webkit">
            <div className="p-2">
              <h2 className="text-2xl">Advance Search</h2>
              <BsArrowBarDown
                onClick={() => handleChanger()}
                className="text-2xl"
                style={{ color: "#39BEC1" }}
              />
            </div>
          </Col>
        </Row>
        {searchData?.data?.length > 0 &&
          searchData?.data?.map((values, keys) => {
            console.log(values, "values");
            return (
              <Row>
                <Col lg="12" key={keys}>
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
                            // onClick={() => navigate("/FreelancerProfile", { state: { values } })}
                          >
                            APPLY
                          </Button>
                          <Button
                            onClick={() => modalshow(values)}
                            className="text-white border-rounded px-3 py-3 w-48 mx-2 mt-2"
                            style={{ background: "#C1C1C1", border: "none" }}
                          >
                            VIEW MORE DETAIL
                          </Button>
                          {values.clicked == true && (
                            <MyVerticallyCenteredModal
                              show={modalShow}
                              props={values}
                              onHide={() => modalshow(values)}
                            />
                          )}
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
                            Posted Date : {values?._source?.postedDate}{" "}
                            &nbsp;&nbsp; &nbsp;&nbsp;
                            <span>
                              Expiry Date : {values?._source?.expiryDate}{" "}
                            </span>
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
                              {values?._source?.companyName}
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
                              {values?._source?.industry}
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
                              {values?._source?.salaryRange?.gte +
                                " - " +
                                values?._source?.salaryRange?.lte}
                            </h2>
                          </div>
                        </Col>
                        <Col>
                          <div className="p3 py-3">
                            <h2 className="text-lg font-semibold">Location</h2>
                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              {values?._source?.location}
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
                              {values?._source?.noOfOpenings}
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
              </Row>
            );
          })}
      </Container>
    </Container>
  );
};
