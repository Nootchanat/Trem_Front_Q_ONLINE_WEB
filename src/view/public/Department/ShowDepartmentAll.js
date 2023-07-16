import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../../src/style/departmentAll.css";
import Card from "react-bootstrap/Card";
import axios from "axios";

function ShowDepartmentAll() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "https://amused-ant-umbrella.cyclic.app/apis/departments"
        );
        console.log(response.data); // Check the response data
        setDepartments(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDepartments();
  }, []);

  console.log(departments); // Check the value of departments

  return (
    <div className="w-full">
      <div className="w-full mb-4">
        <h4 className="title-content">แผนกในโรงพยาบาล</h4>
      </div>
      <div className="container5 p-3 my-3">
        <div className="row">
          {departments.length > 0 ? (
            departments.map((department) => (
              <Card key={department.id} style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={department.department_image}
                  style={{ width: "100%", height: "70%" }}
                />
                <h5 className="title-content">{department.department_name}</h5>
                <div className="button-card">
                  <Link
                    to={`/detaildental/${department.id}`}
                    className="btn btn-success mx-1"
                  >
                    <div className="text-link1">ข้อมูลแผนก</div>
                  </Link>
                </div>
              </Card>
            ))
          ) : (
            <div>Loading ...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowDepartmentAll;
