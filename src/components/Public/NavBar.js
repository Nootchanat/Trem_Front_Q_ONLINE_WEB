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

  const handleLogout = () => {
    setIsDrawerOpen(false);

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
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');

        Swal.fire('ออกจากระบบสำเร็จ', '', 'success').then(() => {
          navigate('/');
        });
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

 
  const handleLogin = () => {
    navigate('/login');
    setShowLogin(true);
  };

  const handleRegister = () => {
    navigate('/register');
  };
  const handleNavigateToProfile = () => {
    window.location.href = '/Profile'; // นำทางไปยังหน้า Profile
    setIsDrawerOpen(false); // ปิดเมนูแฮมเบอร์เกอร์
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
                  onClick={handleLogin}
                >
                  <AccountCircleIcon />
                  <ListItemText primary="เข้าสู่ระบบ" />
                </IconButton>
                <LoginModal show={showLogin} setShow={setShowLogin} />
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
