import { useState } from "react";
import "../styles/Employee.css";
import axios from "axios";

export function Employee() {
  const [employeeNo, setEmployeeNo] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeSalary, setEmployeeSalary] = useState("");
  const [message, setMessage] = useState("");
  
  

  async function addHandler(e) {
    e.preventDefault();
    if (!employeeNo || !employeeName || !employeeSalary) {
      setMessage("❗ Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/api/employees", {
        employeeNo,
        employeeName,
        employeeSalary,
      });
      alert(response.data.message);
    } catch (err) {
     alert(err);
    }
  }

  
  

 return (
  <div className="form-container">
    <div >
      <h1 className="form-title">🧾 Add Employee below </h1>
    </div>
    
    <form className="form-inputs" onSubmit={addHandler}>
      <input
        type="text"
        placeholder="👨‍💼 Employee No"
        value={employeeNo}
        onChange={(e) => setEmployeeNo(e.target.value)}
      />
      <input
        type="text"
        placeholder="🧑 Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <input
        type="number"
        placeholder="💰 Employee Salary"
        value={employeeSalary}
        onChange={(e) => setEmployeeSalary(e.target.value)}
      />

      <button type="submit">🚀 Submit</button>
    </form>

    {message && (
      <div className="message-container">
        <div className="message-card">
          <p>{message}</p>
        </div>
      </div>
    )}
  </div>
);
}
