import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import LoginModal from "../../../components/Login/LoginModal";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // ตรวจสอบสถานะการล็อกอินเมื่อโหลดหน้า Profile
    const storedUserData = localStorage.getItem("userData");
    const isLoggedIn = storedUserData ? true : false;
    setIsLoggedIn(isLoggedIn);

    if (isLoggedIn) {
      // ถ้าล็อกอินแล้ว ดึงข้อมูลผู้ใช้จาก localStorage
      const userDataFromLocalStorage = JSON.parse(storedUserData);
      setUserData(userDataFromLocalStorage);
    }
  }, []);
  console.log(userData); // ดูข้อมูลผู้ใช้ใน Developer Console

  // โค้ดอื่นๆ ตามที่คุณได้เขียนมา

  return (
    <div className="w-full">
      <div className="d-flex justify-content-center">
        <h2 className="title-contentProfile">โปรไฟล์</h2>
      </div>
      
      {/* แสดงข้อมูลผู้ใช้ที่ได้รับมา */}
      <div className="card d-flex justify-content-center">
        <div
          className="containerProfile"
          style={{
            width: "600px",
            height: "630px",
            background: "#f9f9f9",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
         
            <div className="col-12">
              <div className="row">
                <h6
                  className="title-content1"
                  style={{ textAlign: "center", width: "100%" }}
                >
                  ข้อมูลทั่วไป
                </h6>

                <div className="col-12 px-1 mt-2">
                  <label className="label-content">เลขบัตรประชาชน :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                    sx={{ fontWeight: "bold" }}
                  >
                    {userData?.data.id_card}
                  </Typography>
                </div>

                <div className="col-6 px-1 mt-2">
                  <label className="label-content">ชื่อเต็ม :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.prefix_name} {userData?.data.first_name}{" "}
                    {userData?.data.last_name}
                  </Typography>
                </div>
                <div className="col-6 px-1 mt-2">
                  <label className="label-content">เพศ :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.gender}
                  </Typography>
                </div>
                <div className="col-4 px-1 mt-2">
                  <label className="label-content">วันเดือนปีเกิด :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.birthday}
                  </Typography>
                </div>
                <div className="col-4 px-1 mt-2">
                  <label className="label-content">ส่วนสูง :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.height}
                  </Typography>
                </div>
                <div className="col-4 px-1 mt-2">
                  <label className="label-content">น้ำหนัก :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.weight}
                  </Typography>
                </div>
                <div className="col-12 px-1 mt-2">
                  <label className="label-content">เบอร์โทร :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.phone_number}
                  </Typography>
                </div>

                <div className="col-12 px-1 mb-1 mt-3">
                  <h6
                    className="title-content1"
                    style={{ textAlign: "center", width: "100%" }}
                  >
                    ข้อมูลสุขภาพ
                  </h6>
                </div>
                <div className="col-6 px-1 mt-2">
                  <label className="label-content">โรคประจำตัว :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.congenital_disease}
                  </Typography>
                </div>
                <div className="col-6 px-1 mt-2">
                  <label className="label-content">ประวัติการแพ้ยา :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.allergy}
                  </Typography>
                </div>
                <div className="col-12 px-1 mb-1 mt-3">
                  <h6
                    className="title-content1"
                    style={{ textAlign: "center", width: "100%" }}
                  >
                    บุคคลที่ติดต่อได้
                  </h6>
                </div>
                <div className="col-6 px-1 mt-2">
                  <label className="label-content">ชื่อเต็ม :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.contact_first_name}{" "}
                    {userData?.data.contact_last_name}
                  </Typography>
                </div>
                <div className="col-6 px-1 mt-2">
                  <label className="label-content">เบอร์โทรผู้ติดต่อ :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.contact_phoneNumber}
                  </Typography>
                </div>
                <div className="col-6 px-1 mt-2">
                  <label className="label-content">ความสัมพันธ์ :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.contact_relation_id}
                  </Typography>
                </div>
                <div className="col-12 px-1 mb-1 mt-3">
                  <h6
                    className="title-content1"
                    style={{ textAlign: "center", width: "100%" }}
                  >
                    ข้อมูลที่อยู่
                  </h6>
                </div>
                <div className="col-12 px-1 mt-2">
                  <label className="label-content">ที่อยู่ :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.address}
                  </Typography>
                </div>
                <div className="col-6 px-1 mt-2">
                  <label className="label-content">ตำบล :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.subdistrict}
                  </Typography>
                </div>
                <div className="col-6 px-1 mt-2">
                  <label className="label-content">อำเภอ :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.district}
                  </Typography>
                </div>
                <div className="col-6 px-1 mt-2">
                  <label className="label-content">จังหวัด :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.province}
                  </Typography>
                </div>
                <div className="col-6 px-1 mt-2">
                  <label className="label-content">รหัสไปรษณีย์ :</label>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="text-content"
                  >
                    {userData?.data.postcode}
                  </Typography>
                </div>

                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn btn-warning mx-1">
                    แก้ไขโปรไฟล์
                  </button>
                </div>
              </div>
            </div>
        
        
        </div>
      </div>
    </div>
  );
};

export default Profile;
