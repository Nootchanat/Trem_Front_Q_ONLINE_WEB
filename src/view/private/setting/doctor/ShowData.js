import React, { useState, useEffect } from "react";
import { TextSelect } from "../../../../components/TextSelect";
import PageSize from "../../../../data/pageSize.json";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ShowData({  pagin, changePage, changePageSize }) {
  const navigate = useNavigate();
  const [searchDoctor, setSearchDoctor] = useState(""); // เพิ่มตัวแปร searchDoctor เพื่อเก็บค่าค้นหาแพทย์
  const [doctors, setDoctors] = useState([]);
 
  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const res = await axios.get("https://long-pear-hummingbird-kit.cyclic.app/apis/doctors");
        setDoctors(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllDoctors();
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.doctor_first_name.toLowerCase().includes(searchDoctor.toLowerCase())
  );

  const loadEdit = (id) => {
    navigate("/admin/doctor/form/" + id);
  };

  const removeEmp = (doctor_id) => {
    Swal.fire({
      title: "Confirm Delete",
      text: "Do you want to delete this doctor?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("https://long-pear-hummingbird-kit.cyclic.app/apis/doctors/" + doctor_id)
          .then((res) => {
            Swal.fire({
              title: "Deleted",
              text: "The doctor has been deleted.",
              icon: "success",
            });
            window.location.reload();
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: "An error occurred while deleting the doctor.",
              icon: "error",
            });
          });
      }
    });
  };
  

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
              navigate("/admin/doctor/create/form/");
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
              <th scope="col" style={{ width: "5%" }}>
                ลำดับ
              </th>
              <th scope="col" style={{ width: "10%" }}>
                คำนำหน้า
              </th>
              <th scope="col" style={{ width: "10%" }}>
                ชื่อ
              </th>
              <th scope="col" style={{ width: "10%" }}>
                นามสกุล
              </th>
              <th scope="col" style={{ width: "15%" }}>
                รูป
              </th>
              <th scope="col" style={{ width: "10%" }}>
                สถานะการใช้งาน
              </th>
              <th scope="col" style={{ width: "5%" }}>
                เบอร์โทร
              </th>
              <th scope="col" style={{ width: "10%" }}>
                แผนก
              </th>
              <th scope="col justify-content-center" style={{ width: "15%" }}>
                จัดการ
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className="text-center text-danger">-- ไม่พบข้อมูล --</div>
                </td>
              </tr>
            ) : (
              doctors.map((item, index) => (
                <tr key={item.doctor_id}>
                  <td>{(pagin.currentPage - 1) * pagin.pageSize + (index + 1)}</td>
                  <td>{item.prefix_name}</td>
                  <td>{item.doctor_first_name}</td>
                  <td>{item.doctor_last_name}</td>
                  <td>
                    <img className="img-hpt" src={item.doctor_image} />
                  </td>
                  <td>{item.doctor_status}</td>
                  <td>{item.doctor_phonenumber}</td>
                  <td>{item.department_name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning text-white mx-1 mt-1"
                      onClick={() => {
                        loadEdit(item.doctor_id);
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger text-white mx-1 mt-1"
                      onClick={() => {
                        removeEmp(item.doctor_id);
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
