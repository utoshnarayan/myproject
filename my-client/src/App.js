import { DeleteEmployee } from "./components/DeleteEmployee.jsx";
import { Employee } from "./components/Employee.jsx";
import { Findbyid } from "./components/Findbyid.jsx";
import { Findemployee } from "./components/Findemployee.jsx";
import { UpdateEmployee } from "./components/UpdateEmployee.jsx";
import { NavLink, Route, Routes } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
    
      <nav>
        <NavLink to="/" end>Add Employee</NavLink>
        <NavLink to="/findemployee">Find All Employee</NavLink>
        <NavLink to="/findbyid">Find Employee By ID</NavLink>
        <NavLink to="/updateemployee">Update Employee</NavLink>
        <NavLink to="/deleteemployee">Delete Employee</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Employee/>} />
        <Route path="/findemployee" element={<Findemployee/>} />
        <Route path="/findbyid" element={<Findbyid />} />
        <Route path="/updateemployee" element={<UpdateEmployee />} />
        <Route path="/deleteemployee" element={<DeleteEmployee />} />
       
      </Routes>


        

    </div>
  );
}

export default App;
