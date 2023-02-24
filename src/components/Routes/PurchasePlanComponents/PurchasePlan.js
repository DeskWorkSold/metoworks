import React from "react";
import { useEffect } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import {
  BsArrowBarDown,
  BsBookmark,
  BsCoin,
  BsPencilSquare,
  BsReceipt,
} from "react-icons/bs";
import {
  BrowserRouter as Route,
  Router,
  Link,
  Switch,
  useNavigate,
} from "react-router-dom";
export const PurchasePlan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = await localStorage.getItem("access-token");
    if (!token) {
      navigate("/login");
    }
  };
  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container>
        <Row className="align-items-center">
          <Col lg="12">
            <div
              style={{
                // display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className="des-flex"
            >
              <div style={{ display: "block" }}>
                <h2 className="text-3xl robot font-bold">My Membership Plan</h2>
                <p style={{ color: "red" }} className="text-xl">
                  Subscription is pre-paid. Purchase Tokens for post job ads and
                  view proﬁle
                </p>
              </div>
              <div
                style={{
                  float: "right",
                  display: "flex",
                  alignItems: "center",
                }}
                className="p-3 webkit"
              >
                <div
                  style={{
                    float: "right",
                    background: "white",
                    borderRadius: "20px",
                    border: "1px solid grey",
                    backgroundColor: "white",
                  }}
                  className="p-3 webkit"
                >
                  <h2 className="text-xl" style={{ color: "#6A489C" }}>
                    Available Coins
                  </h2>
                  <h2 className="text-xl inline-flex font-semibold">
                    <BsCoin style={{ color: "#FBB040" }} />
                    100
                  </h2>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-3" />
      <Container>
        <div className="shadow-lg rounded-lg">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>
                  <h2
                    className="text-lg font-bold fontpx py-3"
                    style={{ color: "rgb(57, 190, 193)", fontSize: "30px" }}
                  >
                    Membership Plan <br /> Package B
                  </h2>
                </th>
                <th>
                  <h2
                    className="text-lg font-bold fontpx py-3"
                    style={{ color: "rgb(57, 190, 193)", fontSize: "30px" }}
                  >
                    HK$6000/Annually
                  </h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h2
                    className="fontpx py-3"
                    style={{ color: "grey", fontSize: "20px" }}
                  >
                    Job Fee 6% Find Freelancers 100% <br />
                    Number of Token per Month <br />
                    xxx xxx xxxxx
                    {/* <span style={{ float: "right" }}>HK$6000/Annually</span> */}
                  </h2>
                </td>
                <td> </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h2
                    className="text-2xl font-semibold py-3"
                    style={{ color: "grey" }}
                  >
                    Expiry Date
                  </h2>
                </td>
                <td>
                  <h2
                    className="text-2xl font-semibold py-3"
                    style={{ color: "grey" }}
                  >
                    January 26th 2024
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h2
                    className="text-2xl font-semibold py-3"
                    style={{ color: "grey" }}
                  >
                    Purchase Date
                  </h2>
                </td>
                <td>
                  <h2
                    className="text-2xl font-semibold py-3"
                    style={{ color: "grey" }}
                  >
                    January 26th 2023
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h2
                    className="text-lg fontpx py-3"
                    style={{ color: "grey", fontSize: "20px" }}
                  >
                    <b>Notice: </b> Please Renew the Subscription before the{" "}
                    <br />
                    expiry date to continous in posting jobs.
                  </h2>
                </td>
                <td>
                  <Link to="/RenewPlan">
                    <Button
                      className="text-white border-rounded px-3 py-2"
                      style={{
                        background: "#39BEC1",
                        border: "none",
                      }}
                    >
                      RENEWAL PLAN
                    </Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </Container>
  );
};
