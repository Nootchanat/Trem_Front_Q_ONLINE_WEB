<<<<<<< HEAD
import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form } from 'formik';
import ShowDepartment from "./ShowDepartment";
import StatusBook from '../../../data/statusBook.json';
import { getBookAppointment,updateStatusBook,deleteData } from '../../../service/BookAppoinment.Service';
import { TextSelect } from '../../../components/TextSelect';
import  Swal from 'sweetalert2'
function ShowDepartmentAll  ()  {

  const [dataDepartment, setDataDepartment] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pagin, setPagin] = useState({
    totalRow: 1,
    pageSize: 10,
    currentPage: 1,
    totalPage: 1,
  });
  useEffect(() => {
    fetchData(10, 1, localStorage.getItem('id'), '', '', '', '', '', '', '');
    // axios
    //   .get("https://json-six-lac.vercel.app/queue/")
    //   .then((res) => {
    //     //console.log(res);
    //     setEmpData(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //fetchData(10, 1, '', '', '', '', '', '', '', '');
    // getTreatmentAll();
  }, []);


  

 // ฟังก์ชันดึงข้อมูลแบบแบ่งหน้า
 async function fetchData(pageSize, currentPage, userId, search, treatment, status, startDate, endDate, openStartDate, openEndDate) {
    let res = await getBookAppointment(pageSize, currentPage, userId, search, treatment, status, startDate, endDate, openStartDate, openEndDate);
    if (res) {
      if (res.statusCode === 200 && res.taskStatus) {
        setData(res.data);
        setPagin(res.pagin);
      }
    }
  }

   // ฟังก์ชันอัพเดทสถานะการใช้งาน
  function updateStatus(id, data) {
    Swal.fire({
      title: 'คุณต้องการอัพเดทสถานะรายการนี้ใช่หรือไม่ !',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก',
    }).then(async (result) => {
      if (result.isConfirmed) {
        let res = await updateStatusBook(id, data);
        if (res) {
          if (res.statusCode === 200 && res.taskStatus) {
            Swal.fire({
              icon: 'success',
              title: 'อัพเดทข้อมูลสำเร็จ',
              showConfirmButton: false,
              timer: 1500,
            });
            fetchData(10, 1, '', '', '');
          } else {
            Swal.fire({
              icon: 'error',
              title: 'อัพเดทข้อมูลไม่สำเร็จ',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      }
    });
  }
          
          
   // ฟังก์ชันลบ
   function deleteData(id) {
    Swal.fire({
      title: 'คุณต้องการลบรายการนี้ใช่หรือไม่ !',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก',
    }).then(async (result) => {
      if (result.isConfirmed) {
        let res = await deleteData(id);
        if (res) {
          if (res.statusCode === 200 && res.taskStatus) {
            Swal.fire({
              icon: 'success',
              title: 'ลบข้อมูลสำเร็จ',
              showConfirmButton: false,
              timer: 1500,
            });
            fetchData(10, 1, '', '', '');
          } else {
            Swal.fire({
              icon: 'error',
              title: 'ลบข้อมูลไม่สำเร็จ',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      }
    });
  }
  return (
    <Fragment>
      <div className="w-full">
        <div className="d-flex justify-content-end">
          <nav aria-label="breadcrumb">
            
          </nav>
        </div>
        <div className="w-full mb-5">
          <h2 className="title-content">แผนกในโรงพยาบาล</h2>
        </div>
        <Formik
          enableReinitialize={true}
          // validationSchema={Schema}
          initialValues={{
            userId: localStorage.getItem('id'),
            search: '',
            treatment: '',
            status: '',
            startDate: '',
            endDate: '',
            // openStartDate: '',
            openEndDate: '',
          }}
          onSubmit={(value) => {
            console.log('submit :', value);
            fetchData(pagin.pageSize, 1, value.userId, value.search, value.treatment, value.status, value.startDate, value.endDate, value.openStartDate, value.openEndDate);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              
              <div className="w-full mt-5">
                <ShowDepartment
                  data={data}
                  pagin={pagin}
                  updateStatus={updateStatusBook}
                  deleteData={deleteData}
                  changePage={(page) => {
                    fetchData(pagin.pageSize, page, values.search, values.department, values.status);
                  }}
                  changePageSize={(pagesize) => {
                    fetchData(pagesize, 1, values.search, values.department, values.status);
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

export default ShowDepartmentAll;
=======
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../../src/style/departmentAll.css";
import Card from "react-bootstrap/Card";
import axios from "axios";

function ShowDepartmentAll() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "https://amused-ant-umbrella.cyclic.app/apis/departments"
        );
        console.log(response.data); // Check the response data
        setDepartments(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDepartments();
  }, []);

  console.log(departments); // Check the value of departments

  return (
    <div className="w-full">
      <div className="w-full mb-4">
        <h4 className="title-content">แผนกในโรงพยาบาล</h4>
      </div>
      <div className="container5 p-3 my-3">
        <div className="row">
          {departments.length > 0 ? (
            departments.map((department) => (
              <Card key={department.id} style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={department.department_image}
                  style={{ width: "100%", height: "70%" }}
                />
                <h5 className="title-content">{department.department_name}</h5>
                <div className="button-card">
                  <Link
                    to={`/detaildental/${department.id}`}
                    className="btn btn-success mx-1"
                  >
                    <div className="text-link1">ข้อมูลแผนก</div>
                  </Link>
                </div>
              </Card>
            ))
          ) : (
            <div>Loading ...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowDepartmentAll;
>>>>>>> beckhado
