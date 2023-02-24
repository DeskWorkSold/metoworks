import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/axios.api";
import Loader from "../../../assets/loader.gif";

export const FreelanceOffer = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({});
  console.log(searchData);

  useEffect(() => {
    checkAuth();
    setTimeout(() => {
      initialFun();
    }, 1000);
  }, []);

  const checkAuth = async () => {
    const token = await localStorage.getItem("access-token");
    if (!token) {
      navigate("/login");
    }
  };

  const initialFun = () => {
    axios
      .get(`api/v1/interview/freelancer?stage=offer&size=100&from=30`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setAcceptFunc = (event) => {
    axios
      .post(`api/v1/interview/offer/confirm?id=${event.id}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        console.log(data, "daaaaaaaaataaaaaaaaaaaa");
        // setIsProfileData(data)
        setTimeout(() => {
          initialFun();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
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
              <h2 className="text-3xl robot">Offer</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-2" />
      {searchData.length > 0 && searchData ? (
        <Container>
          <Col lg="12">
            {searchData.length > 0 &&
              searchData.map((event, key) => {
                return (
                  <>
                    <div className="p-3">
                      <div className="boxshad">
                        <Row>
                          <Col lg="7">
                            {/* <p
                                  className="py-2"
                                  style={{
                                    float: "right",
                                    color: "#7A7979",
                                    fontSize: "20px",
                                    display: "flex",
                                  }}
                                >
                                  <BsBookmark /> Bookmark
                                </p> */}

                            <h2
                              className="text-3xl"
                              style={{ color: "#39BEC1" }}
                            >
                              {event.recruiter.companyName}
                            </h2>
                            <p style={{ color: "#7A7979" }} className="text-lg">
                              {event.job.title}
                            </p>
                          </Col>
                          <Col lg="5" className="webkit-right">
                            <Button
                              className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                              style={{ background: "#6A489C", border: "none" }}
                            >
                              Revise
                            </Button>
                            <Button
                              className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                              style={{ background: "#39BEC1", border: "none" }}
                              onClick={() => setAcceptFunc(event)}
                            >
                              Accept
                            </Button>
                            <Button
                              //   onClick={handleShow}
                              className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                              style={{ background: "#C1272D", border: "none" }}
                            >
                              Reject
                            </Button>
                          </Col>
                        </Row>

                        <Row className="align-items-center block-for-res">
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Interview Date & Time
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.schedule}
                              </h2>
                            </div>
                          </Col>
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Interview Type
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.type}
                              </h2>
                            </div>
                          </Col>
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">Salary</h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.offer.salary}
                              </h2>
                            </div>
                          </Col>
                          <Col>
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Location
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.location}
                              </h2>
                            </div>
                          </Col>
                        </Row>
                        {/* <hr className="my-2" /> */}
                        <Row className="align-items-center">
                          <Col lg="3">
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">
                                Joining Date
                              </h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.offer.joiningDate}
                              </h2>
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="p3 py-3">
                              <h2 className="text-lg font-semibold">Notes</h2>
                              <h2
                                className="text-lg"
                                style={{ color: "#7A7979" }}
                              >
                                {event.notes}
                              </h2>
                            </div>
                          </Col>
                          <Col>
                            <div
                              className="py-2"
                              style={{
                                float: "right",
                                color: "#7A7979",
                                fontSize: "25px",
                                display: "flex",
                              }}
                            >
                              <Button
                                className="rounded-full px-3 py-3 w-48 mx-2"
                                style={{
                                  background: "none",
                                  border: "1px solid #39BEC1",
                                  color: "#39BEC1",
                                }}
                              >
                                {event.internalState}
                              </Button>
                            </div>
                            {/* <Button
                              className="text-white border-rounded px-3"
                              style={{ background: "#39BEC1", border: "none" }}
                            >
                              View Profile
                            </Button> */}
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </>
                );
              })}
          </Col>
        </Container>
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <img src={Loader} style={{ width: 180, height: 180 }} />{" "}
        </div>
      )}
    </Container>
  );
};
