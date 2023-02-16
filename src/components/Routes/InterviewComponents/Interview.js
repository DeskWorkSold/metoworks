import React, { useState, Component } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import { BsBookmark, BsCoin, BsPencilSquare, BsReceipt } from "react-icons/bs";

import Modal from "react-bootstrap/Modal";
// import React, { Component } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Accordion from "react-bootstrap/Accordion";
import { useEffect } from "react";
import axios from "../../../utils/axios.api";
import { useNavigate } from "react-router-dom/dist";

function MyVerticallyCenteredModal(props) {
  return (
    <div>
      <Modal
        id="modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          {/* <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-center"
          >
            Post A Job
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="webkit">
          <h2 className="text-2xl font-bold">10 Tokens</h2>
          <p className="text-lg" style={{ color: "#C1C1C1" }}>
            10 Tokens to View Proﬁle
          </p>
          <div style={{ display: "inline-grid" }}>
            <Button
              className="text-white border-rounded px-5 py-3 mx-2"
              style={{ background: "#39BEC1", border: "none" }}
              onClick={props.onHide}
            >
              YES
            </Button>
            <Button
              className="border-rounded px-5 py-3 mx-2"
              style={{ background: "none", color: "#C1C1C1" }}
              onClick={props.onHide}
            >
              NO
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

function MyVerticallyCenteredModal1(props) {
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
                type={"date"}
                //   value={user.number}
                //   onChange={getUserData}
              />
            </fieldset>
          </Col>
          <Col lg="12">
            <fieldset>
              <label className="text-lg" style={{ width: "100%" }}>
                Interview Type
              </label>

              <Form.Select aria-label="Default select example">
                <option value="DEFAULT" disabled="">
                  Select Job Function
                </option>
                <option>HR &amp; Admin</option>
                <option>General Management</option>
                <option>Finance and Accounting</option>
                <option>Sales and Marketing</option>
                <option>Banking and Financial Institue Professionals</option>
                <option>Insurance Professionals (back-end functions</option>
                <option>IT Professionals (Specific Fields)</option>
                <option>Manufacturing</option>
                <option>Finance and Accounting</option>
                <option>Professional Designers</option>
                <option>Lecturers / Teachers</option>
                <option>Engineering / Architect</option>
                <option>Others</option>
              </Form.Select>
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
                type={"text"}
                name="Link"
                //   value={user.name}
                //   onChange={getUserData}
                placeholder="  "
                required
              />
            </fieldset>
          </Col>
          <Col lg="12">
            <fieldset>
              <label className="text-lg" style={{ width: "100%" }}>
                Other
              </label>

              <input
                style={{ width: "100%" }}
                className="form-control"
                type={"text"}
                name="firstname"
                //   value={user.name}
                //   onChange={getUserData}
                placeholder=" "
                required
              />
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
          onClick={props.post}
        >
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props) {
  const [isSalaryRange, setisSalaryRange] = useState({
    gte: "",
    lte: "",
  });
  const [isProjectTimeline, setIsProjectTimeline] = useState({});

  let date = new Date();
  const [isEmail, setIsEmail] = useState("");
  // console.log(isSalaryRange, 'saaaaaaaaaaaaaaaaaaaaaaaaaaalary');
  const [jobData, setJobData] = useState({
    title: "",
    industry: "",
    jobFunction: "",
    // jobSubFunction: "dummy",
    location: "",
    description: "",
    requirements: "",
    profession: "",
    educationLevel: "",
    empType: "",
    projectTimeline: { gte: "", lte: "" },
    postedDate: `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`,
    expiryDate: `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`,
    madeOfWork: "",
    noOfOpenings: "",
    salaryCurrency: "",
    salaryRange: { gte: isSalaryRange.gte, lte: isSalaryRange.lte },
    // salaryType : '', /// look after
    salaryPayFreq: "",
    additionalEmails: [],
    closed: false,
  });

  // console.log(jobData, 'jobDaaaaaaaataaa');

  // submitted : true when dfat post publised
  // const navigate = useNavigate();

  const PostFunc = () => {
    let Data = {
      title: jobData.title,
      industry: jobData.industry,
      jobFunction: jobData.jobFunction,
      location: jobData.location,
      description: jobData.description,
      requirements: jobData.requirements,
      profession: jobData.profession,
      projectTimeline: {
        gte: isProjectTimeline.gte,
        lte: isProjectTimeline.lte,
      },
      noOfOpenings: Number(jobData.noOfOpenings),
      postedDate: new Date(),
      salaryRange: {
        gte: Number(isSalaryRange.gte),
        lte: Number(isSalaryRange.lte),
      },
      expiryDate: new Date(),
      closed: false,
      modeOfWork: jobData.madeOfWork,
      submitted: true,
      educationLevel: jobData.educationLevel,
      empType: jobData.empType,
      salaryPayFreq: jobData.salaryPayFreq,
      salaryCurrency: jobData.salaryCurrency,
      additionalEmails: [isEmail],
    };
    let dummyData = {
      title: jobData.title,
      industry: jobData.industry,
      jobFunction: jobData.jobFunction,
      location: jobData.location,
      description: jobData.description,
      requirements: jobData.requirements,
      profession: jobData.profession,
      projectTimeline: {
        gte: isProjectTimeline.gte,
        lte: isProjectTimeline.lte,
      },
      noOfOpenings: Number(jobData.noOfOpenings),
      postedDate: new Date(),
      salaryRange: {
        gte: `${isSalaryRange.gte}`,
        lte: `${isSalaryRange.lte}`,
      },
      expiryDate: new Date(),
      closed: false,
      modeOfWork: jobData.madeOfWork,
      submitted: true,
      educationLevel: jobData.educationLevel,
      empType: jobData.empType,
      salaryPayFreq: jobData.salaryPayFreq,
      salaryCurrency: jobData.salaryCurrency,
      additionalEmails: [isEmail],
    };
    console.log(Data, "daaaaaaaaaaaaaaaaaaaaaataaaaaaaaaa");
    axios
      .post("api/v1/job-post", dummyData)
      .then((res) => {
        console.log(res, "data sended successfully");

        // navigate('/CompanyProfile')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const draftFunc = () => {
    axios
      .post("api/v1/job-post", jobData)
      .then((res) => {
        console.log(res, "data sended successfully");
        // navigate('/CompanyProfile')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const previewFunc = () => {
    axios
      .post("api/v1/job-post", jobData)
      .then((res) => {
        console.log(res, "data sended successfully");
        // navigate('/CompanyProfile')
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                    onChange={(e) =>
                      setJobData({ ...jobData, title: e.target.value })
                    }
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
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) =>
                      setJobData({ ...jobData, industry: e.target.value })
                    }
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
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) =>
                      setJobData({ ...jobData, jobFunction: e.target.value })
                    }
                  >
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
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) =>
                      setJobData({ ...jobData, jobSubFunction: e.target.value })
                    }
                  >
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
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) =>
                      setJobData({ ...jobData, location: e.target.value })
                    }
                  >
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
                      setJobData({ ...jobData, description: data });
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
                      // console.log({ event, editor, data });
                      setJobData({ ...jobData, requirements: data });
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
              {/* <Col lg="12">
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
                    onChange={(e) =>
                      setJobData({ ...jobData, profession: e.target.value })
                    }
                  />
                </fieldset>
              </Col> */}
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Education Level
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) =>
                      setJobData({ ...jobData, educationLevel: e.target.value })
                    }
                  >
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
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) =>
                      setJobData({ ...jobData, empType: e.target.value })
                    }
                  >
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
                    Project Timeline
                  </label>
                </fieldset>
              </Col>
              <Container>
                <Row>
                  <Col>
                    <label className="text-l" style={{ color: "#7A7979" }}>
                      Start :
                    </label>
                    <input
                      onChange={(e) =>
                        setIsProjectTimeline({
                          ...isProjectTimeline,
                          gte: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setIsProjectTimeline({
                          ...isProjectTimeline,
                          lte: e.target.value,
                        })
                      }
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
                    Profession
                  </label>
                  <input
                    style={{ width: "100%" }}
                    className="form-control"
                    name="firstname"
                    onChange={(e) =>
                      setJobData({ ...jobData, profession: e.target.value })
                    }
                    //   value={user.name}
                    //   onChange={getUserData}
                    placeholder="Enter Profession"
                    required
                  />
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

              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Mode of Work
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) =>
                      setJobData({ ...jobData, madeOfWork: e.target.value })
                    }
                  >
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
                    onChange={(e) =>
                      setJobData({ ...jobData, noOfOpenings: e.target.value })
                    }
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
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) =>
                      setJobData({ ...jobData, salaryCurrency: e.target.value })
                    }
                  >
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
                      onChange={(e) =>
                        setisSalaryRange({
                          ...isSalaryRange,
                          gte: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setisSalaryRange({
                          ...isSalaryRange,
                          lte: e.target.value,
                        })
                      }
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
                    value="Salary Negotiable"
                    style={{ marginLeft: "60px" }}
                    onChange={(e) =>
                      setJobData({ ...jobData, salaryType: e.target.value })
                    }
                  />
                  <label
                    class="form-check-label"
                    for="exampleRadio1"
                    style={{ color: "#7A7979" }}
                  >
                    Salary Negotiable
                  </label>
                  <input
                    type="radio"
                    name="radios"
                    class="form-check-input"
                    id="exampleRadio2"
                    value="Project Based"
                    style={{ marginLeft: "60px" }}
                    onChange={(e) =>
                      setJobData({ ...jobData, salaryType: e.target.value })
                    }
                  />
                  <label
                    class="form-check-label"
                    for="exampleRadio2"
                    style={{ color: "#7A7979" }}
                  >
                    Project Based
                  </label>
                  <input
                    type="radio"
                    name="radios"
                    class="form-check-input"
                    id="exampleRadio3"
                    style={{ marginLeft: "60px" }}
                    value="Others"
                    onChange={(e) =>
                      setJobData({ ...jobData, salaryType: e.target.value })
                    }
                  />
                  <label
                    class="form-check-label"
                    for="exampleRadio3"
                    style={{ color: "#7A7979" }}
                  >
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
                    value="Per Day"
                    style={{ marginLeft: "60px" }}
                    onChange={(e) =>
                      setJobData({ ...jobData, salaryPayFreq: e.target.value })
                    }
                  />
                  <label
                    for="radio1"
                    class="form-check-label pl-2"
                    style={{ color: "#7A7979" }}
                  >
                    Per Day
                  </label>
                  <input
                    type="radio"
                    class="form-check-input"
                    name="bsradio"
                    id="radio2"
                    value="per Week"
                    style={{ marginLeft: "60px" }}
                    onChange={(e) =>
                      setJobData({ ...jobData, salaryPayFreq: e.target.value })
                    }
                  />
                  <label
                    for="radio2"
                    class="form-check-label pl-2"
                    style={{ color: "#7A7979" }}
                  >
                    Per Week
                  </label>
                  <input
                    type="radio"
                    class="form-check-input"
                    name="bsradio"
                    id="radio3"
                    value="per Month"
                    style={{ marginLeft: "60px" }}
                    onChange={(e) =>
                      setJobData({ ...jobData, salaryPayFreq: e.target.value })
                    }
                  />
                  <label
                    for="radio3"
                    class="form-check-label pl-2"
                    style={{ color: "#7A7979" }}
                  >
                    Per Month
                  </label>
                  <input
                    type="radio"
                    class="form-check-input"
                    name="bsradio"
                    id="radio4"
                    value="others"
                    style={{ marginLeft: "60px" }}
                    onChange={(e) =>
                      setJobData({ ...jobData, salaryPayFreq: e.target.value })
                    }
                  />
                  <label
                    for="radio4"
                    class="form-check-label pl-2"
                    style={{ color: "#7A7979" }}
                  >
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
                      name="firstname"
                      //   value={user.name}
                      //   onChange={getUserData}
                      disabled
                      value={`${date.getDate()}-${
                        date.getMonth() + 1
                      }-${date.getFullYear()}`}
                      placeholder="Enter No. of Openings"
                      // onChange={(e) => setJobData({...jobData, postedDate : e.target.value})}
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
                      onChange={(e) => setIsEmail(e.target.value)}
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
          // onClick={props.onHide}
          onClick={() => draftFunc()}
        >
          Save as Draft
        </Button>
        <Button
          style={{ background: "none", color: "#C1C1C1" }}
          // onClick={props.onHide}
          onClick={() => previewFunc()}
        >
          Preview
        </Button>
        <Button
          style={{ background: "none", color: "#39BEC1" }}
          onClick={() => PostFunc()}
        >
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      // show={lgShow}
      // onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Offer Job Position
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
                //   value={user.number}
                //   onChange={getUserData}
              />
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
                name="date"
                type={"text"}
                //   value={user.number}
                //   onChange={getUserData}
              />
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
                type={"text"}
                name="Link"
                //   value={user.name}
                //   onChange={getUserData}
                placeholder="  "
                required
              />
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
                type={"text"}
                name="firstname"
                //   value={user.name}
                //   onChange={getUserData}
                placeholder=" "
                required
              />
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
          onClick={props.onHide}
        >
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export const Interview = () => {
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [OfferShow, setOfferShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);
  const [interviewData, setInterviewData] = useState({});
  const [filteredCategory, setFilteredCategory] = useState("");
  console.log(filteredCategory, "filterrrrrrrrrred");
  const [isSearch, setIsSearch] = useState({
    keyword: "",
    filter: [{ term: { internalState: "PENDING" } }],
  });

  useEffect(() => {
    axios
      .get(`api/v1/interview?stage=schedule&size=2&from=0`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        setInterviewData(data);
        let filteredData = data.map((items) => {
          return items.job.title;
        });
        setFilteredCategory([...new Set(filteredData)]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchFunc = () => {
    axios
      .post(`api/v1/interview/offer/history/search?size=3&from=0`, isSearch)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        // setInterviewData(data);
        // let filteredData = data.map((items => {
        //   return items.job.title
        // }))
        // setFilteredCategory([...new Set(filteredData)])
      })
      .catch((err) => {
        console.log(err);
      });
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
              <h2 className="text-3xl robot font-bold">Interviews</h2>
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
                    onClick={() => setSmShow(true)}
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
                <MyVerticallyCenteredModal2
                  show={smShow}
                  onHide={() => setSmShow(false)}
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
        </Row>
      </Container>
      <hr className="my-3" />
      <Container>
        <Row>
          <Col
            lg="6"
            style={{ textAlign: "-webkit-left" }}
            className="font-semibold"
          >
            <Row>
              <Col lg="6">
                <fieldset>
                  <label
                    className="text-lg"
                    style={{ width: "100%", color: "rgb(148, 147, 147)" }}
                  >
                    Filter By
                  </label>
                  <Form.Select aria-label="Default select example">
                    <option value="DEFAULT" disabled="">
                      Choose State
                    </option>
                    <option value="PENDING">Pending</option>
                    <option value="CONFIRMED">Accepted</option>
                    <option value="REJECT">Declined</option>
                    <option value="REVISION">In Revision</option>
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
            </Row>
          </Col>
          <Col lg="6" style={{ textAlign: "-webkit-right" }}>
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
                    className="text-white border-rounded px-3"
                    style={{ background: "#39BEC1", border: "none" }}
                    onClick={() => searchFunc()}
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
        </Row>
      </Container>
      <Container>
        <div>
          <h2 className="text-2xl">20 Total Candidates</h2>
        </div>
        <Accordion defaultActiveKey="0" flush>
          {filteredCategory.length > 0 &&
            filteredCategory.map((items, keys) => {
              return (
                <Accordion.Item eventKey="0" key={keys}>
                  <Accordion.Header>
                    {items} &#160;&#160;&#160;
                    <span
                      className="fontpxx"
                      style={{ color: "rgb(148,147,147)", float: "right" }}
                    >
                      (02 Candidates)
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    {interviewData
                      .filter((filter) => {
                        return filter.job.title === items;
                      })
                      .map((events, key) => {
                        return (
                          <Container key={key}>
                            <Row className="align-items-center">
                              <Col lg="12">
                                <div className="m-3">
                                  <div className="boxshad py-3">
                                    <Row className="align-items-center">
                                      <Col
                                        lg="12"
                                        style={{ textAlign: "-webkit-right" }}
                                      >
                                        <div
                                          style={{
                                            textAlign: "-webkit-right",
                                            float: "right",
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                          className="webkit"
                                        >
                                          <Button
                                            className="border-rounded text-2xl"
                                            style={{
                                              background: "none",
                                              color: "#C1C1C1",
                                            }}
                                          >
                                            <BsBookmark />
                                          </Button>
                                        </div>
                                        <div
                                          style={{
                                            float: "right",
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                          className="webkit"
                                        >
                                          <div style={{ display: "block" }}>
                                            <Button
                                              // onClick={handleShow}
                                              className="text-white border-rounded px-3 mx-3 py-3 w-40"
                                              style={{
                                                background: "rgb(58,182,73)",
                                                border: "none",
                                                marginTop: "10px",
                                                marginBottom: "10px",
                                              }}
                                            >
                                              Good Fit
                                            </Button>
                                            <Button
                                              // onClick={handleShow}
                                              className="text-white border-rounded px-3 mx-3 py-3 w-40"
                                              style={{
                                                background: "rgb(255,0,0)",
                                                border: "none",
                                                marginTop: "10px",
                                                marginBottom: "10px",
                                              }}
                                            >
                                              Not Quite
                                            </Button>
                                            <Button
                                              className="text-white border-rounded px-3 mx-3 py-3 w-40"
                                              style={{
                                                background: "rgb(41,172,226)",
                                                border: "none",
                                                marginTop: "10px",
                                                marginBottom: "10px",
                                              }}
                                            >
                                              Good to Keep
                                            </Button>
                                            {/* <Button
                                    className="border-rounded text-2xl"
                                    style={{
                                      background: "none",
                                      color: "#C1C1C1",
                                    }}
                                  >
                                    <BsBookmark />
                                  </Button> */}
                                          </div>
                                        </div>
                                      </Col>
                                      <Col lg="2" className="webkit">
                                        <Image
                                          style={{ width: "100%" }}
                                          src={require("../../../assets/Profile.png")}
                                        />
                                      </Col>
                                      <Col lg="7">
                                        <h2 className="py-3">
                                          <span
                                            style={{ color: "#39bec1" }}
                                            className="text-2xl font-bold robot"
                                          >
                                            {events.freelancer.firstName +
                                              " " +
                                              events.freelancer.lastName}
                                          </span>{" "}
                                          <br />
                                          <span
                                            className="text-2xl"
                                            style={{ color: "black" }}
                                          >
                                            Doctor
                                          </span>
                                          <br />
                                          <br />
                                          <span
                                            style={{
                                              color: "rgb(148,147,147)",
                                            }}
                                          >
                                            {events.freelancer.aboutMe}
                                          </span>
                                        </h2>
                                      </Col>

                                      <Col lg="3">
                                        <div
                                          className="webkit"
                                          style={{ display: "grid" }}
                                        >
                                          <Button
                                            variant="primary"
                                            onClick={() => setModalShow(true)}
                                            className="text-white border-rounded px-3 py-3 mx-2"
                                            style={{
                                              background: "#39BEC1",
                                              border: "none",
                                            }}
                                          >
                                            VIEW PROFILE
                                          </Button>
                                          <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Container>
                                      <Row className="align-items-center block-for-res">
                                        <Col>
                                          <div className="p3">
                                            <h2 className="text-xl font-semibold">
                                              Experience
                                            </h2>

                                            <h2
                                              className="text-lg"
                                              style={{ color: "#7A7979" }}
                                            >
                                              4 Year
                                            </h2>
                                          </div>
                                        </Col>
                                        <Col>
                                          <div className="p3">
                                            <h2 className="text-xl font-semibold">
                                              Salary Range
                                            </h2>

                                            <h2
                                              className="text-lg "
                                              style={{ color: "#7A7979" }}
                                            >
                                              $15000 - $20,000
                                            </h2>
                                          </div>
                                        </Col>
                                        <Col>
                                          <div className="p3">
                                            <h2 className="text-xl font-semibold">
                                              Location
                                            </h2>

                                            <h2
                                              className="text-lg "
                                              style={{ color: "#7A7979" }}
                                            >
                                              {" "}
                                              {events.location}
                                            </h2>
                                          </div>
                                        </Col>
                                        <Col>
                                          <div className="p3">
                                            <Button
                                              onClick={() => setLgShow(true)}
                                              className=" border-rounded py-3 w-44"
                                              style={{
                                                background: "none",
                                                fontSize: "15px",
                                                border:
                                                  "1px solid rgb(57, 190, 193)",
                                                color: "rgb(57, 190, 193)",
                                                marginTop: "10px",
                                                marginBottom: "10px",
                                              }}
                                            >
                                              ARRANGE INTERVIEW
                                            </Button>

                                            <MyVerticallyCenteredModal1
                                              show={lgShow}
                                              onHide={() => setLgShow(false)}
                                            />
                                          </div>
                                        </Col>
                                        <Col>
                                          <div className="p3">
                                            <Button
                                              onClick={() => setOfferShow(true)}
                                              className=" border-rounded py-3 w-44"
                                              style={{
                                                background: "none",
                                                fontSize: "15px",
                                                border:
                                                  "1px solid rgb(57, 190, 193)",
                                                color: "rgb(57, 190, 193)",
                                                marginTop: "10px",
                                                marginBottom: "10px",
                                              }}
                                            >
                                              OFFER
                                            </Button>
                                            <MyVerticallyCenteredModal3
                                              show={OfferShow}
                                              onHide={() => setOfferShow(false)}
                                            />
                                          </div>
                                        </Col>
                                      </Row>
                                    </Container>
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
                            </Row>
                          </Container>
                        );
                      })}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
        </Accordion>
      </Container>
    </Container>
  );
};
