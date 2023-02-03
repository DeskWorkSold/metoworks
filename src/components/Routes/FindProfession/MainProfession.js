import React from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { A11y, Navigation } from "swiper";
import { Container, Col, Row, Button, Form, Image } from "react-bootstrap";

import { BsArrowBarDown, BsBookmark } from "react-icons/bs";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import "swiper/css/scrollbar";

export const MainProfession = () => {
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
                    <input placeholder="Enter Profession, Company Name or Keywords."></input>

                    <Button
                      className="text-white border-rounded px-3"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      Search
                    </Button>
                    <Button
                      className="text-white border-rounded mx-2 px-3"
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
                    <option>Beautiy Care and Health / Welness / Fitness</option>
                    <option>Government / Public Utilities</option>
                    <option>Hospitality / Travel / Airlines / Clubhouse</option>
                    <option>
                      IT / R&amp;D / Cyber Security / Telecommunication /
                      Science
                    </option>
                    <option>Retail</option>
                    <option>Insurance</option>
                    <option>Logistics / Transportaton / Supply Chain</option>
                    <option>F&amp;B / Wine &amp; Spriits</option>
                    <option>Logistics / Transportaton / Supply Chain</option>
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
                    <option>Real Estate (Surveyers / reasearchers etc.)</option>
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
                    <option value="Malay/Indonesian">Malay/Indonesian</option>
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
                    <p style={{ color: "#7A7979" }} className="text-l">
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
                      className="text-white border-rounded px-3 py-3 w-48 mx-2 mt-2"
                      style={{ background: "#C1C1C1", border: "none" }}
                    >
                      view more details
                    </Button>

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
                <Row className="align-items-center pl-4 py-3">
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
                <Row className="align-items-center pl-4">
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
                    <p style={{ color: "#7A7979" }} className="text-l">
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
                      className="text-white border-rounded px-3 py-3 w-48 mx-2 mt-2"
                      style={{ background: "#C1C1C1", border: "none" }}
                    >
                      view more details
                    </Button>

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
                <Row className="align-items-center pl-4 py-3">
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
                <Row className="align-items-center pl-4">
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
                    <p style={{ color: "#7A7979" }} className="text-l">
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
                      className="text-white border-rounded px-3 py-3 w-48 mx-2 mt-2"
                      style={{ background: "#C1C1C1", border: "none" }}
                    >
                      view more details
                    </Button>

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
                <Row className="align-items-center pl-4 py-3">
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
                <Row className="align-items-center pl-4">
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
