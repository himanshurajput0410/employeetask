import React from "react";
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/registration";
import Employeelist from "./components/employeeList";
import EmpView from "./components/empview";
import EmpEdit from "./components/empedit";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/employeelist" element={<Employeelist />}></Route>
          <Route path="/view/:id" element={<EmpView />}></Route>
          <Route path="/edit/:id" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
