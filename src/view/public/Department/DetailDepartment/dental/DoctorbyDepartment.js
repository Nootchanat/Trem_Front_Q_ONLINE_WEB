import React, { useRef, useState, useEffect, Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../../../style/dental.css";
import { Row } from "react-bootstrap";

function DoctorbyDepartment() {
  const [doctors, setDoctors] = useState();
  const [department, setDepartment] = useState();
  const [department_name, setDepartment_Name] = useState([]);
  const [open_time, setOpen_Time] = useState([]);
  const [close_time, setClose_Time] = useState([]);
  const [max_queue_number, setMax_Queue_Number] = useState([]);
  const [department_floor, setDepartment_Floor] = useState([]);
  const [department_building, setDepartment_Building] = useState([]);
  const { DId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await axios.get(
          `https://fine-foal-jewelry.cyclic.app//apis/departments/${DId}`
        );
        const res2 = await axios.get(
          `https://fine-foal-jewelry.cyclic.app/apis/doctors/`
        );

        console.log(res1);
        console.log(res2);
        setDoctors(res2.data);
        setDepartment(res1.data);
        setDepartment_Name(res1.data.department_name);

        setOpen_Time(res1.data.open_time);
        setClose_Time(res1.data.close_time);
        setMax_Queue_Number(res1.data.max_queue_number);
        setDepartment_Floor(res1.data.floor);
        setDepartment_Building(res1.data.building);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [DId]);

  return (
    <div className="w-full">
      <div className=" departmentname">
        <h1 className="title-content">แผนก{department_name}</h1>
      </div>
      <div className="doctorindepartment">
        <div className="wrapper-page">
          <div className="centerdoctor">แพทย์ประจำศูนย์</div>
          <div className="doctor-in-depart-card-container">
            <div className="card-doctor"></div>
            <div className="depart-detail">
              <div className="depart-detail-title"> เวลาเปิดทำการ </div>
              <h3>
                {open_time}-{close_time}
              </h3>
              <div className="depart-detail-title">สถานที่ตั้ง</div>
              <h3>
                อาคาร {department_building} &nbsp; ชั้น {department_floor}{" "}
              </h3>
              <div className="depart-detail-title">จำนวนคิวที่รับ</div>
              <h3>{max_queue_number}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorbyDepartment;
