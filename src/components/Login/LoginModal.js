import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  margin: 0.5rem;
`;
const LoginModal = (props) => {
  const [id_card, setIdCard] = useState("");
  const [password, setPassword] = useState("");
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://puce-enchanting-salmon.cyclic.app/apis/login",
        {
          id_card,
          password,
        }
      );

      if (response.data && response.data.success) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(response.data));

        Swal.fire({
          title: "เข้าสู่ระบบสำเร็จ",
          text: "ยินดีต้อนรับ!",
          icon: "success",
          showConfirmButton: true,
          timer: 3000,
        }).then(() => {
          window.location.href = "/";
        });
      } else {
        Swal.fire("รหัสผ่านไม่ถูกต้อง", "รหัสของคุณไม่ถูกต้อง", "error");
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        Swal.fire("รหัสผ่านไม่ถูกต้อง", "รหัสของคุณไม่ถูกต้อง", "error");
      } else {
        Swal.fire("เกิดข้อผิดพลาด", "ไม่สามารถเข้าสู่ระบบได้ในขณะนี้", "error");
      }
    }
    // Handle login logic here
    console.log(id_card, password);
    props.setShow(false);
  };

  const handleForgetPassword = () => {
    setShowResetPasswordModal(true);
  };

  const handleCloseResetPasswordModal = () => {
    setShowResetPasswordModal(false);
  };

  const handleResetPassword = () => {
    // Handle reset password logic here
    console.log("Reset password");
    setShowResetPasswordModal(false); // Close the reset password modal
  };

  return (
    <>
      <Modal show={props.show} onHide={() => props.setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ width: "100%", textAlign: "center" }}>
            เข้าสู่ระบบ
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>รหัสประจำตัวประชาชน</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ID number"
                value={id_card}
                onChange={(e) => setIdCard(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>รหัสผ่าน</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <a
              href="#"
              onClick={handleForgetPassword}
              style={{
                float: "left",
                color: "blue",
                textDecoration: "underline",
                fontSize: "17px",
              }}
            >
              ลืมรหัสผ่าน
            </a>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            เข้าสู่ระบบ
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showResetPasswordModal}
        onHide={handleCloseResetPasswordModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ width: "100%", textAlign: "center" }}>
            รีเซ็ตรหัสผ่าน
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleResetPassword}
            >
              ส่งข้อความสำหรับรีเซ็ตรหัสผ่าน
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
