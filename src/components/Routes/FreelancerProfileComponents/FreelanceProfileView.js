import React, { useState, Component, useEffect } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Image,
  Form,
  FormCheck,
} from "react-bootstrap";
import {
  BsBookmark,
  BsCoin,
  BsPencilSquare,
  BsReceipt,
  BsReceiptCutoff,
} from "react-icons/bs";
import { BiEdit } from "@react-icons/all-files/bi/BiEdit";
import { ImBin } from "@react-icons/all-files/im/ImBin";
import Table from "react-bootstrap/Table";

import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import {
  faEarth,
  faHome,
  faLocationDot,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import axios from "../../../utils/axios.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Language } from "@mui/icons-material";
import { Link } from "react-router-dom";
export const FreelanceProfileView = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);
  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);
  const [userId, setUserId] = useState("");
  // console.log(userId, "ID");
  const [isCheckBox, setIsCheckBox] = useState("false");
  const [profileData, setProfileData] = useState({});
  const [profileExp, setProfileExp] = useState({});
  const [isEducation, setIsEducation] = useState({});
  const [isAchievement, setIsAchievement] = useState({});
  const [isLanguage, setIsLanguage] = useState({});
  const [isEducationData, setIsEducationData] = useState({});

  console.log(isEducationData, "isEducationData");

  useEffect(() => {
    let id = localStorage.getItem("id");
    setUserId(id);
    initialFun(id);
    ProfileExpData(id);
    educationData();
    setProfileData({ ...profileData, uid: id });
    setProfileExp({ ...profileExp, uid: id });
    setIsEducation({ ...isEducation, uid: id });
    setIsAchievement({ ...isAchievement, uid: id });
    setIsLanguage({ ...isLanguage, uid: id });
  }, []);

  const initialFun = (id) => {
    axios
      .get(`http://localhost:3000/v1/users/${id}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data;
        // setIsProfileData(data)
        setProfileData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const profileFunc = () => {
    axios
      .patch(`http://localhost:3000/v1/users/${userId}`, profileData)
      .then((res) => {
        console.log(res, "profile data successfully added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ProfileExp = () => {
    axios
      .post(`http://localhost:3000/v1/freelancerExp`, profileExp)
      .then((res) => {
        console.log(res, "profile data successfully added");
        setProfileExp(res.data, "ProfileExp");
        ProfileExpData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ProfileExpData = (id) => {
    axios
      .get(`http://localhost:3000/v1/freelancerExp/`)
      .then((res) => {
        console.log(res, "ProfileExpData");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkBoxHandleChange = () => {
    if (isCheckBox === "true") {
      // alert('checkbox is false')
      setIsCheckBox("false");
      setProfileExp({ ...profileExp, currentlyWorking: "off" });
    } else {
      // alert('checkbox is true')
      setIsCheckBox("true");
      setProfileExp({ ...profileExp, currentlyWorking: "on" });
    }
  };

  const educationFunc = () => {
    let formdata = new FormData();
    Object.entries(isEducation).map(([key, value]) => {
      formdata.append(key, value);
    });
    axios
      .post(`http://localhost:3000/v1/education`, formdata)
      .then((res) => {
        console.log(res, "profile data successfully added");
        setProfileExp(res.data, "ProfileExp");
        // ProfileExpData()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const educationData = () => {
    axios
      .get(`http://localhost:3000/v1/education/`)
      .then((res) => {
        let data = Object.values(res.data.data)
        setIsEducationData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const achievementFunc = () => {
    axios
      .post(`http://localhost:3000/v1/achievement`, isAchievement)
      .then((res) => {
        console.log(res, "profile data successfully added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LanguageFunc = () => {
    axios
      .post(`http://localhost:3000/v1/language`, isLanguage)
      .then((res) => {
        console.log(res, "profile data successfully added");
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
              <h2 className="text-3xl robot">Profile</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-2" />
      <Container>
        <Row className="align-item-center">
          <Col lg="12">
            <div className="m-3">
              <div className="boxshad py-5">
                <Row className="align-items-center">
                  <Col lg="2" className="webkit">
                    <Image
                      style={{ width: "100%" }}
                      src={require("../../../assets/Ella.png")}
                    />
                  </Col>
                  <Col lg="4">
                    <h2 className="text-3xl py-3 robot">
                      {profileData?.firstName + " " + profileData?.lastName ||
                        "Ella jay"}{" "}
                      <br />
                      <span className="text-xl" style={{ color: "#6A489C" }}>
                        Web Developer
                      </span>
                    </h2>
                    <Button
                      // variant="primary"
                      // onClick={() => setModalShow(true)}
                      className="text-white border-rounded px-3"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      <div className="inline-flex" style={{ fontSize: "18px" }}>
                        <BsReceiptCutoff />
                        &nbsp; VIEW CV
                      </div>
                    </Button>
                  </Col>
                  <Col lg="3">
                    <div className="text-left">
                      <ul style={{ color: "#6A489C", fontSize: "16px" }}>
                        <li>
                          <FontAwesomeIcon
                            icon={faHome}
                            style={{
                              color: "#39BEC1",

                              fontWeight: "bolder",
                            }}
                          />
                          {profileData?.role || "Freelancer"}
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{
                              color: "#39BEC1",
                              fontWeight: "bolder",
                            }}
                          />
                          Nugegoda, Sri Lanka
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="webkit" style={{ display: "grid" }}>
                      <h2 className="text-l font-semibold">Open to Work :</h2>
                      <Form.Check type="switch" id="custom-switch" />
                      <h2 className="text-2xl font-semibold pt-2">
                        Salary Range
                      </h2>

                      {/* <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      /> */}

                      <h2 style={{ color: "#7A7979" }} className="text-xl">
                        HKD $50000 - $100000
                      </h2>
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
                <h2 style={{ float: "right" }}>
                  <Button
                    onClick={handleShow}
                    className="text-white border-rounded px-3"
                    style={{
                      background: "none",
                      border: "none",
                    }}
                  >
                    <BiEdit style={{ color: "#39BEC1", fontSize: "30px" }} />
                  </Button>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title style={{ color: "black" }}>
                        Profile
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <div className="p-3">
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Full Name
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="fname"
                                type={"text"}
                                value={
                                  profileData?.firstName +
                                    " " +
                                    profileData?.lastName || ""
                                }
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    fullName: e.target.value,
                                  })
                                }
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
                                Visa/HK Permit
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                value={profileData?.visaHkPermit || ""}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    visaHkPermit: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Choose...</option>
                                <option>Yes</option>
                                <option>No</option>
                              </Form.Select>
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Gender
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                value={profileData?.gender || ""}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    gender: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </Form.Select>
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                About Me
                              </label>
                              <textarea
                                value={profileData?.aboutMe || ""}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    aboutMe: e.target.value,
                                  })
                                }
                                placeholder="Description"
                                className="form-control"
                              />
                            </fieldset>
                          </Col>
                          <Row>
                            <Col lg="6">
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
                                  name="phone"
                                  type={"text"}
                                  value={profileData?.phoneNumber || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      phoneNumber: e.target.value,
                                    })
                                  }
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                  placeholder="2000

                "
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Date of Birth
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="email"
                                  type={"date"}
                                  value={profileData?.dob || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      dob: e.target.value,
                                    })
                                  }
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                  placeholder="A Service Like No Other
                "
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Country (Time Zone)
                                </label>

                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"text"}
                                  name="firstname"
                                  value={profileData?.countryTimeZone || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      countryTimeZone: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Gia (PVT) LTD

                "
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  City
                                </label>

                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"text"}
                                  name="lastname"
                                  //   value={user.email}
                                  //   onChange={getUserData}
                                  value={profileData?.city || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      city: e.target.value,
                                    })
                                  }
                                  placeholder="IT Industry
                "
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Address
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="Email"
                                  type={"text"}
                                  value={profileData?.address || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      address: e.target.value,
                                    })
                                  }
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                  placeholder="https://www.me2work.com/
                "
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  State
                                </label>
                                <div style={{ display: "flex" }}>
                                  <input
                                    style={{ width: "100%" }}
                                    className="form-control"
                                    name="minwork"
                                    type={"text"}
                                    value={profileData?.state || ""}
                                    onChange={(e) =>
                                      setProfileData({
                                        ...profileData,
                                        state: e.target.value,
                                      })
                                    }
                                    //   value={user.number}
                                    //   onChange={getUserData}
                                    placeholder="USA
                "
                                  />
                                </div>
                              </fieldset>
                            </Col>
                          </Row>

                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Salary Range
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                value={profileData?.salaryRange || ""}
                                onChange={(e) =>
                                  setProfileData({
                                    ...profileData,
                                    salaryRange: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Choose...</option>
                                <option>per month basis</option>
                                <option>per project basis</option>
                                <option>negotiable</option>
                                <option>others</option>
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
                                <label
                                  className="text-lg"
                                  style={{ color: "#7A7979" }}
                                >
                                  Min :
                                </label>
                                <input
                                  value={profileData?.min || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      min: e.target.value,
                                    })
                                  }
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
                                <label
                                  className="text-lg"
                                  style={{ color: "#7A7979" }}
                                >
                                  Max :
                                </label>
                                <input
                                  value={profileData?.max || ""}
                                  onChange={(e) =>
                                    setProfileData({
                                      ...profileData,
                                      max: e.target.value,
                                    })
                                  }
                                  style={{ width: "100%" }}
                                  className="form-control"
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
                          <Col lg="6">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Upload CV
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="customFile"
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
                        onClick={profileFunc}
                        variant="primary"
                        style={{ background: "none", color: "#39BEC1" }}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </h2>
                <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Profile
                </h2>

                <hr className="mt-2" />
                <Container>
                  <Row className="align-items-center row">
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Full Name</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.fullName ||
                            profileData?.firstName +
                              " " +
                              profileData.lastName ||
                            "Ella Jay"}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">
                          Visa / HK Permit
                        </h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.visaHkPermit === "Yes" ? "90065" : "-"}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Phone</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.phoneNumber || "088676534"}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Date of Birth</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.dob || "2004-01-05"}
                        </h2>
                      </div>
                    </Col>
                  </Row>
                  <Row className="align-items-center row pt-4">
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Gender</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.gender || "female"}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Country</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.countryTimeZone || "Sri Lanka"}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">City</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.city || "Nugegoda"}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">Address</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.address ||
                            "45, Nugegoda Road, Hill street"}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3">
                        <h2 className="text-xl font-semibold">State</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.state || "Western"}
                        </h2>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <Row className="align-items-center">
                    <Col lg="12">
                      <div className="p3">
                        <h2 className="text-xl font-semibold">About Me</h2>

                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {profileData?.aboutMe ||
                            `It has survived t is a long established fact that a
                          reader will be distracted by the readable content of a
                          page when looking at its layout. The point of using
                          Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content
                          here, content here', making it look like readable
                          English. It has survived t is a long established fact
                          that a reader will be distracted by the readable
                          content of a page when looking at its layout. The
                          point of using Lorem Ipsum is that it has a
                          more-or-less normal distribution of letters, as
                          opposed to using 'Content here, content here', making
                          it look like readable English.`}
                        </h2>
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
                <h2 style={{ float: "right" }}>
                  <Button
                    onClick={handleShow1}
                    className="text-white border-rounded px-3"
                    style={{
                      background: "none",
                      border: "none",
                    }}
                  >
                    <AiOutlinePlusCircle
                      style={{ color: "#39BEC1", fontSize: "30px" }}
                    />
                  </Button>
                  <Modal
                    show={show1}
                    onHide={handleClose1}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title style={{ color: "black" }}>
                        Experience
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <div className="p-3">
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Profession
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="fname"
                                type={"text"}
                                onChange={(e) =>
                                  setProfileExp({
                                    ...profileExp,
                                    profession: e.target.value,
                                  })
                                }
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
                                Company Name
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="lname"
                                value={profileExp?.companyName}
                                onChange={(e) =>
                                  setProfileExp({
                                    ...profileExp,
                                    companyName: e.target.value,
                                  })
                                }
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
                                Job Industry
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                value={profileExp?.jobIndustry || "Jay"}
                                onChange={(e) =>
                                  setProfileExp({
                                    ...profileExp,
                                    jobIndustry: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Job Industry</option>
                                <option>Universities / Education</option>
                                <option>Manufacturing</option>
                                <option>Security</option>
                                <option>Real Estate</option>
                                <option>
                                  Professional Consultings (Legal, HR, Finance
                                  etc.)
                                </option>
                                <option>Banking and Finance</option>
                                <option>
                                  Beauty Care and Health / Welness / Fitness
                                </option>
                                <option>Government / Public Utilities</option>
                                <option>
                                  Hospitality / Travel / Airlines / Clubhouse
                                </option>
                                <option>
                                  IT / R&amp;D / Cyber Security /
                                  Telecommunication / Science
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
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Job Function
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                value={profileExp?.jobFunction || "Jay"}
                                onChange={(e) =>
                                  setProfileExp({
                                    ...profileExp,
                                    jobFunction: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Job Function</option>
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
                                <option>
                                  IT Professionals (Specific Fields)
                                </option>
                                <option>Manufacturing</option>
                                <option>
                                  Real Estate (Surveyers / reasearchers etc.)
                                </option>
                                <option>Finance and Accounting</option>
                                <option>Professional Designers</option>
                                <option>Lecturers / Teachers</option>
                                <option>Engineering / Architect</option>
                                <option>Others</option>
                              </Form.Select>
                            </fieldset>
                          </Col>
                          <Row>
                            <Col lg="12" className="pt-3">
                              <span
                                style={{
                                  display: "inline-flex",
                                  color: "#7A7979",
                                }}
                              >
                                <FormCheck
                                  id="check"
                                  color="blue"
                                  onChange={checkBoxHandleChange}
                                />
                                &#160;&#160;I am currently working in this role
                              </span>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Start Date
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="email"
                                  type={"date"}
                                  value={profileExp?.startDate || "startDate"}
                                  onChange={(e) =>
                                    setProfileExp({
                                      ...profileExp,
                                      startDate: e.target.value,
                                    })
                                  }
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                  placeholder="A Service Like No Other
                "
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  End Date
                                </label>

                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"date"}
                                  name="firstname"
                                  value={profileExp?.endDate || "startDate"}
                                  onChange={(e) =>
                                    setProfileExp({
                                      ...profileExp,
                                      endDate: e.target.value,
                                    })
                                  }
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
                                  Description
                                </label>

                                <textarea
                                  placeholder="Description"
                                  className="form-control"
                                  value={profileExp?.description}
                                  onChange={(e) =>
                                    setProfileExp({
                                      ...profileExp,
                                      description: e.target.value,
                                    })
                                  }
                                />
                              </fieldset>
                            </Col>
                          </Row>
                        </div>
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
                        onClick={ProfileExp}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </h2>
                <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Experience
                </h2>

                <hr className="mt-2" />
                <Container>
                  <Row className="align-items-center row">
                    <Col>
                      <Row>
                        <Col lg="8" style={{ display: "flex" }}>
                          <div className="MuiTimelineSeparator-root css-11tgw8h">
                            <span className="MuiTimelineDot-root MuiTimelineDot-filled MuiTimelineDot-filledGrey timeline-dot css-a7d0u7"></span>
                            <span className="MuiTimelineConnector-root css-idv8vo"></span>
                          </div>
                          <div className="MuiTypography-root MuiTypography-body1 MuiTimelineContent-root MuiTimelineContent-positionRight css-18ki27g">
                            <div className="CV-job">
                              <Row className="align-items-center pt-2">
                                <Col lg="6">
                                  <div className="p3">
                                    <h2 className="text-xl font-semibold">
                                      Codesk
                                    </h2>

                                    <h2
                                      className="text-lg"
                                      style={{ color: "#7A7979" }}
                                    >
                                      7A7979
                                    </h2>
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="p3">
                                    <h2
                                      className="text-xl"
                                      style={{ color: "#6A489C" }}
                                    >
                                      Banking and Finance
                                    </h2>

                                    <h2
                                      className="text-lg"
                                      style={{ color: "#7A7979" }}
                                    >
                                      Jan 2023 - Jan 2023
                                    </h2>
                                  </div>
                                </Col>
                              </Row>

                              <h2
                                className="text-lg pt-2"
                                style={{ color: "#7A7979" }}
                              >
                                Managers ensure that their assigned department,
                                store, or district is well staffed and
                                provisioned, adheres to quality and service
                                standards, increases revenue and market share,
                                and helps the business accomplish its goals.
                                They hire and train employees.
                              </h2>
                            </div>
                          </div>
                        </Col>
                        <Col lg="4">
                          <div className="p-3 webkit">
                            <div className="inline-flex">
                              <div className="w-10">
                                <button
                                  onClick={handleShow5}
                                  className="text-white border-rounded"
                                  style={{
                                    background: "none",
                                    border: "none",
                                  }}
                                >
                                  <BiEdit
                                    style={{
                                      color: "#39BEC1",
                                      fontSize: "30px",
                                    }}
                                  />
                                </button>
                                <Modal
                                  show={show5}
                                  onHide={handleClose5}
                                  backdrop="static"
                                  keyboard={false}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title style={{ color: "black" }}>
                                      Edit Experience
                                    </Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <Row>
                                      <div className="p-3">
                                        <Col lg="12">
                                          <fieldset>
                                            <label
                                              className="text-lg"
                                              style={{ width: "100%" }}
                                            >
                                              Profession
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
                                              Company Name
                                            </label>
                                            <input
                                              style={{ width: "100%" }}
                                              className="form-control"
                                              name="lname"
                                              type={"number"}
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
                                              Job Industry
                                            </label>
                                            <Form.Select aria-label="Default select example">
                                              <option hidden="">
                                                Job Industry
                                              </option>
                                              <option>
                                                Universities / Education
                                              </option>
                                              <option>Manufacturing</option>
                                              <option>Security</option>
                                              <option>Real Estate</option>
                                              <option>
                                                Professional Consultings (Legal,
                                                HR, Finance etc.)
                                              </option>
                                              <option>
                                                Banking and Finance
                                              </option>
                                              <option>
                                                Beauty Care and Health / Welness
                                                / Fitness
                                              </option>
                                              <option>
                                                Government / Public Utilities
                                              </option>
                                              <option>
                                                Hospitality / Travel / Airlines
                                                / Clubhouse
                                              </option>
                                              <option>
                                                IT / R&amp;D / Cyber Security /
                                                Telecommunication / Science
                                              </option>
                                              <option>Retail</option>
                                              <option>Insurance</option>
                                              <option>
                                                Logistics / Transportaton /
                                                Supply Chain
                                              </option>
                                              <option>
                                                F&amp;B / Wine &amp; Spriits
                                              </option>
                                              <option>
                                                Logistics / Transportaton /
                                                Supply Chain
                                              </option>
                                              <option>
                                                Medical / Pharmacy / Hospital
                                              </option>
                                              <option>Engineerings</option>
                                              <option>Others</option>
                                            </Form.Select>
                                          </fieldset>
                                        </Col>
                                        <Col lg="12">
                                          <fieldset>
                                            <label
                                              className="text-lg"
                                              style={{ width: "100%" }}
                                            >
                                              Job Function
                                            </label>
                                            <Form.Select aria-label="Default select example">
                                              <option hidden="">
                                                Job Function
                                              </option>
                                              <option>HR &amp; Admin</option>
                                              <option>
                                                General Management
                                              </option>
                                              <option>
                                                Finance and Accounting
                                              </option>
                                              <option>
                                                Sales and Marketing
                                              </option>
                                              <option>
                                                Banking and Financial Institue
                                                Professionals
                                              </option>
                                              <option>
                                                Insurance Professionals
                                                (back-end functions)
                                              </option>
                                              <option>
                                                IT Professionals (Specific
                                                Fields)
                                              </option>
                                              <option>Manufacturing</option>
                                              <option>
                                                Real Estate (Surveyers /
                                                reasearchers etc.)
                                              </option>
                                              <option>
                                                Finance and Accounting
                                              </option>
                                              <option>
                                                Professional Designers
                                              </option>
                                              <option>
                                                Lecturers / Teachers
                                              </option>
                                              <option>
                                                Engineering / Architect
                                              </option>
                                              <option>Others</option>
                                            </Form.Select>
                                          </fieldset>
                                        </Col>
                                        <Row>
                                          <Col lg="12" className="pt-3">
                                            <span
                                              style={{
                                                display: "inline-flex",
                                                color: "#7A7979",
                                              }}
                                            >
                                              <FormCheck
                                                id="check"
                                                color="blue"
                                              />
                                              &#160;&#160;I am currently working
                                              in this role
                                            </span>
                                          </Col>
                                          <Col lg="6">
                                            <fieldset>
                                              <label
                                                className="text-lg"
                                                style={{ width: "100%" }}
                                              >
                                                Start Date
                                              </label>
                                              <input
                                                style={{ width: "100%" }}
                                                className="form-control"
                                                name="email"
                                                type={"date"}
                                                //   value={user.number}
                                                //   onChange={getUserData}
                                                placeholder="A Service Like No Other
                "
                                              />
                                            </fieldset>
                                          </Col>
                                          <Col lg="6">
                                            <fieldset>
                                              <label
                                                className="text-lg"
                                                style={{ width: "100%" }}
                                              >
                                                End Date
                                              </label>

                                              <input
                                                style={{ width: "100%" }}
                                                className="form-control"
                                                type={"date"}
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
                                                Description
                                              </label>

                                              <textarea
                                                placeholder="Description"
                                                className="form-control"
                                              />
                                            </fieldset>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Row>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button
                                      variant="secondary"
                                      onClick={handleClose5}
                                      style={{
                                        background: "none",
                                        color: "#C1C1C1",
                                      }}
                                    >
                                      Cancel
                                    </Button>
                                    <Button
                                      onClick={ProfileExp}
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
                              </div>
                              <div className="w-10">
                                <ImBin
                                  style={{
                                    color: "#39BEC1",
                                    fontSize: "30px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Col>
                        <hr className="my-2" />
                        <Row>
                          <Col lg="8" style={{ display: "flex" }}>
                            <div className="MuiTimelineSeparator-root css-11tgw8h">
                              <span className="MuiTimelineDot-root MuiTimelineDot-filled MuiTimelineDot-filledGrey timeline-dot css-a7d0u7"></span>
                              <span className="MuiTimelineConnector-root css-idv8vo"></span>
                            </div>
                            <div className="MuiTypography-root MuiTypography-body1 MuiTimelineContent-root MuiTimelineContent-positionRight css-18ki27g">
                              <div className="CV-job">
                                <Row className="align-items-center pt-2">
                                  <Col lg="6">
                                    <div className="p3">
                                      <h2 className="text-xl font-semibold">
                                        Rerer
                                      </h2>

                                      <h2
                                        className="text-lg"
                                        style={{ color: "#7A7979" }}
                                      >
                                        Malsha
                                      </h2>
                                    </div>
                                  </Col>
                                  <Col lg="6">
                                    <div className="p3">
                                      <h2
                                        className="text-xl"
                                        style={{ color: "#6A489C" }}
                                      >
                                        Security
                                      </h2>

                                      <h2
                                        className="text-lg"
                                        style={{ color: "#7A7979" }}
                                      >
                                        Jan 2023 - Present
                                      </h2>
                                    </div>
                                  </Col>
                                </Row>

                                <h2
                                  className="text-lg pt-2"
                                  style={{ color: "#7A7979" }}
                                >
                                  Managers ensure that their assigned
                                  department, store, or district is well staffed
                                  and provisioned, adheres to quality and
                                  service standards, increases revenue and
                                  market share, and helps the business
                                  accomplish its goals. They hire and train
                                  employees.
                                </h2>
                              </div>
                            </div>
                          </Col>
                          <Col lg="4">
                            <div className="p-3 webkit">
                              <div className="inline-flex">
                                <div className="w-10">
                                  {" "}
                                  <BiEdit
                                    style={{
                                      color: "#39BEC1",
                                      fontSize: "30px",
                                    }}
                                  />
                                </div>
                                <div className="w-10">
                                  <ImBin
                                    style={{
                                      color: "#39BEC1",
                                      fontSize: "30px",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <h2 style={{ float: "right" }}>
                  <Button
                    onClick={handleShow2}
                    className="text-white border-rounded px-3"
                    style={{
                      background: "none",
                      border: "none",
                    }}
                  >
                    <AiOutlinePlusCircle
                      style={{ color: "#39BEC1", fontSize: "30px" }}
                    />
                  </Button>
                  <Modal
                    show={show2}
                    onHide={handleClose2}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title style={{ color: "black" }}>
                        Education
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <div className="p-3">
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Education Level
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                onChange={(e) =>
                                  setIsEducation({
                                    ...isEducation,
                                    educationLevel: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Education Level</option>
                                <option>Associate Degree</option>
                                <option>Bachelor Degree</option>
                                <option>Master Degree</option>
                                <option>Doctorate Degree</option>
                                <option>PhD</option>
                                <option>Others</option>
                              </Form.Select>
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Institute
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="institute"
                                type={"text"}
                                onChange={(e) =>
                                  setIsEducation({
                                    ...isEducation,
                                    institute: e.target.value,
                                  })
                                }
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
                                Major
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                onChange={(e) =>
                                  setIsEducation({
                                    ...isEducation,
                                    major: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Major</option>
                                <option>Masters of Law</option>
                                <option>Computer Science</option>
                                <option>Phsycology</option>
                              </Form.Select>
                            </fieldset>
                          </Col>

                          <Row>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Start Date
                                </label>
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  name="email"
                                  onChange={(e) =>
                                    setIsEducation({
                                      ...isEducation,
                                      startingDate: e.target.value,
                                    })
                                  }
                                  type={"date"}
                                  //   value={user.number}
                                  //   onChange={getUserData}
                                  placeholder="A Service Like No Other
                "
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  End Date
                                </label>

                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"date"}
                                  name="firstname"
                                  onChange={(e) =>
                                    setIsEducation({
                                      ...isEducation,
                                      endingDate: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Gia (PVT) LTD"
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                <label
                                  className="text-lg"
                                  style={{ width: "100%" }}
                                >
                                  Upload Certification
                                </label>

                                <input
                                  type="file"
                                  onChange={(e) => {
                                    setIsEducation({
                                      ...isEducation,
                                      certificate: e.target.files[0],
                                    });
                                  }}
                                  class="form-control"
                                  id="customFile"
                                />
                              </fieldset>
                            </Col>
                          </Row>
                        </div>
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
                        onClick={educationFunc}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </h2>
                <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Education
                </h2>
                <hr className="mt-2" />
                {isEducationData.length > 0 &&
                  isEducationData.map((event, index) => {
                    console.log(event, 'eveeeeeeent');
                    return (
                      <>
                        <Container>
                          <Row className="align-items-center row">
                            <Col>
                              <Row className="align-items-center">
                                <Col lg="3">
                                  <div className="p3">
                                    <h2 className="text-xl font-semibold">
                                      {event.institute}
                                    </h2>

                                    <h2
                                      className="text-lg"
                                      style={{ color: "#7A7979" }}
                                    >
                                      {event.educationLevel}
                                    </h2>
                                  </div>
                                </Col>
                                <Col lg="3">
                                  <div className="p3">
                                    <h2
                                      className="text-xl"
                                      style={{ color: "#6A489C" }}
                                    >
                                      {event.major}
                                    </h2>

                                    <h2
                                      className="text-lg"
                                      style={{ color: "#7A7979" }}
                                    >
                                      {event.startingDate + ' - ' + event.endingDate}
                                    </h2>
                                  </div>
                                </Col>
                                <Col lg="3">
                                  {event?.certificate ? 
                                <div className="p-3 webkit">
                                <Link to={`${event.certificate}`}>
                                <Button
                                  className="text-white border-rounded px-3 py-2"
                                  style={{
                                    background: "#39BEC1",
                                    border: "none",
                                  }}
                                >
                                  see certificate
                                </Button>
                                </Link>
                              </div> : ''  
                                }
                                  
                                </Col>
                                <Col lg="3">
                                  <div className="p-3 webkit">
                                    <div className="inline-flex">
                                      <div className="w-10">
                                        <button
                                          onClick={handleShow6}
                                          className="text-white border-rounded"
                                          style={{
                                            background: "none",
                                            border: "none",
                                          }}
                                        >
                                          <BiEdit
                                            style={{
                                              color: "#39BEC1",
                                              fontSize: "30px",
                                            }}
                                          />
                                        </button>
                                        <Modal
                                          show={show6}
                                          onHide={handleClose6}
                                          backdrop="static"
                                          keyboard={false}
                                        >
                                          <Modal.Header closeButton>
                                            <Modal.Title
                                              style={{ color: "black" }}
                                            >
                                              Edit Education
                                            </Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                            <Row>
                                              <div className="p-3">
                                                <Col lg="12">
                                                  <fieldset>
                                                    <label
                                                      className="text-lg"
                                                      style={{ width: "100%" }}
                                                    >
                                                      Education Level
                                                    </label>
                                                    <Form.Select aria-label="Default select example">
                                                      <option hidden="">
                                                        Education Level
                                                      </option>
                                                      <option>
                                                        Associate Degree
                                                      </option>
                                                      <option>
                                                        Bachelor Degree
                                                      </option>
                                                      <option>
                                                        Master Degree
                                                      </option>
                                                      <option>
                                                        Doctorate Degree
                                                      </option>
                                                      <option>PhD</option>
                                                      <option>Others</option>
                                                    </Form.Select>
                                                  </fieldset>
                                                </Col>
                                                <Col lg="12">
                                                  <fieldset>
                                                    <label
                                                      className="text-lg"
                                                      style={{ width: "100%" }}
                                                    >
                                                      Institute
                                                    </label>
                                                    <input
                                                      style={{ width: "100%" }}
                                                      className="form-control"
                                                      name="institute"
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
                                                      Major
                                                    </label>
                                                    <Form.Select aria-label="Default select example">
                                                      <option hidden="">
                                                        Major
                                                      </option>
                                                      <option>
                                                        Masters of Law
                                                      </option>
                                                      <option>
                                                        Computer Science
                                                      </option>
                                                      <option>
                                                        Phsycology
                                                      </option>
                                                    </Form.Select>
                                                  </fieldset>
                                                </Col>

                                                <Row>
                                                  <Col lg="6">
                                                    <fieldset>
                                                      <label
                                                        className="text-lg"
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Start Date
                                                      </label>
                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                        className="form-control"
                                                        name="email"
                                                        type={"date"}
                                                        //   value={user.number}
                                                        //   onChange={getUserData}
                                                        placeholder="A Service Like No Other
                "
                                                      />
                                                    </fieldset>
                                                  </Col>
                                                  <Col lg="6">
                                                    <fieldset>
                                                      <label
                                                        className="text-lg"
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        End Date
                                                      </label>

                                                      <input
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                        className="form-control"
                                                        type={"date"}
                                                        name="firstname"
                                                        //   value={user.name}
                                                        //   onChange={getUserData}
                                                        placeholder="Gia (PVT) LTD

                "
                                                        required
                                                      />
                                                    </fieldset>
                                                  </Col>
                                                  <Col lg="6">
                                                    <fieldset>
                                                      <label
                                                        className="text-lg"
                                                        style={{
                                                          width: "100%",
                                                        }}
                                                      >
                                                        Upload Certification
                                                      </label>

                                                      <input
                                                        type="file"
                                                        class="form-control"
                                                        id="customFile"
                                                      />
                                                    </fieldset>
                                                  </Col>
                                                </Row>
                                              </div>
                                            </Row>
                                          </Modal.Body>
                                          <Modal.Footer>
                                            <Button
                                              variant="secondary"
                                              onClick={handleClose6}
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
                                      </div>
                                      <div className="w-10">
                                        <ImBin
                                          style={{
                                            color: "#39BEC1",
                                            fontSize: "30px",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                      </>
                    );
                  })}
                {/* <hr className="mt-2" />
                <Container>
                  <Row className="align-items-center row">
                    <Col>
                      <Row className="align-items-center">
                        <Col lg="3">
                          <div className="p3">
                            <h2 className="text-xl font-semibold">WWT</h2>

                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              Associate Degree
                            </h2>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p3">
                            <h2
                              className="text-xl"
                              style={{ color: "#6A489C" }}
                            >
                              Computer Science
                            </h2>

                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              Feb 2017 - Nov 2019
                            </h2>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <Button
                              className="text-white border-rounded px-3 py-2"
                              style={{ background: "#39BEC1", border: "none" }}
                            >
                              {" "}
                              see certificate
                            </Button>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <div className="inline-flex">
                              <div className="w-10">
                                <button
                                  onClick={handleShow6}
                                  className="text-white border-rounded"
                                  style={{
                                    background: "none",
                                    border: "none",
                                  }}
                                >
                                  <BiEdit
                                    style={{
                                      color: "#39BEC1",
                                      fontSize: "30px",
                                    }}
                                  />
                                </button>
                                <Modal
                                  show={show6}
                                  onHide={handleClose6}
                                  backdrop="static"
                                  keyboard={false}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title style={{ color: "black" }}>
                                      Edit Education
                                    </Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <Row>
                                      <div className="p-3">
                                        <Col lg="12">
                                          <fieldset>
                                            <label
                                              className="text-lg"
                                              style={{ width: "100%" }}
                                            >
                                              Education Level
                                            </label>
                                            <Form.Select aria-label="Default select example">
                                              <option hidden="">
                                                Education Level
                                              </option>
                                              <option>Associate Degree</option>
                                              <option>Bachelor Degree</option>
                                              <option>Master Degree</option>
                                              <option>Doctorate Degree</option>
                                              <option>PhD</option>
                                              <option>Others</option>
                                            </Form.Select>
                                          </fieldset>
                                        </Col>
                                        <Col lg="12">
                                          <fieldset>
                                            <label
                                              className="text-lg"
                                              style={{ width: "100%" }}
                                            >
                                              Institute
                                            </label>
                                            <input
                                              style={{ width: "100%" }}
                                              className="form-control"
                                              name="institute"
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
                                              Major
                                            </label>
                                            <Form.Select aria-label="Default select example">
                                              <option hidden="">Major</option>
                                              <option>Masters of Law</option>
                                              <option>Computer Science</option>
                                              <option>Phsycology</option>
                                            </Form.Select>
                                          </fieldset>
                                        </Col>

                                        <Row>
                                          <Col lg="6">
                                            <fieldset>
                                              <label
                                                className="text-lg"
                                                style={{ width: "100%" }}
                                              >
                                                Start Date
                                              </label>
                                              <input
                                                style={{ width: "100%" }}
                                                className="form-control"
                                                name="email"
                                                type={"date"}
                                                //   value={user.number}
                                                //   onChange={getUserData}
                                                placeholder="A Service Like No Other
                "
                                              />
                                            </fieldset>
                                          </Col>
                                          <Col lg="6">
                                            <fieldset>
                                              <label
                                                className="text-lg"
                                                style={{ width: "100%" }}
                                              >
                                                End Date
                                              </label>

                                              <input
                                                style={{ width: "100%" }}
                                                className="form-control"
                                                type={"date"}
                                                name="firstname"
                                                //   value={user.name}
                                                //   onChange={getUserData}
                                                placeholder="Gia (PVT) LTD

                "
                                                required
                                              />
                                            </fieldset>
                                          </Col>
                                          <Col lg="6">
                                            <fieldset>
                                              <label
                                                className="text-lg"
                                                style={{ width: "100%" }}
                                              >
                                                Upload Certification
                                              </label>

                                              <input
                                                type="file"
                                                class="form-control"
                                                id="customFile"
                                              />
                                            </fieldset>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Row>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button
                                      variant="secondary"
                                      onClick={handleClose6}
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
                              </div>
                              <div className="w-10">
                                <ImBin
                                  style={{
                                    color: "#39BEC1",
                                    fontSize: "30px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Col>
                        <hr className="my-2" />
                        <Col lg="3">
                          <div className="p3">
                            <h2 className="text-xl font-semibold">
                              Colombo Uni
                            </h2>

                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              Bachelor Degree
                            </h2>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p3">
                            <h2
                              className="text-xl"
                              style={{ color: "#6A489C" }}
                            >
                              Computer Science
                            </h2>

                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              Jan 2019 - Jan 2021
                            </h2>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <Button
                              className="text-white border-rounded px-3 py-2"
                              style={{ background: "#39BEC1", border: "none" }}
                            >
                              {" "}
                              see certificate
                            </Button>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <div className="inline-flex">
                              <div className="w-10">
                                {" "}
                                <BiEdit
                                  style={{
                                    color: "#39BEC1",
                                    fontSize: "30px",
                                  }}
                                />
                              </div>
                              <div className="w-10">
                                <ImBin
                                  style={{
                                    color: "#39BEC1",
                                    fontSize: "30px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        <hr className="my-2" />
                        <Col lg="3">
                          <div className="p3">
                            <h2 className="text-xl font-semibold">Cambridge</h2>

                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              Master Degree
                            </h2>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p3">
                            <h2
                              className="text-xl"
                              style={{ color: "#6A489C" }}
                            >
                              Computer Science
                            </h2>

                            <h2
                              className="text-lg"
                              style={{ color: "#7A7979" }}
                            >
                              Jan 2021 - Jan 2023
                            </h2>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <Button
                              className="text-white border-rounded px-3 py-2"
                              style={{ background: "#39BEC1", border: "none" }}
                            >
                              {" "}
                              see certificate
                            </Button>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <div className="inline-flex">
                              <div className="w-10">
                                {" "}
                                <BiEdit
                                  style={{
                                    color: "#39BEC1",
                                    fontSize: "30px",
                                  }}
                                />
                              </div>
                              <div className="w-10">
                                <ImBin
                                  style={{
                                    color: "#39BEC1",
                                    fontSize: "30px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container> */}
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <h2 style={{ float: "right" }}>
                  <Button
                    onClick={handleShow3}
                    className="text-white border-rounded px-3"
                    style={{
                      background: "none",
                      border: "none",
                    }}
                  >
                    <AiOutlinePlusCircle
                      style={{ color: "#39BEC1", fontSize: "30px" }}
                    />
                  </Button>
                  <Modal
                    show={show3}
                    onHide={handleClose3}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title style={{ color: "black" }}>
                        Achievements
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <div className="p-3">
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Title
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="fname"
                                type={"text"}
                                onChange={(e) =>
                                  setIsAchievement({
                                    ...isAchievement,
                                    title: e.target.value,
                                  })
                                }
                                //   value={user.number}
                                //   onChange={getUserData}
                                placeholder="Gia"
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
                                onChange={(e) =>
                                  setIsAchievement({
                                    ...isAchievement,
                                    description: e.target.value,
                                  })
                                }
                                placeholder="Description"
                                className="form-control"
                              />
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Upload Certification
                              </label>
                              <input
                                type="file"
                                class="form-control"
                                id="customFile"
                              />
                            </fieldset>
                          </Col>
                        </div>
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
                        onClick={achievementFunc}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </h2>
                <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Achievements
                </h2>

                <hr className="mt-2" />
                <Container>
                  <Row className="align-items-center row">
                    <Col>
                      <Row className="align-items-center">
                        <Col lg="6">
                          <div className="p3">
                            <h2 className="text-xl font-semibold">PHD</h2>

                            <p className="text-lg" style={{ color: "#7A7979" }}>
                              It has survived t is a long established fact that
                              a reader will be distracted by the readable
                              content of a page when looking at its layout. The
                              point of using Lorem Ipsum is that it has a
                              more-or-less normal distribution of letters.
                            </p>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <Button
                              className="text-white border-rounded px-3 py-2"
                              style={{ background: "#39BEC1", border: "none" }}
                            >
                              see certificate
                            </Button>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <div className="inline-flex">
                              <div className="w-10">
                                <button
                                  onClick={handleShow7}
                                  className="text-white border-rounded"
                                  style={{
                                    background: "none",
                                    border: "none",
                                  }}
                                >
                                  <BiEdit
                                    style={{
                                      color: "#39BEC1",
                                      fontSize: "30px",
                                    }}
                                  />
                                </button>
                                <Modal
                                  show={show7}
                                  onHide={handleClose7}
                                  backdrop="static"
                                  keyboard={false}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title style={{ color: "black" }}>
                                      Edit Achievements
                                    </Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <Row>
                                      <div className="p-3">
                                        <Col lg="12">
                                          <fieldset>
                                            <label
                                              className="text-lg"
                                              style={{ width: "100%" }}
                                            >
                                              Title
                                            </label>
                                            <input
                                              style={{ width: "100%" }}
                                              className="form-control"
                                              name="fname"
                                              type={"text"}
                                              //   value={user.number}
                                              //   onChange={getUserData}
                                              placeholder="Gia"
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
                                        <Col lg="12">
                                          <fieldset>
                                            <label
                                              className="text-lg"
                                              style={{ width: "100%" }}
                                            >
                                              Upload Certification
                                            </label>
                                            <input
                                              type="file"
                                              class="form-control"
                                              id="customFile"
                                            />
                                          </fieldset>
                                        </Col>
                                      </div>
                                    </Row>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button
                                      variant="secondary"
                                      onClick={handleClose7}
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
                              </div>
                              <div className="w-10">
                                <ImBin
                                  style={{
                                    color: "#39BEC1",
                                    fontSize: "30px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Col>
                        <hr className="my-2" />
                        <Col lg="6">
                          <div className="p3">
                            <h2 className="text-xl font-semibold">EXCEL</h2>

                            <p className="text-lg" style={{ color: "#7A7979" }}>
                              It has survived t is a long established fact that
                              a reader will be distracted by the readable
                              content of a page when looking at its layout. The
                              point of using Lorem Ipsum is that it has a
                              more-or-less normal distribution of letters.
                            </p>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <Button
                              className="text-white border-rounded px-3 py-2"
                              style={{ background: "#39BEC1", border: "none" }}
                            >
                              see certificate
                            </Button>
                          </div>
                        </Col>
                        <Col lg="3">
                          <div className="p-3 webkit">
                            <div className="inline-flex">
                              <div className="w-10">
                                <BiEdit
                                  style={{
                                    color: "#39BEC1",
                                    fontSize: "30px",
                                  }}
                                />
                              </div>
                              <div className="w-10">
                                <ImBin
                                  style={{
                                    color: "#39BEC1",
                                    fontSize: "30px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="m-3">
              <div className="boxshad">
                <h2 style={{ float: "right" }}>
                  <Button
                    onClick={handleShow4}
                    className="text-white border-rounded px-3"
                    style={{
                      background: "none",
                      border: "none",
                    }}
                  >
                    <AiOutlinePlusCircle
                      style={{ color: "#39BEC1", fontSize: "30px" }}
                    />
                  </Button>
                  <Modal
                    show={show4}
                    onHide={handleClose4}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title style={{ color: "black" }}>
                        Languages
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <div className="p-3">
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Language Type
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                onClick={(e) =>
                                  setIsLanguage({
                                    ...isLanguage,
                                    languageType: e.target.value,
                                  })
                                }
                              >
                                <option hidden="">Language Type</option>
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
                                <option value="Shanghainese">
                                  Shanghainese
                                </option>
                                <option value="Swedish">Swedish</option>
                                <option value="Tagalog">Tagalog</option>
                                <option value="Telugu">Telugu</option>
                                <option value="Thai">Thai</option>
                                <option value="Turkish">Turkish</option>
                                <option value="Vietnamese">Vietnamese</option>
                                <option value="Others">Others</option>
                              </Form.Select>
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Exam Level
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="lname"
                                type={"text"}
                                onClick={(e) =>
                                  setIsLanguage({
                                    ...isLanguage,
                                    examLevel: e.target.value,
                                  })
                                }
                                //   value={user.number}
                                //   onChange={getUserData}
                                placeholder="Jay"
                              />
                            </fieldset>
                          </Col>
                          <Col lg="12">
                            <fieldset>
                              <label
                                className="text-lg"
                                style={{ width: "100%" }}
                              >
                                Grading Level
                              </label>
                              <input
                                style={{ width: "100%" }}
                                className="form-control"
                                name="lname"
                                type={"text"}
                                onClick={(e) =>
                                  setIsLanguage({
                                    ...isLanguage,
                                    gradingLevel: e.target.value,
                                  })
                                }
                                //   value={user.number}
                                //   onChange={getUserData}
                              />
                            </fieldset>
                          </Col>
                        </div>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={handleClose4}
                        style={{ background: "none", color: "#C1C1C1" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        style={{ background: "none", color: "#39BEC1" }}
                        onClick={LanguageFunc}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </h2>
                <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                  Languages
                </h2>

                <hr className="mt-2" />
                <Container>
                  <Row className="align-items-center row">
                    <Col>
                      <Table responsive>
                        <thead className="webkit text-lg">
                          <tr>
                            <th></th>
                            <th style={{ color: "#6A489C" }}>Exam Level</th>
                            <th style={{ color: "#6A489C" }}>Grading Level</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="webkit text-l">
                          <tr>
                            <td>Spanish</td>
                            <td style={{ color: "#7A7979" }}>B2</td>
                            <td style={{ color: "#7A7979" }}>70</td>
                            <td>
                              <div className="p-3 webkit">
                                <div className="inline-flex">
                                  <div className="w-10">
                                    <button
                                      onClick={handleShow8}
                                      className="text-white border-rounded"
                                      style={{
                                        background: "none",
                                        border: "none",
                                      }}
                                    >
                                      <BiEdit
                                        style={{
                                          color: "#39BEC1",
                                          fontSize: "30px",
                                        }}
                                      />
                                    </button>
                                    <Modal
                                      show={show8}
                                      onHide={handleClose8}
                                      backdrop="static"
                                      keyboard={false}
                                    >
                                      <Modal.Header closeButton>
                                        <Modal.Title style={{ color: "black" }}>
                                          Edit Languages
                                        </Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        <Row>
                                          <div className="p-3">
                                            <Col lg="12">
                                              <fieldset>
                                                <label
                                                  className="text-lg"
                                                  style={{ width: "100%" }}
                                                >
                                                  Language Type
                                                </label>
                                                <Form.Select aria-label="Default select example">
                                                  <option hidden="">
                                                    Language Type
                                                  </option>
                                                  <option value="English">
                                                    English
                                                  </option>
                                                  <option value="Arabic">
                                                    Arabic
                                                  </option>
                                                  <option value="Spanish">
                                                    Spanish
                                                  </option>
                                                  <option value="Hindi">
                                                    Hindi
                                                  </option>
                                                  <option value="Cantonese">
                                                    Cantonese
                                                  </option>
                                                  <option value="French">
                                                    French
                                                  </option>
                                                  <option value="German">
                                                    German
                                                  </option>
                                                  <option value="Italian">
                                                    Italian
                                                  </option>
                                                  <option value="Japanese">
                                                    Japanese
                                                  </option>
                                                  <option value="Korean">
                                                    Korean
                                                  </option>
                                                  <option value="Mandarin">
                                                    Mandarin
                                                  </option>
                                                  <option value="Bengali">
                                                    Bengali
                                                  </option>
                                                  <option value="Burmese">
                                                    Burmese
                                                  </option>
                                                  <option value="Czech">
                                                    Czech
                                                  </option>
                                                  <option value="Dutch">
                                                    Dutch
                                                  </option>
                                                  <option value="Greek">
                                                    Greek
                                                  </option>
                                                  <option value="Hakka">
                                                    Hakka
                                                  </option>
                                                  <option value="Hungarian">
                                                    Hungarian
                                                  </option>
                                                  <option value="Hunnanese">
                                                    Hunnanese
                                                  </option>
                                                  <option value="Malay/Indonesian">
                                                    Malay/Indonesian
                                                  </option>
                                                  <option value="Nepali">
                                                    Nepali
                                                  </option>
                                                  <option value="Portuguese">
                                                    Portuguese
                                                  </option>
                                                  <option value="Russian">
                                                    Russian
                                                  </option>
                                                  <option value="Shanghainese">
                                                    Shanghainese
                                                  </option>
                                                  <option value="Swedish">
                                                    Swedish
                                                  </option>
                                                  <option value="Tagalog">
                                                    Tagalog
                                                  </option>
                                                  <option value="Telugu">
                                                    Telugu
                                                  </option>
                                                  <option value="Thai">
                                                    Thai
                                                  </option>
                                                  <option value="Turkish">
                                                    Turkish
                                                  </option>
                                                  <option value="Vietnamese">
                                                    Vietnamese
                                                  </option>
                                                  <option value="Others">
                                                    Others
                                                  </option>
                                                </Form.Select>
                                              </fieldset>
                                            </Col>
                                            <Col lg="12">
                                              <fieldset>
                                                <label
                                                  className="text-lg"
                                                  style={{ width: "100%" }}
                                                >
                                                  Exam Level
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
                                                  Grading Level
                                                </label>
                                                <input
                                                  style={{ width: "100%" }}
                                                  className="form-control"
                                                  name="lname"
                                                  type={"text"}
                                                  //   value={user.number}
                                                  //   onChange={getUserData}
                                                />
                                              </fieldset>
                                            </Col>
                                          </div>
                                        </Row>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button
                                          variant="secondary"
                                          onClick={handleClose8}
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
                                  </div>
                                  <div className="w-10">
                                    <ImBin
                                      style={{
                                        color: "#39BEC1",
                                        fontSize: "30px",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Hindi</td>
                            <td style={{ color: "#7A7979" }}>fgfg</td>
                            <td style={{ color: "#7A7979" }}>65</td>
                            <td>
                              <div className="p-3 webkit">
                                <div className="inline-flex">
                                  <div className="w-10">
                                    <BiEdit
                                      style={{
                                        color: "#39BEC1",
                                        fontSize: "30px",
                                      }}
                                    />
                                  </div>
                                  <div className="w-10">
                                    <ImBin
                                      style={{
                                        color: "#39BEC1",
                                        fontSize: "30px",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Bengali</td>
                            <td style={{ color: "#7A7979" }}>B5</td>
                            <td style={{ color: "#7A7979" }}>30000</td>
                            <td>
                              <div className="p-3 webkit">
                                <div className="inline-flex">
                                  <div className="w-10">
                                    {" "}
                                    <BiEdit
                                      style={{
                                        color: "#39BEC1",
                                        fontSize: "30px",
                                      }}
                                    />
                                  </div>
                                  <div className="w-10">
                                    <ImBin
                                      style={{
                                        color: "#39BEC1",
                                        fontSize: "30px",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
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
