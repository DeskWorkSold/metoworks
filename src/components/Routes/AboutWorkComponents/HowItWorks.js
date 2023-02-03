import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export const HowItWorks = () => {
  return (
    <Container>
      <Container>
        <div className="text-center">
          <h2 className="text-5xl robot">How it works</h2>
          <h2 className="text-2xl" style={{ color: "#6A489C" }}>
            Find And Hire Freelancer Talent Using Our Secure
          </h2>
        </div>
        <Row className="align-items-center pt-5">
          <Col lg="6" className="webkit">
            <div>
              <Image
                style={{ width: "80%" }}
                src={require("../../../assets/how1.png")}
              />
            </div>
          </Col>
          <Col lg="6" className="p-5 pl-5">
            <h1 className="text-4xl robot">We Need To HIRE</h1>
            <p className="text-lg" style={{ color: "#7A7979" }}>
              A simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries,
            </p>
            <Button className="text-white border-rounded px-5 mt-4">
              Ready To Post{" "}
            </Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center divReverse">
          <Col lg="6" className="p-5 pl-5">
            <h1 className="text-4xl robot">Looking For WORK</h1>
            <p className="text-lg" style={{ color: "#7A7979" }}>
              A simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries,
            </p>
            <Button className="text-white border-rounded px-5 mt-4">
              Start{" "}
            </Button>
          </Col>
          <Col lg="6" className="webkit">
            <div>
              <Image
                style={{ width: "80%" }}
                src={require("../../../assets/how2.png")}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="align-items-center">
          <Col lg="6">
            <div className="padd videomain">
              <div className="webkit">
                <iframe
                  src="https://www.youtube.com/embed/o1N9SdamMi0"
                  title="YouTube video player"
                  frameborder="0"
                  className="iifram"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className=" padd videomain">
              <div className="webkit">
                <iframe
                  src="https://www.youtube.com/embed/o1N9SdamMi0"
                  title="YouTube video player"
                  frameborder="0"
                  className="iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className=" padd videomain">
              <div className="webkit">
                <iframe
                  src="https://www.youtube.com/embed/o1N9SdamMi0"
                  title="YouTube video player"
                  frameborder="0"
                  className="iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
