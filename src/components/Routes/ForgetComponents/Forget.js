import { React, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsEyeFill } from "react-icons/bs";
// import { useState } from "react/cjs/react.development";
import axios from "../../../utils/axios.api";

export const Forget = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState('')
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

  const resetPassword = () => {
  axios
  .post(`api/v1/user/send-reset-pw?email=${email}`)
  .then((res) => {
   console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
};


  return (
    <Container fluid>
      <Container>
        <Row className="webkit py-10">
          <Col>
            <div className="py-3 px-3 bg-white border border-gray-600 inline-block webkit w-5/12">
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
                      type={passwordType}
                      // onChange={handlePasswordChange}
                      // value={passwordInput}
                      name="password"
                      class="form-control py-2"
                      placeholder="Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <div className="input-group-btn"> */}
                    <Button onClick={togglePassword}>
                      {passwordType === "password" ? (
                        <BsEyeFill />
                      ) : (
                        <BsEyeFill />
                      )}
                    </Button>
                  </div>
                </Col>
                <Col lg="12" className="py-3">
                  <Button className="w-full py-3" onClick={() => resetPassword()}>Reset Password</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
