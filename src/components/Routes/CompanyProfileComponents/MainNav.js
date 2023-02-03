import Button from "react-bootstrap/Button";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Route, Router, Link, Switch } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../CompanyProfileComponents/BotNav.css";

export const MainNav = () => {
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
            <Link to="/CompanyProfile" className="nav-link">
              Company Profile
            </Link>
            <Link to="/PublishedJob" className="nav-link">
              Published jobs
            </Link>
            <Link to="/DraftJob" className="nav-link">
              Draft Jobs{" "}
            </Link>
            <Link to="/Interview" className="nav-link">
              Interviews
            </Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
            <Link to="/Professional" className="nav-link">
              Find Professionals{" "}
            </Link>
            <Link to="/PurchasePlan" className="nav-link">
              Purchased Plan{" "}
            </Link>
            <Link to="FacebookAds" className="nav-link">
              Account Summary{" "}
            </Link>
            {/* <Nav.Link href="#">pages</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
