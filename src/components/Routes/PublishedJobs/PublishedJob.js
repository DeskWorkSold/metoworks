import React, { useState, Component } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import { BsBookmark, BsCoin, BsPencilSquare, BsReceipt } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
// import React, { Component } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate } from "react-router-dom/dist";

import { useEffect } from "react";
import axios from "../../../utils/axios.api";

function MyVerticallyCenteredModal(props) {
  const [isSalaryRange, setisSalaryRange] = useState({
    gte: "",
    lte: "",
  });
  const [isProjectTimeline, setIsProjectTimeline] = useState({
    gte: "",
    lte: "",
  });

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
    postedDate: new Date(),
    expiryDate: "",
    madeOfWork: "",
    noOfOpenings: "",
    salaryCurrency: "",
    salaryRange: { gte: isSalaryRange.gte, lte: isSalaryRange.lte },
    // salaryType : '', /// look after
    salaryPayFreq: "",
    additionalEmails: [],
    closed: false,
  });

  useEffect(() => {
    if (jobData && jobData.postedDate && !jobData.expiryDate) {
      // let expiryDate = `${jobData.postedDate.getDate()}-${
      //   Number(jobData.postedDate.getMonth()) + 1
      // }-${jobData.postedDate.getFullYear()}`;
      if (jobData.postedDate.getMonth() < 11) {
        let expiryDate = `${jobData.postedDate.getDate()}-${
          Number(jobData.postedDate.getMonth()) + 2
        }-${jobData.postedDate.getFullYear()}`;
        expiryDate = expiryDate;
        setJobData({ ...jobData, expiryDate: expiryDate });
      } else {
        let expiryDate = `${jobData.postedDate.getDate()}-${1}-${
          Number(jobData.postedDate.getFullYear()) + 1
        }`;
        setJobData({ ...jobData, expiryDate: expiryDate });
      }
    }
  }, [jobData]);

  // submitted : true when dfat post publised
  const navigate = useNavigate();

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
      noOfOpenings: jobData.noOfOpenings,
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

    console.log(Data, "daaaaaaaaaaaaaaaaaaaaaataaaaaaaaaa");
    axios
      .post("api/v1/job-post", Data)
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

export const PublishedJob = () => {
  const [modalShowPublish, setModalShowPublish] = React.useState(false);
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
  const [searchData, setSearchData] = useState({});

  const date = new Date();
  console.log(searchData, "daaaaaaaaataaaaaaaaaaaa");
  useEffect(() => {
    axios
      .get(`api/v1/job-post?from=0&size=4&submitted=true`)
      .then((res) => {
        let data = res.data.data.data;
        let expdata = data.filter((e, i) => {
          return e._source.createdAt === new Date().getDate();
        });
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const isDate = searchData[0]?._source?.createdAt;
  console.log(isDate, "daaaaaaaaaaaaaaaaaaaaateeeeeeeeeeeeeee");

  const Content = (props) => {
    const { data } = props;
    return (
      <div className="container">
        <h2>{data}</h2>
      </div>
    );
  };
  const Content1 = () => {
    return (
      <div className="container">
        <h2>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when avn unknown printer took a galley of type and scramble.
        </h2>
      </div>
    );
  };

  // Published edit

  // edit
  function MyVerticallyCenteredModalPublish(props) {
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
            <Modal.Title style={{ color: "black" }}>
              Edit Recruiter Profile
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col lg="6">
                <h2 className="text-2xl" style={{ color: "#39BEC1" }}>
                  Personal Info
                </h2>
                <div className="p-3">
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        First Name
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="fname"
                        type={"text"}
                        placeholder="Gia 

                "
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Last Name
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="lname"
                        type={"text"}
                        placeholder="Jay 

                "
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Email Address
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="email"
                        type={"email"}
                        placeholder="gaiaewreeytyrt@gmail.com 

                "
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Phone Number
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="email"
                        type={"text"}
                        placeholder="61453472

                "
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Founded in
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="email"
                        type={"text"}
                        placeholder="2000

                "
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        What makes us special
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="email"
                        type={"text"}
                        placeholder="A Service Like No Other
                "
                      />
                    </fieldset>
                  </Col>
                </div>
              </Col>
              <Col lg="6">
                <h2 className="text-2xl" style={{ color: "#39BEC1" }}>
                  Company Info{" "}
                </h2>
                <div className="p-3">
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Company Name
                      </label>

                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        type={"text"}
                        name="firstname"
                        placeholder="Gia (PVT) LTD

                "
                        required
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Company Scope
                      </label>

                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        type={"text"}
                        name="lastname"
                        placeholder="IT Industry
                "
                        required
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Salary Range
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="Email"
                        type={"text"}
                        placeholder="https://www.me2work.com/
                "
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Headquaters
                      </label>
                      <div style={{ display: "flex" }}>
                        <input
                          style={{ width: "100%" }}
                          className="form-control"
                          name="minwork"
                          type={"text"}
                          placeholder="USA
                "
                        />
                      </div>
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Company Location
                      </label>
                      <input
                        style={{ width: "100%" }}
                        className="form-control"
                        name="Email"
                        type={"text"}
                        placeholder="Huston
                "
                      />
                    </fieldset>
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
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

  const modalshow = (items) => {
    console.log(items, "funtion items");
    if (items.clicked == true) {
      items.clicked = false;
      setModalShowPublish(false);
    } else {
      setModalShowPublish(true);
      items.clicked = true;
    }
  };

  const btnEdit = (items) => {
    modalshow(items);
    // setEditIsExperienceData(event);
  };
  // Published edit End
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
              <h2 className="text-3xl robot">Published jobs</h2>
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
          <Container>
            <Tabs>
              <TabList style={{ background: "none", textAlign: "left" }}>
                <Tab>ACTIVE JOBS</Tab>
                <Tab>EXPIRED JOBS</Tab>
              </TabList>

              <TabPanel>
                <Row>
                  {searchData.length > 0 &&
                    searchData.map((items, keys) => {
                      


                      let expiry = items._source.expiryDate;

                      expiry = new Date(expiry);
                      let expired = "";
                      console.log(typeof expiry, "expiry");
                      if (expiry) {
                        let time = expiry.getTime();
                        let todayTime = new Date().getTime();
                        let timeDifference = time - todayTime;

                        expired = Math.floor(
                          timeDifference / 1000 / 60 / 60 / 24
                        );
                      }
                      let data = []
                      console.log(data,'dataaaaaaaaa')
                      console.log(expired, "exp");
                      if (expired > 0) {
                        
                        return (  
                        
                          <Col lg="12" key={keys}>
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
                                    <h2
                                      className="text-3xl robot"
                                      style={{ color: "#39BEC1" }}
                                    >
                                      {items?._source?.title}
                                    </h2>
                                    <p style={{ color: "#7A7979" }}>
                                      {items?._source?.empType}
                                    </p>
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
                                        style={{
                                          background: "none",
                                          color: "#39BEC1",
                                        }}
                                        //   onClick={props.post}
                                      >
                                        ACTIVE
                                      </Button>
                                      <Button
                                        onClick={handleShow}
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
                                          onClick={() => btnEdit(items)}
                                        >
                                          <BsPencilSquare /> &nbsp; edit profile
                                        </div>
                                      </Button>
                                      {items.clicked == true && (
                                        <MyVerticallyCenteredModalPublish
                                          show={modalShowPublish}
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
                                                  <div
                                                    style={{ display: "flex" }}
                                                  >
                                                    <input
                                                      style={{ width: "100%" }}
                                                      className="form-control"
                                                      name="minwork"
                                                      type={"text"}
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
                                          style={{
                                            background: "none",
                                            color: "#C1C1C1",
                                          }}
                                        >
                                          Cancel
                                        </Button>
                                        <Button
                                          variant="primary"
                                          style={{
                                            background: "none",
                                            color: "#39BEC1",
                                          }}
                                        >
                                          Save
                                        </Button>
                                      </Modal.Footer>
                                    </Modal> */}
                                      <p>
                                        Posted Date :{" "}
                                        {items?._source?.createdAt}{" "}
                                        &nbsp;&nbsp;&nbsp;Expiry Date :{" "}
                                        {items?._source?.expiryDate}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <Container>
                                  <Row className="align-items-center block-for-res">
                                    <Col>
                                      <div className="p3">
                                        <h2 className="text-xl font-semibold">
                                          Company Name
                                        </h2>

                                        <h2
                                          className="text-lg"
                                          style={{ color: "#7A7979" }}
                                        >
                                          {items?._source?.companyName}
                                        </h2>
                                      </div>
                                    </Col>
                                    <Col>
                                      <div className="p3">
                                        <h2 className="text-xl font-semibold">
                                          Job Industry
                                        </h2>

                                        <h2
                                          className="text-lg"
                                          style={{ color: "#7A7979" }}
                                        >
                                          {items?._source?.industry}
                                        </h2>
                                      </div>
                                    </Col>
                                    <Col>
                                      <div className="p3">
                                        <h2 className="text-xl font-semibold">
                                          Salary Range
                                        </h2>

                                        <h2
                                          className="text-lg"
                                          style={{ color: "#7A7979" }}
                                        >
                                          HKD {items?._source?.salaryRange.gte}{" "}
                                          - HKD{" "}
                                          {items?._source?.salaryRange.lte}
                                        </h2>
                                      </div>
                                    </Col>
                                    <Col>
                                      <div className="p3">
                                        <h2 className="text-xl font-semibold">
                                          Location
                                        </h2>

                                        <h2
                                          className="text-lg"
                                          style={{ color: "#7A7979" }}
                                        >
                                          {items?._source?.location}
                                        </h2>
                                      </div>
                                    </Col>
                                    <Col>
                                      <div className="p3">
                                        <h2 className="text-xl font-semibold">
                                          No. of candidates
                                        </h2>

                                        <h2
                                          className="text-lg"
                                          style={{ color: "#7A7979" }}
                                        >
                                          {items?._source?.noOfOpenings}
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

                                        <h2
                                          className="text-lg font-semibold"
                                          style={{ color: "#7A7979" }}
                                        >
                                          <Content
                                            data={items?._source?.description.replace(
                                              /(<([^>]+)>)/gi,
                                              ""
                                            )}
                                          />
                                        </h2>
                                      </div>
                                    </Col>
                                    <Col lg="1">
                                      <div className="p-3">
                                        <Button
                                          className="text-lg mr-3"
                                          style={{
                                            background: "none",
                                            color: "#FF0000",
                                          }}
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
                        );
                      }
                    })}
                </Row>
              </TabPanel>
              <TabPanel>
                <Row>
                  {searchData &&
                    searchData.length > 0 &&
                    searchData.map((items, key) => {
                      let expiry = items._source.expiryDate;

                      expiry = new Date(expiry);
                      let expired = "";
                      console.log(typeof expiry, "expiry");
                      if (expiry) {
                        let time = expiry.getTime();
                        let todayTime = new Date().getTime();
                        let timeDifference = time - todayTime;

                        expired = Math.floor(
                          timeDifference / 1000 / 60 / 60 / 24
                        );
                      }
                      console.log(expired, "exp");

                      if (expired < 0) {
                        return (
                          <div>
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
                                      <h2
                                        className="text-3xl robot"
                                        style={{ color: "#39BEC1" }}
                                      >
                                        Doctor for Child
                                      </h2>
                                      <p style={{ color: "#7A7979" }}>
                                        Full Time
                                      </p>
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
                                          style={{
                                            background: "none",
                                            color: "#39BEC1",
                                          }}
                                          //   onClick={props.post}
                                        >
                                          ACTIVE
                                        </Button>
                                        <Button
                                          onClick={handleShow2}
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
                                            <BsPencilSquare /> &nbsp; edit
                                            profile
                                          </div>
                                        </Button>
                                        <Modal
                                          show={show2}
                                          onHide={handleClose2}
                                          backdrop="static"
                                          keyboard={false}
                                        >
                                          <Modal.Header closeButton>
                                            <Modal.Title
                                              style={{ color: "black" }}
                                            >
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
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        First Name
                                                      </label>
                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
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
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Last Name
                                                      </label>
                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
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
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Email Address
                                                      </label>
                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
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
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Phone Number
                                                      </label>
                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
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
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Founded in
                                                      </label>
                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
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
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        What makes us special
                                                      </label>
                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
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
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Company Name
                                                      </label>

                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
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
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Company Scope
                                                      </label>

                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
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
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Salary Range
                                                      </label>
                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
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
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Headquaters
                                                      </label>
                                                      <div
                                                        style={{
                                                          display: "flex",
                                                        }}
                                                      >
                                                        <input
                                                          style={{
                                                            width: "100%",
                                                          }}
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
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Company Location
                                                      </label>
                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
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
                                                        style={{
                                                          width: "100%",
                                                        }}
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
                                              style={{
                                                background: "none",
                                                color: "#C1C1C1",
                                              }}
                                            >
                                              Cancel
                                            </Button>
                                            <Button
                                              variant="primary"
                                              style={{
                                                background: "none",
                                                color: "#39BEC1",
                                              }}
                                            >
                                              Save
                                            </Button>
                                          </Modal.Footer>
                                        </Modal>
                                        <p>
                                          Posted Date : Jan 2023
                                          &nbsp;&nbsp;&nbsp;Expiry Date : Feb
                                          2023
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <Container>
                                    <Row className="align-items-center block-for-res">
                                      <Col>
                                        <div className="p3">
                                          <h2 className="text-xl font-semibold">
                                            Company Name
                                          </h2>

                                          <h2
                                            className="text-lg font-semibold"
                                            style={{ color: "#7A7979" }}
                                          >
                                            Gia (PVT) LTD
                                          </h2>
                                        </div>
                                      </Col>
                                      <Col>
                                        <div className="p3">
                                          <h2 className="text-xl font-semibold">
                                            Job Industry
                                          </h2>

                                          <h2
                                            className="text-lg font-semibold"
                                            style={{ color: "#7A7979" }}
                                          >
                                            Hospital
                                          </h2>
                                        </div>
                                      </Col>
                                      <Col>
                                        <div className="p3">
                                          <h2 className="text-xl font-semibold">
                                            Salary Range
                                          </h2>

                                          <h2
                                            className="text-lg font-semibold"
                                            style={{ color: "#7A7979" }}
                                          >
                                            HKD 3 - HKD 6
                                          </h2>
                                        </div>
                                      </Col>
                                      <Col>
                                        <div className="p3">
                                          <h2 className="text-xl font-semibold">
                                            Location
                                          </h2>

                                          <h2
                                            className="text-lg font-semibold"
                                            style={{ color: "#7A7979" }}
                                          >
                                            Central and Western
                                          </h2>
                                        </div>
                                      </Col>
                                      <Col>
                                        <div className="p3">
                                          <h2 className="text-xl font-semibold">
                                            No. of candidates
                                          </h2>

                                          <h2
                                            className="text-lg font-semibold"
                                            style={{ color: "#7A7979" }}
                                          >
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

                                          <h2
                                            className="text-lg font-semibold"
                                            style={{ color: "#7A7979" }}
                                          >
                                            <Content1 />
                                          </h2>
                                        </div>
                                      </Col>
                                      <Col lg="1">
                                        <div className="p-3">
                                          <Button
                                            className="text-lg mr-3"
                                            style={{
                                              background: "none",
                                              color: "#FF0000",
                                            }}
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
                          </div>
                        );
                      }
                    })}
                </Row>
              </TabPanel>
            </Tabs>
          </Container>
        </Row>
      </Container>
    </Container>
  );
};
            