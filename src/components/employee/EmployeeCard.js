import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employee, handleDeleteEmployee }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-name">{employee.name}</span></h3>
                <div className="employee__location">{employee.location}</div>
                <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Remove Employee</button>
            </div>
        </div>
    )
}
    
  
