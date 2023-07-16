import React, { useRef, useState, useEffect } from 'react';
import { TextSelect } from '../../../components/TextSelect';
import PageSize from '../../../data/pageSize.json';
import Pagination from 'react-js-pagination';
import DateTh from '../../../components/DateTh';
import StatusBook from '../../../data/statusBook.json';
// import { useReactToPrint } from 'react-to-print';
import MainPdf from '../history/pdf/MainPdf';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
=======


>>>>>>> beckhado
function ShowData({ data, pagin, changePage, changePageSize, updateStatusBook, deleteData }) {
  const [dataQ, setDataQ] = useState(null);
  const [empData, setEmpData] = useState(null);
  const componentRef = useRef();
  const navigate = useNavigate();
<<<<<<< HEAD
  const pageStyle = `
  @page {
    size: 4in 4in
  }`;

  useEffect(() => {
    axios
      .get("https://json-six-lac.vercel.app/patient")
=======
  
  useEffect(() => {
    axios
      .get("https://drab-tan-bluefish-tux.cyclic.app/apis/queue")
>>>>>>> beckhado
      .then((res) => {
        //console.log(res);
        setEmpData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (dataQ) {
    //   print();
    }
  }, [dataQ]);

//   const print = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: "Q_Online",
//     pageStyle: pageStyle,
//   });


<<<<<<< HEAD
const removeEmp = (id) => {
    if (window.confirm("คุณต้องการลบการจองคิวนี้ไหม ")) {
      axios
        .delete("https://json-six-lac.vercel.app/queue/" + id)
        .then((res) => {
          alert("ลบคิวสำเร็จ");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
=======
const removeEmp =(queue_id)=>{
  if(window.confirm("Do You Want To Delete This doctor?")){
    axios.delete("https://drab-tan-bluefish-tux.cyclic.app/apis/queue/"+ queue_id)
    .then((res)=>{
      alert("Remove successfully.")
      window.location.reload()
    })
  }
}
>>>>>>> beckhado
  return (
    <div className="w-full">
      <div className="d-flex justify-content-between mb-2">
        <div className="w-pagesize">
          <TextSelect
            id="pagesize"
            name="pagesize"
            options={PageSize}
            value={PageSize.filter((a) => a.id === pagin.pageSize)}
            onChange={(item) => {
              changePageSize(item.id);
            }}
            getOptionLabel={(z) => z.label}
            getOptionValue={(x) => x.id}
          />
        </div>
      </div>
      <div className="overflow-auto">
        <table className="table">
          <thead>
            <tr className="table-success">
              <th scope="col" style={{ width: '5%' }}>
              คิวที่
              </th>
<<<<<<< HEAD
              <th scope="col" style={{ width: '15%' }}>
=======
              <th scope="col" style={{ width: '20%' }}>
>>>>>>> beckhado
              ชื่อผู้ป่วย
              </th>
              <th scope="col" style={{ width: '15%' }}>
              เลขบัตรประชาชน
              </th>
              <th scope="col" style={{ width: '15%' }}>
<<<<<<< HEAD
              น้ำหนัก-ส่วนสูง
              </th>
              <th scope="col" style={{ width: '20%' }}>
=======
>>>>>>> beckhado
              อาการเบื้องต้น
              </th>
              <th scope="col" style={{ width: '10%' }}>
              แผนก
              </th>
              <th scope="col" style={{ width: '10%' }}>
<<<<<<< HEAD
              โรคประจำตัว
              </th>
              <th scope="col" style={{ width: '10%' }}>
              สถานะคิว
              </th>
              <th scope="col" style={{ width: '10%' }}>
              แก้ไข
              </th>
              <th scope="col" style={{ width: '10%' }}>
              ลบ
              </th>
=======
              วันที่จอง<br>
              </br>
              ป/ด/ว
              </th>
              <th scope="col" style={{ width: '10%' }}>
              เวลาที่จอง
              </th>
              <th scope="col" style={{ width: '5%' }}>
              แก้ไข
              </th>
              <th scope="col" style={{ width: '5%' }}>
              ลบ
              </th>
              <th scope="col" style={{ width: '15%' }}>
              เรียกคิว
              </th>
>>>>>>> beckhado
              
            </tr>
          </thead>
          <tbody>
              {empData &&
                empData.map((item) => {
                  return (
                    <tr key={item.id}>
<<<<<<< HEAD
                      <td>{item.id}</td>
                      <td>{item.first_name} {item.last_name}</td>
                      <td>{item.id_card}</td>
                      <td>{item.weight}-{item.height}</td>
                      <td>{item.symptom}</td>
                      <td>{item.department_name}</td>
                      <td>{item.congenital_disease}</td>
                      <td>{item.queue_status_id}</td>
=======
                      <td>{item.queue_id}</td>
                      <td>{item.first_name} {item.last_name}</td>
                      <td>{item.id_card}</td>
                      <td>{item.symptom}</td>
                      <td>{item.department_name}</td>
                      <td>{item.queue_date}</td>
                      <td>{item.queue_date}</td>

                      
>>>>>>> beckhado
                      
                      <td>
                        <button
                      type="button"
                      className="btn btn-warning text-white mx-1 mt-1"
                      onClick={() => {
                        navigate('/author/book-an-appointment', { state: item.id });
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    </td>
<<<<<<< HEAD
                    <td>
                     {/* ปุ่มลบข้อมูล */}
                     <button
                      type="button"
                      className="btn btn-danger text-white mx-1 mt-1"
                      onClick={() => {
                        deleteData(item.id);
                      }}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                      </td>
=======

                    <td>
                      <a
                          className="btn btn-danger"
                          style={{ float: "center" }}
                          onClick={() => {
                            removeEmp(item.queue_id);
                          }}>
                          <i className="fa-solid fa-trash-can"></i>
                        </a>
                    </td>
                      <td>
                      <a
                          className="btn btn-success"
                          style={{ float: "center" }}
                          onClick={() => {
                            removeEmp(item.queue_id);
                          }}>
                          <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </td>
>>>>>>> beckhado
                    </tr>
                  );
                })}
            </tbody>
          <tbody>
            {data.length === 0 ? (
              <tr>
                
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={item.id}>
                  <td>{(pagin.currentPage - 1) * pagin.pageSize + (index + 1)}</td>
                  <td>{item.code}</td>
                  <td>{item.fullname_doctor}</td>
                  <td>{item.treatment_type_name}</td>
                  <td>
                    <DateTh date={item.created_date} />
                  </td>
                  <td>
                    <DateTh date={item.open_date} />
                  </td>
                  <td>{item.number}</td>
                  <td>
                    <StatusBook status={item.status} />
                  </td>
                  <td>
                    <button type="button" className='btn btn-info' onClick={() => {
                      //print();
                      setDataQ(item);
                    }}
                    >

                      <i className="fa-solid fa-print text-white"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
        <div>จำนวน {pagin.totalRow} รายการ</div>
        <div>
          <Pagination
            activePage={pagin.currentPage}
            itemsCountPerPage={pagin.pageSize}
            totalItemsCount={pagin.totalRow}
            pageRangeDisplayed={pagin.totalPage}
            onChange={(page) => {
              changePage(page);
            }}
          />
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='hidden'>
          <div ref={componentRef}>
            <MainPdf dataQ={dataQ} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowData;