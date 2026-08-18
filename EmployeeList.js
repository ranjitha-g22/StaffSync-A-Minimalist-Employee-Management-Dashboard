import React from "react";

function EmployeeList({ employees, deleteEmployee }) {

  if(employees.length===0)
      return <h3>No Employees Found</h3>;

  return (

    <table>

      <thead>

      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Department</th>
        <th>Action</th>
      </tr>

      </thead>

      <tbody>

      {
        employees.map(emp=>(
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>
              <button onClick={()=>deleteEmployee(emp.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))
      }

      </tbody>

    </table>

  );

}
export default EmployeeList