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
import { FilterCenterFocus } from "@mui/icons-material";
import Loader from "../../../assets/loading.gif";

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
  const [errors, setErrors] = useState();

  const PostFunc = (props) => {
    let currentDate = new Date();
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
      expiryDate: new Date(
        currentDate.setDate(currentDate.getDate() + 30)
      ).toString(),
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
      expiryDate: new Date(
        currentDate.setDate(currentDate.getDate() + 30)
      ).toString(),
      closed: false,
      modeOfWork: jobData.madeOfWork,
      submitted: true,
      educationLevel: jobData.educationLevel,
      empType: jobData.empType,
      salaryPayFreq: jobData.salaryPayFreq,
      salaryCurrency: jobData.salaryCurrency,
      additionalEmails: [isEmail],
    };

    let values = Object.values(dummyData);

    // console.log(values,"values")
    values = values.every((e, i) => e !== "");

    if (values) {
      axios
        .post("api/v1/job-post", dummyData)
        .then((res) => {
          console.log(res, "data sended successfully");
          setErrors({});
          props.onHide();
          // navigate('/CompanyProfile')
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let newErrors = {};
      if (!dummyData.title) {
        newErrors.title = "Job Title is required";
      }
      if (!jobData.industry) {
        newErrors.industry = "Job industry is required";
      }
      if (!jobData.jobFunction) {
        newErrors.jobFunction = "Job jobFunction is required";
      }
      if (!jobData.jobSubFunction) {
        newErrors.jobSubFunction = "Job jobSubFunction is required";
      }
      if (!jobData.location) {
        newErrors.location = "Job location is required";
      }
      if (!jobData.description) {
        newErrors.description = "Job DESCRIPTION is required";
      }
      if (!jobData.requirements) {
        newErrors.requirements = "Job requirements is required";
      }
      if (!jobData.educationLevel) {
        newErrors.educationLevel = "Job educationLevel is required";
      }
      if (!jobData.profession) {
        newErrors.profession = "Job profession is required";
      }
      if (!jobData.madeOfWork) {
        newErrors.madeOfWork = "Job madeOfWork is required";
      }
      if (!jobData.noOfOpenings) {
        newErrors.noOfOpenings = "Job noOfOpenings is required";
      }
      if (!jobData.salaryCurrency) {
        newErrors.salaryCurrency = "Job salaryCurrency is required";
      }
      if (!jobData.salaryType) {
        newErrors.salaryType = "Job salaryCurrency is required";
      }
      if (!jobData.salaryPayFreq) {
        newErrors.salaryPayFreq = "Job salaryCurrency is required";
      }
      if (!isProjectTimeline.gte) {
        newErrors.gte = "Job gte is required";
      }
      if (!isProjectTimeline.lte) {
        newErrors.lte = "Job lte is required";
      }
      if (!isSalaryRange.gte) {
        newErrors.name = "Job gte is required";
      }
      if (!isSalaryRange.lte) {
        newErrors.gte = "Job lte is required";
      }
      if (!isEmail) {
        newErrors.isEmail = "Email is required";
      }
      if (!/\S+@\S+\.\S+/.test(isEmail)) {
        newErrors.email = "Email address is invalid";
      }
      console.log(newErrors);
      setErrors(newErrors);
    }
  };
  console.log("errors", errors);
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

  console.log(jobData, "jobData");

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
                    placeholder="Doctor for Child"
                  />
                  {errors && errors.title && (
                    <p style={{ color: "red" }}>{errors.title}</p>
                  )}
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
                  {errors && errors.industry && (
                    <p style={{ color: "red" }}>{errors.industry}</p>
                  )}
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
                  {errors && errors.jobFunction && (
                    <p style={{ color: "red" }}>{errors.jobFunction}</p>
                  )}
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
                  {errors && errors.jobSubFunction && (
                    <p style={{ color: "red" }}>{errors.jobSubFunction}</p>
                  )}
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
                  {errors && errors.location && (
                    <p style={{ color: "red" }}>{errors.location}</p>
                  )}
                </fieldset>
              </Col>
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Job Description
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    data=""
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
                  {errors && errors.description && (
                    <p style={{ color: "red" }}>{errors.description}</p>
                  )}
                </fieldset>
              </Col>
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Job Requirements
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    data=""
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
                  {errors && errors.requirements && (
                    <p style={{ color: "red" }}>{errors.requirements}</p>
                  )}
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
                    <option value="DEFAULT" disabled="">
                      Select Education level
                    </option>
                    <option>ASSOCIATE DEGREE</option>
                    <option>MASTER DEGREE</option>
                    <option>DOCTORATE DEGREE</option>
                    <option>PHD</option>
                    <option>OTHER</option>
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
                  {errors && errors.educationLevel && (
                    <p style={{ color: "red" }}>{errors.educationLevel}</p>
                  )}
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
                    <option value="DEFAULT" disabled="">
                      Select Employment Type
                    </option>
                    <option>PART TIME</option>
                    <option>
                      CASUALÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“NO SET HOURS OR DAYS OF WORK
                    </option>
                    <option>PROJECT BASED</option>
                    <option>OTHER</option>
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
                  {errors && errors.empType && (
                    <p style={{ color: "red" }}>{errors.empType}</p>
                  )}
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
                    {errors && errors.gte && (
                      <p style={{ color: "red" }}>{errors.gte}</p>
                    )}
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
                    {errors && errors.lte && (
                      <p style={{ color: "red" }}>{errors.lte}</p>
                    )}
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
                  {errors && errors.profession && (
                    <p style={{ color: "red" }}>{errors.profession}</p>
                  )}
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
                    <option value="DEFAULT" disabled="">
                      Select Mode of Work
                    </option>
                    <option>Office</option>
                    <option>Work from Home</option>
                    <option>Hybrid</option>
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
                  {errors && errors.madeOfWork && (
                    <p style={{ color: "red" }}>{errors.madeOfWork}</p>
                  )}
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
                  {errors && errors.noOfOpenings && (
                    <p style={{ color: "red" }}>{errors.noOfOpenings}</p>
                  )}
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
                  {errors && errors.salaryCurrency && (
                    <p style={{ color: "red" }}>{errors.salaryCurrency}</p>
                  )}
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
                    {errors && errors.industry && (
                      <p style={{ color: "red" }}>{errors.industry}</p>
                    )}
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
                    {errors && errors.gte && (
                      <p style={{ color: "red" }}>{errors.gte}</p>
                    )}
                  </Col>
                </Row>
              </Container>
              <Col lg="12">
                <fieldset className="dflexx">
                  <Row className="py-2 contdis">
                    <Col>
                      <label className="text-lg">Salary Type :</label>
                    </Col>
                    <Col>
                      <input
                        type="radio"
                        name="radios"
                        class="form-check-input"
                        id="exampleRadio1"
                        value="Salary Negotiable"
                        onChange={(e) =>
                          setJobData({ ...jobData, salaryType: e.target.value })
                        }
                      />{" "}
                      <label
                        class="form-check-label"
                        for="exampleRadio1"
                        style={{ color: "#7A7979" }}
                      >
                        Salary Negotiable
                      </label>
                    </Col>
                    <Col>
                      <input
                        type="radio"
                        name="radios"
                        class="form-check-input"
                        id="exampleRadio2"
                        value="Project Based"
                        onChange={(e) =>
                          setJobData({ ...jobData, salaryType: e.target.value })
                        }
                      />{" "}
                      <label
                        class="form-check-label"
                        for="exampleRadio2"
                        style={{ color: "#7A7979" }}
                      >
                        Project Based
                      </label>
                    </Col>
                    <Col>
                      <input
                        type="radio"
                        name="radios"
                        class="form-check-input"
                        id="exampleRadio3"
                        value="Others"
                        onChange={(e) =>
                          setJobData({ ...jobData, salaryType: e.target.value })
                        }
                      />{" "}
                      <label
                        class="form-check-label"
                        for="exampleRadio3"
                        style={{ color: "#7A7979" }}
                      >
                        Others
                      </label>
                    </Col>
                  </Row>

                  {errors && errors.industry && (
                    <p style={{ color: "red" }}>{errors.industry}</p>
                  )}
                </fieldset>
              </Col>
              <Col lg="12">
                <fieldset className="dflexx">
                  <Row className="py-2 contdis">
                    <Col>
                      <label className="text-lg">Salary Freq :</label>
                    </Col>
                    <Col>
                      <input
                        type="radio"
                        class="form-check-input"
                        name="bsradio"
                        id="radio1"
                        value="Per Day"
                        onChange={(e) =>
                          setJobData({
                            ...jobData,
                            salaryPayFreq: e.target.value,
                          })
                        }
                      />
                      <label
                        for="radio1"
                        class="form-check-label pl-2"
                        style={{ color: "#7A7979" }}
                      >
                        Per Day
                      </label>
                    </Col>
                    <Col>
                      <input
                        type="radio"
                        class="form-check-input"
                        name="bsradio"
                        id="radio2"
                        value="per Week"
                        onChange={(e) =>
                          setJobData({
                            ...jobData,
                            salaryPayFreq: e.target.value,
                          })
                        }
                      />
                      <label
                        for="radio2"
                        class="form-check-label pl-2"
                        style={{ color: "#7A7979" }}
                      >
                        Per Week
                      </label>
                    </Col>
                    <Col>
                      <input
                        type="radio"
                        class="form-check-input"
                        name="bsradio"
                        id="radio3"
                        value="per Month"
                        onChange={(e) =>
                          setJobData({
                            ...jobData,
                            salaryPayFreq: e.target.value,
                          })
                        }
                      />
                      <label
                        for="radio3"
                        class="form-check-label pl-2"
                        style={{ color: "#7A7979" }}
                      >
                        Per Month
                      </label>
                    </Col>
                    <Col>
                      <input
                        type="radio"
                        class="form-check-input"
                        name="bsradio"
                        id="radio4"
                        value="others"
                        onChange={(e) =>
                          setJobData({
                            ...jobData,
                            salaryPayFreq: e.target.value,
                          })
                        }
                      />
                      <label
                        for="radio4"
                        class="form-check-label pl-2"
                        style={{ color: "#7A7979" }}
                      >
                        Others
                      </label>
                    </Col>
                  </Row>

                  {errors && errors.salaryType && (
                    <p style={{ color: "red" }}>{errors.salaryType}</p>
                  )}
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
                    {errors && errors.isEmail && (
                      <p style={{ color: "red" }}>{errors.isEmail}</p>
                    )}
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
          onClick={() => PostFunc(props)}
        >
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export const Interview = () => {
  const [modalShowGoogFunc, setModalShowGoogFunc] = useState(false);
  const [modalShowNotQuiteFunc, setModalShowNotQuiteFunc] = useState(false);
  const [modalShowToKeepFunc, setModalShowToKeepFunc] = useState(false);

  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [OfferShow, setOfferShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const [interviewData, setInterviewData] = useState({});
  const [filteredCategory, setFilteredCategory] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isCount, setIsCount] = useState("");
  const [interviewFilterdData, setInterviewFilterdData] = useState("");
  // console.log(isCount, 'isCount');
  const handleSelectChange = (event) => {
    let data = event.target.value;
    if (data) {
      console.log("hello", data);

      setInterviewFilterdData(
        interviewData &&
          interviewData.length > 0 &&
          interviewData.filter((filter) => {
            return filter.internalState == data;
          })
      );
      setIsCount(interviewFilterdData.length);
    }
    setSelectedValue(event.target.value);
  };
  const [profileImg, setProfileImg] = useState("");

  const [isInput, setIsInput] = useState({});
  console.log("interviewFilterdData", interviewFilterdData);

  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    searchFunc();
  }, []);

  const checkAuth = async () => {
    const token = await localStorage.getItem("access-token");
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (filteredCategory && filteredCategory.length > 0) {
      setFilteredCategory(
        filteredCategory &&
          filteredCategory.length > 0 &&
          filteredCategory.map((e, i) => {
            if (e.count) {
              return {
                ...e,
                count: (e.count = 0),
              };
            } else {
              return e;
            }
          })
      );
    }

    if (selectedValue == "DEFAULT") {
      setSelectedValue("");
      searchFunc();
    }
  }, [selectedValue]);

  // useEffect(() => {
  //   searchFunc()
  // }, [selectedValue])

  const searchFunc = () => {
    // console.log('data', data);
    axios
      .get(`api/v1/interview?stage=applied&size=80&from=10`, isInput)
      .then((res) => {
        console.log(res, "Initial Data");
        let data = res.data.data;
        ThumblailFunc(data);
        let count = res.data.count;
        // setPageCount(Math.ceil(count / param.size))
        setIsCount(count);
        //  if(selectedValue) {
        //   setInterviewData(data.map((e) => {
        //     return selectedValue == e.internalState
        //   }))
        //  }
        setInterviewData(data);

        let filteredData = data.map((items) => {
          return items.job.title;
        });

        console.log(filteredData, "filteredCate");

        let myData = [...new Set(filteredData)];

        let yourData = { ...myData };

        let allData = [];
        Object.entries(yourData).map(([key, value]) => {
          allData.push({ category: value, count: 0 });
        });

        setFilteredCategory(allData);
        setSelectedValue("");

        setTimeout(() => {
          setInterviewFilterdData(data);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(interviewData, "dataaaaa");

  const ThumblailFunc = (data) => {
    //   let temArray = [];
    //   for (let item of data) {
    //     // console.log(item, 'iteeeeeeeeeeeeeeeeeeeeeeem');
    //     let image = item?.freelancer?.files?.thumbnail
    //     //  console.log(image, 'imaaaaaaaaaaaaaaaaaaage');
    //     const imagePath = image?.split(".");
    //     //  console.log(imagePath, 'imagePath');
    //     if (imagePath?.length && image?.match(/\.(jpg|jpeg|png|gif)$/i)) {
    //       // alert('sdf')
    //       axios.get(`/api/v1/user/asset/thumbnail/${imagePath?.[0]}?mimeType=.${imagePath?.[1]}`)
    //         .then((res) => {
    //           const response = res.arrayBuffer();
    //           let base64ImageString = Buffer.from(response, 'binary').toString('base64')
    //           let srcValue = `data:image/${imagePath?.[1]};base64,` + base64ImageString;
    //           temArray.push({ img: srcValue, id: item?.id });
    //           setProfileImg(srcValue)
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     }
    //   }
  };

  function MyVerticallyCenteredModalFunc(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Good Fit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Success!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const Modalshowgoogfunc = (events) => {
    console.log(events, "funtion values");
    if (events.clicked == true) {
      events.clicked = false;
      setModalShowGoogFunc(false);
    } else {
      setModalShowGoogFunc(true);
      events.clicked = true;
    }
  };
  function MyVerticallyCenteredModalNotQuitFunc(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Not Quit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Success</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const Modalnotquitfunc = (events) => {
    console.log(events, "funtion values");
    if (events.clicked == true) {
      events.clicked = false;
      setModalShowNotQuiteFunc(false);
    } else {
      setModalShowNotQuiteFunc(true);
      events.clicked = true;
    }
  };
  function MyVerticallyCenteredModalGootToKeepFunc(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Goot To Keep
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Success</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const ModalgootTokeepfunc = (events) => {
    console.log(events, "funtion values");
    if (events.clicked == true) {
      events.clicked = false;
      setModalShowToKeepFunc(false);
    } else {
      setModalShowToKeepFunc(true);
      events.clicked = true;
    }
  };
  const GoodToFitFunc = (event) => {
    let EventData = (event.clicked = true);
    let value = {
      value: "GOOD_FIT",
    };
    axios
      .post(`api/v1/interview/freelancer/match?id=${event.id}`, value)
      .then((res) => {
        console.log(res, "Initial Data");
        let data = res.data.data;
        if (res) {
          // Modalshowgoogfunc(true)
          // console.log(EventData, 'EventData');
          Modalshowgoogfunc(EventData);
          searchFunc();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const GoodToKeepFunc = (event) => {
    let EventData = (event.clicked = true);
    let value = {
      value: "GOOD_TO_KEEP",
    };
    axios
      .post(`api/v1/interview/freelancer/match?id=${event.id}`, value)
      .then((res) => {
        console.log(res, "Initial Data");
        let data = res.data.data;
        if (res) {
          ModalgootTokeepfunc(EventData);
          searchFunc();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const NotQuiteFunc = (event) => {
    let EventData = (event.clicked = true);

    let value = {
      value: "NOT_QUITE",
    };
    axios
      .post(`api/v1/interview/freelancer/match?id=${event.id}`, value)
      .then((res) => {
        console.log(res, "Initial Data");
        let data = res.data.data;
        if (res) {
          Modalnotquitfunc(EventData);
          searchFunc();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              10 Tokens to View
              ProÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âle
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
  const token = (events) => {
    console.log(events, "funtion values");
    if (events.clicked == true) {
      events.clicked = false;
      setModalShow(false);
    } else {
      setModalShow(true);
      events.clicked = true;
    }
  };

  const [errors, setErrors] = useState();
  function MyVerticallyCenteredModal1(props) {
    // console.log(props, "props")
    const [arrangeInterview, setArrangeInterview] = useState({
      timestamp: "",
      type: "",
      location: "",
      notes: "",
      id: props?.id?.id,
    });
    let values = Object.values(arrangeInterview);
    values = values.every((e, i) => e !== "");
    const submitArrangeInterView = () => {
      if (values) {
        axios
          .post(`/api/v1/interview/applicants/arrange`, arrangeInterview)
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
        if (!arrangeInterview.timestamp) {
          newErrors.timestamp = "Job Time is required";
        }
        if (!arrangeInterview.type) {
          newErrors.type = "Job type is required";
        }
        if (!arrangeInterview.location) {
          newErrors.location = "Job location is required";
        }
        if (!arrangeInterview.notes) {
          newErrors.notes = "Job notes is required";
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
                  type={"datetime-local"}
                  onChange={(e) =>
                    setArrangeInterview({
                      ...arrangeInterview,
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
                  value={arrangeInterview.interviewType}
                  onChange={(e) =>
                    setArrangeInterview({
                      ...arrangeInterview,
                      type: e.target.value,
                    })
                  }
                >
                  <option value="DEFAULT" disabled="">
                    Select Type
                  </option>
                  <option>ONLINE</option>
                  <option>IN_PERSON</option>
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
                  type={"text"}
                  name="Link"
                  onChange={(e) =>
                    setArrangeInterview({
                      ...arrangeInterview,
                      location: e.target.value,
                    })
                  }
                  placeholder="  "
                  required
                />
                {errors && errors.location && (
                  <p style={{ color: "red" }}>{errors.location}</p>
                )}
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
                  onChange={(e) =>
                    setArrangeInterview({
                      ...arrangeInterview,
                      notes: e.target.value,
                    })
                  }
                  placeholder=" "
                  required
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
            onClick={() => submitArrangeInterView(props)}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const setlgshow = (events) => {
    console.log(events, "funtion values");
    if (events.clicked == true) {
      events.clicked = false;
      setLgShow(false);
    } else {
      setLgShow(true);
      events.clicked = true;
    }
  };

  function MyVerticallyCenteredModal3(props) {
    // console.log(props, 'prrrrrrrrrrrrrrrrrrrrrrrrrps');
    const [jobOffer, setJobOffer] = useState({
      joiningDate: "",
      jobTitle: "",
      salary: "",
      interviewId: props?.props?.id,
      msg: "",
    });

    let values = Object.values(jobOffer);
    values = values.every((e, i) => e !== "");
    console.log("values", values);
    const JobOfferFunc = () => {
      if (values) {
        axios
          .post(`api/v1/interview/offer`, jobOffer)
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
        if (!jobOffer.joiningDate) {
          newErrors.joiningDate = "Job joiningDate is required";
        }
        if (!jobOffer.jobTitle) {
          newErrors.jobTitle = "Job jobTitle is required";
        }
        if (!jobOffer.salary) {
          newErrors.salary = "Job salary is required";
        }
        if (!jobOffer.msg) {
          newErrors.msg = "Job msg is required";
        }
        setErrors(newErrors);
      }
    };

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
                  type={"datetime-local"}
                  onChange={(e) =>
                    setJobOffer({ ...jobOffer, joiningDate: e.target.value })
                  }
                  //   value={user.number}
                  //   onChange={getUserData}
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
                  name="date"
                  type={"text"}
                  onChange={(e) =>
                    setJobOffer({ ...jobOffer, jobTitle: e.target.value })
                  }
                  //   value={user.number}
                  //   onChange={getUserData}
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
                  type={"number"}
                  name="Link"
                  //   value={user.name}
                  //   onChange={getUserData}
                  placeholder="  "
                  required
                  onChange={(e) =>
                    setJobOffer({ ...jobOffer, salary: e.target.value })
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
                  type={"text"}
                  name="firstname"
                  //   value={user.name}
                  //   onChange={getUserData}
                  placeholder=" "
                  onChange={(e) =>
                    setJobOffer({ ...jobOffer, msg: e.target.value })
                  }
                  required
                />
                {errors && errors.msg && (
                  <p style={{ color: "red" }}>{errors.msg}</p>
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
            onClick={() => JobOfferFunc(props)}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const setoffershow = (events) => {
    // console.log(events, "funtion values");
    if (events.clicked == true) {
      events.clicked = false;
      setOfferShow(false);
    } else {
      setOfferShow(true);
      events.clicked = true;
    }
  };

  console.log(selectedValue, "selected");

  const saveBookMarkFunc = (event) => {
    axios
      .post(`api/v1/user/recruiter/save-freelancer/${event.id}`)
      .then((res) => {
        console.log(res, "data save succesfully");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const getAllData = () => {
    setSelectedValue("");
    searchFunc();
  };

  useEffect(() => {
    setTimeout(() => {
      interviewFilterdData &&
        interviewFilterdData.length > 0 &&
        filteredCategory &&
        filteredCategory.length > 0 &&
        Array.isArray(filteredCategory) &&
        interviewFilterdData.map((e, i) => {
          setFilteredCategory(
            filteredCategory.map((x, ind) => {
              console.log(x, "xxxxxxx", e, "eeeeeeee");

              if (x.category.toLowerCase() == e.job.title.toLowerCase()) {
                console.log("Titleeeee");
                return {
                  ...x,
                  count: (x.count = x.count ? x.count + 1 : 1),
                };
              } else {
                return {
                  ...x,
                  count: (x.count = x.count ? x.count : 0),
                };
              }
            })
          );
        });
    }, 500);
  }, [interviewFilterdData, selectedValue]);

  console.log(filteredCategory, "filtered");

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
              <h2 className="text-3xl robot">Interviews</h2>
              <div
                style={{
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
                  <Form.Select
                    aria-label="Default select example"
                    value={selectedValue}
                    onChange={handleSelectChange}
                  >
                    <option value="DEFAULT" disabled="">
                      Choose State
                    </option>
                    <option value="PENDING">Pending</option>
                    <option value="CONFIRM">Accepted</option>
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
                    onChange={(e) => setIsInput(e.target.value)}
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
                    onClick={() => searchFunc()}
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
        <div className="d-flex">
          <h2 className="text-2xl">
            {interviewFilterdData ? (
              interviewFilterdData.length
            ) : (
              <img src={Loader} style={{ width: 30, height: 30 }} />
            )}
          </h2>{" "}
          &#160; <h2 className="text-2xl"> Total Candidates </h2>
        </div>
        <Accordion defaultActiveKey="0" flush>
          {filteredCategory &&
          filteredCategory.length > 0 &&
          filteredCategory ? (
            filteredCategory &&
            filteredCategory.length > 0 &&
            filteredCategory.map((items, keys) => {
              console.log(items, "itemsss");
              return (
                <Accordion.Item eventKey={keys} key={keys}>
                  <Accordion.Header>
                    <div className="accord">
                      {items && items.category} &#160;&#160;&#160;
                      <span className="fontpxx">
                        {items.count > 0 ? (
                          items.count
                        ) : (
                          <img src={Loader} style={{ width: 20, height: 20 }} />
                        )}{" "}
                        &#160; Candidates
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    {/* {
                         selectedValue && selectedValue == "DEFAULT" ? getAllData() : ""
                    } */}
                    {interviewFilterdData &&
                      interviewFilterdData.length > 0 &&
                      interviewFilterdData
                        .filter((filter) => {
                          if (
                            filter.job.title === items.category &&
                            filter.internalState == selectedValue
                          ) {
                            return filter;
                          }
                          if (!selectedValue) {
                            return filter.job.title === items.category;
                          }
                        })
                        .map((events, key) => {
                          console.log(profileImg, "resourece not found");

                          // console.log(events, 'eventsevents');
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
                                              <BsBookmark
                                                onClick={() =>
                                                  saveBookMarkFunc(events)
                                                }
                                              />
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
                                                onClick={() =>
                                                  GoodToFitFunc(events)
                                                }
                                                disabled={
                                                  events.match == "GOOD_FIT"
                                                    ? true
                                                    : false
                                                }
                                              >
                                                Good Fit
                                              </Button>
                                              {events.clicked == true && (
                                                <MyVerticallyCenteredModalFunc
                                                  show={modalShowGoogFunc}
                                                  props={events}
                                                  onHide={() =>
                                                    Modalshowgoogfunc(events)
                                                  }
                                                />
                                              )}

                                              <Button
                                                // onClick={handleShow}
                                                className="text-white border-rounded px-3 mx-3 py-3 w-40"
                                                style={{
                                                  background: "rgb(255,0,0)",
                                                  border: "none",
                                                  marginTop: "10px",
                                                  marginBottom: "10px",
                                                }}
                                                onClick={() =>
                                                  NotQuiteFunc(events)
                                                }
                                                disabled={
                                                  events.match == "NOT_QUITE"
                                                    ? true
                                                    : false
                                                }
                                              >
                                                Not Quite
                                              </Button>
                                              {events.clicked == true && (
                                                <MyVerticallyCenteredModalNotQuitFunc
                                                  show={modalShowNotQuiteFunc}
                                                  props={events}
                                                  onHide={() =>
                                                    Modalnotquitfunc(events)
                                                  }
                                                />
                                              )}
                                              <Button
                                                className="text-white border-rounded px-3 mx-3 py-3 w-40"
                                                style={{
                                                  background: "rgb(41,172,226)",
                                                  border: "none",
                                                  marginTop: "10px",
                                                  marginBottom: "10px",
                                                }}
                                                onClick={() =>
                                                  GoodToKeepFunc(events)
                                                }
                                                disabled={
                                                  events.match == "GOOT_TO_KEEP"
                                                    ? true
                                                    : false
                                                }
                                              >
                                                Good to Keep
                                              </Button>
                                              {events.clicked == true && (
                                                <MyVerticallyCenteredModalGootToKeepFunc
                                                  show={modalShowToKeepFunc}
                                                  props={events}
                                                  onHide={() =>
                                                    ModalgootTokeepfunc(events)
                                                  }
                                                />
                                              )}
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
                                        <Col lg="2" className="webkit cond">
                                          {profileImg.length > 0 ? (
                                            <div
                                              style={{
                                                width: "150px",
                                                height: "150px",
                                                borderRadius: "50%",
                                                background: "#512DA8",
                                                fontSize: "35px",
                                                color: "#fff",
                                                textAlign: "center",
                                                lineHeight: "150px",
                                                margin: "20px 0",
                                              }}
                                            >
                                              {events.freelancer.firstName.substring(
                                                0,
                                                1
                                              )}
                                            </div>
                                          ) : (
                                            <Image
                                              style={{ width: "100%" }}
                                              src={
                                                profileImg
                                                  ? profileImg
                                                  : require("../../../assets/Profile.png")
                                              }
                                            />
                                          )}
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
                                              onClick={() => token(events)}
                                              className="text-white border-rounded px-3 py-3 mx-2"
                                              style={{
                                                background: "#39BEC1",
                                                border: "none",
                                              }}
                                            >
                                              VIEW PROFILE
                                            </Button>
                                            {events.clicked == true && (
                                              <MyVerticallyCenteredModal
                                                show={modalShow}
                                                props={events}
                                                onHide={() => token(events)}
                                              />
                                            )}
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
                                                {events.job.location}
                                              </h2>
                                            </div>
                                          </Col>
                                          <Col>
                                            <div className="p3">
                                              <Button
                                                onClick={() =>
                                                  setlgshow(events)
                                                }
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

                                              {events.clicked == true && (
                                                <MyVerticallyCenteredModal1
                                                  show={lgShow}
                                                  props={events}
                                                  onHide={() =>
                                                    setlgshow(events)
                                                  }
                                                  id={events}
                                                />
                                              )}
                                            </div>
                                          </Col>
                                          <Col>
                                            <div className="p3">
                                              <Button
                                                onClick={() =>
                                                  setoffershow(events)
                                                }
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
                                              {events.clicked == true && (
                                                <MyVerticallyCenteredModal3
                                                  props={events}
                                                  show={OfferShow}
                                                  onHide={() =>
                                                    setoffershow(events)
                                                  }
                                                />
                                              )}
                                            </div>
                                          </Col>
                                        </Row>
                                      </Container>
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
            })
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
              <img src={Loader} style={{ width: 180, height: 180 }} />{" "}
            </div>
          )}
        </Accordion>
      </Container>
    </Container>
  );
};
