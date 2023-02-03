import React, { useState } from "react";
import { Col, Container, Row, Image, Button, Form } from "react-bootstrap";
import { BsCoin } from "react-icons/bs";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const RenewPlan = () => {
  const [show, setShow] = useState(false);
  const [creditCard, setCreditCard] = useState();
  console.log("===>", creditCard);
  const [bankTransfer, setBankTransfer] = useState(false);
  const [mail, setMail] = useState(false);
  const [flag, setFlag] = useState(false);

  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container>
        <Row className="align-items-center">
          <Col lg="12">
            <div
              style={{
                // display: "flex",
                alignItems: "center",
              }}
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
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div
              className="padd bg-white webkit"
              style={{
                borderRadius: "10px",
                border: "1px solid #313131",
                height: "450px",

                marginTop: "10px",
              }}
            >
              <div>
                <Image
                  className="w-2/4"
                  src={require("../../../assets/member.png")}
                />
                <h2 className="text-2xl font-semibold">Package A</h2>
                <p className="text-lg">Kickoff Your Recruitment campaign</p>
                <h2
                  className="text-3xl py-3 font-bold robot"
                  style={{ color: "#39BEC1" }}
                >
                  HK$2000
                </h2>
                <p className="text-lg ">10 Tokens</p>
                <Button
                  className="text-white border-rounded text-lg w-2/3 px-2 fontpx"
                  style={{ background: "#39BEC1", border: "none" }}
                >
                  SELECT
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="padd bg-white webkit"
              style={{
                borderRadius: "10px",
                border: "1px solid #313131",
                height: "450px",

                marginTop: "10px",
              }}
            >
              <div>
                <Image
                  className="w-2/4"
                  src={require("../../../assets/member.png")}
                />
                <h2 className="text-2xl font-semibold">Package A</h2>
                <p className="text-lg">Kickoff Your Recruitment campaign</p>
                <h2
                  className="text-3xl py-3 font-bold robot"
                  style={{ color: "#39BEC1" }}
                >
                  HK$6000
                </h2>
                <p className="text-lg ">40 Tokens</p>
                <Button
                  onClick={() => setShow(true)}
                  className="text-white border-rounded text-lg w-2/3 px-2 fontpx"
                  style={{ background: "#6A489C", border: "none" }}
                >
                  BUY NOW
                </Button>

                <Modal
                  id="paymentmodal"
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      Payment Summary
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container>
                      <Row>
                        <Col className="pt-4">
                          <div>
                            <h2
                              className="text-3xl font-bold"
                              style={{ color: "rgb(57, 190, 193)" }}
                            >
                              Membership Plan Package B
                            </h2>
                            <div
                              style={{
                                border: "1px solid grey",
                                borderRadius: "10px",
                                textAlign: "center",
                                display: "table",
                                marginTop: "20px",
                              }}
                            >
                              <div className="p-3 align-items-center">
                                <Row className="align-items-center">
                                  <Col>
                                    <Image
                                      style={{ width: "70%" }}
                                      src={require("../../../assets/card.png")}
                                    />
                                  </Col>
                                  <Col>
                                    <h2 className=" text-l w-40">
                                      Credit Card
                                    </h2>
                                  </Col>
                                  <Col>
                                    <input
                                      value={creditCard}
                                      onChange={() =>
                                        setCreditCard("creditCard")
                                      }
                                      type="radio"
                                      className="form-check-input"
                                      name="bsradio"
                                      id="radio1"
                                    />
                                  </Col>
                                </Row>
                              </div>
                              <hr style={{ border: "1px solid grey" }} />
                              <div className="p-3 align-items-center">
                                <Row className="align-items-center">
                                  <Col>
                                    <Image
                                      style={{ width: "70%" }}
                                      src={require("../../../assets/Bank.png")}
                                    />
                                  </Col>
                                  <Col>
                                    <h2 className=" text-l w-40">
                                      Direct Bank Transfer
                                    </h2>
                                  </Col>
                                  <Col>
                                    <input
                                      onChange={() =>
                                        setCreditCard("bankTransfer")
                                      }
                                      value={creditCard}
                                      type="radio"
                                      className="form-check-input "
                                      name="bsradio"
                                      id="radio2"
                                    />
                                  </Col>
                                </Row>
                              </div>
                            </div>
                            <div
                              style={{
                                border: "1px solid grey",
                                borderRadius: "10px",
                                textAlign: "center",
                                display: "table",
                                marginTop: "40px",
                              }}
                            >
                              <div className="p-3 d-flex align-items-center">
                                <Row className="align-items-center">
                                  <Col>
                                    <Image
                                      style={{ width: "70%" }}
                                      src={require("../../../assets/Cheque.png")}
                                    />
                                  </Col>
                                  <Col>
                                    <h2 className=" text-l w-40">
                                      Mail Cheque
                                    </h2>
                                  </Col>
                                  <Col>
                                    <input
                                      onChange={() => setCreditCard("mail")}
                                      value={creditCard}
                                      type="radio"
                                      className="form-check-input "
                                      name="bsradio"
                                      id="radio3"
                                    />
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col className="pt-4">
                          <div>
                            <h2
                              className="text-3xl font-bold text-center"
                              style={{ color: "rgb(57, 190, 193)" }}
                            >
                              HK$6000/Annually
                            </h2>
                          </div>
                          {creditCard === "creditCard" ? (
                            <Col>
                              <div>
                                <Col lg="12">
                                  <div className="p-3 row">
                                    <Col lg="6">
                                      <fieldset>
                                        <label
                                          className="text-lg"
                                          style={{ width: "100%" }}
                                        >
                                          Card number:
                                        </label>
                                        <input
                                          style={{ width: "100%" }}
                                          className="form-control"
                                          name="fname"
                                          type={"number"}
                                          //   value={user.number}
                                          //   onChange={getUserData}
                                        />
                                        <p
                                          style={{
                                            fontSize: "14px",
                                            color: "rgb(148, 147, 147)",
                                          }}
                                        >
                                          Please provide a valid card number
                                        </p>
                                      </fieldset>
                                    </Col>
                                    <Col lg="6">
                                      <fieldset>
                                        <label
                                          className="text-lg"
                                          style={{ width: "100%" }}
                                        >
                                          Expiry date:
                                        </label>
                                        <input
                                          style={{ width: "100%" }}
                                          className="form-control"
                                          type={"date"}
                                          name="firstname"
                                          //   value={user.name}
                                          //   onChange={getUserData}
                                          placeholder="Select Job Industry
                "
                                          required
                                        />
                                        <p
                                          style={{
                                            fontSize: "14px",
                                            color: "rgb(148, 147, 147)",
                                          }}
                                        >
                                          Please provide a valid expiry date
                                        </p>
                                      </fieldset>
                                    </Col>
                                    <Col lg="6">
                                      <fieldset>
                                        <label
                                          className="text-lg"
                                          style={{ width: "100%" }}
                                        >
                                          Cardholder name:
                                        </label>

                                        <input
                                          style={{ width: "100%" }}
                                          className="form-control"
                                          type={"text"}
                                          name="firstname"
                                          //   value={user.name}
                                          //   onChange={getUserData}
                                          placeholder="Select Job Industry
                "
                                          required
                                        />
                                        <p
                                          style={{
                                            fontSize: "14px",
                                            color: "rgb(148, 147, 147)",
                                          }}
                                        >
                                          Please provide a card holder name
                                        </p>
                                      </fieldset>
                                    </Col>
                                    <Col lg="6">
                                      <fieldset>
                                        <label
                                          className="text-lg"
                                          style={{ width: "100%" }}
                                        >
                                          CVC/CVV:
                                        </label>

                                        <input
                                          style={{ width: "100%" }}
                                          className="form-control"
                                          type={"text"}
                                          name="firstname"
                                          //   value={user.name}
                                          //   onChange={getUserData}
                                          placeholder="Select Job Industry"
                                          required
                                        />
                                        <p
                                          style={{
                                            fontSize: "14px",
                                            color: "rgb(148, 147, 147)",
                                          }}
                                        >
                                          Please provide a valid CVC/CVV
                                        </p>
                                      </fieldset>
                                    </Col>
                                    <Col lg="6">
                                      <fieldset>
                                        <label
                                          className="text-lg"
                                          style={{ width: "100%" }}
                                        >
                                          Card Currency
                                        </label>
                                        <Form.Select aria-label="Default select example">
                                          <option value="AED">AED</option>
                                          <option value="ARS">ARS</option>
                                          <option value="AUD">AUD</option>
                                          <option value="BGN">BGN</option>
                                          <option value="BRL">BRL</option>
                                          <option value="BSD">BSD</option>
                                          <option value="CAD">CAD</option>
                                          <option value="CHF">CHF</option>
                                          <option value="CLP">CLP</option>
                                          <option value="CNY">CNY</option>
                                          <option value="COP">COP</option>
                                          <option value="CZK">CZK</option>
                                          <option value="DKK">DKK</option>
                                          <option value="DOP">DOP</option>
                                          <option value="EGP">EGP</option>
                                          <option value="EUR">EUR</option>
                                          <option value="FJD">FJD</option>
                                          <option value="GBP">GBP</option>
                                          <option value="GTQ">GTQ</option>
                                          <option value="HKD">HKD</option>
                                          <option value="HRK">HRK</option>
                                          <option value="HUF">HUF</option>
                                          <option value="IDR">IDR</option>
                                          <option value="ILS">ILS</option>
                                          <option value="INR">INR</option>
                                          <option value="ISK">ISK</option>
                                          <option value="JPY">JPY</option>
                                          <option value="KRW">KRW</option>
                                          <option value="KZT">KZT</option>
                                          <option value="MXN">MXN</option>
                                          <option value="MYR">MYR</option>
                                          <option value="NOK">NOK</option>
                                          <option value="NZD">NZD</option>
                                          <option value="PAB">PAB</option>
                                          <option value="PEN">PEN</option>
                                          <option value="PHP">PHP</option>
                                          <option value="PKR">PKR</option>
                                          <option value="PLN">PLN</option>
                                          <option value="PYG">PYG</option>
                                          <option value="RON">RON</option>
                                          <option value="RUB">RUB</option>
                                          <option value="SAR">SAR</option>
                                          <option value="SEK">SEK</option>
                                          <option value="SGD">SGD</option>
                                          <option value="THB">THB</option>
                                          <option value="TRY">TRY</option>
                                          <option value="TWD">TWD</option>
                                          <option value="UAH">UAH</option>
                                          <option value="USD" selected>
                                            USD
                                          </option>
                                          <option value="UYU">UYU</option>
                                          <option value="VND">VND</option>
                                          <option value="ZAR">ZAR</option>
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
                                  </div>
                                </Col>
                                <Button
                                  className="text-white border-rounded text-lg w-full mt-2 py-3"
                                  style={{
                                    background: "rgb(106, 71, 156)",
                                    border: "none",
                                  }}
                                >
                                  Veriﬁed Payment Method
                                </Button>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    color: "rgb(148, 147, 147)",
                                  }}
                                >
                                  You agree to authorize the use of your card
                                  for future payments.
                                </p>
                              </div>
                            </Col>
                          ) : null}
                          {creditCard === "bankTransfer" ? (
                            <Col>
                              <div>
                                <h2
                                  className="text-3xl font-bold"
                                  style={{ color: "rgb(57, 190, 193)" }}
                                >
                                  HK$6000/bank
                                </h2>
                              </div>
                            </Col>
                          ) : null}
                          {creditCard === "mail" ? (
                            <Col>
                              <div>
                                <h2
                                  className="text-3xl font-bold"
                                  style={{ color: "rgb(57, 190, 193)" }}
                                >
                                  HK$6000/mail
                                </h2>
                              </div>
                            </Col>
                          ) : null}
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Body>
                </Modal>
                {/* <Button
                  className="text-white border-rounded text-lg w-2/3 px-5 mt-2"
                  style={{ background: "#313131", border: "none" }}
                >
                  BUY NOW
                </Button> */}
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="padd bg-white webkit"
              style={{
                borderRadius: "10px",
                border: "1px solid #313131",
                height: "450px",

                marginTop: "10px",
              }}
            >
              <div>
                <Image
                  className="w-2/4"
                  src={require("../../../assets/member.png")}
                />
                <h2 className="text-2xl font-semibold">Package A</h2>
                <p className="text-lg">Kickoff Your Recruitment campaign</p>
                <h2
                  className="text-3xl py-3 font-bold robot"
                  style={{ color: "#39BEC1" }}
                >
                  HK$10,000
                </h2>
                <p className="text-lg ">80 Tokens</p>
                <Button
                  className="text-white border-rounded text-lg w-2/3 px-2 fontpx"
                  style={{ background: "#39BEC1", border: "none" }}
                >
                  SELECT
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="padd bg-white webkit"
              style={{
                borderRadius: "10px",
                border: "1px solid #313131",
                height: "450px",

                marginTop: "10px",
              }}
            >
              <div>
                <Image
                  className="w-2/4"
                  src={require("../../../assets/member.png")}
                />
                <h2 className="text-2xl font-semibold">Package A</h2>
                <p className="text-lg">Kickoff Your Recruitment campaign</p>
                <h2
                  className="text-3xl py-3 font-bold robot"
                  style={{ color: "#39BEC1" }}
                >
                  HK$20,000
                </h2>
                <p className="text-lg ">100 Tokens</p>
                <Button
                  className="text-white border-rounded text-lg w-2/3 px-2 fontpx"
                  style={{ background: "#39BEC1", border: "none" }}
                >
                  SELECT
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <div className="text-sm">
              <h2 className="text-lg">You Can Spend The Tokens On</h2>
              <br />
              <ul className="list-none">
                <li>1) Job Posting</li>
                <Container>
                  <ul className="list-disc">
                    <li>4 Tokens For Each Job Posting</li>
                    <li>Each Job Posting Valid For 30 Days</li>
                  </ul>
                </Container>
              </ul>
              <br />
              <ul className="list-none">
                <li>3) Corporate Logo Branding</li>
                <Container>
                  <ul className="list-disc">
                    <li> 15 Tokens For Corporate Logo Branding g</li>
                    <li>
                      {" "}
                      Corporate Logo Display On Me2Works Home Page For 14 Days
                    </li>
                  </ul>
                </Container>
              </ul>
              <ul className="list-none">
                <li>5) Employer Branding</li>
                <Container>
                  <ul className="list-disc">
                    <li> 100 Tokens For Employer Branding Article</li>
                    <li>
                      Employer Branding Article Posting On “Market News & Trend”
                      For 30 Days
                    </li>
                  </ul>
                </Container>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="text-sm">
              <br />
              <br />
              <ul className="list-none">
                <li>2) Purchase Talent Profile</li>
                <Container>
                  <ul className="list-disc">
                    <li> 10 Tokens For Purchase Each Talent Profile </li>
                    <br />
                  </ul>
                </Container>
              </ul>
              <br />
              <ul className="list-none">
                <li>4) Corporate News Posting</li>
                <Container>
                  <ul className="list-disc">
                    <li> 40 Tokens For Corporate News Posting</li>
                    <li>
                      Corporate News Posting On “Market News & Trend” For 30
                      Days
                    </li>
                  </ul>
                </Container>
              </ul>
              <ul className="list-none">
                <li>5) Employer Branding</li>
                <Container>
                  <ul className="list-disc">
                    <li> 100 Tokens For Employer Branding Article</li>
                    <li>
                      Employer Branding Article Posting On “Market News & Trend”
                      For 30 Days
                    </li>
                  </ul>
                </Container>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
