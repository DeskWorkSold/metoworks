import React, { useState, Component } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import { BsBookmark, BsCoin, BsPencilSquare, BsReceipt } from "react-icons/bs";
import {
  faEarth,
  faLocationDot,
  faPaperPlane,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
// import React, { Component } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function MyVerticallyCenteredModal(props) {
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
                  <Form.Select aria-label="Default select example">
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
                      <label className="text-lg">Start :</label>
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
                      <label className="text-lg">End :</label>
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
                    <label className="text-lg" style={{ color: "#7A7979" }}>
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
                    <label className="text-lg" style={{ color: "#7A7979" }}>
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
                    <label className="text-lg" style={{ color: "#7A7979" }}>
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
                    <label className="text-lg" style={{ color: "#7A7979" }}>
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

export const DraftJob = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
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
              <h2 className="text-3xl robot">Draft jobs</h2>
              <div
                style={{
                  float: "right",
                  display: "flex",
                  alignItems: "center",
                }}
                className="p-3 webkit"
              >
                <div className="inline-flex" style={{ fontSize: "18px" }}>
                  <Button
                    variant="primary"
                    id="post"
                    onClick={() => setModalShow(true)}
                    className="text-white border-rounded px-3 py-3 mx-2"
                    style={{
                      background: "#39BEC1",
                      border: "none",
                      display: "flex",
                    }}
                  >
                    <BsReceipt style={{ fontSize: "23px" }} />
                    &nbsp; POST A JOB
                  </Button>
                </div>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <div
                  style={{
                    width: "155px",
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
              <div className="boxshad">
                <div
                  style={{
                    // display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="des-flex"
                >
                  <div style={{ display: "block" }}>
                    <h2 className="text-3xl robot" style={{ color: "#39BEC1" }}>
                      Doctor for Child
                    </h2>
                    <p style={{ color: "#7A7979" }}>Full Time</p>
                  </div>
                  <div
                    style={{
                      float: "right",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="p-3 webkit"
                  >
                    <div style={{ display: "block" }}>
                      <Button
                        // onClick={handleShow}
                        className="text-white border-rounded px-3"
                        style={{
                          background: "#39BEC1",
                          border: "none",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          className="inline-flex"
                          style={{ fontSize: "20px" }}
                        >
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            style={{
                              color: "white",
                              background: "#39BEC1",
                              //   padding: "6px",
                              borderRadius: "100px",
                              fontWeight: "bolder",
                              //   height: "34px",
                              //   width: "34px",
                              fontSize: "22px",
                              //   marginRight: "10px",
                            }}
                          />{" "}
                          &nbsp; PUBLISHED
                        </div>
                      </Button>
                      <Button
                        onClick={handleShow}
                        className="text-white border-rounded px-3 mx-3"
                        style={{
                          background: "#39BEC1",
                          border: "none",
                          marginTop: "10px",
                          marginBottom: "10px",
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
                      <p>
                        Posted Date : Jan 2023 &nbsp;&nbsp;&nbsp;Expiry Date :
                        Feb 2023
                      </p>
                    </div>
                  </div>
                </div>
                <Container>
                  <Row className="align-items-center block-for-res">
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Company Name</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Gia (PVT) LTD
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Job Industry</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Hospital
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Salary Range</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          HKD 3 - HKD 6
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Location</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Central and Western
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">
                          No. of candidates
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          4
                        </h2>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <hr style={{ border: "1px solid" }} />
                <Container>
                  <Row className="align-items-center">
                    <Col lg="11">
                      <div className="pt-3">
                        <h2 className="text-xl font-semibold">
                          Company Description
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard
                          dummy text ever since the 1500s, when avn unknown
                          printer took a galley of type and scramble.
                          <span style={{ color: "#39BEC1" }}>SEE MORE</span>
                        </h2>
                      </div>
                    </Col>
                    <Col lg="1">
                      <div className="p-3">
                        <Button
                          className="text-lg mr-3"
                          style={{ background: "none", color: "#FF0000" }}
                        >
                          CLOSE
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <div
                  style={{
                    // display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="des-flex"
                >
                  <div style={{ display: "block" }}>
                    <h2 className="text-3xl robot" style={{ color: "#39BEC1" }}>
                      Doctor for Child
                    </h2>
                    <p style={{ color: "#7A7979" }}>Full Time</p>
                  </div>
                  <div
                    style={{
                      float: "right",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="p-3 webkit"
                  >
                    <div style={{ display: "block" }}>
                      <Button
                        // onClick={handleShow}
                        className="text-white border-rounded px-3"
                        style={{
                          background: "#39BEC1",
                          border: "none",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          className="inline-flex"
                          style={{ fontSize: "20px" }}
                        >
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            style={{
                              color: "white",
                              background: "#39BEC1",
                              //   padding: "6px",
                              borderRadius: "100px",
                              fontWeight: "bolder",
                              //   height: "34px",
                              //   width: "34px",
                              fontSize: "22px",
                              //   marginRight: "10px",
                            }}
                          />{" "}
                          &nbsp; PUBLISHED
                        </div>
                      </Button>
                      <Button
                        onClick={handleShow1}
                        className="text-white border-rounded px-3 mx-3"
                        style={{
                          background: "#39BEC1",
                          border: "none",
                          marginTop: "10px",
                          marginBottom: "10px",
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
                        show={show1}
                        onHide={handleClose1}
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
                            onClick={handleClose1}
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
                      <p>
                        Posted Date : Jan 2023 &nbsp;&nbsp;&nbsp;Expiry Date :
                        Feb 2023
                      </p>
                    </div>
                  </div>
                </div>
                <Container>
                  <Row className="align-items-center block-for-res">
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Company Name</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Gia (PVT) LTD
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Job Industry</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Hospital
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Salary Range</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          HKD 3 - HKD 6
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Location</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Central and Western
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">
                          No. of candidates
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          4
                        </h2>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <hr style={{ border: "1px solid" }} />
                <Container>
                  <Row className="align-items-center">
                    <Col lg="11">
                      <div className="pt-3">
                        <h2 className="text-xl font-semibold">
                          Company Description
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard
                          dummy text ever since the 1500s, when avn unknown
                          printer took a galley of type and scramble.
                          <span style={{ color: "#39BEC1" }}>SEE MORE</span>
                        </h2>
                      </div>
                    </Col>
                    <Col lg="1">
                      <div className="p-3">
                        <Button
                          className="text-lg mr-3"
                          style={{ background: "none", color: "#FF0000" }}
                        >
                          CLOSE
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <div
                  style={{
                    // display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="des-flex"
                >
                  <div style={{ display: "block" }}>
                    <h2 className="text-3xl robot" style={{ color: "#39BEC1" }}>
                      Doctor for Child
                    </h2>
                    <p style={{ color: "#7A7979" }}>Full Time</p>
                  </div>
                  <div
                    style={{
                      float: "right",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="p-3 webkit"
                  >
                    <div style={{ display: "block" }}>
                      <Button
                        // onClick={handleShow}
                        className="text-white border-rounded px-3"
                        style={{
                          background: "#39BEC1",
                          border: "none",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          className="inline-flex"
                          style={{ fontSize: "20px" }}
                        >
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            style={{
                              color: "white",
                              background: "#39BEC1",
                              //   padding: "6px",
                              borderRadius: "100px",
                              fontWeight: "bolder",
                              //   height: "34px",
                              //   width: "34px",
                              fontSize: "22px",
                              //   marginRight: "10px",
                            }}
                          />{" "}
                          &nbsp; PUBLISHED
                        </div>
                      </Button>
                      <Button
                        onClick={handleShow2}
                        className="text-white border-rounded px-3 mx-3"
                        style={{
                          background: "#39BEC1",
                          border: "none",
                          marginTop: "10px",
                          marginBottom: "10px",
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
                        show={show2}
                        onHide={handleClose2}
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
                            onClick={handleClose2}
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
                      <p>
                        Posted Date : Jan 2023 &nbsp;&nbsp;&nbsp;Expiry Date :
                        Feb 2023
                      </p>
                    </div>
                  </div>
                </div>
                <Container>
                  <Row className="align-items-center block-for-res">
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Company Name</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Gia (PVT) LTD
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Job Industry</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Hospital
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Salary Range</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          HKD 3 - HKD 6
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Location</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Central and Western
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">
                          No. of candidates
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          4
                        </h2>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <hr style={{ border: "1px solid" }} />
                <Container>
                  <Row className="align-items-center">
                    <Col lg="11">
                      <div className="pt-3">
                        <h2 className="text-xl font-semibold">
                          Company Description
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard
                          dummy text ever since the 1500s, when avn unknown
                          printer took a galley of type and scramble.
                          <span style={{ color: "#39BEC1" }}>SEE MORE</span>
                        </h2>
                      </div>
                    </Col>
                    <Col lg="1">
                      <div className="p-3">
                        <Button
                          className="text-lg mr-3"
                          style={{ background: "none", color: "#FF0000" }}
                        >
                          CLOSE
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <div
                  style={{
                    // display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="des-flex"
                >
                  <div style={{ display: "block" }}>
                    <h2 className="text-3xl robot" style={{ color: "#39BEC1" }}>
                      Doctor for Child
                    </h2>
                    <p style={{ color: "#7A7979" }}>Full Time</p>
                  </div>
                  <div
                    style={{
                      float: "right",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="p-3 webkit"
                  >
                    <div style={{ display: "block" }}>
                      <Button
                        // onClick={handleShow}
                        className="text-white border-rounded px-3"
                        style={{
                          background: "#39BEC1",
                          border: "none",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          className="inline-flex"
                          style={{ fontSize: "20px" }}
                        >
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            style={{
                              color: "white",
                              background: "#39BEC1",
                              //   padding: "6px",
                              borderRadius: "100px",
                              fontWeight: "bolder",
                              //   height: "34px",
                              //   width: "34px",
                              fontSize: "22px",
                              //   marginRight: "10px",
                            }}
                          />{" "}
                          &nbsp; PUBLISHED
                        </div>
                      </Button>
                      <Button
                        onClick={handleShow3}
                        className="text-white border-rounded px-3 mx-3"
                        style={{
                          background: "#39BEC1",
                          border: "none",
                          marginTop: "10px",
                          marginBottom: "10px",
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
                        show={show3}
                        onHide={handleClose3}
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
                            onClick={handleClose3}
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
                      <p>
                        Posted Date : Jan 2023 &nbsp;&nbsp;&nbsp;Expiry Date :
                        Feb 2023
                      </p>
                    </div>
                  </div>
                </div>
                <Container>
                  <Row className="align-items-center block-for-res">
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Company Name</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Gia (PVT) LTD
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Job Industry</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Hospital
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Salary Range</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          HKD 3 - HKD 6
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Location</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          Central and Western
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">
                          No. of candidates
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          4
                        </h2>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <hr style={{ border: "1px solid" }} />
                <Container>
                  <Row className="align-items-center">
                    <Col lg="11">
                      <div className="pt-3">
                        <h2 className="text-xl font-semibold">
                          Company Description
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard
                          dummy text ever since the 1500s, when avn unknown
                          printer took a galley of type and scramble.
                          <span style={{ color: "#39BEC1" }}>SEE MORE</span>
                        </h2>
                      </div>
                    </Col>
                    <Col lg="1">
                      <div className="p-3">
                        <Button
                          className="text-lg mr-3"
                          style={{ background: "none", color: "#FF0000" }}
                        >
                          CLOSE
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
