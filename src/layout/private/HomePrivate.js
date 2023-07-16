import React, { useEffect, useState } from "react";
import {
  faPerson,
  faCalendarDays,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "../../style/admin.css";


function HomePrivate() {
  const [counts, setCounts] = useState({});
  const [patients, setPatients] = useState({});
  const [department, setDepartment] = useState([]);
  const [department_id, setDepartment_id] = useState([]);
  const [data, setData] = useState([]);
  const [id, setId] = useState({});
  const [doctor_id, setdoctor_id] = useState([]);
  const [department_name, setDepartment_name] = useState([]);
  const [table, setTable] = useState([]);
  const [idCount, setIdCount] = useState(0);
  const [idCountsT, setIdCountT] = useState(0);
  const [idCountsThree, setIdCountThree] = useState(0);
  const [idCountsfour, setIdCountFour] = useState(0);
  const [idCountsfive, setIdCountFive] = useState(0);
  const [idCountssix, setIdCountSix] = useState(0);
  const [idCountsseven, setIdCountSeven] = useState(0);
  const [idCountsse, setIdCountE] = useState(0);
  const [idCountdd, setIdCountdd] = useState(0);
  const [role_id, setrole_id] = useState([]);
  const [date, setDate] = useState(new Date());
  const [role_idg, setrole_idg] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await axios.get(
          `https://quaint-culottes-dove.cyclic.app/apis/doctors`
        );
        const res2 = await axios.get(
          `https://quaint-culottes-dove.cyclic.app/apis/departments`
        );

        console.log(res1);
        console.log(res2);

        setId(res1.data);
        setCounts(res1.data);
        setData(res1.data);
        setdoctor_id(res1.data);
        setDepartment_id(res1.data);
        setTable(res1.data);

        setDepartment_name(res2.data);
        setDepartment(res2.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Count occurrences of each ID
    const count = data.reduce((acc, item) => {
      acc[item.department_id] = (acc[item.department_id] || 0) + 1;
      return acc;
    }, {});

    // Set the count of the specific ID you want to show
    setIdCount(count[1] || 0);
    setIdCountT(count[2] || 0);
    setIdCountThree(count[3] || 0);
    setIdCountFour(count[4] || 0);
    setIdCountFive(count[5] || 0);
    setIdCountSix(count[6] || 0);
    setIdCountSeven(count[7] || 0);
    setIdCountE(count[8] || 0);
  }, [data]);

  const count = counts.length;

  const countD = department.length;
  useEffect(() => {
    axios
      // เรียกใช้ API เพื่อดึงข้อมูลจากฐานข้อมูล
      .get("https://quaint-culottes-dove.cyclic.app/apis/patients")
      .then((res) => {
        console.log(res);
        setPatients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  const countP = patients.length;
  return (
    <div className="w-full">
    <div class="containera">
    <h2 className="title-content">ผู้ดูแลระบบ</h2>
      <div className="flex justify-content-center">
        <div className="row justify-content-xl-center">
          <div className="col">
  
      <div className="cons">
        <div className="content">
          <div class="cards">
            <div className="card">
              <div class="box">
                <div class="icon">
                  <FontAwesomeIcon icon={faUser} class="fa-user  fa-2x" />
                </div>
                <div className="count">{count}</div>

                <h5 className="T2">จำนวนแพทย์</h5>
              </div>
            </div>
            <div className="card">
              <div class="box">
                <div class="icon">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    class="fa-cal  fa-2x"
                  />
                </div>
                <div className="counts">{countD}</div>
                <h5 className="T2">จำนวนแผนก</h5>
              </div>
            </div>
            <div className="card">
              <div class="box">
                <div class="icon">
                  <FontAwesomeIcon icon={faPerson} class="fa-per  fa-2x" />
                </div>
                <div className="countp">{countP}</div>
                <h5 className="T1">จำนวนผู้ใช้</h5>
              </div>
            </div>
          </div>
          <div className="connd">
            <div className="overflow">
              <table className="table table-bordered">
                <thead>
                  <tr className="ta1">
                    <th scope="col" style={{ width: "1%" }}>
                      #
                    </th>
                    <th scope="col" style={{ width: "55%" }}>
                      แผนก
                    </th>
                    <th scope="col" style={{ width: "80%" }}>
                      จำนวนแพทย์ (คน)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>ทันตกรรม</td>
                    <td>{idCount}</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>หัวใจ</td>
                    <td>{idCountsT}</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>สูติ-นรีเวช</td>
                    <td>{idCountsThree}</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>กุมารเวช</td>
                    <td> {idCountsfour}</td>
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td>ฉุกเฉินและอุบัติเหตุ</td>
                    <td>{idCountssix} </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>จิตเวช</td>
                    <td>{idCountsseven}</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>ผู้ป่วยหนัก</td>
                    <td>{idCountsse}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className="conny">
              <div className="card"></div>
            </div> */}
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
      {/* <div>
      <Calendar showWeekNumbers onChange={onChange} value={date} />
      {console.log(date)}
     
    </div> */}
    </div>
  );
}
export default HomePrivate;
