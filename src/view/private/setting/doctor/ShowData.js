<<<<<<< HEAD
import React, {useState,useEffect} from 'react';
=======
import React, {useState,useEffect,} from 'react';
>>>>>>> beckhado
import { TextSelect } from '../../../../components/TextSelect';
import PageSize from '../../../../data/pageSize.json';
import Pagination from 'react-js-pagination';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ShowData({ data, pagin, updateStatus, deleteData, changePage, changePageSize }) {
  const [dataQ, setDataQ] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios
<<<<<<< HEAD
      .get("https://json-six-lac.vercel.app/doctor")
=======
      .get("https://quaint-culottes-dove.cyclic.app/apis/doctors/")
>>>>>>> beckhado
      .then((res) => {
        //console.log(res);
        setDataQ(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (dataQ) {
    //   print();
    }
  }, [dataQ]);
<<<<<<< HEAD
=======
  const loadEdit =(id) =>{
    navigate("/admin/doctor/form/"+id)
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
        <div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
<<<<<<< HEAD
              navigate('/admin/doctor/form');
=======
              navigate('/admin/doctor/create/form/');
>>>>>>> beckhado
            }}
          >
            <i className="fa-solid fa-plus mx-1"></i>
            เพิ่ม
          </button>
        </div>
      </div>
      <div className="overflow-auto">
        <table className="table">
          <thead>
            <tr className="table-success">
              <th scope="col"  style={{ width: '5%' }}>
                ลำดับ
              </th>
              <th scope="col"  style={{ width: '10%' }}>
<<<<<<< HEAD
                เลขบัตรประชาชน
=======
คำนำหน้า
>>>>>>> beckhado
              </th>
              <th scope="col" style={{ width: '10%' }}>
                ชื่อ
              </th>
              <th scope="col" style={{ width: '10%' }}>
                นามสกุล
              </th>
              <th scope="col" style={{ width: '15%' }}>
                รูป
              </th>
              <th scope="col" style={{ width: '10%' }}>
                สถานะการใช้งาน
              </th>
              <th scope="col" style={{ width: '5%' }}>
                เบอร์โทร
              </th>
              <th scope="col" style={{ width: '10%' }}>
              แผนก
              </th>
              <th scope="col justify-content-center" style={{ width: '15%' }}>
                จัดการ
              </th>
            </tr>
          </thead>
          <tbody>
            {dataQ.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className="text-center text-danger">-- ไม่พบข้อมูล --</div>
                </td>
              </tr>
            ) : (
              dataQ.map((item, index) => (
<<<<<<< HEAD
                <tr key={item.id}>
                  <td>{(pagin.currentPage - 1) * pagin.pageSize + (index + 1)}</td>
                  <td>{item.id_card}</td>
=======
                <tr key={item.doctor_id}>
                  <td>{(pagin.currentPage - 1) * pagin.pageSize + (index + 1)}</td>
                  <td>{item.prefix_name}</td>
>>>>>>> beckhado
                  <td>{item.doctor_first_name}</td>
                  <td>{item.doctor_last_name}</td>
                  <td><img className="img-hpt" src={item.doctor_image}/></td>
                  <td>{item.doctor_status}</td>
                  <td>{item.doctor_phonenumber}</td>
                  <td>{item.department_name}</td>
                  <td>
                    {/* ปุ่มแก้ไข */}
                    <button
                      type="button"
                      className="btn btn-warning text-white mx-1 mt-1"
                      onClick={() => {
<<<<<<< HEAD
                        navigate('/admin/doctor/form', { state: item.id });
=======
                        loadEdit(item.doctor_id);
>>>>>>> beckhado
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    
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
    </div>
  );
}

export default ShowData;
