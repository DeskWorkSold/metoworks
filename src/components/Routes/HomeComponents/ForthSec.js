import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// import "swiper/css/scrollbar";
export const ForthSec = () => {
  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container className="text-center">
        <h2 className="text-3xl" style={{ color: "#6A489C" }}>
          Our Clients
        </h2>
        <h2 className="text-4xl text-black robot">What Our Clients Says</h2>
        <Container>
          <Swiper
            // install Swiper modules
            modules={[A11y]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              // "@1.50": {
              //   slidesPerView: 4,
              //   spaceBetween: 50,
              // },
            }}
          >
            <SwiperSlide>
              <div className="p-3">
                <div className="test">
                  <div className="testmen">
                    <Image src={require("../../../assets/testmen.png")} />
                  </div>
                  <h3 className="font-semibold text-3xl text-black">
                    Freelancers
                  </h3>
                  <h3 className="font-semibold text-2xl text-white">
                    John Larson
                  </h3>
                  <p className="text-white text-lg px-2 p-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3">
                <div className="test">
                  <div className="testmen">
                    <Image src={require("../../../assets/testmen.png")} />
                  </div>
                  <h3 className="font-semibold text-3xl text-black">
                    Freelancers
                  </h3>
                  <h3 className="font-semibold text-2xl text-white">
                    John Larson
                  </h3>
                  <p className="text-white text-lg px-2 p-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3">
                <div className="test">
                  <div className="testmen">
                    <Image src={require("../../../assets/testmen.png")} />
                  </div>
                  <h3 className="font-semibold text-3xl text-black">
                    Freelancers
                  </h3>
                  <h3 className="font-semibold text-2xl text-white">
                    John Larson
                  </h3>
                  <p className="text-white text-lg px-2 p-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="p-3">
                <div className="test">
                  <div className="testmen">
                    <Image src={require("../../../assets/testmen.png")} />
                  </div>
                  <h3 className="font-semibold text-3xl text-black">
                    Freelancers
                  </h3>
                  <h3 className="font-semibold text-2xl text-white">
                    John Larson
                  </h3>
                  <p className="text-white text-lg px-2 p-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3">
                <div className="test">
                  <div className="testmen">
                    <Image src={require("../../../assets/testmen.png")} />
                  </div>
                  <h3 className="font-semibold text-3xl text-black">
                    Freelancers
                  </h3>
                  <h3 className="font-semibold text-2xl text-white">
                    John Larson
                  </h3>
                  <p className="text-white text-lg px-2 p-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <Row>
            <Col className="text-center">
              <div className="p-3">
                <div className="test">
                  <div className="testmen">
                    <Image src={require("../../../assets/testmen.png")} />
                  </div>
                  <h3 className="font-semibold text-3xl text-black">
                    Freelancers
                  </h3>
                  <h3 className="font-semibold text-2xl text-white">
                    John Larson
                  </h3>
                  <p className="text-white text-lg px-2 p-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="p-3">
                <div className="test">
                  <div className="testmen">
                    <Image src={require("../../../assets/testmen.png")} />
                  </div>
                  <h3 className="font-semibold text-3xl text-black">
                    Freelancers
                  </h3>
                  <h3 className="font-semibold text-2xl text-white">
                    John Larson
                  </h3>
                  <p className="text-white text-lg px-2 p-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="p-3">
                <div className="test">
                  <div className="testmen">
                    <Image src={require("../../../assets/testmen.png")} />
                  </div>
                  <h3 className="font-semibold text-3xl text-black">
                    Freelancers
                  </h3>
                  <h3 className="font-semibold text-2xl text-white">
                    John Larson
                  </h3>
                  <p className="text-white text-lg px-2 p-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </p>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </Container>
      <Container>
        <Row className="align-items-center">
          <Col lg="12">
            <div className="p-3 transform">
              <div
                style={{
                  background: "#FF8C13",
                  borderRadius: "30px",
                  border: "5px solid white",
                }}
                className="p-3 text-center"
              >
                <h2 className="text-4xl text-white py-3 robot">
                  Incredible Recruitment & Staffing Agency
                </h2>
                <p className="text-2xl text-white">
                  We have over 30 years experience oft Business porro qusquam
                  dol ipsum quia sit amet
                </p>
                <div className="pt-5 pb-3">
                  <Link to="Login">
                    <button
                      className="text-white px-5 p-2"
                      style={{
                        background: "none",
                        borderRadius: "10px",
                        border: "1px solid white",
                      }}
                    >
                      GET STARTED
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
