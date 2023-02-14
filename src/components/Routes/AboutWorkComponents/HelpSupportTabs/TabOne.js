import React from "react";

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
// import { TabOne } from "./HelpSupportTabs/TabOne";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const TabOne = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Container>
        <Row>
          <Col lg="4">
            <div
              style={{ border: "2px solid #7A7979", color: "#7A7979" }}
              className="p-3 nnn"
            >
              <h1 className="text-3xl">How it works</h1>
              <Tabs
                orientation="vertical"
                // variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab label="Payment " {...a11yProps(0)} />
                <Tab label="Managing Job" {...a11yProps(1)} />
                <Tab label="Account" {...a11yProps(2)} />
                <Tab label="Feedbacks" {...a11yProps(3)} />
                <Tab label="Hire Freelancer" {...a11yProps(4)} />
              </Tabs>
              {/* <NavDropdown
                title="Payment "
                id="navbarScrollingDropdown"
                className="text-3xl mmm"
              >
                <NavDropdown.Item>Pricing</NavDropdown.Item>
                <NavDropdown.Item>Payment methods</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Invoice</NavDropdown.Item>
                <NavDropdown.Item href="#action5">SafePay</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Payment Terms
                </NavDropdown.Item>
              
              </NavDropdown>

              <NavDropdown
                title="Managing Job "
                id="navbarScrollingDropdown"
                className="text-3xl mmm"
              >
                <NavDropdown.Item>Pricing</NavDropdown.Item>
                <NavDropdown.Item>Payment methods</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Invoice</NavDropdown.Item>
                <NavDropdown.Item href="#action5">SafePay</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Payment Terms
                </NavDropdown.Item>
                
              </NavDropdown>

              <NavDropdown
                title="Account"
                id="navbarScrollingDropdown"
                className="text-3xl mmm"
              >
                <NavDropdown.Item>Pricing</NavDropdown.Item>
                <NavDropdown.Item>Payment methods</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Invoice</NavDropdown.Item>
                <NavDropdown.Item href="#action5">SafePay</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Payment Terms
                </NavDropdown.Item>
                
              </NavDropdown>

              <NavDropdown
                title="Feedbacks"
                id="navbarScrollingDropdown"
                className="text-3xl mmm"
              >
                <NavDropdown.Item>Pricing</NavDropdown.Item>
                <NavDropdown.Item>Payment methods</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Invoice</NavDropdown.Item>
                <NavDropdown.Item href="#action5">SafePay</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Payment Terms
                </NavDropdown.Item>
              
              </NavDropdown>

              <NavDropdown
                title="Hire Freelancer"
                id="navbarScrollingDropdown"
                className="text-3xl mmm"
              >
                <NavDropdown.Item>Pricing</NavDropdown.Item>
                <NavDropdown.Item>Payment methods</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Invoice</NavDropdown.Item>
                <NavDropdown.Item href="#action5">SafePay</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Payment Terms
                </NavDropdown.Item>
                
              </NavDropdown> */}
            </div>
          </Col>
          <Col lg="8">
            <TabPanel value={value} index={0}>
              <h2 className="text-3xl text-black ">Pricing</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
              <br />
              <h2 className="text-3xl text-black ">Payment Methods</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
              <br />
              <h2 className="text-3xl text-black ">Invoice</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
              <br />
              <h2 className="text-3xl text-black ">SafePay</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h2 className="text-3xl text-black ">Pricing</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
              <br />
              <h2 className="text-3xl text-black ">Payment Methods</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <h2 className="text-3xl text-black ">Pricing</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
              <br />
              <h2 className="text-3xl text-black ">Payment Methods</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <h2 className="text-3xl text-black ">Pricing</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
              <br />
              <h2 className="text-3xl text-black ">Payment Methods</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <h2 className="text-3xl text-black ">Pricing</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
              <br />
              <h2 className="text-3xl text-black ">Payment Methods</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <h2 className="text-3xl text-black ">Pricing</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
              <br />
              <h2 className="text-3xl text-black ">Payment Methods</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <h2 className="text-3xl text-black ">Pricing</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
              <br />
              <h2 className="text-3xl text-black ">Payment Methods</h2>
              <p>
                A simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when avn unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <br />
            </TabPanel>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center divReverse">
          <Col lg="4" className="p-5 pl-5 webkit">
            <h1 className="text-3xl robot" style={{ color: "#6A489C" }}>
              Still Need Help?
            </h1>
            <p className="text-2xl" style={{ color: "#7A7979" }}>
              We’re here for help
            </p>
            <Link to="/FreeContact">
              <Button className="text-white border-rounded px-5 mt-4">
                Contact support
              </Button>
            </Link>
          </Col>
          <Col lg="4"></Col>
          <Col lg="4" className="webkit">
            <div>
              <Image src={require("../../../../assets/helpsupport.png")} />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
