import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BsPatchCheck } from "react-icons/bs";

export const ThirdSec = () => {
  return (
    <Container fluid className="bg">
      <Container className="text-center">
        <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
          What We Serve
        </h2>
        <h2 className="text-4xl text-white robot">
          Why Over 3 Million People Choose Us
        </h2>

        <Row>
          <Col lg="3">
            <div className="padnng">
              <div className="package-box webkit py-4">
                <div className="numbers-box">
                  <h2 className="text-5xl text-white font-semibold">01</h2>
                </div>
                <div className="text-block py-5">
                  <h2 className="text-3xl">Quality</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer</p>
                </div>
                <div className="icon-check">
                  <BsPatchCheck className="text-5xl" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="padnng">
              <div className="package-box webkit py-4">
                <div className="numbers-box">
                  <h2 className="text-5xl text-white font-semibold">02</h2>
                </div>
                <div className="text-block py-5">
                  <h2 className="text-3xl">Quality</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer</p>
                </div>
                <div className="icon-check">
                  <BsPatchCheck className="text-5xl" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="padnng">
              <div className="package-box webkit py-4">
                <div className="numbers-box">
                  <h2 className="text-5xl text-white font-semibold">03</h2>
                </div>
                <div className="text-block py-5">
                  <h2 className="text-3xl">Quality</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer</p>
                </div>
                <div className="icon-check">
                  <BsPatchCheck className="text-5xl" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="padnng">
              <div className="package-box webkit py-4">
                <div className="numbers-box">
                  <h2 className="text-5xl text-white font-semibold">04</h2>
                </div>
                <div className="text-block py-5">
                  <h2 className="text-3xl">Quality</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer</p>
                </div>
                <div className="icon-check">
                  <BsPatchCheck className="text-5xl" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="12" className="text-center py-4">
            <Link to="/Login">
              <Button className=" border-rounded px-6 py-3">JOIN US NOW</Button>
            </Link>
          </Col>
        </Row>
        {/* <Row className="align-items-center">
          <Col className="text-center">
            <div className="p-3">
              <div className="bg1">
                <div className="text-block">
                  <h2 className="text-3xl">Quality</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer</p>
                </div>
              </div>
            </div>
          </Col>

          <Col className="text-center">
            <div className="p-3">
              <div className="bg2">
                <div className="text-block">
                  <h2 className="text-3xl">Quality</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer</p>
                </div>
              </div>
            </div>
          </Col>

          <Col className="text-center">
            <div className="p-3">
              <div className="bg3">
                <div className="text-block">
                  <h2 className="text-3xl">Quality</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer</p>
                </div>
              </div>
            </div>
          </Col>

          <Col className="text-center">
            <div className="p-3">
              <div className="bg4">
                <div className="text-block">
                  <h2 className="text-3xl">Quality</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="12" className="text-center">
            <Link to="/Login">
              <Button className=" border-rounded px-6 py-3">JOIN US NOW</Button>
            </Link>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
};
