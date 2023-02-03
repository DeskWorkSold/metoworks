import React, { useState } from "react";
import { Col, Container, Row, Image, FormCheck, Button } from "react-bootstrap";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BrowserRouter as Route, Router, Link, Switch } from "react-router-dom";

import "react-tabs/style/react-tabs.css";
import axios from "axios";

export const Login = () => {
  const [freelancerData, setFreelancerData] = useState({
    userName : "",
    password : ""
  }) 
// console.log(freelancerData, 'freelancerData dataaaaaa');
const [recruiterData, setRecruiterData] = useState({
  userName : "",
  password : ""
}) 
// console.log(recruiterData, 'recruiterData dataaaaaa');

// npm catch clean --force 

const freelancerFunc = () => {
  axios.post("http://localhost:5000/api/v1/user/login",{freelancerData}).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
}
)
}

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
                            <Col lg="12">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"text"}
                                  name="FullName"
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  onChange={(e) => setFreelancerData({...freelancerData, userName : e.target.value})}
                                  placeholder="User Name"
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
                                  name="Password"
                                 onChange={(e) => setFreelancerData({...freelancerData, password : e.target.value})}
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Password"
                                  required
                                />
                              </fieldset>
                            </Col>
                          </Row>
                          <h3
                            style={{
                              // fontSize: "15px",
                              color: "black",
                              //   display: "flex",
                              textAlign: "left",
                            }}
                            className="py-2 fontpxx"
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                color: "#7A7979",
                              }}
                            >
                              <FormCheck id="check" color="blue" />
                              &#160;&#160;Keep me logged in
                            </span>
                            <span style={{ float: "right", color: "#6A489C" }}>
                              Forgot Password?
                            </span>
                          </h3>
                          <Col lg="12" className="webkit">
                            <div className="py-3">
                              <Link to="/FreelancerProfile">
                                <Button
                                  className="text-white border-rounded text-xl px-5 py-2 w-2/3"
                                  style={{
                                    background: "#39BEC1",
                                    border: "none",
                                  }}
                                  onClick={freelancerFunc}
                                >
                                  LOGIN
                                </Button>
                              </Link>
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
                            <Col lg="12">
                              <fieldset>
                                {/* <label style={{ width: "100%" }}>First name</label> */}
                                <input
                                  style={{ width: "100%" }}
                                  className="form-control"
                                  type={"text"}
                                  name="FullName"
                                  onChange={(e) => setRecruiterData({...recruiterData, userName : e.target.value})}
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="User Name"
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
                                  name="Password"
                                  onChange={(e) => setRecruiterData({...recruiterData, password : e.target.value})}
                                  //   value={user.name}
                                  //   onChange={getUserData}
                                  placeholder="Password"
                                  required
                                />
                              </fieldset>
                            </Col>
                          </Row>
                          <h3
                            style={{
                              // fontSize: "15px",
                              color: "black",
                              //   display: "flex",
                              textAlign: "left",
                            }}
                            className="py-2 fontpxx"
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                color: "#7A7979",
                              }}
                            >
                              <FormCheck id="check" color="blue" />
                              &#160;&#160;Keep me logged in
                            </span>
                            <span style={{ float: "right", color: "#6A489C" }}>
                              Forgot Password?
                            </span>
                          </h3>
                          <Col lg="12" className="webkit">
                            <div className="py-3">
                              <Link to="/CompanyProfile">
                                <Button
                                  className="text-white border-rounded text-xl px-5 py-2 w-2/3"
                                  style={{
                                    background: "#39BEC1",
                                    border: "none",
                                  }}
                                >
                                  LOGIN
                                </Button>
                              </Link>
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
                        Not a member?{" "}
                        <span style={{ color: "#6A489C", fontWeight: "bold" }}>
                          <Link to="/Signup">Sign up</Link>
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