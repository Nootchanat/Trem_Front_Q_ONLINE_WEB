import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import LoginModal from '../../../components/Login/LoginModal';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get user ID from localStorage
    const storedUserData = localStorage.getItem('userData');
    const userId = storedUserData ? JSON.parse(storedUserData).data.users_id : null;
    
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://kind-red-centipede-cap.cyclic.app/apis/patients/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  return (

    <div className="w-full">
      <div className="d-flex justify-content-center">
        <h2 className="title-contentProfile">โปรไฟล์</h2>
      </div>

      <div className="card d-flex justify-content-center">
        <div className="containerProfile" style={{ width: '600px', height: '630px', background: '#f9f9f9', borderRadius: '10px', padding: '20px' }}>
          <div className="col-12">
            <div className="row">
              <h6 className="title-content1" style={{ textAlign: 'center', width: '100%' }}>ข้อมูลทั่วไป</h6>

              <div className="col-12 px-1 mt-2">
                <label className="label-content">เลขบัตรประชาชน :</label>
                <Typography variant="subtitle1" component="span" className="text-content" sx={{ fontWeight: 'bold' }}>
                  {userData?.data.id_card}
                </Typography>
              </div>

              <div className="col-6 px-1 mt-2">
                <label className="label-content">ชื่อเต็ม :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                  {userData?.data.prefix_name} {userData?.data.first_name} {userData?.data.last_name}
                </Typography>
              </div>
              <div className="col-6 px-1 mt-2">
                <label className="label-content">เพศ :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-4 px-1 mt-2">
                <label className="label-content">วันเดือนปีเกิด :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                  {userData?.data.birthday}
                </Typography>
              </div>
              <div className="col-4 px-1 mt-2">
                <label className="label-content">ส่วนสูง :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-4 px-1 mt-2">
                <label className="label-content">น้ำหนัก :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-12 px-1 mt-2">
                <label className="label-content">เบอร์โทร :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>

              <div className="col-12 px-1 mb-1 mt-3">
                <h6 className="title-content1" style={{ textAlign: 'center', width: '100%' }}>ข้อมูลสุขภาพ</h6>
              </div>
              <div className="col-6 px-1 mt-2">
                <label className="label-content">โรคประจำตัว :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-6 px-1 mt-2">
                <label className="label-content">ประวัติการแพ้ยา :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-12 px-1 mb-1 mt-3">
                <h6 className="title-content1" style={{ textAlign: 'center', width: '100%' }}>บุคคลที่ติดต่อได้</h6>
              </div>
              <div className="col-6 px-1 mt-2">
                <label className="label-content">ชื่อเต็ม :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}  {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-6 px-1 mt-2">
                <label className="label-content">เบอร์โทรผู้ติดต่อ :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-6 px-1 mt-2">
                <label className="label-content">ความสัมพันธ์ :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-12 px-1 mb-1 mt-3">
                <h6 className="title-content1" style={{ textAlign: 'center', width: '100%' }}>ข้อมูลที่อยู่</h6>
              </div>
              <div className="col-12 px-1 mt-2">
                <label className="label-content">ที่อยู่ :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-6 px-1 mt-2">
                <label className="label-content">ตำบล :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-6 px-1 mt-2">
                <label className="label-content">อำเภอ :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-6 px-1 mt-2">
                <label className="label-content">จังหวัด :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>
              <div className="col-6 px-1 mt-2">
                <label className="label-content">รหัสไปรษณีย์ :</label>
                <Typography variant="subtitle1" component="span" className="text-content">
                {userData?.data.gender}
                </Typography>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <button type="submit" className="btn btn-warning mx-1">
                แก้ไขโปรไฟล์
                </button>
                
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Profile;
