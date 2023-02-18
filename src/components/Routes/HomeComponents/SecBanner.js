import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// import "swiper/css/scrollbar";
const token = localStorage.getItem("access-token");
// console.log('token', token);
export const SecBanner = () => {
  return (
    <Container fluid style={{ background: "#F7F7F7" }}>
      <Container className="py-5">
        <div className="text-center">
          <h2 className="text-4xl robot">Leading Recruiters</h2>
        </div>

        <Swiper
          id="mm1"
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          navigation
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
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="p-4 text-center">
              <Image src={require("../../../assets/Green.png")} />
              <h3 className="text-2xl">Green</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 text-center">
              <Image src={require("../../../assets/Maximum.png")} />
              <h3 className="text-2xl">Maximum</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 text-center">
              <Image src={require("../../../assets/AAE.png")} />
              <h3 className="text-2xl">AAE</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="p-4 text-center">
              <Image src={require("../../../assets/SapParagon.png")} />
              <h3 className="text-2xl">Sap Paragon</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 text-center">
              <Image src={require("../../../assets/ChatPk.png")} />
              <h3 className="text-2xl">Chat.pk</h3>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <Row>
          <Col>
            <div className="p-4 text-center">
              <Image src={require("../../../assets/Green.png")} />
              <h3 className="text-2xl font-bold">Green</h3>
            </div>
          </Col>

          <Col>
            <div className="p-4 text-center">
              <Image src={require("../../../assets/Maximum.png")} />
              <h3 className="text-2xl font-bold">Maximum</h3>
            </div>
          </Col>

          <Col>
            <div className="p-4 text-center">
              <Image src={require("../../../assets/AAE.png")} />
              <h3 className="text-2xl font-bold">AAE</h3>
            </div>
          </Col>

          <Col>
            <div className="p-4 text-center">
              <Image src={require("../../../assets/SapParagon.png")} />
              <h3 className="text-2xl font-bold">Sap Paragon</h3>
            </div>
          </Col>

          <Col>
            <div className="p-4 text-center">
              <Image src={require("../../../assets/ChatPk.png")} />
              <h3 className="text-2xl font-bold">Chat.pk</h3>
            </div>
          </Col>
        </Row> */}
      </Container>

      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="webkit">
            <div>
              <Image src={require("../../../assets/sec-banner.png")} />
            </div>
          </Col>
          <Col lg="6" className="p-5 pl-5">
            <h1 className="text-4xl robot">Choose any Employers!</h1>
            <p className="text-lg poppins" style={{ color: "#7A7979" }}>
              More specifically, an employer is an organization, institution,
              government entity, agency, company, professional services firm,
              nonprofit association,or puts to work individuals who may be
              called employees or staff members.
            </p>
            <p className="text-lg font-semibold">
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{ color: "#39BEC1" }}
              />{" "}
              Communication
            </p>
            <p className="text-lg font-semibold">
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{ color: "#39BEC1" }}
              />{" "}
              Professional
            </p>
            <p className="text-lg font-semibold">
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{ color: "#39BEC1" }}
              />{" "}
              Hardworking
            </p>
            <p className="text-lg font-semibold">
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{ color: "#39BEC1" }}
              />{" "}
              Work-Life balance
            </p>
            <Link to={token ? 'CompanyProfile' : 'Login'}>
              <Button className="text-white border-rounded px-3">
                Post a Job
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center divReverse">
          <Col lg="6" className="p-5 pl-5">
            <h1 className="text-4xl robot">Choose any Freelancers!</h1>
            <p className="text-lg" style={{ color: "#7A7979" }}>
              More specifically, an employer is an organization, institution,
              government entity, agency, company, professional services firm,
              nonprofit association,or puts to work individuals who may be
              called employees or staff members.
            </p>
            <p className="text-lg font-semibold">
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{ color: "#39BEC1" }}
              />{" "}
              Communication
            </p>
            <p className="text-lg font-semibold">
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{ color: "#39BEC1" }}
              />{" "}
              Professional
            </p>
            <p className="text-lg font-semibold">
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{ color: "#39BEC1" }}
              />{" "}
              Hardworking
            </p>
            <p className="text-lg font-semibold">
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{ color: "#39BEC1" }}
              />{" "}
              Work-Life balance
            </p>
            <Link to={token ? 'FreelancerFindWork' : 'Login'}>
              <Button className="text-white border-rounded px-3">
                FIND A JOB
              </Button>
            </Link>
          </Col>
          <Col lg="6" className="webkit">
            <div>
              <Image src={require("../../../assets/sec-banner-two.png")} />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};