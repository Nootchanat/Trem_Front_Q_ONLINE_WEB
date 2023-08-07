
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState,  Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Menu } from './Menu';
import { checkActive } from '../../helper/Check';
import { connect } from 'react-redux';
import { AUTHEN, USERINFO ,AUTHORITIES } from '../../actions/Authen';


function NavBar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);


  return (
    <header id="authorities">
      <Navbar collapseOnSelect expand="md" className="navbar px-4">
     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
        

            {!props.auth.id ? (
              <Fragment>
               
                <Link
                  to="#"
                  className={`nav-link ${checkActive(location, '/login') ? 'nav-active' : ''}`}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  เข้าสู่ระบบ
                </Link>
              </Fragment>
            ) : (
              <NavDropdown title={`คุณ ${props.auth.fullname}`} id="collasible-nav-dropdown">
                <div className="px-2">
                  <Link
                    to="#"
                    className="nav-link text-black"
                    onClick={() => {
                      localStorage.clear();
                      props.USERINFO();
                      navigate('/');
                    }}
                  >
                    ออกจากระบบ
                  </Link>
                </div>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    </header>
  );
}

const mapStateToProps = (state) => ({
  auth: state.Authentication,
});

const mapDispatchToProps = (dispatch) => {
  return {
    AUTHEN: (id, idCard, fullname, role) => dispatch(AUTHEN(id, idCard, fullname, role)),
    USERINFO: () => dispatch(USERINFO()),
    AUTHORITIES: (id,idCard,fullname,role) => dispatch(AUTHORITIES(id, idCard, fullname, role)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
