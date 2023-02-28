import { React, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsEyeFill } from "react-icons/bs";
// import { useState } from "react/cjs/react.development";
import axios from "../../../utils/axios.api";
import Modal from "react-bootstrap/Modal";

export const Forget = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [notFound, setNotFound] = useState("false");
  const resetPassword = () => {
    if (email == "") {
      // alert("enter email");
      setNotFound("true");
    } else {
      axios
        .post(`api/v1/user/send-reset-pw?email=${email}`)
        .then((res) => {
          console.log(res);
          setModalShow(true);
        })
        .catch((err) => {
          console.log(err);
          setModalShowError(true);
        });
    }
  };

  function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Success</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                User Found!
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function MydModalWithGridError(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Error</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8} style={{ color: "red" }}>
                User Not Found Or User not verified!
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = useState(false);
  const [modalShowError, setModalShowError] = useState(false);
  return (
    <Container fluid>
      <Container>
        <Row className="webkit py-10">
          <Col>
            <div className="py-3 px-3 bg-white border border-gray-600 inline-block webkit w-5/12 w-mm">
              <h2 className="text-3xl py-3 font-semibold">Forgot Password</h2>
              <Row>
                {/* <Col lg="12" className="py-3">
                  <fieldset>
                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      type={"password"}
                      name="password"
                      placeholder=""
                      required
                    />
                  </fieldset>
                </Col> */}
                <Col>
                  <div className="input-group py-4">
                    <input
                      // type={passwordType}
                      // onChange={handlePasswordChange}
                      // value={passwordInput}
                      name="email"
                      class="form-control py-2"
                      placeholder="Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </Col>
                {notFound == "true" ? (
                  <span style={{ color: "red" }}>Please Enter Email</span>
                ) : (
                  <></>
                )}
                <Col lg="12" className="py-3">
                  <Button
                    className="w-full py-3"
                    onClick={() => resetPassword()}
                  >
                    Reset Password
                  </Button>
                </Col>
                <MydModalWithGrid
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <MydModalWithGridError
                  show={modalShowError}
                  onHide={() => setModalShowError(false)}
                />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
