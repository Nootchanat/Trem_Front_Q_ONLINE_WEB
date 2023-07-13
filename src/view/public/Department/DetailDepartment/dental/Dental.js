import React, { useRef, useState, useEffect, Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../../../style/dental.css";
import { NavItem, Row, Card } from "react-bootstrap";

function Dental() {
  const [doctors, setDoctors] = useState([]);
  const [id_card, setId_Card] = useState([]);
  const [prefix_name, setPrefix_Name] = useState([]);
  const [doctor_first_name, setDoctor_Frist_Name] = useState([]);
  const [doctor_last_name, setDoctor_Last_Name] = useState([]);
  const [doctor_image, setDoctor_Image] = useState([]);
  const [doctor_status, setDoctor_Status] = useState([]);
  const [doctor_phonenumber, setDoctor_Phonenumber] = useState([]);
  const [department_name, setDepartment_Name] = useState([]);
  const [open_time, setOpen_Time] = useState([]);
  const [close_time, setClose_Time] = useState([]);
  const [floor, setFloor] = useState([]);
  const [building, SetBuilding] = useState([]);
  const [max_queue_number,SetMax_Queue_Number ] = useState([]);
  const { DId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await axios.get(
          `https://quaint-culottes-dove.cyclic.app/apis/doctors`
        );
        const res2 = await axios.get(
          `https://quaint-culottes-dove.cyclic.app/apis/departments/${DId}`
        );

        console.log(res1);
        console.log(res2);
        setDoctors(res1.data)
        setPrefix_Name(res1.data.prefix_name)
        setDoctor_Frist_Name(res1.data.doctor_first_name);
        setDoctor_Last_Name(res1.data.doctor_last_name);
        setDoctor_Image(res1.data.doctor_image);
        setDoctor_Status(res1.data.doctor_status);
        setDoctor_Phonenumber(res1.data.doctor_phonenumber);
    
        setDepartment_Name(res2.data.department_name);
        setOpen_Time(res2.data.open_time)
        setClose_Time(res2.data.close_time);
        SetMax_Queue_Number(res2.data.max_queue_number)
        setFloor(res2.data.floor);
        SetBuilding(res2.data.building);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [DId]);

  const filteredDoctors = doctors.filter(
    (doctor) => doctor.department_id  === parseInt(DId)
  );

  return (
    <div className="w-full">
      <div className=" departmentname">
        <h1 className="title-content">แผนก{department_name}</h1>
      </div>
      <div className="doctorindepartment">
      {filteredDoctors.map((doctor) => (
          doctor.doctor_status === "รับบริการ" ? (
            <Card key={doctor.id} className="custom-card">
              <Card.Body className="custom-card-body">
              <Card.Img src={doctor.doctor_image} alt="Doctor" className="custom-card-img" />
                <Card.Title className="custom-card-title">{doctor.prefix_name} {doctor.doctor_first_name} {doctor.doctor_last_name}</Card.Title>
                <Card.Text className="custom-card-text">Phone: {doctor.doctor_phonenumber}</Card.Text>
              </Card.Body>
            </Card>
          ) : null
        ))}
      </div>
      <div className="departmentdetail">
        
      </div>
    </div>
  );
}

export default Dental;
