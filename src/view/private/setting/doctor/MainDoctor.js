import React, { Fragment, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import ShowData from "./ShowData";
import { TextSelect } from "../../../../components/TextSelect";

function MainDoctor() {
  const [dataDepartment, setDataDepartment] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [searchDoctor, setSearchDoctor] = useState("");
  const [pagin, setPagin] = useState({
    totalRow: 1,
    pageSize: 10,
    currentPage: 1,
    totalPage: 1,
  });

  useEffect(() => {
   
  }, []);

  async function fetchDoctors(pageSize, currentPage, search) {
    try {
      const response = await axios.get("https://long-pear-hummingbird-kit.cyclic.app/apis/doctors", {
        params: {
          pageSize,
          currentPage,
          search,
        },
      });
      setDoctors(response.data);
      setPagin(response.pagin);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (values) => {
    setSearchDoctor(values.search);
  };

  return (
    <Fragment>
      <div className="w-full">
        <div className="d-flex justify-content-end">
          <nav aria-label="breadcrumb"></nav>
        </div>
        <div className="w-full mb-5">
          <h2 className="title-content">ข้อมูลรายชื่อแพทย์</h2>
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={{
            search: searchDoctor,
          }}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <label>ค้นหา</label>
                  <input
                    type="text"
                    className="form-input"
                    name="search"
                    value={values.search}
                    onChange={(e) => setFieldValue("search", e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full mt-5">
                <ShowData data={doctors} pagin={pagin} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}

export default MainDoctor;
