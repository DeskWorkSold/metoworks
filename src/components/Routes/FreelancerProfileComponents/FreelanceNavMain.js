import React from "react";
import Button from "react-bootstrap/Button";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import Form from "react-bootstrap/Form";
import { BrowserRouter as Route, Router, Link, Switch } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../CompanyProfileComponents/BotNav.css";

export const FreelanceNavMain = () => {
  return (
    <Navbar expand="lg" id="bot" style={{ background: "#39BEC1" }}>
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ justifyContent: "center" }}>
          {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
          <Nav className="my-2 my-lg-0" navbarScroll>
            <Link to="/FreelancerProfile" className="nav-link" id="bottomBord">
              Profile
            </Link>
            <Link to="/FreelancerGenerateCv" className="nav-link">
              Generate CV
            </Link>
            <Link to="/FreelancerFindWork" className="nav-link">
              Find Work
            </Link>
            <Link to="/FreelanceJobApplied" className="nav-link">
              Jobs Applied
            </Link>
            <Link to="/FreelanceMainSavedJob" className="nav-link">
              Saved Jobs
            </Link>
            <NavDropdown title="Interviews" id="navbarScrollingDropdown">
              <Link className="dropdown-item" to="/FreelanceSheduled">
                Scheduled
              </Link>
              <Link className="dropdown-item" to="/FreelanceOffeer">
                Offer
              </Link>
            </NavDropdown>
            {/* <NavDropdown title="Interviews" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to="/FreelanceSheduled" className="nav-link">
                  Scheduled
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <Link to="/PurchasePlan" className="nav-link">
                  Offer
                </Link>
              </NavDropdown.Item>
            </NavDropdown> */}

            {/* <Link to="FacebookAds" className="nav-link">
              Account Summary{" "}
            </Link> */}
            {/* <Nav.Link href="#">pages</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
