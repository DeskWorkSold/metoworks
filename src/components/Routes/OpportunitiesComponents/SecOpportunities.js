import React from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";

import { BsArrowBarDown } from "react-icons/bs";

export const SecOpportunities = () => {
  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container>
        <Row>
          <Col lg="12">
            <Col lg="12" className="webkit">
              <Row>
                <Col>
                  <div className="About_main_images_search">
                    <input
                      placeholder="Enter Profession, Company Name or Keywords.
"
                    ></input>

                    <Button
                      className="text-white border-rounded"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      Search
                    </Button>
                    <Button
                      className="text-white border-rounded mx-2"
                      style={{ background: "#39BEC1", border: "none" }}
                    >
                      Reset
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg="5">
            <div className="p-3">
              <Col lg="12">
                <fieldset>
                  <label className="text-2xl" style={{ width: "100%" }}>
                    Job Industry
                  </label>
                  <Form.Select aria-label="Default select example">
                    <option>Select Job Industry</option>
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
                    Job Function
                  </label>
                  <Form.Select aria-label="Default select example">
                    <option>Select Job Function</option>
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
                    Sub Job Function
                  </label>
                  <Form.Select aria-label="Default select example">
                    <option>Select Sub Job Function</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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
                  <Form.Select aria-label="Default select example">
                    <option>Select Job Title</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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
                      placeholder="Enter Max Salary 

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
                  <Form.Select aria-label="Default select example">
                    <option>Select Job Location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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
        <Row>
          <Col lg="12" className="webkit">
            <div className="p-2">
              <h2 className="text-2xl">Advance Search</h2>
              <BsArrowBarDown
                className="text-2xl"
                style={{ color: "#39BEC1" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
