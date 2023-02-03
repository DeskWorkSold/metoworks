import React from "react";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted"
      style={{ background: "#39BEC1" }}
    >
      <section className="">
        <MDBContainer className="text-left text-md-start pt-5 text-white">
          <MDBRow className="align-items-center mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <Image src={require("../assets/blacklogo.png")} />
              <h2 className="text-3xl">Contact us at</h2>
              <h3 className="text-l">Support@gmail.com</h3>
              <br />
              <h2 className="text-2xl">Follow us on:</h2>
              <div className="py-2">
                <div className="d-flex">
                  <div className="p-2">
                    <BsFacebook className="icon" style={{ fontSize: "50px" }} />
                  </div>
                  <div className="p-2">
                    <BsInstagram
                      className="icon"
                      style={{ fontSize: "50px" }}
                    />
                  </div>

                  <div className="p-2">
                    <BsTwitter className="icon" style={{ fontSize: "50px" }} />
                  </div>
                </div>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Navigate</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Find Professionals
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Opportunities
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Post a Job
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Enterprise Solution{" "}
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company Info</h6>
              <p>
                <a href="#!" className="text-reset">
                  About Me2Works
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  How Me2Works Works
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Opportunities
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Why Me2Works
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pricing{" "}
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
              <p>
                <a href="#!" className="text-reset">
                  Help & FAQ{" "}
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us{" "}
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Opportunities
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Why Me2Works
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pricing{" "}
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Policies</h6>
              <p>
                <a href="#!" className="text-reset">
                  IP Policy{" "}
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy{" "}
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Terms of Service
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Why Me2Works
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pricing{" "}
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
};
