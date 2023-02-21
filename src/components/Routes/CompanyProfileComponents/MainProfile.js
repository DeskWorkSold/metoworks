// import React from "react";
import React, { useState, Component } from "react";

import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { getDroppedOrSelectedFiles } from "html5-file-selector";
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
import { useNavigate } from "react-router-dom/dist";
import { useEffect } from "react";
import axios from "../../../utils/axios.api";

function MyVerticallyCenteredModal(props) {
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

export const MainProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);
  const [userId, setUserId] = useState("");
  // console.log(userId, 'user ID');
  const [isProfileData, setIsProfileData] = useState({});

  const [isToken, setIsToken] = useState({});
  //  console.log(isToken, 'TOKKKKKKKKKKEN');
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    foundedIn: "",
    whatsMakesUsSpecial: "",
    companyName: "",
    companyScope: "",
    salaryRange: "",
    headquarters: "",
    companyLocation: "",
    description: "",
  });
  const [editProfileData, setEditProfileData] = useState({})
  const [profileImg, setProfileImg] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  // const [profilePicture, setProfilePicture] = useState('')

  // console.log(profilePicture, 'profilePicture');
  console.log(isProfileData, "isProfileData");

  // console.log(profileData, 'profile Data');
  useEffect(() => {
    setIsToken(localStorage.getItem("access-token"));
    // let id = localStorage.getItem('id')
    setUserId();
    initialFun();
    profileImageFunc()
  }, []);

  const initialFun = () => {
    axios
      .get(`/api/v1/user/recruiter`)
      .then((res) => {
        let data = res.data.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        setProfileData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const profileImageFunc = () => {
    axios
      .get(`api/v1/user/asset/thumbnail`, { responseType: "arraybuffer" })
      .then((res) => {
        let buffer = require("buffer");
        const data = `data:${res.headers["content-type"]
          };base64,${new buffer.Buffer(res.data, "binary").toString("base64")}`;
        // console.log("res", res);
        // console.log("imagee", data);
        setProfileImg(data);
        localStorage.setItem('profileImg', data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    profileData && setIsProfileData(profileData);
    // profileData && setProfilePicture(profileData)
  }, [profileData]);
  const [editError, setEditError] = useState()
  const profileFunc = () => {
    const data = {
      companyName: editProfileData.companyName ? editProfileData.companyName : isProfileData.companyName,
      speciality: editProfileData.speciality ? editProfileData.speciality : isProfileData.speciality,
      sop: editProfileData.sop ? editProfileData.sop : isProfileData.sop,
      companyLocation: editProfileData.location ? editProfileData.location : isProfileData.location,
      companySize: editProfileData.companySize ? editProfileData.companySize : isProfileData.companySize,
      websiteLink: editProfileData.websiteLink ? editProfileData.websiteLink : isProfileData.websiteLink,
      headquarters: editProfileData.headquarters ? editProfileData.headquarters : isProfileData.headquarters,
      companyDesc: editProfileData.companyDesc ? editProfileData.companyDesc : isProfileData.companyDesc,
      founded: editProfileData.founded ? editProfileData.founded : isProfileData.founded,
      firstName: editProfileData.firstName ? editProfileData.firstName : isProfileData.firstName,
      lastName: editProfileData.lastName ? editProfileData.lastName : isProfileData.lastName,
      phoneNumber: editProfileData.phoneNumber ? +editProfileData.phoneNumber : +isProfileData.phoneNumber
    }

    let values = Object.values(data)
    values = values.every((e, i) => e !== "")
    console.log(values, 'values');
    if (values) {
      axios
        .post(`api/v1/user/recruiter`, data)
        .then((res) => {
          console.log(res, "profile data successfully added");
          if (res) {
            setShow(false);
            initialFun()
            handleShow(false)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      let newErrors = {}
      if (!isProfileData.companyName) {
        newErrors.companyName = 'companyName is required';
      }
      if (!isProfileData.speciality) {
        newErrors.speciality = 'speciality is required';
      }
      if (!isProfileData.companyScope) {
        newErrors.sop = 'Scope is required';
      }
      if (!isProfileData.companyLocation) {
        newErrors.companyLocation = 'company Location is required';
      }
      if (!isProfileData.companySize) {
        newErrors.companySize = 'companySize is required';
      }
      if (!isProfileData.websiteLink) {
        newErrors.websiteLink = 'websiteLink is required';
      }
      if (!isProfileData.headquarters) {
        newErrors.headquarters = 'headquarters is required';
      }
      if (!isProfileData.companyDesc) {
        newErrors.companyDesc = 'companyDesc is required';
      }
      if (!isProfileData.founded) {
        newErrors.founded = 'founded is required';
      }
      if (!isProfileData.firstName) {
        newErrors.firstName = 'firstName is required';
      }
      if (!isProfileData.lastName) {
        newErrors.lastName = 'lastName is required';
      }
      if (!isProfileData.phoneNumber) {
        newErrors.phoneNumber = 'phoneNumber is required';
      }
      console.log(newErrors)
      setEditError(newErrors)
    }
  };
  console.log('editError', editError);

  const profilePictureUpdate = () => {
    let formdata = new FormData();
    Object.entries(profileData).map(([key, value]) => {
      formdata.append(key, value);
    });
    axios
      .patch(`http://localhost:3000/v1/users/${userId}`, formdata)
      .then((res) => {
        console.log(res, "profile data successfully added");
        // setProfileExp(res.data, "ProfileExp");
        // ProfileExpData();
        setProfileData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProfileImage = (event) => {
    setThumbnail(event.target.files[0])
  }

  useEffect(() => {
    onPostThumnail()
  }, [thumbnail])

  const onPostThumnail = () => {
    if (thumbnail) {
      const formData = new FormData();
      formData.append("thumbnail", thumbnail);
      console.log(thumbnail);
      axios.post(`api/v1/user/asset/thumbnail`, formData)
        .then((res) => {
          console.log('Updated Image');
          initialFun()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const FileUploadComponent = () => {
    // alert('clicked')s
    const fileParams = ({ meta }) => {
      return { url: "https://httpbin.org/post" };
    };
    const onFileChange = ({ meta, file }, status) => {
      console.log(status, meta, file);
    };
    const onSubmit = (files, allFiles) => {
      allFiles.forEach((f) => f.remove());
    };
    const getFilesFromEvent = (e) => {
      return new Promise((resolve) => {
        getDroppedOrSelectedFiles(e).then((chosenFiles) => {
          resolve(chosenFiles.map((f) => f.fileObject));
        });
      });
    };
    const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
      const textMsg = files.length > 0 ? "Upload Again" : "Select Files";
      return (
        <label>
          <Image
            onClick={() => FileUploadComponent()}
            style={{ width: "100%" }}
            src={profileImg}
          />

          <input
            style={{ display: "none" }}
            type="file"
            accept={accept}
            multiple
            onChange={(e) => updateProfileImage(e)}
          />
        </label>
      );
    };

    // const profileImageUploadHandle = (e) => {
    //   getFilesFromEvent(e).then((chosenFiles) => {
    //     let data = chosenFiles
    //     // console.log(data, 'daaaaaaataaaaa');
    //     // console.log(chosenFiles, 'choaaaaaaaaaaaaasen File');
    //     setProfileData({...profileData, image : data})
    //     if(data) {
    //       profilePictureUpdate()
    //     }
    //   });
    // }

    // console.log(isProfileData, 'aaaaaaaaa')

    return (
      <Dropzone
        onSubmit={onSubmit}
        onChangeStatus={onFileChange}
        InputComponent={selectFileInput}
        getUploadParams={fileParams}
        getFilesFromEvent={getFilesFromEvent}
        accept="image/*"
        maxFiles={1}
        inputContent="Drop A File"
      />
    );
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
                    <button>
                      <FileUploadComponent />
                    </button>
                  </Col>
                  <Col lg="4">
                    <h2 className="text-3xl py-3 robot">
                      {profileData?.companyName
                        ? profileData.companyName
                        : "Gia (PVT) LTD"}{" "}
                      <br />
                      <span className="text-xl" style={{ color: "#6A489C" }}>
                        {profileData?.whatsMakesUsSpecial
                          ? profileData.whatsMakesUsSpecial
                          : "A Service Like No Other"}
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
                          />
                          Founded in{" "}
                          {profileData?.foundedIn
                            ? profileData.foundedIn
                            : "2000"}
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{
                              color: "#39BEC1",
                              fontWeight: "bolder",
                            }}
                          />
                          {profileData?.headquarters
                            ? profileData.headquarters
                            : "USA"}
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faEarth}
                            style={{
                              color: "#39BEC1",
                              fontWeight: "bolder",
                            }}
                          />
                          {profileData?.websiteLink}
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
                                      onChange={(e) =>
                                        setEditProfileData({
                                          ...editProfileData,
                                          firstName: e.target.value,
                                        })
                                      }
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.firstName || ""}
                                    />
                                    {editError && editError.firstName && <p style={{ color: 'red' }}>{editError.firstName}</p>}
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
                                      onChange={(e) =>
                                        setEditProfileData({
                                          ...editProfileData,
                                          lastName: e.target.value,
                                        })
                                      }
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.lastName || ""}
                                    />
                                    {editError && editError.lastName && <p style={{ color: 'red' }}>{editError.lastName}</p>}
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
                                      disabled
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="email"
                                      type={"email"}
                                      value={profileData?.email || ""}
                                      onChange={(e) =>
                                        setEditProfileData({
                                          ...editProfileData,
                                          email: e.target.value,
                                        })
                                      }
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder="gaiaewreeytyrt@gmail.com"
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
                                      type={"number"}
                                      onChange={(e) =>
                                        setEditProfileData({
                                          ...editProfileData,
                                          phoneNumber: e.target.value,
                                        })
                                      }
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={
                                        profileData?.phoneNumber || ""
                                      }
                                    />
                                    {editError && editError.phoneNumber && <p style={{ color: 'red' }}>{editError.phoneNumber}</p>}
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
                                      onChange={(e) =>
                                        setEditProfileData({
                                          ...editProfileData,
                                          founded: e.target.value,
                                        })
                                      }
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.foundedIn || ""}
                                    />
                                    {editError && editError.founded && <p style={{ color: 'red' }}>{editError.founded}</p>}
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
                                      onChange={(e) =>
                                        setEditProfileData({
                                          ...editProfileData,
                                          speciality: e.target.value,
                                        })
                                      }
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={
                                        profileData?.whatsMakesUsSpecial || ""
                                      }
                                    />
                                    {editError && editError.speciality && <p style={{ color: 'red' }}>{editError.speciality}</p>}
                                  </fieldset>
                                </Col>
                                <Col lg="12">
                                  <fieldset>
                                    <label
                                      className="text-lg"
                                      style={{ width: "100%" }}
                                    >
                                      Website
                                    </label>
                                    <input
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="email"
                                      type={"text"}
                                      onChange={(e) =>
                                        setEditProfileData({
                                          ...editProfileData,
                                          websiteLink: e.target.value,
                                        })
                                      }
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={
                                        profileData?.whatsMakesUsSpecial || ""
                                      }
                                    />
                                    {editError && editError.websiteLink && <p style={{ color: 'red' }}>{editError.websiteLink}</p>}
                                  </fieldset>
                                </Col>
                              </div>
                            </Col>
                            <Col lg="6">
                              <h2
                                className="text-2xl"
                                style={{ color: "#39BEC1" }}
                              >
                                Company Info
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
                                      onChange={(e) =>
                                        setEditProfileData({
                                          ...editProfileData,
                                          companyName: e.target.value,
                                        })
                                      }
                                      //   value={user.name}
                                      //   onChange={getUserData}
                                      placeholder={
                                        profileData?.companyName || ""
                                      }
                                      required
                                    />
                                    {editError && editError.companyName && <p style={{ color: 'red' }}>{editError.companyName}</p>}
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
                                      onChange={(e) =>
                                        setEditProfileData({
                                          ...editProfileData,
                                          sop: e.target.value,
                                        })
                                      }
                                      //   value={user.email}
                                      //   onChange={getUserData}
                                      placeholder={
                                        profileData?.companyScope || ""
                                      }
                                      required
                                    />
                                    {editError && editError.sop && <p style={{ color: 'red' }}>{editError.sop}</p>}
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
                                      placeholder={
                                        profileData?.salaryRange || ""
                                      }
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
                                        onChange={(e) =>
                                          setEditProfileData({
                                            ...editProfileData,
                                            headquarters: e.target.value,
                                          })
                                        }
                                        //   value={user.number}
                                        //   onChange={getUserData}
                                        placeholder={
                                          profileData?.headquarters || ""
                                        }
                                      />
                                    </div>
                                    {editError && editError.headquarters && <p style={{ color: 'red' }}>{editError.headquarters}</p>}
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
                                      onChange={(e) =>
                                        setEditProfileData({
                                          ...editProfileData,
                                          location: e.target.value,
                                        })
                                      }
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={
                                        profileData?.companyLocation || ""
                                      }
                                    />
                                    {editError && editError.companyLocation && <p style={{ color: 'red' }}>{editError.companyLocation}</p>}
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
                                      onChange={(e) =>
                                        setEditProfileData({
                                          ...editProfileData,
                                          companyDesc: e.target.value,
                                        })
                                      }
                                      placeholder={
                                        profileData?.description || ""
                                      }
                                      className="form-control"
                                    />
                                    {editError && editError.companyDesc && <p style={{ color: 'red' }}>{editError.companyDesc}</p>}
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
                            onClick={profileFunc}
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
                          {profileData?.firstName && profileData?.lastName
                            ? profileData.firstName + " " + profileData.lastName
                            : "Gia Jay"}
                        </h2>
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Email</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.email
                            ? profileData.email
                            : "gaiaewreeytyrt@gmail.com"}
                        </h2>
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Phone Number</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.phoneNumber
                            ? profileData.phoneNumber
                            : "61453472"}
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
                          {profileData?.companyName
                            ? profileData.companyName
                            : "Gia (PVT) LTD"}
                        </h2>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Company Scope</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.companyScope
                            ? profileData.companyScope
                            : "IT Industry"}
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
                          {profileData?.companyLocation
                            ? profileData.companyLocation
                            : "Huston"}
                        </h2>
                      </div>
                    </Col>
                    <Col lg="12" className="pt-4">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">
                          Company Description
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.companyDesc
                            ? profileData.companyDesc
                            : `A .It has survived t is a long established fact that
                          a reader will be distracted by the readable content of
                          a page when looking at its layout. The point of using
                          Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content
                          here, content here', making it look like readable
                          English.`}
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
