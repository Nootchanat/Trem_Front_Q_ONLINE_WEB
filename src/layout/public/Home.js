<<<<<<< HEAD
import React, { Fragment } from 'react';
import { faHospital,faCalendarDays,faStethoscope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel';
import Treatment from '../../image/Treatment.png'
import Info from '../../image/Info.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function Home() {
  return (
    
    <Fragment>
      <div className="w-full">
        <div class="container5">
        <div className="card d-flex justify-content-center">
        
          
            <div className="col-12 col-md-12 col-lg-6">
              <div className='row justify-content-center'>


                <div class="col-3">
                  <div className="card-body">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      class="fas fa-calendarDays  fa-2x"
                    />
                    <a href="/calendar">ปฏิทินการจอง</a>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card-body">
                    <FontAwesomeIcon
                      icon={faHospital}
                      class="fas fa-hospital fa-2x"
                    />

                    <a href={"/information"} >ข้อมูลทั่วไปโรงพยาบาล</a>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card-body">
                    <FontAwesomeIcon
                      icon={faStethoscope}
                      class="fas fa-stethoscope fa-2x"
                    />

                    <a href="/book-an-appointment">จองคิว</a>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card-body">
                    <FontAwesomeIcon
                      icon={faHospital}
                      class="fas fa-hospital fa-2x"
                    />

                    <a href="check-book-an-appointment">ประเมินความพึงพอใจ</a>
                  </div>
                </div>
              </div>
           
          </div>
        </div>
</div>
        <div class="container5 p-5 my-5 border">
          <h3>ข่าวสารประชาสัมพันธ์</h3>
          <div className="d-flex justify-content-center ">
            <div className="col-12 col-md-8 col-lg-10">
              <Carousel variant="dark">
                <Carousel.Item>
                  <img className="d-block w-100" src={Info} alt="First slide" />
                  <Carousel.Caption>
                    {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Treatment}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={Treatment} alt="Third slide" />
                </Carousel.Item>
              </Carousel>

              <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>
                    ประกาศรพ.สมเด็จฯ17 เรื่องนโยบายคุ้มครองข้อมูลส่วนบุคคล
                  </Card.Title>
                  <Card.Text>
                    ประกาศรพ.สมเด็จฯ17 เรื่องนโยบายคุ้มครองข้อมูลส่วนบุคคล
                    โรงพยาบาลสมเด็จพระสังฆราช องค์ที่ 17
                  </Card.Text>
                  <Button variant="primary">รายละเอียด</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
=======
import React, { Fragment } from "react";
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
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons";
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
import sl1 from "../../image/sl1.png"
import sl2 from "../../image/sl2.png"

import "../../style/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <div className="w-full">
        <div class="container5">
          <div className="card justify-content-center" style={{height:"195px"}}>
            <div className="row justify-content-xl-center">
              <div className="col" style={{marginTop:"45px"}}>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  class="fas fa-calendarDays"
                  style={{ color: "#4b86d2", marginTop: "5px" }}
                />
                <a href="/calendar">ปฏิทินการจอง</a>
              </div>
              <div class="col">
              <FontAwesomeIcon 
              icon={faHospital}
              class="fas fa-hospital" 
              style={{color: "#4b86d2", marginTop: "60px"}} />
                <a href={"/information"}>ข้อมูลทั่วไปโรงพยาบาล</a>
              </div>

              <div class="col">
              <FontAwesomeIcon 
              icon={faBook}
              class="fas fa-book-medical" 
              style={{color: "#4b86d2", marginTop: "60px"}} />
                <a href={"/showdepartmentAll"}>ข้อมูลแผนก</a>
              </div>

              <div class="col">
                <FontAwesomeIcon
                  icon={faStethoscope}
                  class="fas fa-stethoscope"
                  style={{color: "#4b86d2", marginTop: "70px"}}  />
                <a href="/book-an-appointment">จองคิว</a>
              </div>
              <div class="col">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  class="fas fa-hospital fa-xs"
                  style={{color: "#4b86d2", marginTop: "50px"}} 
                />
                <a href="check-book-an-appointment">ประเมินความพึงพอใจ</a>
              </div>
>>>>>>> beckhado
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      
        
          
        
      
=======
      <div class="container5 p-5 my-5 border">
        <div className="d-flex justify-content-center ">
          <div className="silder-home">
          <div className="col-12 col-md-8 col-lg-10">
            <Carousel variant="dark">
              <Carousel.Item>
                <img className="d-block w-100" src={sl1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sl2}
                  alt="Second slide"
                />
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
              ฉีดวัคซีนโควิด-19 Moderna Bivalent ตั้งแต่วันอังคารที่ 16 พฤษภาคม 2566
              </div>
            <div className="button-card">
              <Button variant="primary">
                <a href="https://www.facebook.com/Somdej17Hospital/photos/a.490137861043014/6357622994294442/?locale=th_TH" target="_blank">
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
            เด็กไทยวันนี้ สูงดีสมส่วน ด้วย 4 ข้อแนะนำ กรมอนามัยส่งเสริมให้คนไทยสุขภาพดี 
            </div>
            <div className="button-card">
              <Button variant="primary">
                <a href="https://www.facebook.com/anamaidoh?locale=th_TH" target="_blank">
                  <div className="text-link1">ข้อมูลเพิ่มเติม</div>
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

>>>>>>> beckhado
    </Fragment>
  );
}

export default Home;
