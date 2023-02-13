import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import axios from "../../../utils/axios.api";

export const MainFreelanceSheduled = () => {

  const [isToken, setIsToken] = useState('')
  const [searchData, setSearchData] = useState({})

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    setIsToken(token)
    initialFun()
  },[])

  const initialFun = () => {
    const param = {
      from: 0,
      size: 5,
    };
    axios
      .get(`api/v1/interview/freelancer?stage=schedule&state=pending&size=${param.size}&from=${param.from}`)
      .then((res) => {
        // console.log(res, "Initial Data");
        let data = res.data.data;
        console.log(data, 'daaaaaaaaataaaaaaaaaaaa');
        // setIsProfileData(data)
        setSearchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectSchedule = (id) => {
    axios
    .post(`api/v1/interview/schedule/reject?id=${id}`)
    .then((res) => {
      // console.log(res, "Initial Data");
      let data = res.data;
      console.log(data, 'daaaaaaaaataaaaaaaaaaaa');
      // setIsProfileData(data)
      // setSearchData(data);
      if(data) {
      initialFun()
    }
    })
    .catch((err) => {
      console.log(err);
    });
};

// we have to send time with reschedule api 

const reSchedule = (id) => {
  axios
  .post(`api/v1/interview/schedule/freelancer/reschedule?id=${id}`)
  .then((res) => {
    // console.log(res, "Initial Data");
    let data = res.data;
    console.log(data, 'daaaaaaaaataaaaaaaaaaaa');
    // setIsProfileData(data)
    // setSearchData(data);
    if(data) {
    initialFun()
  }
  })
  .catch((err) => {
    console.log(err);
  });
};


const confirmSchedule = (id) => {
  axios
  .post(`api/v1/interview/schedule/confirm?id=${id}`)
  .then((res) => {
    // console.log(res, "Initial Data");
    let data = res.data;
    console.log(data, 'daaaaaaaaataaaaaaaaaaaa');
    // setIsProfileData(data)
    // setSearchData(data);
    if(data) {
    initialFun()
  }
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
              <h2 className="text-3xl robot">Scheduled</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="my-2" />
      <Container>
        {searchData.length > 0 && searchData.map((items, keys) => {
          return (
            <Row>
            <Col lg="12">
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
                      <h2 className="text-3xl" style={{ color: "#39BEC1" }}>
                        {items?.recruiter?.companyName}
                      </h2>
                      <p style={{ color: "#7A7979" }} className="text-lg">
                      {items?.job?.title}
                      </p>
                    </Col>
                    <Col lg="5" className="webkit-right">
                      <Button
                        className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                        style={{ background: "#6A489C", border: "none" }}
                        onClick={() => reSchedule(items.id)}
                      >
                        Reschedule
                      </Button>
                      <Button
                        className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                        style={{ background: "#39BEC1", border: "none" }}
                        onClick={() => confirmSchedule(items.id)}
                      >
                        Confirm
                      </Button>
                      <Button
                        //   onClick={handleShow}
                        className="text-white border-rounded px-3 py-3 w-32 mx-2 mt-2"
                        style={{ background: "#C1272D", border: "none" }}
                        onClick={() => rejectSchedule(items.id)}
                      >
                        Decline
                      </Button>
                    </Col>
                  </Row>
                  <Row className="align-items-center block-for-res">
                    <Col>
                      <div className="p3 py-3">
                        <h2 className="text-lg font-semibold">
                          Interview Date & Time
                        </h2>
                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                          {items?.schedule}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3 py-3">
                        <h2 className="text-lg font-semibold">Interview Type</h2>
                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                      {items?.type}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3 py-3">
                        <h2 className="text-lg font-semibold">Notes</h2>
                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                         {items?.notes}
                        </h2>
                      </div>
                    </Col>
                    <Col>
                      <div className="p3 py-3">
                        <h2 className="text-lg font-semibold">Location</h2>
                        <h2 className="text-lg" style={{ color: "#7A7979" }}>
                        {items?.location}
                        </h2>
                      </div>
                    </Col>
                  </Row>
                  <hr className="my-2" />
                  <Row className="align-items-center">
                    <Col lg="12">
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
                          {items?.internalState}
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
            </Col>
          </Row>
          )
        })}
     
      </Container>
    </Container>
  );
};
