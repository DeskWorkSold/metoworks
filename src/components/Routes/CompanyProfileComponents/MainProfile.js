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
import axios from '../../../utils/axios.api'

function MyVerticallyCenteredModal(props) {
  const [isSalaryRange, setisSalaryRange] = useState({
    gte : '',
    lte : ''
  })
  const [isProjectTimeline, setIsProjectTimeline] = useState({
    gte : '',
    lte : ''
  })

  const [isEmail, setIsEmail] = useState('')
  // console.log(isSalaryRange, 'saaaaaaaaaaaaaaaaaaaaaaaaaaalary');
  const [jobData, setJobData] = useState ({
    title : '',
    industry : '',
    jobFunction : '',
    jobSubFunction : 'dummy',
    location : '',
    description : '',
    requirements : '',
    profession : '',
    educationLevel : '',
    empType : '',
    projectTimeline : { gte : '', lte : ''},
    postedDate : '',
    expiryDate : '',
    madeOfWork : '',
    noOfOpenings : '',
    salaryCurrency : '',
    salaryRange : { gte : isSalaryRange.gte,
  lte : isSalaryRange.lte},
    // salaryType : '', /// look after
    salaryPayFreq : '',
    additionalEmails : [],
     closed : false
  })

  // console.log(jobData, 'jobDaaaaaaaataaa');
  
 
  // submitted : true when dfat post publised 
  const navigate = useNavigate()

  const PostFunc = () => {
    let Data = {
      title : jobData.title,
      industry : jobData.industry,
      jobFunction : jobData.jobFunction,
      jobSubFunction : 'dummy',
      location : jobData.location,
      description : jobData.description,
      requirements : jobData.requirements,
      profession : jobData.profession,
      educationLevel : jobData.educationLevel,
      empType : jobData.empType,
      projectTimeline : { gte : isProjectTimeline.gte, lte : isProjectTimeline.gte},
      postedDate : jobData.postedDate,
      expiryDate : jobData.expiryDate,
      madeOfWork : jobData.madeOfWork,
      noOfOpenings : jobData.noOfOpenings,
      salaryCurrency : jobData.salaryCurrency,
      salaryRange : { gte : isSalaryRange.gte,
    lte : isSalaryRange.lte},
      // salaryType : '', /// look after
      salaryPayFreq : jobData.salaryPayFreq,
      additionalEmails : [isEmail],
       closed : false,
       submitted : 'true'
    }
    console.log(Data, 'daaaaaaaaaaaaaaaaaaaaaataaaaaaaaaa');
    if(Data.submitted) {
    axios.post('api/v1/job-post', Data).then((res) => {
      console.log(res, 'data sended successfully');
      // navigate('/CompanyProfile')
    }).catch((err) => {
      console.log(err);
    })
  }
  }

  const draftFunc = () => {
    axios.post('api/v1/job-post', jobData).then((res) => {
      console.log(res, 'data sended successfully');
      // navigate('/CompanyProfile')
    }).catch((err) => {
      console.log(err);
    })
  }

  
  const previewFunc = () => {
    axios.post('api/v1/job-post', jobData).then((res) => {
      console.log(res, 'data sended successfully');
      // navigate('/CompanyProfile')
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    isPostedDate()
  },[])

  
  const isPostedDate = () => {
    let date = new Date()
    let month = date.getMonth()
    let isDate = date.getDate()
    let year = date.getFullYear()
    return `${isDate}-${month + 1}-${year}`
  }
  
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
                    onChange={(e) => setJobData({...jobData, title : e.target.value})}
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
                  onChange={(e) => setJobData({...jobData, industry : e.target.value})}
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
                  <Form.Select aria-label="Default select example" 
                  onChange={(e) => setJobData({...jobData, jobFunction : e.target.value})}
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
                  <Form.Select aria-label="Default select example" onChange={(e) => setJobData({...jobData, jobSubFunction : e.target.value})}>
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
                  <Form.Select aria-label="Default select example" onChange={(e) => setJobData({...jobData, location : e.target.value})}>
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
                  <label className="text-lg" style={{ width: "100%" }} >
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
                      setJobData({...jobData, description : data})
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
                      // console.log({ event, editor, data });
                      setJobData({...jobData, jobRequirements : data})
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
                    onChange={(e) => setJobData({...jobData, profession : e.target.value})}
                  />
                </fieldset>
              </Col>
              <Col lg="12">
                <fieldset>
                  <label className="text-lg" style={{ width: "100%" }}>
                    Education Level
                  </label>
                  <Form.Select aria-label="Default select example" onChange={(e) => setJobData({...jobData, educationLevel : e.target.value})}>
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
                  <Form.Select aria-label="Default select example" onChange={(e) => setJobData({...jobData, empType : e.target.value})}>
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
                    onChange={(e) => setIsProjectTimeline({...isProjectTimeline,  gte : e.target.value})}
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
                    onChange={(e) => setIsProjectTimeline({...isProjectTimeline,  lte : e.target.value})}
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
                  <label className="text-lg" style={{ width: "100%" }} >
                    Profession
                  </label>
                  <input
                    style={{ width: "100%" }}
                    className="form-control"
                    name="firstname"
                    onChange={(e) => setJobData({...jobData, profession : e.target.value})}
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
                  <Form.Select aria-label="Default select example" 
                    onChange={(e) => setJobData({...jobData, madeOfWork : e.target.value})}
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
                    onChange={(e) => setJobData({...jobData, noOfOpenings : e.target.value})}
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
                  <Form.Select aria-label="Default select example" 
                    onChange={(e) => setJobData({...jobData, salaryCurrency : e.target.value})}
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
                      onChange={(e) => setisSalaryRange({...isSalaryRange, gte : e.target.value})}
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
                      onChange={(e) => setisSalaryRange({...isSalaryRange, lte : e.target.value})}
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
                    onChange={(e) => setJobData({...jobData, salaryType : e.target.value})}
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
                    onChange={(e) => setJobData({...jobData, salaryType : e.target.value})}
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
                    onChange={(e) => setJobData({...jobData, salaryType : e.target.value})}
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
                    onChange={(e) => setJobData({...jobData, salaryPayFreq : e.target.value})}
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
                    onChange={(e) => setJobData({...jobData, salaryPayFreq : e.target.value})}
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
                    onChange={(e) => setJobData({...jobData, salaryPayFreq : e.target.value})}
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
                    onChange={(e) => setJobData({...jobData, salaryPayFreq : e.target.value})}
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
                      value={isPostedDate}
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
export const MainProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);
  const [userId, setUserId] = useState('')
  // console.log(userId, 'user ID');
  const [isProfileData, setIsProfileData] = useState({})

 const [isToken, setIsToken] = useState({})
//  console.log(isToken, 'TOKKKKKKKKKKEN');
  const [profileData, setProfileData] = useState({
    firstName : '',
    lastName : '',
    email : '',
    phoneNumber : '',
    foundedIn : '',
    whatsMakesUsSpecial : '',
    companyName : '',
    companyScope : '',
    salaryRange : '',
    headquarters : '',
    companyLocation : '',
    description : '',
  })

  // const [profilePicture, setProfilePicture] = useState('')
 
  // console.log(profilePicture, 'profilePicture');
  console.log(isProfileData, 'isProfileData');
  
  // console.log(profileData, 'profile Data');
  useEffect(() => {
    setIsToken(localStorage.getItem("access-token"))
  // let id = localStorage.getItem('id')
  setUserId()
  initialFun()
  },[])

  const initialFun = () => {
    axios
      .get(`/api/v1/user/recruiter`)
      .then((res) => {
        let data = res.data.data;
        console.log(data, 'daaaaaaaaataaaaaaaaaaaa');
        // setIsProfileData(data)
        setProfileData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    profileData && setIsProfileData(profileData)
    // profileData && setProfilePicture(profileData)
  }, [profileData])


const profileFunc = () => {
  console.log(isProfileData, 'eeeeeeeeeeeeeeeeeeeeeeee');
  axios.patch(`http://localhost:3000/v1/users/${userId}`, isProfileData).then((res) => {
    console.log(res, 'profile data successfully added');
    setProfileData(res.data)
    if(res) {
      setShow(false);
    }
  }).catch((err) => {
    console.log(err);
  })
}

const profilePictureUpdate = () => {
  let formdata = new FormData();
  Object.entries(profileData).map(([key, value]) => {
    formdata.append(key, value);
  });
  axios.patch(`http://localhost:3000/v1/users/${userId}`, formdata)
  .then((res) => {
    console.log(res, "profile data successfully added");
    // setProfileExp(res.data, "ProfileExp");
    // ProfileExpData();
    setProfileData(res.data)
  })
  .catch((err) => {
    console.log(err);
  });
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
          src={require("../../../assets/Profile.png")}
        />
        
        <input
          style={{ display: "none" }}
          type="file"
          accept={accept}
          // onClick={}
          multiple
          onChange={(e) => {getFilesFromEvent(e).then((chosenFiles) => {
            let data = chosenFiles
            // console.log(data, 'daaaaaaataaaaa');
            // console.log(chosenFiles, 'choaaaaaaaaaaaaasen File');
            setTimeout(() => {
              setProfileData({...profileData, image : data})
              alert(data)
            }, 5000)
        
            if(data.image) {
              profilePictureUpdate()
            }
          })}}
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
                      {profileData?.companyName ? profileData.companyName : 'Gia (PVT) LTD'} <br />
                      <span className="text-xl" style={{ color: "#6A489C" }}>
                        {profileData?.whatsMakesUsSpecial ? profileData.whatsMakesUsSpecial : 'A Service Like No Other'}
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
                          Founded in {profileData?.foundedIn ? profileData.foundedIn : '2000'}
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{
                              color: "#39BEC1",
                              fontWeight: "bolder",
                            }}
                          />
                          {profileData?.headquarters ? profileData.headquarters : 'USA'}
                        </li>
                        <li>
                          {" "}
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
                                      onChange={(e) => setIsProfileData({...isProfileData, firstName : e.target.value})}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.firstName || ''}
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
                                      onChange={(e) => setIsProfileData({...isProfileData, lastName : e.target.value})}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.lastName || ''}
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
                                      disabled
                                      style={{ width: "100%" }}
                                      className="form-control"
                                      name="email"
                                      type={"email"}
                                      value={profileData?.email || ''}
                                      onChange={(e) => setIsProfileData({...isProfileData, email : e.target.value})}
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
                                      onChange={(e) => setIsProfileData({...isProfileData, phoneNumber : e.target.value})}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.phoneNumber || ''}
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
                                      onChange={(e) => setIsProfileData({...isProfileData, foundedIn : e.target.value})}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.foundedIn || ''}
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
                                      onChange={(e) => setIsProfileData({...isProfileData, whatsMakesUsSpecial : e.target.value})}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.whatsMakesUsSpecial || ''}
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
                                      onChange={(e) => setIsProfileData({...isProfileData, companyName : e.target.value})}
                                      //   value={user.name}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.companyName || ''}
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
                                      onChange={(e) => setIsProfileData({...isProfileData, companyScope : e.target.value})}
                                      //   value={user.email}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.companyScope || ''}
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
                                      onChange={(e) => setIsProfileData({...isProfileData, salaryRange : e.target.value})}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.salaryRange || ''}
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
                                        onChange={(e) => setIsProfileData({...isProfileData, headquarters : e.target.value})}
                                        //   value={user.number}
                                        //   onChange={getUserData}
                                        placeholder={profileData?.headquarters || ''}
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
                                      onChange={(e) => setIsProfileData({...isProfileData, companyLocation : e.target.value})}
                                      //   value={user.number}
                                      //   onChange={getUserData}
                                      placeholder={profileData?.companyLocation || ''}
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
                                    onChange={(e) => setIsProfileData({...isProfileData, description : e.target.value})}
                                      placeholder={profileData?.description || ''}
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
                          {profileData?.firstName && profileData?.lastName ? profileData.firstName + ' ' + profileData.lastName : 'Gia Jay'} 
                        </h2>
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Email</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.email ? profileData.email : 'gaiaewreeytyrt@gmail.com'}
                        </h2>
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Phone Number</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.phoneNumber ? profileData.phoneNumber : '61453472'}
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
                          {profileData?.companyName ? profileData.companyName : 'Gia (PVT) LTD'}
                        </h2>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Company Scope</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.companyScope ? profileData.companyScope : 'IT Industry'}
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
                          {profileData?.companyLocation ? profileData.companyLocation :'Huston'}
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
 : 
                       `A .It has survived t is a long established fact that
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