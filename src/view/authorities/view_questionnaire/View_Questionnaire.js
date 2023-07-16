import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form } from 'formik';
import ShowData from "./ShowData";
import { getBookAppointment} from '../../../service/BookAppoinment.Service';
<<<<<<< HEAD
import { TextSelect } from '../../../components/TextSelect';
import  Swal from 'sweetalert2'
=======
import { getQuestionaire } from "../../../service/Questionnaire.Service";
import { TextSelect } from '../../../components/TextSelect';
import  Swal from 'sweetalert2'

>>>>>>> beckhado
function View_Questionnaire  ()  {

 
  const navigate = useNavigate();
  const [data, setData] = useState([]);
<<<<<<< HEAD
=======
  const [message, setMessage] = useState(["ระบบใช้งานได้สะดวกดี , ระบบใช้งานได้สะดวกดีมากๆ , ระบบใช้งานได้สะดวกพอใช้ , ระบบควรปรับปรุง , ระบบควรปรับปรุงอย่างยิ่ง"])

  const [textCount, setTextCount] = useState({
    "ระบบใช้งานได้สะดวกดี":1,
    "ระบบใช้งานได้สะดวกดีมากๆ":1,
    "ระบบใช้งานได้สะดวกพอใช้":1,
    "ระบบควรปรับปรุง":1,
    "ระบบควรปรับปรุงอย่างยิ่ง":1
  });

>>>>>>> beckhado
  const [pagin, setPagin] = useState({
    totalRow: 1,
    pageSize: 10,
    currentPage: 1,
    totalPage: 1,
  });
<<<<<<< HEAD
=======

  // const message ="ระบบใช้งานได้สะดวกดี , ระบบใช้งานได้สะดวกดีมากๆ , ระบบใช้งานได้สะดวกพอใช้ , ระบบควรปรับปรุง , ระบบควรปรับปรุงอย่างยิ่ง";

  // const textCount = {
  //   "ระบบใช้งานได้สะดวกดี":0,
  //   "ระบบใช้งานได้สะดวกดีมากๆ":0,
  //   "ระบบใช้งานได้สะดวกพอใช้":0,
  //   "ระบบควรปรับปรุง":0,
  //   "ระบบควรปรับปรุงอย่างยิ่ง":0
  // };

>>>>>>> beckhado
  useEffect(() => {
    fetchData(10, 1, localStorage.getItem('id'), '', '', '', '', '', '', '');
  
  }, []);


  

 

   
<<<<<<< HEAD
           // ฟังก์ชันดึงข้อมูลแบบแบ่งหน้า
 async function fetchData(pageSize, currentPage, userId, search, treatment, status, startDate, endDate, openStartDate, openEndDate) {
  let res = await getBookAppointment(pageSize, currentPage, userId, search, treatment, status, startDate, endDate, openStartDate, openEndDate);
=======
  // ฟังก์ชันดึงข้อมูลแบบแบ่งหน้า
 async function fetchData(pageSize, currentPage, userId, search, treatment, status) {
  let res = await getQuestionaire(pageSize, currentPage, userId, search, treatment, status);
>>>>>>> beckhado
  if (res) {
    if (res.statusCode === 200 && res.taskStatus) {
      setData(res.data);
      setPagin(res.pagin);
    }
  }
}
 
  return (
    <Fragment>
      <div className="w-full">
        <div className="d-flex justify-content-end">
          <nav aria-label="breadcrumb">
            
          </nav>
        </div>
        <div className="w-full mb-5">
<<<<<<< HEAD
          <h2 className="title-content">การประเมินการจองคิว</h2>
=======
          <h2 className="title-content">การประเมินความพึงพอใจในการจองคิว</h2>
>>>>>>> beckhado
        </div>
        <Formik
          enableReinitialize={true}
          // validationSchema={Schema}
          initialValues={{
            userId: localStorage.getItem('id'),
            search: '',
            treatment: '',
            status: '',
<<<<<<< HEAD
            startDate: '',
            endDate: '',
            // openStartDate: '',
            openEndDate: '',
          }}
          onSubmit={(value) => {
            console.log('submit :', value);
            fetchData(pagin.pageSize, 1, value.userId, value.search, value.treatment, value.status, value.startDate, value.endDate, value.openStartDate, value.openEndDate);
=======
            // startDate: '',
            // endDate: '',
            // openStartDate: '',
            // openEndDate: '',
          }}
          onSubmit={(value) => {
            console.log('submit :', value);
            fetchData(pagin.pageSize, 1, value.userId, value.search, value.treatment, value.status);
>>>>>>> beckhado
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <div className="row">
                <div className="col-6 px-1 mt-2">
<<<<<<< HEAD
                  <label>ค้นหา</label>
=======
                  {/* <label>ค้นหา</label>
>>>>>>> beckhado
                  <input
                    value={values.search}
                    type="text"
                    className="form-input"
                    onChange={(e) => {
                      setFieldValue('search', e.target.value);
                    }}
<<<<<<< HEAD
                  />
=======
                  /> */}
>>>>>>> beckhado
                </div>
              
                
               
              
              </div>
              <div className="d-flex justify-content-center mt-4">
<<<<<<< HEAD
                <button type="submit" className="btn btn-success mx-1">
=======
                {/* <button type="submit" className="btn btn-success mx-1">
>>>>>>> beckhado
                  <i className="fa-solid fa-magnifying-glass mx-1"></i>
                  ค้นหา
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary mx-1"
                  onClick={() => {
                    fetchData(10, 1, localStorage.getItem('id'), '', '', '', '', '', '', '');
                  }}
                >
                  <i className="fa-solid fa-rotate-left mx-1"></i>
                  ล้างค่า
<<<<<<< HEAD
                </button>
=======
                </button> */}
>>>>>>> beckhado
              </div>
              <div className="w-full mt-5">
                <ShowData
                  data={data}
                  pagin={pagin}
                 
                  
                  changePage={(page) => {
                    fetchData(pagin.pageSize, page, values.search, values.treatment);
                  }}
                  changePageSize={(pagesize) => {
                    fetchData(pagesize, 1, values.search, values.treatment);
                  }}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>

  );
};

<<<<<<< HEAD
export default View_Questionnaire ;
=======
export default View_Questionnaire;
>>>>>>> beckhado
