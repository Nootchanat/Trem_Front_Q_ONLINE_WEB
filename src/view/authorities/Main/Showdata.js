import React, { useRef, useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
// import { useReactToPrint } from 'react-to-print';
import MainPdf from '../history/pdf/MainPdf';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Spinner from "react-bootstrap/Spinner";


function ShowData({ data, pagin, changePage, changePageSize, updateStatusBook, deleteData }) {
  const [dataQ, setDataQ] = useState([]);
  const [empData, setEmpData] = useState([]);
  const componentRef = useRef();
  const navigate = useNavigate();
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [pageSize, setPageSize] = useState(10); // Default page size is 5

  
  const getdataQ = async () => {
    const response = await axios.get("http://localhost:5000/apis/queue");
   setDataQ(response.data);
  };

  useEffect(() => {
    getdataQ();
  }, []);
  const handlePageSizeChange = (event) => {
    const newPageSize = parseInt(event.target.value);
    setPageSize(newPageSize);
    setPage(1); 
  };

  useEffect(() => {
    const pagedatacount = Math.ceil(dataQ.length / 5);
    setPageCount(pagedatacount);

    if (page) {
      const LIMIT = pageSize;

      const skip = LIMIT * (page - 1);
      const dataskip = dataQ.slice(skip, skip + LIMIT);
      setPageData(dataskip);
    }
  }, [dataQ, page, pageSize]);
 


const removeEmp =(queue_id)=>{
  if(window.confirm("คุณต้องการลบคิวนี้หรือไม่?")){
    axios.delete("https://shy-jade-clownfish.cyclic.app/apis/queue/"+ queue_id)
    .then((res)=>{
      alert("Remove successfully.")
      window.location.reload()
    })
  }
}
  return (
    <div className="w-full">
      <div className="d-flex justify-content-between mb-2">
        <div className="w-pagesize">
        <select
            class="form-select"
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
      <div className="overflow-auto">
        <table className="table">
          <thead>
            <tr className="table-success">
              <th scope="col" style={{ width: '5%' }}>
              คิวที่
              </th>
              <th scope="col" style={{ width: '20%' }}>
              ชื่อ-สกุล
              </th>
              <th scope="col" style={{ width: '15%' }}>
              อาการเบื้องต้น
              </th>
              <th scope="col" style={{ width: '10%' }}>
              แผนก
              </th>
              <th scope="col" style={{ width: '10%' }}>
              วันที่จอง<br>
              </br>
              ป/ด/ว
              </th>
              <th scope="col" style={{ width: '15%' }}>
              เวลาที่จอง
              </th>
              <th scope="col" style={{ width: '10%' }}>
              สถานะคิว
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
              
            </tr>
          </thead>
          <tbody>
          {pageData.length > 0 ? (
              pageData.map((item, index) => {
                return (
                  <tr key={item.queue_id}>
                    <td>{(page - 1) * 10 + index + 1}</td>
                    
                    <td>{item.prefix_name} {item.first_name} {item.last_name}</td>
                    <td>{item.symptom}</td>
                      <td>{item.department_name}</td>
                      <td>{item.queue_date}</td>
                      <td>{item.create_at}</td>
                      <td>{item.queue_status_name}</td>
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
                  </tr>
                );
              })
            ) : (
              <div className="d-flex justify-content-center mt-4">
                Loading... <Spinner animation="border" variant="danger" />
              </div>
            )}
         
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
      <div>จำนวน {dataQ.length} รายการ</div>
        <div>
          <div className="Pagination">
          <Pagination
           
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={dataQ.length}
            pageRangeDisplayed={10}
            onChange={setPage}
            
          />
          </div>
        </div>
        </div>
      {/* <div className='d-flex justify-content-center'>
        <div className='hidden'>
          <div ref={componentRef}>
            <MainPdf dataQ={dataQ} />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ShowData;
