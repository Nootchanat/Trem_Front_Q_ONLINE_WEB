import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../style/information.css";
import hospitalData from "../../../data/hospitalData.json";
import Carousel from "react-bootstrap/Carousel";

import InfoHospital from "../../../image/InfoHospital.jpg";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const navigate = useNavigate();
// const [id, setId] = useState("");
// const [hospitalData, setHospitalData] = useState(null);
// const [address, setAddress] = useState([]);
// const [hospital_logo, setHospital_Logo] = useState("");
// const [hospital_name, setHospital_Name] = useState("");
// const [hospital_phone_number, setHospital_Phone_Number] = useState("");
// const [hospital_no, setHospital_No] = useState("");
// const [hospital_moo, setHospital_Moo] = useState("");
// const [hospital_latitude, setHospital_Latitude] = useState("");
// const [hospital_logitude, setHospital_Logtitude] = useState("");
// const [hospital_subdistrict, setHospital_Subdistrict] = useState("");
// const [hospital_district, setHospital_District] = useState("");
// const [hospital_province, setHospital_Province] = useState("");
// const [hospital_zipcode, setHospital_Zipcode] = useState("");
// const { Id } = useParams();

// useEffect(() => {
//   axios
//     .get("https://json-six-lac.vercel.app/hospital/")
//     .then((res) => {
//       console.log(res.data);
//       setHospitalData(res.data[null]);
//       setId(res.data.id);
//       setHospital_Logo(res.data.hospital_logo);
//       setHospital_Name(res.data.hospital_name);
//       setHospital_Phone_Number(res.data.hospital_phone_number);
//       setHospital_No(res.data.hospital_no);
//       setHospital_Moo(res.data.hospital_moo);
//       setHospital_Latitude(res.data.hospital_latitude);
//       setHospital_Logtitude(res.data.hospital_logitude);
//       setHospital_Subdistrict(res.data.hospital_subdistrict);
//       setHospital_District(res.data.hospital_district);
//       setHospital_Province(res.data.hospital_province);
//       setHospital_Zipcode(res.data.hospital_zipcode);
//       setAddress(res.data.address);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);
function MainInformation() {
  return (
    <div className="w-full">
      <div className="col-12 col-md-8 col-lg-10 center">
        <div className="slider">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={InfoHospital}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <hr></hr>
      <div className="Text">
        <h4 className="title-content1">
          ประวัติความเป็นมาโรงพยาบาลสมเด็จพระสังฆราช องค์ที่ 17
        </h4>
        <h6 className="titlet">
          เมื่อปี พ.ศ. 2504 สมเด็จพระสังฆราช องค์ที่ 17
          มีสมณศักดิ์เป็นสมเด็จพระวันรัต ซึ่งชาวอำเภอสองพี่น้อง
          เรียกกันติดปากว่า “สมเด็จป๋า”
          ท่านดำริว่าจะสร้างสถานีอนามัยในบริเวณใกล้เคียงตลาดทุ่งคอก
          อำเภอสองพี่น้อง
          เพื่อให้เป็นสถานที่สงเคราะห์แก่ผู้เจ็บป่วยที่มาจากชนบทห่างไกลความเจริญ
          ดังนั้นบรรดาศิษย์และผู้เคารพนับถือได้ร่วมกันจัดตั้งมูลนิธิไว้ เป็นเงิน
          200,000 บาท ในปี พ.ศ. 2508 กระทรวงสาธารณสุขมอบหมายให้ นายแพทย์บุญ
          สุวรรณศร อธิบดีกรมอนามัยในสมัยนั้นไปดูสถานที่ที่จะก่อสร้างสถานีอนามัย
          หลังจากนั้นนายทองหยด จิตตะวีระ
          ได้ปรึกษาหารือกับชาวตลาดบางลี่เกี่ยวกับการก่อสร้างสถานีอนามัย
          ผลจากการหารือในครั้งนี้ชาวตลาดบางลี่เห็นควรว่าให้สร้างเป็นโรงพยาบาล
          ปรากฏว่าได้มีผู้ใจบุญ คือ จ.ส.อ.อั๋น สูติวงษ์ บริจาคที่ดินจำนวน 6 ไร่
          อยู่ระหว่างที่ทำการอำเภอสองพี่น้องกับตลาดบางลี่
          ต่อมาภายหลังคณะกรรมการเห็นว่าที่ดินจำนวน 6 ไร่
          ที่ได้รับบริจาคนั้นมีลักษณะด้านหน้ากว้างด้านหลังแคบดูไม่สวยงาม
          จึงได้ขอบริจาคจาก นางง้อ พลดี ซึ่งมีที่ดินติดกัน 1 ไร่ รวมเป็น 7 ไร่
          และได้ดำเนินการถมดินจนแล้วเสร็จ
          จึงได้กราบเรียนสมเด็จพระ-วันรัตให้มาดูสถานที่ที่จะก่อสร้าง
          และได้ทำการวางศิลาฤกษ์เมื่อวันที่ 1 ตุลาคม พ.ศ. 2510
          สมเด็จพระวันรัตได้ประทานค่าก่อสร้างเป็นเงิน 2,400,000 บาท
          การก่อสร้างได้ดำเนินการแล้วเสร็จในปี พ.ศ. 2514 ได้ตั้งชื่อโรงพยาบาลว่า
          อาคารสูติฯเดิม“โรงพยาบาลสมเด็จพระวันรัต”
          ได้มอบโรงพยาบาลให้อยู่ในความดูแลของกระทรวงสาธารณสุข ในราวเดือนกันยายน
          พ.ศ. 2515 ต่อมาทางคณะกรรมการได้จัดซื้อที่ดินเพิ่มเติม
          รวมเป็นพื้นที่ทั้งหมด 52 ไร่ 3 งาน 42 ตารางวา พ.ศ. 2517
          ได้มีการก่อสร้างอาคารอำนวยการรูปตัว L
          โดยใช้เงินบริจาคของสมเด็จพระสังฆราช -องค์ที่ 17
          สร้างเสร็จและสามารถดำเนินการให้บริการต่างๆ ได้ในปี พ.ศ. 2517
          ลักษณะอาคารเป็นคอนกรีต2 ชั้น โดยดำเนินกิจการทุกอย่างภายในอาคารนี้ เช่น
          งานบริหาร งานบริการ งานวิชาการ และงานด้านการรักษาพยาบาลผู้ป่วย
          ปัจจุบันอาคารรูปตัว L ถูกรื้อถอนออกเพื่อสร้างเป็นอาคารอำนวยการ 7
          ชั้นขึ้นทดแทน พ.ศ. 2518 ชาวอำเภอสองพี่น้องเห็นว่า
          ควรเปลี่ยนชื่อโรงพยาบาล เพื่อให้สมพระเกียรติสมเด็จพระสังฆราช องค์ที่
          17 จึงขออนุมัติเปลี่ยนชื่อโรงพยาบาลจาก “โรงพยาบาลสมเด็จพระวันรัต”
          มาเป็น “โรงพยาบาลสมเด็จพระสังฆราช องค์ที่ 17” อาคารอำนวยการเดิม พ.ศ.
          2524 อาคารตึกสงฆ์อาพาธได้ดำเนินการก่อสร้างเป็นอาคารคอนกรีต 2 ชั้น
          ชั้นล่างเป็นห้องพิเศษ ชั้นบนเป็นห้องผู้ป่วยสงฆ์และผู้ป่วยชายทั่วไป
          อาคารนี้ได้รับเงินบริจาคของเจ้าคณะอำเภอ พระครูพิศาลวรกิจ
          เจ้าอาวาสวัดดงตาล สามารถเปิดดำเนินการได้ในปี พ.ศ. 2526
          ปัจจุบันปิดดำเนินการเนื่องจากอาคารทรุด พ.ศ. 2526
          ดำเนินการก่อสร้างอาคารอำนวยการ โดยใช้เงินงบประมาณ
          เดิมอาคารนี้ใช้เป็นสถานที่ปฏิบัติงานของฝ่ายบริหารงานทั่วไป
          งานผู้ป่วยนอก ห้องจ่ายยาผู้ป่วยนอก ห้องทันตกรรม ห้องบัตร
          กลุ่มงานพยาธิวิทยา
          ปัจจุบันใช้เป็นที่ปฏิบัติงานของงานสุขภาพจิตและการให้คำปรึกษา
          งานนวดแผนไทย กลุ่มงานเวชกรรมสังคม และคลินิกศัลยกรรม พ.ศ. 2529
          ดำเนินการก่อสร้างอาคารเอกซเรย์ โดยใช้เงินงบประมาณ
          เป็นอาคารคอนกรีตชั้นเดียว
          เดิมใช้เป็นที่ปฏิบัติงานของกลุ่มงานเวชกรรมสังคม
          กลุ่มงานพัฒนาคุณภาพบริการและวิชาการ งานกายภาพบำบัด
          งานสุขศึกษาและประชาสัมพันธ์
          หลังจากอาคารอำนวยการและอุบัติเหตุเปิดใช้บริการแล้ว หน่วยงานต่างๆ
          ได้ย้ายออก ปัจจุบันมีหน่วยงานที่เปิดดำเนินการคือ กลุ่มงานรังสีวินิจฉัย
          กลุ่มงานเวชกรรมฟื้นฟู งานสุขศึกษาและประชาสัมพันธ์
          ศูนย์ส่งเสริมพัฒนาการเด็กวัยเตาะแตะ พ.ศ. 2530
          ก่อสร้างอาคารอุบัติเหตุและฉุกเฉิน
          โดยได้รับเงินบริจาคจากมูลนิธิหลวงพ่อสด วัดปากน้ำ ภาษีเจริญ
          ปัจจุบันใช้เป็นสถานที่ปฏิบัติงานของงานเวชปฏิบัติครอบครัว
          ก่อสร้างตึกผ่าตัดโดยใช้เงินงบประมาณ พ.ศ. 2537 ก่อสร้างอาคารศัลยกรรม
          120 เตียง เป็นอาคาร 4 ชั้น ก่อสร้างโดยเงินงบประมาณ และสร้างเสร็จในปี
          พ.ศ. 2539 ปัจจุบันใช้เป็นอาคารผู้ป่วยศัลยกรรมกระดูกชาย
          ศัลยกรรมชายและศัลยกรรมหญิง พ.ศ. 2538 ก่อสร้างอาคารสูติ-นรีเวชกรรม
          โดยเงินงบประมาณ เป็นอาคาร 4 ชั้น ขนาด 90 เตียง
          เปิดดำเนินการในเดือนสิงหาคม พ.ศ. 2540
          ปัจจุบันใช้เป็นอาคารผู้ป่วยห้องคลอด สูติกรรมและทารกแรกเกิด นรีเวชกรรม
          และกุมารเวชกรรม นอกจากนี้ยังได้รับงบประมาณก่อสร้างอาคารอาคารเภสัชกรรม
          และก่อสร้างแฟลตบ้านพักขนาด 32 ยูนิตอำนวยการปัจจุบัน พ.ศ. 2539
          ได้รับงบประมาณในการก่อสร้างอาคารอุบัติเหตุ7 ชั้น
          โดยเริ่มดำเนินการก่อสร้างในเดือนตุลาคม พ.ศ. 2539
          แล้วเสร็จในเดือนตุลาคม พ.ศ. 2541 ใช้งบประมาณในการก่อสร้างทั้งสิ้น 122
          ล้านบาท เปิดให้หน่วยงานต่างๆ เข้าปฏิบัติงานในเดือนกุมภาพันธ์ พ.ศ. 2542
          โดยใช้เป็นอาคารอำนวยการ และให้บริการตรวจรักษาผู้ป่วยนอก
        </h6>
        <hr></hr>
        <h4 className="title-content1">เวลาเปิดทำการ</h4>
         <div className="List">
                <div className="List-Item">
                  <FontAwesomeIcon icon={faClock} />
                  <span> : เปิดตลอดเวลา </span>
                </div>
              </div>
          <hr></hr>
      </div>
    </div>
  );
}
export default MainInformation;