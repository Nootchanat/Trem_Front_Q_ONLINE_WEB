import React, { useRef, useState, useEffect } from "react";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
// import { useReactToPrint } from 'react-to-print';
import Swal from "sweetalert2";

import axios from "axios";

import Spinner from "react-bootstrap/Spinner";

function ShowData() {
  const navigate = useNavigate();
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [queueList, setQueueList] = useState([]);
  const [selectedTable, setSelectedTable] = useState("queue");
  const [appointmentList, setAppointmentList] = useState([]);
  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedQueueData, setSelectedQueueData] = useState(null);
  const [queue, setQueue] = useState({});
  console.log(queue);

  useEffect(() => {
    // ตรวจสอบสถานะการล็อกอินเมื่อโหลดหน้า Profile
    const storedUserData = localStorage.getItem("userData");
    const storedIsLoggedIn = storedUserData ? true : false;
    setIsLoggedIn(storedIsLoggedIn);

    if (storedIsLoggedIn) {
      // ถ้าล็อกอินแล้ว ดึงข้อมูลผู้ใช้จาก localStorage
      const userDataFromLocalStorage = JSON.parse(storedUserData);
      setUserData(userDataFromLocalStorage);
      axios
        .get(
          `https://lazy-gray-shrimp-suit.cyclic.app/apis/patients?id_card=${userDataFromLocalStorage.data.id_card}`
        )
        .then((response) => {
          console.log("Response data:", response.data);

          const matchedUser = response.data.find(
            (user) => user.id_card === userDataFromLocalStorage.data.id_card
          );

          if (matchedUser) {
            const { users_id, prefix_name, first_name, last_name, id_card } =
              matchedUser;
            // อัปเดตข้อมูลใน state queue
            setQueue((prevQueue) => ({
              ...prevQueue,
              users_id: users_id,
            }));

            // อัปเดตข้อมูลใน state userData
            setUserData({
              ...userData,
              users_id: users_id,
              prefix_name,
              first_name,
              last_name,
              id_card,
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  useEffect(() => {
    const fetchUserQueue = async () => {
      try {
        if (userData && userData.users_id) {
          const response = await axios.get(
            "https://lazy-gray-shrimp-suit.cyclic.app/apis/queue",
            {
              params: {
                users_id: userData.users_id,
              },
            }
          );
          setQueueList(response.data);
        }
      } catch (error) {
        console.error("Error fetching user queue:", error);
      }
    };

    fetchUserQueue();
  }, [userData]);

  // สร้างฟังก์ชันเพื่อกำหนดคิวที่เลือกใน Modal แก้ไข
  const handleEditClick = (queue) => {
    setSelectedQueueData(queue); // กำหนดค่ารายการคิวที่ถูกเลือกแก้ไข
    setEditModalShow(true); // เปิด Modal แก้ไข
  };

  const handleEditSubmit = async (values) => {
    try {
      // ตรวจสอบความถูกต้องของข้อมูลที่ผู้ใช้กรอกเข้ามา

      // อัปเดตข้อมูลที่ต้องการแก้ไขใน API
      const updatedData = {
        ...selectedQueueData,
        symptom: values.symptom,
        department_id: values.department_id,
        department_name: values.department_name,
        queue_date: values.queue_date,
      };

      // ส่งค่าไปยัง API สำหรับการแก้ไขคิว
      await axios.put(
        `https://lazy-gray-shrimp-suit.cyclic.app/apis/queue/${selectedQueueData.queue_id}`,
        updatedData
      );

      // อัปเดตรายการคิวใน state หลังจากแก้ไขเรียบร้อย
      setQueueList((prevQueueList) =>
        prevQueueList.map((queue) =>
          queue.queue_id === selectedQueueData.queue_id ? updatedData : queue
        )
      );

      // ปิด Modal แก้ไข
      setEditModalShow(false);

      // แสดงตัวแจ้งเตือนการแก้ไขสำเร็จ
      Swal.fire({
        icon: "success",
        title: "แก้ไขคิวสำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error editing queue:", error);
      // แสดงตัวแจ้งเตือนเมื่อการแก้ไขไม่สำเร็จ
      Swal.fire({
        icon: "error",
        title: "การแก้ไขคิวไม่สำเร็จ",
        text: "เกิดข้อผิดพลาดในการแก้ไขคิว กรุณาลองใหม่อีกครั้ง",
        showConfirmButton: true,
      });
    }
  };
  const formatDateToAPI = (dateString) => {
    const [day, month, year] = dateString.split("-");
    return `${year}-${month}-${day}`;
  };
  const removeQueue = async (users_id, queue_date) => {
    Swal.fire({
      title: "คุณแน่ใจที่จะยกเลิกการจองคิว ?",
      text: "คุณต้องการยกเลิกการจองคิวนี้ใช่หรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ใช่, ยกเลิกคิว",
      cancelButtonText: "ไม่, ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const formattedDate = formatDateToAPI(queue_date);
          const response = await axios.delete(
            `https://lazy-gray-shrimp-suit.cyclic.app/apis/queue/${users_id}/${formattedDate}`
          );

          if (response.data.affectedRows > 0) {
            // หากลบสำเร็จ ทำการอัปเดตข้อมูลใหม่ด้วยการอัปเดต state หรือที่เก็บข้อมูลที่ใช้ในการแสดงผล
            const updatedQueueList = queueList.filter(
              (queue) =>
                queue.users_id !== users_id || queue.queue_date !== queue_date
            );
            setQueueList(updatedQueueList); // อัปเดต state ด้วยข้อมูลใหม่

            Swal.fire({
              title: "ไม่พบคิวที่ต้องการยกเลิก",
              text: "ไม่พบคิวที่ตรงกับข้อมูลที่ระบุ",
              icon: "error",
            });
          } else {
            Swal.fire({
              title: "ยกเลิกการจองคิวสำเร็จ",
              text: "คิวถูกยกเลิกแล้ว",
              icon: "success",
              timer: 1500,
            }).then(() => {
              window.location.reload(); // รีโหลดหน้าใหม่หลังจากที่ยืนยันการยกเลิกคิวสำเร็จ
            });
          }
        } catch (error) {
          console.error("Error removing queue:", error);
          Swal.fire({
            title: "เกิดข้อผิดพลาด",
            text: "เกิดข้อผิดพลาดในการยกเลิกคิว",
            icon: "error",
          });
        }
      }
    });
  };

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let day = dateObj.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <div className="overflow-auto">
        <table className="table">
          <thead>
            <tr className="table-success">
              <th scope="col" style={{ width: "5%", textAlign: "center" }}>
                ลำดับ
              </th>
              <th scope="col" style={{ width: "15%", textAlign: "center" }}>
                อาการเบื้องต้น
              </th>
              <th scope="col" style={{ width: "10%", textAlign: "center" }}>
                แผนก
              </th>
              <th scope="col" style={{ width: "10%", textAlign: "center" }}>
                วันที่เข้ารับการรักษา
              </th>
              <th scope="col" style={{ width: "15%", textAlign: "center" }}>
                วันที่จอง
              </th>

              <th scope="col" style={{ width: "10%", textAlign: "center" }}>
                สถานะ
              </th>
              <th scope="col" style={{ width: "10%", textAlign: "center" }}>
                จัดการ
              </th>
            </tr>
          </thead>

          <tbody>
            {queueList
              .filter((queue) => queue.users_id === userData?.users_id)
              .slice(0, 20) // เลือกแสดงเฉพาะ 10 รายการแรก
              .map((queue, index) => (
                <tr key={queue.id}>
                  <td style={{ textAlign: "center" }}>{index + 1}</td>{" "}
                  {/* แสดงลำดับเริ่มจาก 1 */}
                  <td style={{ textAlign: "center" }}>{queue.symptom}</td>
                  <td style={{ textAlign: "center" }}>
                    {queue.department_name}
                  </td>
                  <td style={{ textAlign: "center" }}>{queue.queue_date}</td>
                  <td style={{ textAlign: "center" }}>{queue.create_at}</td>
                  <td style={{ textAlign: "center" }}>
                    {queue.queue_status_name}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      type="button"
                      className="btn btn-warning text-white mx-1 mt-1"
                      onClick={() => handleEditClick(queue)} // เรียกใช้ฟังก์ชันเมื่อคลิกแก้ไข
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger text-white mx-1 mt-1"
                      onClick={() => {
                        removeQueue(queue.users_id, queue.queue_date);
                      }}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>

          <Modal
            show={editModalShow}
            onHide={() => setEditModalShow(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title
                style={{ width: "100%", textAlign: "center", fontSize: "25px" }}
              >
                แก้ไขจองคิว
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik
                initialValues={{
                  symptom: selectedQueueData ? selectedQueueData.symptom : "",
                  department_id: selectedQueueData
                    ? selectedQueueData.department_id
                    : "",
                  queue_date: selectedQueueData
                    ? selectedQueueData.queue_date
                    : "",
                }}
                onSubmit={handleEditSubmit}
              >
                {({ handleSubmit, handleChange, values }) => (
                  <Form onSubmit={handleSubmit}>
                    {isLoggedIn && userData && (
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 px-1 mt-1">
                            <label
                              className="label-content"
                              style={{
                                textTransform: "uppercase",
                                fontSize: "18px",
                              }}
                            >
                              เลขบัตรประชาชน :{" "}
                            </label>
                            <label
                              style={{
                                textTransform: "uppercase",
                                fontSize: "18px",
                              }}
                            >
                              {" "}
                              {userData.id_card}
                            </label>
                          </div>
                          <div className="col-12 px-1 mt-3">
                            <label
                              className="label-content"
                              style={{
                                textTransform: "uppercase",
                                fontSize: "18px",
                              }}
                            >
                              ชื่อ :{" "}
                            </label>
                            <label
                              style={{
                                textTransform: "uppercase",
                                fontSize: "18px",
                              }}
                            >
                              {" "}
                              {userData.prefix_name} {userData.first_name}{" "}
                              {userData.last_name}
                            </label>
                          </div>

                          <Form.Group className="col-12 px-1 mt-3">
                            <Form.Label
                              className="label-content"
                              style={{
                                textTransform: "uppercase",
                                fontSize: "18px",
                              }}
                            >
                              อาการเบื้องต้น
                            </Form.Label>
                            <label className="red">*</label>
                            <Form.Control
                              name="symptom" // ต้องตรงกับชื่อใน state queue
                              type="text"
                              placeholder="กรุณาระบุอาการเบื้องต้น"
                              value={values.symptom}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <small className="red">
                            *
                            แก้ไขเฉพาะกรณีอาการเบื้องต้นที่ไม่ชัดเจนหรือพิมพ์ผิดเท่านั้น
                          </small>
                          <div className="col-6 px-1 mt-3">
                            <label
                              style={{
                                textTransform: "uppercase",
                                fontSize: "18px",
                              }}
                            >
                              แผนก
                            </label>
                            <label className="red">*</label>

                            <select
                              class="form-select"
                              name="department_id"
                              style={{
                                textTransform: "uppercase",
                                fontSize: "18px",
                              }}
                              value={values.department_id}
                              disabled={true}
                              aria-label="Default select example"
                            >
                              <option selected>เลือกแผนก</option>
                              <option value="1">ทันตกรรม</option>
                              <option value="2">กุมารเวช</option>
                              <option value="3">ทั่วไป</option>
                              <option value="4">สูติ-นรีเวช</option>
                              <option value="6">ศัลยกรรม</option>
                              <option value="7">หัวใจ</option>
                              <option value="8">ผิวหนัง</option>
                              <option value="23">จักษุ</option>
                              <option value="26">ความงาม</option>
                            </select>
                            {/* <ErrorMessage
                            component="div"
                            name="department_id"
                            className="text-invalid"
                          /> */}
                          </div>

                          <div className="col-6 px-1 mt-3">
                            <label
                              style={{
                                textTransform: "uppercase",
                                fontSize: "18px",
                              }}
                            >
                              วันที่เข้ารับการรักษา
                            </label>
                            <label className="red">*</label>
                            <input
                              name="queue_date"
                              type="date"
                              style={{
                                textTransform: "uppercase",
                                fontSize: "18px",
                              }}
                              className="form-input"
                              value={
                                values.queue_date
                                  ? formatDate(values.queue_date)
                                  : ""
                              }
                              readOnly={true}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
              <small className="red">
                * หากผู้ป่วยเลือกแผนกผิดหรือจองคิววันที่เข้ารับการรักษาผิด
                จะต้องยกเลิกการจองคิวเดิมและจองคิวใหม่เท่านั้น
              </small>
            </Modal.Body>

            <Modal.Footer>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleEditSubmit}
              >
                บันทึกการแก้ไข
              </button>
            </Modal.Footer>
          </Modal>
        </table>
      </div>
    </div>
  );
}

export default ShowData;
