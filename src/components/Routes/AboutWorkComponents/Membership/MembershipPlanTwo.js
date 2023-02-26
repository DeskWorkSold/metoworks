import React from "react";
import { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";

export const MembershipPlanTwo = () => {
  const [isSelect, setIsSelect] = useState(false);
  const [isSelect1, setIsSelect1] = useState(false);
  const [isSelect2, setIsSelect2] = useState(false);
  const [isSelect3, setIsSelect3] = useState(false);

  const selectFunc = () => {
    if (isSelect === true) {
      setIsSelect(false);
    } else {
      setIsSelect(true);
    }
  };

  const selectFunc1 = () => {
    if (isSelect1 === true) {
      setIsSelect1(false);
    } else {
      setIsSelect1(true);
    }
  };
  const selectFunc2 = () => {
    if (isSelect2 === true) {
      setIsSelect2(false);
    } else {
      setIsSelect2(true);
    }
  };

  const selectFunc3 = () => {
    if (isSelect3 === true) {
      setIsSelect3(false);
    } else {
      setIsSelect3(true);
    }
  };

  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
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
                  src={require("../../../../assets/member.png")}
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
                  className="package-btn text-lg w-2/3 px-5"
                  onClick={() => selectFunc()}
                >
                  SELECT
                </Button>
                {isSelect === true ? (
                  <Button
                    className="text-white border-rounded text-lg w-2/3 px-5 mt-2 package-btn1"
                    style={{
                      background: "#313131",
                      border: "none",
                      fontSize: "13px",
                    }}
                  >
                    BUY NOW
                  </Button>
                ) : (
                  ""
                )}
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
                  src={require("../../../../assets/member.png")}
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
                  className="package-btn text-lg w-2/3 px-5"
                  onClick={() => selectFunc1()}
                >
                  SELECT
                </Button>
                {isSelect1 === true ? (
                  <Button
                    className="text-white border-rounded text-lg w-2/3 px-5 mt-2 package-btn1"
                    style={{
                      background: "#313131",
                      border: "none",
                      fontSize: "13px",
                    }}
                  >
                    BUY NOW
                  </Button>
                ) : (
                  ""
                )}
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
                  src={require("../../../../assets/member.png")}
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
                  className="package-btn text-lg w-2/3 px-5"
                  onClick={() => selectFunc2()}
                >
                  SELECT
                </Button>
                {isSelect2 === true ? (
                  <Button
                    className="text-white border-rounded text-lg w-2/3 px-5 mt-2 package-btn1"
                    style={{
                      background: "#313131",
                      border: "none",
                      fontSize: "13px",
                    }}
                  >
                    BUY NOW
                  </Button>
                ) : (
                  ""
                )}
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
                  src={require("../../../../assets/member.png")}
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
                  className="package-btn text-lg w-2/3 px-5"
                  onClick={() => selectFunc3()}
                >
                  SELECT
                </Button>
                {isSelect3 === true ? (
                  <Button
                    className="package-btn1 text-white border-rounded text-lg w-2/3 px-5 mt-2 package-btn1"
                    style={{
                      background: "#313131",
                      border: "none",
                      fontSize: "13px",
                    }}
                  >
                    BUY NOW
                  </Button>
                ) : (
                  ""
                )}
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
