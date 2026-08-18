import logo from './logo.svg';
import './App.css';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import SearchEmployee from './SearchEmployee';
import { useState } from 'react';
function App() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Employee Management System</h1>

      <EmployeeForm addEmployee={addEmployee}/>

      <SearchEmployee search={search} setSearch={setSearch}/>

      <h3>Total Employees : {filteredEmployees.length}</h3>

      <EmployeeList
          employees={filteredEmployees}
          deleteEmployee={deleteEmployee}
      />

    </div>
  );
}

export default App;



