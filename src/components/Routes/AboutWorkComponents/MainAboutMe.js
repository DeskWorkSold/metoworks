import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
// import { Col, Container, Row, Image } from "react-bootstrap";

export const MainAboutMe = () => {
  return (
    <Container>
      <Container>
        <div className="text-center">
          <h2 className="text-5xl robot">About Me2Work</h2>
          <h2 className="text-2xl" style={{ color: "#6A489C" }}>
            Help Organizations To Match Talent To Opportunity
          </h2>
        </div>
        <Row className="align-items-center pt-5">
          <Col lg="6" className="webkit">
            <div>
              <Image
                style={{ width: "80%" }}
                src={require("../../../assets/About1.png")}
              />
            </div>
          </Col>
          <Col lg="6" className="p-5 pl-5">
            <h1 className="text-4xl robot">Who Are We</h1>
            <p className="text-lg" style={{ color: "#7A7979" }}>
              A simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when avn unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries,
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center divReverse">
          <Col lg="6" className="p-5 pl-5">
            <h1 className="text-4xl robot">Our Value System</h1>
            <p className="text-lg" style={{ color: "#7A7979" }}>
              A simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries,
            </p>
          </Col>
          <Col lg="6" className="webkit">
            <div>
              <Image
                style={{ width: "80%" }}
                src={require("../../../assets/About2.png")}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
