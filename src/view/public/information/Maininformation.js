import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../style/information.css";

function Maininformation() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [hospitalData, setHospitalData] = useState(null);
  //   const [address, setAddress] = useState([]);
  //   const [hospital_logo, setHospital_Logo] = useState("");
  //   const [hospital_name, setHospital_Name] = useState("");
  //   const [hospital_phone_number, setHospital_Phone_Number] = useState("");
  //   const [hospital_No, setHospital_No] = useState("");
  //   const [hospital_Moo, setHospital_Moo] = useState("");
  //   const [hospital_latitude, setHospital_Latitude] = useState("");
  //   const [hospital_logitude, setHospital_Logtitude] = useState("");
  //   const [hospital_subdistrict, setHospital_Subdistrict] = useState("");
  //   const [hospital_district, setHospital_District] = useState("");
  //   const [hospital_province, setHospital_Province] = useState("");
  //   const [hospital_zipcode, setHospital_Zipcode] = useState("");
  const { Id } = useParams();

  useEffect(() => {
    axios
      .get("https://json-six-lac.vercel.app/hospital/")
      .then((res) => {
        console.log(res.data);
        setHospitalData(res.data[0]);
        //   setId(res.data.id);
        //   setHospital_Logo(res.data.hospital_logo);
        //   setHospital_Name(res.data.hospital_name);
        //   setHospital_Phone_Number(res.data.hospital_phone_number);
        //   setHospital_No(res.data.hospital_No);
        //   setHospital_Moo(res.data.hospital_Moo);
        //   setHospital_Latitude(res.data.hospital_latitude);
        //   setHospital_Logtitude(res.data.hospital_logitude);
        //   setHospital_Subdistrict(res.data.hospital_subdistrict);
        //   setHospital_District(res.data.hospital_district);
        //   setHospital_Province(res.data.hospital_province);
        //   setHospital_Zipcode(res.data.hospital_zipcode);
        //   setAddress(res.data.address);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  return (
    <Fragment>
{/*         
    if (hospitalData)  {
      
        <div className="container-info">
          <div className="d-flex justify-content-center">
            <h2 className="title-content">ข้อมูลทั่วไปโรงพยาบาล</h2>
          </div>
          <form className="card2">
            <div className="card-body">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="col-6 px-1 mt-2">
                  <div className="form-group">
                    <img className="img-h" src={hospitalData.hospital_logo} />
                  </div>
                </div>
                <p></p>
                <div className="col-12 px-1 mt-2">
                  <div className="form-group">
                    <p>
                      <h5>
                        <b>{hospitalData.hospital_name}</b>
                      </h5>
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group">
                    <p>
                      <b>เลขที่ : </b>
                      {hospitalData.hospital_No}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group">
                    <p>
                      <b>หมู่ : </b> {hospitalData.hospital_Moo}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group">
                    <p>
                      <b>ลติจูด : </b>
                      {hospitalData.hospital_latitude}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group">
                    <p>
                      <b>ลองจิจูด : </b>
                      {hospitalData.hospital_logitude}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group">
                    <p>
                      <b>ตำบล : </b>
                      {hospitalData.hospital_subdistrict}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group">
                    <p>
                      <b>อำเภอ : </b>
                      {hospitalData.hospital_district}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group">
                    <p>
                      <b>จังหวัด : </b>
                      {hospitalData.hospital_province}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group">
                    <p>
                      <b>รหัสไปรษณีย์ : </b>
                      {hospitalData.hospital_zipcode}
                    </p>
                  </div>
                </div>
                <div className="col-12 px-1 mt-2">
                  <div className="form-group">
                    <p>
                      <b>เบอร์ติดต่อ : </b>
                      {hospitalData.hospital_phone_number}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2 ">
                  <div className="btn2 ">
                    {" "}
                    <Link to="/" className="btn btn-danger">
                      หน้าหลัก
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      
    }else{
        <div> loading Data </div>
    } */}
    <div>{hospitalData.hospital_name}</div>
  </Fragment>);
}
export default Maininformation;
