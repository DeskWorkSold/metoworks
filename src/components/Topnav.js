import React, { useState, Component, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../components/Navbar.css";
import { Image, NavItem } from "react-bootstrap";
import {
  BrowserRouter as Route,
  Router,
  Link,
  Switch,
  useLocation,
} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom/dist";
// import profilePicture from "../assets/profile-picture.png";
import profilePicture from "../assets/profilePicture.jpg";

export const Topnav = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userType, setUserType] = React.useState("");
  const [profileImage, setProfileImage] = useState("");
  const [isNavLink, setIsNavLink] = useState("About Me2Works");
  const [isHrNavLink, setIsHrNavLink] = useState("HRSolutions");
  console.log(userType, "eeeeeeeeeeeeeeeee");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();
  const [isToken, setIsToken] = useState("");

  //   const logout = async () => {
  //     await signOut(auth);
  //   };

  //   const auth = getAuth();
  //   const [isUser, setIsUser] = useState(null);

  //   const [colorChange, setColorchange] = useState(false);
  //   const changeNavbarColor = () => {
  //     if (window.scrollY >= 80) {
  //       setColorchange(true);
  //     } else {
  //       setColorchange(false);
  //     }
  //   };

  //   useEffect(() => {
  //     onAuthStateChanged(auth, () => {
  //       setIsUser(auth.currentUser);
  //     });
  //   }, []);

  //   window.addEventListener("scroll", changeNavbarColor);

  const navigate = useNavigate();

  useEffect(() => {
    intitialFunc();
    let profimg = localStorage.getItem("profileImg");
    setProfileImage(profimg);
  }, [location.state]);

  useEffect(() => {
    intitialFunc();
    let profimg = localStorage.getItem("profileImg");
    setProfileImage(profimg);
  }, []);

  const intitialFunc = async () => {
    const token = await localStorage.getItem("access-token");
    const userType = await localStorage.getItem("userType");
    setIsToken(token);
    setUserType(userType);
  };

  const logutFunc = () => {
    const token = localStorage.removeItem("access-token");
    const userType = localStorage.removeItem("userType");
    setIsToken(userType);
  };
  return (
    // <Router>
    <Navbar bg="light" id="botone" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image src={require("../assets/logo.png")} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto my-2" navbarScroll>
            {!isToken && (
              // <Nav.Link >
              <Link className="nav-link" to="/FindProfessions">
                Find Professionals
              </Link>
              // </Nav.Link>
            )}
            {!isToken && (
              // <Nav.Link href="#Opportunities">
              <Link className="nav-link" to="/Opportunities">
                Find Opportunities
              </Link>
              // </Nav.Link>
            )}

            <NavDropdown title={isNavLink} id="navbarScrollingDropdown">
              <Link
                className="dropdown-item"
                to="/AboutMe"
                onClick={() => setIsNavLink("About Me2Works")}
              >
                About Me2Works
              </Link>

              <Link
                className="dropdown-item"
                to="/HelpSupport"
                onClick={() => setIsNavLink("Help & Support")}
              >
                Help & Support
              </Link>

              <Link
                className="dropdown-item"
                to="/HowWork"
                onClick={() => setIsNavLink("How it works")}
              >
                How it works
              </Link>

              <Link
                className="dropdown-item"
                to="/OurStory"
                onClick={() => setIsNavLink("Our Story")}
              >
                Our Story
              </Link>

              <Link
                className="dropdown-item"
                to="/WhyMeWorks"
                onClick={() => setIsNavLink("Why Me2Works")}
              >
                Why Me2Works
              </Link>

              <Link
                className="dropdown-item"
                to="/MemberPlans"
                onClick={() => setIsNavLink("Membership Plans")}
              >
                Membership Plans
              </Link>

              <Link
                className="dropdown-item"
                to="/ExtendKnowledge"
                onClick={() => setIsNavLink("Extend Knowledge")}
              >
                Extend Knowledge
              </Link>
            </NavDropdown>
            <NavDropdown title={isHrNavLink} id="navbarScrollingDropdown">
              {/* <NavDropdown.Item> */}
              <Link
                role="button"
                className="dropdown-item"
                tabindex="0"
                data-rr-ui-dropdown-item
                to="/Agreement"
                onClick={() => setIsHrNavLink("Agreement")}
              >
                Agreement
              </Link>
              {/* </NavDropdown.Item> */}

              <Link
                className="dropdown-item"
                to="/HRsupport"
                onClick={() => setIsHrNavLink("HR Support")}
              >
                HR Support{" "}
              </Link>

              <Link
                className="dropdown-item"
                to="/Enterprice"
                onClick={() => setIsHrNavLink("Enterprise Solutions")}
              >
                Enterprise Solutions
              </Link>

              <Link
                to="/FreeContact"
                className="dropdown-item"
                onClick={() => setIsHrNavLink("FreeContact")}
              >
                Contact
              </Link>
            </NavDropdown>
            {!isToken && !isToken?.length > 0 ? (
              <>
                <Link to="/Login" className="nav-link">
                  <Button>Login</Button>
                </Link>

                <Link to="/Signup" className="nav-link">
                  <Button>Sign up</Button>
                </Link>
              </>
            ) : (
              <Nav.Link className="profileWidth">
                {auth && (
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <Image
                        src={profileImage ? profileImage : profilePicture}
                      />
                      {/* <AccountCircle /> */}
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <Link
                        to={
                          userType == "freeLancer"
                            ? "/FreelancerProfile"
                            : "/CompanyProfile"
                        }
                      >
                        <MenuItem>My Profile</MenuItem>
                      </Link>
                      <Link
                        to={isToken && `/Login`}
                        onClick={() => logutFunc()}
                      >
                        <MenuItem>SignOut</MenuItem>
                      </Link>
                    </Menu>
                  </div>
                )}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
};
