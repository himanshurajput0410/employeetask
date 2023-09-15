import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";
import Dots from "../assets/3-dots.svg";
import Delete from "../assets/delete.svg";
import Edit from "../assets/edit.svg";
import View from "../assets/view.svg";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://employeedata-25a5b.web.app/cruddata")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      axios
        .delete("https://employeedata-25a5b.web.app/cruddata/" + id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <section className="container px-4 py-10 mx-auto xl:max-w-screen-xl">
        <h1 className="text-left text-[20px] lg:text-45px text-dark-blue">
          Employee List
        </h1>
        <div className="w-full px-10 py-12 bg-white mt-11 rounded-35px shadow-xxl border-[#D5D5D5] border employeelist ">
          <table className="w-full text-left table-auto">
            <thead className="text-base  uppercase border-[#D5D5D5] border-b ">
              <tr>
                <th scope="col" className="w-8 px-4 py-4">
                  Id
                </th>
                <th scope="col" className="w-48 px-4 py-4">
                  Name
                </th>
                <th scope="col" className="px-4 py-4">
                  DOB
                </th>
                <th scope="col" className="px-4 py-4">
                  Study
                </th>
                <th scope="col" className="px-4 py-4">
                  Start Date
                </th>
                <th scope="col" className="px-4 py-4">
                  End Date
                </th>
                <th scope="col" className="px-4 py-4 w-52">
                  Description
                </th>
                <th className="px-4 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr className="bg-white border-b border-[#D5D5D5]  ">
                    <td className="px-4 py-4 text-base">{item.id}</td>
                    <td className="px-4 py-4 text-base ">
                      {item.fname}
                      {""} {item.lname}
                    </td>
                    <td className="px-4 py-4 text-base">{item.dob}</td>
                    <td className="px-4 py-4 text-base">{item.study}</td>
                    <td className="px-4 py-4 text-base">{item.startdate}</td>
                    <td className="px-4 py-4 text-base">{item.enddate}</td>
                    <td className="px-4 py-4 text-base">{item.description}</td>
                    <td className="px-4 py-4 text-base">
                      <div className="relative flex items-center justify-center group w-fit">
                        <img className="w-1" src={Dots} alt="dots" title="" />
                        <div className="absolute flex-col -right-10 bottom-0 items-center group-hover:flex hidden justify-center text-center rounded-[6px] border border-[#F4F4F4] w-20  bg-white text-gray-600 !text-[10px] p-0">
                          <div className="text-[10px] py-2 px-3 border-b   border-[#F4F4F4] r ">
                            <Link
                              to={`/view/${item.id}`}
                              title=" View"
                              className="flex items-center justify-center gap-1 "
                            >
                              <img
                                className="w-2 h-2"
                                src={View}
                                alt="dots"
                                title=""
                              />
                              <span className="text-[10px]"> View</span>
                            </Link>
                          </div>
                          <div className="text-[10px] py-2 px-3 border-b border-[#F4F4F4]">
                            <Link
                              to={`/edit/${item.id}`}
                              title="Edit"
                              className="flex items-center justify-center gap-1 "
                            >
                              <img className="w-2 h-2" src={Edit} alt="edit" />
                              <span className="text-[10px]">Edit</span>
                            </Link>
                          </div>
                          <div className="text-[10px] py-2 px-3 border-b  border-[#F4F4F4]">
                            <button
                              onClick={(e) => handleDelete(item.id)}
                              title="Delete"
                              className="flex items-center justify-center gap-1 "
                            >
                              <img
                                className="w-2 h-2"
                                src={Delete}
                                alt="dots"
                                title=""
                              />
                              <span className="text-[10px]">Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default EmployeeList;
