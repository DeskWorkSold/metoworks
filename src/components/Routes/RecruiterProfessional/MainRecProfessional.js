import React, { useState, Component, useEffect } from "react";
import { Container, Button, Row, Col, Image, Form, Alert } from "react-bootstrap";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BsArrowBarDown,
  BsBookmark,
  BsCoin,
  BsPencilSquare,
  BsReceipt,
} from "react-icons/bs";

import Modal from "react-bootstrap/Modal";
// import React, { Component } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import axios from "../../../utils/axios.api";
import Accordion from "react-bootstrap/Accordion";


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

  const [success, setSuccess] = useState(false);

  // const [errors, setErrors] = useState({
  //   title: '',
  //   industry: '',
  //   jobFunction: '',
  //   jobSubFunction: '',
  //   location: '',
  //   description: '',
  //   requirements: '',
  //   educationLevel: '',
  //   profession: '',
  //   madeOfWork: '',
  //   noOfOpenings: '',
  //   salaryCurrency: '',
  //   salaryType: '',
  //   salaryPayFreq: '',
  //   lte: '',
  //   gte: '',
  //   lte: '',
  //   gte: '',
  //   isEmail: '',

  // });
  const validateForm = () => {
    let newErrors = {};
    if (!jobData.title) {
      newErrors.title = "Job Title is required";
    } else if (!jobData.industry) {
      newErrors.industry = "Job industry is required";
    } else if (!jobData.jobFunction) {
      newErrors.jobFunction = "Job jobFunction is required";
    } else if (!jobData.jobSubFunction) {
      newErrors.jobSubFunction = "Job jobSubFunction is required";
    } else if (!jobData.location) {
      newErrors.location = "Job location is required";
    } else if (!jobData.description) {
      newErrors.description = "Job DESCRIPTION is required";
    } else if (!jobData.requirements) {
      newErrors.requirements = "Job requirements is required";
    } else if (!jobData.educationLevel) {
      newErrors.educationLevel = "Job educationLevel is required";
    } else if (!jobData.profession) {
      newErrors.profession = "Job profession is required";
    } else if (!jobData.madeOfWork) {
      newErrors.madeOfWork = "Job madeOfWork is required";
    } else if (!jobData.noOfOpenings) {
      newErrors.noOfOpenings = "Job noOfOpenings is required";
    } else if (!jobData.salaryCurrency) {
      newErrors.salaryCurrency = "Job salaryCurrency is required";
    } else if (!jobData.salaryType) {
      newErrors.salaryType = "Job salaryCurrency is required";
    } else if (!jobData.salaryPayFreq) {
      newErrors.salaryPayFreq = "Job salaryCurrency is required";
    } else if (!isProjectTimeline.gte) {
      newErrors.gte = "Job gte is required";
    } else if (!isProjectTimeline.lte) {
      newErrors.lte = "Job lte is required";
    } else if (!isSalaryRange.gte) {
      newErrors.name = "Job gte is required";
    } else if (!isSalaryRange.lte) {
      newErrors.gte = "Job lte is required";
    } else if (!isEmail) {
      newErrors.isEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(isEmail)) {
      newErrors.email = "Email address is invalid";
    }

    setErrors(newErrors);
    console.log(Object.keys(newErrors).length === 0, "validation");
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSuccess(true);
    }
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
                    <option>CASUAL–NO SET HOURS OR DAYS OF WORK</option>
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
export const MainRecProfessional = () => {
  const [show, setShow] = useState(false);
  
  const [searchShow, setSearchShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);
  const [profession, setProfession] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [modeofWork, setModeOfWork] = useState('')
  const [salaryRange, setSalaryRange] = useState({
    gte : '',
    lte : ''
  })
  const [location, setLocation] = useState('')
  const handleChanger = () => {
    if (searchShow === true) {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };
  const [subJobFunction, setSubJobFunction] = useState('');
  const [jobIndustry, setJobIndustry] = useState('');
  const [searchData ,setSearchData] = useState({});
  const [languageType, setLanguage] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [city, setCity] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [jobFunction, setJobFunction] = useState('');
  const [minExperience, setMinExperience] = useState('');
  const [maxExperience, setMaxExperience] = useState('');
  const [isSearch, setIsSearch] = useState({
    keyword: "",
  });


  useEffect(() => {
    searchFun()
  },[])

  const searchFun = () => {
    const reqBody = {
      "keyword": isSearch.keyword,
      "filter": []
  };

  if(jobIndustry) reqBody?.filter?.push({"nested":{"path":"experience","query":{"term":{"experience.jobIndustry":jobIndustry}}}});
  if(city) reqBody?.filter?.push({"term": {"city":city}});
  if(jobFunction) reqBody?.filter?.push({"nested":{"path":"experience","query":{"term":{"experience.jobFunction":jobFunction}}}});
  if(jobFunction && subJobFunction) reqBody?.filter?.push({"nested":{"path":"experience","query":{"term":{"experience.jobSubFunction":subJobFunction}}}});
  if(minSalary && maxSalary) reqBody?.filter?.push({"range":{"salaryRange":{"gte":minSalary,"lte":maxSalary}}});
  if(minExperience && maxExperience) reqBody?.filter?.push( {"range":{"expYears":{"gte":minExperience,"lte":maxExperience}}});
  if(educationLevel) reqBody?.filter?.push({"nested":{"path":"education","query":{"term":{"education.educationLevel":educationLevel}}}});
  if(languageType) reqBody?.filter?.push({"nested":{"path":"language","query":{"term":{"language.languageType":languageType}}}});
  console.log(reqBody, 'eeeeeeeeeeeee');
    axios
      .post(`api/v1/search/freelancer?from=0&size=4`, reqBody)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data.data;
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
              <h2 className="text-3xl robot">Find Professionals</h2>
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
          <Col lg="12" style={{ textAlign: "-webkit-center" }}>
            <Row>
              <Col>
                <div className="About_main_images_search">
                  <input placeholder="Enter Profession, Company Name or Keywords."
                  onChange={(e) => setIsSearch({...isSearch, keyword : e.target.value})}
                  ></input>

                  <Button
                    className="text-white border-rounded px-3"
                    style={{ background: "#39BEC1", border: "none" }}
                    onClick={() => searchFun()}
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
                      <Form.Select aria-label="Default select example"
                      onChange={(e) => setJobIndustry(e.target.value)}>
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
                      <Form.Select aria-label="Default select example"
                      onChange={(e) =>setJobFunction(e.target.value)}>
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
                      <Form.Select aria-label="Default select example"
                      onChange={(e) => setSubJobFunction(e.target.value)}
                      >
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
                      <Form.Select aria-label="Default select example"
                      onChange={(e) => setLanguage(e.target.value)}
                      >
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
                      <Form.Select aria-label="Default select example"
                      >
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
                      onChange={(e) => setMinSalary(e.target.value)}
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
                      onChange={(e) =>setMaxSalary(e.target.value)}
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
                      <Form.Select aria-label="Default select example"
                      onChange={(e) => setCity(e.target.value)}
                      >
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
      </Container>
      <Container>
        <Row className="align-items-center">
        {searchData && searchData?.length > 0 ? searchData?.length > 0 && searchData?.map((event, data) => {
          return (
            <Col lg="12" keys={data}>
            <div className="m-3">
              <div className="boxshad py-3">
                <Row className="align-items-center">
                  <Col lg="12" style={{ textAlign: "-webkit-right" }}>
                    <div
                      style={{
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
                  </Col>
                  <Col lg="2" className="webkit">
                    <Image
                      style={{ width: "100%" }}
                      src={require("../../../assets/Profile.png")}
                    />
                  </Col>
                  <Col lg="7">
                    <h3 className="py-3 robot">
                      <span
                        style={{ color: "#39bec1" }}
                        className="text-2xl font-bold"
                      >
                        {event?._source?.firstName + ' ' + event?._source?.lastName} 
                      </span>
                      <br />
                      <span className="text-2xl" style={{ color: "black" }}>
                      {event?._source?.experience[0].title}
                      </span>
                      <br />
                      <br />
                      <span style={{ color: "rgb(148,147,147)" }}>
                      {event?._source?.aboutMe}
                      </span>
                    </h3>
                  </Col>

                  <Col lg="3">
                    <div className="webkit" style={{ display: "grid" }}>
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
                <hr className="my-2" />
                <Row className="align-items-center pl-4">
                  <Col lg="3">
                    <div className="p3 py-3">
                      <h2 className="text-xl font-semibold">Experience</h2>
                      <br />
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                      {event?._source?.expYears}
                      </h2>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="p3 py-3">
                      <h2 className="text-xl font-semibold">Salary Range</h2>
                      <br />
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        $ {event?._source?.salaryRange?.gte} - $ {event?._source?.salaryRange?.lte}
                      </h2>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="p3 py-3">
                      <h2 className="text-xl font-semibold">Location</h2>
                      <br />
                      <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          style={{
                            fontWeight: "bolder",
                          }}
                        />
                       {event?._source?.country}
                      </h2>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          )
        }) : <div style={{textAlign : 'center'}}> <h1 style={{fontSize : '3vh', fontWeight : 'bolder'}}> No Job Found </h1> </div>} 
        </Row>
      </Container>
    </Container>
  );
};
