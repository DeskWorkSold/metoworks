import React, { useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { A11y, Navigation } from "swiper";
import Modal from "react-bootstrap/Modal";

import { Container, Col, Row, Button, Form, Image } from "react-bootstrap";

import { BsArrowBarDown, BsBookmark } from "react-icons/bs";
import { useEffect } from "react";
import axios from "../../../utils/axios.api";
import { useNavigate } from "react-router-dom";
import Loader from "../../../assets/loader.gif";

export const FreelanceFindWork = () => {
  const [modalShowGoogFunc, setModalShowGoogFunc] = useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  const [show, setShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  function MyVerticallyCenteredModalFunc(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">apply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>apply</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = await localStorage.getItem("access-token");
    if (!token) {
      navigate("/login");
    }
  };

  const [searchData, setSearchData] = useState({});
  const [isSearch, setIsSearch] = useState({
    keyword: "",
  });

  // const searchFun = () => {
  //   axios
  //     .post(`api/v1/search/job-post?from=0&size=4`, isSearch)
  //     .then((res) => {
  //       // console.log(res, "Initial Data");
  //       let data = res.data.data;
  //       console.log(data, "daaaaaaaaataaaaaaaaaaaa");
  //       // setIsProfileData(data)
  //       setSearchData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleChanger = () => {
    if (searchShow === true) {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const saveJob = (event) => {
    axios
      .post(`api/v1/user/freelancer/saved-jobs/${event._id}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        searchFun();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const applyFunc = (event) => {
    axios
      .post(`/api/v1/interview/apply?jobId=${event._id}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;

        searchFun();
        // setIsProfileData(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function MyVerticallyCenteredModal(props) {
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
            <Modal.Title style={{ color: "black" }}>Post A Job</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div className="p-3">
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Title:</span>
                      {props?.props?._source?.title}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Industry:</span>
                      {props?.props?._source?.industry}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Job Function :</span>
                      {props?.props?._source?.jobFunction}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Job Location :</span>
                      {props?.props?._source?.location}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Description :</span>
                      {props?.props?._source?.description.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Requirements :</span>{" "}
                      {props?.props?._source?.requirements}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Profession :</span>
                      {props?.props?._source?.profession}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Education Level :</span>
                      {props?.props?._source?.educationLevel}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Project Timeline :</span>{" "}
                      {props?.props?._source?.projectTimeline.gte +
                        " - " +
                        props?.props?._source?.projectTimeline.lte}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Mode of Work:</span>{" "}
                      {props?.props?._source?.modeOfWork}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">No. of Openings :</span>
                      {props?.props?._source?.noOfOpenings}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Salary Range:</span>
                      {props?.props?._source?.salaryRange.gte +
                        " - " +
                        props?.props?._source?.salaryRange.lte}
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      <span className="font-semibold">Salary Type :</span>
                      {props?.props?._source?.salaryType}
                    </p>
                  </li>
                </ul>
              </div>
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

  const modalshow = (values) => {
    console.log(values, "funtion values");
    if (values.clicked == true) {
      values.clicked = false;
      setModalShow(false);
    } else {
      setModalShow(true);
      values.clicked = true;
    }
  };

  const [subJobFunction, setSubJobFunction] = useState("");
  const [jobIndustry, setJobIndustry] = useState("");
  const [smShow, setSmShow] = useState(false);
  const [smShowError, setSmShowError] = useState(false);
  const [languageType, setLanguage] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [city, setCity] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [jobFunction, setJobFunction] = useState("");
  const [modeofWork, setModeOfWork] = useState("");
  const [minExperience, setMinExperience] = useState("");
  const [maxExperience, setMaxExperience] = useState("");
  const [applyShow, setApplyShow] = useState(false);
  const [applyShowError, setApplyShowError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      searchFun();
    }, 1000);
  }, []);

  const searchFun = (props) => {
    console.log(props, "props");
    const reqBody = {
      keyword: isSearch.keyword,
      filter: [],
    };

    if (jobIndustry) reqBody?.filter?.push({ term: { industry: jobIndustry } });
    if (jobFunction)
      reqBody?.filter?.push({ term: { jobFunction: jobFunction } });
    if (jobFunction && subJobFunction)
      reqBody?.filter?.push({ term: { jobSubFunction: subJobFunction } });
    if (modeofWork) reqBody?.filter?.push({ term: { modeOfWork: modeofWork } });
    if (minSalary && maxSalary)
      reqBody?.filter?.push({
        range: { salaryRange: { gte: minSalary, lte: maxSalary } },
      });
    if (city) reqBody?.filter?.push({ term: { location: city } });

    // console.log(reqBody, 'eeeeeeeeeeeee');
    axios
      .post(`api/v1/search/job-post?from=0&size=20`, reqBody)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data.data;

        if (props && props._id) {
          setSearchData(
            data &&
              data.length > 0 &&
              data.map((e, i) => {
                if (e._id == props._id) {
                  return {
                    ...e,
                    clicked: e.clicked ? false : true,
                  };
                } else {
                  return {
                    ...e,
                    clicked: false,
                  };
                }
              })
          );
        } else {
          setSearchData(data);
        }

        // setIsProfileData(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const resetFun = () => {
    setSearchData(null);
  };

  const closeBookmark = (props) => {
    console.log(props, "propssssss");
    searchFun(props);
    setApplyShow(false);
    setSmShow(false);
    setSmShowError(false);
    setApplyShowError(false);
  };

  const SavedJob = (events) => {
    console.log("hello");
    axios
      .post(`api/v1/user/freelancer/saved-jobs/${events._id}`)
      .then((res) => {
        setSmShow(true);
        searchFun(events);

        return;
      })
      .catch((err) => {
        setSmShowError(true);
      });
  };
  const applyJobFunc = (values) => {
    // console.log(values._id, "values");
    axios
      .post(`api/v1/interview/apply?jobId=${values._id}`)
      .then((res) => {
        values.clicked = true;
        searchFun(values);
        setJobFunction(true);
      })

      .catch((err) => {
        console.log(err);
        searchFun(values);
        setApplyShowError(true);
      });
  };

  function MyVerticallyCenteredModalToast(props) {
    return (
      <Modal
        {...props}
        size="sm"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        // centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>successfully added</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => closeBookmark(props)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function MyVerticallyCenteredModalError(props) {
    return (
      <Modal
        {...props}
        size="sm"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        // centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 class="text-red-700">already saved or any internal error</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => closeBookmark(props)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const smshow = (values) => {
    if (values.clicked == true) {
      values.clicked = false;
      setSmShow(false);
    } else {
      setSmShow(true);
      values.clicked = true;
    }
  };

  const smshowerror = (values) => {
    setSmShowError(true);
    searchFun(values);

    console.log(values, "funtion items");
    // if (values.clicked == true) {
    //   values.clicked = false;
    //   setSmShowError(false);
    // } else {
    //   setSmShowError(true);
    //   values.clicked = true;
    // }
  };

  function MyVerticallyCenteredModalApply(props) {
    return (
      <Modal
        {...props}
        size="sm"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        // centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Apply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Apply Successfully</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function MyVerticallyCenteredModalApplyError(props) {
    return (
      <Modal
        {...props}
        size="sm"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        // centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Job Applied
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 class="text-red-700">already Applied Job</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => closeBookmark(props)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const applyshow = (values) => {
    console.log(values, "funtion items");
    if (values.clicked == true) {
      values.clicked = false;
      setApplyShow(false);
    } else {
      setApplyShow(true);
      values.clicked = true;
    }
  };

  const applyshowerror = (values) => {
    console.log(values, "funtion items");
    if (values.clicked == true) {
      values.clicked = false;
      setApplyShowError(false);
    } else {
      setApplyShowError(true);
      values.clicked = true;
    }
  };

  console.log(smShowError, "error");

  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container>
        <Row>
          <Col lg="12" className="webkit">
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
                    className="text-white border-rounded"
                    style={{ background: "#39BEC1", border: "none" }}
                    onClick={() => searchFun()}
                  >
                    Search
                  </Button>
                  <Button
                    className="text-white border-rounded mx-2"
                    style={{ background: "#39BEC1", border: "none" }}
                    onClick={() => resetFun()}
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
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setJobIndustry(e.target.value)}
                      >
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
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setJobFunction(e.target.value)}
                      >
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
                      <Form.Select
                        aria-label="Default select example"
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
                      <Form.Select
                        aria-label="Default select example"
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
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setModeOfWork(e.target.value)}
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
                          onChange={(e) => setMaxSalary(e.target.value)}
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
                      <Form.Select
                        aria-label="Default select example"
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
        {searchData && searchData?.length > 0 ? (
          searchData?.map((values, keys) => {
            console.log(values, "vaaaaaaaluee");
            return (
              <Row>
                <Col lg="12" key={keys}>
                  <div className="p-3">
                    <div className="boxshad">
                      <Row>
                        <Col lg="7">
                          <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                            {values?._source?.title}
                          </h2>
                          <p style={{ color: "#7A7979" }} className="text-lg">
                            {values?._source?.empType}
                          </p>
                        </Col>
                        <Col lg="5" className="webkit-right">
                          <Button
                            className="text-white border-rounded px-3 py-3 w-48 mx-2 mt-2"
                            style={{ background: "#39BEC1", border: "none" }}
                            onClick={() => applyJobFunc(values)}
                          >
                            APPLY
                          </Button>
                          {values.clicked && applyShow && (
                            <MyVerticallyCenteredModalApply
                              show={values.clicked}
                              props={values}
                              onHide={() => applyshow(values)}
                            />
                          )}
                          {values.clicked && applyShowError && (
                            <MyVerticallyCenteredModalApplyError
                              show={applyShowError}
                              props={values}
                              onHide={() => applyshowerror(values)}
                            />
                          )}
                          <Button
                            onClick={() => modalshow(values)}
                            className="text-white border-rounded px-3 py-3 w-48 mt-2"
                            style={{ background: "#C1C1C1", border: "none" }}
                          >
                            VIEW MORE DETAIL
                          </Button>
                          {values.clicked == true && (
                            <MyVerticallyCenteredModal
                              show={modalShow}
                              props={values}
                              onHide={() => modalshow(values)}
                            />
                          )}

                          <p style={{ color: "#7A7979" }} className="text-lg">
                            Posted Date :
                            {values?._source?.postedDate.substring(0, 10)}
                            {/* <br className="br" /> */}
                            <span className="mrdg">
                              Expiry Date :
                              {values?._source?.expiryDate.substring(0, 10)}
                            </span>
                          </p>
                        </Col>
                      </Row>
                      <Row className="align-items-center block-for-res">
                        <Col>
                          <div className="p3 py-3">
                            <h2 className="text-lg font-semibold">
                              Company Name
                            </h2>
                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              {values?._source?.companyName}
                            </h2>
                          </div>
                        </Col>
                        <Col>
                          <div className="p3 py-3">
                            <h2 className="text-lg font-semibold">
                              Job Industry
                            </h2>
                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              {values?._source?.industry}
                            </h2>
                          </div>
                        </Col>
                        <Col>
                          <div className="p3 py-3">
                            <h2 className="text-lg font-semibold">
                              Salary Range
                            </h2>
                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              {values?._source?.salaryRange?.gte +
                                " - " +
                                values?._source?.salaryRange?.lte}
                            </h2>
                          </div>
                        </Col>
                        <Col>
                          <div className="p3 py-3">
                            <h2 className="text-lg font-semibold">Location</h2>
                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              {values?._source?.location}
                            </h2>
                          </div>
                        </Col>
                        <Col>
                          <div className="p3 py-3">
                            <h2 className="text-lg font-semibold">
                              No. of candidates
                            </h2>
                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              {values?._source?.noOfOpenings}
                            </h2>
                          </div>
                        </Col>
                      </Row>
                      <hr className="my-2" />
                      <Row className="align-items-center">
                        <Col lg="10">
                          <div className="p3 py-3">
                            <h2 className="text-lg font-semibold">
                              Job Description
                            </h2>
                            <h2
                              className="text-l py-3"
                              style={{ color: "#7A7979" }}
                            >
                              {values?._source?.description.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
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
                            <BsBookmark onClick={() => SavedJob(values)} />
                          </p>
                          {values.clicked && smShow && (
                            <MyVerticallyCenteredModalToast
                              show={values.clicked}
                              props={values}
                            />
                          )}
                          {smShowError && values.clicked && (
                            <MyVerticallyCenteredModalError
                              show={smShowError}
                              props={values}
                              onHide={() => smshowerror(values)}
                            />
                          )}
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })
        ) : (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "3vh",
                fontWeight: "bolder",
                paddingTop: "80px",
              }}
            >
              No Opportunities Found
            </h1>
            <img src={Loader} style={{ width: 180, height: 180 }} />
          </div>
        )}
      </Container>
    </Container>
  );
};
