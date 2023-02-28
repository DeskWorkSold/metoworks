import React, { useState, Component, useCallback } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import {
  BsArrowBarLeft,
  BsArrowLeft,
  BsArrowRight,
  BsBookmark,
  BsCoin,
  BsPencilSquare,
  BsReceipt,
} from "react-icons/bs";
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
import Loader from "../../../assets/loader.gif";

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
                    <option>
                      Insurance Professionals (back-end functions)
                    </option>
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
                    {jobData?.jobFunction == "DEFAULT" && (
                      <option value="" disabled="">
                        Sub Job Function
                      </option>
                    )}
                    {jobData?.jobFunction == "HR & Admin" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          HR Director / Manager
                        </option>
                        <option value="DEFAULT" disabled="">
                          Admin Manager
                        </option>
                        <option value="DEFAULT" disabled="">
                          C&B Professional
                        </option>
                        <option value="DEFAULT" disabled="">
                          Training Professional
                        </option>
                        <option value="DEFAULT" disabled="">
                          Organizational Development Professional
                        </option>
                        <option value="DEFAULT" disabled="">
                          Recruiters
                        </option>
                        <option value="DEFAULT" disabled="">
                          APAC HR
                        </option>
                      </>
                    )}
                    {jobData?.jobFunction == "General Management" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          International HR
                        </option>
                        <option value="DEFAULT" disabled="">
                          EMEA HR
                        </option>
                        <option value="DEFAULT" disabled="">
                          CEO
                        </option>
                        <option value="DEFAULT" disabled="">
                          COO
                        </option>
                        <option value="DEFAULT" disabled="">
                          CFO
                        </option>
                        <option value="DEFAULT" disabled="">
                          CTO
                        </option>
                        <option value="DEFAULT" disabled="">
                          CMO
                        </option>
                        <option value="DEFAULT" disabled="">
                          CIO
                        </option>
                        <option value="DEFAULT" disabled="">
                          In-House Legal Council
                        </option>
                      </>
                    )}
                    {jobData?.jobFunction == "Finance and Accounting" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          Financial Controller
                        </option>
                        <option value="DEFAULT" disabled="">
                          International / Regional FC
                        </option>
                        <option value="DEFAULT" disabled="">
                          Accounting Manager
                        </option>
                        <option value="DEFAULT" disabled="">
                          Finance Manager
                        </option>
                        <option value="DEFAULT" disabled="">
                          Internal Audit
                        </option>
                      </>
                    )}
                    {jobData?.jobFunction == "Sales and Marketing" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          Sales and Marketing Director
                        </option>
                        <option value="DEFAULT" disabled="">
                          Digital Marketer
                        </option>
                        <option value="DEFAULT" disabled="">
                          Regional / International Marketer
                        </option>
                        <option value="DEFAULT" disabled="">
                          Local Corp. Marketer
                        </option>
                        <option value="DEFAULT" disabled="">
                          O2O Experts
                        </option>
                      </>
                    )}
                    {jobData?.jobFunction ==
                      "Banking and Financial Institue Professionals" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          Banking and Financial Institue Professionals
                        </option>
                        <option value="DEFAULT" disabled="">
                          Funds Professionals
                        </option>
                        <option value="DEFAULT" disabled="">
                          Responsible Director
                        </option>
                      </>
                    )}
                    {jobData?.jobFunction ==
                      "Insurance Professionals (back-end functions)" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          Actuary
                        </option>
                        <option value="DEFAULT" disabled="">
                          Team Leaders
                        </option>
                        <option value="DEFAULT" disabled="">
                          Trainers
                        </option>
                        <option value="DEFAULT" disabled="">
                          Policy Admin
                        </option>
                      </>
                    )}
                    {jobData?.jobFunction ==
                      "IT Professionals (Specific Fields)" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          Network Security
                        </option>
                        <option value="DEFAULT" disabled="">
                          Hackers (White)
                        </option>
                        <option value="DEFAULT" disabled="">
                          Fin Tech
                        </option>
                        <option value="DEFAULT" disabled="">
                          MedTech
                        </option>
                        <option value="DEFAULT" disabled="">
                          BioTech
                        </option>
                      </>
                    )}
                    {jobData?.jobFunction == "Manufacturing" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          Automation Professional
                        </option>
                        <option value="DEFAULT" disabled="">
                          Plastic Professional
                        </option>
                        <option value="DEFAULT" disabled="">
                          Mechanic Professional
                        </option>
                        <option value="DEFAULT" disabled="">
                          China Plants Management
                        </option>
                        <option value="DEFAULT" disabled="">
                          Regional Plants Management
                        </option>
                        <option value="DEFAULT" disabled="">
                          Regional Legal Advisors
                        </option>
                      </>
                    )}
                    {jobData?.jobFunction ==
                      "Real Estate (Surveyers / reasearchers etc.)" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          Surveyers (All Aspects)
                        </option>
                        <option value="DEFAULT" disabled="">
                          Researchers
                        </option>
                        <option value="DEFAULT" disabled="">
                          Valuation and Advisory
                        </option>
                        <option value="DEFAULT" disabled="">
                          Property Management
                        </option>
                        <option value="DEFAULT" disabled="">
                          Sales Leaders
                        </option>
                        <option value="DEFAULT" disabled="">
                          Leasing Leaders
                        </option>
                        <option value="DEFAULT" disabled="">
                          Project Managements
                        </option>
                        <option value="DEFAULT" disabled="">
                          Investment Management
                        </option>
                        <option value="DEFAULT" disabled="">
                          Capital Market
                        </option>
                      </>
                    )}
                    {jobData?.jobFunction == "Professional Designers" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          Interial Design
                        </option>
                        <option value="DEFAULT" disabled="">
                          Graphic Designer
                        </option>
                        <option value="DEFAULT" disabled="">
                          Hotel interial design
                        </option>
                        <option value="DEFAULT" disabled="">
                          Retail store design
                        </option>
                      </>
                    )}
                    {jobData?.jobFunction == "Lecturers / Teachers" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          Marketing
                        </option>
                        <option value="DEFAULT" disabled="">
                          Legal
                        </option>
                        <option value="DEFAULT" disabled="">
                          Languages
                        </option>
                        <option value="DEFAULT" disabled="">
                          STEAM
                        </option>
                        <option value="DEFAULT" disabled="">
                          International Business
                        </option>
                      </>
                    )}
                    {jobData?.jobFunction == "Engineering / Architect" && (
                      <>
                        <option value="DEFAULT" disabled="">
                          Chief Engineer
                        </option>
                        <option value="DEFAULT" disabled="">
                          Project Manager
                        </option>
                        <option value="DEFAULT" disabled="">
                          Architect
                        </option>
                      </>
                    )}
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

export const PublishedJob = () => {
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" },
    { id: 11, name: "Item 11" },
    { id: 12, name: "Item 12" },
    { id: 13, name: "Item 13" },
    { id: 14, name: "Item 14" },
    { id: 15, name: "Item 15" },
  ];

  const [mySize, setMySize] = useState(4);
  const [fromData, setFromData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalItems = data.length;
  const handlePageChange = (pageNumber) => {
    console.log(pageNumber, "pageNumbers");

    let from = (pageNumber - 1) * 4;

    setFromData(from);
    setTimeout(() => {
      initialFun();
    }, 500);
    setCurrentPage(pageNumber);
  };

  const data1 = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" },
    { id: 11, name: "Item 11" },
    { id: 12, name: "Item 12" },
    { id: 13, name: "Item 13" },
    { id: 14, name: "Item 14" },
    { id: 15, name: "Item 15" },
  ];
  const [currentPage1, setCurrentPage1] = useState(1);
  const itemsPerPage1 = 4;
  const totalItems1 = data1.length;

  console.log(fromData, "dataaaa");

  const handlePageChange1 = (pageNumber1) => {
    console.log(pageNumber1, "pageNumberssssssss");

    let from = (pageNumber1 - 1) * 4;

    setFromData(from);
    setTimeout(() => {
      initialFun();
    }, 500);

    setCurrentPage1(pageNumber1);
  };
  console.log(fromData, "fromData");
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
  const [count, setCount] = useState(null);

  const [userId, setUserId] = useState("");
  const [isToken, setIsToken] = useState({});
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
  const [errors, setErrors] = useState();

  const navigate = useNavigate();

  // console.log(profileData, 'profile Data');
  useEffect(() => {
    checkAuth();
    setIsToken(localStorage.getItem("access-token"));
    // let id = localStorage.getItem('id')
    setUserId();
    setTimeout(() => {
      initialFun();
    }, 1000);
    // profileImageFunc()
  }, []);

  const checkAuth = async () => {
    const token = await localStorage.getItem("access-token");
    if (!token) {
      navigate("/login");
    }
  };

  const [isSalaryRange, setisSalaryRange] = useState({
    gte: "",
    lte: "",
  });
  const [isProjectTimeline, setIsProjectTimeline] = useState({
    gte: "",
    lte: "",
  });

  const [isEmail, setIsEmail] = useState("");
  const [isProfileData, setIsProfileData] = useState({});

  // console.log(isProfileData, 'fucccccccccccccccccccccccccccccccccccccccccccccking');
  const initialFun = () => {
    axios
      .get(`api/v1/job-post?from=${fromData}&size=${mySize}&submitted=true`)
      .then((res) => {
        let data = res.data.data.data;
        // let expdata = data.filter((e, i) => {
        //   return e._source.createdAt === new Date().getDate();
        // });
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, [currentPage, currentPage1]);

  console.log(searchData, "dataaa");

  const date = new Date();
  console.log(searchData, "daaaaaaaaataaaaaaaaaaaa");
  useEffect(() => {
    axios
      .get(`api/v1/job-post?from=0&size=4&submitted=true`)
      .then((res) => {
        let data = res.data.data.data;
        let count = res.data.data.count;
        setCount(count);
        let expdata = data.filter((e, i) => {
          return e._source.createdAt === new Date().getDate();
        });
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(count, "count");

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
  const [success, setSuccess] = useState(false);

  // edit
  const MyVerticallyCenteredModalPublish = (props) => {
    console.log(props, "proooooooooops");
    const jobData = {
      title: "",
      industry: "",
      jobFunction: "",
      jobSubFunction: "",
      location: "",
      description: "",
      requirements: "",
      profession: "",
      educationLevel: "",
      empType: "",
      projectTimelineGte: "",
      projectTimelineLte: "",
      postedDate: new Date(),
      expiryDate: `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`,
      modeOfWork: "",
      noOfOpenings: "",
      salaryCurrency: "",
      salaryRange: { gte: isSalaryRange.gte, lte: isSalaryRange.lte },
      salaryType: "negotiable",
      salaryPayFreq: "",
      additionalEmails: [],
      closed: false,
    };

    const profileFunc = () => {
      // console.log(isProjectTimeline?.gte, "my name is odho");
      // let currentDate = new Date();
      const data = {
        title: jobData.title ? jobData.title : props?.props?._source?.title,
        industry: jobData.industry
          ? jobData.industry
          : props?.props?._source?.industry,
        jobFunction: jobData.jobFunction
          ? jobData.jobFunction
          : props?.props?._source?.jobFunction,
        location: jobData.location
          ? jobData.location
          : props?.props?._source?.location,
        description: jobData.description
          ? jobData.description
          : props?.props?._source?.description,
        requirements: jobData.requirements
          ? jobData.requirements
          : props?.props?._source?.requirements,
        profession: jobData.profession
          ? jobData.profession
          : props?.props?._source?.profession,
        projectTimeline: {
          gte: jobData.projectTimelineGte
            ? jobData.projectTimelineGte
            : props?.props?._source?.projectTimeline.gte,
          lte: jobData.projectTimelineLte
            ? jobData.projectTimelineLte
            : props?.props?._source?.projectTimeline.lte,
        },
        noOfOpenings: jobData.noOfOpenings.toString()
          ? jobData.noOfOpenings.toString()
          : props?.props?._source?.noOfOpenings.toString(),
        postedDate: props?.props?._source?.postedDate.substring(0, 10),
        closed: false,
        modeOfWork: jobData.modeOfWork
          ? jobData.modeOfWork
          : props?.props?._source?.modeOfWork,
        submitted: true,
        educationLevel: jobData.educationLevel
          ? jobData.educationLevel
          : props?.props?._source?.educationLevel,
        empType: jobData.empType
          ? jobData.empType
          : props?.props?._source?.empType,
        // salaryPayFreq: jobData.salaryPayFreq ? jobData.salaryPayFreq : props?.props?._source?.salaryPayFreq,
        // salaryCurrency: jobData.salaryCurrency ? jobData.salaryCurrency : props?.props?._source?.salaryCurrency,
        // "expiryDate": props?.props?._source?.expiryDate,
        id: props.props._id,
        jobSubFunction: jobData.jobSubFunction
          ? jobData.jobSubFunction
          : props?.props?._source?.jobSubFunction,
        salaryRange: {
          gte: isSalaryRange?.gte
            ? isSalaryRange?.gte
            : props?.props?._source?.salaryRange.gte,
          lte: isSalaryRange?.lte
            ? isSalaryRange?.lte
            : props?.props?._source?.salaryRange.lte,
        },
      };

      let values = Object.values(data);

      // console.log(values,"values")
      values = values.every((e, i) => e !== "");

      // console.log(data, "dataa");
      if (values) {
        axios
          .patch(`api/v1/job-post?id=${props.props._id}`, data)
          .then((res) => {
            console.log(res, "profile data successfully added");
            if (res) {
              // profileFunc(false);
              setTimeout(() => {
                initialFun();
              }, 1000);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        let newErrors = {};
        if (!data.title) {
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
        if (!isProjectTimeline.projectTimelinegte) {
          newErrors.gte = "Job gte is required";
        }
        if (!isProjectTimeline.projectTimelinelte) {
          newErrors.lte = "Job lte is required";
        }
        if (!isSalaryRange.salaryRangegte) {
          newErrors.gte = "Job gte is required";
        }
        if (!isSalaryRange.salaryRangelte) {
          newErrors.lte = "Job lte is required";
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
      } else if (!jobData.modeOfWork) {
        newErrors.modeOfWork = "Job madeOfWork is required";
      } else if (!jobData.noOfOpenings) {
        newErrors.noOfOpenings = "Job noOfOpenings is required";
      } else if (!jobData.salaryCurrency) {
        newErrors.salaryCurrency = "Job salaryCurrency is required";
      } else if (!jobData.salaryType) {
        newErrors.salaryType = "Job salaryCurrency is required";
      } else if (!jobData.salaryPayFreq) {
        newErrors.salaryPayFreq = "Job salaryCurrency is required";
      } else if (!isProjectTimeline.gte) {
        newErrors.projectTimelinegte = "Job gte is required";
      } else if (!isProjectTimeline.lte) {
        newErrors.projectTimelinelte = "Job lte is required";
      } else if (!isSalaryRange.gte) {
        newErrors.salaryRangegte = "Job gte is required";
      } else if (!isSalaryRange.lte) {
        newErrors.salaryRangelte = "Job lte is required";
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
    const [functionJobVal, setFunctionJobVal] = useState("");

    const handleChange = (e) => {
      setFunctionJobVal(e.target.value);
      jobData.jobFunction = e.target.value;
    };

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
                        onChange={(e) => (jobData.title = e.target.value)}
                        //   value={user.number}
                        //   onChange={getUserData}
                        placeholder={props.props._source.title}
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
                        onChange={(e) => (jobData.industry = e.target.value)}
                        placeholder={props.props._source.industry}
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
                      {errors && errors.industry && (
                        <p style={{ color: "red" }}>{errors.industry}</p>
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
                        Job Function
                      </label>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => handleChange(e)}
                        placeholder={props.props._source.jobFunction}
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
                        <option>
                          Insurance Professionals (back-end functions)
                        </option>
                        <option>IT Professionals (Specific Fields)</option>
                        <option>Manufacturing</option>
                        <option>Finance and Accounting</option>
                        <option>Professional Designers</option>
                        <option>Lecturers / Teachers</option>
                        <option>Engineering / Architect</option>
                        <option>Others</option>
                      </Form.Select>
                      {errors && errors.jobFunction && (
                        <p style={{ color: "red" }}>{errors.jobFunction}</p>
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
                        Sub Job Function
                      </label>
                      <Form.Select
                        aria-label="Default select example"
                        // onChange={
                        //   jobData.subJobFunction = e.target.value}
                      >
                        {functionJobVal == "DEFAULT" && (
                          <option value="" disabled="">
                            Sub Job Function
                          </option>
                        )}
                        {functionJobVal == "HR & Admin" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              HR Director / Manager
                            </option>
                            <option value="DEFAULT" disabled="">
                              Admin Manager
                            </option>
                            <option value="DEFAULT" disabled="">
                              C&B Professional
                            </option>
                            <option value="DEFAULT" disabled="">
                              Training Professional
                            </option>
                            <option value="DEFAULT" disabled="">
                              Organizational Development Professional
                            </option>
                            <option value="DEFAULT" disabled="">
                              Recruiters
                            </option>
                            <option value="DEFAULT" disabled="">
                              APAC HR
                            </option>
                          </>
                        )}
                        {functionJobVal == "General Management" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              International HR
                            </option>
                            <option value="DEFAULT" disabled="">
                              EMEA HR
                            </option>
                            <option value="DEFAULT" disabled="">
                              CEO
                            </option>
                            <option value="DEFAULT" disabled="">
                              COO
                            </option>
                            <option value="DEFAULT" disabled="">
                              CFO
                            </option>
                            <option value="DEFAULT" disabled="">
                              CTO
                            </option>
                            <option value="DEFAULT" disabled="">
                              CMO
                            </option>
                            <option value="DEFAULT" disabled="">
                              CIO
                            </option>
                            <option value="DEFAULT" disabled="">
                              In-House Legal Council
                            </option>
                          </>
                        )}
                        {functionJobVal == "Finance and Accounting" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              Financial Controller
                            </option>
                            <option value="DEFAULT" disabled="">
                              International / Regional FC
                            </option>
                            <option value="DEFAULT" disabled="">
                              Accounting Manager
                            </option>
                            <option value="DEFAULT" disabled="">
                              Finance Manager
                            </option>
                            <option value="DEFAULT" disabled="">
                              Internal Audit
                            </option>
                          </>
                        )}
                        {functionJobVal == "Sales and Marketing" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              Sales and Marketing Director
                            </option>
                            <option value="DEFAULT" disabled="">
                              Digital Marketer
                            </option>
                            <option value="DEFAULT" disabled="">
                              Regional / International Marketer
                            </option>
                            <option value="DEFAULT" disabled="">
                              Local Corp. Marketer
                            </option>
                            <option value="DEFAULT" disabled="">
                              O2O Experts
                            </option>
                          </>
                        )}
                        {functionJobVal ==
                          "Banking and Financial Institue Professionals" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              Banking and Financial Institue Professionals
                            </option>
                            <option value="DEFAULT" disabled="">
                              Funds Professionals
                            </option>
                            <option value="DEFAULT" disabled="">
                              Responsible Director
                            </option>
                          </>
                        )}
                        {functionJobVal ==
                          "Insurance Professionals (back-end functions)" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              Actuary
                            </option>
                            <option value="DEFAULT" disabled="">
                              Team Leaders
                            </option>
                            <option value="DEFAULT" disabled="">
                              Trainers
                            </option>
                            <option value="DEFAULT" disabled="">
                              Policy Admin
                            </option>
                          </>
                        )}
                        {functionJobVal ==
                          "IT Professionals (Specific Fields)" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              Network Security
                            </option>
                            <option value="DEFAULT" disabled="">
                              Hackers (White)
                            </option>
                            <option value="DEFAULT" disabled="">
                              Fin Tech
                            </option>
                            <option value="DEFAULT" disabled="">
                              MedTech
                            </option>
                            <option value="DEFAULT" disabled="">
                              BioTech
                            </option>
                          </>
                        )}
                        {functionJobVal == "Manufacturing" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              Automation Professional
                            </option>
                            <option value="DEFAULT" disabled="">
                              Plastic Professional
                            </option>
                            <option value="DEFAULT" disabled="">
                              Mechanic Professional
                            </option>
                            <option value="DEFAULT" disabled="">
                              China Plants Management
                            </option>
                            <option value="DEFAULT" disabled="">
                              Regional Plants Management
                            </option>
                            <option value="DEFAULT" disabled="">
                              Regional Legal Advisors
                            </option>
                          </>
                        )}
                        {functionJobVal ==
                          "Real Estate (Surveyers / reasearchers etc.)" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              Surveyers (All Aspects)
                            </option>
                            <option value="DEFAULT" disabled="">
                              Researchers
                            </option>
                            <option value="DEFAULT" disabled="">
                              Valuation and Advisory
                            </option>
                            <option value="DEFAULT" disabled="">
                              Property Management
                            </option>
                            <option value="DEFAULT" disabled="">
                              Sales Leaders
                            </option>
                            <option value="DEFAULT" disabled="">
                              Leasing Leaders
                            </option>
                            <option value="DEFAULT" disabled="">
                              Project Managements
                            </option>
                            <option value="DEFAULT" disabled="">
                              Investment Management
                            </option>
                            <option value="DEFAULT" disabled="">
                              Capital Market
                            </option>
                          </>
                        )}
                        {functionJobVal == "Professional Designers" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              Interial Design
                            </option>
                            <option value="DEFAULT" disabled="">
                              Graphic Designer
                            </option>
                            <option value="DEFAULT" disabled="">
                              Hotel interial design
                            </option>
                            <option value="DEFAULT" disabled="">
                              Retail store design
                            </option>
                          </>
                        )}
                        {functionJobVal == "Lecturers / Teachers" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              Marketing
                            </option>
                            <option value="DEFAULT" disabled="">
                              Legal
                            </option>
                            <option value="DEFAULT" disabled="">
                              Languages
                            </option>
                            <option value="DEFAULT" disabled="">
                              STEAM
                            </option>
                            <option value="DEFAULT" disabled="">
                              International Business
                            </option>
                          </>
                        )}
                        {functionJobVal == "Engineering / Architect" && (
                          <>
                            <option value="DEFAULT" disabled="">
                              Chief Engineer
                            </option>
                            <option value="DEFAULT" disabled="">
                              Project Manager
                            </option>
                            <option value="DEFAULT" disabled="">
                              Architect
                            </option>
                          </>
                        )}
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
                        onChange={(e) => (jobData.location = e.target.value)}
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
                      {errors && errors.location && (
                        <p style={{ color: "red" }}>{errors.location}</p>
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
                        Job Description
                      </label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={props.props._source.description}
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          jobData.description = data;
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                    </fieldset>
                    {errors && errors.description && (
                      <p style={{ color: "red" }}>{errors.description}</p>
                    )}
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Job Requirements
                      </label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={props.props._source.requirements}
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          // console.log({ event, editor, data });
                          jobData.requirements = data;
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                    </fieldset>
                    {errors && errors.requirements && (
                      <p style={{ color: "red" }}>{errors.requirements}</p>
                    )}
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
                          (jobData.educationLevel = e.target.value)
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
                      {errors && errors.educationLevel && (
                        <p style={{ color: "red" }}>{errors.educationLevel}</p>
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
                        Employment Type
                      </label>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => (jobData.empType = e.target.value)}
                      >
                        <option value="DEFAULT" disabled="">
                          Select Employment Type
                        </option>
                        <option>PART TIME</option>
                        <option>CASUAL–NO SET HOURS OR DAYS OF WORK</option>
                        <option>PROJECT BASED</option>
                        <option>OTHER</option>
                      </Form.Select>
                      {errors && errors.empType && (
                        <p style={{ color: "red" }}>{errors.empType}</p>
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
                            (jobData.projectTimelineGte = e.target.value)
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
                      {errors && errors.projectTimelinegte && (
                        <p style={{ color: "red" }}>
                          {errors.projectTimelinegte}
                        </p>
                      )}
                      <Col>
                        <label className="text-l" style={{ color: "#7A7979" }}>
                          End :
                        </label>
                        <input
                          onChange={(e) =>
                            (jobData.projectTimelineLte = e.target.value)
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
                      {errors && errors.projectTimelinelte && (
                        <p style={{ color: "red" }}>
                          {errors.projectTimelinelte}
                        </p>
                      )}
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
                        onChange={(e) => (jobData.profession = e.target.value)}
                        //   value={user.name}
                        //   onChange={getUserData}
                        placeholder="Enter Profession"
                        required
                      />
                    </fieldset>
                  </Col>
                  {errors && errors.profession && (
                    <p style={{ color: "red" }}>{errors.profession}</p>
                  )}
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
                        onChange={(e) => (jobData.modeOfWork = e.target.value)}
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
                    {errors && errors.modeOfWork && (
                      <p style={{ color: "red" }}>{errors.modeOfWork}</p>
                    )}
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
                          (jobData.noOfOpenings = e.target.value)
                        }
                        //   value={user.name}
                        //   onChange={getUserData}
                        placeholder="Enter No. of Openings
              "
                        required
                      />
                    </fieldset>
                    {errors && errors.noOfOpenings && (
                      <p style={{ color: "red" }}>{errors.noOfOpenings}</p>
                    )}
                  </Col>
                  <Col lg="12">
                    <fieldset>
                      <label className="text-lg" style={{ width: "100%" }}>
                        Salary Info
                      </label>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) =>
                          (jobData.salaryCurrency = e.target.value)
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
                    {errors && errors.salaryCurrency && (
                      <p style={{ color: "red" }}>{errors.salaryCurrency}</p>
                    )}
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
                            (jobData.salaryRange.gte = e.target.value)
                          }
                          //   value={user.name}
                          //   onChange={getUserData}
                          placeholder="Minimum Salary"
                          required
                        />
                      </Col>
                      {errors && errors.salaryRangegte && (
                        <p style={{ color: "red" }}>{errors.salaryRangegte}</p>
                      )}
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
                            (jobData.salaryRange.lte = e.target.value)
                          }
                          //   value={user.name}
                          //   onChange={getUserData}
                          placeholder="Maximum Salary
              "
                          required
                        />
                      </Col>
                      {errors && errors.salaryRangelte && (
                        <p style={{ color: "red" }}>{errors.salaryRangelte}</p>
                      )}
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
                      />
                      <label
                        class="form-check-label"
                        for="exampleRadio3"
                        style={{ color: "#7A7979" }}
                      >
                        Others
                      </label>
                    </fieldset>
                    {errors && errors.salaryType && (
                      <p style={{ color: "red" }}>{errors.salaryType}</p>
                    )}
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
                          (jobData.salaryPayFreq = e.target.value)
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
                          (jobData.salaryPayFreq = e.target.value)
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
                          (jobData.salaryPayFreq = e.target.value)
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
                          (jobData.salaryPayFreq = e.target.value)
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
                    {errors && errors.salaryPayFreq && (
                      <p style={{ color: "red" }}>{errors.salaryPayFreq}</p>
                    )}
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
                  {errors && errors.isEmail && (
                    <p style={{ color: "red" }}>{errors.isEmail}</p>
                  )}
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
              variant="primary"
              style={{ background: "none", color: "#39BEC1" }}
              onClick={() => profileFunc()}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

  console.log(searchData, "search");

  console.log(currentPage, "currentPage");

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
              {searchData.length > 0 && searchData ? (
                <TabPanel>
                  <Row>
                    {searchData.length > 0 &&
                      searchData
                        // ?.filter((items, index) => {
                        //   console.log(items, "items");
                        //   const startIndex = (currentPage - 1) * itemsPerPage;
                        //   const endIndex = startIndex + itemsPerPage;
                        //   return index >= startIndex && index < endIndex;
                        // })
                        .map((items, keys) => {
                          console.log(items, "itemsss");
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
                                      <div className="p-3 webkit posting">
                                        <div>
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
                                              style={{
                                                fontSize: "20px",
                                                alignItems: "center",
                                              }}
                                              onClick={() => btnEdit(items)}
                                            >
                                              <BsPencilSquare /> &nbsp; Edit Job
                                            </div>
                                          </Button>
                                          {items.clicked == true && (
                                            <MyVerticallyCenteredModalPublish
                                              show={modalShowPublish}
                                              props={items}
                                              onHide={() => modalshow(items)}
                                            />
                                          )}
                                        </div>
                                        <p>
                                          Posted Date :{" "}
                                          {items?._source?.createdAt.substring(
                                            0,
                                            10
                                          )}
                                          <span className="mrdg">
                                            Expiry Date :{" "}
                                            {items?._source?.expiryDate.substring(
                                              0,
                                              10
                                            )}
                                          </span>
                                        </p>
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
                                              HKD{" "}
                                              {items?._source?.salaryRange &&
                                                items?._source?.salaryRange
                                                  .gte}{" "}
                                              - HKD{" "}
                                              {items?._source?.salaryRange &&
                                                items?._source?.salaryRange.lte}
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
                                          <div>
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
                  <Row>
                    <Col>
                      <div className="dddrrr align-items-center">
                        {/* <BsArrowLeft className="text-2xl" /> */}
                        {Array.from({
                          length: Math.ceil(
                            currentPage + 1 < count / 4 && currentPage > 3
                              ? currentPage + 4
                              : currentPage + 4 > count / 4
                              ? Math.ceil(count / 4)
                              : 4
                          ),
                        }).map((_, index) => {
                          return (
                            <button
                              className="pagination py-2 px-3"
                              key={index}
                              onClick={() => handlePageChange(index + 1)}
                              disabled={currentPage === index + 1}
                            >
                              {index + 1}
                            </button>
                          );
                        })}
                        {/* <BsArrowRight className="text-2xl"   /> */}
                      </div>
                    </Col>
                  </Row>
                </TabPanel>
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
              {searchData.length > 0 && searchData ? (
                <TabPanel>
                  <Row>
                    {searchData.length > 0 &&
                      searchData
                        // ?.filter((items, index1) => {
                        //   console.log(items, "items");
                        //   const startIndex1 = (currentPage1 - 1) * itemsPerPage1;
                        //   const endIndex1 = startIndex1 + itemsPerPage1;
                        //   return index1 >= startIndex1 && index1 < endIndex1;
                        // })
                        .map((items, key) => {
                          console.log(items, "expiredItem");
                          let expired = "";
                          if (items._source && items._source.expiryDate) {
                            let expiry = items._source.expiryDate;

                            expiry = new Date(expiry);
                            console.log(typeof expiry, "expiry");

                            if (expiry) {
                              let time = expiry.getTime();
                              let todayTime = new Date().getTime();
                              let timeDifference = time - todayTime;

                              expired = Math.floor(
                                timeDifference / 1000 / 60 / 60 / 24
                              );
                            }
                            console.log(expired, "expired");
                          }

                          if (expired < 0) {
                            return (
                              <div>
                                <Col lg="12" key={key}>
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
                                        <div className="p-3 webkit posting">
                                          <div>
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
                                                style={{
                                                  fontSize: "20px",
                                                  alignItems: "center",
                                                }}
                                                onClick={() => btnEdit(items)}
                                              >
                                                <BsPencilSquare /> &nbsp; Edit
                                                Job
                                              </div>
                                            </Button>
                                            {items.clicked == true && (
                                              <MyVerticallyCenteredModalPublish
                                                show={modalShowPublish}
                                                props={items}
                                                onHide={() => modalshow(items)}
                                              />
                                            )}
                                          </div>
                                          <p>
                                            Posted Date :{" "}
                                            {items?._source?.createdAt &&
                                              items?._source?.createdAt.substring(
                                                0,
                                                10
                                              )}
                                            &nbsp;&nbsp;&nbsp;Expiry Date :{" "}
                                            {items?._source?.expiryDate &&
                                              items?._source?.expiryDate.substring(
                                                0,
                                                10
                                              )}
                                          </p>
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
                                                HKD{" "}
                                                {items?._source?.salaryRange &&
                                                  items?._source?.salaryRange
                                                    .gte}{" "}
                                                - HKD{" "}
                                                {items?._source?.salaryRange &&
                                                  items?._source?.salaryRange
                                                    .lte}
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
                              </div>
                            );
                          }
                        })}
                  </Row>
                  <Row>
                    <Col>
                      <div className="dddrrr">
                        {/* <BsArrowBarLeft /> */}
                        {Array.from({
                          length: Math.ceil(
                            currentPage1 + 4 > count / 4
                              ? Math.floor(count / 4)
                              : currentPage1 + 1 < Math.floor(count / 4) &&
                                currentPage1 > 3
                              ? currentPage1 + 4
                              : 4
                          ),
                        }).map((_, index1) => (
                          <button
                            className="pagination py-2 px-3"
                            key={index1}
                            onClick={() => handlePageChange1(index1 + 1)}
                            disabled={currentPage1 === index1 + 1}
                          >
                            {index1 + 1}
                          </button>
                        ))}
                      </div>
                    </Col>
                  </Row>
                </TabPanel>
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
            </Tabs>
          </Container>
        </Row>
      </Container>
    </Container>
  );
};
