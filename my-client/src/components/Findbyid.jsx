import { useState } from "react";

import axios from "axios";
import "../styles/Findbyid.css";

export function Findbyid() {
  const [id, setEmployeeid] = useState("");
  const [employee,setEmployee]=useState(null);
  
  const [message, setMessage] = useState("");
  
  

  async function findEmployee(e) {
    e.preventDefault();
    if (!id ) {
      setMessage("❗ Please fill in all fields.");
      return;
    }

          try {
        const response = await axios.get(`http://localhost:3001/api/employees/${id}`);
        setEmployee(response.data);
        setMessage("");
      } catch (err) {
        setEmployee(null);
        setMessage("Employee not found or error occurred.");
      }
  }

  
  

  return (
    <div className="form-container">
      <form  onSubmit={findEmployee}>
        <h1 className="form-title">Find the Employee</h1>

        <input
          type="text"
          placeholder="👨‍💼 Employee id"
          value={id}
          onChange={(e) => setEmployeeid(e.target.value)}
        />
        
        <button type="submit">🚀 Submit</button>


        {employee && (
          <div className="message-card">
            <p>Employee No: {employee.empNo}</p>
            <p>Name: {employee.empName}</p>
            <p>Salary: {employee.empSal}</p>
          </div>
        )}
        {message && <div className="error-message">{message}</div>}


      </form>
       

    </div>
  );
}
