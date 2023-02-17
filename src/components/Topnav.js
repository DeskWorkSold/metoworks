import React, { useState, Component, useEffect, useRef,  } from "react";
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
import profilePicture from '../assets/profile-picture.png'

export const Topnav = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userType, setUserType] = React.useState("");
  const [profileImage, setProfileImage] = useState('')

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();
  const [isToken, setIsToken] = useState("");
  // console.log(isToken, "toooooooooooookkkkkkkkken");

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

  const navigate = useNavigate()

  useEffect(() => {
    intitialFunc();
    let profimg = localStorage.getItem('profileImg')
    setProfileImage(profimg)
  }, [location.state]);

  const intitialFunc = async () => {
    const token = await localStorage.getItem("access-token");
    const userType = await localStorage.getItem("userType");
    setIsToken(token);
    setUserType(userType);
  };

  const logutFunc = () => {
    const token = localStorage.removeItem("access-token");
    const userType = localStorage.removeItem("userType");
    setIsToken(token);
  };
  return (
    // <Router>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image src={require("../assets/logo.png")} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2" navbarScroll>
            {userType == "freeLancer" && (
              <Nav.Link>
                <Link to="/FindProfessions">Find Professionals</Link>
              </Nav.Link>
            )}
            <Nav.Link>
              <Link to="/Opportunities">Find Opportunities</Link>
            </Nav.Link>
            <NavDropdown title="About Me2Works" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to="/AboutMe">About Me2Works</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/HelpSupport">Help & Support</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/HowWork">How it works</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/OurStory">Our Story</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/WhyMeWorks">Why Me2Works</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/MemberPlans">Membership Plans</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/ExtendKnowledge">Extend Knowledge</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="HRSolutions" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to="/Agreement">Agreement</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/HRsupport">HR Support </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Enterprice">Enterprise Solutions</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/FreeContact">Contact</Link>
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
          {!isToken && !isToken?.length > 0 ? (
            <>
              <Nav.Link>
                <Button
                  className="text-black"
                  style={{ background: "none", border: "none" }}
                >
                  <Link to="/Login">Login</Link>
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button
                  className="text-white border-rounded"
                  style={{ background: "#39BEC1", border: "none" }}
                >
                  <Link to="/Signup">Sign up</Link>
                </Button>
              </Nav.Link>
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
                      style={{ width: "100%", objectFit: "cover", borderRadius: '100%' }}
                      src={profileImage ? profileImage : { uri: profilePicture }}
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
                    <Link to={userType == "freeLancer" ? '/FreelancerProfile' : '/CompanyProfile'}>
                      <MenuItem >My Profile</MenuItem>
                    </Link>
                    <Link
                      to={isToken && `/Login`}
                      href="/Signup"
                      onClick={() => logutFunc()}
                    >
                      <MenuItem>SignOut</MenuItem>
                    </Link>
                  </Menu>
                </div>
              )}
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
};