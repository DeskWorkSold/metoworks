// import React from "react";
import React, { useState, Component } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import { BsBookmark, BsCoin, BsPencilSquare, BsReceipt } from "react-icons/bs";
import {
  faEarth,
  faLocationDot,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
// import React, { Component } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function MyVerticallyCenteredModal(props) {
  const [jobData, setJobData] = useState ({})
  console.log(jobData, 'Dataa');

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          Post A Job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg="12">
            <div className="p-3">
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Job Title
                  </label>
                  <input
                    style={{ width: "100%" }}
                    className="form-control"
                    name="fname"
                    type={"text"}
                    onChange={(e) => setJobData({...jobData, jobTitle : e.target.value})}
                    //   value={user.number}
                    //   onChange={getUserData}
                    placeholder="Doctor for Child

                "
                  />
                </fieldset>
              </Col>
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Job Industry
                  </label>
                  <Form.Select aria-label="Default select example"  
                  onChange={(e) => setJobData({...jobData, jobIndustry : e.target.value})}
                  >
                    <option value="DEFAULT" disabled="">
                      Select Job Industry
                    </option>
                    <option>Universities / Education</option>
                    <option>Manufacturing</option>
                    <option>Security</option>
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
                  <label className="text-lg" style={{ width: "100%" }}>
                    Job Function
                  </label>
                  <Form.Select aria-label="Default select example">
                    <option value="DEFAULT" disabled="">
                      Select Job Function
                    </option>
                    <option>HR &amp; Admin</option>
                    <option>General Management</option>
                    <option>Finance and Accounting</option>
                    <option>Sales and Marketing</option>
                    <option>
                      Banking and Financial Institue Professionals
                    </option>
                    <option>Insurance Professionals (back-end functions</option>
                    <option>IT Professionals (Specific Fields)</option>
                    <option>Manufacturing</option>
                    <option>Finance and Accounting</option>
                    <option>Professional Designers</option>
                    <option>Lecturers / Teachers</option>
                    <option>Engineering / Architect</option>
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
                  <label className="text-lg" style={{ width: "100%" }}>
                    Sub Job Function
                  </label>
                  <Form.Select aria-label="Default select example">
                    <option value="DEFAULT" disabled="">
                      Sub Job Function
                    </option>
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
                  <label className="text-lg" style={{ width: "100%" }}>
                    Job Location
                  </label>
                  <Form.Select aria-label="Default select example">
                    <option value="DEFAULT" disabled="">
                      Select Job Location
                    </option>
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
                  <label className="text-lg" style={{ width: "100%" }}>
                    Job Description
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when avn unknown printer took a galley of type and 
                    scramble.</p>"
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setJobData({...jobData, jobDiscription : data})
                      ;
                    }}
                    onBlur={(event, editor) => {
                      console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log("Focus.", editor);
                    }}
                  />
                </fieldset>
              </Col>
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Job Requirements
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when avn unknown printer took a galley of type and 
                    scramble.</p>"
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                      console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log("Focus.", editor);
                    }}
                  />
                </fieldset>
              </Col>
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Profession
                  </label>

                  <input
                    style={{ width: "100%" }}
                    className="form-control"
                    type={"text"}
                    name="firstname"
                    //   value={user.name}
                    //   onChange={getUserData}
                    placeholder="Enter Profession
                "
                    required
                  />
                </fieldset>
              </Col>
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Education Level
                  </label>
                  <Form.Select aria-label="Default select example">
                    <option>Select Education level</option>
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
                  <label className="text-lg" style={{ width: "100%" }}>
                    Employment Type
                  </label>
                  <Form.Select aria-label="Default select example">
                    <option>Select Employement Type</option>
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
                  <label className="text-lg" style={{ width: "100%" }}>
                    Profession
                  </label>
                </fieldset>
              </Col>
              {/* <Container>
                <Row>
                  <Col lg="6">
                    <label className="text-l">Start :</label>
                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      type={"date"}
                      name="firstname"
                      //   value={user.name}
                      //   onChange={getUserData}
                      placeholder="Minimum Salary"
                      required
                    />
                  </Col>
                  <Col lg="6">
                    <label className="text-l">End :</label>
                    <input
                      style={{ width: "100%" }}
                      className="form-control mx-2"
                      type={"date"}
                      name="firstname"
                      //   value={user.name}
                      //   onChange={getUserData}
                      placeholder="Maximum Salary
                "
                      required
                    />
                  </Col>
                </Row>
              </Container> */}
              <Container>
                <Row>
                  <Col>
                    <label className="text-l" style={{ color: "#7A7979" }}>
                      Start :
                    </label>
                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      type={"date"}
                      name="firstname"
                      //   value={user.name}
                      //   onChange={getUserData}
                      placeholder="Start"
                      required
                    />
                  </Col>
                  <Col>
                    <label className="text-l" style={{ color: "#7A7979" }}>
                      End :
                    </label>
                    <input
                      style={{ width: "100%" }}
                      className="form-control mx-2"
                      type={"date"}
                      name="firstname"
                      //   value={user.name}
                      //   onChange={getUserData}
                      placeholder="Start
                "
                      required
                    />
                  </Col>
                </Row>
              </Container>
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
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
                  <label className="text-lg" style={{ width: "100%" }}>
                    No. of Openings
                  </label>

                  <input
                    style={{ width: "100%" }}
                    className="form-control"
                    type={"number"}
                    name="firstname"
                    //   value={user.name}
                    //   onChange={getUserData}
                    placeholder="Enter No. of Openings
                "
                    required
                  />
                </fieldset>
              </Col>
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Salary Info
                  </label>
                  <Form.Select aria-label="Default select example">
                    <option value="DEFAULT" disabled="">
                      Currency
                    </option>
                    <option>HKD</option>
                    <option>USD</option>
                    <option>RMB</option>
                    <option>Yen</option>
                    <option>Won</option>
                    <option>TWD</option>
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
              <Container>
                <Row>
                  <Col lg="6">
                    <label className="text-l" style={{ color: "#7A7979" }}>
                      Min :
                    </label>
                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      type={"number"}
                      name="firstname"
                      //   value={user.name}
                      //   onChange={getUserData}
                      placeholder="Minimum Salary"
                      required
                    />
                  </Col>
                  <Col lg="6">
                    <label className="text-l" style={{ color: "#7A7979" }}>
                      Max :
                    </label>
                    <input
                      style={{ width: "100%" }}
                      className="form-control mx-2"
                      type={"number"}
                      name="firstname"
                      //   value={user.name}
                      //   onChange={getUserData}
                      placeholder="Maximum Salary
                "
                      required
                    />
                  </Col>
                </Row>
              </Container>
              <Col lg="12">
                <fieldset className="dflexx">
                  <label className="text-lg">Salary Type :</label>
                  <input
                    type="radio"
                    name="radios"
                    class="form-check-input"
                    id="exampleRadio1"
                    style={{ marginLeft: "60px" }}
                  />{" "}
                  <label
                    class="form-check-label"
                    for="exampleRadio1"
                    style={{ color: "#7A7979" }}
                  >
                    {" "}
                    Salary Negotiable
                  </label>
                  <input
                    type="radio"
                    name="radios"
                    class="form-check-input"
                    id="exampleRadio2"
                    style={{ marginLeft: "60px" }}
                  />{" "}
                  <label
                    class="form-check-label"
                    for="exampleRadio2"
                    style={{ color: "#7A7979" }}
                  >
                    {" "}
                    Project Based
                  </label>
                  <input
                    type="radio"
                    name="radios"
                    class="form-check-input"
                    id="exampleRadio3"
                    style={{ marginLeft: "60px" }}
                  />{" "}
                  <label
                    class="form-check-label"
                    for="exampleRadio3"
                    style={{ color: "#7A7979" }}
                  >
                    {" "}
                    Others
                  </label>
                </fieldset>
              </Col>
              <Col lg="12">
                <fieldset className="dflexx">
                  <label className="text-lg">Salary Freq :</label>
                  <input
                    type="radio"
                    class="form-check-input"
                    name="bsradio"
                    id="radio1"
                    style={{ marginLeft: "60px" }}
                  />{" "}
                  <label
                    for="radio1"
                    class="form-check-label pl-2"
                    style={{ color: "#7A7979" }}
                  >
                    {" "}
                    Per Day
                  </label>
                  <input
                    type="radio"
                    class="form-check-input"
                    name="bsradio"
                    id="radio2"
                    style={{ marginLeft: "60px" }}
                  />{" "}
                  <label
                    for="radio2"
                    class="form-check-label pl-2"
                    style={{ color: "#7A7979" }}
                  >
                    {" "}
                    Per Week
                  </label>
                  <input
                    type="radio"
                    class="form-check-input"
                    name="bsradio"
                    id="radio3"
                    style={{ marginLeft: "60px" }}
                  />{" "}
                  <label
                    for="radio3"
                    class="form-check-label pl-2"
                    style={{ color: "#7A7979" }}
                  >
                    {" "}
                    Per Month
                  </label>
                  <input
                    type="radio"
                    class="form-check-input"
                    name="bsradio"
                    id="radio4"
                    style={{ marginLeft: "60px" }}
                  />{" "}
                  <label
                    for="radio4"
                    class="form-check-label pl-2"
                    style={{ color: "#7A7979" }}
                  >
                    {" "}
                    Others
                  </label>
                </fieldset>
              </Col>

              <Row>
                <Col lg="6">
                  <fieldset>
                    <label className="text-lg" style={{ width: "100%" }}>
                      Posted Date
                    </label>

                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      type={"date"}
                      name="firstname"
                      //   value={user.name}
                      //   onChange={getUserData}
                      placeholder="Enter No. of Openings
                "
                      required
                    />
                  </fieldset>
                </Col>

                <Col lg="6">
                  <fieldset>
                    <label className="text-lg" style={{ width: "100%" }}>
                      Additional Emails
                    </label>

                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      type={"email"}
                      name="firstname"
                      //   value={user.name}
                      //   onChange={getUserData}
                      placeholder="Enter Additional Emails
                "
                      required
                    />
                  </fieldset>
                </Col>
              </Row>
            </div>
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
          style={{ background: "none", color: "#C1C1C1" }}
          onClick={props.onHide}
        >
          Save as Draft
        </Button>
        <Button
          style={{ background: "none", color: "#C1C1C1" }}
          onClick={props.onHide}
        >
          Preview
        </Button>
        <Button
          style={{ background: "none", color: "#39BEC1" }}
          onClick={props.post}
        >
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export const MainProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);

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
              <h2 className="text-3xl robot">Company Profile</h2>
              <div
                style={{
                  float: "right",
                  display: "flex",
                  alignItems: "center",
                }}
                className="p-3 webkit"
              >
                <div
                  style={{
                    float: "right",
                    background: "white",
                    borderRadius: "20px",
                    border: "1px solid grey",
                  }}
                  className="p-3 webkit"
                >
                  <h2 className="text-xl" style={{ color: "#6A489C" }}>
                    Available Coins
                  </h2>
                  <h2 className="text-xl inline-flex font-semibold">
                    <BsCoin style={{ color: "#FBB040" }} />
                    100
                  </h2>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="m-3">
              <div className="boxshad py-5">
                <Row className="align-items-center">
                  <Col lg="2" className="webkit">
                    <Image
                      style={{ width: "100%" }}
                      src={require("../../../assets/Profile.png")}
                    />
                  </Col>
                  <Col lg="4">
                    <h2 className="text-3xl py-3 robot">
                      Gia (PVT) LTD <br />
                      <span className="text-xl" style={{ color: "#6A489C" }}>
                        A Service Like No Other
                      </span>
                    </h2>
                  </Col>
                  <Col lg="3">
                    <div className="text-left">
                      <ul style={{ color: "#6A489C", fontSize: "16px" }}>
                        <li>
                          <FontAwesomeIcon
                            icon={faUserClock}
                            style={{
                              color: "#39BEC1",

                              fontWeight: "bolder",
                            }}
                          />{" "}
                          Founded in 2000
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{
                              color: "#39BEC1",
                              fontWeight: "bolder",
                            }}
                          />{" "}
                          USA
                        </li>
                        <li>
                          {" "}
                          <FontAwesomeIcon
                            icon={faEarth}
                            style={{
                              color: "#39BEC1",
                              fontWeight: "bolder",
                            }}
                          />{" "}
                          https://www.me2work.com/
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="webkit" style={{ display: "grid" }}>
                      <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}
                        className="text-white border-rounded px-3"
                        style={{ background: "#39BEC1", border: "none" }}
                      >
                        <div
                          className="inline-flex"
                          style={{ fontSize: "18px" }}
                        >
                          <BsReceipt />
                          &nbsp; POST A JOB
                        </div>
                      </Button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />

                      <Button
                        onClick={handleShow}
                        className="text-white border-rounded px-3"
                        style={{
                          background: "#39BEC1",
                          border: "none",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          className="inline-flex"
                          style={{ fontSize: "20px" }}
                        >
                          <BsPencilSquare /> &nbsp; edit profile
                        </div>
                      </Button>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title style={{ color: "black" }}>
                            Edit Recruiter Profile
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Row>
                            <Col lg="6">
                              <h2
                                className="text-2xl"
                                style={{ color: "#39BEC1" }}
                              >
                                Personal Info
                              </h2>
                              <div className="p-3">
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      First Name
                                    </label>
                                    <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="fname"
                                      type={"text"}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder="Gia 

                "
                                    />
                                  </fieldset>
                                </Col>
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      Last Name
                                    </label>
                                    <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="lname"
                                      type={"text"}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder="Jay 

                "
                                    />
                                  </fieldset>
                                </Col>
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      Email Address
                                    </label>
                                    <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="email"
                                      type={"email"}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder="gaiaewreeytyrt@gmail.com 

                "
                                    />
                                  </fieldset>
                                </Col>
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      Phone Number
                                    </label>
                                    <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="email"
                                      type={"text"}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder="61453472

                "
                                    />
                                  </fieldset>
                                </Col>
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      Founded in
                                    </label>
                                    <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="email"
                                      type={"text"}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder="2000

                "
                                    />
                                  </fieldset>
                                </Col>
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      What makes us special
                                    </label>
                                    <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="email"
                                      type={"text"}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder="A Service Like No Other
                "
                                    />
                                  </fieldset>
                                </Col>
                              </div>
                            </Col>
                            <Col lg="6">
                              <h2
                                className="text-2xl"
                                style={{ color: "#39BEC1" }}
                              >
                                Company Info{" "}
                              </h2>
                              <div className="p-3">
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      Company Name
                                    </label>

                                    <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      type={"text"}
                                      name="firstname"
                                      //   value={user.name}
                                      //   onChange={getUserData}
                                      placeholder="Gia (PVT) LTD

                "
                                      required
                                    />
                                  </fieldset>
                                </Col>
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      Company Scope
                                    </label>

                                    <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      type={"text"}
                                      name="lastname"
                                      //   value={user.email}
                                      //   onChange={getUserData}
                                      placeholder="IT Industry
                "
                                      required
                                    />
                                  </fieldset>
                                </Col>
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      Salary Range
                                    </label>
                                    <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="Email"
                                      type={"text"}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder="https://www.me2work.com/
                "
                                    />
                                  </fieldset>
                                </Col>
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      Headquaters
                                    </label>
                                    <div style={{ display: "flex" }}>
                                      <input
                                        style={{ width: "100%" }}
                                        className="form-control"
                                        name="minwork"
                                        type={"text"}
                                        //   value={user.number}
                                        //   onChange={getUserData}
                                        placeholder="USA
                "
                                      />
                                    </div>
                                  </fieldset>
                                </Col>
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      Company Location
                                    </label>
                                    <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="Email"
                                      type={"text"}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder="Huston
                "
                                    />
                                  </fieldset>
                                </Col>
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      Description
                                    </label>
                                    <textarea
                                      placeholder="Description"
                                      className="form-control"
                                    />
                                    {/* <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="Email"
                                      type={"text"}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder="Huston
                "
                                    /> */}
                                  </fieldset>
                                </Col>
                              </div>
                            </Col>
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
                    </div>
                  </Col>
                </Row>
                {/* <hr className="my-2" />
              <Row className="align-items-center pl-4">
                <Col lg="3">
                  <div className="p3 py-3">
                    <h2 className="text-2xl">Experience</h2>
                    <br />
                    <h2 className="text-xl" style={{ color: "#7A7979" }}>
                      4
                    </h2>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="p3 py-3">
                    <h2 className="text-2xl">Salary Range</h2>
                    <br />
                    <h2 className="text-xl" style={{ color: "#7A7979" }}>
                      $15000 - $20,000
                    </h2>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="p3 py-3">
                    <h2 className="text-2xl">Location</h2>
                    <br />
                    <h2 className="text-xl" style={{ color: "#7A7979" }}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{
                          fontWeight: "bolder",
                        }}
                      />{" "}
                      Panam
                    </h2>
                  </div>
                </Col>
                <Col lg="3">
                  <Button
                    className="text-white border-rounded px-3"
                    style={{ background: "#39BEC1", border: "none" }}
                  >
                    View Profile
                  </Button>
                </Col>
              </Row> */}
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <h3 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Personal Info
                </h3>
                <Container>
                  <Row className="align-items-center ">
                    <Col lg="4">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Full Name</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Gia Jay
                        </h2>
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Email</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          gaiaewreeytyrt@gmail.com
                        </h2>
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Phone Number</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          61453472
                        </h2>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <h3 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Company Info
                </h3>
                <Container>
                  <Row className="align-items-center">
                    <Col lg="3">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Company Name</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Gia (PVT) LTD
                        </h2>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Company Scope</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          IT Industry
                        </h2>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">
                          No. of Employees
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          5000 Employees
                        </h2>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">
                          Company Location
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Huston
                        </h2>
                      </div>
                    </Col>
                    <Col lg="12" className="pt-4">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">
                          Company Description
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          A . It has survived t is a long established fact that
                          a reader will be distracted by the readable content of
                          a page when looking at its layout. The point of using
                          Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content
                          here, content here', making it look like readable
                          English.
                        </h2>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <hr style={{ border: "1px solid" }} />
                <div className="webkit pt-3">
                  <Button
                    className="mx-2 px-3 font-semibold"
                    style={{
                      background: "none",
                      fontSize: "20px",
                      border: "none",
                      color: "#39BEC1",
                    }}
                  >
                    SEE MORE DETAIL
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
