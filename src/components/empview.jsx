import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmpView = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://employeedata-25a5b.web.app/cruddata/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="flex items-center justify-center p-10 ">
        <div className="container px-4 mx-auto lg:max-w-screen-lg">
          <div className="max-w-md p-6 mx-auto shadow-xxl rounded-[10px] ">
            <p>
              <strong>Name:</strong>
              {data.fname}
              {data.lname}
            </p>
            <p className="mt-3">
              <strong>Date Of Birth:</strong>
              {data.dob}
            </p>
            <p className="mt-3">
              <strong>Study:</strong>
              {data.study}
            </p>
            <p className="mt-3">
              <strong>Start Date:</strong>
              {data.startdate}
            </p>
            <p className="mt-3">
              <strong>End Date:</strong>
              {data.enddate}
            </p>
            <p className="mt-3">
              <strong>Description:</strong>
              {data.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmpView;
