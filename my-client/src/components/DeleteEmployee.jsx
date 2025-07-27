import { useState } from "react";

import axios from "axios";


export function DeleteEmployee() {
  const [id, setEmployeeid] = useState("");
  const [employee,setEmployee]=useState(null);
  
  const [message, setMessage] = useState("");
  
  

  async function DeleteEmp(e) {
    e.preventDefault();
    if (!id ) {
      setMessage("❗ Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:3001/api/employees/${id}`);
      alert("Employee deleted successfully");
       
      setMessage("");
    } catch (err) {
        setEmployee(null);
        alert("Employee not found or error occurred.");
      }
  }

  
  

  return (
    <div className="form-container">
      <form  onSubmit={DeleteEmp}>
        <h1 className="form-title">Delete Employee</h1>
        <br />

        <input
          type="text"
          placeholder="👨‍💼 Employee id"
          value={id}
          onChange={(e) => setEmployeeid(e.target.value)}
        />
        
        <button type="submit">🚀 Submit</button>




      </form>
       

    </div>
  );
}
