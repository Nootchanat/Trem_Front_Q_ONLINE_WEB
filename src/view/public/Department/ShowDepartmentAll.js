import React, { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../../src/style/departmentAll.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import T from "../../../image/T.png";
import H from "../../../image/H.png";
import S from "../../../image/S.png";
import K from "../../../image/K.png";




function ShowDepartmentAll({}) {
  return (
    <div className="w-full">
      <div className="w-full mb-4">
        <h4 className="title-content">แผนกในโรงพยาบาล</h4>
      </div>
      <div class="container5 p-3 my-3 ">
      <div className="row">
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={T}
            style={{ width: "100%", height: "70%" }}
          />
           <h5 className="title-content">แผนกทันตกรรม</h5>
          <div className="button-card">
          <Link to="/detaildental/1" className="btn btn-success mx-1">
            <div className="text-link1">ข้อมูลแผนก</div>
          </Link>
          </div>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={H}
            style={{ width: "100%", height: "70%" }}
          />
           <h5 className="title-content">แผนกหัวใจ</h5>
          <div className="button-card">
          <Link to="/detaildental/2" className="btn btn-success mx-1">
            <div className="text-link1">ข้อมูลแผนก</div>
          </Link>
          </div>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={K}
            style={{ width: "100%", height: "70%" }}
          />
           <h5 className="title-content">แผนกกุมารเวชกรรม</h5>
          <div className="button-card">
          <Link to="/detaildental/3" className="btn btn-success mx-1">
            <div className="text-link1">ข้อมูลแผนก</div>
          </Link>
          </div>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={S}
            style={{ width: "100%", height: "70%" }}
          />
           <h5 className="title-content">แผนก สูติ-นรีเวชกรรม</h5>
          <div className="button-card">
          <Link to="/detaildental/4" className="btn btn-success mx-1">
            <div className="text-link1">ข้อมูลแผนก</div>
          </Link>
          </div>
        </Card>
        
        
      </div>
      </div>
    </div>
  );
}

export default ShowDepartmentAll;
