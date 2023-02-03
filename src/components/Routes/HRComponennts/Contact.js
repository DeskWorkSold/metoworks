import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { BsFillPhoneVibrateFill, BsInfo } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";

export const Contact = () => {
  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container>
        <div>
          <div className="bg_white text-left">
            <div>
              <p
                className="text-2xl p-2 font-semibold"
                style={{ color: "#6A489C" }}
              >
                Get in Touch
              </p>
            </div>
            <h1 className="text-6xl text-black ml-5 robot">
              Feel Free To Contact
            </h1>
          </div>
        </div>
        <Row className="mt-4">
          <Col lg="4">
            <div className="p-3">
              <h2 className="text-3xl text-center">Send Your Message</h2>
              <fieldset>
                {/* <label style={{ width: "100%" }}>First name</label> */}
                <input
                  style={{ width: "100%" }}
                  className="form-control"
                  type={"text"}
                  name="FullName"
                  //   value={user.name}
                  //   onChange={getUserData}
                  placeholder="Full Name"
                  required
                />
              </fieldset>
              <fieldset>
                {/* <label style={{ width: "100%" }}>First name</label> */}
                <input
                  style={{ width: "100%" }}
                  className="form-control"
                  type={"email"}
                  name="EmailAddress"
                  //   value={user.name}
                  //   onChange={getUserData}
                  placeholder="Email Address"
                  required
                />
              </fieldset>

              <fieldset>
                {/* <label style={{ width: "100%" }}>First name</label> */}
                <input
                  style={{ width: "100%" }}
                  className="form-control"
                  type={"number"}
                  name="number"
                  //   value={user.name}
                  //   onChange={getUserData}
                  placeholder="Contact Number"
                  required
                />
              </fieldset>

              <fieldset>
                {/* <label style={{ width: "100%" }}>First name</label> */}
                <input
                  style={{ width: "100%" }}
                  className="form-control"
                  type={"text"}
                  name="subject"
                  //   value={user.name}
                  //   onChange={getUserData}
                  placeholder="Subject"
                  required
                />
              </fieldset>
              <fieldset>
                {/* <label style={{ width: "100%" }}>First name</label> */}
                <textarea
                  style={{ width: "100%" }}
                  className="form-control"
                  name="message"
                  rows="3"
                  //   value={user.message}
                  //   onChange={getUserData}
                  placeholder="Your Message"
                ></textarea>
              </fieldset>
              <div className="webkit py-4">
                <Button
                  className="text-white border-rounded text-lg w-2/3 px-3"
                  style={{ background: "#39BEC1", border: "none" }}
                >
                  add Q&A
                </Button>
              </div>
            </div>
          </Col>
          <Col lg="8">
            <div className="p-3 px-5">
              <h2 className="text-3xl">Contact Information</h2>
              <div className="py-4">
                <h2 className="text-2xl d-flex" style={{ color: "#6A489C" }}>
                  <BsFillPhoneVibrateFill
                    style={{
                      color: "white",
                      background: "#39BEC1",
                      padding: "5px",
                      borderRadius: "50px",
                      fontSize: "50px",
                      marginRight: "10px",
                    }}
                  />{" "}
                  +1800 200 12345
                </h2>
                <br />
                <h2 className="text-2xl d-flex" style={{ color: "#6A489C" }}>
                  <BsInfo
                    style={{
                      color: "white",
                      background: "#39BEC1",
                      padding: "5px",
                      borderRadius: "50px",
                      fontWeight: "bolder",
                      fontSize: "50px",
                      marginRight: "10px",
                    }}
                  />
                  info@Me2Works.com
                </h2>
                <br />
                <h2 className="text-2xl d-flex" style={{ color: "#6A489C" }}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{
                      color: "white",
                      background: "#39BEC1",
                      padding: "6px",
                      borderRadius: "100px",
                      fontWeight: "bolder",
                      height: "34px",
                      width: "34px",
                      fontSize: "10px",
                      marginRight: "10px",
                    }}
                  />
                  85 Sroklyn Random Street HK Open Hours : Monday - Friday 9 AM
                  0 6 PM EST
                </h2>
                <br />
                <h2 className="text-2xl font-semibold">Q&A</h2>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header
                      style={{
                        background: "none",
                        border: "none",
                        borderBottom: "1px solid  grey",
                        borderRadius: "0px",
                      }}
                    >
                      <p style={{ color: "#7A7979" }} className="fontpx">
                        I need help adding a social network
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      85 Sroklyn Random Street HK Open Hours : Monday - Friday 9
                      AM 0 6 PM EST
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header
                      style={{
                        background: "none",
                        border: "none",
                        borderBottom: "1px solid  grey",
                        borderRadius: "0px",
                      }}
                    >
                      <p style={{ color: "#7A7979" }} className="fontpx">
                        {" "}
                        I cam’t remember my login or password
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      85 Sroklyn Random Street HK Open Hours : Monday - Friday 9
                      AM 0 6 PM EST
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header
                      style={{
                        background: "none",
                        border: "none",
                        borderBottom: "1px solid  grey",
                        borderRadius: "0px",
                      }}
                    >
                      <p style={{ color: "#7A7979" }} className="fontpx">
                        {" "}
                        I have a billing question (unrecognized charge,
                        invoicing)
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      85 Sroklyn Random Street HK Open Hours : Monday - Friday 9
                      AM 0 6 PM EST
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header
                      style={{
                        background: "none",
                        border: "none",
                        borderBottom: "1px solid  grey",
                        borderRadius: "0px",
                      }}
                    >
                      <p style={{ color: "#7A7979" }} className="fontpx">
                        {" "}
                        See all Q&A
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      85 Sroklyn Random Street HK Open Hours : Monday - Friday 9
                      AM 0 6 PM EST
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* <p style={{ color: "#7A7979" }} className="text-xl">
                  I need help adding a social network
                </p>
                <hr className="my-4" />
                <p style={{ color: "#7A7979" }} className="text-xl">
                  I cam’t remember my login or password
                </p>
                <hr className="my-4" />
                <p style={{ color: "#7A7979" }} className="text-xl">
                  I have a billing question (unrecognized charge, invoicing)
                </p>
                <hr className="my-4" />
                <p style={{ color: "#6A489C" }} className="font-semibold">
                  See all Q&A
                </p> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
