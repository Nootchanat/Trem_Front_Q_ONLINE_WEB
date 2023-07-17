import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import {
//   faHospital,
//   faCalendarDays,
//   faStethoscope,
//   faBook,
//   faPenToSquare,
// } from "@fortawesome/free-solid-svg-icons";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-bootstrap/Carousel";
import Treatment from "../../image/Treatment.png";
import Info from "../../image/Info.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import c1 from "../../image/c1.jpg";
import c2 from "../../image/c2.jpg";
import c3 from "../../image/c3.png";
import c4 from "../../image/c4.png";
import sl1 from "../../image/sl1.png";
import sl2 from "../../image/sl2.png";

import "../../style/Home.css";

function Home() {
  // เพิ่ม state สำหรับตรวจสอบสถานะการล็อกอิน
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // ฟังก์ชันสำหรับตรวจสอบล็อกอิน
  const checkLogin = () => {
    // เช่นในกรณีที่คุณมีตัวแปรใน localStorage หากมีค่าแสดงว่าผู้ใช้ล็อกอินแล้ว
    // ให้นำตัวแปรนี้มาใช้ตรวจสอบเพื่อกำหนดค่า isLoggedIn ให้เป็น true
    const storedUserData = localStorage.getItem("userData");
    const isLoggedIn = storedUserData ? true : false;
    setIsLoggedIn(isLoggedIn);
  };

  // ฟังก์ชันสำหรับล็อกเอาท์
  const handleLogout = () => {
    // เพื่อตัวอย่างในกรณีนี้เราจะลบข้อมูลใน localStorage
    // และกำหนดค่า isLoggedIn เป็น false
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
  };

  // เรียกใช้ฟังก์ชัน checkLogin เมื่อโหลดหน้า Home เพื่อตรวจสอบสถานะการล็อกอิน
  useEffect(() => {
    checkLogin();
  }, []);

  // สร้างฟังก์ชันสำหรับตรวจสอบสถานะการล็อกอินก่อนทำการจองคิว
  const handleBooking = () => {
    if (isLoggedIn) {
      // ทำการจองคิว...
      navigate("/book-an-appointment");
      console.log("Booking is allowed!");
    } else {
      // ถ้ายังไม่ได้ล็อกอิน ให้นำไปหน้าเข้าสู่ระบบ
      console.log("Please log in to book an appointment.");
      // ตัวอย่างเช่นนำไปยังหน้าเข้าสู่ระบบ
      navigate("/login");
    }
  };
  const handleinformation = () => {
    navigate("/information");
  };
  const handleDepartment = () => {
    navigate("/showdepartmentAll");
  };
  const handleQuestionnaire = () => {
    navigate("/questionnaire");
  };

 
  return (
    <Fragment>
      <div className="w-full">
        <div class="container5">
          <div
            className="card justify-content-center"
            style={{ height: "195px" }}
          >
            <div className="row justify-content-xl-center">
              <div className="col" style={{ marginTop: "45px" }}>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  class="fas fa-calendarDays"
                  style={{ color: "#4b86d2", marginTop: "5px" }}
                />
                <a href="/calendar">ปฏิทินการจอง</a>
              </div>
              <div className="col">
                <FontAwesomeIcon
                  onClick={handleinformation}
                  icon={faHospital}
                  class="fas fa-hospital"
                  style={{ color: "#4b86d2", marginTop: "60px" }}
                />
                <a
                  onClick={handleinformation}
                  style={{ color: "#4b86d2", cursor: "pointer" }}
                >
                  ข้อมูลทั่วไปของโรงพยาบาล
                </a>
              </div>

              <div className="col">
                <FontAwesomeIcon
                  onClick={handleDepartment}
                  icon={faBook}
                  class="fas fa-book-medical"
                  style={{ color: "#4b86d2", marginTop: "60px" }}
                />
                <a
                  onClick={handleDepartment}
                  style={{ color: "#4b86d2", cursor: "pointer" }}
                >
                  แผนก
                </a>
              </div>
              {isLoggedIn && (
                <div className="col">
                  <FontAwesomeIcon
                    icon={faStethoscope}
                    onClick={handleBooking}
                    class="fas fa-stethoscope"
                    style={{ color: "#4b86d2", marginTop: "70px" }}
                  />
                  <a
                    onClick={handleBooking}
                    style={{ color: "#4b86d2", cursor: "pointer" }}
                  >
                    จองคิว
                  </a>
                </div>
              )}
              {/* เมนูประเมินความพึงพอใจจะแสดงเมื่อผู้ใช้ล็อกอินเท่านั้น */}
              {isLoggedIn && (
                <div class="col">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    class="fas fa-hospital fa-xs"
                    style={{ color: "#4b86d2", marginTop: "50px" }}
                  />
                  <a
                    onClick={handleQuestionnaire}
                    style={{ color: "#4b86d2", cursor: "pointer" }}
                  >
                    ประเมินความพึงพอใจ
                  </a>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
      <div class="container5 p-5 my-5 border">
        <div className="d-flex justify-content-center ">
          <div className="silder-home">
            <div className="col-12 col-md-8 col-lg-10">
              <Carousel variant="dark">
                <Carousel.Item>
                  <img className="d-block w-100" src={sl1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={sl2} alt="Second slide" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="title-message">
          <h3>ข่าวสารประชาสัมพันธ์</h3>
        </div>
        <hr></hr>
        <div className="row">
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              src={c1}
              style={{ width: "95%", height: "70%" }}
            />
            <div className="Title-card">
              ขั้นตอนการรับบริการทันตกรรม รพ.สมเด็จพระสังฆราชองค์ที่ 17
            </div>
            <div className="button-card">
              <Button variant="primary">
                <a
                  href="https://www.facebook.com/Somdej17Hospital/posts/pfbid02Yj9xfxoYxk3NcnREUSAKqUJcmivAN33Q9NbffdZSCn3FCrCu7S2dL57RwhCCpWTRl?locale=th_TH"
                  target="_blank"
                >
                  <div className="text-link1">ข้อมูลเพิ่มเติม</div>
                </a>
              </Button>
            </div>
          </Card>
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              src={c2}
              style={{ width: "105%", height: "70%" }}
            />
            <div className="Title-card">
              ฉีดวัคซีนไข้หวัดใหญ่” ฟรี สปสช.ชวนประชาชน 7
              กลุ่มเสี่ยงสิทธิบัตรทอง
            </div>
            <div className="button-card">
              <Button variant="primary">
                <a href="https://fb.watch/lK14341mKT/" target="_blank">
                  <div className="text-link1">ข้อมูลเพิ่มเติม</div>
                </a>
              </Button>
            </div>
          </Card>
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              src={c3}
              style={{ width: "105%", height: "70%" }}
            />
            <div className="Title-card">
              ฉีดวัคซีนโควิด-19 Moderna Bivalent ตั้งแต่วันอังคารที่ 16 พฤษภาคม
              2566
            </div>
            <div className="button-card">
              <Button variant="primary">
                <a
                  href="https://www.facebook.com/Somdej17Hospital/photos/a.490137861043014/6357622994294442/?locale=th_TH"
                  target="_blank"
                >
                  <div className="text-link1">ข้อมูลเพิ่มเติม</div>
                </a>
              </Button>
            </div>
          </Card>
          <Card style={{ width: "21rem" }}>
            <Card.Img
              variant="top"
              src={c4}
              style={{ width: "105%", height: "70%" }}
            />
            <div className="Title-card">
              เด็กไทยวันนี้ สูงดีสมส่วน ด้วย 4 ข้อแนะนำ
              กรมอนามัยส่งเสริมให้คนไทยสุขภาพดี
            </div>
            <div className="button-card">
              <Button variant="primary">
                <a
                  href="https://www.facebook.com/anamaidoh?locale=th_TH"
                  target="_blank"
                >
                  <div className="text-link1">ข้อมูลเพิ่มเติม</div>
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
