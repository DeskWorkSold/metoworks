import React, { useState } from "react";
import { Col, Container, Row, Image, FormCheck, Button } from "react-bootstrap";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BrowserRouter as Route, Router, Link, Switch } from "react-router-dom";

import "react-tabs/style/react-tabs.css";
import axios from "../../../utils/axios.api";

export const Signup = () => {
  const [freelancerSignupData, setFreelancerSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // console.log('freelancerSignupData', freelancerSignupData);
  const [recruiterSignupData, setRecruiterSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // console.log(recruiterSignupData, 'recruiterSignupData');

  const freelancerFunc = () => {
    if (
      freelancerSignupData.password === freelancerSignupData.confirmPassword
    ) {
      let obj = {
        firstName: freelancerSignupData.firstName,
        lastName: freelancerSignupData.lastName,
        email: freelancerSignupData.email,
        password: freelancerSignupData.password,
        type : 'freelancer'
      };
      axios
        .post(`api/v1/user/register?type=${obj.type}`, obj)
        .then((res) => {
          console.log(res);
          let id = res.data.user.id
          localStorage.setItem('id', id)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const RecruiterFunc = () => {
    if (recruiterSignupData.password === recruiterSignupData.confirmPassword) {
      let obj1 = {
        firstName: recruiterSignupData.firstName,
        lastName: recruiterSignupData.lastName,
        email: recruiterSignupData.email,
        password: recruiterSignupData.password,
        type : "recruiter",
        companyName : 'Codesk'
      };
      // const {firstName, lastName, email, password } = module 
      console.log(obj1, 'model');
      console.log(obj1.type, 'type');
      axios
        .post(`api/v1/user/register?type=${obj1.type}`, obj1)
        .then((res) => {
          console.log(res);

        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg="6">
          <div className="p-3 webkit">
            <div className="boxshad">
              <h2 className="text-4xl">Join Me2Works</h2>
              <div className="dflex">
                <div>
                  <Tabs className="webkit" id="tablet">
                    <TabList className="webkit py-4 d-flex-for-res">
                      <Tab>
                        {" "}
                        <Image
                          className="p-3"
                          style={{
                            background: "#7A7979",
                            objectFit: "cover",
                            borderRadius: "100px",
                            width: "40%",
                          }}
                          src={require("../../../assets/freelancer.png")}
                        />
                        <p className="text-xl">Freelancer</p>
                      </Tab>
                      <Tab>
                        <Image
                          className="p-3"
                          style={{
                            background: "#7A7979",
                            objectFit: "cover",
                            borderRadius: "100px",
                            width: "40%",
                          }}
                          src={require("../../../assets/recruiter.png")}
                        />
                        <p className="text-xl">Recruiter</p>
                      </Tab>
                    </TabList>

                    <TabPanel>
                      <Container>
                        <div className="p-3">
                          <Row>
                            <Col lg="6">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"text"}
                                  name="Fname"
                                  onChange={(e) =>
                                    setFreelancerSignUpData({
                                      ...freelancerSignupData,
                                      firstName: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="First Name"
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"text"}
                                  name="Lname"
                                  onChange={(e) =>
                                    setFreelancerSignUpData({
                                      ...freelancerSignupData,
                                      lastName: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Last Name"
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="12">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"Email"}
                                  name="email"
                                  onChange={(e) =>
                                    setFreelancerSignUpData({
                                      ...freelancerSignupData,
                                      email: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Email"
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="12">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"password"}
                                  name="password"
                                  onChange={(e) =>
                                    setFreelancerSignUpData({
                                      ...freelancerSignupData,
                                      password: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Password"
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="12">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"password"}
                                  name="confirmpassword"
                                  onChange={(e) =>
                                    setFreelancerSignUpData({
                                      ...freelancerSignupData,
                                      confirmPassword: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Confirm Password"
                                  required
                                />
                              </fieldset>
                            </Col>
                          </Row>
                          <h3
                            style={{
                              fontSize: "15px",
                              color: "black",
                              //   display: "flex",
                              textAlign: "left",
                            }}
                            className="py-2"
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                color: "#7A7979",
                              }}
                              className="py-2"
                            >
                              <FormCheck color="blue" />
                              &#160;&#160;I agree to the Privacy Policy, Terms
                              of Service and IP Policy
                            </span>
                            <span
                              className="py-2"
                              style={{
                                display: "inline-flex",
                                color: "#7A7979",
                              }}
                            >
                              <FormCheck color="blue" />
                              &#160;&#160;By joining, I agree to receive emails,
                              messages and market updates from Me2Works
                            </span>
                          </h3>
                          <Col lg="12" className="webkit">
                            <div className="py-3">
                              <Button
                                className="text-white border-rounded text-xl px-5 py-2"
                                style={{
                                  background: "#39BEC1",
                                  border: "none",
                                }}
                                onClick={freelancerFunc}
                              >
                                SIGN UP
                              </Button>
                            </div>
                            <p
                              className="pt-2 text-xl"
                              style={{ color: "#7A7979" }}
                            >
                              OR
                            </p>
                          </Col>
                        </div>
                      </Container>
                    </TabPanel>

                    <TabPanel>
                      <Container>
                        <div className="p-3">
                          <Row>
                            <Col lg="6">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"text"}
                                  name="Fname"
                                  onChange={(e) =>
                                    setRecruiterSignUpData({
                                      ...recruiterSignupData,
                                      firstName: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="First Name"
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="6">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"text"}
                                  name="Lname"
                                  onChange={(e) =>
                                    setRecruiterSignUpData({
                                      ...recruiterSignupData,
                                      lastName: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Last Name"
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="12">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"Email"}
                                  name="email"
                                  onChange={(e) =>
                                    setRecruiterSignUpData({
                                      ...recruiterSignupData,
                                      email: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Email"
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="12">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"password"}
                                  name="password"
                                  onChange={(e) =>
                                    setRecruiterSignUpData({
                                      ...recruiterSignupData,
                                      password: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Password"
                                  required
                                />
                              </fieldset>
                            </Col>
                            <Col lg="12">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"password"}
                                  name="confirmpassword"
                                  onChange={(e) =>
                                    setRecruiterSignUpData({
                                      ...recruiterSignupData,
                                      confirmPassword: e.target.value,
                                    })
                                  }
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Confirm Password"
                                  required
                                />
                              </fieldset>
                            </Col>
                          </Row>
                          <h3
                            style={{
                              fontSize: "15px",
                              color: "black",
                              //   display: "flex",
                              textAlign: "left",
                            }}
                            className="py-2"
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                color: "#7A7979",
                              }}
                              className="py-2"
                            >
                              <FormCheck color="blue" />
                              &#160;&#160;I agree to the Privacy Policy, Terms
                              of Service and IP Policy
                            </span>
                            <span
                              className="py-2"
                              style={{
                                display: "inline-flex",
                                color: "#7A7979",
                              }}
                            >
                              <FormCheck color="blue" />
                              &#160;&#160;By joining, I agree to receive emails,
                              messages and market updates from Me2Works
                            </span>
                          </h3>
                          <Col lg="12" className="webkit">
                            <div className="py-3">
                              <Button
                                className="text-white border-rounded text-xl px-5 py-2"
                                style={{
                                  background: "#39BEC1",
                                  border: "none",
                                }}
                                onClick={RecruiterFunc}
                              >
                                SIGN UP
                              </Button>
                            </div>
                            <p
                              className="pt-2 text-xl"
                              style={{ color: "#7A7979" }}
                            >
                              OR
                            </p>
                          </Col>
                        </div>
                      </Container>
                    </TabPanel>
                  </Tabs>
                  <div className="dflex py-3">
                    <Row className="webkit">
                      <Col lg="1"></Col>
                      <Col lg="4">
                        <BsLinkedin
                          className="text-7xl"
                          style={{ color: "#0077B5" }}
                        />
                      </Col>
                      <Col
                        lg="2"
                        className="marres"
                        style={{ marginTop: "35px" }}
                      >
                        <hr className="hr" style={{ width: "60px" }} />
                      </Col>
                      <Col lg="4">
                        <BsFacebook
                          className="text-7xl"
                          style={{ color: "#4267B2" }}
                        />
                      </Col>
                      <Col lg="1"></Col>
                    </Row>
                    <div className="pt-40">
                      <p className="py-2">
                        Already have an Account?
                        <span style={{ color: "#6A489C", fontWeight: "bold" }}>
                          <Link to="/Login"> Log in</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col lg="6">
          <div className="p-5">
            <Image
              style={{
                objectFit: "cover",
                width: "100%",
              }}
              src={require("../../../assets/logimg.png")}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
