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
import { Link } from "react-router-dom";

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
                <Link to="/" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/FindProfessions" className="text-reset">
                  Find Professionals
                </Link>
              </p>
              <p>
                <Link to="/Opportunities" className="text-reset">
                  Opportunities
                </Link>
              </p>
              <p>
                <Link to="/CompanyProfile" className="text-reset">
                  Post a Job
                </Link>
              </p>
              <p>
                <Link to="/Enterprice" className="text-reset">
                  Enterprise Solution{" "}
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company Info</h6>
              <p>
                <Link to="/AboutMe" className="text-reset">
                  About Me2Works
                </Link>
              </p>
              <p>
                <Link to="/HowWork" className="text-reset">
                  How Me2Works Works
                </Link>
              </p>
              <p>
                <Link to="/Opportunities" className="text-reset">
                  Opportunities
                </Link>
              </p>
              <p>
                <Link to="/WhyMeWorks" className="text-reset">
                  Why Me2Works
                </Link>
              </p>
              <p>
                <Link to="/MemberPlans" className="text-reset">
                  Pricing{" "}
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
              <p>
                <Link to="/HelpSupport" className="text-reset">
                  Help & FAQ{" "}
                </Link>
              </p>
              <p>
                <Link to="/FreeContact" className="text-reset">
                  Contact Us{" "}
                </Link>
              </p>
              <p>
                <Link to="/Opportunities" className="text-reset">
                  Opportunities
                </Link>
              </p>
              <p>
                <Link to="/WhyMeWorks" className="text-reset">
                  Why Me2Works
                </Link>
              </p>
              <p>
                <Link to="/Enterprice" className="text-reset">
                  Pricing{" "}
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Policies</h6>
              <p>
                <Link href="#" className="text-reset">
                  IP Policy{" "}
                </Link>
              </p>
              <p>
                <Link href="#" className="text-reset">
                  Privacy Policy{" "}
                </Link>
              </p>
              <p>
                <Link href="#" className="text-reset">
                  Terms of Service
                </Link>
              </p>
              <p>
                <Link href="/WhyMeWorks" className="text-reset">
                  Why Me2Works
                </Link>
              </p>
              <p>
                <Link href="/Enterprice" className="text-reset">
                  Pricing{" "}
                </Link>
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
