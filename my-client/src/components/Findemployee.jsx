import { useState } from "react";
import "../styles/Findemployee.css";
import axios from "axios";

export function Findemployee() {


  const [employees, setEmployees] = useState([]);
  

  

  
  async function findAll(e) {
    e.preventDefault();
    

    try {

      const response = await axios.get("https://employee-management-utosh.onrender.com/api/employees");
      setEmployees(response.data);
     
     
     
    } catch (err) {
     alert(err);
    }
  }

  return (
    <div className="form-container">
     
     <h1 className="form-title">Find All Employees</h1>
       
        <form onSubmit={findAll}>
           <button type="submit" >Get all records</button>
        </form>
      <div className="employee-table">
          <table>
            <thead>
              <tr>
                <th>Employee No</th>
                <th>Employee Name</th>
                <th>Employee Salary</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee._id}>
                  <td>{employee.empNo}</td>
                  <td>{employee.empName}</td>
                  <td>{employee.empSal}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>

    </div>
  );
}
