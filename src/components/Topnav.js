import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../components/Navbar.css";
import { Image } from "react-bootstrap";
import { BrowserRouter as Route, Router, Link, Switch } from "react-router-dom";
import { logo } from "../assets/logo.png";
export const Topnav = () => {
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
            <Nav.Link>
              <Link to="/FindProfessions">Find Professionals</Link>
            </Nav.Link>
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
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
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
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
};
