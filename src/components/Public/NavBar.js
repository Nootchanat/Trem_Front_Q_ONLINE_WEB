import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Swal from 'sweetalert2';
import Logo from '../../image/logo.png';
import { useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../../components/Login/LoginModal';

const CustomAppBar = styled(AppBar)`
  background-color: #133C55;
  backdrop-filter: blur(100px);
  transition: background-color 0.5s ease;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

const LogoImg = styled('img')`
  width: 130px;
  @media (max-width: 600px) {
    width: 80px;
  }
  cursor: pointer;
`;

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const storedUserData = localStorage.getItem('userData');
  const userData = storedUserData ? JSON.parse(storedUserData) : null;
  const isDesktop = useMediaQuery('(min-width:600px)');
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  // เพิ่ม state สำหรับตรวจสอบสถานะการล็อกอิน
  const [isLoggedIn, setIsLoggedIn] = useState(true,false);

  // ฟังก์ชันสำหรับตรวจสอบล็อกอิน
  const checkLogin = () => {
    // เช่นในกรณีที่คุณมีตัวแปรใน localStorage หากมีค่าแสดงว่าผู้ใช้ล็อกอินแล้ว
    // ให้นำตัวแปรนี้มาใช้ตรวจสอบเพื่อกำหนดค่า isLoggedIn ให้เป็น true
    const storedUserData = localStorage.getItem("userData");
    const isLoggedIn = storedUserData ? true : false;
    setIsLoggedIn(isLoggedIn);
  };
 
  const handleLogout = () => {
    Swal.fire({
      title: 'ออกจากระบบ',
      text: 'คุณแน่ใจที่ต้องการออกจากระบบหรือไม่',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ใช่, ฉันต้องการออกจากระบบ',
      cancelButtonText: 'ยกเลิก',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'กำลังออกจากระบบ...',
          showConfirmButton: false,
          allowOutsideClick: false,
          icon: 'info',
        });
  
        // หน่วงเวลา 3 วินาที (3000 มิลลิวินาที) ก่อนที่จะทำการออกจากระบบ
        setTimeout(() => {
          // ลบข้อมูลที่เก็บใน localStorage
          localStorage.removeItem('userData');
  
          // เปลี่ยนสถานะการเข้าสู่ระบบให้เป็น false
          setIsLoggedIn(false);
  
          // แสดง Pop-up แจ้งเมื่อออกจากระบบสำเร็จ
          Swal.fire({
            title: 'ออกจากระบบสำเร็จ',
            icon: 'success',
          }).then(() => {
            // ทำการนำผู้ใช้ไปยังหน้าเข้าสู่ระบบหลังจากออกจากระบบ
            // ในที่นี้คือการ refresh หน้า
            window.location.reload();
          });
        }, 3000); // หน่วงเวลา 3 วินาที
      }
    });
  };
  

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNavigateToIndex = () => {
    navigate('/');
    setIsDrawerOpen(false);
  };



  const handleRegister = () => {
    navigate('/register');
  };
  const handleNavigateToProfile = () => {
    window.location.href = '/Profile'; // นำทางไปยังหน้า Profile
    setIsDrawerOpen(false); // ปิดเมนูแฮมเบอร์เกอร์
  };
  
  const handleLoginPopup = () => {
    setShowLogin(true);
  };


  const renderMenuItems = () => {
    return (
      <List sx={{ paddingTop: '150px' }}>
        <ListItem button onClick={handleNavigateToIndex}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="หน้าแรก" />
        </ListItem>
        <ListItem button onClick={handleNavigateToProfile}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="โปรไฟล์" />
        </ListItem>
      </List>
    );
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <header id="public">
        <CustomAppBar>
          <Toolbar>
            <LogoImg src={Logo} alt="โลโก้" onClick={handleLogoClick} style={{ marginRight: '16px' }} />
            <Link to="/" className="logo-title">
              โรงพยาบาลสมเด็จพระสังฆราช องค์ที่ ๑๗
            </Link>
            {isDesktop && userData && (
              <Typography variant="body1" component="div" sx={{ marginLeft: '750px' }}>
                Welcome {userData?.data.fullname}
              </Typography>
            )}
            {!userData && (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleRegister}
                  sx={{ marginLeft: 'auto' }}
                >
                  <ExitToAppIcon />
                  <ListItemText primary="สมัครสมาชิก" />
                </IconButton>
                <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleLoginPopup}
      >
        <AccountCircleIcon />
        <ListItemText primary="เข้าสู่ระบบ" />
      </IconButton>

      {showLogin && (
        <LoginModal show={showLogin} setShow={setShowLogin} />
      )}
                
              </>
            )}
            {userData && (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleLogout}
                  sx={{ marginLeft: 'auto' }}
                >
                  <ExitToAppIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  sx={{ marginLeft: '16px' }}
                >
                  <MenuIcon />
                </IconButton>
              </>
            )}
          </Toolbar>
        </CustomAppBar>
        {userData && (
          <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
            {renderMenuItems()}
          </Drawer>
        )}
      </header>
    </>
  );
};

export default Navbar;
